export function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}

function assignKey(to, from, key) {
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

export function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
                assignKey(to, from, symbols[i]);
            }
        }
    }
    return to;
}

export function getPlainObject(vueObject) {
    return JSON.parse(JSON.stringify(vueObject))
}

export function NumberFormat(value, format) {
    if (!$.isNumeric(value)) {
        return value || "";
    }
    var dp = typeof format == "number" ? format : 0;
    return Number(value).toFixed(dp);
}

export function PercentFormat(value, f) {
    if (!$.isNumeric(f)) {
        f = 2;
    }
    f = f || 2;
    var v = NumberFormat(value * 100, f);
    if (v == "") return ""
    return v + "%";
}

export function DateFormat(value, format) {
    if (!value) {
        return "";
    }
    format = format || "yyyy-MM-dd";
    if (typeof value == "number") {
        return new Date(value * 1000).FormatString(format);
    }
    return value;
}

export function ShortTime(value) {
    if (value && typeof value == "number") return new Date(value * 1000).ShortTime();
    else if (value == 0) return "";
    else return value;
}

export function TimeSpan(value) {
    if (value && typeof value == "number") {
        if (value < 100) return value + "秒";
        if (value < 6000) return NumberFormat(value / 60, 0) + "分钟";
        if (value < 360000) return NumberFormat(value / 3600, 1) + "小时";
        if (value < 8640000) return NumberFormat(value / 86400, 1) + "天";
        else return NumberFormat(value / 86400, 0) + "天";
    } else if (value == 0) return "";
    else return value;
}

export function colwidth(str, minwidth) {
    minwidth = minwidth || 80;
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return len * 10 < minwidth ? minwidth : len * 10;
}

var Prefix = '/scada/crud';
$.po = function (url, data, opts) {
    var signature = HD.Cookie.Get("signature") || "";
    if (signature) signature = JSON.parse(signature);
    var _opts = {
        type: 'POST',
        headers: {
            'Authorization': signature ? signature.access_token : '',
        },
        data: JSON.stringify(data),
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    };
    return $.ajax($.extend({}, _opts, opts || {}));
}

function co(func) {

    var self = this;

    return $.Deferred(function (def) {
        return func.done(function (rep) {
            if (rep.Code == 0) {
                return def.resolve(rep.Response);
            } else {
                window.App.$message.error(rep.Message);
                return def.reject(rep.Response);
            }
        }).fail(function (rep) {
            if (window.App && window.App.$message) {
                window.App.$message.error(rep);
            }
            return def.reject(rep);
        });
    });
}

export function CRUD(model, _prefix, query, key) {

    var pre = _prefix || Prefix;

    if (pre.length > 0 && pre[0] != "/") {
        pre = "/" + pre
    }

    pre = pre.replace(/\/\//g, "/")

    var qurl = query != null ? pre + "/" + query + "/query.json" : pre + "/" + model + "/query.json";
    pre = pre + "/" + model;
    key = key || "_id";
    return {
        query: function (params, opts) {
            var url = this.url;
            return co($.po(url, params || {}, opts))
        },
        insert: function (record) {
            return co($.po(pre + "/insert.json", record))
        },
        update: function (record) {
            return co($.po(pre + "/update.json", record))
        },
        save: function (record) {
            if (record[key]) {
                return co($.po(pre + "/update.json", record));
            } else {
                return co($.po(pre + "/insert.json", record));
            }
        },
        deletes: function (ids) {
            return co($.po(pre + "/deletes.json", {
                '_id': ids
            }))
        },
        delete: function (record) {
            return co($.po(pre + "/delete.json", record))
        },
        get: function (id) {
            return co($.po(pre + "/get.json", id))
        },
        url: qurl,
        post: function (m, record) {
            return co($.po(pre + "/" + m + ".json", record))
        },
        po: function (url, record) {
            return co($.po(url, record))
        },
        key: key
    }
}

export function KGLFORMAT(value, unit) {
    var Rtn = value;
    try {
        if (!!!unit) { //如果单位是空
            Rtn = value;
        } else if (unit.indexOf("*") == 0 && unit.lastIndexOf("#") == unit.length - 1) { //单位是*开头，#结尾
            var c = unit.split("#");
            for (var i = 0; i < c.length; i++) {
                if (c[i] && c[i].indexOf("*" + value.toString() + ":") >= 0) {
                    Rtn = c[i].split(":")[1];
                }
            }
        } else if (unit.indexOf("@") == 0 && unit.lastIndexOf("$") == unit.length - 1) { //单位是@开头，$结尾
            var vlst = unit.replace("@", "").replace("$", "").split("|");
            if (value == 0) {
                Rtn = vlst[0];
            } else {
                var nv = value.toString(2);
                var rts = []
                for (i = 0; i < nv.length; i++) {
                    var v = nv.charAt(nv.length - 1 - i);
                    if (v == "1") {
                        rts.push(vlst[i + 1]);
                    }
                }
                Rtn = rts.join(",")
            }
        }
    } catch (error) {
        console.log(error);
    }

    return Rtn
}


export function KGLArray(unit) {
    var RtnArr = {};
    try {
        if (!!!unit) { //如果单位是空
            return RtnArr;
        } else if (unit.indexOf("*") == 0 && unit.lastIndexOf("#") == unit.length - 1) { //单位是*开头，#结尾
            var c = unit.split("#");
            for (var i = 0; i < c.length - 1; i++) {
                let ta = c[i].replace("*", "").split(":")
                RtnArr[ta[0]] = ta[1]
            }
        } else if (unit.indexOf("@") == 0 && unit.lastIndexOf("$") == unit.length - 1) { //单位是@开头，$结尾
            var vlst = unit.replace("@", "").replace("$", "").split("|");
            for (let i = 0; i < vlst.length; i++) {
                RtnArr[i] = vlst[i]
            }
        }
    } catch (error) {
        console.log(error);
    }
    return RtnArr
}
window.OmitFormatter = function (V) {
    var width = this.width || 100;
    return StringOmit(V, width);
}

window.StringOmit = function (V, width) {
    if (!V) V = "";
    if (typeof V != "string") {
        V = V.toString();
    }
    var old = V;
    while (V.VisualLength() > width) {
        V = V.substring(0, V.length - 1);
    }
    if (V != old) {
        V = V + "...";
        return "<p title='" + old + "'>" + V + "</p>";
    } else {
        return V;
    }
}

window.StringOmitStr = function (V, width) {
    if (!V) V = "";
    if (typeof V != "string") {
        V = V.toString();
    }
    var old = V;
    while (V.VisualLength() > width) {
        V = V.substring(0, V.length - 1);
    }
    if (V != old) {
        V = V + "...";
    }
    return V;
}

/**
* 扩展startsWith方法
* @param str
* @return
*/
String.prototype.startsWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length) return false;
    if (this.substr(0, str.length) == str) {
        return true;
    }
    else {
        return false;
    }
};
//字符串去除两端空白字符
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
//字符串去除左侧空白字符
String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
};
//字符串去除右侧空白字符
String.prototype.RTrim = function () {
    return this.replace(/(\s*$)/g, "");
};
//字符串去除所有空白字符
String.prototype.ClearSpace = function () {
    return this.replace(/\s/g, "");
};
//字符串拆分，如果字符串为空，返回空数组
String.prototype.Split = function (Separator) {
    var Result = [];
    if (this.length > 0) {
        Result = this.split(Separator);
    }
    return Result;
};
//字符串长度（中文*2）
String.prototype.Length = function () {
    var Arr = this.match(/[^\x00-\xff]/ig);
    return this.length + (Arr == null ? 0 : Arr.length);
};
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
String.prototype.LeftPad = function (n, p) {
    var num = this;
    var len = num.toString().length;
    while (len < n) {
        num = p + num;
        len++;
    }
    return num;
};
//实际长度
String.prototype.VisualLength = function () {
    var obj = $("#visual-length");
    if (obj.length == 0) {
        obj = $("<span id='visual-length' style='visibility:hidden;'></span>");
        obj.appendTo($("body"));
    }
    obj.text(this);
    return obj[0].offsetWidth;
}
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

String.prototype.PadLeft = function (totalWidth, paddingChar) {
    if (paddingChar != null) {
        return this.PadHelper(totalWidth, paddingChar, false);
    } else {
        return this.PadHelper(totalWidth, ' ', false);
    }
}
String.prototype.PadRight = function (totalWidth, paddingChar) {
    if (paddingChar != null) {
        return this.PadHelper(totalWidth, paddingChar, true);
    } else {
        return this.PadHelper(totalWidth, ' ', true);
    }

}
String.prototype.PadHelper = function (totalWidth, paddingChar, isRightPadded) {

    if (this.length < totalWidth) {
        var paddingString = new String();
        for (var i = 1; i <= (totalWidth - this.length); i++) {
            paddingString += paddingChar;
        }

        if (isRightPadded) {
            return (this + paddingString);
        } else {
            return (paddingString + this);
        }
    } else {
        return this;
    }
}

/*
* 日期格式化日期字符串转时间戳
* Format:时间格式
*/
String.prototype.GetTime = function (format) {
    if ((format || "").length == 0) {
        format = "yyyy-MM-dd HH:mm:ss";
    }

    var dp = { y: 0, M: 0, d: 1, H: 0, m: 0, s: 0 },
        str = this.replace(/[^yMdHms0-9]+/g, ",").split(",");
    format = format.replace(/[^yMdHms0-9]+/g, ",").split(",");

    for (var i = 0; i < format.length; i++) {
        if (format[i].indexOf("y") > -1) {
            if (format[i].length == 2) {
                dp.y = parseInt(str[i] || 0, 10) + parseInt(new Date().getFullYear() / 100, 10) * 100;
            } else {
                dp.y = parseInt(str[i] || 0, 10);
            }
        }
        if (format[i].indexOf("M") > -1) {
            dp.M = parseInt(str[i] || 1, 10) - 1;
        }
        if (format[i].indexOf("d") > -1) {
            dp.d = parseInt(str[i] || 1, 10);
        }
        if (format[i].indexOf("H") > -1) {
            dp.H = parseInt(str[i] || 0, 10);
        }
        if (format[i].indexOf("m") > -1) {
            dp.m = parseInt(str[i] || 0, 10);
        }
        if (format[i].indexOf("s") > -1) {
            dp.s = parseInt(str[i] || 0, 10);
        }
    }

    var result = parseFloat(new Date(dp.y, dp.M, dp.d, dp.H, dp.m, dp.s).getTime()) / 1000;
    return result < 0 ? null : result;
};
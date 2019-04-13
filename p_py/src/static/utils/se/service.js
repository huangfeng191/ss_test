var Prefix = '';

$.po = function (url,data, opts) {
   let _opts= {
        type:'POST',
        data:JSON.stringify(data),
        url:url,
        contentType:'application/json; charset=utf-8',
        dataType:'json'
    }

    return $.ajax($.extend({}, _opts, opts || {}));
}

function co(func) {
    var self = this;
    return $.Deferred(function (def) {
        return func.done(function (rep) {
            if (rep.Code == 0) {
                return def.resolve(rep.Response);
            }else {
                return def.reject(rep.Message);
                // return def.reject(rep.Response);
            }
        }).fail(function (rep) {
            return def.reject(rep);
        });
    });
}


export const API = {
    
    ubizLocalPost: (params)=> {
        return co($.po(`${Prefix}/ubiz/local/post.json`, params))
    },
    ubizLocalInfo: (params)=> {
        return co($.po(`${Prefix}/ubiz/local/info.json`, params))
    }
}


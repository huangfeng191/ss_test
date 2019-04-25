//jQuery扩展
jQuery.extend({
    GetTemplate: function (fn) {
        debugger
        return fn.toString().replace(/^function\s*\(\s*\)\s*\{\s*\/\*/g, "").replace(/\*\/;?\s*\}$/g, "");
    },
    ImplantTemplate: function (Id, Temp) {
        jQuery("head").append("<script id=\"" + Id + "\" type=\"template\">" + Temp + "<\/script>");
    }

});
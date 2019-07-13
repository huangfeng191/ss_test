//jQuery扩展
jQuery.extend({
    GetTemplate: function (fn) {
        
        return fn.toString().replace(/^function\s*\(\s*\)\s*\{\s*\/\*/g, "").replace(/\*\/;?\s*\}$/g, "");
    },
    ImplantTemplate: function (Id, Temp) {
        jQuery("head").append("<script id=\"" + Id + "\" type=\"template\">" + Temp + "<\/script>");
    },
    ImplantStyle: function (Module, Skin, Loaded)
    {
        var Config = jQuery(document).data(Module);
        if (!Config)
        {
            var Script = jQuery("script[src*='/" + Module + ".js']");
            if (Script.length == 0)
            {
                Script = jQuery("script[src^='" + Module + ".js']");
            }
            var Regx = new RegExp(Module + "\.js.*$");
            var Path = Script.attr("src").replace(Regx, "");
            if (!Skin)
            {
                Skin = Script.attr("skin") || "Default";
            }

            Config = { Skin: Skin, Path: Path };

            jQuery("<link href=\"" + Path + "Skins/" + Skin + "/skin.css\" rel=\"stylesheet\" type=\"text/css\" />").insertAfter(Script)
            .bind("load", function ()
            {
                if (jQuery.isFunction(Loaded))
                {
                    Loaded(Config);
                }
            });

            jQuery(document).data(Module, Config);
        }
        return Config;
    }

});
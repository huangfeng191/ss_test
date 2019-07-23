function StationSelector(Target, Options, Value, Callback)
{
    if (!Target.data("handler"))
    {
        Target.addClass("tree_selector loading").width(Target.width() - 16).css("padding-right", "18px").each(function (i, ele)
        {
            ele.Set = function (Value)
            {
                jQuery(this).data("data", Value);
            };
        });
        jQuery.ajax({
            type: "POST",
            data: JSON.stringify(Options.TreeParams || { EndType: (Options.EndType || "L"), Type: Options.STypes, DataTypes: Options.DTypes, Equipments: Options.Equipments }),
            url: (Options.TreeUrl || "/hd/station/tree.json"),
            contentType: "application/json",
            dataType: "json",
            success: function (Result)
            {
                if (Result.Code == 0)
                {
                    var CreateIndex = function (All, Node)
                    {
                        All[Node.ObjId] = Node;
                        if (Node && Node.Children && Node.Children.length > 0)
                        {
                            for (var i = 0, Arr = Node.Children, len = Arr.length; i < len; i++)
                            {
                                if (Arr[i].Type == "S")
                                {
                                    Arr[i].Name += "(" + Arr[i].ObjId + ")";
                                    Arr[i].Station = Node.Name;
                                    Arr[i].StationId = Node.ObjId;
                                }
                                CreateIndex(All, Arr[i]);
                            }
                        }
                    };

                    var Handler =
                    {
                        Data: [Result.Response],
                        All: {}
                    };

                    CreateIndex(Handler.All, Result.Response);

                    Target.data("handler", Handler);

                    if (Options.Editable)
                    {
                        Target.dblclick(function (Evt)
                        {
                            var Tgt = jQuery(this);
                            ShowDialog({ Title: (Options.DlgTitle || "站点选择"), Url: "/static/Scripts/StationSelector/dlgSelector.html", Width: 580, Height: 400 },
	                        { Placeholder: Options.Placeholder || "搜索站点", AutoCompleteUrl: Options.AutoCompleteUrl, Settings: Options.Settings, Handler: Tgt.data("handler"), Records: Tgt.data("data") },
	                        function (Result)
	                        {
	                            if (Result != null)
	                            {
	                                if (Result)
	                                {
	                                    if (Options.Settings.check.enable)
	                                    {
	                                        var Values = [];
	                                        var Names = [];
	                                        for (var i = 0, len = Result.length; i < len; i++)
	                                        {
	                                            Values.push(Result[i].Value);
	                                            Names.push((Options.EndType == "S" ? Result[i].Station + "_" : "") + Result[i].Name);
	                                        }
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback(Values, Names);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", Values);
	                                            Tgt.val(Names.join(","));
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                    else
	                                    {
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback(Result.Value, (Options.EndType == "S" ? Result.Station + "_" : "") + Result.Name);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", Result.Value);
	                                            Tgt.val((Options.EndType == "S" ? Result.Station + "_" : "") + Result.Name);
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                }
	                                else
	                                {
	                                    if (Options.Settings.check.enable)
	                                    {
	                                        var Values = [];
	                                        var Names = [];
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback([], []);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", []);
	                                            Tgt.val("");
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                    else
	                                    {
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback("", "");
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", "");
	                                            Tgt.val("");
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                }
	                            }
	                        });
                        });
                    }
                    else
                    {
                        Target.prop("readonly", "readonly").click(function (Evt)
                        {
                            var Tgt = jQuery(this);
                            ShowDialog({ Title: (Options.DlgTitle || "站点选择"), Url: "/static/Scripts/StationSelector/dlgSelector.html", Width: 580, Height: 400 },
	                        { Placeholder: Options.Placeholder || "搜索站点", AutoCompleteUrl: Options.AutoCompleteUrl, Settings: Options.Settings, Handler: Tgt.data("handler"), Records: Tgt.data("data") },
	                        function (Result)
	                        {
	                            if (Result != null)
	                            {
	                                if (Result)
	                                {
	                                    if (Options.Settings.check.enable)
	                                    {
	                                        var Values = [];
	                                        var Names = [];
	                                        for (var i = 0, len = Result.length; i < len; i++)
	                                        {
	                                            Values.push(Result[i].Value);
	                                            Names.push((Options.EndType == "S" ? Result[i].Station + "_" : "") + Result[i].Name);
	                                        }
	                                        Tgt.data("nodes", Result);
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback(Values, Names);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", Values);
	                                            Tgt.val(Names.join(","));
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                    else
	                                    {
	                                        Tgt.data("nodes", Result);
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback(Result.Value, (Options.EndType == "S" ? Result.Station + "_" : "") + Result.Name);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", Result.Value);
	                                            Tgt.val((Options.EndType == "S" ? Result.Station + "_" : "") + Result.Name);
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                }
	                                else
	                                {
	                                    if (Options.Settings.check.enable)
	                                    {
	                                        var Values = [];
	                                        var Names = [];
	                                        Tgt.data("nodes", null);
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback([], []);
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", []);
	                                            Tgt.val("");
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                    else
	                                    {
	                                        Tgt.data("nodes", null);
	                                        if (jQuery.isFunction(Callback))
	                                        {
	                                            Callback("", "");
	                                        }
	                                        else
	                                        {
	                                            Tgt.data("data", "");
	                                            Tgt.val("");
	                                            Tgt.trigger("change");
	                                        }
	                                    }
	                                }
	                            }
	                        });
                        });
                    }

                    Target.removeClass("loading").trigger("loaded", "success");

                    Target.each(function (i, ele)
                    {
                        ele.Set = function (Value)
                        {
                            jQuery(this).val("").removeData("data").data("data", Value);
                            if (Value != undefined && Value != null)
                            {
                                if (Options.Settings.check.enable)
                                {
                                    var Names = [];
                                    for (var i = 0, All = jQuery(this).data("handler").All, len = Value.length; i < len; i++)
                                    {
                                        var Node = All[Value[i]];
                                        if (Node)
                                        {
                                            Names.push((Node.Type == "S" ? Node.Station + "_" : "") + Node.Name);
                                        }
                                    }

                                    jQuery(this).val(Names.join(","));
                                }
                                else
                                {
                                    var Node = jQuery(this).data("handler").All[Value];
                                    if (Node)
                                    {
                                        jQuery(this).val((Node.Type == "S" ? Node.Station + "_" : "") + Node.Name);
                                    }
                                    else if (Options.Editable)
                                    {
                                        jQuery(this).removeData("data").val(Value);
                                    }
                                }
                            }
                        };
                    });

                    Target.each(function (i, ele)
                    {
                        ele.Get = function ()
                        {
                            var Value = jQuery(this).data("data");
                            if (!Value && Options.Editable)
                            {
                                Value = jQuery(this).val();
                            }
                            return Value;
                        };
                    });

                    Target.each(function (i, ele)
                    {
                        var Val = jQuery(ele).data("data");
                        if (Val == undefined && !!Value)
                        {
                            Val = Value;
                        }
                        if (Val)
                        {
                            ele.Set(Val);
                        }
                    });

                    if (Options.AutoShow)
                    {
                        Target.trigger(Options.Editable ? "dblclick" : "click");
                    }
                }
            },
            error: function (ex)
            {
                Target.removeClass("loading").trigger("loaded", "failure", ex);
            }
        });
    }
}
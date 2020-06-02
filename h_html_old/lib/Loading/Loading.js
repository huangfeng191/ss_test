jQuery.extend(
    {
        Loading: function(Options, Container)
        {
            var Cmp = jQuery(document).data("component");
            if(!Cmp)
            {
                jQuery.ImplantStyle("Loading", Options && Options.Skin || "Default");
    
                var Template = template.compile(jQuery.GetTemplate(function()
                {
                    /*
                    <table class="loading_framework">
                    <tr>
                    <td valign="middle">
                    <div class="load_box">
                    <span class="img"></span><span class="text">{{Message}}</span>
                    </div>
                    </td>
                    </tr>
                    </table>
                    */
                }));
    
                if(Container)
                {
                    Container = jQuery(Container);
                }
                else
                {
                    Container = jQuery(document.body);
                }
    
                Cmp =
                {
                    JQObject: null,
                    Message: "正在加载中……",
                    Timer: null,
                    Timeout: 60,
                    Show: function(Message, Timeout)
                    {
                        if(this.JQObject != null)
                        {
                            if(Container.find(this.JQObject).length==0){
                                Cmp.JQObject.appendTo(Container)
                            }
                            return 
                           
                        }
    
                        // this.JQObject = jQuery(Template({ Message: Message || this.Message })).appendTo(Container);
                        this.JQObject = jQuery($.parseHTML(Template({ Message: Message || this.Message })));
                        setTimeout(() => {
                            if(Cmp.JQObject&&Container.find(this.JQObject).length==0){
                                Cmp.JQObject.appendTo(Container);
    
                            }
                        }, 140*1000);
                        this.Timer = setTimeout(function()
                        {
                            Cmp.Hide();
                        }, (Timeout || this.Timeout) * 100000);
    
                        return this;
                    },
                    Hide: function()
                    {
                        clearTimeout(this.Timer);
                        if(this.JQObject != null)
                        {
                            this.JQObject.remove();
                            this.JQObject = null;
                            this.Timer = null;
                        }
                    },
                    Options: Options
                };
    
                jQuery.extend(true, Cmp, Options);
            }
            return Cmp;
        }
    });
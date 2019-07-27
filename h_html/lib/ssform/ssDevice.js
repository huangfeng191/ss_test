

$.fn.ssDevice = function(method) {
    if ($.fn.ssDevice[method]) {
        return $.fn.ssDevice[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
        return initialize_ssDevice.apply(this, arguments);
    } else {
        $.error("Method " + method + " does not exist on jQuery.ssDevice");
    }
};

$.fn.ssDevice.BeforeSet = function(type) {
    var opts = $(this).data("ssDevice");
    if (type == "cancel") {
        opts.selected = []
    } else if (type == "all") {
        opts.selected = opts.rows.map(function(x) {
            return x.id;
        })
    } else if (type == "reset") {
        opts.selected = opts.rows.filter(function(x) { return x.selected }).map(function(x) {
            return x.id;
        })
    }
    $(this).ssDevice("Set");

};

$.fn.ssDevice.Set = function() {
    var opts = $(this).data("ssDevice");
    var a = [];
    if ((opts.selected || []).length > 0) {
        $.each(opts.rows || [], function(oi, ov) {
            if ($.inArray(ov.id, opts.selected) >= 0) {
                a.push(ov.name);
            }
        })
    }
    $(this).find("#deviceNames").val(a.join(";"));
    $(this).find("li").removeClass("selected-li");
    $.each($(this).find("li"),function(oi,li){
        if($.inArray(li.id, opts.selected)>=0){
            $(li).addClass("selected-li");
        }
    })

};

$.fn.ssDevice.BindLi = function() {
       var ssDevice=$(this);
       ssDevice.find("ul li").unbind("click").bind("click", function(dom) {
        $(this).toggleClass("selected-li");
        var css = $(this).attr("class");
        var id=this.id;
        var index= $.inArray(id, ssDevice.data("ssDevice").selected);

        if(css=="selected-li"){
               if(index<0){
                ssDevice.data("ssDevice").selected.push(id);
               } 
        }else{
            if(index>=0){
                ssDevice.data("ssDevice").selected.splice(index,1)
            }
        }
        ssDevice.ssDevice("Set");
    })


};





var defaults = $.fn.ssDevice.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
        /*
   
   
        <input type="text" placeholder="" id="deviceNames" readOnly value="{{deviceNames}}" />
        <div class="lay">
            <button type="button" class="btn btn-default btn-sm" id="all" >
                <span class="glyphicon glyphicon-ok" ></span>全选
            </button>
            <button type="button" class="btn btn-default btn-sm" id="cancel" >
                <span class="glyphicon glyphicon-remove" ></span>全部取消
            </button>
            <button type="button" class="btn btn-default btn-sm" style="float: right;" id="reset">
                <span class="glyphicon glyphicon-repeat" ></span>重置
            </button>
            <input type="text" placeholder="搜索" class="search"  />
            <ul>
                {{each   rows row i}}
                    <li id={{row.id}} {{if row.selected}}  class="selected-li"  {{/if}}>{{row.name}}</li>
                {{/each}}
            </ul>
        </div>
   

      

        */
    })),
    Form: [],
    BeforeRender: null

}

function initialize_ssDevice(options) {
    var opts = $.extend(true, {}, defaults, options);
    var ssDevice = $(this);
    var deviceNames=[]
    ssDevice.addClass("ss-device");
    if (opts.id) {
        ssDevice.attr("id", opts.id);
    }
    if(!opts.selected){
        opts.selected=[];
    }
    if (opts.Class) {
        ssDevice.addClass(opts.Class);
    }
    if ((opts.selected || []).length > 0) {
        $.each(opts.rows || [], function(oi, ov) {
            if ($.inArray(ov.id, opts.selected) >= 0) {
                ov.selected = "true";
                deviceNames.push(ov.name);
            }
        })
    }
    opts.deviceNames=deviceNames.join(";")
    ssDevice.html(opts.temp(opts));
    ssDevice.data("ssDevice", opts);

    ssDevice.find("#all,#cancel,#reset").unbind("click").bind("click", function(dom) {
        var type = dom.target.id ;
        ssDevice.ssDevice("BeforeSet", type);
    })
    ssDevice.find(".search").unbind("input propertychange").bind("input propertychange", function(e) {
        var reg = e.target.value;
        $.each(ssDevice.find("li"),function(oi,li){
         if($(li).html().match(reg)){
            $(li).css("display","inline-block")
         }else{
            $(li).css("display","none");
         }
        })
                
     
    })

    ssDevice.ssDevice("BindLi");

}
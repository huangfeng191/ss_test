function getField(Object, Field) {
    var fieldRegexp = new RegExp("\\.|\\[|\\]\\.");
    if (fieldRegexp.test(Field)) {
        var F = Field.split(fieldRegexp)[0];
        var Cur = Object[F];
        if (Cur) {
            return getField(Cur, Field.replace(new RegExp("^" + F + "(\\.|\\[|\\]\\.)"), ""));
        } else {
            return null;
        }
    } else if (Object && Object.hasOwnProperty(Field)) {
        return Object[Field];
    } else {
        return '';
    }
}

function setValue(Record, container) {
    for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
        var Ele = jQuery(Eles[i]);
        var Field = Ele.attr("field");
        var Type = Ele.attr("showType");
        var Value = getField(Record, Field);
        switch (Type) {
            default:
                {
                    if (Value != null) {
                        Ele.val(Value);
                    } else {
                        Ele.val("");
                    }
                }
                break;
        }
    }
}
$.fn.ssModal = function(method) {
    if ($.fn.ssModal[method]) {
        return $.fn.ssModal[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
        return initialize_ssModal.apply(this, arguments);
    } else {
        $.error("Method " + method + " does not exist on jQuery.ssModal");
    }
};

$.fn.ssModal.Set = function(record) {
    var opts = $(this).data("ssModal");
    if (opts && opts.BeforeSet) {
        opts.BeforeSet(record, opts);
    }
    setValue(record, this.children(".modal-dialog").find("[field]"));
    if (opts && opts.AfterSet) {
        opts.AfterSet(record, opts);
    }
};


$.fn.ssModal.Get = function() {
    var opts = $(this).data("ssModal");
    if (opts && opts.BeforeGet) {
        opts.BeforeGet(opts);
    }
    var record = {}
    var container = this.children(".modal-dialog").find("[field]");
    for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
        var Ele = jQuery(Eles[i]);
        var Field = Ele.attr("field");
        var Type = Ele.attr("showType");
        record[Field] = Ele.val()

    }
    if (opts && opts.AfterGet) {
        opts.AfterGet(record, opts);
    }
    return record;
};





$.fn.ssModal.Clear = function(Fields) {
    opts = this.data("ssModal");
    if (opts.BeforeClear) {
        opts.BeforeClear(Fields);
    }
    this.children(".modal-dialog").find("[field]").val("");

}
var defaults = $.fn.ssModal.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
        /*
   
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title">
                    {{title}}
                </h4>
            </div>


            {{each Form  Group g}}
                <div class="modal-body" style="{{Group.style}}">
                    {{each Group.Inputs  Row r}}

                        {{each Row  Cell c}}
                            <div class="form-row">
                                <div class="left "><label field_label="{{Cell.field}}" >{{Cell.title}}:</label></div>
                                <div class="right ">
                                    {{if Cell.showType=="text"}}
                                            <input field={{Cell.field}}  placeholder="请输入" showType={{Cell.showType}} {{if Cell.disabled}} disabled {{/if}} {{if Cell.value}} value=Cell.value {{/if}}>

                                    {{else if Cell.showType=="select"}}
                                            <select field={{Cell.field}}   showType={{Cell.showType}} {{if Cell.value}} value=Cell.value {{/if}}>
                                                {{each Cell.options  option o}}
                                                    <option value={{option.Value}}>{{option.Name}}</option>
                                                {{/each}}
                                            </select>
                                    {{/if}}

                                </div>
                            </div>

                        {{/each}}

                    {{/each}}  
                </div>
            {{/each}}

            
            <div class="modal-footer">
                <button type="button" class="modal-btn no" data-dismiss="modal">取消</button>
                <button type="button" class="modal-btn yes" >
                    确定
                </button>
            </div>
        </div>

        */
    })),
    Form: [],
    BeforeRender: null

}

function initialize_ssModal(options) {
    var opts = $.extend(true, {}, defaults, options);
    var ssModal = $(this);
    if (opts.BeforeRender) {
        opts.BeforeRender(ssModal);
    }
   
    for (var i = 0; i < opts.Form.length; i++) {

        if (opts.Form[i]['Inputs']) {
            for (var x = 0; x < opts.Form[i]['Inputs'].length; x++) {
                var inpS = opts.Form[i]['Inputs'][x];
                for (var j = 0; j < inpS.length; j++) {
                    var input = inpS[j];
                    opts.Form[i]['Inputs'][x][j] = $.extend(true, { Ext: "", showType: "text" }, input);
                    if (input.showType == "select") {
                        if (opts.bindings[input.binding]) {
                            opts.Form[i]['Inputs'][x][j]["options"] = opts.bindings[input.binding] //[]
                            // temp;
                                if(opts.bindings[input.binding].length>0){
                                    if(opts.bindings[input.binding][0].Name!="请选择"){
                                        opts.Form[i]['Inputs'][x][j]["options"] .splice(0,0, { "Name": "请选择", "Value": "" })
                                    }
                                }
                           
                        }
                    }
                }
            }
        }
    }
    
    ssModal.addClass("modal fade ss-modal");
    if(opts.id){
        ssModal.attr("id",opts.id);
    }
   
    ssModal.attr({"role":"dialog", "tabindex":"-1","aria-hidden":true});
    if (opts.Class) {
        ssModal.addClass(opts.Class);
    }
    ssModal.html('<div class="modal-dialog"> </div>');
    if(opts.width){
        ssModal.find(".modal-dialog").css("width",opts.width);
    }
    ssModal.find(".modal-dialog").html(opts.temp(opts));
    ssModal.data("ssModal", opts);
    if(opts.data){
        ssModal.ssModal("Set",opts.data);
    }
    if(opts.confirm){
        
        ssModal.find(".modal-dialog button.yes").unbind("click").bind("click",function(){
            var modalData=ssModal.ssModal("Get");
            opts.confirm(ssModal,modalData);
        })
    }
    if (opts.afterRender) {
        opts.afterRender(ssModal, opts);
    }

}
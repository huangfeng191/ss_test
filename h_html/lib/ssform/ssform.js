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
$.fn.ssForm = function(method) {
    if ($.fn.ssForm[method]) {
        return $.fn.ssForm[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
        return initialize.apply(this, arguments);
    } else {
        $.error("Method " + method + " does not exist on jQuery.ssForm");
    }
};

$.fn.ssForm.Set = function(record) {
    var opts = $(this).data("ssForm");
    if (opts && opts.BeforeSet) {
        opts.BeforeSet(record, opts);
    }
    setValue(record, this.children(".form_container").find("[field]"));
    if (opts && opts.AfterSet) {
        opts.AfterSet(record, opts);
    }
};


$.fn.ssForm.Get = function(isShow) {
    
    var opts = $(this).data("ssForm");
    if (opts && opts.BeforeGet) {
        opts.BeforeGet(opts);
    }
    var record = {}
    var container = this.children(".form_container").find("[field]");
    for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
        var Ele = jQuery(Eles[i]);
        var Field = Ele.attr("field");
        var Type = Ele.attr("showType");
        if(Type=="select"&&isShow){
            record[Field] = Ele.find("option:selected").html();
        }else{
            record[Field] = Ele.val()
        }

    }
    if (opts && opts.AfterGet) {
        opts.AfterGet(record, opts);
    }
    return record;
};

$.fn.ssForm.Export=function(){
    var opts = $(this).data("ssForm");
    var record=$(this).ssForm("Get","1");
    var tHead=[];
    var tRow=[]
    $.each(opts.Form||[],function(oi,ov){
        $.each(ov.Inputs||[],function(i,row){
                $.each(row,function(ii,input){
                    tHead.push(input.title);
                    tRow.push(record[input.field]);      
                })
        })
    })
    var virtualDom =document.createElement("table");
    var dom_head="<tr>";
    $.each(tHead,function(oi,ov){
        dom_head+="<th>"+ov+"</th>"
    })
    dom_head+="</tr>"

    var dom_row="<tr>";
    $.each(tRow,function(oi,ov){
        dom_row+="<td>"+ov||""+"</td>"
    })
    dom_row+="</tr>";
    $(virtualDom).html("<tbody>"+dom_head+dom_row+"</tbody>");
    // console.log("dom_ "+virtualDom.innerHTML);
    // $("#csTable").html(virtualDom)
    var instance=$(virtualDom).tableExport({
      formats: ['xlsx'], 
      exportButtons: false,
      filename:opts.exportTitle||"filename"
    })
    var XLSX = instance.CONSTANTS.FORMAT.XLSX;
    var exportDataXLSX = instance.getExportData()[Object.keys(instance.getExportData())[0]][XLSX];
    instance.export2file(exportDataXLSX.data, exportDataXLSX.mimeType, exportDataXLSX.filename, exportDataXLSX.fileExtension);   





}

$.fn.ssForm.GetQuery = function() {
  var opts = $(this).data("ssForm");
  var record = {}
  var container = this.children(".form_container").find("[qField]");
  for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
      var Ele = jQuery(Eles[i]);
      var Field = Ele.attr("qField");
      var Type = Ele.attr("showType");
      record[Field] = Ele.val()

  }
  return record;
};


$.fn.ssForm.Clear = function(Fields) {
    opts = this.data("ssForm");
    if (opts.BeforeClear) {
        opts.BeforeClear(Fields);
    }
    this.children(".form_container").find("[field]").val("");

}
 $.fn.ssForm.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
        /*



          {{if query }}
          <div  class="form_top option-top clearfix" >
           
            <span {{if query.id}} id={{query.id}} {{/if}}> {{query.title}}</span>
     

            {{each query.conditions condition q}}
                <span>{{condition.title}}</span>
                {{if condition.showType=="input"}}
                  <input qField={{condition.field}} showType={{condition.showType}} {{if condition.value}} value=condition.value {{/if}} >
                {{else if condition.showType=="select"}}
                    <select {{if query.change}} onchange={{query.change}}  {{/if}}  qField={{condition.field}} {{if condition.value}} value=condition.value {{/if}}>
                        {{each condition.options  option o}}
                          <option value={{option.Value}}>{{option.Name}}</option>
                        {{/each}}
                    </select>
                {{/if}}
            {{/each}}

            {{if query.showButton}}
               <button   class="btn btn-primary btn-md"  {{if query.click}} onclick={{query.click}} {{/if}}>搜索</button>
            {{/if}}
          </div>
          {{/if}}





        {{each Form  Group g}}
          <div class="form_middle">
          <table style="margin: 0 auto;{{Group.Style}}">
            {{each Group.Inputs  Row r}}
              <tr>
                {{each Row  Cell c}}
                      {{if Cell.field}}
                        <td class="ss_label" field_label="{{Cell.field}}"  >{{Cell.title}}:</th>
                        {{if Cell.showType=="text"}}
                              <td>
                                <input field={{Cell.field}} showType={{Cell.showType}} {{if Cell.disabled}} disabled {{/if}} {{if Cell.value}} value=Cell.value {{/if}}>
                              </td>

                        {{else if Cell.showType=="select"}}

                              <td>
                                <select field={{Cell.field}}   showType={{Cell.showType}} {{if Cell.value}} value=Cell.value {{/if}}>
                                   {{each Cell.options  option o}}
                                      <option value={{option.Value}}>{{option.Name}}</option>
                                   {{/each}}
                                </select>
                              </td>
                        {{/if}}



                      {{/if}}
                {{/each}}
              </tr> 
            {{/each}}
          </table>
          </div>

          {{if Group.Buttons &&Group.Buttons.length>0 }}
              <div class="button_container" style="clear:both;margin-top:10px;">
                  {{each Group.Buttons  Btn b}}

                  <button type="button" command="{{Btn.Cmd}}"  class="btn btn-default {{if Btn.Class}}{{Btn.Class}}{{/if}} " data-dismiss="modal">{{(Btn.Name||'&nbsp')}}</button>

                  {{/each}}
              </div>
          {{/if}}


        {{/each}}


        */
    })),
    Form: [],
    BeforeRender: null


}

function initialize(options) {
    var opts = $.extend(true, {}, $.fn.ssForm.defaults, options);
    var ssForm = $(this);
    if (opts.BeforeRender) {
        opts.BeforeRender(ssForm);
    }
    if(opts.query){
      var conditions=opts.query.conditions||[];
      for (var i = 0; i <conditions.length; i++) {
        var condition = $.extend(true, { showType: "text" }, conditions[i]);
        if (condition.showType == "select") {
          if (condition.binding && opts.qBindings[condition.binding]) {
            condition["options"] = opts.qBindings[condition.binding] //[]
          }
        }
        conditions[i] = condition;
       
      }
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
                        }
                    }
                }
            }
        }
    }
    ssForm.addClass("ss_framework");
    if (opts.Class) {
        ssForm.addClass(opts.Class);
    }
    ssForm.html('<div class="form_container" style="border:0px;"></div>');

    ssForm.find(".form_container").html(opts.temp({query:opts.query, Form: opts.Form }));
    ssForm.data("ssForm", opts);

    if(ssForm.find("button[command=export]")){
        ssForm.find("button[command=export]").unbind("click").bind("click",function(){
            ssForm.ssForm("Export");
        })
    }

    if (opts.AfterRender) {
        opts.AfterRender(ssForm, opts);
    }

}
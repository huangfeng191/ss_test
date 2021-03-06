$.fn.ssTable = function(method) {
    if ($.fn.ssTable[method]) {
        return $.fn.ssTable[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
        return ssTableInitialize.apply(this, arguments);
    } else {
        $.error("Method " + method + " does not exist on jQuery.ssTable");
    }
};



$.fn.ssTable.GetQuery = function() {
  var opts = $(this).data("ssTable");
  var record = {}
  var container = this.find("[qField]");
  for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
      var Ele = jQuery(Eles[i]);
      var Field = Ele.attr("qField");
      var Type = Ele.attr("showType");
      record[Field] = Ele.val()

  }
  return record;
};


$.fn.ssTable.Set = function(records) {
    
    var modalTemp = template.compile(jQuery.GetTemplate(function() {
        /*
              {{each data d i}}
                <tr>  
                {{each definition def di}}
                  <td width={{def.width}} >
                   {{if def.format}}
                        <%- def.format(d,i,def.field) %>
                   {{else if def.showType=="select"}}

                       <div style="float:left;">
                        <select field={{def.field}} class="form-control"   showType={{def.showType}}  >
                            {{each def.options  option o}}
                              <option value={{option.Value}}  {{if option.Value==d[def.field]}} selected {{/if}}  >{{option.Name}}</option>
                            {{/each}}
                        </select>
                       </div>
                   {{else}}
                     {{d[def.field]}}
                   {{/if}}
                  
                  </td>
                {{/each}}
                </tr>
              {{/each}}
            
            */
    }))

    var opts = $(this).data("ssTable");
    if (opts && opts.BeforeSet) {
        opts.BeforeSet(record, opts);
    }
    var binds = window.top.bindings;
    $.each(opts.columns, function(oi, ov) {
        if (ov.showType == "select") {
            if (ov.binding && binds[ov.binding]) {
                ov["options"] = binds[ov.binding] //[]
            }
        }
    })

    var d = {
        data: records,
        definition: opts.columns
    }
    $(this).data("ssTableData", records)
    $(this).find(".table_content").html(
        modalTemp(d)
    );


    



};




$.fn.ssTable.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
        /*
    {{if head}}

      <div class="table_head">
            <div class="left">
            <span {{if head.id}} id={{head.id}} {{/if}}> {{head.title}}</span>


          {{if query}}
            {{each query.conditions condition q}}
                <span>{{condition.title}}</span>
                {{if condition.showType=="input"}}
                  <input qField={{condition.field}} showType={{condition.showType}} {{if condition.value}} value=condition.value {{/if}} >
                {{else if condition.showType=="select"}}
                    <select {{if query.change && condition.immediate!=false}}  binding={{condition.binding}}  onchange={{query.change}}  {{/if}}  qField={{condition.field}} >
                        {{each condition.options  option o}}
                          <option value={{option.Value}} {{if option.Value!='' && option.Value==condition.value}} selected {{/if}}>{{option.Name}}</option>
                        {{/each}}
                    </select>
                {{/if}}
            {{/each}}

            {{if query.autoQuery}}
               <button   class="bg-btn" id="autoQuery" {{if query.click}} onclick={{query.click}} {{else}}    {{/if}}>{{if query.name}}{{query.name}}{{else}}搜索{{/if}}</button>
            {{/if}}
          {{/if}}




            </div>
            <div  class="right {{head.buttonsClass}}">
            
                  {{if head.buttons}}
                  {{each head.buttons btn iB }}
                    <button   class="btn  {{btn.class}}" command="{{btn.cmd}}"  {{if btn.click}} onclick={{btn.click}} {{/if}}>{{(btn.name||'&nbsp')}}</button>
                  {{/each}}
                    {{/if}}
            </div>
      </div>


    {{/if}}


    <div class="table_title" style="position:absolute; background-color:white;z-index: 999;">
      <table class=" table table-striped"   style="margin-bottom:0px;calc(100% - 20px) " >
        <thead>
          <tr>
            {{each columns  column i}}
              {{if column.hidden!=true}}
                <th width={{column.width}} title_field={{column.field}}>{{column.title}}{{if column.sort}}
 <span class="caret-wrapper">
                    <i class="sort-caret ascending"></i>
                    <i class="sort-caret descending"></i>
                 </span></th>
                {{/if}}
                </th>
              {{/if}}  
            {{/each}}
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
        </tbody>
      </table>
    </div>



    <div class="table_middle">
      <table class=" table table-striped" width="100%">
 
        <tbody class="table_content">
          <tr>
          </tr>
        </tbody>
      </table>
    </div>

    {{if footShow==true}}
        <div class="table_foot" >
              
          <div id="sample_pagination" style="float:right;padding-right:10px;"></div>
    
        </div>


    {{/if}}

*/
    })),
    columns: null,
    BeforeRender: null,
    doQuery:function(jDom,url,params,opts){
      var qData=jDom.ssTable("GetQuery");
      var tableOpts=jDom.data("ssTable");
      if(params){
        $.extend(qData,params)
      }
      if(tableOpts.footShow){
        qData.page = jDom.find("#sample_pagination").data("pagination").currentPage + 1;
        qData.pageSize = jDom.find("#sample_pagination").data("pagination").itemsOnPage;
        
      }
      var toSort=jDom.find(".table_title .caret-wrapper i.active");
      if(toSort&&toSort.length){
        qData.order=toSort.closest("th").attr("title_field")
        if(toSort.hasClass("ascending")){
          qData.ase="ase";
        }else{
          qData.ase="desc";
        }
      }  
      $.ajax($.extend({}, {
        type: 'POST',
        data: JSON.stringify(qData),
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
      } ,opts || {})).done(function(result){
        if(result.Response){
          result=result.Response;
        }
          if(result.code=="100000" && result.data.content ){
            jDom.ssTable("Set",
              result.data.content||[]
            )
            if(tableOpts.footShow){
            var op = {
              "onPageClick": function(pageNumber, event) {
                tableOpts.query.click();
              }
            }
            op.items = result.data.totalElements
            op.currentPage = qData.page;
            $("#sample_pagination").pagination(op);
          }
        }
          else if (result.data ){
            jDom.ssTable("Set",
              result.data.rows||[]
            )
          }

      }).fail(function(err){

      });




    }

};

function ssTableInitialize(options) {
    var opts = $.extend(true, {}, this.ssTable.defaults, options);
    var ssTable = $(this);


    if(opts.query){
      var conditions=opts.query.conditions||[];
      for (var i = 0; i <conditions.length; i++) {
        var condition = $.extend(true, { showType: "text" }, conditions[i]);
        if (condition.showType == "select") {
          if (condition.binding &&opts.qBindings&& opts.qBindings[condition.binding]) {
            condition["options"] = opts.qBindings[condition.binding] //[]
          }else if (condition.binding && top.bindings[condition.binding]) {
            condition["options"] = top.bindings[condition.binding] //[]
          }
        }
        conditions[i] = condition;
       
      }
    }



    $.each(opts.columns, function(oi, ov) {
        one = { "title": "", "field": "", "width": "", "showType": "text", "format": "", "hidden": false };
        ov = $.extend({}, one, ov)
    })

    ssTable.addClass("ss_table_framework");

    if (opts.Class) {
        ssTable.addClass(opts.Class);
    }
    if(opts.width){
      ssTable.css("width",opts.width);
    }
    ssTable.html('<div class="ss_table_container" style="border:0px;"></div>');

    ssTable.find(".ss_table_container").html(opts.temp({
        "head":opts.head,
        "query":opts.query,
        "columns": opts.columns,
        "footShow": opts.footShow ? true : false

    }));

    

    
    
    
    if(opts.footShow){
      ssTable.find(".table_foot #sample_pagination").pagination({});
    }
    ssTable.find(".table_middle").height(ssTable.height()-ssTable.find(".table_head").height()-ssTable.find(".table_foot").height()-ssTable.find(".table_title").height())
    ssTable.find(".table_middle").css("margin-top",ssTable.find(".table_title").height())
    ssTable.find(".table_title").css("top",ssTable.find(".table_head").height()+10);

    ssTable.data("ssTable", opts);


   

    if(opts.query&&opts.query.autoQuery&&opts.query.url){
   
      if(opts.query.firstQuery){ // 默认查询  1 查询
            opts.doQuery(ssTable,opts.query.url,opts.query.params||{},opts.query.option);
        }
      ssTable.find("#autoQuery").unbind("click").bind("click",function(){
        opts.doQuery(ssTable,opts.query.url,opts.query.params||{},opts.query.option);
      })
    } 

    ssTable.find(".table_title .caret-wrapper i").unbind("click").bind("click",function(event){
      
      var cancel=$(this).hasClass("active")

      ssTable.find(".table_title .caret-wrapper i").removeClass("active");
      if(cancel==false){
        $(this).addClass("active"); 
      }
    })

    if(opts.afterRender){
      opts.afterRender(ssTable);
    }
}
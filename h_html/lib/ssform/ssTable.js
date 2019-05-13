$.fn.ssTable = function(method) {
    if ($.fn.ssTable[method]) {
        return $.fn.ssTable[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
        return initialize.apply(this, arguments);
    } else {
        $.error("Method " + method + " does not exist on jQuery.ssForm");
    }
};



$.fn.ssTable.Set = function(records) {
    var modalTemp = template.compile(jQuery.GetTemplate(function() {
        /*
              {{each data d i}}
                <tr>  
                {{each definition def di}}
                  <td >{{d[def.field]}}</td>
                {{/each}}
                </tr>
              {{/each}}
            
            */
    }))

    var opts = $(this).data("ssTable");
    if (opts && opts.BeforeSet) {
        opts.BeforeSet(record, opts);
    }
    var d = {
        data: records,
        definition: opts.columns
    }
    $(this).find(".table_content").html(
        modalTemp(d)
    )


};




var tableDefaults = $.fn.ssTable.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
        /*


<div class="table_middle">
  <table class="card-info table table-striped" width="100%">
    <thead>
      <tr>
        {{each columns  column i}}
          {{if column.hidden!=true}}
            <th width={{column.width}} title_field={{column.field}}>{{column.title}} </th>
          {{/if}}  
        {{/each}}
      </tr>
    </thead>
    <tbody class="table_content">
      <tr>
      </tr>
    </tbody>
  </table>
</div>
<div class="table_foot" >
  {{if footShow==true}}
        <nav aria-label="...">
          <ul class="pager">
            <li><a href="#">上一页</a></li>
            <li><a href="#">下一页</a></li>
          </ul>
        </nav>
  {{/if}}
</div>

*/
    })),
    columns: null,
    BeforeRender: null


};

function initialize(options) {
    var opts = $.extend(true, {}, tableDefaults, options);
    var ssTable = $(this);

    $.each(opts.columns, function(oi, ov) {
        one = { "title": "", "field": "", "width": "", "showType": "text", "format": "", "hidden": false };
        ov = $.extend({}, one, ov)
    })

    ssTable.addClass("ss_table_framework");

    if (opts.Class) {
        ssTable.addClass(opts.Class);
    }
    ssTable.html('<div class="ss_table_container" style="border:0px;"></div>');

    ssTable.find(".ss_table_container").html(opts.temp({
        "columns": opts.columns,
        "footShow": opts.footShow ? true : false

    }));

    ssTable.data("ssTable", opts);

}



$.fn.ssTable = function(method) {
    if ($.fn.ssTable[method]) {
      return $.fn.ssTable[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return initialize.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery.ssForm");
    }
  };



  $.fn.ssTable.Set = function(records) {
    var modalTemp = template.compile(jQuery.GetTemplate(function() {
      /*
            {{each data d i}}
              <tr>  
              {{each definition def di}}
                <td >{{d[def.field]}}</td>
              {{/each}}
              </tr>
            {{/each}}
          
          */
    }))

    var opts = $(this).data("ssTable");
    if (opts && opts.BeforeSet) {
      opts.BeforeSet(record, opts);
    }
    var d={
      data:records,
      definition:opts.columns
    }
    $(this).find(".table_content").html(
      modalTemp(d)
    )


  };




  var tableDefaults = $.fn.ssTable.defaults = {

"temp": template.compile(jQuery.GetTemplate(function() {
  /*


<div class="table_middle">
  <table class="card-info table table-striped" width="100%">
    <thead>
      <tr>
        {{each columns  column i}}
          {{if column.hidden!=true}}
            <th  title_field={{column.field}}>{{column.title}} </th>
          {{/if}}  
        {{/each}}
      </tr>
    </thead>
    <tbody class="table_content">
      <tr>
      </tr>
    </tbody>
  </table>
</div>
<div class="table_foot" >
  {{if footShow==true}}
        <nav aria-label="...">
          <ul class="pager">
            <li><a href="#">上一页</a></li>
            <li><a href="#">下一页</a></li>
          </ul>
        </nav>
  {{/if}}
</div>

*/
})),
columns:null,
BeforeRender: null


};

  function initialize(options) {
    var opts = $.extend(true, {}, tableDefaults, options);
    var ssTable = $(this);

    $.each(opts.columns, function(oi, ov) {
      one = { "title": "", "field": "", "width": "", "showType": "text", "format": "", "hidden": false };
      ov = $.extend({}, one, ov)
    })

    ssTable.addClass("ss_table_framework");
    if (opts.Class) {
      ssTable.addClass(opts.Class);
    }
    ssTable.html('<div class="ss_table_container" style="border:0px;"></div>');

    ssTable.find(".ss_table_container").html(opts.temp({
      "columns": opts.columns,
      "footShow": opts.footShow ? true : false

    }));

    ssTable.data("ssTable", opts);

  }


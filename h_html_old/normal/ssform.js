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


  $.fn.ssForm.Get = function() {
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
      record[Field] = Ele.val()

    }
    if (opts && opts.AfterGet) {
      opts.AfterGet(record, opts);
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
  var defaults = $.fn.ssForm.defaults = {

    "temp": template.compile(jQuery.GetTemplate(function() {
      /*

      {{each Form  Group g}}

        <table style="margin: 0 auto;{{Group.Style}}">
          {{each Group.Inputs  Row r}}
            <tr>
              {{each Row  Cell c}}
                    {{if Cell.field}}
                      <td class="ss_label" field_label="{{Cell.field}}"  >{{Cell.title}}:</td>
                      {{if Cell.showType=="text"}}
                            <td>
                              <input field={{Cell.field}} showType={{Cell.showType}} {{if Cell.Value}} value=Cell.Value {{/if}}>
                            </td>

                      {{else if Cell.showType=="select"}}

                            <td>
                              <select field={{Cell.field}}   showType={{Cell.showType}}>
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
    var opts = $.extend(true, {}, defaults, options);
    var ssForm = $(this);
    if (opts.BeforeRender) {
      opts.BeforeRender(ssForm);
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

    ssForm.find(".form_container").html(opts.temp({ Form: opts.Form }));
    ssForm.data("ssForm", opts);

    if (opts.AfterRender) {
      opts.AfterRender(ssForm, opts);
    }

  }

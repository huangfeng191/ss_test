// JQuery.extend({
//     "ajaxVerify":function(){
//     debugger
//     },
// });
jQuery.extend({
    ajaxVerify:jQuery.ajax
});



$.ajaxPrefilter(function( setting, originalOptions, jqXHR ) {


    var skipRe=/\?|\</

    function getCheckMsg(a) {
        var msg = ""
      
        function getSubInfo(a) {
  
          Object.values(a).forEach(function(v) {
            if (typeof v == "object") {
              getSubInfo(v)
            } else if (v && typeof v == "string") {
              if (v.match(skipRe)) {
                msg = "输入文本中含有特殊字符，清先删除";
                return false;
              }
            }
          });
        }
        getSubInfo(a)
        return msg;
    }


    if(setting.data){
        if(setting.type=="GET"){
            if(typeof setting.data=="string"){

                (setting.data.split("&")).map(function(v){
                    
                    var s=decodeURIComponent( v.split("=")[1]);

                    if(s&&s.match(skipRe)){
                        alert("含有特殊字符,清先删除。");
                        document.content.Loading.Hide(); 
                        jqXHR.abort();      
                    }                
                })

            }
        }else if (getCheckMsg(setting.data)) {
            alert("含有特殊字符,清先删除。");
            document.content.Loading.Hide();
            jqXHR.abort();
          }
    
        }


   
    
})



jQuery.extend({
    ajax:function(setting,option){
        if(typeof setting==  "object"){
            setting.timeout=30*1000;
    

            if(setting["type"]=="POST" ||setting["type"]=="PUT"  ){
                if(setting.data){
             

                    if(!setting.headers){
                        setting.headers={}
                    }
                    setting["headers"].verify=new SM3Entrpt(stringToByte(setting.data)).getStringEncrpResult().replace(/ /g,"");
                    
                }
            }
            // else if(setting["type"]=="GET"){
            //     if(setting.url){
            //         if (setting.url.split("?").length > 1) {
            //             s = setting.url.substring(setting.url.indexOf("?") + 1)
            //             if (s && s.match(skipRe)) {
            //               alert("含有特殊字符,清先删除。");
            //               return;
            //             }
            //           }
            //     }
            // }
        }
       return $.ajaxVerify(setting,option)
    }
});

(function (original) {
    jQuery.fn.clone = function () {
      var result           = original.apply(this, arguments),
          my_textareas     = this.find('textarea').add(this.filter('textarea')),
          result_textareas = result.find('textarea').add(result.filter('textarea')),
          my_selects       = this.find('select').add(this.filter('select')),
          result_selects   = result.find('select').add(result.filter('select'));
  
      for (var i = 0, l = my_textareas.length; i < l; ++i) $(result_textareas[i]).val($(my_textareas[i]).val());
      for (var i = 0, l = my_selects.length;   i < l; ++i) result_selects[i].selectedIndex = my_selects[i].selectedIndex;
  
      return result;
    };
  }) (jQuery.fn.clone);
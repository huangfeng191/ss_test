{
    type:"securityLog",
    getQueries:function(){
        var url="";
        var params={}
        var conditions=[]
        if(tableInfoDetails.type=="securityLog"){
            url="/nms/spring/log/secuLog",
            conditions=
        }


        return {
            url:url,
            params:params,
            conditions:conditions
        }
    },
    getColumns:function(){

    },
    getDefaultOption:function(){
        return {
    qBindings: {
      
    },
    query: {
      "firstQuery": true,
      "autoQuery": true,
      "url": "",
      "params": { },
      "conditions": [ ]
    },
    head: {
      id: "tableHead",
      title: "",
      buttons: [
        { "cmd": "print", "name": "打印", "class": "btn-default  " },
        { "cmd": "export", "name": "导出", "class": "btn-default  " }
      ],
    },
    columns: [
    ],
    footShow: true,
    
  }
    },
    init:function($dom,type){
        if(type){
            tableInfoDetails.type=type;
        }
        var setting =tableInfoDetails.getDefaultOption;
        $.extend(setting.query,tableInfoDetails.getQueries);
        $.extend(setting.columns,tableInfoDetails.getColumns);

        $dom.find("#"+tableInfoDetails.type+"_table").ssTable(setting);




    }
}
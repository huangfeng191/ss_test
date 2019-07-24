// ss table  query 

// showType select text date

ssTable={
    query:{
        "firstQuery":true,
        "autoQuery":true,
         "url":"/nms/misc_info/one.json",
         "params":{
          "query":{"tp":"ssTable"}
         } ,
        "conditions": [
              { "title": "槽位", "field": "inputCardConfigId", "showType": "select", "value": "1", binding: "Number1To4" },
              { "title": "端口", "field": "inputCardConfigPortId", "showType": "select", "value": "1", binding: "Number1To3" }
            ]
      },
      head:{
        id:"cardTableHead",
        title:"当前设备是",
        buttons: [
                { "cmd": "print", "name": "打印", "class": "btn-default  " },
                { "cmd": "export", "name": "导出", "class": "btn-default  " }
              ],
    
      }
}

  
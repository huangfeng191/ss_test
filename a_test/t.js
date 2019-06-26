if (typeof ret == "undefined" || ret == null || ret == "") {
  if (fg == "current") {
      $("#currentAlarm").empty();
      $("#currentAlarm").append("<tr><td>" + "无数据" + "</td></tr>")
  } else if (fg == "history") {
      $("#historyAlarm").empty();
      $("#historyAlarm").append("<tr><td>" + "无数据" + "</td></tr>")
  }
} else {
  var r = ret.content;
  
  if (fg == "current") {
      $("#currentAlarm").empty();
      if (ret.content.length == 0) {
          $("#currentAlarm").append("<tr><td>" + "无数据" + "</td></tr>")
      }else{
        alarmArr = ret.content;
          $.each(r, function(i, item) {
              var dd;
                var d = item[currentAlarm[3]];
                switch (d){
                   case 'CRITI':
                   dd = "严重";
                   break; 
                   case 'MAJOR':
                   dd = "主要";
                   break; 
                   case 'MINOR':
                   dd = "次要";
                   break; 
                    case 'EVENT':
                   dd = "事件";
                   break; 
               };     
               var ee;
                 var e = item[currentAlarm[1]].deviceStatus;
                 switch (e){
                 case 0:
                 ee = "离线";
                 break; 
                 case 1:
                 ee = "在线";
                 break; 
               };
               var aa;
                 var a = item[currentAlarm[1]].vendor;
                 switch (a){
                   case 'hw':
                   aa = "华为";
                   break; 
                   case 'ss':
                   aa = "赛思";
                   break; 
                   case 'dt':
                   aa = "大唐";
                   break; 
                   case 'xt':
                   aa = "讯腾";
                   break; 
                 };
              $("#currentAlarm").append("<tr><td class='ta-c'><span class='circle " + LEDState[item[currentAlarm[3]]] + "'></span></td><td>" +
                  item[currentAlarm[0]] + "</td><td>" + item[currentAlarm[1]].name + "</td><td>" +  item[currentAlarm[9]] + "</td><td>" +
                  item[currentAlarm[2]] + "</td><td>" + dd + "</td><td>" + item[currentAlarm[4]] + "</td><td>" +
                  formatDateTime(item[currentAlarm[5]]) + "</td><td>" + ee + "</td><td>" + aa + "</td><td>" +
                  item[currentAlarm[1]].area.name + "</td><td id=''  style='display:none'>"+ item.id+"</td></tr>")
          })
      }


  } else if (fg == "history") {
      $("#historyAlarm").empty();
      if (ret.content.length == 0) {
          $("#historyAlarm").append("<tr><td>" + "无数据" + "</td></tr>")
      }else{
        $.each(r, function(i, item) {
              var dd;
                var d = item[currentAlarm[3]];
                switch (d){
                   case 'CRITI':
                   dd = "严重";
                   break; 
                   case 'MAJOR':
                   dd = "主要";
                   break; 
                   case 'MINOR':
                   dd = "次要";
                   break; 
                    case 'EVENT':
                   dd = "事件";
                   break; 
               };     
               var aa;
                 var a = item[currentAlarm[1]].vendor;
                 switch (a){
                   case 'hw':
                   aa = "华为";
                   break; 
                   case 'ss':
                   aa = "赛思";
                   break; 
                   case 'dt':
                   aa = "大唐";
                   break; 
                   case 'xt':
                   aa = "讯腾";
                   break; 
                 };
            $("#historyAlarm").append("<tr><td class='ta-c'><span class='circle " + LEDState[item[currentAlarm[3]]] + "'></span></td><td>" +
                item[currentAlarm[0]] + "</td><td>" + item[currentAlarm[1]].name + "</td><td>" + item[currentAlarm[9]] + "</td><td>" +
                item[currentAlarm[2]] + "</td><td>" + dd + "</td><td>" + item[currentAlarm[4]] + "</td><td>" +
                formatDateTime(item[currentAlarm[5]]) + "</td><td>" + item[currentAlarm[6]] + "</td><td>" + item[currentAlarm[6]] + "</td><td>" +
                formatDateTime(item[currentAlarm[8]]) + "</td><td>" + formatDateTime(item[currentAlarm[7]]) + "</td><td>" +
                aa + "</td><td>" + item[currentAlarm[1]].area.name + "</td></tr>")
        })
      }
  } else {;
  }
}
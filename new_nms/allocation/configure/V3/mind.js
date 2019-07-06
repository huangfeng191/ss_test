a = [
    { "qCommand": "RTRV-PRMTR-LCIM", "qKey": "channelType", "qOthers": {}, "qGroup": "" },
    { "qCommand": "qCommand", "qKey": "qKey", "qOthers": {}, "qGroup": "" },
    { "qCommand": "RTRV-MASTER-INP", "qKey": "MASTERABLE", "qOthers": {}, "qGroup": "" },
    { "qCommand": "RTRV-PRIOR-INP", "qKey": "priority", "qOthers": {}, "qGroup": "" },
    { "qCommand": "RTRV-SQL-INP", "qKey": "level", "qOthers": {}, "qGroup": "SSM" },
    { "qCommand": "RTRV-SQL-INP", "qKey": "bit", "qOthers": {}, "qGroup": "SSM" },
    { "qCommand": "RTRV-SQL-INP", "qKey": "mode", "qOthers": {}, "qGroup": "SSM" },
    { "qCommand": "RTRV-SSMT-INP", "qKey": "SSMtime", "qOthers": {}, "qGroup": "" },
    { "qCommand": "RTRV-LOS-INP", "qKey": "LOStime", "qOthers": {}, "qGroup": "" },
]

// 针对数组数据按某个字段分组可以 采用 对象 {k:[field]}  模式
// 不分组的情况下命令可能也是一致的，但是field 肯定不同

var qGroup={}
a.forEach(function(one){
    if(one.qGroup){
        if(!(one.qGroup in qGroup) ){

            qGroup[one.qGroup]=[{"qOthers":one.qOthers||{},"qCommand":one.qCommand,"fields":[{"qKey":one.qKey,"field":one.field}]}];      
        }else{
            qGroup[one.qGroup]["fields"].push({"qKey":one.qKey,"field":one.field})
        }
    }else{
        qGroup[one.field]=[{"qOthers":one.qOthers||{},"qCommand":one.qCommand,"fields":[{"qKey":one.qKey,"field":one.field}]}];      
    }
})
var qCommands=Object.values(qGroup)||[];
var toSendCommand=[];
qCommands.forEach(function(v){

    var card = $("[qfield='inputCardConfigId']").val(); // 槽位 
    var cardPort = $("[qfield='inputCardConfigPortId']").val(); //端口 
    var toPost = "";
    var option = {}


    if (settingCommandDual.deviceType == "TSG3800") {
        toPost = "setTSG3800executeTL1"
        if (settingCommandDual.business == "input") {
          option = { "aid": "INP" + card + "[-" + cardPort + "]" };
        } else if (settingCommandDual.business == "system") {

        }
      } else if (settingCommandDual.deviceType == "TP1100") {
        toPost = "setExecuteTP1100Command"
        if (settingCommandDual.business == "input") {
          option = { "aid": card };
        } else if (settingCommandDual.business == "system") {
          option = { "aid": "SYS" };
        } else if (settingCommandDual.business == "clock") {
          option = { "aid": card };
        }
      } else if (settingCommandDual.deviceType == "SYNLOCKV3") {
        toPost = "setSYNLOCKV3executeTL1"
        if (settingCommandDual.business == "input") {
          var aid = ""
          if (card == "CLOCK") {
            aid = "CSCLK" + cardPort
          } else {
            aid = "CLCIM" + card + "-" + cardPort
          }
          option = { "aid": aid };

        } else if (settingCommandDual.business == "clock") {
          var aid = card
          option = { "aid": aid };


        } else if (settingCommandDual.business == "output") {
          var aid = "GTSOU" + card + "-" + cardPort
          option = { "aid": aid };
        }

      } else if (settingCommandDual.deviceType == "GNSS97") {
        toPost = "setGNSS97executeTL1"
        if (settingCommandDual.business == "input") {}
      }

    var oneCommand = {
        deviceId: window.top.SsCenter.deviceInfo.current.id,
        devParams: $.extend({}, v.qOthers, option)
      }
      toSendCommand.push(top.SsServer[toPost](oneCommand))
})


$.when(...toSendCommand).done(function(...res) {
    
}).fail(function(err) {
    // console.log("error" + err)
    $('#myModalTips').html(window.top.showTips(err.statusText));
    $('#myModalTips').modal('show');
  })












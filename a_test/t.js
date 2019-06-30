function renderConfigForm(that){
  configTp=null;
  if(!that){
    configTp=top.SsCenter.themes.configure.tp
  }else{
    configTp=    that.innerText
  }

    var configureForm = {
      "bindings": window.top.bindings,
      "qBindings": {
        InputCardConfig: [ //e1槽位
          { "Name": "1", "Value": "1" },
          { "Name": "2", "Value": "2" },
        ],
        InputCardConfigPort: [ //e1端口
          { "Name": "1", "Value": "1" },
          { "Name": "2", "Value": "2" },
          { "Name": "3", "Value": "3" },
          { "Name": "4", "Value": "4" },
        ]
      },
      queries: {
        "queryE1": {
          "id": "currentDeviceNm",
          "title": "当前设备：未选择",
          "change": "broadcastMethod.refreshInput()",
          "conditions": [
            { "title": "槽位", "field": "inputCardConfigId", "showType": "select", "value": "1", binding: "InputCardConfig" },
            { "title": "端口", "field": "inputCardConfigPortId", "showType": "select", "value": "1", binding: "InputCardConfigPort" }
          ]
        }
      },
      forms: {
        "default": [{
          "buttons": [
            // { "cmd": "reset", "name": "重置性能检测", "class": "btn-default btn-grey" },
            { "cmd": "set", "name": "设置", "class": "btn-default  btn-grey" },
            { "cmd": "print", "name": "打印", "class": "btn-default  btn-grey" },
            { "cmd": "export", "name": "导出", "class": "btn-default  btn-grey" }
          ],
          "Style": "width:500px",
  
        }],
        "InputsGNSS1": [
          [{ "title": "GNSS1使能", "field": "gnss1State", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "优先级", "field": "gnss1Priority", "showType": "text", }],
          [{ "title": "跟踪模式", "field": "gnss1TrackMode", "showType": "select", binding: "GnssTrackMode" }],
          [{ "title": "天线延迟", "field": "gnss1CableDelay", "showType": "text", }],
          [{ "title": "质量优先级状态", "field": "gnss1PQLState", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "质量优先级值", "field": "gnss1PQL", "showType": "text", }],
          [{ "title": "GNSS1模式", "field": "gnss1Mode", "showType": "select", binding: "GnssMode" }],
          [{ "title": "重新性能检测", "field": "restartPM", "showType": "select", binding: "IsOk" }],
          [{ "title": "经度", "field": "gnss1CurrentPositionJ", "showType": "text", disabled: true }],
          [{ "title": "纬度", "field": "gnss1CurrentPositionW", "showType": "text", disabled: true }],
          [{ "title": "高度", "field": "gnss1CurrentPositionH", "showType": "text", disabled: true }],
  
        ],
        "InputsGNSS2": [
          [{ "title": "GNSS2使能", "field": "gnss2State", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "优先级", "field": "gnss2Priority", "showType": "text", }],
          [{ "title": "跟踪模式", "field": "gnss2TrackMode", "showType": "select", binding: "GnssTrackMode" }],
          [{ "title": "天线延迟", "field": "gnss2CableDelay", "showType": "text", }],
          [{ "title": "质量优先级状态", "field": "gnss2PQLState", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "质量优先级值", "field": "gnss2PQL", "showType": "text", }],
          [{ "title": "重新性能检测", "field": "restartPM", "showType": "select", binding: "IsOk" }],
          [{ "title": "GNSS2模式", "field": "gnss2Mode", "showType": "select", binding: "GnssMode" }],
          [{ "title": "经度", "field": "gnss2CurrentPositionJ", "showType": "text", disabled: true }],
          [{ "title": "纬度", "field": "gnss2CurrentPositionW", "showType": "text", disabled: true }],
          [{ "title": "高度", "field": "gnss2CurrentPositionH", "showType": "text", disabled: true }],
  
        ],
        "InputsE1": [
          [{ "title": "端口使能", "field": "inputCardState", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "优先级", "field": "inputCardPriority", "showType": "text", }],
          [{ "title": "帧类型", "field": "inputCardFrameType", "showType": "select", binding: "FrameType" }],
          [{ "title": "CRC状态", "field": "inputCardCRCState", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "SSM状态", "field": "inputCardSSMState", "showType": "select", binding: "EnableDisable" }],
          [{ "title": "SSM位", "field": "inputCardSSMBit", "showType": "text", }],
          [{ "title": "质量等级", "field": "inputCardPQL", "showType": "select", binding: "QualityGrade" }],
          [{ "title": "重新性能检测", "field": "restartPM", "showType": "select", binding: "IsOk" }],
        ]
  
      }
    }
    var configureOne = null
    configureOne = {
      "bindings": configureForm.bindings,
      "Form": configureForm.forms.default,
      "qBindings": configureForm.qBindings,
      "query": {
        "id": "currentDeviceNm",
        "title": "当前设备：未选择"
      }
    }
    // ff
  
    var settingCommandDual = {
      type: null,
      getInputs: function(type) {
  
  
        // ,"valueCommand":{ "disable":"SET-DIS", "enable":"SET-EN" }
  
        return [
          [{ "title": "端口使能", "field": "inputEnable", "command": "SET-DIS", "key": "", "showType": "select", binding: "EnableDisableNormal", "valueCommand": { "disable": "SET-DIS", "enable": "SET-EN" } }],
          [{ "title": "质量等级", "field": "qualityGrade", "command": "SET-PRMTR-SQL", "key": "level", "showType": "select", binding: "Number4To8" }],
          [{ "title": "SSM模式", "field": "ssmMode", "command": "SET-PRMTR-SQL", "key": "mode", "showType": "select", binding: "SSMMode3800" }],
          [{ "title": "SSM位", "field": "ssmBit", "command": "SET-PRMTR-SQL", "key": "bit", "showType": "select", binding: "SSMBit3800" }],
          [{ "title": "频率格式", "field": "freqType", "command": "SET-PRMTR-INPT", "key": "Freq", "showType": "select", binding: "FreqType3800" }],
          [{ "title": "端接电阻", "field": "resistance", "command": "SET-PRMTR-INPT", "key": "term", "showType": "select", binding: "Resistance3800" }],
          [{ "title": "帧格式", "field": "frameType", "command": "SET-PRMTR-INPT", "key": "mode", "showType": "select", binding: "FrameType3800" }],
          [{ "title": "CRC开关", "field": "CRCSwitch", "command": "SET-PRMTR-INPT", "key": "crc", "showType": "select", binding: "OnOff" }],
          [{ "title": "相位清零", "field": "setPhaseZero", "command": "SET-PHASE_ZERO", "key": "clksrc", "showType": "select", binding: "SetPhaseZero3800" }],
          [{ "title": "优先级", "field": "priority", "command": "SET-PRMTR-PRI", "key": "priority", "showType": "select", binding: "Number0To4" }],
        ]
      },
      getQueries: function(type) {
        return {
          "id": "currentDeviceNm",
          "title": "当前设备：未选择",
          "change": "broadcastMethod.refreshInput()",
          "conditions": [
            { "title": "槽位", "field": "inputCardConfigId", "showType": "select", "value": "1", binding: "InputCardConfigPort" },
            { "title": "端口", "field": "inputCardConfigPortId", "showType": "select", "value": "1", binding: "Number1To3" }
          ]
        }
      },
      getFields: function(type) {
        settingCommandDual.type = type;
        var inputs = settingCommandDual.getInputs(type);
        var o = {}
        inputs.forEach(function(v) {
          o[v.field] = { "old": "", "now": "", "command": v.command, "key": v.key }
        })
        return o;
      },
      doPostOne: function(command, data) {
        console.log("ok" + command)
      },
  
      save: function(todoCommand) {
        if (todoCommand && todoCommand.length > 0) {
          var relativeFields = settingCommandDual.getInputs(settingCommandDual.type)
          var errInfo = [];
          var option = {};
          todoCommand.forEach(function(v) {
            var data = $extend({}, option);
            var cmd = v;
            relativeFields.forEach(function(input) {
              if (input.command == "value") {
                cmd = input.valueCommand[settingCommandDual.currentFieldsData[input.field].now];
              } else if (input.command == v) {
                data[input.key] = settingCommandDual.currentFieldsData[input.field].now;
              }
            })
            var ret = doPostOne(cmd, data)
            if (ret) {
              errInfo.push(ret)
            }
  
          })
          if (errInfo.length > 0) {
            console.log("error" + errInfo)
          } else {
            console.log("that`s Ok");
          }
        }
      },
      currentFieldsData: null,
      init: function(type) {
        settingCommandDual.currentFieldsData = $.extend({}, settingCommandDual.getFields(type));
      },
      getDeal: function() {
        var todoCommand = []
        newO = {
          "inputCardState": "enable"
        }
        $.each(newO, function(field, ov) {
          settingCommandDual.currentFieldsData[field].now = ov
        })
        $.each(settingCommandDual.currentFieldsData, function(field, ov) {
          if (ov.now != ov.old) {
            todoCommand.push(ov.command);
          }
        })
      }
  
    }
  
    var currentDevice = top.SsCenter.deviceInfo.current;
  
  
    if (configTp == "GNSS1") {
      configureOne.Form[0].Inputs = configureForm.forms.InputsGNSS1;
    } else if (configTp == "GNSS2") {
      configureOne.Form[0].Inputs = configureForm.forms.InputsGNSS2;
  
    } else if (configTp == "频率输入") {
      configureOne.Form[0].Inputs = configureForm.forms.InputsE1;
      configureOne.query = configureForm.queries.queryE1;
  
      if (currentDevice && (currentDevice.deviceType != "SM2000" && currentDevice.deviceType != "SM2000_GN")) {
  
        configureOne.Form[0].Inputs = settingCommandDual.getInputs(currentDevice.deviceType);
        configureOne.query = settingCommandDual.getQueries(currentDevice.deviceType);
      }
  
    }
    configureOne.afterRender = function(dom) {
      dom.find("button[command=reset]").on("click", function() {
  
        var currentDev = window.top.SsCenter.deviceInfo.current;
        if (!(currentDev && currentDev.id)) {
          $('#myModalTips').html(window.top.showTips("请先选择设备"));
          $('#myModalTips').modal('show');
          return;
        }
        theme = window.top.SsCenter.theme;
        if (window.top.SsCenter.themes[theme.key]["tp"]) {
          tp = window.top.SsCenter.themes[theme.key]["tp"];
        } else {
          tp = "GNSS1";
        }
        var other = [],
          obj = {};
        if (tp == "GNSS1") {
          obj.value = "5";
        } else if (tp == "GNSS2") {
          obj.value = "12";
        } else if (tp == "频率输入") {
          obj.value = $(dom).ssForm("GetQuery").inputCardConfigPortId || 1;
        }
        obj.node = 'restartPM';
        obj.index = '.0';
        other.push(obj);
  
        window.top.SsServer.setConfigsBatch(
          currentDev.id, tp, other).done(function(ret) {
          var isOk = true;
          $.each(ret, function(ai, av) {
            if (!av.code) {
              isOk = false;
              return false;
            }
          })
          if (isOk) {
            $('#myModalTips').html(window.top.showTips("重置成功"));
          } else {
            $('#myModalTips').html(window.top.showTips("重置失败"));
          }
          $('#myModalTips').modal('show')
  
          ;
  
        })
  
      })
  
  
  
      dom.find("button[command=set]").on("click", function() {
  
        var currentDev = window.top.SsCenter.deviceInfo.current;
        if (!(currentDev && currentDev.id)) {
          $('#myModalTips').html(window.top.showTips("请先选择设备"));
          $('#myModalTips').modal('show');
          return;
        }
        theme = window.top.SsCenter.theme;
        if (window.top.SsCenter.themes[theme.key]["tp"]) {
          tp = window.top.SsCenter.themes[theme.key]["tp"];
        } else {
          tp = "GNSS1";
        }
        var indexObj = null;
        if (tp == "GNSS1") {
          var indexObj = "1";
        } else if (tp == "GNSS2") {
          var indexObj = "1";
        } else if (tp == "频率输入") {
          var indexObj = "." + ($(dom).ssForm("GetQuery").inputCardConfigPortId || "1");
  
        }
  
  
  
  
        var formData = $("#device_config_input").ssForm("Get");
        var oldData = $("#device_config_input").data("old") || {};
        var changed = []
        debugger
        if (formData.restartPM) {
          obj = {};
          if (tp == "GNSS1") {
            obj.value = "5";
          } else if (tp == "GNSS2") {
            obj.value = "12";
          } else if (tp == "频率输入") {
            obj.value = indexObj;
          }
          obj.node = 'restartPM';
          obj.index = '.0';
          changed.push(obj);
  
        }
  
        $.each(formData, function(indexInArray, valueOfElement) {
          if ($.inArray(indexInArray, [
              "restartPM", "gnss1CurrentPositionJ", "gnss1CurrentPositionW", "gnss1CurrentPositionH", "gnss2CurrentPositionJ", "gnss2CurrentPositionW", "gnss2CurrentPositionH",
            ]) >= 0) {
            return true;
          }
  
          if (valueOfElement != oldData[indexInArray]) {
            changed.push({ "value": valueOfElement, "node": indexInArray, "index": indexObj })
          }
        });
        if (window.top.SsComm.isEmpty(changed)) {
          $('#myModalTips').html(window.top.showTips("未修改任何数据"));
          $('#myModalTips').modal('show');
          return;
        }
  
  
  
  
        window.top.SsServer.setConfigsBatch(
          currentDev.id, tp, changed).done(function(ret) {
          var isOk = true;
          $.each(ret, function(ai, av) {
            if (!av.code) {
              isOk = false;
              return false;
            }
          })
          if (isOk) {
            $('#myModalTips').html(window.top.showTips("设置成功"));
            $("#device_config_input").data("old", formData)
          } else {
            $('#myModalTips').html(window.top.showTips("设置失败"));
          }
          $('#myModalTips').modal('show')
  
          ;
  
        })
  
      })
    };
  
  
    if (configureOne) {
      $("#device_config_input").ssForm(
        configureOne
      )
    }
    theme = window.top.SsCenter.theme;
    window.top.SsCenter.themes[theme.key]["tp"] = configTp;
    if (configTp == "GNSS1" || configTp == "GNSS2" || configTp == "频率输入") {
      if (window.top.SsCenter.deviceInfo.current) {
  
        broadcastMethod.refreshInput();
  
  
      }
    }
  
  
  
  
  
  
}

$(".nav-three").click(function(){
  

    // 左侧导航 子选项切换
    changeNavLeft($($(this).parents(".my-collapse").prev()), 2);
  
    var targetObj = $("#" + $(this).data('index') + " ");
  
    targetObj.parents("#" + $(this).data('target')).find(".d-b").removeClass("d-b").addClass(
      'd-n');
    targetObj.removeClass("d-n").addClass('d-b');
  
    $(this).parents(".my-collapse").find(".three-active").removeClass("three-active");
    $(this).addClass("three-active");
      renderConfigForm(this)
});

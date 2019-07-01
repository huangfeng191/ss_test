
    function renderConfigForm(that) {
        var targetDom="#device_config_input";
        configTp = null;
        configGrade = null
        if (!that) {
          configTp = top.SsCenter.themes.configure.tp
          configGrade = top.SsCenter.themes.configure.grade;
        } else {
          configTp = that.innerText;
          configGrade = that.getAttribute("grade");
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
            if (settingCommandDual.getButtons(currentDevice.deviceType)) {
              configureOne.Form[0].buttons = settingCommandDual.getButtons(currentDevice.deviceType);
            }
            configureOne.query = settingCommandDual.getQueries(currentDevice.deviceType);
          }
  
        } else if (configTp == "输入测试") { // V3
          if (currentDevice && (currentDevice.deviceType == "SYNLOCKV3")) {
  
            configureOne.Form[0].Inputs = settingCommandDual.getInputs(currentDevice.deviceType);
            if (settingCommandDual.getButtons(currentDevice.deviceType)) {
              configureOne.Form[0].buttons = settingCommandDual.getButtons(currentDevice.deviceType);
            }
            configureOne.query = settingCommandDual.getQueries(currentDevice.deviceType);
          }
  
        }
        configureOne.afterRender = function(dom) {
          dom.find("button[command=reset]").on("click", function() {
            if (settingCommandDual.type == "SYNLOCKV3") {
              var card = $("[qfield='inputCardConfigId']").val();
              var cardPort = $("[qfield='inputCardConfigPortId']").val();
              var aid = ""
              if (card == "CLOCK") {
                aid = "CSCLK" + cardPort
              } else {
                aid = "CLCIM" + card + "-" + cardPort
              }
              var oneCommand = {
                deviceId: window.top.SsCenter.deviceInfo.current.id,
                devParams: {
                  "aid": aid
                }
              }
              oneCommand.devParams.command = "SET-CHAN-RETEST";
  
              top.SsServer.setSYNLOCKV3executeTL1(oneCommand).done(function(ret) {
  
                top.showTipInfo($(document), ret);
  
              }).fail(function(err) {
                $('#myModalTips').html(window.top.showTips("操作失败"));
                $('#myModalTips').modal('show');
              })
  
  
            }
  
  
          })
  
  
  
          dom.find("button[command=set]").on("click", function() {
  
            var currentDev = window.top.SsCenter.deviceInfo.current;
            if (!(currentDev && currentDev.id)) {
              $('#myModalTips').html(window.top.showTips("请先选择设备"));
              $('#myModalTips').modal('show');
              return;
            }
            theme = window.top.SsCenter.theme;
  
            if (currentDev.deviceType == "TSG3800" ||
              currentDev.deviceType == "SYNLOCKV3") {
              settingCommandDual.makeAGoodDeal();
              return;
            }
  
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
  
  
  
  
            var formData = $(targetDom).ssForm("Get");
            var oldData = $(targetDom).data("old") || {};
            var changed = []
  
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
                $(targetDom).data("old", formData)
              } else {
                $('#myModalTips').html(window.top.showTips("设置失败"));
              }
              $('#myModalTips').modal('show')
  
              ;
  
            })
  
          })
        };
  
  
        if (configureOne) {
          $(targetDom).ssForm(
            configureOne
          )
        }
        theme = window.top.SsCenter.theme;
        window.top.SsCenter.themes[theme.key]["tp"] = configTp;
        window.top.SsCenter.themes[theme.key]["configGrade"] = configGrade;
        if (configTp == "GNSS1" || configTp == "GNSS2" || configTp == "频率输入" || configTp == "输入测试") {
          if (window.top.SsCenter.deviceInfo.current) {
  
            broadcastMethod.refreshInput();
  
  
          }
        }
  
  
  
  
  
  
      }
  
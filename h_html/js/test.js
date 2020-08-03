doQueriesAfter: function(deviceType,mirror) {
    if(deviceType=="SYNLOCKV3"){
      settingCommandDual.doQueriesV3(mirror)
      return 
    }
   
    // var inputs = settingCommandDual.getInputs(deviceType);
    var inputs = settingCommandDual.getInputs(deviceType);

    // 针对数组数据按某个字段分组可以 采用 对象 {k:[field]}  模式
    // 不分组的情况下命令可能也是一致的，但是field 肯定不同

    var qGroup = {}
    inputs.forEach(function(aOne) {
      var one = aOne[0];

      if (one.qGroup) {
        if (!(one.qGroup in qGroup)) {

          qGroup[one.qGroup] = {
            "qOthers": one.qOthers || {},
            "qCommand": one.qCommand,
            "qIndexKey": one.qIndexKey,
            "qLevel": one
              .qLevel,
            "fields": [{
              "qKey": one.qKey,
              "qIndexKey": one.qIndexKey,
              "qIndexBase": one.qIndexBase,
              "qIndexLevel": one
                .qIndexLevel,
              "field": one.field
            }]
          };
        } else {
          qGroup[one.qGroup]["fields"].push({
            "qKey": one.qKey,
            "qIndexKey": one.qIndexKey,
            "qLevel": one.qLevel,
            "qIndexBase": one
              .qIndexBase,
            "qIndexLevel": one.qIndexLevel,
            "field": one.field
          })
        }
      } else {
        qGroup[one.field] = {
          "qOthers": one.qOthers || {},
          "qCommand": one.qCommand,
          "qIndexKey": one.qIndexKey,
          "qLevel": one
            .qLevel,
          "fields": [{
            "qKey": one.qKey,
            "qIndexKey": one.qIndexKey,
            "qIndexBase": one.qIndexBase,
            "qIndexLevel": one
              .qIndexLevel,
            "field": one.field
          }]
        };
      }
    })
    var qCommands = Object.values(qGroup) || [];
    var toSendCommand = [];
    var toSendField = [];
    var card;
    var cardPort;
    $.each(qCommands, function(oi, v) {

      if (!v.qCommand) {
        return true;
      }

      var postCommand = v.qCommand;
      card = $("" + settingCommandDual.formDom + " [qfield='inputCardConfigId']").val(); // 槽位 
      cardPort = $("" + settingCommandDual.formDom + " [qfield='inputCardConfigPortId']").val(); //端口 
      settingCommandDual.cardId = card;
      settingCommandDual.cardPort = cardPort;
      var toPost = "";
      var option = { "aid": "" }
      var currentCards = settingCommandDual.currentCards;

      if (settingCommandDual.deviceType == "TSG3800") {
        toPost = "setTSG3800executeTL1"
        if (settingCommandDual.business == "input") {
          option = { "aid": "INP" + card + "-" + cardPort + "" };
        } else if (settingCommandDual.business == "system") {

        }
      } else if (settingCommandDual.deviceType == "GNSS97") {
        toPost = "setGNSS97executeTL1"
        if (settingCommandDual.business == "input") {

        } else if (settingCommandDual.business == "system") {
          option = { "aid": settingCommandDual.mainAidGNSS97 };
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
            if (v.qCommand == "RTRV-PRMTR-LCIM") {
              aid = currentCards[0].name; // 钟卡
              postCommand = "RTRV-PRMTR-SCLK";
            } else if (v.qCommand == "RTRV-STATE-LCIM") {
              aid = currentCards[0].name;
              postCommand = "RTRV-STATE-SCLK";
            }
          } else {
            aid = "CLCIM" + card + "-" + cardPort
            // 说明查的是板子
            if (v.qIndexKey) {
              aid = "BLCIM" + card
            }
          }

          option["aid"] = aid;

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
      if (v.qLevel == "11") {
        $.each(settingCommandDual.currentCards, function(oi, x) {
          if (x.card == card) {
            option.aid = x.name;
          }
        })
      }

      if (v.qLevel == "21") {
        $.each(settingCommandDual.currentCards, function(oi, x) {
          if (x.card == card) {
            $.each(x.ports || [], function(portI, portV) {
              if (cardPort == portV.port) {
                option.aid = portV.name;
              }
            })
          }
        })
      }

      var oneCommand = {
        deviceId: window.top.SsCenter.deviceInfo.current.id,
        devParams: $.extend({}, v.qOthers, option)
      }
      oneCommand.devParams.command = postCommand;
      if(!mirror&&deviceType=="TP1100"){
        toSendCommand.push(top.SsServer[toPost + "_Sync"](oneCommand))

      }
      // toSendCommand.push(top.SsServer[toPost](oneCommand))
      toSendField.push(v.fields);
    })

    function dealQueries(a1){


      var o = {}
      var isErr = false;
      $.each(a1, function(oi, ov) {
        if (ov[1] != "success") {
          $('#myModalTips').html(window.top.showTips("查询错误"));
          $('#myModalTips').modal('show');
          return false;
        }
        var oneData = ov[0].data // 未查询到数据
        if (!oneData) {
          return true;
        }
        if (top.SsComm.isArray(oneData)) {
          if (oneData.length == 0) {
            return true;
          }
        }
        var fs = toSendField[oi]; // 每个请求可设置的字段 可多个
        $.each(fs, function(fsi, fsv) {
          if (!fsv.qIndexKey) {
            if (top.SsComm.isArray(oneData)) {
              o[fsv.field] = oneData[0][fsv.qKey]
            } else {
              o[fsv.field] = oneData[fsv.qKey]
            }
          } else {
            var businessId = ""
            if (fsv.qIndexBase) {
              businessId = fsv.qIndexBase[settingCommandDual.cardId]
              if (!businessId) {
                businessId = fsv.qIndexBase["default"] || "";
              }
            }
            //  // 1 card  2 cardPort 11 板卡业务名  21 端口业务名 
            if (fsv.qIndexLevel == 1) {
              businessId = businessId + settingCommandDual.cardId;
            }
            if (fsv.qIndexLevel == 2) {
              businessId = businessId + settingCommandDual.cardPort;
            }
            if (fsv.qIndexLevel == 21) {
              $.each(settingCommandDual.currentCards, function(oi, x) {
                if (x.card == settingCommandDual.cardId) {
                  $.each(x.ports || [], function(portI, portV) {
                    if (settingCommandDual.cardPort == portV.port) {
                      businessId = portV.name;
                    }
                  })
                }
              })
            }

            if (businessId) {
              var get1 = null;
              if (top.SsComm.isArray(oneData)) {
                get1 = oneData.filter(function(x) {
                  return x[fsv.qIndexKey] == businessId;
                })
              } else {
                get1 = (oneData[fsv.qKey] || oneData["channelList"] || []).filter(function(x) {
                  return x[fsv.qIndexKey] == businessId;
                })
              }

              if (get1.length > 0) {
                o[fsv.field] = get1[0][fsv.qKey];
                if (settingCommandDual.business == "input" && settingCommandDual.deviceType == "TP1100") {
                  if (fsv.qKey == "inpstatus") { // PRS/INPx  prsstatus(inpstatus)
                    if (!o[fsv.field]) {
                      o[fsv.field] = get1[0]["prsstatus"]
                    }
                  }
                }
              }
            } else {
              get1 = oneData[0][fsv.qIndexKey];
              o[fsv.field] = get1[fsv.qKey]

            }



          }

        })
      })
      var parDom = $(".nav-left").find("li.active").find("[to]").attr("to");
      parDom = $("#item-box-" + parDom);
      if (settingCommandDual.queriesToSet[deviceType] && settingCommandDual.queriesToSet[deviceType][settingCommandDual.business]) {
        changeBinds = settingCommandDual.queriesToSet[deviceType][settingCommandDual.business];
        $.each(o, function(ok, ov) {
          if (ok in changeBinds) {
            o[ok] = changeBinds[ok][ov] || changeBinds[ok]["default"];

          }
        })
      }
      if (settingCommandDual.deviceType == "SYNLOCKV3") {
        if (!o["signalType"]) {
          (settingCommandDual.currentCards || []).forEach(function(x) {
            if (x.card == settingCommandDual.cardId) {
              (x.ports || []).forEach(function(port) {
                if (port.port == settingCommandDual.cardPort) {
                  o["signalType"] = port.channeltype
                }
              })
            }
          })
        }
      }
      if ((settingCommandDual.deviceType == "GNSS97" && settingCommandDual.business == "input")) {
        Object.keys(o).forEach(function(k) {
          if (o[k]) {
            var aPorts = o[k].split("")
            o[k] = aPorts[cardPort - 1];
            aPorts[cardPort - 1] = "x";
            o[k + "_all1"] = o[k];
            o[k + "_all"] = aPorts.join("");
          }

        })
      }
      parDom.find(settingCommandDual.formDom).ssForm("Set", o);
      parDom.find(settingCommandDual.formDom).data("old", o);
      Loading.Hide();


      if (settingCommandDual.business == "input" && parDom.find("[qfield='inputCardConfigId']").val() == "PRS") {
        parDom.find(settingCommandDual.formDom).find("[field=SSMEnable]").parent().parent().css("display", "none");
        parDom.find(settingCommandDual.formDom).find("[field=SSMBit]").parent().parent().css("display", "none");
        parDom.find(settingCommandDual.formDom).find("[field=CRCEnable]").parent().parent().css("display", "none");
      } else {
        parDom.find(settingCommandDual.formDom).find("[field=SSMEnable]").parent().parent().css("display", "table-row");
        parDom.find(settingCommandDual.formDom).find("[field=SSMBit]").parent().parent().css("display", "table-row");
        parDom.find(settingCommandDual.formDom).find("[field=CRCEnable]").parent().parent().css("display", "table-row");
      }
    

    }

    if(mirror){
      if(deviceType=="TP1100"){
        dealQueries([
          [
            settingCommandDual.Tp1100ResultMirror,
            "success" 
          ]
        ])  
      }
      return 
    }
   
    $.when(...toSendCommand).done(function(...a1) {
      
      if (toSendCommand.length == 1) {
        a1 = [a1]
        dealQueries(a1)
      }

    }).fail(function(err) {
      Loading.Hide();
      // console.log("error" + err)
      $('#myModalTips').html(window.top.showTips(err.statusText));
      $('#myModalTips').modal('show');
    })

  }
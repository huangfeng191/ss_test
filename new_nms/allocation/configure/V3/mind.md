配置只关心 MASTNOR 状态的卡






         // qIndexLevel =2 :baseIndex+cardPort
              if (fsv.qIndexLevel == 2) {
                businessId = businessId + settingCommandDual.cardPort;
              }
                // 1 card  2 cardPort 11 板卡业务名  21 端口业务名
              if (fsv.qIndexLevel == 11) {
                getCard =settingCommandDual.currentCards.filter(function(x){
                  return x.card== settingCommandDual.cardId;
                })
                if(getCard&&getCard.length>0){
                  businessId=getCard[0].name;
                }
              }
              if (fsv.qIndexLevel == 21) {
                getCard =settingCommandDual.currentCards.filter(function(x){
                  return x.port== settingCommandDual.cardPort;
                })
                if(getCard&&getCard.length>0){
                  businessId=getCard[0].name;
                }
              }



       if ($("[qField='inputCardConfigId']").val() == "CLOCK" &&
                  $("[field=signalType]").attr("binding") == "FrameTypeInputV3"
                ) {
                  $("[field=signalType]").attr("binding", "FrameTypeClockV3");
                  top.SsComm.setSelectOption($("[field=signalType]"), "FrameTypeClockV3");
                }


                

                if ($("[qField='inputCardConfigId']").val() == "CLOCK" &&
                  $("[field=signalType]").attr("binding") == "FrameTypeInputV3"
                ) {
                  $("[field=signalType]").attr("binding", "FrameTypeClockV3");
                  top.SsComm.setSelectOption($("[field=signalType]"), "FrameTypeClockV3");
                }


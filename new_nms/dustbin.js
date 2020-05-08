c=function (type) {
    var inputs = null;
    if (type == "TSG3800") {
      inputs = [
        // [{ "title": "端口使能", "field": "inputEnable", "command": "value", "key": "", "showType": "select", binding: "EnableDisableNormal", "valueCommand": { "disable": "SET-DIS", "enable": "SET-EN" },"qCommand": "RTRV-COND-INP","qKey": "mode","qOthers": "","qGroup": "" ,"qLevel":"21"     }],
        [{ "title": "质量等级", "field": "qualityGrade", "command": "SET-PRMTR-SQL", "key": "level", "showType": "select", binding: "QualityGrade3800", "others": { "validaid": 1 }, "qCommand": "RTRV-DATA-SQL", "qKey": "level", "qOthers": "", "qGroup": "", "qLevel": "21", "sLevel": "21" }],
        [{ "title": "SSM模式", "field": "ssmMode", "command": "SET-PRMTR-SQL", "key": "mode", "showType": "select", binding: "SSMMode3800", "qCommand": "RTRV-CONF", "qKey": "ssm", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "SSM位", "field": "ssmBit", "command": "SET-PRMTR-SQL", "key": "bit", "showType": "select", binding: "Number4To8", "qCommand": "RTRV-CONF", "qKey": "e1SSMbit", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "频率格式", "field": "freqType", "command": "SET-PRMTR-INPT", "key": "Freq", "showType": "select", binding: "FreqType3800", "others": { "validaid": 1 }, "qCommand": "RTRV-CONF", "qKey": "signalfrequency", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "端接电阻", "field": "resistance", "command": "SET-PRMTR-INPT", "key": "term", "showType": "select", binding: "Resistance3800", "qCommand": "RTRV-CONF", "qKey": "termination", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "帧格式", "field": "frameType", "command": "SET-PRMTR-INPT", "key": "mode", "showType": "select", binding: "FrameType3800", "qCommand": "RTRV-CONF", "qKey": "signaltype", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "CRC开关", "field": "CRCSwitch", "command": "SET-PRMTR-INPT", "key": "crc", "showType": "select", binding: "ONOFF", "qCommand": "RTRV-CONF", "qKey": "crc", "qOthers": "", "qGroup": "CONF", "qLevel": "21" }],
        [{ "title": "优先级", "field": "priority", "command": "SET-PRMTR-PRI", "key": "priority", "showType": "select", binding: "Number0To4MonDis", "others": { "validaid": 1 }, "qCommand": "RTRV-PRMTR-PRI", "qKey": "level", "qOthers": "", "qGroup": "", "qLevel": "21" }],

        // [{ "title": "相位清零", "field": "setPhaseZero", "command": "SET-PHASE_ZERO", "key": "clksrc", "showType": "select", binding: "SetPhaseZero3800" }],
      ]
      if (settingCommandDual.business == "system") {
        inputs = [
          [{ "title": "自动返回", "field": "autoReturn", "command": "SET-PRMTR-AR", "key": "validaid", "showType": "select", binding: "ONOFF", "qCommand": "RTRV-PRMTR-REF", "qKey": "ar", "qOthers": "", "qGroup": "ref" }],
          [{ "title": "自动转换", "field": "autoSwitch", "command": "SET-PRMTR-AS", "key": "validaid", "showType": "select", binding: "ONOFF", "qCommand": "RTRV-PRMTR-REF", "qKey": "as", "qOthers": "", "qGroup": "ref" }],
          [{ "title": "选源模式", "field": "reference2e", "command": "SET-PRMTR-REF", "key": "mode", "showType": "select", binding: "Reference2e3800", "qCommand": "RTRV-PRMTR-REF", "qKey": "mode", "qOthers": "", "qGroup": "ref" }],
          [{ "title": "SSM延时", "field": "setDelay", "command": "SET-PRMTR-DELAY", "key": "delay", "showType": "select", binding: "Number1To30", "qCommand": "RTRV-PRMTR-DELAY", "qKey": "delay", "qOthers": "", "qGroup": "" }],

          [{ "title": "当前参考源", "field": "cRef", "command": "", "disabled": "true", "key": "", "showType": "text", "qCommand": "RTRV-PRMTR-REF", "qKey": "aid", "qOthers": "", "qGroup": "ref" }],
          // [{ "title": "当前输入源", "field": "cInput", "command": "", "key": "", "showType": "text", "qCommand": "RTRV-COND-INP", "qKey": "aid", "qOthers": { "aid": "ALL" }, "qGroup": "", "qIndexKey": "mode", "qIndexBase": {  "default": "REF" } }],

        ];
      }

      if (settingCommandDual.business == "clock") {
        inputs = [
          [{ "title": "使能", "field": "inputEnable", "command": "value", "key": "validaid", "showType": "select", binding: "EnableDisableNormal", "valueCommand": { "disable": "SET-DIS", "enable": "SET-ENA" }, "qCommand": "RTRV-COND-EQPT", "qKey": "status", "qOthers": "", "qGroup": "ref", "qIndexLevel": "1", "qIndexKey": "aid", "sLevel": '1' }],
          [{ "title": "当前输出时钟", "field": "setClock", "command": "SET-CLK", "key": "validaid", "showType": "select", binding: "YESNO", "qCommand": "RTRV-COND-EQPT", "qKey": "status", "qOthers": "", "qGroup": "ref", "qIndexLevel": "1", "qIndexKey": "aid", "sLevel": '1' }],
        ];
      }

      if (settingCommandDual.business == "output") {
        inputs = [

        ];
      }
      //3800in

    } else if (type == "GNSS97") {
      inputs = [

        [{ "title": "端口优先级", "field": "priority1", "command": "SET-REF-PRIO", "key": "params", "showType": "select", binding: "Number0To8", "others": "", "qCommand": "RTRV-EQPT", "qKey": "priority1", "qOthers": "", "qGroup": "group", "qCommand": "RTRV-EQPT", "qKey": "priority1", "qOthers": "", "qGroup": "group", "qLevel": '11', "sLevel": '11' }],
        [{ "title": "端口SSM位", "field": "sa", "command": "SET-REF-SA", "key": "params", "showType": "select", binding: "SSMBitGNSS97", "qCommand": "RTRV-EQPT", "qKey": "sa", "qOthers": "", "qGroup": "group", "qCommand": "RTRV-EQPT", "qKey": "sa", "qOthers": "", "qGroup": "group", "qLevel": '11', "sLevel": '11' }],
        [{ "title": "端口2MHz信号等级", "field": "tl", "command": "SET-REF-TL", "key": "params", "showType": "select", binding: "SSMLevelGNSS97", "qCommand": "RTRV-EQPT", "qKey": "tl", "qOthers": "", "qGroup": "group", "qCommand": "RTRV-EQPT", "qKey": "tl", "qOthers": "", "qGroup": "group", "qLevel": '11', "sLevel": '11' }],
        [{ "title": "端口鉴相使能", "field": "portEnable", "command": "SET-REF-PH", "key": "params", "showType": "select", binding: "EnableDisable", "qCommand": "RTRV-EQPT", "qKey": "en", "qOthers": "", "qGroup": "group", "qCommand": "RTRV-EQPT", "qKey": "en", "qOthers": "", "qGroup": "group", "qLevel": '11', "sLevel": '11' }],
        [{ "title": "端口SSM使能", "field": "portSSMEnable", "command": "SET-REF-IEN", "key": "params", "showType": "select", binding: "EnableDisable", "qCommand": "RTRV-EQPT", "qKey": "en", "qOthers": "", "qGroup": "group", "qCommand": "RTRV-EQPT", "qKey": "en", "qOthers": "", "qGroup": "group", "qLevel": '11', "sLevel": '11' }],

      ];


      if (settingCommandDual.business == "system") {
        inputs = [
          [{ "title": "面板输入选择", "field": "fb", "command": "ET-MCP-FB", "key": "params", "showType": "select", binding: "FrontBackGNSS97", others: { "aid": "u" }, "qCommand": "RTRV-EQPT", "qKey": "fb", "qOthers": "", "qGroup": "group" }],
          [{ "title": "Rb盘2Mb输入SSM位", "field": "sa", "command": "SET-RB-SA", "key": "params", "showType": "select", binding: "RBSAGNS97", others: { "aid": "u" }, "qCommand": "RTRV-EQPT", "qKey": "sa", "qOthers": "", "qGroup": "group" }],
          [{ "title": "Rb盘2MHz输入信号等级", "field": "tl", "command": "SET-RB-TL", "key": "params", "showType": "select", binding: "RBTL97", others: { "aid": "u" }, "qCommand": "RTRV-EQPT", "qKey": "tl_2mhz", "qOthers": "", "qGroup": "group" }],
        ];
      }

      if (settingCommandDual.business == "clock") {
        inputs = [
          [{ "title": "主备状态", "field": "msmode", "command": "SET-MAIN", "key": "msmode", "showType": "select", binding: "ClockMainGNSS97", "qCommand": "RTRV-EQPT", "qKey": "msmode", "qOthers": "", "qGroup": "msmode", "qLevel": "11", "sLevel": "11" }],
        ];
      }
      if (settingCommandDual.business == "output") {
        inputs = [
          [{ "title": "信号类型", "field": "signalType", "command": "SET-OUT-TYP", "key": "params", "showType": "text", "maxLength": "16", binding: "", "sLevel": "11", "qCommand": "RTRV-EQPT", "qKey": "outtype", "qOthers": "", "qGroup": "OUT", "qLevel": "11" }],
          [{ "title": "信号等级", "field": "signalOutLevel", "command": "SET-OUT-LEV", "key": "params", "showType": "select", binding: "SignalOutLevelGNSS97", "sLevel": "11", "qCommand": "RTRV-EQPT", "qKey": "level", "qOthers": "", "qGroup": "OUT", "qLevel": "11" }],
          [{ "title": "主备模式", "field": "signalOutMod", "command": "SET-OUT-MOD", "key": "params", "showType": "select", binding: "SignalOutModGNSS97", "sLevel": "11", "qCommand": "RTRV-EQPT", "qKey": "outsta", "qOthers": "", "qGroup": "OUT", "qLevel": "11" }],

        ];
      }

    } else if (type == "TP1100") {
      inputs = [
        [{ "title": "使能", "field": "inputEnable", "command": "edEqpt", "key": "INSTATE", "showType": "select", binding: "InputEnableTP1100", "qCommand": "rtrvCraft", "qKey": "instate", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "信号类型", "field": "signalType", "command": "edSync", "key": "FRMTYPE", "showType": "select", binding: "FrameTypeTP1100", "qCommand": "rtrvCraft", "qKey": "frmtype", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "质量等级", "field": "qualityGrade", "command": "edSync", "key": "QLEVEL", "showType": "select", binding: "QualityGradeTP1100", "qCommand": "rtrvCraft", "qKey": "qlevel", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "优先级", "field": "priority", "command": "edSync", "key": "PRIORITY", "showType": "select", binding: "PriorityTP1100", "qCommand": "rtrvCraft", "qKey": "priority", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "SSM使能", "field": "SSMEnable", "command": "edSync", "key": "SSMENA", "showType": "select", binding: "EnableDisableUp", "qCommand": "rtrvCraft", "qKey": "ssmena", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "SSM位", "field": "SSMBit", "command": "edSync", "key": "SSMBIT", "showType": "select", binding: "Number4To8", "qCommand": "rtrvCraft", "qKey": "ssmbit", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "CRC4使能", "field": "CRCEnable", "command": "edSync", "key": "CRCENA", "showType": "select", binding: "EnableDisableUp", "qCommand": "rtrvCraft", "qKey": "crcena", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        [{ "title": "状态", "field": "inpstatus", "command": "", "key": "", "showType": "text", "disabled": true, "qCommand": "rtrvCraft", "qKey": "inpstatus", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
      ]
      if (settingCommandDual.business == "system") {
        inputs = [
          [{ "title": "系统运行模式", "field": "sysModeTP1100", "command": "setSysMode", "key": "SYSMODE", "showType": "select", binding: "SysModeTP1100", "qCommand": "rtrvCraft", "qKey": "syncmode", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexBase": { "default": "SYS" } }],
          [{ "title": "源选择方式", "field": "sysPerModeTP1100", "command": "edSync", "key": "REFMODE", "showType": "select", binding: "SysPerModeTP1100", "qCommand": "rtrvCraft", "qKey": "refmode", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexBase": { "default": "SYS" } }],
          [{ "title": "当前源", "field": "sysInpRefTP1100", "command": "edSync", "key": "INPREF", "showType": "select", binding: "InputTypeTP1100", "qCommand": "rtrvCraft", "qKey": "inpref", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexBase": { "default": "SYS" } }],
        ];
      }

      if (settingCommandDual.business == "clock") {
        inputs = [
          [{ "title": "时钟卡模式", "field": "clockMode", "command": "edEqpt", "key": "IOCMODE", "showType": "select", binding: "ClockModeTP1100", "qCommand": "rtrvCraft", "qKey": "iocmode", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
          [{ "title": "状态", "field": "clockState", "command": "edEqpt", "key": "IOCSTATE", "showType": "select", binding: "ClockStateTP1100", "qCommand": "rtrvCraft", "qKey": "iocstate", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
          [{ "title": "类型", "field": "clockType", "command": "edEqpt", "key": "CLKTYPE", "showType": "select", binding: "ClockTypeTP1100", "qCommand": "rtrvCraft", "qKey": "clktype", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
          [{ "title": "运行状态", "field": "clkmode", "command": "", "key": "", "showType": "text", "disabled": "true", "qCommand": "rtrvCraft", "qKey": "clkmode", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        ];
      }
      if (settingCommandDual.business == "output") {
        inputs = [
          [{ "title": "使能", "field": "outstate", "command": "edEqpt", "key": "OUTSTATE", "showType": "select", binding: "EnableDisableUp", "qCommand": "rtrvCraft", "qKey": "outstate", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1", "sLevel": "1" }],
          [{ "title": "信号类型", "field": "frmtype", "command": "edSync", "key": "FRMTYPE", "showType": "select", binding: "FrameTypeOutTP1100", "qCommand": "rtrvCraft", "qKey": "frmtype", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1", "sLevel": "1" }],
          // [{ "title": "自由振荡输出", "field": "freeflt", "command": "", "key": "", "showType": "text", "disabled": "true", "qCommand": "rtrvCraft", "qKey": "freeflt", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
          // [{ "title": "守时输出", "field": "holdflt", "command": "", "key": "", "showType": "text", "disabled": "true", "qCommand": "rtrvCraft", "qKey": "holdflt", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
       
          [{ "title": "自由振荡输出","field": "freeflt","command": "edSync","key": "FREEFLT","showType": "select", binding:"FreefltOutTP1100" , "disabled": "false", "qCommand": "rtrvCraft", "qKey": "freeflt", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1", "sLevel": "1"  }],
          [{ "title": "守时输出","field": "holdflt","command": "edSync","key": "HOLDFLT","showType": "select", binding:"HoldfltOutTP1100", "disabled": "false", "qCommand": "rtrvCraft", "qKey": "holdflt", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" , "sLevel": "1" }],
          [{ "title": "状态", "field": "outstatus", "command": "", "key": "", "showType": "text", "disabled": "true", "qCommand": "rtrvCraft", "qKey": "outstatus", "qOthers": "", "qGroup": "craft", "qIndexKey": "name", "qIndexLevel": "1" }],
        ];
      }
      // v3in
    } else if (type = "SYNLOCKV3") {
      inputs = [

        [{ "title": "端口使能", "field": "inputEnable", "command": "value", "key": "", "showType": "select", binding: "EnableDisableNormal", "valueCommand": { "disable": "SET-DIS", "enable": "SET-ENA" }, "qCommand": "RTRV-STATE-LCIM", "qKey": "channelstate", "qOthers": { "cmdtype": "CHANSTATE" }, "qGroup": "", "qIndexKey": "channelID", "qIndexBase": { "CLOCK": "CSCLK", "default": "CLCIM" }, "qIndexLevel": "21" }],
        [{ "title": "信号类型", "field": "signalType", "command": "SET-CHANPM-LCIM", "key": "VALUE", "showType": "select", binding: "FrameTypeInputV3", "others": { "CMDTYPE": "CHANTYPE" }, "qCommand": "RTRV-STATE-LCIM", "qKey": "channeltype", "qOthers": { "cmdtype": "CHANTYPE" }, "qGroup": "", "qIndexKey": "channelID", "qIndexLevel": "21", "qIndexBase": { "CLOCK": "CSCLK", "default": "CLCIM" } }],
        // // [{ "title": "主用性设置", "field": "masterable", "command": "SET-MASTER-INP", "key": "MASTERABLE", "showType": "select", binding: "YESNO", "qCommand": "RTRV-MASTER-INP", "qKey": "masterable", "qOthers": {}, "qGroup": "" }],
        [{ "title": "优先级", "field": "priority", "command": "SET-PRIOR-INP", "key": "priority", "showType": "select", binding: "Number1To23And255", "qCommand": "RTRV-PRIOR-INP", "qKey": "priority", "qOthers": {}, "qGroup": "" }],
        [{ "title": "SSM等级", "field": "qualityGrade", "command": "SET-SQL-INP", "key": "level", "showType": "select", binding: "QualityGradeV3", "group": "SSM", "qCommand": "RTRV-SQL-INP", "qKey": "level", "qOthers": {}, "qGroup": "SSM" }],
        [{ "title": "SSM位", "field": "ssmBit", "command": "SET-SQL-INP", "key": "bit", "showType": "select", binding: "Number4To8", "group": "SSM", "qCommand": "RTRV-SQL-INP", "qKey": "bit", "qOthers": {}, "qGroup": "SSM" }],
        [{ "title": "SSM控制", "field": "ssmMode", "command": "SET-SQL-INP", "key": "mode", "showType": "select", binding: "AutoProvV3", "group": "SSM", "qCommand": "RTRV-SQL-INP", "qKey": "mode", "qOthers": {}, "qGroup": "SSM" }],
        [{ "title": "SSM响应时延", "field": "ssmTime", "command": "SET-SSMT-INP", "key": "SSMtime", "showType": "text", unit: "(<=1000)0.1秒", "qCommand": "RTRV-SSMT-INP", "qKey": "ssmtime", "qOthers": {}, "qGroup": "" }],
        [{ "title": "LOS恢复时间", "field": "losTime", "command": "SET-LOS-INP", "key": "LOStime", "showType": "text", unit: "<=100秒", "qCommand": "RTRV-LOS-INP", "qKey": "lostime", "qOthers": {}, "qGroup": "" }],



        // [{ "title": "测试重置", "field": "reset", "command": "SET-CHAN-RETEST", "key": "", "showType": "text", }]
      ];
      if ($(".nav-left a.three-active").html() == "输入测试") {

        inputs = [

          [{ "title": "信号类型", "field": "signalType", "command": "SET-CHANPM-LCIM", "key": "VALUE", "showType": "select", binding: "FrameTypeInputV3", others: { "CMDTYPE": "CHANTYPE" }, "qCommand": "channelType", "qKey": "RTRV-PRMTR-LCIM", "qOthers": { "cmdtype": "CHANTYPE" }, "qGroup": "", "qIndexKey": "channelID" }],
          [{ "title": "测试使能", "field": "testEnable", "command": "SET-CHANPM-LCIM", "key": "VALUE", "showType": "select", binding: "YESNO", others: { "CMDTYPE": "CHANMEAS" }, "qCommand": "measureable", "qKey": "RTRV-PRMTR-LCIM", "qOthers": { "cmdtype": "CHANMEAS" }, "qGroup": "", "qIndexKey": "channelID" }],
          // [{ "title": "通道测试模板", "field": "montype", "command": "SET-PMTH-INP", "key": "montype", "showType": "select", binding: "MonTypeV3" }],

        ];


      }

      if (settingCommandDual.business == "system") {
        inputs = [
          [{ "title": "工作模式", "field": "workMode", "command": "SET-PRMTR-SYS", "key": "VALUE", "showType": "select", binding: "WorkModeV3", others: { "TYPE": "WORKMODE" }, "qCommand": "RTRV-PRMTR-SYS", "qKey": "value", "qOthers": "", "qGroup": "sys", "qIndexKey": "type", "qIndexBase": { "default": "WORKMODE" } }],
          [{ "title": "多数表决控制", "field": "majorityVote", "command": "SET-PRMTR-SYS", "key": "VALUE", "showType": "select", binding: "YESNO", others: { "TYPE": "VOTECTRL" }, "qCommand": "RTRV-PRMTR-SYS", "qKey": "value", "qOthers": "", "qGroup": "sys", "qIndexKey": "type", "qIndexBase": { "default": "VOTECTRL" } }],


          [{ "title": "运行状态", "field": "condtype", "command": "", "disabled": "true", "key": "", "showType": "text", "qCommand": "RTRV-COND-EQPT", "qKey": "condtype", "qOthers": "", "qGroup": "running", "qIndexKey": "card", "qLevel": "11" }],
          [{ "title": "版本号", "field": "ver", "command": "", "disabled": "true", "key": "", "showType": "text", "qCommand": "RTRV-COND-EQPT", "qKey": "ver", "qOthers": "", "qGroup": "running", "qIndexKey": "card" }],
          [{ "title": "同步模式", "field": "syncmode", "command": "", "disabled": "true", "key": "", "showType": "text", "qCommand": "RTRV-COND-EQPT", "qKey": "syncmode", "qOthers": "", "qGroup": "running", "qIndexKey": "card" }],
          [{ "title": "PlState", "field": "PlState", "command": "", "disabled": "true", "key": "", "showType": "text", "qCommand": "RTRV-COND-EQPT", "qKey": "PlState", "qOthers": "", "qGroup": "running", "qIndexKey": "card" }],


          // [{ "title": "LCIM板卡类型", "field": "boardType", "command": "SET-PRMTR-LCIM", "key": "VALUE", "showType": "select", binding: "BoardTypeV3", others: { "PRMTRTYPE": "TYPE" },"qLevel":"11" }],
          // [{ "title": "TSOU输出备份方式", "field": "backMode", "command": "SET-PRMTR-TSOU", "key": "VALUE", "showType": "select", binding: "BackModeV3", others: { "PRMTRTYPE": "TYPE" },"qLevel":"21" }],
        ];
      }

      if (settingCommandDual.business == "clock") {
        inputs = [
          // [{ "title": "锁时状态延时", "field": "lockDelay", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "text", "unit": "3~86400秒", "min": 3, "max": 86400, others: { "PRMTRTYPE": "LOCKDELAY" }, "group": "delay", "qCommand": "RTRV-STATE-SCLK", "qKey": "value1", "qOthers": { "cmdtype": "LOCKDELAY" }, "qGroup": "defer", "qLevel": "11" }],
          // [{ "title": "源切换延时", "field": "sourceDelay", "command": "SET-PRMTR-SCLK", "key": "VALUE2", "showType": "text", "unit": "10~86400秒", "min": 10, "max": 86400, others: { "PRMTRTYPE": "LOCKDELAY" }, "group": "delay", "qCommand": "RTRV-STATE-SCLK", "qKey": "value2", "qOthers": "", "qGroup": "defer" }],
          // [{ "title": "锁相状态延时", "field": "lockStateDelay", "command": "SET-PRMTR-SCLK", "key": "VALUE3", "showType": "text", "unit": "90~86400秒", "min": 90, "max": 86400, others: { "PRMTRTYPE": "LOCKDELAY" }, "group": "delay", "qCommand": "RTRV-STATE-SCLK", "qKey": "value3", "qOthers": "", "qGroup": "defer" }],

          [{ "title": "卫星卡类型", "field": "moonCardType", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "select", binding: "MoonCardTypeV3", others: { "PRMTRTYPE": "SCARDTYPE" }, "qCommand": "RTRV-STATE-SCLK", "qKey": "scardType", "qOthers": { "cmdtype": "SCARDTYPE" }, "qGroup": "", "qLevel": "11", "sLevel": "11" }],
          [{ "title": "卫星卡工作模式", "field": "moonWorkMode", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "select", binding: "MoonWorkModeV3", others: { "PRMTRTYPE": "WM" }, "group": "WM", "qCommand": "RTRV-STATE-SCLK", "qKey": "workmode", "qOthers": { "cmdtype": "WM" }, "qGroup": "WM", "qLevel": "11", "sLevel": "11" }],
          [{ "title": "卫星卡时间基准", "field": "moonWorkMode2", "command": "SET-PRMTR-SCLK", "key": "VALUE2", "showType": "select", binding: "MoonWorkMode2V3", others: { "PRMTRTYPE": "WM" }, "group": "WM", "qCommand": "RTRV-STATE-SCLK", "qKey": "tbase", "qOthers": { "cmdtype": "WM" }, "qGroup": "WM", "qLevel": "11", "sLevel": "11" }],
          [{ "title": "可视卫星门限", "field": "visibleMoonLimit", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "select", binding: "Number0To8", others: { "PRMTRTYPE": "SATNUMTH" }, "qCommand": "RTRV-PRMTR-SCLK", "qKey": "thVssr", "qOthers": { "cmdtype": "SATNUMTH" }, "qGroup": "", "qLevel": "11", "sLevel": "11" }],
          [{ "title": "仰角门限", "field": "angleDoorLimit", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "select", binding: "Number0To10", others: { "PRMTRTYPE": "SATELETH" }, "qCommand": "RTRV-PRMTR-SCLK", "qKey": "elevation", "qOthers": { "cmdtype": "SATELETH" }, "qGroup": "", "qLevel": "11", "sLevel": "11" }],

          // [{ "title": "纬度", "field": "latitude", "command": "SET-PRMTR-SCLK", "key": "VALUE", "showType": "text", "qCommand": "RTRV-PRMTR-SCLK", "qKey": "latitude", "qOthers": { "cmdtype": "SCARDREALPOS" }, "qGroup": "position", "qLevel": "11" }],
          // [{ "title": "经度", "field": "longitude", "command": "SET-PRMTR-SCLK", "key": "VALUE2", "showType": "text", "qCommand": "RTRV-PRMTR-SCLK", "qKey": "longitude", "qOthers": { "cmdtype": "SCARDREALPOS" }, "qGroup": "position", "qLevel": "11" }],
          // [{ "title": "高度", "field": "high", "command": "SET-PRMTR-SCLK", "key": "VALUE3", "showType": "text", "qCommand": "RTRV-PRMTR-SCLK", "qKey": "altitude", "qOthers": { "cmdtype": "SCARDREALPOS" }, "qGroup": "position", "qLevel": "11" }],
        ];
      }
      if (settingCommandDual.business == "output") {
        inputs = [

          [{ "title": "端口使能", "field": "inputEnable", "command": "SET-CHPRMTR-TSOU", "key": "VALUE", "showType": "select", binding: "CLOSEOPEN", others: { "CHPMTYPE": "CHANBLOCK" }, "qCommand": "RTRV-STATE-TSOU", "qKey": "channelblock", "qOthers": { "cmdtype": "CHANSTATE" }, "qGroup": "", "qIndexKey": "channelID", "qIndexLevel": "21", "sLevel": "21", "qLevel": "11" }],
          [{ "title": "信号类型", "field": "signalType", "command": "SET-CHPRMTR-TSOU", "key": "VALUE", "showType": "select", binding: "FrameTypeClockV3", others: { "CHPMTYPE": "CHANTYPE" }, "qCommand": "RTRV-STATE-TSOU", "qKey": "channeltype", "qOthers": { "cmdtype": "CHANTYPE" }, "qGroup": "", "qIndexKey": "chnannelID", "qIndexLevel": "21", "sLevel": "21", "qLevel": "11" }],

        ];
      }

    }

    // ,"valueCommand":{ "disable":"SET-DIS", "enable":"SET-EN" }

    return inputs
  }


  #  row 4193 


  "showType": "text" 33
a={
    "IOC1": {
        "clktype": "TYPEII\r",
        "ioccomm": "IOC1TO2COMM-OK",
        "iocstatus": "ALM",
        "imccomm": "IMC1COMM-OK",
        "iocstate": "INSRV",
        "iocmode": "STANDBY",    // 灰色 
        "clkmode": ""
      },
      "IOC2": {
        "clktype": "TYPEI\r",
        "ioccomm": "IOC2TO1COMM-OK",
        "iocstatus": "OK",
        "imccomm": "IMC2COMM-OK",
        "iocstate": "INSRV",
        "iocmode": "ACTIVE", // 蓝色
        "clkmode": "FREERUN"
      },

      
      "GPS": {
        "mode": "",
        "instate": "ENABLE",
        "UTC": "",
        "POS": "",
        "qlevel": "5",
        "elevmask": "\r",
        "gpsstatus": "ALM",
        "priority": "3"
      },

      "PRS": {
        "frmtype": "2M\r",   // 
        "instate": "ENABLE",
        "prsstatus": "ALM",
        "qlevel": "3",
        "priority": "1"
      },
      
      "INP1": {
        "crcena": "DISABLE",
        "frmtype": "2M",         // 信号类型: 2M
        "instate": "MONITOR",   // 状态 : EMABLE  DISABLE MONITOR: 
        "ssmbit": "8\r",
        "qlevel": "6",     //质量等级  6 
        "inpstatus": "OK",
        "priority": "1",
        "rqlevel": "6",
        "ssmena": "DISABLE"
      },
      "INP2": {
        "crcena": "DISABLE",
        "frmtype": "2M",
        "instate": "ENABLE",
        "ssmbit": "8\r",
        "qlevel": "2",
        "inpstatus": "ALM",
        "priority": "2",
        "rqlevel": "2",
        "ssmena": "DISABLE"
      },


      "SYS": {
        "pwra": "ALM",
        "inacttime": "5",
        "pwrb": "OK",
        "ioc1eqpt": "EQPT",
        "refmode": "AUTO", // Input Selection Mode 
        "inpref": "NONE",
        "ioc2eqpt": "EQPT",
        "syncmode": "SSU",   // 系统模式
        "logecho": "ENABLE\r",
        "sysqlevel": "4",
        "fltdelay": "5",
        "lastdat": "03-01-01",
        "lasttim": "12-25-09",
        "clrdelay": "0",
        "expeqpt": "UNEQPT",
        "extalm2": "OK",
        "extalm1": "OK"
      },


      "OUTA": {
        "freeflt": "ON",
        "frmtype": "CAS",  // 输出帧类型
        "outstatus": "OK",  // 输出的输入
        "outstate": "ENABLE",   // 输出状态
        "holdflt": "ON\r"
      },


      "OUTB": {
        "freeflt": "SQUELCH",
        "frmtype": "CAS",
        "outstatus": "OK",
        "outstate": "ENABLE",
        "holdflt": "ON\r"
      },

      "OUTC": {
        "freeflt": "SQUELCH",
        "frmtype": "2M",
        "outstatus": "OK",
        "outstate": "DISABLE",
        "holdflt": "ON\r"
      },

      "OUTD": {
        "freeflt": "SQUELCH",
        "frmtype": "2M",
        "outstatus": "OK",
        "outstate": "DISABLE",
        "holdflt": "ON\r"
      }

}


1、系统相关功能：
       系统运行模式：SET-SYS-MODE 
         源选择方式：ED-SYNC,  (REFMODE=)
             当前源：ED-SYNC,  (INPREF=)
      
2、钟卡相关功能：
          时钟卡：IOC1/IOC2
      时钟卡模式：ED-EQPT , (IOCMODE=ACTIVE/STANDBY)
            状态：ED-EQPT，（IOCSTATE=INSRV/OOSRV
            类型：ED-EQPT，（CLKTYPE=ST2/TYPEII/ST3E/TYPE）

3、输入相关功能：(PRS/INP1/INP2/GPS)
            状态：ED-EQPT,  (INSTATE=ENABLE/MONITOR/DISABLE)
        信号类型：ED-SYNC,  (FRMTYPE=2M/CAS/CCS/)
        质量等级：ED-SYNC,  (QLEVEL=)
		    优先级：ED-SYNC，(PRIORITY=)
        SSM使能：ED-SYNC,  (SSMENA=)
          SSM位：ED-SYNC,  (SSMBIT=)
       CRC4使能：ED-SYNC,  (CRCENA=)
  

4、输出相关功能：


// system  queries 

系统运行模式	RTRV-CRAFT		SYS: syncmode	CRAFT
源选择方式	RTRV-CRAFT		SYS: refmode	CRAFT
当前源	RTRV-CRAFT		SYS:  inpref 	CRAFT



a={
  "commandword":"SYSMODE",
  "value":"SSU",
  "tid":"",
  "aid":""
  }








// system 

sys={
  "name": "SYS",
  "pwra": "ALM",
  "pwrb": "OK",
  "expeqpt": "UNEQPT",
  "extalm1": "OK",
  "extalm2": "OK",
  "ioc1eqpt": "EQPT",
  "ioc2eqpt": "EQPT",
  "sysqlevel": "4",
  "lastdat": "2003-01-01",
  "lasttim": "20-24-50",
  "syncmode": "SSU",    //系统运行模式
  "refmode": "AUTO",  //源选择方式
  "inpref": "NONE",   //当前源
  "clrdelay": "5",
  "fltdelay": "5",
  "inacttime": "0",
  "logecho": "ENABLE"
},


// clock
  var IOC={
    "name": "IOC1",
    "iocstatus": "OK",
    "ioccomm": "IOC1TO2COMM-OK",  
    "imccomm": "IMC1COMM-OK",
    "iocstate": "", 
    "iocmode": "",
    "clkmode": "",
    "clktype": ""
},
{
    "name": "IOC2",
    "iocstatus": "OK",
    "ioccomm": "IOC2TO1COMM-ALM",
    "imccomm": "IMC2COMM-OK",
    "iocstate": "INSRV",   //状态：ED-EQPT，（IOCSTATE=INSRV/OOSRV
    "iocmode": "ACTIVE",   //时钟卡模式   // ClockModeTP1100
    "clkmode": "FREERUN",  //状态   show only    

    "clktype": "TYPEI"   //类型  （CLKTYPE=ST2/TYPEII/ST3E/TYPE）
},



  // input        (GPS?)


  PRS= {
    "name": "PRS",
    "prsstatus": "OK",  //状态
    "instate": "DISABLE",
    "qlevel": "2",
    "priority": "3",
    "frmtype": "2M"
}

[{ "title": "状态", "field": "inputEnable", "command": "edEqpt", "key": "INSTATE", "showType": "select", binding: "InputEnableTP1100" }],
[{ "title": "信号类型", "field": "signalType", "command": "edEqpt", "key": "FRMTYPE", "showType": "select", binding: "FrameTypeTP1100" }],
[{ "title": "质量等级", "field": "qualityGrade", "command": "edEqpt", "key": "QLEVEL", "showType": "select", binding: "QualityGradeTP1100" }],
[{ "title": "优先级", "field": "priority", "command": "edEqpt", "key": "PRIORITY", "showType": "select", binding: "PriorityTP1100" }],
[{ "title": "SSM使能", "field": "SSMEnable", "command": "edEqpt", "key": "SSMENA", "showType": "select", binding: "EnableDisableNormal" }],
[{ "title": "SSM位", "field": "SSMBit", "command": "edEqpt", "key": "SSMBIT", "showType": "select", binding: "Number4To8" }],
[{ "title": "CRC4使能", "field": "CRCEnable", "command": "edEqpt", "key": "CRCENA", "showType": "select", binding: "EnableDisableNormal" }],



input=[
  {
    "name": "INP1",
    "inpstatus": "ALM", //状态  show only 
    "instate": "ENABLE", //使能
    "qlevel": "2", //质量等级
    "priority": "4", //优先级
    "frmtype": "2M",  //信号类型
    "rqlevel": "2",
    "crcena": "DISABLE", //CRC4使能
    "ssmena": "DISABLE", //SSM使能
    "ssmbit": "8"   //SSM位
},
{
    "name": "INP2",
    "inpstatus": "ALM",
    "instate": "ENABLE",
    "qlevel": "2",
    "priority": "1",
    "frmtype": "2M",
    "rqlevel": "2",
    "crcena": "DISABLE",
    "ssmena": "DISABLE",
    "ssmbit": "4"
},
]


out =[
  {
    "name": "OUTA",
    "outstatus": "OK",  //状态 
    "outstate": "ENABLE",   //使能   //ED-EQPT
    "frmtype": "2M", //信号类型    //ED-SYNC
    "freeflt": "ON", //自由振荡输出 
    "holdflt": "ON" //守时输出
},
{
    "name": "OUTB",
    "outstatus": "OK",
    "outstate": "ENABLE",
    "frmtype": "2M",
    "freeflt": "ON",
    "holdflt": "ON"
},
{
    "name": "OUTC",
    "outstatus": "OK",
    "outstate": "ENABLE",
    "frmtype": "CAS",
    "freeflt": "ON",
    "holdflt": "ON"
},
{
    "name": "OUTD",
    "outstatus": "OK",
    "outstate": "ENABLE",
    "frmtype": "CAS",
    "freeflt": "ON",
    "holdflt": "ON"
},
]
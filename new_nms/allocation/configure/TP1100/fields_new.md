1、系统相关功能：
       系统运行模式：SET-SYS-MODE 
         源选择方式：edSync,  (REFMODE=)
             当前源：edSync,  (INPREF=)
      
2、钟卡相关功能：
          时钟卡：IOC1/IOC2
      时钟卡模式：ED-EQPT , (IOCMODE=ACTIVE/STANDBY)
            状态：ED-EQPT，（IOCSTATE=INSRV/OOSRV
            类型：ED-EQPT，（CLKTYPE=ST2/TYPEII/ST3E/TYPE）

3、输入相关功能：(PRS/INP1/INP2/GPS)
            状态：ED-EQPT,  (INSTATE=ENABLE/MONITOR/DISABLE)
        信号类型：edSync,  (FRMTYPE=2M/CAS/CCS/)
        质量等级：edSync,  (QLEVEL=)
		    优先级：edSync，(PRIORITY=)
        SSM使能：edSync,  (SSMENA=)
          SSM位：edSync,  (SSMBIT=)
       CRC4使能：edSync,  (CRCENA=)
  

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



系统运行模式  syncmode rtrvCraft craft  name#syncmode#1
源选择方式  refmode rtrvCraft craft name#refmode#1
当前源  inpref rtrvCraft craft name#inpref#1

  "syncmode": "SSU",   //系统运行模式
  "refmode": "AUTO",  //源选择方式
  "inpref": "NONE",   //当前源 


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

    "clktype": "TYPEI"   //类型  （CLKTYPE=ST2/TYPEII/ST3E/TYPE/TYPEI）
},

时钟卡模式 "" rtrvCraft craft name#iocmode#1
状态 "" rtrvCraft craft name#iocstate#1
类型 "" rtrvCraft craft name#clktype#1
运行状态  clkmode rtrvCraft craft   name#clkmode#1


 

系统运行模式  syncmode rtrvCraft craft  name#syncmode
源选择方式  refmode rtrvCraft craft name#refmode
当前源  inpref rtrvCraft craft name#inpref



  // input        (GPS?)


  PRS= {
    "name": "PRS",
    "prsstatus": "OK",  //状态
    "instate": "DISABLE",
    "qlevel": "2",
    "priority": "3",
    "frmtype": "2M"
}

[{ "title": "使能", "field": "inputEnable", "command": "edEqpt", "key": "INSTATE", "showType": "select", binding: "InputEnableTP1100" }],
[{ "title": "信号类型", "field": "signalType", "command": "edEqpt", "key": "FRMTYPE", "showType": "select", binding: "FrameTypeTP1100" }],
[{ "title": "质量等级", "field": "qualityGrade", "command": "edEqpt", "key": "QLEVEL", "showType": "select", binding: "QualityGradeTP1100" }],
[{ "title": "优先级", "field": "priority", "command": "edEqpt", "key": "PRIORITY", "showType": "select", binding: "PriorityTP1100" }],
[{ "title": "SSM使能", "field": "SSMEnable", "command": "edEqpt", "key": "SSMENA", "showType": "select", binding: "EnableDisableNormal" }],
[{ "title": "SSM位", "field": "SSMBit", "command": "edEqpt", "key": "SSMBIT", "showType": "select", binding: "Number4To8" }],
[{ "title": "CRC4使能", "field": "CRCEnable", "command": "edEqpt", "key": "CRCENA", "showType": "select", binding: "EnableDisableNormal" }],


使能 instate  rtrvCraft craft name#instate#1
信号类型 frmtype rtrvCraft craft name#frmtype#1
质量等级 qlevel  rtrvCraft craft name#qlevel#1
优先级 priority  rtrvCraft craft name#priority#1
SSM使能 ssmena  rtrvCraft craft name#ssmena#1
SSM位 ssmbit  rtrvCraft craft name#ssmbit#1
CRC4使能 crcena   rtrvCraft craft name#crcena#1
状态 inpstatus  rtrvCraft craft name#inpstatus#1

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


//output 
\
"outstate": "ENABLE",   //使能   //ED-EQPT
"frmtype": "2M", //信号类型    //edSync

"outstatus": "OK",  //状态 
"freeflt": "ON", //自由振荡输出 
"holdflt": "ON" //守时输出

<!-- query -->

qLevel:
 // 1 card 11 card businessId  2 port 21 port businessId
 // 1 card   11 板卡业务名  2 cardPort  21 端口业务名


使能 outstate rtrvCraft craft name#outstate#1
信号类型 frmtype rtrvCraft craft name#frmtype#1
状态 outstatus rtrvCraft craft name#outstatus#1
自由振荡输出 freeflt rtrvCraft craft name#freeflt#1
守时输出 holdflt rtrvCraft craft name#holdflt#1

<!-- set -->
nm  field   command  key  showType Binding 


使能 outstate ED-EQPT OUTSTATE c EnableDisable
信号类型 frmtype edSync  FRMTYPE c FrameTypeOutTP1100
状态 outstatus 
自由振荡输出 freeflt edSync FREEFLT c FreefltOutTP1100  //ON SQUELCH AIS
守时输出 holdflt edSync HOLDFLT c  HoldfltOutTP1100  // ON SQUELCH AIS









out =[
  {
    "name": "OUTA",
    "outstatus": "OK",  //状态 
    "outstate": "ENABLE",   //使能   //ED-EQPT
    "frmtype": "2M", //信号类型    //edSync
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
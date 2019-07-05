v3  input  multi   clock output sys single
# input 
CLCIM1-1～CLCIM2-8

CSCLK1～CSCLK4

nm field command command field , showType,binding 


信号类型 signalType SET-CHANPM-LCIM,VALUE, c FrameTypeInputV3   // 10M|5M|1M|2048K|CC|E1|NONE  10M|5M|1M|2048K|1544K|E1|T1
输入信号使能 inputEnable,value,"''",c,EnableDisableNormal  //打开 SET-ENA，关闭 SET-DIS
主用性设置 masterable SET-MASTER-INP  MASTERABLE c YESNO // Y N  (当参考源选源方式为人工 时有效)
优先级 priority SET-PRIOR-INP priority c Number1To23And255   //1～23或255。
SSM等级 qualityGrade   SET-SQL-INP level c QualityGradeV3 //PRC|TNC|LNC|STU|DUS|SEC。
SSM位 ssmBit  SET-SQL-INP  bit c Number4To8 // 4～8
SSM控制 ssmMode  SET-SQL-INP mode c AutoProvV3 //AUTO|PROV
SSM响应时延  ssmTime  SET-SSMT-INP SSMtime   // 1~1000 unit:0.1
LOS恢复时间 losTime SET-LOS-INP LOStime   // 1～100
测试重置  reset SET-CHAN-RETEST 

纬度

# clock 
锁时状态延时 lockDelay SET-PRMTR-SCLK,VALUE  //others:{"PRMTRTYPE":"LOCKDELAY"},"group":"delay" 3～86400 (PRMTRTYPE=LOCKDELAY)  //<VALUE>值域为3～86400，表示设置时钟板锁时状态的延迟时间。
源切换延时   sourceDelay SET-PRMTR-SCLK,VALUE2  //others:{"PRMTRTYPE":"LOCKDELAY"},"group":"delay" 10～86400 //<VALUE2>值域为10～86400，表示源切换的延迟时间。
锁相状态延时 lockStateDelay SET-PRMTR-SCLK,VALUE3  //others:{"PRMTRTYPE":"LOCKDELAY"},"group":"WM" 90～86400   //<VALUE3>值域为90～86400，表示设置时钟板锁相状态的延迟时间。
卫星卡类型 moonCardType SET-PRMTR-SCLK,VALUE  c MoonCardTypeV3 //others:{"PRMTRTYPE":"SCARDTYPE"}  GLOGPS|GPS| BEIDOU|NONE (PRMTRTYPE=SCARDTYPE)<VALUE>取值为GLOGPS|GPS| BEIDOU|NONE
卫星卡工作模式 moonWorkMode SET-PRMTR-SCLK,VALUE c MoonWorkModeV3  //others:{"PRMTRTYPE":"WM"},"group":"WM" (PRMTRTYPE=WM) //<VALUE>：取值为DUAL|GPS|GLO|BD，
卫星卡时间基准 moonWorkMode2 SET-PRMTR-SCLK,VALUE2 c MoonWorkMode2V3  //others:{"PRMTRTYPE":"WM"},"group":"WM" – <VALUE2>：取值为GPS|GLO|BD
可视卫星门限 visibleMoonLimit SET-PRMTR-SCLK VALUE,c Number0To8 //others:{"PRMTRTYPE":"SATNUMTH"} (PRMTRTYPE=SATNUMTH) //取值为SATNUMTH表示配置卫星卡的可视卫星门限。 <VALUE>值域为0～8
仰角门限 angleDoorLimit SET-PRMTR-SCLK, VALUE,c Number0To10  //others:{"PRMTRTYPE":"SATELETH"} (PRMTRTYPE=SATELETH) //取值为SATELETH表示配置卫星卡仰角门限。 <VALUE>值域为0～10
纬度 latitude SET-PRMTR-SCLK VALUE     //others:{"PRMTRTYPE":"SCARDPOS"},"group":"position"
经度 longitude SET-PRMTR-SCLK VALUE2  //others:{"PRMTRTYPE":"SCARDPOS"},"group":"position"
高度 high SET-PRMTR-SCLK VALUE3  // others:{"PRMTRTYPE":"SCARDPOS"} ,"group":"position"



QClockV3
SRCU1/SOCU1/SRCU2/SOCU2
single

 [{ "title": "锁时状态延时","field": "lockDelay","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "text","min":3,"max":86400,others:{"PRMTRTYPE":"LOCKDELAY"},"group":"delay"}],
 [{ "title": "源切换延时","field": "sourceDelay","command": "SET-PRMTR-SCLK","key": "VALUE2","showType": "text","min":10,"max":86400, others:{"PRMTRTYPE":"LOCKDELAY"},"group":"delay" }],
 [{ "title": "锁相状态延时","field": "lockStateDelay","command": "SET-PRMTR-SCLK","key": "VALUE3","showType": "text","min":90,"max":86400,others:{"PRMTRTYPE":"LOCKDELAY"},"group":"delay"  }],
 [{ "title": "卫星卡类型","field": "moonCardType","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "select", binding:"MoonCardTypeV3" ,others:{"PRMTRTYPE":"SCARDTYPE"}}],
 [{ "title": "卫星卡工作模式","field": "moonWorkMode","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "select", binding:"MoonWorkModeV3" ,others:{"PRMTRTYPE":"WM"},"group":"WM" }],
 [{ "title": "卫星卡时间基准","field": "moonWorkMode","command": "SET-PRMTR-SCLK","key": "VALUE2","showType": "select", binding:"MoonWorkMode2V3",others:{"PRMTRTYPE":"WM"},"group":"WM" }],
 [{ "title": "可视卫星门限","field": "visibleMoonLimit","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "select", binding:"Number0To8",others:{"PRMTRTYPE":"SATNUMTH"} }],
 [{ "title": "仰角门限","field": "angleDoorLimit","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "select", binding:"Number0To10" ,others:{"PRMTRTYPE":"SATELETH"}}],
 [{ "title": "纬度","field": "latitude","command": "SET-PRMTR-SCLK","key": "VALUE","showType": "text",  }],
 [{ "title": "经度","field": "longitude","command": "SET-PRMTR-SCLK","key": "VALUE2","showType": "text",  }],
 [{ "title": "高度","field": "high","command": "SET-PRMTR-SCLK","key": "VALUE3","showType": "text",  }],


<!-- 位置 SET-PRMTR-SCLK, (PRMTRTYPE=SCARDPOS) // <PRMTRTYPE>：取值为SCARDPOS表示卫星卡的位置信息 -->
                                          //– <VALUE>： <VALUE>表示设置卫星卡的纬度信息。
                                          //– <VALUE2>： <VALUE2>表示设置卫星卡的经度信息。
                                          //– <VALUE3>：表示设置卫星卡的高度信息。





4、测试相关功能  //<aid>：取值为CLCIM1-1～CLCIMA-8 
single
信号类型 signalType SET-CHANPM-LCIM,VALUE c FrameTypeInputV3 //,others:{"CMDTYPE":"CHANTYPE"} <CMDTYPE> 为CHANTYPE。 <VALUE>：取值为10M|5M|1M|2048K|CC|E1|NONE
测试使能 testEnable SET-CHANPM-LCIM ,VALUE c YESNO  //,others:{"CMDTYPE":"CHANMEAS"}   <CMDTYPE>为CHANMEAS。 <VALUE>取值为Y | N，代表进行测试和不进行测试。 
通道测试模板 montype SET-PMTH-INP montype c MonTypeV3 ,//  montype=WG/WT/FT <montype>：取值为WG|WE|WT|WJ|FT|G812。

 [{ "title": "信号类型","field": "signalType","command": "SET-CHANPM-LCIM","key": "VALUE","showType": "select", binding:"FrameTypeInputV3",others:{"CMDTYPE":"CHANTYPE"} }],
 [{ "title": "测试使能","field": "testEnable","command": "SET-CHANPM-LCIM","key": "VALUE","showType": "select", binding:"YESNO",others:{"CMDTYPE":"CHANMEAS"} }],
 [{ "title": "通道测试模板","field": "montype","command": "SET-PMTH-INP","key": "montype","showType": "select", binding:"MonTypeV3" }],


5、输出相关功能 
{/* <aid>：取值为GTSOU10-01～GTSOU45-20。 */}

端口使能 inputEnable  SET-CHPRMTR-TSOU VALUE c CLOSEOPEN  //,others:{"CHPMTYPE":"CHANBLOCK"}  <CHPMTYPE>取值为CHANBLOCK，表示设置通道信号关闭打开状态。 <VALUE>取值为CLOSE|OPEN 
信号类型 signalType SET-CHPRMTR-TSOU VALUE c FrameTypeClockV3 //(CHPMTYPE=CHANTYPE //,others:{"CHPMTYPE":"CHANTYPE"}  <CHPMTYPE>取值为CHANTYPE，表示设置通道信号类型。 <VALUE>取值为10M|5M|1M|2048K|1544K|E1|T1。  (查询 RTRV-STATE-TSOU)

single

 [{ "title": "端口使能","field": "inputEnable","command": "SET-CHPRMTR-TSOU","key": "VALUE","showType": "select", binding:"CLOSEOPEN" ,others:{"CHPMTYPE":"CHANBLOCK"}}],
 [{ "title": "信号类型","field": "signalType","command": "SET-CHPRMTR-TSOU","key": "VALUE","showType": "select", binding:"FrameTypeClockV3",others:{"CHPMTYPE":"CHANTYPE"} }],




MonTypeV3
WG/WT/FT



MoonCardTypeV3
GLOGPS|GPS| BEIDOU|NONE

MoonWorkMode2V3
GPS|GLO|BD



FrameTypeInputV3:[//nm
{"Name": "10M", "Value":"10M" },
{"Name": "5M", "Value":"5M" },
{"Name": "1M", "Value":"1M" },
{"Name": "2048K", "Value":"2048K" },
{"Name": "CC", "Value":"CC" },
{"Name": "E1", "Value":"E1" },
{"Name": "NONE", "Value":"NONE" },
]


FrameTypeClockV3:[//nm
{"Name": "10M", "Value":"10M" },
{"Name": "5M", "Value":"5M" },
{"Name": "1M", "Value":"1M" },
{"Name": "2048K", "Value":"2048K" },
{"Name": "1544K", "Value":"1544K" },
{"Name": "E1", "Value":"E1" },
{"Name": "T1", "Value":"T1" },
]

YESNO:[//nm
{"Name": "Y", "Value":"Y" },
{"Name": "N", "Value":"N" },
]

Number1To23And255:[//nm
{"Name": "1", "Value":"1" },
{"Name": "2", "Value":"2" },
{"Name": "3", "Value":"3" },
{"Name": "4", "Value":"4" },
{"Name": "5", "Value":"5" },
{"Name": "6", "Value":"6" },
{"Name": "7", "Value":"7" },
{"Name": "8", "Value":"8" },
{"Name": "9", "Value":"9" },
{"Name": "10", "Value":"10" },
{"Name": "11", "Value":"11" },
{"Name": "12", "Value":"12" },
{"Name": "13", "Value":"13" },
{"Name": "14", "Value":"14" },
{"Name": "15", "Value":"15" },
{"Name": "16", "Value":"16" },
{"Name": "7", "Value":"7" },
{"Name": "18", "Value":"18" },
{"Name": "19", "Value":"19" },
{"Name": "20", "Value":"20" },
{"Name": "21", "Value":"21" },
{"Name": "22", "Value":"22" },
{"Name": "23", "Value":"23" },
{"Name": "255", "Value":"255" },
]



QualityGradeV3:[//nm
{"Name": "PRC", "Value":"PRC" },
{"Name": "TNC", "Value":"TNC" },
{"Name": "LNC", "Value":"LNC" },
{"Name": "STU", "Value":"STU" },
{"Name": "DUS", "Value":"DUS" },
{"Name": "SEC", "Value":"SEC" },
]


AutoProvV3:[//nm
{"Name": "AUTO", "Value":"AUTO" },
{"Name": "PROV", "Value":"PROV" },
]




<!-- 系统  -->
1、系统相关功能 

<!-- query -->
LCIM板卡类型 boardType SET-PRMTR-LCIM, VALUE c Number1ToA      //others:{"PRMTRTYPE":"TYPE"} INPUT|MEASURE  <aid>：取值为BLCIM1～BLCIMA。 
TSOU输出备份方式 backMode SET-PRMTR-TSOU VALUE c Number11To4A  // BK|EN  (PRMTRTYPE=TYPE) (查询 RTRV-STATE-TSOU) //<aid>：取值为BTSOU11～BTSOU4A。



工作模式 workMode SET-PRMTR-SYS VALUE c, WorkModeV3    //VALUE MAN|INT1  (TYPE=WORKMODE) (查询 RTRV-PRMTR-SYS)
多数表决控制 majorityVote SET-PRMTR-SYS,VALUE c YESNO  //VALUE Y|N   (TYPE=VOTECTRL) （查询 RTRV-PRMTR-SYS）
LCIM板卡类型 boardType SET-PRMTR-LCIM, VALUE c BoardTypeV3      //others:{"PRMTRTYPE":"TYPE"} INPUT|MEASURE  <aid>：取值为BLCIM1～BLCIMA。 
TSOU输出备份方式 backMode SET-PRMTR-TSOU VALUE c BackModeV3  // BK|EN  (PRMTRTYPE=TYPE) (查询 RTRV-STATE-TSOU) //<aid>：取值为BTSOU11～BTSOU4A。

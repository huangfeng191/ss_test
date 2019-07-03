
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

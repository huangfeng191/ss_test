<!-- "valueCommand": { "disable": "SET-DIS", "enable": "SET-EN" } -->

# 1、系统相关功能 
系统运行模式 sysModeTP1100 SET-SYS-MODE SYSMODE c SysModeTP1100   //SSU SUB PRR 
源选择方式 sysPerModeTP1100 ED-SYNC REFMODE, c SysPerModeTP1100  //(REFMODE=AUTO  FORCED) //    aid SYS 
当前源 sysInpRefTP1100 ED-SYNC INPREF, c InputTypeTP1100 //(INPREF=GPS PRS INP1 INP2) //    aid SYS 

   
SysModeTP1100:[//nm
{"Name": "SSU", "Value":"SSU" },
{"Name": "SUB", "Value":"SUB" },
{"Name": "PRR", "Value":"PRR" },
]


  SysPerModeTP1100:[//nm
{"Name": "AUTO", "Value":"AUTO" },
{"Name": "FORCED", "Value":"FORCED" },
]
      
# 2、钟卡相关功能  时钟卡 IOC1/IOC2

时钟卡模式 clockMode ED-EQPT IOCMODE c ClockModeTP1100 // (IOCMODE=ACTIVE/STANDBY)  // aid IOC1 2
状态 clockState ED-EQPT,IOCSTATE c ClockStateTP1100 //（IOCSTATE=INSRV/OOSRV    
类型 clockType ED-EQPT,CLKTYPE c ClockTypeTP1100 //（CLKTYPE=ST2/TYPEII/ST3E/TYPE）// 

ClockModeTP1100:[//nm
{"Name": "ACTIVE", "Value":"ACTIVE" },
{"Name": "STANDBY", "Value":"STANDBY" },
]


ClockStateTP1100:[//nm
{"Name": "INSRV", "Value":"INSRV" },
{"Name": "OOSRV", "Value":"OOSRV" },
]
ClockTypeTP1100:[//nm
{"Name": "ST2", "Value":"ST2" },
{"Name": "TYPEII", "Value":"TYPEII" },
{"Name": "ST3E", "Value":"ST3E" },
{"Name": "TYPE", "Value":"TYPE" },
] 



# 3、输入相关功能 InputTypeTP1100 (PRS/INP1/INP2/GPS) aid
状态 inputEnable ED-EQPT,INSTATE c InputEnableTP1100  //(INSTATE=ENABLE/MONITOR/DISABLE)
信号类型 signalType ED-SYNC,FRMTYPE c FrameTypeTP1100 //(FRMTYPE=2M/CAS/CCS/)
质量等级 qualityGrade ED-SYNC,QLEVEL c QualityGradeTP1100  //(QLEVEL=)
优先级   priority ED-SYNC,PRIORITY c PriorityTP1100 //(PRIORITY=)
SSM使能  SSMEnable ED-SYNC,SSMENA c EnableDisableNormal  //(SSMENA=)
SSM位    SSMBit ED-SYNC,SSMBIT c Number4To8 //(SSMBIT=)
CRC4使能 CRCEnable ED-SYNC,CRCENA c EnableDisableNormal  //(CRCENA=)



 


InputTypeTP1100:[//nm
{"Name": "PRS", "Value":"PRS" },
{"Name": "INP1", "Value":"INP1" },
{"Name": "INP2", "Value":"INP2" },
{"Name": "GPS", "Value":"GPS" },
]

InputEnableTP1100:[//nm
{"Name": "ENABLE", "Value":"ENABLE" },
{"Name": "MONITOR", "Value":"MONITOR" },
{"Name": "DISABLE", "Value":"DISABLE" },
]


FrameTypeTP1100:[//nm
{"Name": "2M", "Value":"2M" },
{"Name": "CAS", "Value":"CAS" },
{"Name": "CCS", "Value":"CCS" },
]



QualityGradeTP1100:[//nm
{"Name": " PRS  ", "Value":"1" },
{"Name": " UNK/STU  ", "Value":"2" },
{"Name": " TYPE II/ST2  ", "Value":"3" },
{"Name": " TYPE I  ", "Value":"4" },
{"Name": " TYPE V/TNC  ", "Value":"5" },
{"Name": " TYPE III/ST3E  ", "Value":"6" },
{"Name": " TYPE IV/ST3  ", "Value":"7" },
{"Name": " G.813OPT3/SMC  ", "Value":"8" },
{"Name": " DUS  ", "Value":"9" },
]



PriorityTP1100:[//nm
{"Name": "PRS ", "Value":" 2" },
{"Name": "INP1 ", "Value":" 3" },
{"Name": "INP4 ", "Value":" 4" },
]




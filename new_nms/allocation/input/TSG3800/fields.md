

端口使能 inputEnable,SET-DIS,"",c,EnableDisableNormal
质量等级 qualityGrade,SET-PRMTR-SQL,level   c QualityGrade3800//PRS, ST2, ST3 DUS, STU
SSM模式 ssmMode,SET-PRMTR-SQL,mode c SSMMode3800 //Auto, On, Prov, Off
SSM位 ssmBit,SET-PRMTR-SQL,bit  c SSMBit3800  // 4, 5, 6, 7, 8

频率格式 freqType,SET-PRMTR-INPT,Freq c FreqType3800 //1, 1.544, 2.048, 5, 10
端接电阻 resistance ,SET-PRMTR-INPT,term c Resistance3800  //50, 75, 100, 120, 3300
帧格式 frameType,SET-PRMTR-INPT,mode c FrameType3800  //D4, ESF, CLK
CRC开关 CRCSwitch ,SET-PRMTR-INPT,crc c OnOff //On,Off
相位清零 setPhaseZero,SET-PHASE_ZERO,clksrc c SetPhaseZero3800 //CLKA or CLKB

优先级 priority,SET-PRMTR-PRI,priority c Priority3800  // 0, 1, 2, 3, 4




EnableDisableNormal:[
{"Name": "enable", "Value":"enable" },
{"Name": "disable", "Value":"disable" },
]


SSMMode3800:[//nm
{"Name": "PRS", "Value":"PRS" },
{"Name": "ST2", "Value":"ST2" },
{"Name": "ST3", "Value":"ST3" },
{"Name": "DUS", "Value":"DUS" },
{"Name": "STU", "Value":"STU" },
]

SSMBit3800:[//nm
{"Name": "Auto", "Value":"Auto" },
{"Name": "On", "Value":"On" },
{"Name": "Prov", "Value":"Prov" },
{"Name": "Off", "Value":"Off" },
]


QualityGrade3800:[//nm
{"Name": "4", "Value":"4" },
{"Name": "5", "Value":"5" },
{"Name": "6", "Value":"6" },
{"Name": "7", "Value":"7" },
{"Name": "8", "Value":"8" },
]

FreqType3800:[
{"Name": "1", "Value":"1" },
{"Name": "1.544", "Value":"1.544" },
{"Name": "2.048", "Value":"2.048" },
{"Name": "5", "Value":"5" },
{"Name": "10", "Value":"10" },
]


FreqType3800:[
{"Name": "50", "Value":"50" },
{"Name": "75", "Value":"75" },
{"Name": "100", "Value":"100" },
{"Name": "120", "Value":"120" },
{"Name": "3300", "Value":"3300" },
]

FrameType3800:[
{"Name": "D4", "Value":"D4" },
{"Name": "ESF", "Value":"ESF" },
{"Name": "CLK", "Value":"CLK" },
]

OnOff:[
{"Name": "On", "Value":"On" },
{"Name": "Off", "Value":"Off" },
]
SetPhaseZero3800:[
{"Name": "CLKA", "Value":"CLKA" },
{"Name": "CLKB", "Value":"CLKB" },
]

Priority3800:[
{"Name": "0", "Value":"0" },
{"Name": "1", "Value":"1" },
{"Name": "2", "Value":"2" },
{"Name": "3", "Value":"3" },
{"Name": "4", "Value":"4" },
]
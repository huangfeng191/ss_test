
 <!-- "valueCommand": { "disable": "SET-DIS", "enable": "SET-EN" } -->


端口使能 inputEnable,value,"''",c,EnableDisableNormal
质量等级 qualityGrade,SET-PRMTR-SQL,level  c QualityGrade3800 c //PRS, ST2, ST3 DUS, STU
SSM模式 ssmMode,SET-PRMTR-SQL,mode c SSMMode3800 //Auto, On, Prov, Off
SSM位 ssmBit,SET-PRMTR-SQL,bit  c Number4To8  // 4, 5, 6, 7, 8

频率格式 freqType,SET-PRMTR-INPT,Freq c FreqType3800 //1, 1.544, 2.048, 5, 10
端接电阻 resistance ,SET-PRMTR-INPT,term c Resistance3800  //50, 75, 100, 120, 3300
帧格式 frameType,SET-PRMTR-INPT,mode c FrameType3800  //D4, ESF, CLK
CRC开关 CRCSwitch ,SET-PRMTR-INPT,crc c OnOff //On,Off
相位清零 setPhaseZero,SET-PHASE_ZERO,clksrc c SetPhaseZero3800 //CLKA or CLKB

优先级 priority,SET-PRMTR-PRI,priority c Number0To4  // 0, 1, 2, 3, 4



 QualityGrade3800:[//nm
{"Name": "PRS", "Value":"PRS" },
{"Name": "ST2", "Value":"ST2" },
{"Name": "ST3", "Value":"ST3" },
{"Name": "DUS", "Value":"DUS" },
{"Name": "STU", "Value":"STU" },
],


 SSMMode3800:[//nm
{"Name": "Auto", "Value":"Auto" },
{"Name": "On", "Value":"On" },
{"Name": "Prov", "Value":"Prov" },
{"Name": "Off", "Value":"Off" },
],
 FreqType3800:[//nm
{"Name": "1", "Value":"1" },
{"Name": "1.544", "Value":"1.544" },
{"Name": "2.048", "Value":"2.048" },
{"Name": "5", "Value":"5" },
{"Name": "10", "Value":"10" },
],
 Resistance3800:[//nm
{"Name": "50", "Value":"50" },
{"Name": "75", "Value":"75" },
{"Name": "100", "Value":"100" },
{"Name": "120", "Value":"120" },
{"Name": "3300", "Value":"3300" },
],
 FrameType3800:[//nm
{"Name": "D4", "Value":"D4" },
{"Name": "ESF", "Value":"ESF" },
{"Name": "CLK", "Value":"CLK" },
], 
 OnOff:[//nm
{"Name": "On", "Value":"On" },
{"Name": "Off", "Value":"Off" },
],SetPhaseZero3800:[//nm
{"Name": "CLKA", "Value":"CLKA" },
{"Name": "or", "Value":"or" },
{"Name": "CLKB", "Value":"CLKB" },
]

质量等级 qualityGrade,SET-PRMTR-SQL,level  c QualityGrade3800 c // PRS, ST2, ST3 DUS, STU   
SSM模式 ssmMode,SET-PRMTR-SQL,mode c SSMMode3800 //Auto, On, Prov, Off
SSM位 ssmBit,SET-PRMTR-SQL,bit  c Number4To8  // 4, 5, 6, 7, 8


系统：

<!-- 不需要aid -->

自动返回 autoReturn,SET-PRMTR-AR, mode  c OnOff //= On or Off
自动转换 autoSwitch,SET-PRMTR-AS,mode c OnOff //= On or Off
SSM延时  setDelay,SET-PRMTR-DELAY, delay c Number1To30 //= 1 to 30
选源模式 reference2e SET-PRMTR-REF mode c Reference2e3800//= PRI, BEST, SQL





qualityGrade aid :all
none aid : autoReturn autoSwitch  setDelay setReference2e
Number1To30 //= 1 to 30
Reference2e3800//= PRI, BEST, SQL




<!--  位完成 -->

钟卡功能：
   端口使能 inputEnable,value,1,c,EnableDisableNormal   
   当前输出时钟 setClock SET-CLK,aid,c, SetPhaseZero3800//  aid=CLK A, CLK B

grade: "clock","system","input","output" 


  // aid :Valid aid CLKx


<!-- 等级 -->
   if(tp=="频率输入"){}
   if()


   


devParams={
command:"SET-PRMTR-SQL", 
aid: "INPx[-y]", 
level:"ST2",
mod:"Auto",
bit:4
};

aid 选择的板卡及端口位置。
x 板卡  y 端口
INPx[-y] 输入板卡slot[-端口]      
aid=INP, INPx, INPx[-y], ALL



PTRV-PRMTR-REF

端口使能

帧类型 

            command         field    possible
质量等级,SET-PRMTR-SQL,level   PRS, ST2, ST3 DUS, STU
SSM模式,SET-PRMTR-SQL,mode    Auto, On, Prov, Off
SSM位,SET-PRMTR-SQL,bit = 4, 5, 6, 7, 8

频率格式,SET-PRMTR-INPT,Freq=1, 1.544, 2.048, 5, 10
端接电阻,SET-PRMTR-INPT,term=50, 75, 100, 120, 3300
帧格式,SET-PRMTR-INPT,mode=D4, ESF, CLK
CRC开关,SET-PRMTR-INPT,crc=On,Off
相位清零,SET-PHASE_ZERO,clksrc=CLKA or CLKB

优先级,SET-PRMTR-PRI,priority = 0, 1, 2, 3, 4
端口使能开,SET-EN
端口使能关,SET-DIS


<!-- 
频率稳定阈值,SET-PRMTR-FREQ  
lim1, lim2 = <number>
mod1, mod2 = Fail, Alrm, Rept, Ignr
tmper = 100, 1000, 10000


MTIE阈值,SET-PRMTR-MTIE
lim1, lim2 = <number>
mod1, mod2 = Fail, Alrm, Rept, Ignr
tmper = 100, 1000, -->







系统相关功能：

            command         field    possible
质量等级,SET-PRMTR-SQL,level   PRS, ST2, ST3 DUS, STU

    
自动返回 autoReturn SET-PRMTR-AR mode = On or Off
自动转换 autoSwitch SET-PRMTR-AS mode = On or Off
SSM延时  setDelay SET-PRMTR-DELAY delay = 1 to 30
选源模式 setReferenc2e SET-PRMTR-REF mode = PRI, BEST, SQL


钟卡功能：
   使能：
   当前输出时钟 setClock SET-CLK  aid=CLK A, CLK B

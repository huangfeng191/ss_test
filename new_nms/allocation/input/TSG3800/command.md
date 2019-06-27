质量等级
SET-PRMTR-SQL:[tid]:[aid]:ctag::level,
mode[,bit];
Valid aid INP, INPx, INPx[-y], ALL, <null>
level = PRS, ST2, ST3 DUS, STU
mode = Auto, On, Prov, Off
bit = 4, 5, 6, 7, 8

频率格式
SET-PRMTR-INPT:[tid]:[aid]:ctag:mode,zs,crc,
freq,term;
Valid aid INP, INPx, INPx[-y], ALL, <null>
mode: T1 modules: D4, ESF, CLK
E1 modules: CAS, CCS, CLK
zs = On or Off
crc = On or Off
Freq = 1, 1.544, 2.048, 5, 10
term = 50, 75, 100, 120, 3300


相位清零
Command Syntax SET-PHASE-ZERO:[tid]:[aid]:ctag[::clksrc];
Valid aid none or INPx[-y]
clksrc = CLKA or CLKB


频率稳定阈值

Command Syntax SET-PRMTR-FREQ:[tid]:[aid]:ctag::lim1,mod1,
lim2,mod2, tmper;
Valid aid INP, INPx, INPx[-y], ALL, <null>
lim1, lim2 = <number>
mod1, mod2 = Fail, Alrm, Rept, Ignr
tmper = 100, 1000, 10000


MTIE阈值,SET-PRMTR-MTIE


Command Syntax SET-PRMTR-MTIE:[tid]:[aid]:ctag::lim1,mod1,li
m2,mod2, tmper;
Valid aid INP, INPx, INPx[-y], ALL, <null>
lim1, lim2 = <number>
mod1, mod2 = Fail, Alrm, Rept, Ignr
tmper = 100, 1000,




Command Syntax SET-PRMTR-PRI:[tid]:[aid]:ctag:priority;
Valid aid INPx, INPx[-y], ALL
priority = 0, 1, 2, 3, 4







Set Enable

Related Command SET-EN
Command Syntax SET-ENA:[tid]:[aid]:ctag::;
Valid aid CLKx, FGx, INPx, INPx[-y], TL1_SECU

Set Disable

Command Syntax SET-DIS:[tid]:[aid]:ctag;
Valid aid CLKx, FGx, INPx, INPx[-y], TL1_SECU
#  clock



#  clock 配置 
#  clk  ?foreign?
预热时延 warmup ?Warmup Delay // : 1200#900-3600#false,
最小Tau mintau ?Min Tau // : 1000#300–10000(ST2E),150–1200(ST3E)#false,
最大Tau maxtau ?Max Tau // : 9000#300–10000(ST2E),150–1200(ST3E)#false,
自动恢复 clkar s ?Auto Return // : OFF#ON|OFF#false,
源切换 inpswt ?Input Switch // : AR##true,
源选择 inpsel ?Input Selection // : PRI##true,
Tau最小门限 mintaulimit ?Min Tau Limit // : 300##true,
Tau最大门限 maxtaulimit ?Max Tau Limit // : 10000##true,
ToD超时时间 tod_timeout ?ToD Timeout // : 1440##true
#  status
时钟状态  mstat  ?Clock Status //: SEL##true,
时钟模式  clock_mode s  ?Clock Mode //: HOLD#ACQ|LOCK|HOLD#false,
当前Tau  tau  ?Current Tau //: 60##true,
质量优先级（PQL）  pql  ?PQL //: 5##true,
频率偏移  offset  ?Frequency Offset //: (0)##true,
西格玛值  sigma  ?Sigma Value //: (5E-07)##true,
是否同步  syn  ?Synchronization //: NO##true
#  eltime
告警级别提升时间 elevtime ?Alarm Elevation Time //: 86400#0|60-500000#false
	



# system  ?foreign?
#  operMode
操作模式 mode  s ?Operating Mode	//: NORMAL#normal|Subtending|Japanese#false
#  clk
时钟状态 mstat ?Clock Status	//: SEL##true,
时钟模式 clock_mode  s ?Clock Mode	//: HOLD#ACQ|LOCK|HOLD#false,
当前Tau tau ?Current Tau	//: 60##true,
质量优先级（PQL） pql ?PQL	//: 5##true,
频率偏移 offset ?Frequency Offset	//: (0)##true,
西格玛值 sigma ?Sigma Value	//: (5E-07)##true,
是否同步 syn ?Synchronization	//: NO##true
#  inputRef
输入参考源 port ?Input Reference	//: null,
切换模式 swtmode  s ?Switch Mode	//: AR#AR|AS|OFF#false,
选择模式 selmode  s ?Selection Mode	//: PRI#PRI|PQL#false
#  tl1Format
TL1消息格式 mode  s ?Autonomous Message Format	//: GR831#GR831|GR833#false
#  name
名称 name ?Name	//: SSU_2000##false
#  time
日期/时间 time ?Data/Time	//: 2019-11-28 09:00:19
#  pbo
相位重建（PBO） mode  s ?Phase Build Out	//: REP#DIS|EVT|REP|NONE#false
#  eltime
告警级别提升时间 elevtime ?Alarm Elevation Time //: 86400#0|60-500000#false



#  manage   ?foreign?
#  keepAlive
TL1保持时间 tl1time   ?TL1 Keep Alive	//: 0#0-60#false,
SNMP保持时间 snmptime ?SNMP Keep Alive	//: 0#0-60#false
#  ip //aid: S1A02##true,
主机IP ip ?Host IP	//: 192.168.56.232#aaa.aaa.aaa.aaa#false,
掩码 ipmask ?Mask	//: 255.255.255.0#mmm.mmm.mmm#false,
网关 ipgateway ?GateWay 	//: 192.168.56.1#ggg.ggg.ggg.ggg#false,
Mac mac ?Mac	//: 00A06E009978##true
#  aco  
告警切断 aco s ?Alarm Cutoff	//: INACTIVE#ACTIVE|INACTIVE#false
#  commCOML // aid: COML#COML,COMA,COMB,TELNET,TL1#true,
波特率COML baud  s ?Baud Rate	//: 9600#19200|9600|4800|2400|1200#false,
回显COML echo  s ?Echo	//: ON#ON|OFF#false,
行尾符COML(EOL) eol  s ?EOL	//: CRLF#CR|LF|CRLF#false,
传输模式COML mode  s ?Communication Mode	//: ASCII#ASCII|TL1#false,
超时时间COML tout ?Timeout	//: 300#5-43200|NEVER#false
#  commCOMA // aid: COMA#COML,COMA,COMB,TELNET,TL1#true
波特率COMA baud s ?Baud Rate//: 9600#19200|9600|4800|2400|1200#false,
回显COMA echo s ?Echo //: ON#ON|OFF#false,
行尾符COMA（EOL） eol s ?EOL//: CRLF#CR|LF|CRLF#false,
传输模式COMA mode s ?Communication Mode//: TL1#ASCII|TL1#false,
超时时间COMA tout  ?Timeout//: 300#5-43200|NEVER#false
#  commCOMB //  aid: COMB#COML,COMA,COMB,TELNET,TL1#true,
波特率COMB baud s ?Baud Rate //: 9600#19200|9600|4800|2400|1200#false,
回显COMB echo s ?Echo //: ON#ON|OFF#false,
行尾符COMB（EOL） eol s ?EOL //: CRLF#CR|LF|CRLF#false,
传输模式COMB mode s ?Communication Mode //: ASCII#ASCII|TL1#false,
超时时间COMB tout  ?Timeout //: 300#5-43200|NEVER#false
#  commTL1 //: TL1#COML,COMA,COMB,TELNET,TL1#true,
波特率TL1 baud s ?Baud Rate //: #19200|9600|4800|2400|1200#false,
回显TL1 echo s ?Echo //: #ON|OFF#false,
行尾符TL1（EOL） eol s ?EOL //: #CR|LF|CRLF#false,
传输模式TL1 mode s ?Communication Mode //: #ASCII|TL1#false,
超时时间TL1 tout ?Timeout //: NEVER#5-43200|NEVER#false
#  eltime
告警级别提升时间 elevtime ?Alarm Elevation Time //: 86400#0|60-500000#false


## deleted
#  commTELNET // aid: TELNET#COML,COMA,COMB,TELNET,TL1#true,
baud s //: #19200|9600|4800|2400|1200#false,
echo s //: #ON|OFF#false,
eol s //: #CR|LF|CRLF#false,
mode s //: #ASCII|TL1#false,
tout //: 300#5-43200|NEVER#false

          

# -output---------------------------
#  output 需要传入槽位   ?foreign?
#  e1
选择模式 mode s ?Mode	//: CAS#CAS|CSS#false,
允许选择C时钟 bypass  s  ?Clock-C Bypass	//: OFF#ON|OFF#false,
零点抑制 zs s  ?Zero Suppression	//: ON#ON|OFF#false,
CRC校验 crc s  ?CRC Checking	//: ON#ON|OFF#false,
同步状态消息（SSM） ssm s  ?SSM(Sync Status Messages)	//: ON#ON|OFF#false,
SSM比特位 bit   ?SSM Bit Position	//: 8#4-8#false
#  output
端口 port ?port //: null,
模块状态 mstat ?Module status	  //: OK,
冗余槽位 red ?Redundant To	  //: NA,
时钟源 clksrc ?Clock Source	  //: CLK-A,
质量优先级（PQL） pql ?PQL	  //: 5,
#  eltime
告警级别提升时间 elevtime ?Alarm Elevation Time //: 86400#0|60-500000#false

signal signal : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#E1|2048#false,
pstate pstate : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#ON|OFF#false,
squelch squelch : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0#0-16#false,


pstate pstate : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1



#  output // portSet

port Name status signal squelch 


# ----------------------------
# input  ?foreign?
#  name
端口名称 name ?Port Name//: OT21##false       
#  input 
端口使能状态 pstate s ?Port Enabled State//: ON#ON|OFF#false,
优先级 pri  ?Priority//: 1#1-10|MON#false,
质量优先级（PQL） pql  ?PQL//: 7#1-16#false,
帧格式 mode s ?Framing Type//: CCS#CCS|CAS|1|1.544|5|10#false,
同步状态消息（SSM） ssm s ?SSM(Sync Status Messages)//: ON#ON|OFF#false,
零点抑制 zs s ?Zero Suppression//: ON#ON|OFF#false,
CRC校验 crc s ?CRC Checking//: ON#ON|OFF#false,
增益 gain s ?Gain//: OFF#ON|OFF#false,
铯钟故障 csflt s ?Cesium fault//: OFF#HI|LO|OFF#false,
SSM比特位 bit  ?SSM Bit Position//: 4#4-8#false,
端口名称 name  ?Port Name//: OT21,
模块状态 mstat  ?Module status//: OK,
端口状态 state  ?Port State//: FLT,
A时钟相位 pha  ?Clock-A Phase (ns)//: NA,
B时钟相位 phb  ?Clock-B Phase (ns)//: NA,
A时钟频率 freqA  ?Clock-A Freq (pS/S)//: 0.0,
B时钟频率 freqB  ?Clock-B Freq (pS/S)//: 0.0






















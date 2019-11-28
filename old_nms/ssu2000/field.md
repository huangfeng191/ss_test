#  clock



#  clock 配置 
#  clk
warmup warmup // : 1200#900-3600#false,
mintau mintau // : 1000#300–10000(ST2E),150–1200(ST3E)#false,
maxtau maxtau // : 9000#300–10000(ST2E),150–1200(ST3E)#false,
clkar clkar s // : OFF#ON|OFF#false,
inpswt inpswt // : AR##true,
inpsel inpsel // : PRI##true,
mintaulimit mintaulimit // : 300##true,
maxtaulimit maxtaulimit // : 10000##true,
tod_timeout tod_timeout // : 1440##true
#  status
mstat  mstat  //: SEL##true,
clock_mode  clock_mode s  //: HOLD#ACQ|LOCK|HOLD#false,
tau  tau  //: 60##true,
pql  pql  //: 5##true,
offset  offset  //: (0)##true,
sigma  sigma  //: (5E-07)##true,
syn  syn  //: NO##true



# system

#  operMode
mode mode s //: NORMAL#normal|Subtending|Japanese#false
#  clk
mstat //: SEL##true,
clock_mode clock_mode s //: HOLD#ACQ|LOCK|HOLD#false,
tau //: 60##true,
pql //: 5##true,
offset //: (0)##true,
sigma //: (5E-07)##true,
syn //: NO##true
#  inputRef
port //: null,
swtmode swtmode s //: AR#AR|AS|OFF#false,
selmode selmode s //: PRI#PRI|PQL#false

#  tl1Format
mode mode s //: GR831#GR831|GR833#false
#  name
name //: SSU_2000##false
#  time
time //: 2019-11-28 09:00:19
#  pbo
mode mode s //: REP#DIS|EVT|REP|NONE#false




#  manage

#  keepAlive
tl1time //: 0#0-60#false,
snmptime //: 0#0-60#false
#  ip //aid: S1A02##true,
ip //: 192.168.56.232#aaa.aaa.aaa.aaa#false,
ipmask //: 255.255.255.0#mmm.mmm.mmm#false,
ipgateway //: 192.168.56.1#ggg.ggg.ggg.ggg#false,
mac //: 00A06E009978##true
#  aco  
aco s//: INACTIVE#ACTIVE|INACTIVE#false
#  commCOML // aid: COML#COML,COMA,COMB,TELNET,TL1#true,
baud  s //: 9600#19200|9600|4800|2400|1200#false,
echo  s //: ON#ON|OFF#false,
eol  s //: CRLF#CR|LF|CRLF#false,
mode  s //: ASCII#ASCII|TL1#false,
tout //: 300#5-43200|NEVER#false
#  commCOMA // aid: COMA#COML,COMA,COMB,TELNET,TL1#true,
baud s//: 9600#19200|9600|4800|2400|1200#false,
echo s//: ON#ON|OFF#false,
eol s//: CRLF#CR|LF|CRLF#false,
mode s//: TL1#ASCII|TL1#false,
tout //: 300#5-43200|NEVER#false
#  commCOMB //  aid: COMB#COML,COMA,COMB,TELNET,TL1#true,
baud s//: 9600#19200|9600|4800|2400|1200#false,
echo s//: ON#ON|OFF#false,
eol s//: CRLF#CR|LF|CRLF#false,
mode s//: ASCII#ASCII|TL1#false,
tout //: 300#5-43200|NEVER#false
#  commTELNET // aid: TELNET#COML,COMA,COMB,TELNET,TL1#true,
baud s //: #19200|9600|4800|2400|1200#false,
echo s //: #ON|OFF#false,
eol s //: #CR|LF|CRLF#false,
mode s //: #ASCII|TL1#false,
tout //: 300#5-43200|NEVER#false
#  commTL1 //: TL1#COML,COMA,COMB,TELNET,TL1#true,
baud s //: #19200|9600|4800|2400|1200#false,
echo s //: #ON|OFF#false,
eol s //: #CR|LF|CRLF#false,
mode s //: #ASCII|TL1#false,
tout //: NEVER#5-43200|NEVER#false

          


#  output 需要传入槽位
#  e1
mode mode s //: CAS#CAS|CSS#false,
bypass bypass  s  //: OFF#ON|OFF#false,
zs zs s  //: ON#ON|OFF#false,
crc crc s  //: ON#ON|OFF#false,
ssm ssm s  //: ON#ON|OFF#false,
bit bit   //: 8#4-8#false
#  output
port port  //: null,
mstat mstat  //: OK,
red red  //: NA,
clksrc clksrc  //: CLK-A,
pql pql  //: 5,


signal signal : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#E1|2048#false,
pstate pstate : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#ON|OFF#false,
squelch squelch : 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0#0-16#false,


pstate pstate : 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1



#  output // portSet

port Name status signal squelch 



# input 
#  name
name //: OT21##false       
#  input 
pstate s//: ON#ON|OFF#false,
pri //: 1#1-10|MON#false,
pql //: 7#1-16#false,
mode s//: CCS#CCS|CAS|1|1.544|5|10#false,
ssm s//: ON#ON|OFF#false,
zs s//: ON#ON|OFF#false,
crc s//: ON#ON|OFF#false,
gain s//: OFF#ON|OFF#false,
csflt s//: OFF#HI|LO|OFF#false,
bit //: 4#4-8#false,
name //: OT21,
mstat //: OK,
state //: FLT,
pha //: NA,
phb //: NA,
freqA //: 0.0,
freqB //: 0.0
#  clock 配置 
#  clk  ?option?
#  sys
系统工作模式 workmode s ?MAN|INT1?   
多数判决 votectrl  s  ?Y|N? 
SSM选源控制 ssmctrl   s ?Y|N?
SSM比特位 ssmb  s ?0|4|5|6|7|8? 
E1帧格式 frm   s ?CCS|CAS?
系统鉴相信号 ref    
使能CRC4 crc4   s ?Y|N?
#  level
level level
#  name
name name
#  time
time time


#  manage 配置 
#  manage  ?option?
#  lan
// aid: "BMITU"
IP地址 ip  //: "5.5.5.5#aaa.aaa.aaa.aaa#false"
IP地址掩码 mask  //: "255.255.255.0#mmm.mmm.mmm#false"
IP网关 gateway  //: "5.5.5.1#ggg.ggg.ggg.ggg#false"
TL1端口。不支持修改，默认为300 port  //: "3000"
MAC地址 mac  //: "AA-AA-AA-AA-AA-AA#HH:HH:HH:HH:HH:HH#false"





#  clock 配置 
#  clock  ?option?
#  gnss
// aid  : "BSRCU1"
卫星卡类型 scardtype s ?GLOGPS|GPS|BEIDOU|NONE?
卫星卡状态 scardstate  //: "OK"
卫星仰角门限 elevation  //: "HOLDING"
工作模式 workmode s ?DUAL|GPS|GLO|BD?
时间基准 tbase  s ?GPS|GLO|BD?
可视卫星门限数 thvssr  s ?0|1|2|3|4|5|6|7|8? //: "5#0-8#false"
纬度 latitude  //: "30.28.50N#dd.dd.ddN|dd.dd.ddS#false"
经度 longtitude  //: "114.24.15E#ddd.dd.ddE|ddd.dd.ddW#false"
高度 altitude  //: "33.15#dddd.dd#false"
北斗卫星卡的坐标系 bddat s ?BJ54|WGS84? //: "BJ54#BJ54|WGS84#false"
#  src
// aid  //: "BSRCU1"
时钟源信息 clksrc  //: "CSSR1"
时钟源跟踪状态 clklock  //: "FAST"
时间源信息 ptpsrc  //: "CPNSU1"
时间源跟踪状态 ptplock  //: "HOLD"


# input   ?option?
#  sql
// aid: "CLCIM1-1"
SSM信息 level s ?PRC|TNC|LNC|STU|DUS|SEC
SSM比特位 bit s ?0|1|2|3|4|5|6|7|8?
读取SSM的方式 mode s ?AUTO|PROV?
// almseverity: null
// value: null
// e1slot: null
// ssmtime: null
#  inp
// aid: "CLCIM1-1"
定时信号运行状态 condtype //: "AVAILABLE"
时钟级别 level //: "TNC" 
优先级 prio //: "2"
信号类型 type //: "E1"


# output   ?option?
#  tsou
// aid//: BTSOU21,
// 通道 channelid //: 01,
信号类型 type s ?10M|5M|1M|2048K|1544K|E1|T1?
阻塞状态 ?CLOSE|OPEN?
通道名 name //: OUT1##false
# ccou
channelid //: 01,
信号类型 type s ?10M|5M|1M|2048K|E1|CC? //: E1#10M|5M|1M|2048k|E1|CC#false,
阻塞状态 block ?CLOSE|OPEN?
通道名 name  //: OUT1##false


m = scope.irrationalQueryData;
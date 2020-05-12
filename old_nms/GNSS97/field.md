
# -- clock
    "aid":"q",
    "type":"L",
    "bdzb":"BJ54",
    "ppssta":"1",
    "sourcetype":"1",
    "pos_mode":"HOLD",
    "acmode":"MIX",
    "satr":{"aid":"q",
    "num":"06",
    "ns":"N",
    "ew":"E",
    "high":"+00123.45",
    "version":"v1",
    "model":"model00001",
    "lat":"3806.000012",
    "long":"12300.000034"},
    "pp":"06",
    "qq":"07",
    "ss":"05"

aid
#  clock 配置 
#  
板卡类型 type 
北斗坐标系 bdzb s //BJ54|CGS2000    54坐标系|CGS2000坐标系
PPS状态 ppssta   s // 1、正常 2、原子钟保持； 3、不可用； 4、高稳晶振保持；
时钟源类型 sourcetype s //   1|2|3|4    时钟源类型 。分别表示北斗\GPS\PTP\1PPS+TOD
工作模式 pos_mode s //   POST|HOLD   定位|位置保持模式
接收模式 acmode s //   GPS|BD|MIX 
#  satr 
星数 num //用于定位的星数   00..24
南北维 ns//南北维 
东西经 ew s //东西经   E表示东、W表示西
海拔高度 high//海拔高度  （s::=+|-） 
接收机版本号 version//接收机版本号 
接收机型号 model//接收机型号 
纬度 lat //
经度 long //
#  
卫星号 pp  //       00~99
可见星数 qq  //     00~55
信噪比 ss  //       00~99


# bindings 
bdzb
54坐标系 BJ54
CGS2000坐标系 CGS2000

ppssta   
正常 1 
原子钟保持 2 
不可用  3

sourcetype 
北斗  1
GPS 2
PTP 3
1PPS+TOD 4

pos_mode 
定位 POST
位置保持模式 HOLD   

acmode 
GPS GPS
BD BD
MIX MIX 


satr.ew s 
东 E 
西 W 



nm:[//nm
{"name": "bdzb", "value":"" },
{"name": "54坐标系", "value":"BJ54" },
{"name": "CGS2000坐标系", "value":"CGS2000" },
{"name": "ppssta", "value":"" },
{"name": "正常", "value":"1" },
{"name": "原子钟保持", "value":"2" },
{"name": "不可用", "value":"3" },
{"name": "sourcetype", "value":"" },
{"name": "北斗", "value":"1" },
{"name": "GPS", "value":"2" },
{"name": "PTP", "value":"3" },
{"name": "1PPS+TOD", "value":"4" },
{"name": "pos_mode", "value":"" },
{"name": "定位", "value":"POST" },
{"name": "位置保持模式", "value":"HOLD" },
{"name": "acmode", "value":"" },
{"name": "GPS", "value":"GPS" },
{"name": "BD", "value":"BD" },
{"name": "MIX", "value":"MIX" },
{"name": "satr.ew", "value":"s" },
{"name": "东", "value":"E" },
{"name": "西", "value":"W" },
]


# -- manage 

"aid": "u",

# 
板卡类型 type // N,
MCU版本号 verMCU // V01.01,
FPGA版本号 verFPGA // V01.02,
CPLD版本号 verCPLD // V01.03,
PCB版本号 verPCB // V01.04, 
#  net 
IP地址    ip // 3.3.3.3,
网关    gateway // 3.3.3.1,
子网掩码    netmask // 255.255.255.0,
DNS1    dns1 // 1.1.1.1,
DNS2    dns2 // 1.1.1.2
# 
MAC地址 mac // AA:AA:AA:BB:BB:BB,
MCP时间源 source s // 0从主铷钟盘获取时间；1等待网管设置
MCP闰秒数 leapnum // 04,
本地时钟质量等级 tl s //  G.811时钟（02） G.812转接局时钟（04） G.812本地时钟（08）
SSM使能 ssm_en s//   0|1 关闭|打开
SSM门限 ssm_thd c ; //   a: G.811 时钟（02）  b: G.812 转接局时钟（04）  c: G.812 本地时钟（08） d: 同步设备定时源（0B）  e: 不应用作同步（0F）  f: 质量情况未知（00）


# source
从主铷钟盘获取时间 0
等待网管设置 1
tl
G.811时钟 02 
G.812转接局时钟 04 
G.812本地时钟 08
ssm_en
关闭 0
打开 1 
ssm_thd
G.811时钟（02） a
G.812转接局时钟（04） b
G.812本地时钟（08）  c
同步设备定时源（0B） d
不应用作同步（0F） e
质量情况未知（00） f

nm:[//nm
{"name": "从主铷钟盘获取时间", "value":"0" },
{"name": "等待网管设置", "value":"1" },
{"name": "tl", "value":"" },
{"name": "G.811时钟", "value":"02" },
{"name": "G.812转接局时钟", "value":"04" },
{"name": "G.812本地时钟", "value":"08" },
{"name": "ssm_en", "value":"" },
{"name": "关闭", "value":"0" },
{"name": "打开", "value":"1" },
{"name": "ssm_thd", "value":"" },
{"name": "G.811时钟（02）", "value":"a" },
{"name": "G.812转接局时钟（04）", "value":"b" },
{"name": "G.812本地时钟（08）", "value":"c" },
{"name": "同步设备定时源（0B）", "value":"d" },
{"name": "不应用作同步（0F）", "value":"e" },
{"name": "质量情况未知（00）", "value":"f" },
]

# input 

 "aid": "o",

板卡类型 type //: K,
当前参考源 source s //: 1#1-8|F#false,
优先级 priority //: 12345666, 参考输入信号优先级（8路）参考输入信号优先级，共8路参考输入，依次代表INP-1~INP-8。x为1~6，1优先级最高
信号屏蔽状态 mask //: 00001111,
输出时区 we s //: 0, //输出时区。 0：东时区，1：西时区
输出时区编码 out s //: H, //输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
主备状态 msmode s //: MAIN,// MAIN|STANDBY
跟踪模式 trmode s // TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
前/后输入源 fb s //: 0  。 0代表从前面板输入（默认），1代表从后面板输入

source 
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
we
东时区 0
西时区 1
out 
UTC时间  0x40 
时区8（北京时间） 0x48 
msmode
MAIN MAIN
STANDBY STANDBY
trmode
跟踪 TRCK
保持 HOLD
快捕 FATR
判源 TEST
自由运行 FREE 
fb
代表从前面板输入 0
代表从后面板输入 1

nm:[//nm
{"name": "source", "value":"" },
{"name": "1", "value":"1" },
{"name": "2", "value":"2" },
{"name": "3", "value":"3" },
{"name": "4", "value":"4" },
{"name": "5", "value":"5" },
{"name": "6", "value":"6" },
{"name": "7", "value":"7" },
{"name": "8", "value":"8" },
{"name": "we", "value":"" },
{"name": "东时区", "value":"0" },
{"name": "西时区", "value":"1" },
{"name": "out", "value":"" },
{"name": "UTC时间", "value":"0x40" },
{"name": "时区8（北京时间）", "value":"0x48" },
{"name": "msmode", "value":"" },
{"name": "MAIN", "value":"MAIN" },
{"name": "STANDBY", "value":"STANDBY" },
{"name": "trmode", "value":"" },
{"name": "跟踪", "value":"TRCK" },
{"name": "保持", "value":"HOLD" },
{"name": "快捕", "value":"FATR" },
{"name": "判源", "value":"TEST" },
{"name": "自由运行", "value":"FREE" },
{"name": "fb", "value":"" },
{"name": "代表从前面板输入", "value":"0" },
{"name": "代表从后面板输入", "value":"1" },
]



# output 



板卡类型 type // a,
输出信号级别 level s // 0B#00|02|04|08|0B|0F#false,
输出信号类型 out_type // 0000111100002222#dddddddddddddddd#false,  0：2.048Mhz 1：2.048Mbit/s 2：无输出
输出主备模式 mode s // 0#0|1#false,1：主备模式；0：普通模式
输出主备状态 out_sta s  // 0 输出主备状态。 0：主用； 1：备用。 （当为普通模式时，这项可以不在网管上显示）

out_type
2.048Mhz 0
2.048Mbit/s 1
无输出 2


level
G.811时钟 02 
G.812转接局时钟 04 
G.812本地时钟 08 
同步设备定时源 0B 
不应用作同步 0F 
质量情况未知 00 
mode
主备模式 1
普通模式 0
out_sta
主用 0
备用 1

nm:[//nm
    {"name": "level", "value":"" },
    {"name": "G.811时钟", "value":"02" },
    {"name": "G.812转接局时钟", "value":"04" },
    {"name": "G.812本地时钟", "value":"08" },
    {"name": "同步设备定时源", "value":"0B" },
    {"name": "不应用作同步", "value":"0F" },
    {"name": "质量情况未知", "value":"00" },
    {"name": "mode", "value":"" },
    {"name": "主备模式", "value":"1" },
    {"name": "普通模式", "value":"0" },
    {"name": "out_sta", "value":"" },
    {"name": "主用", "value":"0" },
    {"name": "备用", "value":"1" },
    ]


# system 


#  inputRef
板卡类型 type  //: K,
当前参考源 source //: 1#1-8|F#false,
优先级 priority //: 12345666#dddddddd#false,
信号屏蔽状态 mask //: 00001111,
输出时区 we s //: 0, //输出时区。 0：东时区，1：西时区
输出时区编码 out s //: H, //输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
主备状态 msmode s //: MAIN,// MAIN|STANDBY
跟踪模式 trmode s // TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
前/后输入源 fb s //: 0  。 0代表从前面板输入（默认），1代表从后面板输入
# 
名称 name //: LT00000000000012,
时间 time //: 2020-04-15 11:21:37


 输入信号屏蔽状态，
    表示INP1到INP8参考输入。x为0|1，

mask     
屏蔽 1 
不屏蔽 0 

{"name": "屏蔽", "value":"1" },
{"name": "不屏蔽", "value":"0" },

优先级 priority //: 12345666#dddddddd#false,
信号屏蔽状态 mask //: 00001111,
输出时区 we s //: 0, //输出时区。 0：东时区，1：西时区
输出时区编码 out s //: H, //输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
主备状态 msmode s //: MAIN,// MAIN|STANDBY
跟踪模式 trmode s // TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
前/后输入源 fb s //: 0  。 0代表从前面板输入（默认），1代表从后面板输入
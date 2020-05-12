#
板卡类型 type // N,
MCU版本号 verMCU // V01.01,
FPGA版本号 verFPGA // V01.02,
CPLD版本号 verCPLD // V01.03,
PCB版本号 verPCB // V01.04, 
# net
IP地址 ip // 3.3.3.3,
网关 gateway // 3.3.3.1,
子网掩码 netmask // 255.255.255.0,
DNS1 dns1 // 1.1.1.1,
DNS2 dns2 // 1.1.1.2
MAC地址 mac // AA:AA:AA:BB:BB:BB,
MCP时间源 source s // 0从主铷钟盘获取时间；1等待网管设置
MCP闰秒数 leapnum // 04,
本地时钟质量等级 tl s //  G.811时钟（02） G.812转接局时钟（04） G.812本地时钟（08）
SSM使能 ssm_en s //   0|1 关闭|打开
SSM门限 ssm_thd c; //   a: G.811 时钟（02）  b: G.812 转接局时钟（04）  c: G.812 本地时钟（08） d: 同步设备定时源（0B）  e: 不应用作同步（0F）  f: 质量情况未知（00）


#
source
从主铷钟盘获取时间 0
等待网管设置 1
tl
G .811 时钟 02
G .812 转接局时钟 04
G .812 本地时钟 08
ssm_en
关闭 0
打开 1
ssm_thd
G .811 时钟（ 02） a
G .812 转接局时钟（ 04） b
G .812 本地时钟（ 08） c
同步设备定时源（ 0B） d
不应用作同步（ 0 F） e
质量情况未知（ 00） f



aid: o,
    type: K,
    source: 1,
    priority: 12345666,
    mask: 00001111,
    we: 0,
    out: 0x48,
    msmode: MAIN,
    trmode: TRCK,
    fb: 0











板卡类型 type //: K,
当前参考源 source s //: 1#1-8|F#false,
优先级 priority //: 12345666#dddddddd#false,
信号屏蔽状态 mask //: 00001111,
输出时区 we s //: 0, //输出时区。 0：东时区，1：西时区
输出时区编码 out s //: H, //输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
主备状态 msmode s //: MAIN,// MAIN|STANDBY
跟踪模式 trmode s //: TRCK, // 。 TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
前 / 后输入源 fb s //: 0  。 0代表从前面板输入（默认），1代表从后面板输入




板卡类型 type // a,
输出信号级别 level s // 0B#00|02|04|08|0B|0F#false,
输出信号类型 out_type // 0000111100002222#dddddddddddddddd#false,  0：2.048Mhz 1：2.048Mbit/s 2：无输出
输出主备模式 mode s // 0#0|1#false,1：主备模式；0：普通模式
输出主备状态 out_sta s // 0 输出主备状态。 0：主用； 1：备用。 （当为普通模式时，这项可以不在网管上显示）


level
G .811 时钟 02
G .812 转接局时钟 04
G .812 本地时钟 08
同步设备定时源 0B
不应用作同步 0 F
质量情况未知 00
mode
主备模式 1
普通模式 0
out_sta
主用 0
备用 1

nm: [ //nm
    { name: level, value:  },
    { name: G.811时钟, value: 02 },
    { name: G.812转接局时钟, value: 04 },
    { name: G.812本地时钟, value: 08 },
    { name: 同步设备定时源, value: 0B },
    { name: 不应用作同步, value: 0F },
    { name: 质量情况未知, value: 00 },
    { name: mode, value:  },
    { name: 主备模式, value: 1 },
    { name: 普通模式, value: 0 },
    { name: out_sta, value:  },
    { name: 主用, value: 0 },
    { name: 备用, value: 1 },
]



a = {
    code: 100000,
    data: {
        all: [],
        alarms: {},
        params: {
            inputRef: {
                aid: o,
                type: K,
                source: 1#1-8|F#false,
                priority: 12345666#dddddddd#false,
                mask: 00001111,
                we: 0,
                out: H,
                msmode: MAIN,
                trmode: TRCK,
                fb: 0
            },
            name: LT00000000000012,
            time: 2020-04-15 11:21:37
        },
        status: {}
    }
}



#  inputRef
    type: K,
    source: 1#1-8|F#false,
    priority: 12345666#dddddddd#false,
    mask: 00001111,
    we: 0,
    out: H,
    msmode: MAIN,
    trmode: TRCK,
    fb: 0
# 
name: LT00000000000012,
time: 2020-04-15 11:21:37
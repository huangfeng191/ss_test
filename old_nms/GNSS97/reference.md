num;//用于定位的星数 。  00..24
utctime;//UTC时间 。 （时分秒） 。
LAT;//纬度 。
ns;//南北维 。
LONG;//经度 。
ew;//东西经 。  E表示东、W表示西
high;//海拔高度 。 （s::=+|-） 。
version;//接收机版本号 。
model;//接收机型号 。
aid;    // 板卡ID 。
type;  // 板卡类型 。
bdzb;   // 北斗坐标系 。  BJ54|CGS2000    54坐标系|CGS2000坐标系
ppssta; // 1PPS状态 。 1、正常； 2、原子钟保持； 3、不可用； 4、高稳晶振保持；
sourcetype; // 时钟源类型 。 1|2|3|4    时钟源类型 。分别表示北斗\GPS\PTP\1PPS+TOD
pos_mode;   // 工作模式 。 POST|HOLD   定位|位置保持模式
acmode;     // 接收模式 。 GPS|BD|MIX
pp;  // 卫星号 。      00~99
qq;  // 可见星数 。    00~55
ss;  // 信噪比 。      00~99"


# manage 

"    <version-MCU>::=VXX.XX，MCU版本号，每个X为一个ASCII码，0～9之间的数字， 例如：V01.01。没有为空。
    <version-FPGA>::=VXX.XX，FPGA版本号，每个X为一个ASCII码，0～9之间的数字， 例如：V01.01。没有为空。
    <version-CPLD>::=VXX.XX，CPLD版本号，每个X为一个ASCII码，0～9之间的数字， 例如：V01.01。没有为空。
    <version-PCB>::=VXX.XX，PCB版本号，每个X为一个ASCII码，0～9之间的数字， 例如：V01.01。没有为空。

    private String ip; // IP。
    private String gateway; // 网关。
    private String netmask; // 掩码。
    private String dns1;   // 主用DNS。
    private String dns2;   // 备用DNS。

    private String mac;     // MAC地址。
    private String source; // MCP时间源。 0从主铷钟盘获取时间；1等待网管设置
    private String leapnum; // MCP闰秒数。
    private String tl;      // 本地时钟质量等级。 G.811时钟（02） G.812转接局时钟（04） G.812本地时钟（08）
                            // 同步设备定时源（0B） 不应用作同步（0F） 质量情况未知（00）
    private String ssm_en;  // SSM使能。  0|1 关闭|打开
    private String ssm_thd; // SSM门限。  a: G.811 时钟（02）  b: G.812 转接局时钟（04）  c: G.812 本地时钟（08）
                            //   d: 同步设备定时源（0B）  e: 不应用作同步（0F）  f: 质量情况未知（00）
"


# input 

private String source; // 当前参考源。 1~8 或 F，分别表示参考源 INP-1～INP-8，F表示当前无参考源钟保持
private String priority; // 参考输入信号优先级（8路）。 xxxxxxxx 参考输入信号优先级，共8路参考输入，依次代表INP-1~INP-8。x为1~6，1优先级最高
private String mask; // 参考输入信号屏蔽状态（8位）。 xxxxxxxx 参考输入信号屏蔽状态，表示INP1到INP8参考输入。x为0|1，1屏蔽，0不屏蔽
private String we; // 输出时区。 0：东时区，1：西时区
private String out; // 输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
private String msmode; // 主备状态。 MAIN|STANDBY
private String trmode; // 跟踪模式。 TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
private String fb; // 前/后输入源。 0代表从前面板输入（默认），1代表从后面板输入
"

# output 

private String level; // 输出信号级别   G.811时钟（02） G.812转接局时钟（04） G.812本地时钟（08）
// 同步设备定时源（0B） 不应用作同步（0F） 质量情况未知（00）
private String out_type; // 16路输出信号类型。xxxxxxxxxxxxxxxx x=0|1|2| 1～16路输出信号类型。 0：2.048Mhz 1：2.048Mbit/s 2：无输出
// 对于 OUTH32 0 表示打开、2 表示关闭； 对于 OUTE32 1 表示打开、2 表示关闭
private String mode; // 输出主备模式。 1：主备模式；0：普通模式
private String out_sta; // 输出主备状态。 0：主用； 1：备用。 （当为普通模式时，这项可以不在网管上显示）
"



# system 


private String source; // 当前参考源。 1~8 或 F，分别表示参考源 INP-1～INP-8，F表示当前无参考源钟保持
private String priority; // 参考输入信号优先级（8路）。 xxxxxxxx 参考输入信号优先级，共8路参考输入，依次代表INP-1~INP-8。x为1~6，1优先级最高
private String mask; // 参考输入信号屏蔽状态（8位）。 xxxxxxxx 参考输入信号屏蔽状态，表示INP1到INP8参考输入。x为0|1，1屏蔽，0不屏蔽
private String we; // 输出时区。 0：东时区，1：西时区
private String out; // 输出时区编码。 0x40 UTC时间 ; 0x48 时区8（北京时间）
private String msmode; // 主备状态。 MAIN|STANDBY
private String trmode; // 跟踪模式。 TRCK|HOLD|FATR|TEST|FREE 跟踪模式：跟踪|保持|快捕|判源|自由运行
private String fb; // 前/后输入源。 0代表从前面板输入（默认），1代表从后面板输入
"


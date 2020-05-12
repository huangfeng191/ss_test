"level; // 系统输出时钟级别。

private String workmode; // 系统工作模式。
private String votectrl; // 多数表决是否参与系统控制。Y为参与控制，N为不参与控制。
private String ssmctrl; // SSM信息是否参与选源控制。Y为参与控制，N为不参与控制。
private String ssmb; // 输出E1信号SSM比特位。取值0或者4～8。0表示无SSM信息
private String frm; // 输出E1信号帧格式。取值为CCS|CAS。
private String ref; // 系统鉴相信号。
private String crc4; // 使能CRC4格式。Y表示使能，N表示不使能。
"


# manage 

private String ip;      // IP地址。
private String mask;    // IP地址掩码。
private String gateway; // IP网关。
private String port;    // TL1端口。不支持修改，默认为3000
private String mac;     // MAC地址。"


# input 
"	private String aid;  // 输入源
	private String condtype; // 定时信号运行状态。MASTER|AVAILABLE|UNUSABLE|STANDBY|LOST，代表定时输入信号的运行状态（主用、可用、不可用、备用、丢失）
	private String level;    // SSM信息。PRC|TNC|LNC|STU|DUS|SEC，代表输入信号实际携带的SSM信息，无SSM的源，此项为空
	private String prio;     // 优先级
	private String type;	 // 信号类型

	private String aid;  // 输入源
	private String level; // 时钟级别。PRC|TNC|LNC|STU|DUS|SEC，代表输入信号实际携带的SSMB信息，无SSMB的源，	此项为空。其中：
 – PRC（0010）代表G.811时钟信号。
 – TNC（0100）代表G.812转接局时钟信号。
 – LNC（1000）代表G.812本地局时钟信号。
 – SEC（1011）代表同步设备定时源。
 – STU（0000）代表同步质量不知道。
 – DUS（1111）代表此信号不应用作同步。

	private String bit;  // SSM比特位，值域为：4～8,（非E1或无SSMB的E1信号，此参数 无效）。 
	private String mode;   // 读取SSM的方式。AUTO|PROV，设置为PROV时，表示 该E1信号为无SSMB。

"
# clock


"	private String scardtype;  // 卫星卡类型。GLOGPS|GPS|BEIDOU|NONE；表示双星卡|GPS卡|北斗卡|没有卫星卡。
	private String scardstate; // 卫星卡状态。 值为OK|FAIL|INIT；表示卫星卡正常|故障|正在启动。
	private String mode;       // 工作状态。取值为：POSITIONING|HOLDING|AUTO，代表 定位|位置保持|自动平均测量。
	private String elevation;  // 卫星仰角门限。单位为度。
	private String workmode;   // 工作模式。值为GPS|GLO|DUAL|BD。
	private String tbase;      // 时间基准。值为GPS|GLONASS|BD。
	private String thvssr;     // 可视卫星门限数。0～8的正整数。
	private String latitude;   // 纬度。格式为“nn.nn.nnS”或“nn.nn.nnN”
	private String longtitude; // 经度。格式为“nn.nn.nnW”或“nn.nn.nnE”
	private String altitude;   // 高度。格式为“nnn.nn”，高度的具体值，单位为米。
	private String bddat;      // 北斗卫星卡的坐标系。取值为BJ54|WGS84

	private String clksrc;  // 时钟源信息。
	private String clklock; // 时钟源跟踪状态。FREE-自由；FAST-快锁；FOLLOW-锁定； HOLD-保持；INVALID-无效状态
	private String ptpsrc;  // 时间源信息。
	private String ptplock;	// 时间源跟踪状态，FREE-自由；FOLLOW-锁定；HOLD-保持； INVALID-无效状态。
"


# output

"    private String aid; // 板卡ID
private String channelid; // 通道ID。
private String type; // 信号类型。取值为 10M|5M|1M|2048K|1544K|E1|T1 或
者 10M|5M|1M|2048k|E1|CC。
private String block; // 阻塞状态。取值为CLOSE|OPEN
private String name; // 通道名。取值为字符串 ，不超过32个字符。
"


系统管理员: ""
业务配置员: ""
业务操作员: ""
审核管理员: ""
审计管理员: ""
无权限角色: ""

ntpServerPortIndex  服务器网口索引 //1 ntp-1 ；2 ntp-2 ； 3 ntp-3 ；4 ntp-4



ntpServerListEnable  NTP名单控制 //不使用名单(0)； 使用白名单(1)； 使用黑名单(2)
ntpServerAutoKeyEnable  Autokey控制 //不使用autokey加密（0）； 使用autokey加密（1）；
ntpServerAutoKeyVlue  NTP口的autokey密钥
ntpServerMd5Enable  MD5控制  //不使用MD5加密（0）； 使用MD5加密（1）
ntpServerMd5Value  NTP口的MD5密钥
ntpServerBroadcastEnable  NTP广播控制 //不使用广播授时（0）； 使用广播授时（1）
ntpServerBroadcastAddr  设置和查询NTP广播地址
ntpServerBroadcastInterval  广播数据发送间隔 //3-17
ntpServerManycastEnable  NTP组播控制 //不使用组播授时（0）； 使用组播授时（1）
ntpServerManycastAddr  设置和查询NTP组播地址
ntpServerManycastInterval  组播数据发送间隔 //3-17
ntpServerPortIPaddress  NTP网口IP地址配置
ntpServerConfigPortState  NTP网口状态控制 //禁用(0)；启用(1)；重启(2)
ntpServerPortMACaddress  NTP服务器网口MAC地址




ntpServerListEnable  NTP名单控制 //不使用名单(0)； 使用白名单(1)； 使用黑名单(2)
ntpServerAutoKeyEnable  Autokey控制 //不使用autokey加密（0）； 使用autokey加密（1）；
ntpServerMd5Enable  MD5控制  //不使用MD5加密（0）； 使用MD5加密（1）
ntpServerBroadcastEnable  NTP广播控制 //不使用广播授时（0）； 使用广播授时（1）
ntpServerManycastEnable  NTP组播控制 //不使用组播授时（0）； 使用组播授时（1）
ntpServerConfigPortState  NTP网口状态控制 //禁用(0)；启用(1)；重启(2)


ntpServerListEnable 不使用名单 0 
ntpServerListEnable 使用白名单 1 
ntpServerListEnable 使用黑名单 2 

ntpServerAutoKeyEnable 不使用autokey加密 0
ntpServerAutoKeyEnable 使用autokey加密 1

ntpServerMd5Enable 不使用MD5加密 0
ntpServerMd5Enable 使用MD5加密 1
ntpServerBroadcastEnable 不使用广播授时 0
ntpServerBroadcastEnable 使用广播授时 1
ntpServerManycastEnable 不使用组播授时 0
ntpServerManycastEnable 使用组播授时 1

ntpServerConfigPortState 禁用 0 
ntpServerConfigPortState 启用 1 
ntpServerConfigPortState 重启 2 




// 白名单设置
ntpWhitelistPortIndex 服务器网口索引
ntpWhitelistIndex 名单索引
ntpWhitelistAddr 名单IP地址
ntpWhitelistCount 名单中的数据个数
ntpWhitelistRowStatus 名单表格参数控制字 //

(1)	参数可配置； 
(2)	参数不可配置； 
(3)	参数没准备好； 
(4)	参数添加完成； 
(5) 准备添加参数； 
(6) 删除参数；


// 黑名单

ntpBlacklistPortIndex 服务器网口索引
ntpBlacklistIndex 名单索引
ntpBlacklistAddr 名单IP地址
ntpBlacklistCount 名单中的数据个数
ntpBlacklistRowStatus 名单表格参数控制字 //(1)	参数可配置； (2)	参数不可配置； (3)	参数没准备好； (4)	参数添加完成； (5)准备添加参数； (6)删除参数；






backupIPCConfig 配置信息备份 执行(1)；不执行(0)。 按钮
factoryIPCConfig NTP服务器恢复出厂配置执行(1)；不执行(0)。  按钮
restoreIPCConfig NTP服务器恢复备份配置 执行(1)；不执行(0)。  按钮
rebootIPC NTP服务器重启 ：执行(1)；不执行(0)。按钮

ntpServerHotbackupMode  NTP服务器双机热备份使能 使能(1), 不使能(0)
ntpServerHotbackupPeerIP    NTP服务器双机热备份同伴主机IP地址

ntpServerVersion       NTP服务器版本  只读
ntpServerBondMode   NTP服务器绑定模式  

disable(0),
bond0-p1p0-p1p1-balance-rr(1),
bond0-p1p0-p1p1-active-backup(2),
bond0-p1p0-p1p1-balance-xor(3),
bond0-p1p0-p1p1-broadcast(4),
bond0-p1p0-p1p1-802-3ad(5),
bond0-p1p0-p1p1-balance-tlb(6),
bond0-p1p0-p1p1-balance-alb(7),
bond0-p1p0-p1p2-balance-rr(8),
bond0-p1p0-p1p2-active-backup(9),
bond0-p1p0-p1p2-balance-xor(10),
bond0-p1p0-p1p2-broadcast(11),
bond0-p1p0-p1p2-802-3ad(12),
bond0-p1p0-p1p2-balance-tlb(13),
bond0-p1p0-p1p2-balance-alb(14),
bond0-p1p0-p1p3-balance-rr(15),
bond0-p1p0-p1p3-active-backup(16),
bond0-p1p0-p1p3-balance-xor(17),
bond0-p1p0-p1p3-broadcast(18),
bond0-p1p0-p1p3-802-3ad(19),
bond0-p1p0-p1p3-balance-tlb(20),
bond0-p1p0-p1p3-balance-alb(21),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-balance-rr(22),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-active-backup(23),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-balance-xor(24),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-broadcast(25),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-802-3ad(26),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-balance-tlb(27),
bond0-p1p0-p1p1-bond1-p1p2-p1p3-balance-alb(28) 








userPortIndex 服务器网口索引
userInfo 用户信息数据
userInfoclear 




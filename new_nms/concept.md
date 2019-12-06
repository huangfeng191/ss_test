链路：
  输出设备的 输出口， 连接 输入设备的输入口



 告警状态： 
  0 消失 3 清除
  1 产生 2 确认


告警等级：
  major 主要告警
  minor 次要告警
  CRITI 严重告警   //critical 危险的
  event 事件告警


CC: clockCard 钟卡
MC: manageCard 管理卡
4-E1: e1 输入卡 由一个 GNSS 卡及 4个  E1 输入口组成
E1-T1: e1 t1 输出卡


# 项目使用设备

SM2000   
SM2000_GN 接收模块 

SYNLOCKV3 华为
GNSS97  大唐
TSG3800 迅腾   
TP1100 迅腾   


输入配置管理：
    帧类型：
    freq1544KHz 北美 日本 无帧 (不用)
    d4    有帧                             
    esf 有帧


    freq2048KHz 2M 中国 欧洲 common 无帧
    ccs   2M 有帧
    cas  2M  有帧 


    CRC状态 校验 完整性
    SSM状态: 信号同步报文 




SSM 编码  优选顺序   质量等级描述  对应我国时钟等级
0010     最高       QL_PRC        1级基准时钟          LPR 也是一级基准时钟
0000     ↓          QL_UNK        质量等级未知
0100     ↓          QL_SSUT       2级节点时钟
1000     ↓          QL_SSUL       3级节点时钟
1011     ↓          QL_SEC        SDH网元设备时钟
1111     最低        QL_DNU       同步信号不可用








gnssConfigInfo:"卫星配置信息",\
gnssStateInfo:"卫星状态信息",               



GNSS1   卫星输入模块1
SNMP 简单网络管理协议 (Simple Network Management Protocol)
TP1
　目前 ISO-TP 中包含五种传输层协议，从传输层协议类0到传输层协议类4（TP0、TP1、TP2、TP3 和 TP4）。协议由0到4逐渐复杂。TP0-3 只适用于面向连接通信，在该通信方式下，任何数据发送之前，必须先建立会话连接；而 TP4 既可以用于面向连接通信也可以用于无连接通信。





Vendor  厂商 

"赛思" "ss"
"华为" "hw"
"大唐" "dt
"迅腾" "xt"



topLevel

NORMAL greent
EVENT  blue 
MINOR  yellow
MAJOR  pink
CRITI  red   //critical 危险的






deviceType:

正常 greent
离线 gery
red
pink
yellow


device:
  name     		 设备名称  
  value         坐标（显示点在图中的位置）经度，纬度
  type     		 时钟类型
  id	                        设备ID		
  group 		组，用来搜索的
  parent        type为NEG类型的设备的ID  
  status        当前状态，参照pointStatus  
  value         自定义，
  company       设备厂商
  ip            设备IP
  clockLevel    时钟等级
  model         设备类型
  warningNum    告警数量
  查询所有设备




针对配置：虽然未插卡，但可以提前配置;

SM2000  可配置 (4e1+1Gnss)*2 

GNSS1 



PPS 相位信号 (包含频率)
OTS ？ 时间 信号


<!-- 交互协议 -->
TL1   协议
SSMP 协议交互



## 卡类型
IOC 钟卡






板卡跟槽位的概念：

将板卡插入槽位


# 2019-12-06  Friday 

使能  Enable Disable 可以开启关闭

状态: ALARM  OK  UNEQUIPPED (未安装)

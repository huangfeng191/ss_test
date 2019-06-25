
SSM 编码  优选顺序   质量等级描述  对应我国时钟等级
0010     最高       QL_PRC        1级基准时钟          PLR 也是一级基准时钟
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
CRITI  red  




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






  pagination  setting 

query:
  page=1&
  pageSize=1000

response:
  data.totalElements
# PS:
    权限与日志的key 可以混用
# generate:
template :'{"name":"${0}","id":"${1}","operate":"${2:view}",options: null,},'
options:?title:field,title:field
op=
query parent import export upload
# 查询 打印 导入 导出 上传
operate:"",remarks:""
点击了查询

#  首页 index  ?button?
首页 index 

#  拓扑管理 topology 
拓扑管理 topology
物理拓扑 physics
逻辑拓扑 logic
网管拓扑 net
拓扑信息统计 statistics
//告警列表 warningList

#  配置管理 configure ?Options?
配置管理 configure
网元配置 config query ?网元名称:name,厂商:NEType,设备类型:deviceType  
网元管理 manage
//EMS配置 EMS 
配置信息统计 statistics
#  告警管理 warning
告警管理 warning
当前告警 current

历史告警 history
告警处理 handle

告警屏蔽 mask

告警统计 statistics
#  性能管理 performance
性能管理 performance
当前性能 current

历史性能 history
性能设置 setting

性能统计 statistics
#  运维管理 operation
运维管理 operation
数据统计 datas  
拓扑信息统计 datas-topology
配置信息统计 datas-configure
告警统计 datas-warning
性能统计 datas-performance
用户统计 datas-user
日志统计 datas-log
年度报表 year 
运维调整报表 year-adjust 
用户活跃度统计 year-activity
设备告警统计 year-warning
综合分析 allocation
设备故障型号分析 allocation-type
设备故障厂商分析 allocation-vendor
设备性能报表 allocation-performance
温度影响故障分析 allocation-temperature
调整记录 adjust 

环境管理 environment 

#  系统管理 system
系统管理 system
安全管理 security
用户管理 security-user 

权限管理 security-role

用户统计 security-statistics
系统参数 security-parameter

目录管理 security-menu

日志管理 log
安全日志 log-security
系统日志 log-system
日志统计 log-allocation
接口管理 interface

网管检测 monitor
系统信息 monitor-infos

数据库管理 monitor-database

远程维护 monitor-remote

#  帮助 help
帮助 help
知识库 knowledge

站点详情 station

区域详情 area

设备详情 device
在线手册 online

页面-执行了-
查询,打印,导入,导出, 上传,上载,只要是个按钮,都包含了
按钮日志
告警模块添加字段 告警id 
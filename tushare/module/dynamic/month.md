1 V3 TSG3800 TP1100 输入,钟卡,系统,输出设置，  
2 V3 输入查询


1 GNSS97设置调试、开发,国网系统中用户管理模块修改。



 编写插件  ssModal  ssDevice 用于弹出框及设备搜索 
2 用户管理及权限管理模块开发 
3 前端支持session失效后自动跳转到首页，关闭页面时注销用户及长时间未操作跳转到首页 
4 登录页面：初始秘密须修改才能登录功能 5 优化SsTable插件，方便后续表格类模块开发，支持分页、配置接口查询、样式(查询条件动态生成，未完成)



1 完善ssTable 插件,开发安全日志、操作日志、系统日志功能
2 代码测试报告中前端部分修改
3 引入打印插件 printThis ,且应用在配置管理-网元配置中
4 引入导出excle插件 tableExport，修改ssForm 支持导出excel功能，将在配置管理-网元配置中，日志管理中



.国网问题梳理
2.用户管理接口与后台联调
3.物理拓扑网元组、链路需求整理修改



.物理拓扑链路、网元、区域修改、左侧厂商、网元类型绑定地图
2 逻辑拓扑、网络拓扑缩放修改
3 sm3 前端加密 
4websocket调试



1 物理拓扑，网元组新增 修改 删除，显示隐藏及详情功能 
2 物理拓扑功能调整:单击弹出设备信息,且可放大，双击添加链路信息,修复为解决区域问题，引起的缩放问题 
3 1、2级菜单可以按权限配置显示改造 
4 配置管理-网元配置 sm2000 显示优化 
5 配合外包



1 物理拓扑链路功能修改:增、删、改(接口未提供),放大及省地图显示路由器名称 
2 告警处理功能开发 查询增删改 
3 电科院问题bug修改 
4 性能设置优化 分页 新增 删除修改，当前性能，历史性能调试。 
5 现在管网 win7 无法连上设备，后台连接代码换回老的，接口会出现超时情况，调试 
6 系统权限控制:首页 拓扑 告警管理 ，性能设置 模块优化，将监视级用户的  添加 删除 设置 功能去除 
7 修改nms.sql 脚本，使系统能正常部署登录,
 8 修改192.168.5.102 上用户信息，使fengfeng 账号能正常显示 设备等信息。
 9 配合外包



 1 sm2000设置bug 修改 
2 系统配置模块开发：查询、删除、新增、修改 
3 与开发公司人员需求整理及沟通完全情况 
4 首页告警数与告警列表联动、首页中心地图，与左下脚地图导航等 
5 河北信通问题协助处理



1 sm2000设置bug修改、物理拓扑bug修改
2 国网需求整理及问题梳理
3 与开发公司问题沟通


1 国网系统剩余问题整理与功能整理
2 与开发公司沟通
3 国网系统bug修改



1 设备接收机功能前端嵌入沟通 
2 链路功能前台开发沟通 
3 系统问题测试沟通 
4 日志管理、 前台调用 
5 网络拓扑显示优化 
6 设备管理区域选择优化


1 SM2000、V3SYNLOCK、TSG3800、TP1100、 GNSS97设置调试、开发
2 物理、逻辑、网络拓扑功能修改
3 系统管理功能开发修改
4 系统问题测试、整理沟通
5 接收机功能前端开发
6 告警socket联动显示
7 运维管理、帮助、性能管理等bug修改
8 打印插件编写
9 配合开发公司进行模块功能修改

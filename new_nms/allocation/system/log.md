操作日志  ： 对设备的操作日志   cmdLog   device:    show log command   // 操作日志  设备

安全日志 : 是指设备的登录信息   table: secu_log    device:     show log security
          
           /nms/spring/log/nmsLog   登录登出  ,   模糊查询用户名
            只存有 时间 跟描述 


系统日志  :  设备的事件日志            show log event  // 设备
          


LogManagController.java

question:

1 操作日志及系统日志取自设备，是否与需求冲突
2 导入 删除功能


关联用户 查询是根据 设备权限来的 是不是 有问题

日志属性要求：操作名称、操作类别

3 安全审计对日志的要求
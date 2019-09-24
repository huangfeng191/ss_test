首页:
    物理拓扑：
        链路添加  /nms/spring/viewData/addPath  pathType: "2"
        链路修改  暂无
        链路删除  /nms/spring/viewData/deletePathByObject   pathType: "2"

        添加设备  post /nms/spring/device
        设备修改  put /nms/spring/device
        设备删除  delete /nms/spring/device/ID
        设备同步 post nms/spring/device/ID/syncAlarms

        添加网元组  post /nms/spring/viewData/addNodeGroup
        修改网元组  暂无
        删除网元组 post /nms/spring/viewData/deleteNodeGroup



    告警确认 put /nms/spring/alarm/updateAlarmState?state=2&activeAlarmId=ID&confirmOperator=drow
    告警清除 put /nms/spring/alarm/updateAlarmState?state=3&activeAlarmId=ID&confirmOperator=drow
    告警备注 put /nms/spring/alarm/updateAlarmRemark?remark=999&activeAlarmId=ID

拓扑管理
   逻辑拓扑
        添加设备  post /nms/spring/device
        设备修改 put /nms/spring/device
        设备删除 delete /nms/spring/device/ID
        设备同步 post nms/spring/device/ID/syncAlarms
        物理拓扑链路添加 post  /nms/spring/viewData/addPath    pathType: "1
        物理拓扑链路删除 post /nms/spring/viewData/deletePathByObject

    网络拓扑
        添加设备  post /nms/spring/device
        设备修改  put /nms/spring/device
        设备删除  delete /nms/spring/device/ID
        保存拓扑 /nms/spring/device/netTopu


配置管理：
        设置
          sm2000 设置类接口，接口同一个 是否考虑添加一个字段是业务类型的
          post  /nms/spring/deviceConfig/ID/setConfigsBatch
    网元管理
      新增  post  /nms/spring/device
      修改 put   /nms/spring/device
      删除 delete /nms/spring/device/id 


告警管理    
    告警处理
        设置告警等级：
        post /nms/spring/deviceConfig/ID/setConfigsBatch params [{"value":"3","node":"alarmLevel","index":"1"}]

    告警屏蔽
        新增 post /nms/spring/alarm/activeAlarmFilterConfig
        修改 put /nms/spring/alarm/activeAlarmFilterConfig
        删除 delete /nms/spring/alarm/activeAlarmFilterConfig/ID 


性能管理
    性能设置
        新增 post  /nms/spring/performances/performanceMonitorParam
        修改 post  /nms/spring/performances/performanceMonitorParam
        删除 delete /nms/spring/performances/PerformanceMonitorParam/ID

运维管理
    调整记录	spring/adjust/list	GET
        新增	spring/adjust/save	POST
        删除	spring/adjust/save	POST 需要传isDelete=1
        修改	spring/adjust/save	POST
    环境管理	spring/manager/getEnvList	GET
        修改	spring/manager/updateTemperature	GET
        删除	spring/manager/deleteTemperature	DELETE

系统管理
    用户管理
        新增  post /nms/spring/user
        修改  put /nms/spring/user
        删除  delete   /nms/spring/user/ID
        锁定、解锁  put  /nms/spring/user 
    权限管理
        新增  post /nms/spring/role
        修改 post /nms/spring/role
        删除 delete /nms/spring/role/ID
    参数管理
        新增 post /nms/spring/systemManage
        删除 delete /nms/spring/alarm/activeAlarmFilterConfig/ID
        修改 post /nms/spring/systemManage
    管网检测
        手动备份/归档
          新增 spring/databaseBackup/archive	PUT
        备份归档策略
          新增  spring/databaseBackup/updateConfigParam	POST 归档:subType=0 策略:subType=1
          删除  暂无
          修改  暂无
        远程维护
            设备升级 spring/deviceConfig/ID/setConfigsBatch	POST
            网管升级 暂无

帮助

   知识库			spring/keepalived/getAllKnowLedge	GET
        新增		spring/keepalived/copyAlarmDataToKnowLedge	POST
        删除		spring/keepalived/deleteLedge	GET
        修改		spring/keepalived/updateLedge	POST
    站点详情		spring/keepalived/getsite	GET
        新增		spring/keepalived/addsite	POST
        删除		spring/keepalived/deleteSite	POST
        修改		spring/keepalived/updateSite	POST
    设备详情		spring/device/forManager	GET
        修改		updateDescriptionById	PUT


  
















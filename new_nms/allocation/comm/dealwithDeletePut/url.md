# delete 
删设备 /nms/spring/device/ + deviceId+/+id
删除温度 /nms/spring/manager/deleteTemperature?deviceId=
删除归档策略 /nms/spring/systemManage/backConfigParam/ + id
删除备份日志 /nms/spring/databaseBackup/deleteBackup/ + id
删除用户 /nms/spring/user/ + data
删除权限 /nms/spring/role/ + deleteRole.id,
删除性能监控 /nms/spring/performances/PerformanceMonitorParam/+device.id
删除告警屏蔽 /nms/spring/alarm/activeAlarmFilterConfig/"+alarmId
删除系统配置 /nms/spring/systemManage/+configId


# put 
# 
设备信息更新 /nms/spring/device  /nms/spring/device/update post
区域详情更新 /nms/spring/area/updateAreaDesc
设备补充说明更新 /nms/spring/device/updateDescriptionById
告警记录状态更新 /nms/spring/alarm/updateAlarmState?state=2&activeAlarmId=' + id+"&confirmOperator="+name+"&pageObject=首页
告警记录备注更新 /nms/spring/alarm/updateAlarmRemark?remark=' + remark + '&activeAlarmId=' + id+"&pageObject=首页
更新链路 /nms/spring/viewData/updatePath
# 
用户信息更新 /nms/spring/user   /nms/spring/user/update post
还原 /nms/spring/databaseBackup/restore
更新菜单配置 /nms/spring/menu/updateRoleMenu
归档 /nms/spring/databaseBackup/archive
备份 /nms/spring/databaseBackup/backup
告警屏蔽更新 /nms/spring/alarm/activeAlarmFilterConfig
# 
权限更新 /nms/spring/role    /nms/spring/role/update
虚拟内存更新 /nms/spring/systemManage/updateVM
链路状态更新 /nms/spring/viewData/updatePathStatus/+linkId$$
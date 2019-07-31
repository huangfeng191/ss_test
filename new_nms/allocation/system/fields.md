<!-- loggers -->



secuLog

设备 deviceIp c DeviceInfos
用户 secuLogUser 
描述  description
开始时间  secuLogTimeBgn
结束时间 secuLogTimeEnd



操作时间 times    //timestamp
描述 description


cmdLog

设备  deviceIp c DeviceInfos
用户 cmdLogUser 
描述  cmdLogDesc 
开始时间  cmdLogTimeBgn d
结束时间 cmdLogTimeEnd d

eventLog

设备 deviceIp c DeviceInfos
用户 activeEventModule
描述 activeEventDesc 
开始时间 activeEventTimeBgn d 
结束时间  activeEventTimeEnd d




secuLog_pagination
cmdLog_pagination
eventLog_pagination













--- role setting

 <!-- roleType: '0' 用户级别    1 设备权限 -->

角色名称 roleName
描述 roleDesc
设备分配 deviceList  //[{id}]



"roleDesc": "6",
"isDelete": 0,
"roleName": "6",
"roleType": 1,
"timestamp": 1555474881000,
"deviceList":[{}]

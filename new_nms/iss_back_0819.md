websocket :
    删除设备时 不会消除告警




三个权限的差异是什么    




超时后： 此客户端已登录



用户管理 ，
权限管理









 性能设置 查询
    按权限查询
 /nms/spring/performances/pMP/page?token=AE95B6BE4D78AE2682835377C4447738&page=1&pageSize=10&deviceId=&performanceType=&port=



性能 freq 查询: 未返回数据
 /nms/spring/performances/getForChart?token=BF419C585939A1E9CB77DE0994DEF639&stratTime=2019-08-26&endTime=2019-08-26&type=freq&port=GNSS-1&limit=11&deviceId=5b1bb34c-7a10-46b3-a73d-85e0de505217 


 首页 链路编辑需求 


链路统计 接口 数据有误



告警管理 id 



<!-- 查询单个设备报错 -->
nms/spring/device/page?token=CFC8B5DCC47A807C9056CDB8F686BD26&page=&pageSize=20&name=&ip=192.168.41.33&deviceStatus=&areaId=&user=admin&deviceType=&NEType=&Vendor=




物理拓扑：
网元组修改接口
链路修改接口


中文搜索接口
链路状态


中文搜索 乱码





网元管理 修改 网元 接口报错


数据同步接口 ： 未提供


配置信息统计：
    板卡信息统计

用户管理：
修改登录账号信息 , 自动退出， 且无法再次登录,换账号也不行


管理级账号 无法看到其他人员权限
/nms/spring/role/page?user=sgnms&page=1&pageSize=20





只有监视级 能看到设备， 
所有设备权限无法看到设备信息
/nms/spring/device/parents?type=all&token=E86745F53B1B5E73B91AAF4BCB2BBC67

<!-- 修改角色 -->

put 

curl 'http://localhost:60/nms/spring/role?token=3D63062A6E3C7E2E2F87D6BC52EC6620' -X PUT -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: http://localhost:60' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' -H 'Content-Type: application/json; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: http://localhost:60/nms/src/page/main.html' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: JSESSIONID=3D63062A6E3C7E2E2F87D6BC52EC6620' -H 'Connection: keep-alive' --data-binary '{"roleName":"fengfeng","roleDesc":"fengfeng8","deviceList":[{"id":"7dcf041c-abc8-4ccf-baa2-252a650de57c"},{"id":"00390902-3881-4618-8b2a-5c4422a5273d"},{"id":"5b1bb34c-7a10-46b3-a73d-85e0de505217"},{"id":"a4c86d01-3ed5-4315-a5ed-5b2a07b52bbf"},{"id":"9ca263a8-a4af-49fd-98e1-a91812204148"}],"id":"368c7fb3-a1dc-45a1-965d-4978a4ec2e46","roleType":1}' --compressed



角色名已经存在，不能重复



菜单管理：
    接口： 可以支持菜单





与权限有关接口问题:

1 /nms/spring/device/parents 登录权限为所有权限时,无法正确返回设备信息,导致无法分配权限
2 /nms/spring/device/page   登录权限为所有权限时: 同一设备返回两条
3 /nms/spring/device/page   在线设备 扩展框显示不对，应为2号扩展框，实际显示3号扩展框
4 /nms/spring/device/page   ip=192.168.3.13  根据ip 查询 报错500
5 /nms/spring/device/forManager  应显示有权限的设备
6 系统设置,用户管理：修改信息自动退出，且无法再次登录:该浏览器已登录
7 权限管理：修改权限，提示 角色名已经存在，不能重复
8 权限管理：拥有管理权限的人员无法看到除自己拥有权限的权限





首页： 网元组 、 链路 修改接口， 
      接收机功能 
      拓扑信息:逻辑及统计确定



配置管理：
    接收机 配置

    EMS 配置
    配置管理：板卡统计

告警管理：
    告警处理   (处理前、处理后)

日志 ： 
    网管、安全、系统日志： 导入打印导出
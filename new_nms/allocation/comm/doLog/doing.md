
    操作页面【性能管理-性能设置 】执行了 [查询操作,查询条件为]

    

操作页面 【首页】 执行了【点击首页】




// secondTag 是否要取下一级的 事件 
getTabInfo_s({domId:'security',secondTag=""})



1. getTabInfo_s({domId:'security',secondTag=""})
2. getJqSelected("#security .item") 查看对象



用户管理 system-security-user getUserInfo()
getQueryArrays({domStr:"#security .item:eq(0)"})

用户名 namess
级别 userLevelInfo ?s
区域 area ?s
单位 companines ?s
设备 device ?s
登陆状态 state ?s


权限管理 system-security-role getRoleInfo()
getQueryArrays({domStr:"#security .item:eq(1)"})

角色名称  qRoleName
设备  qRoleDesc



用户统计 system-security-statistics userCount()

系统参数 system-security-parameter getBaseParams()

目录管理 system-security-menu getMenuInfo()
getQueryArrays({domStr:"#security .item:eq(4)"})
用户级别  qRoleNameReal

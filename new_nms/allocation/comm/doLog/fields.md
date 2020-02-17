

# configure 


# 网元管理  ?select?
网元名称 device 
厂商 vendor ?s 
设备类型 deviceType ?s 


# warning

# 当前告警   ?select?
厂商 changshang ?s
网元名称 device ?s
区域  area ?s
告警源 source
告警等级 level?s
状态 state ?s
告警原因 reason
告警编号 code
告警开始时间 bgtime
告警结束时间 endtime


data.push({"name":"厂商","value":$('#changshang').find("option:selected").text()||""});
data.push({"name":"网元名称","value":$('#device').find("option:selected").text()||""});
data.push({"name":"区域","value":$('#area').find("option:selected").text()||""});
data.push({"name":"告警源","value":$('#source').val()||""});
data.push({"name":"告警等级","value":$('#level').find("option:selected").text()||""});
data.push({"name":"状态","value":$('#state').find("option:selected").text()||""});
data.push({"name":"告警原因","value":$('#reason').val()||""});
data.push({"name":"告警编号","value":$('#code').val()||""});
data.push({"name":"告警开始时间","value":$('#bgtime').val()||""});
data.push({"name":"告警结束时间","value":$('#endtime').val()||""});

# 历史告警   ?select?
厂商  changshangH ?s
网元名称 deviceH ?s
区域  areaH ?s
告警源 sourceH
告警等级 levelH ?s
告警原因 reasonH
告警确认人 operatorH
状态  stateH1 ?s
告警编号 codeH1
告警开始时间 bgtimeH
告警结束时间 endtimeH
告警清除开始时间 bgCtimeH
告警清除结束时间 endCtimeH
告警确认开始时间 bgOtimeH
告警确认结束时间 endOtimeH


# getQueryArrays({"dom":"handle","fields": ["厂商", "设备类型", "区域", "告警等级"]})  
# 告警处理   ?select?
厂商 vendor ?s
设备类型 deviceDeal ?s
区域 areaHandle ?s
告警等级 activeAlarmLevel ?s



# getQueryArrays({"dom":"shield","fields": ["设备类型","告警等级", "是否启用"]})
# 告警屏蔽   ?select?
设备类型 shieldQdeviceType ?s
告警等级 shield_level ?s
是否启用 shield_enable ?s


# performance

# getQueryArrays({"dom":"current","fields": ["设备","类型","端口","模板","开始时间","结束时间"]})
# 当前   ?select?tp 
设备 deviceId ?s?q
类型 do_performanceFrameM ?s
端口 port ?s?q
模板 modelType ?s?q

# getQueryArrays({"dom":"current","fields": ["设备","类型","端口","模板","开始时间","结束时间"]})
# 历史   ?select?tp
设备 deviceId ?s?q
类型 do_performanceFrameM ?s
端口 port ?s?q
模板 modelType ?s?q
开始时间 startTime
结束时间 endTime

# getQueryArrays({"dom":"set","fields": ["设备","类型","端口"]})
# 设置   ?select?tp
设备 deviceId ?s?q
类型 just_performanceFrameM ?s
端口 port ?s?q

# getQueryArrays({"dom":"count","fields": ["设备"]})
# 性能统计   ?select?tp
设备 dirver_name



"设备","类型","端口",模板","开始时间","结束时间"



# getQueryArrays({"dom":"knowledge","fields": ["设备类型","处理方法","原因"]})
# help   ?select?tp
设备类型 seach_deviceType ?s
处理方法 seach_method
原因 seach_reason

# getQueryArrays({"dom":"details","fields": ["站点名称"]})
# help   ?select?tp
站点名称 site_name

# getQueryArrays({"dom":"device","fields": ["网元名称"]})
# help   ?select?tp
网元名称 device_name ?s



# 调整记录 getQueryArrays({"dom":"record"})
# operation   ?select?tp
内容 search_message
名称 search_name ?s
原因 search_reason


# 环境管理 getQueryArrays({"dom":"manage"})
# operation   ?select?tp
设备类型 deviceType ?s
厂商 vendor ?s
时钟类型 neType ?s





# 系统管理 

# 用户管理 getQueryArrays({"dom":"security"})
# system   ?select?tp





# 用户管理 system-security-user getUserInfo()
# getQueryArrays({domStr:"#security .item:eq(0)"})

# operation   ?select?tp
用户名 namess
级别 userLevelInfo ?s
// 区域 area ?s
单位 companines ?s
// 设备 device ?s
登陆状态 state ?s


# 权限管理 system-security-role getRoleInfo()
# getQueryArrays({domStr:"#security .item:eq(1)"})

角色名称  qRoleName
设备  qRoleDesc



# 用户统计 system-security-statistics userCount()

# 系统参数 system-security-parameter getBaseParams()

# 目录管理 system-security-menu getMenuInfo()
# getQueryArrays({domStr:"#security .item:eq(4)"})

用户级别  qRoleNameReal






# operation 



# 数据统计   ?select?
性能统计  getQueryArrays({domStr:".search-row:eq(3)"})
设备 dirver_name

# 年度报表   ?select?
getQueryArrays({domStr:".search-row:eq(10)"})
网元名称 report_device ?s
年度 report_year

# 综合分析   ?select?
设备性能报表  getQueryArrays({domStr:"#device-performance-fix"})
设备 devicePerformanceId ?s
开始时间 performancebgtime ?d




# help

# 设备详情   ?select?
网元名称 device_name ?s
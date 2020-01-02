

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


# getQueryFields({"dom":"handle","fields": ["厂商", "设备类型", "区域", "告警等级"]})  
# 告警处理   ?select?
厂商 vendor ?s
设备类型 deviceDeal ?s
区域 areaHandle ?s
告警等级 activeAlarmLevel ?s



# getQueryFields({"dom":"shield","fields": ["设备类型","告警等级", "是否启用"]})
# 告警屏蔽   ?select?
设备类型 shieldQdeviceType ?s
告警等级 shield_level ?s
是否启用 shield_enable ?s


# performance

# getQueryFields({"dom":"current","fields": ["设备","类型","端口",模板","开始时间","结束时间"]})
# 当前   ?select?

# getQueryFields({"dom":"current","fields": ["设备","类型","端口",模板","开始时间","结束时间"]})
# 历史   ?select?

# getQueryFields({"dom":"set","fields": ["设备","类型","端口"]})
# 设置   ?select?




"设备","类型","端口",模板","开始时间","结束时间"


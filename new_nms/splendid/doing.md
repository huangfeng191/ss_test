# 2020-02-18  Tuesday 
# 默认开始时间结束时间 
# 告警管理 OK


    当前告警

       告警时间 bgtime ?d
               id="endtime"
    
    
    历史告警 
        告警时间 bgtimeH ?d
                id="endtimeH"

# 性能管理  OK
    历史性能 
        qfield="startTime"
        qfield="endTime"


# 运维管理 
    数据统计
        告警统计 
            所有告警 
                id="titme1"
                id="titme2"
        审计日志     OK

    年度报表
        运行调整 
            详情 月
            id="deviceRPT_month"

    综合分析 
        设备性能报表
        id="performancebgtime"

# 系统管理  OK

日志管理 

管网检测 
    数据库管理
        备份记录 
        id="backupLogTimeStart"
        id="backupLogTimeEnd"

# 2020-02-21  Friday 


showCenterMessage

    getDeviceDetail($("#map #detail-info"), {"message": message}, siteName, "station");



showPhysicalMapProvince
     provinceName == "省网"
     provinceName == "骨干网"
     top.SsCenter.province[provinceName]
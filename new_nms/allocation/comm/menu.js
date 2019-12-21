[
    { "name":"首页", "w":"1", "sn":"index", "role":null },
    { "name":"拓扑管理", "w":"2", "sn":"topology", "role":null },
    { "name":"配置管理", "w":"3", "sn":"configure", "role":null },
    { "name":"告警管理", "w":"4", "sn":"warning", "role":null },
    { "name":"性能管理", "w":"5", "sn":"performance", "role":null },
    { "name":"运维管理", "w":"6", "sn":"operation", "role":null },
    { "name":"系统管理", "w":"7", "sn":"system", "role":null },
    { "name":"帮助", "w":"8", "sn":"help", "role":null },

];



// 拓扑管理
[
    { "name":"网元配置", "w":"1", "sn":"netElementConfig", "role":null ,"parentSn":"configure"},
    { "name":"网元管理", "w":"2", "sn":"netElementManage", "role":null ,"parentSn":"configure"},
    { "name":"EMS配置", "w":"3", "sn":"EMSConfig", "role":null ,"parentSn":"configure"},
    { "name":"配置信息统计", "w":"4", "sn":"configInfoStat", "role":null ,"parentSn":"configure"},
]
    

[
    { "name":"物理拓扑", "w":"1", "sn":"physicsTopology", "role":null ,"parentSn":"topology"},
    { "name":"逻辑拓扑", "w":"2", "sn":"logicTopology", "role":null ,"parentSn":"topology"},
    { "name":"网管拓扑", "w":"3", "sn":"netTopology", "role":null ,"parentSn":"topology"},
    { "name":"拓扑信息统计", "w":"4", "sn":"qualityStat", "role":null ,"parentSn":"topology"},

]

// 配置管理：
[
{ "name":"网元配置", "w":"1", "sn":"netElementConfig", "role":null ,"parentSn":"configure"},
{ "name":"网元管理", "w":"2", "sn":"netElementManage", "role":null ,"parentSn":"configure"},
{ "name":"EMS配置", "w":"3", "sn":"EMSConfig", "role":null ,"parentSn":"configure"},
{ "name":"配置信息统计", "w":"4", "sn":"configInfoStat", "role":null ,"parentSn":"configure"},
]



// 告警管理
[
    { "name":"当前告警", "w":"1", "sn":"currentAlarm", "role":null  ,"parentSn":"warning"},
    { "name":"历史告警", "w":"2", "sn":"historyAlarm", "role":null  ,"parentSn":"warning"},
    { "name":"告警处理", "w":"3", "sn":"alarmHanding", "role":null  ,"parentSn":"warning"},
    { "name":"告警屏蔽", "w":"4", "sn":"alarmMask", "role":null  ,"parentSn":"warning"},
    { "name":"告警统计", "w":"5", "sn":"alarmStat", "role":null  ,"parentSn":"warning"},
]

    
// 性能管理
[
    { "name":"当前性能", "w":"1", "sn":"currentQuality", "role":null ,"parentSn":"performance"},
    { "name":"历史性能", "w":"2", "sn":"historyQuality", "role":null ,"parentSn":"performance"},
    { "name":"性能设置", "w":"3", "sn":"qualitySetting", "role":null ,"parentSn":"performance"},
    { "name":"性能统计", "w":"4", "sn":"qualityStat", "role":null ,"parentSn":"performance"},
]


    // 运维管理

[
    { "name":"数据统计", "w":"1", "sn":"dataStatistics", "role":null ,"parentSn":"operation"},
    { "name":"综合分析", "w":"2", "sn":"aggregateAnalysis", "role":null ,"parentSn":"operation"},
    { "name":"年度报表", "w":"3", "sn":"yearReport", "role":null ,"parentSn":"operation"},
    { "name":"调整记录", "w":"4", "sn":"adjustRecords", "role":null ,"parentSn":"operation"},
    { "name":"环境管理", "w":"5", "sn":"environmentManage", "role":null ,"parentSn":"operation"},
]
        // 运维管理- 数据统计
[
    { "name":"拓扑信息统计", "w":"1", "sn":"dataStatisticsTopology", "role":null ,"parentSn":"dataStatistics"},
    { "name":"配置信息统计", "w":"2", "sn":"dataStatisticsConfig", "role":null ,"parentSn":"dataStatistics"},
    { "name":"告警统计", "w":"3", "sn":"dataStatisticsWarning", "role":null ,"parentSn":"dataStatistics"},
    { "name":"性能统计", "w":"4", "sn":"dataStatisticsPerformance", "role":null ,"parentSn":"dataStatistics"},
    { "name":"用户统计", "w":"5", "sn":"dataStatisticsUser", "role":null ,"parentSn":"dataStatistics"},
    { "name":"日志统计", "w":"6", "sn":"dataStatisticsLog", "role":null ,"parentSn":"dataStatistics"},
]
// 运维管理-年度报表
[
    { "name":"运维调整报表", "w":"1", "sn":"yearReportMaintain", "role":null ,"parentSn":"yearReport"},
    { "name":"用户活跃度统计", "w":"2", "sn":"yearReportActivity", "role":null ,"parentSn":"yearReport"},
    { "name":"设备告警统计", "w":"3", "sn":"yearReportDeviceWarming", "role":null ,"parentSn":"yearReport"},

]

// 运维管理-综合分析
[
    { "name":"设备故障型号分析", "w":"1", "sn":"aggregateAnalysisType", "role":null ,"parentSn":"aggregateAnalysis"},
    { "name":"设备故障厂商分析", "w":"2", "sn":"aggregateAnalysisVendor", "role":null ,"parentSn":"aggregateAnalysis"},
    { "name":"设备性能报表", "w":"3", "sn":"aggregateAnalysisPerformance", "role":null ,"parentSn":"aggregateAnalysis"},

]
 

// 系统管理

    
[
    { "name":"安全管理", "w":"1", "sn":"securityManage", "role":null ,"parentSn":"system" },
    { "name":"日志管理", "w":"2", "sn":"logManage", "role":null ,"parentSn":"system" },
    { "name":"接口管理", "w":"3", "sn":"interfaceManage", "role":null ,"parentSn":"system" },
    { "name":"网管检测", "w":"4", "sn":"systemMonitor", "role":null ,"parentSn":"system" },
]
// 系统管理 - 安全管理
[
    { "name":"用户管理", "w":"1", "sn":"securityManageUser", "role":null ,"parentSn":"securityManage" },
    { "name":"权限管理", "w":"2", "sn":"securityManageRole", "role":null ,"parentSn":"securityManage" },
    { "name":"用户统计", "w":"3", "sn":"securityManageUserStat", "role":null ,"parentSn":"securityManage" },
    { "name":"系统参数", "w":"4", "sn":"securityManageParams", "role":null ,"parentSn":"securityManage" },
    { "name":"目录管理", "w":"5", "sn":"menuManagement", "role":null ,"parentSn":"securityManage" },
 ]

 // 系统管理 - 日志管理
 [
    { "name":"安全日志", "w":"1", "sn":"logManageSecure", "role":null ,"parentSn":"logManage" },
    { "name":"操作日志", "w":"2", "sn":"logManageOperate", "role":null ,"parentSn":"logManage" },
    { "name":"系统日志", "w":"3", "sn":"logManageSystem", "role":null ,"parentSn":"logManage" },
    { "name":"日志统计", "w":"4", "sn":"logManageStats", "role":null ,"parentSn":"logManage" },
 ]

 // 系统管理 -管网检测
 [
    { "name":"系统信息", "w":"1", "sn":"systemMonitorInfos", "role":null ,"parentSn":"systemMonitor" },
    { "name":"数据库管理", "w":"2", "sn":"systemMonitorDatabase", "role":null ,"parentSn":"systemMonitor" },
    { "name":"远程维护", "w":"3", "sn":"systemMonitorRemote", "role":null ,"parentSn":"systemMonitor" },
 ]


    // 帮助管理
    

[
    { "name":"知识库", "w":"1", "sn":"knowledgeLibrary", "role":null ,"parentSn":"help"},
    { "name":"站点详情", "w":"2", "sn":"stationDetail", "role":null ,"parentSn":"help"},
    { "name":"区域详情", "w":"3", "sn":"areaDetail", "role":null ,"parentSn":"help"},
    { "name":"设备详情", "w":"4", "sn":"deviceDetail", "role":null ,"parentSn":"help"},
    { "name":"操作手册", "w":"5", "sn":"operationManual", "role":null ,"parentSn":"help"},
    { "name":"在线手册", "w":"6", "sn":"onlineHelp", "role":null ,"parentSn":"help"},
]
    
    

    




function getMenu(role) {
    if(role=="manage"){

    }
}
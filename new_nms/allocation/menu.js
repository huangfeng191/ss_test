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
    
    // 系统管理

    
    [
        { "name":"安全管理", "w":"1", "sn":"securityManage", "role":null ,"parentSn":"system" },
        { "name":"日志管理", "w":"2", "sn":"logManage", "role":null ,"parentSn":"system" },
        { "name":"接口管理", "w":"3", "sn":"interfaceManage", "role":null ,"parentSn":"system" },
        { "name":"网管检测", "w":"4", "sn":"systemMonitor", "role":null ,"parentSn":"system" },
    ]

    // 帮助管理
    

    [
        { "name":"知识库", "w":"1", "sn":"knowledgeLibrary", "role":null ,"parentSn":"help"},
        { "name":"站点详情", "w":"2", "sn":"stationDetail", "role":null ,"parentSn":"help"},
        { "name":"设备详情", "w":"3", "sn":"deviceDetail", "role":null ,"parentSn":"help"},
        { "name":"操作手册", "w":"4", "sn":"operationManual", "role":null ,"parentSn":"help"},
    ]
    
    

    




function getMenu(role) {
    if(role=="manage"){

    }
}
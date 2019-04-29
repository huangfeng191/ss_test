GNSS1使能  gnss1State  c GnssState
优先级     gnss1Priority
跟踪模式   gnss1TrackMode c GnssTrackMode
天线延迟   gnss1CableDelay
质量优先级状态 gnss1PQLState c GnssState
质量优先级值 gnss1PQL
GNSS1模式 gnss1Mode c GnssMode
经度  gnss1CurrentPositionJ
纬度 gnss1CurrentPositionW
高度 gnss1CurrentPositionH




GnssState:[
    { "Name": "请选择", "Value": "" },
    { "Name": "disable", "Value": "0" },
    { "Name": "enable", "Value": "1" }
]
GnssMode:[
    { "Name": "请选择", "Value": "" },
    { "Name": "Auto", "Value": "0" },
    { "Name": "Manual", "Value": "1" }
]

GnssTrackMode:[
    { "Name": "请选择", "Value": "" },
    { "Name": "beidou", "Value": "0" },
    { "Name": "gps", "Value": "1" }
    { "Name": "priority-beidou", "Value": "2" }
    { "Name": "priority-gps", "Value": "3" }
]



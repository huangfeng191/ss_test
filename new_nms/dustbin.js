1
// /nms/spring/user/getMenu
device={
    "deviceType": "SM2000",
    "imageVersion": null,
    "owner": "",
    "area": { "id": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "isDelete": 0, "timestamp": 1556524664000, "name": "北京", "code": "0", "subArea": [] },
    "disconnectCount": 0,
    "aliasName": "192.168.1.33",
    "img": null,
    "deviceAdditionalInfo": { "id": "9d70a46f-a3a1-4c98-84bd-6ac49a6d71ec", "isDelete": 0, "timestamp": 1556613422000, "frameName": null, "frameUseLabel": null, "location": null, "owner": "ss", "aliasName": "192.168.1.33", "frameAliasLabel": null, "deviceFlag": "SM2000" },
    "isDelete": 0,
    "ip": "192.168.1.33",
    "description": null,1
    "Vendor": "ss",
    "nodeGroup": null,
    "deviceStatus": 1,
    "protocol": null,
    "shelfList": [ // 机箱列表   selfIndex 表示机箱号  status=1 说明是有效机箱  shelf: 隔板 架子
        { "id": "06e434ff-88f6-477f-bb01-f3603b393d73", "isDelete": 0, "timestamp": 1556613422000, "shelfIndex": 3, "type": "ExpShelf", "nameCn": "扩展机框3", "status": 0, "slotList": null },
        { "id": "0be4bff0-a08c-4b73-957e-13eec1e38882", "isDelete": 0, "timestamp": 1556613422000, "shelfIndex": 2, "type": "ExpShelf", "nameCn": "扩展机框2", "status": 0, "slotList": null },
        { "id": "69150688-4dc6-44b9-aa94-239cce0ed0c7", "isDelete": 0, "timestamp": 1556613422000, "shelfIndex": 0, "type": "MainShelf", "nameCn": "主机框", "status": 1, "slotList": null },
        { "id": "9f2456ca-974d-4e9a-b33b-3980b674f683", "isDelete": 0, "timestamp": 1556613422000, "shelfIndex": 4, "type": "ExpShelf", "nameCn": "扩展机框4", "status": 0, "slotList": null },
        { "id": "d8748d1b-3882-4852-a5c6-afe7a3cb66f9", "isDelete": 0, "timestamp": 1556613422000, "shelfIndex": 1, "type": "ExpShelf", "nameCn": "扩展机框1", "status": 0, "slotList": null }
    ],
    "port": 0,
    "name": "白广路SM2000_LPR",
    "location": "",
    "id": "1d295901-3745-44d5-88a6-c9e51bba5d95",
    "NEType": "LPR",
    "deviceLocation": null,
    "timestamp": 1556613422000
}

// getIoStatus

  outputShelfOne=  [
        {
            "ioType": "input",
            "ioStatusSlotID": "1",
            "ioStatusRedundancy": "--",
            "ioSignal": "4-E1",
            "ioStatusIndex": "0", // 其实就是板卡
            "ioStatusPortCount": 6,
            "ioStatusActive": "--"
        },
        {
            "ioType": "--",
            "ioStatusSlotID": "2",
            "ioStatusRedundancy": "disable",
            "ioSignal": "--",
            "ioStatusIndex": "0",
            "ioStatusPortCount": 0,
            "ioStatusActive": "--"
        }
    ]


// /nms/spring/deviceConfig/{{deviceId}}/configs/outputRedundancyTable?token={{token}}
// 设备输出冗余板卡信息
[
    {
        "outRedundancyIndex": "0", // 属于那块板
        "outputRedundancySlot": "1", // 槽位号
        "outputRedundancyState": "0" // 状态
      },
      {
        "outRedundancyIndex": "0",
        "outputRedundancySlot": "2",
        "outputRedundancyState": "0"
      }
]





/nms/spring/device

{"areaId":"117c4c9f-4e09-462b-9c6e-fbb5d8be5506","deviceType":"SM2000","ip":"192.168.99.98","name":"白广路SM2000_PRC98","neType":"PRC","vendor":"ss","phyX":"100.86","phyY":"39.25","aliasName":"","location":"","owner":"","token":"70268A44218E222A804921FD3122E905","port":0,"addType":"1"}
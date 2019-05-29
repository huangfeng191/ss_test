//  /nms/spring/viewData/addPath
a = { // 链路信息
    "path": { // 
        "aNe": "192.168.1.39",
        "zNe": "192.168.1.99",
        "pathName": "白广路SM2000_PRC1,白广路SM2000_PRC",
        "pathType": "2", // 链路
        "remark": ""
    },
    "pathLinkIdList": [{
            "aNode": "192.168.1.39", // 开始节点
            "zNode": "192.168.1.99", // 结束节点
            "aSlot": "102.53,29.14", //结束点的经度,纬度  
            "aPort": "106.07,28.11", // 开始点的经度,纬度
            "zSlot": "",
            "zPort": "",
            "linkName": "45",
            "linkStatus": "0",
            "linkType": 2
        },
        {
            "aNode": "192.168.1.39",
            "zNode": "192.168.1.99",
            "aSlot": "105.02,33.39", //结束点的经度,纬度 
            "aPort": "102.53,29.14", // 开始点的经度,纬度
            "zSlot": "",
            "zPort": "",
            "linkStatus": "0",
            "linkType": 2
        }
    ]
}

//添加网元组
 // /nms/spring/viewData/addNodeGroup
// 查询网元组 
 // /nms/spring/viewData/getAllGroup
b = {
    "nodeGroup": {
        "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506",
        "groupName": "119",
        "xCoordinate": "94.95",
        "yCoordinate": "35.19",
        "groupAddress": "119",
        "parentId": "",
        "remark": ""
    },
    "deviceIdList": ["0e575aed-32d4-4b76-b154-15f6a98a1e91",
        "1d295901-3745-44d5-88a6-c9e51bba5d95",
        "0e575aed-32d4-4b76-b154-15f6a98a1e91", "1d295901-3745-44d5-88a6-c9e51bba5d95", "20d71dbb-8079-4bcb-8ff2-ec1a44f8f077", "4b9d6785-73db-458d-b3b7-9e1da2d3c5cc",
        "59235199-4190-4dcb-a907-fb5fea870d5b", "951d1cef-08f1-4185-9b0a-e512855544bb"
    ]
}
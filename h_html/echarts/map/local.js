var pointPaths = {
    NEG: 'M27 52 A 25 25 0 1 1 27 2 A 25 25 0 1 1 27 52',
    PRC: 'M2 2 H 42 V 12 H 12 V 42 H 2 Z M 12 12 H 52 V 52 H 12 Z',
    LPR: 'M2 2 H 52 V 52 H 2 Z',
    SSUT: 'M52,25.6506 39.5,4 14.5,4 2,25.6506 14.5,47.4013 39.5,47.4013 Z',
    SSUL: 'M52,27 27,52 2,27 27,2',
    CHILD: 'M27 52 A 25 25 0 1 1 27 2 A 25 25 0 1 1 27 52'
};

var customShape = {
    "type":"group",
    "position": [
        210.01828053474424,
        199.74164226531983
    ],
    "children":[
        {
            "id": "951d1cef-08f1-4185-9b0a-e512855544bb",
            "type": "path",
         
            "scale": [
                1,
                1
            ],
            "shape": {
                "d": "M2 2 H 42 V 12 H 12 V 42 H 2 Z M 12 12 H 52 V 52 H 12 Z",
                "width": 10,
                "height": 10
            },
            "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 1,
                "fill": "yellow"
            }
        },
        {
            "type":"rect",
           "shape":{
               x:5,
               y:5,
               width:2,
               height:2
           },
           "style": {
            "stroke": "#BEBEBE",
            "strokeWidth": 1,
            "fill": "yellow"
        }
         
        }

    ]
}



var customPoints = [{
    "name": "白广路SM2000_LPR",
    "value": [
        107.19,
        35.17,
        {
            "type": "LPR",
            "id": "951d1cef-08f1-4185-9b0a-e512855544bb",

            "value": 160,
            "company": "1",
            "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506",
            "areaName": "北京",
            "show": true
        }
    ]
}]

var customPoints1 = [{
        "name": "白广路SM2000_LPR",
        "value": ["107.19", "35.17",
            { "type": "LPR", "id": "951d1cef-08f1-4185-9b0a-e512855544bb", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.5", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "cs", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路SM2000_PRC",
        "value": ["129.36", "47.46",
            { "type": "PRC", "id": "ccf837a3-f852-4c70-a1da-c4835a423d56", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.3.13", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "8889", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC9",
        "value": ["115.02", "29.80",
            { "type": "PRC", "id": "20d71dbb-8079-4bcb-8ff2-ec1a44f8f077", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.2.11", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路SM2000_PRC1",
        "value": ["106.07", "28.11",
            { "type": "PRC", "id": "4b9d6785-73db-458d-b3b7-9e1da2d3c5cc", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.39", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "内蒙古白广路_PRC",
        "value": ["112.20", "41.99",
            { "type": "PRC", "id": "c102a053-6665-47fd-b092-79e6ee5fc5e6", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.2.2.1", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "666", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC",
        "value": ["95.37", "30.32",
            { "type": "PRC", "id": "bb26e1d3-d891-4ef8-a098-1adabcde04c4", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.16.14.1", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "12ab91a8-e3c3-45fe-be31-bc07a638f6a5", "areaName": "天津", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC88",
        "value": ["115.52", "32.90",
            { "type": "PRC", "id": "4c2ddbb2-f395-471e-bace-349d3ab4c121", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.88.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "888", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC5",
        "value": ["113.06", "33.57",
            { "type": "LPR", "id": "a3889044-fe06-4db7-b784-57e5a50a6d30", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.61.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "99", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC77",
        "value": ["117.19", "36.67",
            { "type": "PRC", "id": "9507a011-01ae-47aa-9fdd-5567d13e059e", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.101.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "晋北换SM2000_SSUT",
        "value": ["108.33", "24.05",
            { "type": "SSUT", "id": "4c3f9cf6-7378-4ef9-ba93-f241c1787a84", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.65", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "23965d07-4b27-44dc-8a02-ce7aebc62619", "areaName": "浙江", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC",
        "value": ["94.36", "38.51",
            { "type": "LPR", "id": "db0ec7d6-69d0-44a3-9a09-746709b63287", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.2.40", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "24334ac6-5489-4064-b5d5-a0a0149c0ff6", "areaName": "福建", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC7",
        "value": ["110.99", "31.50",
            { "type": "PRC", "id": "90dece6c-14ab-464f-a44a-af49192d3886", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.81.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路SM2000_PRC",
        "value": ["105.02", "33.39",
            { "type": "PRC", "id": "0e575aed-32d4-4b76-b154-15f6a98a1e91", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.99", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "12", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路SM2000_LPR",
        "value": ["87.77", "34.67",
            { "type": "LPR", "id": "1d295901-3745-44d5-88a6-c9e51bba5d95", "group": "SM2000", "parent": "abcd-200", "status": "red", "value": 160, "company": "1", "ip": "192.168.1.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 27, "aliasName": "192.168.1.33", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC6",
        "value": ["118.07", "31.28",
            { "type": "PRC", "id": "87e8bdc1-2514-420d-bf76-86046e2b2e9c", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.71.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "88899", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路SM2000_PRC98",
        "value": ["100.86", "39.25",
            { "type": "LPR", "id": "59235199-4190-4dcb-a907-fb5fea870d5b", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.99.98", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "121", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "白广路GNSS97_PRC",
        "value": ["129.36", "47.46",
            { "type": "PRC", "id": "25f3b937-bc18-466f-81fd-42486ec47a2b", "group": "GNSS97", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.11.1.1", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    {
        "name": "北京白广路_PRC91",
        "value": ["111.78", "37.63",
            { "type": "PRC", "id": "308e4b7d-2392-4556-9716-94af43c6c556", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.112.77", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1, "aliasName": "", "location": "", "owner": "", "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506", "areaName": "北京", "show": true }
        ]
    },
    { "name": "119", "value": [94.95, 35.19, { "id": "782444eb-1c9f-458e-b4f5-b55f6eb8bf49", "type": "NEG", "status": "greent", "nodeOrDevice": "2", "groupAddress": "119", "remark": "", "show": true }] }
];




var customShape1 = {
    "id": "951d1cef-08f1-4185-9b0a-e512855544bb",
    "type": "path",
    "position": [
        210.01828053474424,
        199.74164226531983
    ],
    "scale": [
        1,
        1
    ],
    "shape": {
        "d": "M2 2 H 42 V 12 H 12 V 42 H 2 Z M 12 12 H 52 V 52 H 12 Z",
        "width": 10,
        "height": 10
    },
    "style": {
        "stroke": "#BEBEBE",
        "strokeWidth": 1,
        "fill": "yellow"
    }
}
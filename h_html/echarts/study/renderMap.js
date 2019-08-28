var strolling=0;

var remarks = {
    "sampleMap": {
        "desc": "简单的地图",
        // "default": true
    },
    "sampleMapBorder": {
        "desc": "边框",
        // "default":true
    },
    "linesMap": {
        "desc": "基础",
        // "default": true
    },
    "linesMap2": {
        "desc": "含线特效的配置",
        // "default": true
    },
    "linesMapMulti": {
        "desc": "含多个线段",
        // "default": true
    },
    "pointShow": {
        "desc": "点的显示",
        // "default": true
    },
    "pointShowHide": {
        "desc": "分组显示",
        // "default": true
    },

    "graphicDrow": {
        "desc": "点拖动",
        // "default": true
    },


    "graphicDrowCustomPoint": {
        "desc": "点拖动点用custom 标识",
        // "default": true
    },



}



var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
//↓↓↓↓↓↓↓***************  开始处理
var optionSampleMap = {

    tooltip: {
        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },

    geo: {
        "scaleLimit": { // 缩放
            "min": 1,
            "max": 3
        },
        "roam": true, // 是否开启鼠标缩放及平移
        "zoom": 1,
        "zlevel":1,
        map: 'china',
        label: {
            // show:true,  // 是否显示区域
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                "areaColor": '#323c48',
                "borderColor": 'yellow',
                "borderWidth": 1,
                "borderType": "solid"
            },
            emphasis: {
                areaColor: 'yellow', // 高亮区域
                itemStyle: {
                    opacity: 1
                }

            }
        }
    },
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([
            { name: "海门", value: 9 },

        ]),
        zlevel:3,
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    }]
}

//↓↓↓↓↓↓↓***************  开始处理
var optionSampleMapBorder = {

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                "areaColor": 'rgba(210, 209, 192, 1)',
                "borderColor": '#FFFFFF',
                "borderWidth": 1,
                "borderType": "solid"
            },
            emphasis: {
                areaColor: 'yellow' // 高亮区域
            }
        },
        // 对地图中特定的区域配置样式
        regions: [{
            name: '中华人民共和国',
            itemStyle: {
                "borderColor": "#AFAC9D",
                "borderWidth": 5,
                "borderType": "solid",
                "shadowColor": "#787762",
                "shadowOffsetX": -5,
                "shadowOffsetY": -5,
                "opacity": 1
            }
        }]



    },
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([
            { name: "海门", value: 9 },

        ]), // name: "海门" ,value: [121.15, 31.89, 9]
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    }]
}

//↓↓↓↓↓↓↓***************  开始处理

var linesMapSelf_others = {

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord] // lines 需要指定经纬度坐标 
                });
            }
        }
        return res;
    },
    BJData: [
        [{ name: '北京' }, { name: '上海', value: 95 }],
        [{ name: '北京' }, { name: '广州', value: 90 }],
        [{ name: '北京' }, { name: '大连', value: 80 }],
        [{ name: '北京' }, { name: '南宁', value: 70 }],
        [{ name: '北京' }, { name: '南昌', value: 60 }],
        [{ name: '北京' }, { name: '拉萨', value: 50 }],
        [{ name: '北京' }, { name: '长春', value: 40 }],
        [{ name: '北京' }, { name: '包头', value: 30 }],
        [{ name: '北京' }, { name: '重庆', value: 20 }],
        [{ name: '北京' }, { name: '常州', value: 10 }]
    ]
};


var linesMapSelf = {

    series: [{
            name: "北京" + ' Top10',
            type: 'lines',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            symbol: ['none', 'none'], // 起止点图标
            symbolSize: 10,
            // effect: {  动画效果
            //     show: true,
            //     period: 6,
            //     trailLength: 0,
            //     symbol: linesMapSelf_others.planePath,
            //     symbolSize: 15
            // },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: linesMapSelf_others.convertData(linesMapSelf_others.BJData)
        },
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: linesMapSelf_others.BJData.map(function(dataItem) {
                return {
                    name: dataItem[1].name, //  name: "海门" ,value: [121.15, 31.89, 9]
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            }),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: 'yellow',
                    borderWidth: 5
                }
            }
        }
    ]




}

var optionLinesMap = $.extend({}, optionSampleMap, linesMapSelf)

//↓↓↓↓↓↓↓***************  开始处理

var linesMap2Self = {

    series: [{
            name: "北京" + ' Top10',
            type: 'lines',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            symbol: ['none', 'none'], // 起止点图标
            symbolSize: 10,
            effect: { //  线特效的配置
                show: true,
                period: 6,
                trailLength: 0,
                symbol: linesMapSelf_others.planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: linesMapSelf_others.convertData(linesMapSelf_others.BJData)
        },
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 4,
            data: linesMapSelf_others.BJData.map(function(dataItem) {
                return {
                    name: dataItem[1].name, //  name: "海门" ,value: [121.15, 31.89, 9]
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            }),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: 'yellow',
                    borderWidth: 5
                }
            }
        }
    ]




}



var optionLinesMap2 = $.extend({}, optionSampleMap, linesMap2Self)






//↓↓↓↓↓↓↓***************  开始处理


var LinesMapMultiSelf_others = {

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            var threeCoord = [toCoord[0] + 3, toCoord[1] + 3]
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, threeCoord, toCoord], // lines 需要指定经纬度坐标 
                    lineStyle: {
                        normal: {
                            color: 'blue',
                            width: 1,
                            opacity: 0.6,
                            // curveness: 0.2
                        }
                    },
                });
            }
        }
        return res;
    },
    BJData: [
        [{ name: '北京' }, { name: '上海', value: 95 }],
        [{ name: '北京' }, { name: '广州', value: 90 }],
        [{ name: '北京' }, { name: '大连', value: 80 }],
        [{ name: '北京' }, { name: '南宁', value: 70 }],
        [{ name: '北京' }, { name: '南昌', value: 60 }],
        [{ name: '北京' }, { name: '拉萨', value: 50 }],
        [{ name: '北京' }, { name: '长春', value: 40 }],
        [{ name: '北京' }, { name: '包头', value: 30 }],
        [{ name: '北京' }, { name: '重庆', value: 20 }],
        [{ name: '北京' }, { name: '常州', value: 10 }]
    ]
};



var LinesMapMultiSelf = {
    "tooltip": {
        "trigger": "item",
        formatter: function(params) {

            return params.data.fromName + ' : ' + params.data.toName;
        }
    },
    series: [{
            name: "北京" + ' Top10',
            type: 'lines',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            // polyline:true,
            symbol: 'arrow', // 起止点图标
            symbolSize: 10,
            effect: { //  线特效的配置
                // show: true,
                // period: 6,
                // trailLength: 0,
                // symbol: LinesMapMultiSelf_others.planePath,
                // symbolSize: 15
            },
            lineStyle: {
                // normal: {
                //     color: '#a6c84c',
                //     width: 1,
                //     opacity: 0.6,
                //     // curveness: 0.2
                // }
            },
            // data: LinesMapMultiSelf_others.convertData(LinesMapMultiSelf_others.BJData)
            data: [{
                    "fromName": "北京",
                    "toName": "上海",
                    "coords": [
                        [
                            116.46,
                            39.92
                        ],
                        [
                            124.4648,
                            34.289100000000005
                        ],
                        [
                            121.4648,
                            31.2891
                        ]
                    ],
                    "lineStyle": {
                        "normal": {
                            "color": "blue",
                            "width": 1,
                            "opacity": 0.6
                        }
                    }
                },

                {
                    "fromName": "北京",
                    "toName": "南昌",
                    "coords": [
                        [
                            116.46,
                            39.92
                        ],
                        [
                            119.0046,
                            31.6633
                        ],
                        [
                            116.0046,
                            28.6633
                        ]
                    ],
                    "lineStyle": {
                        "normal": {
                            "color": "yellow",
                            "width": 3,
                            "opacity": 0.6
                        }
                    }
                }
            ]
        },
        // {
        //     name: 'pm2.5',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     zlevel: 4,
        //     data: LinesMapMultiSelf_others.BJData.map(function(dataItem) {
        //         return {
        //             name: dataItem[1].name, //  name: "海门" ,value: [121.15, 31.89, 9]
        //             value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        //         };
        //     }),
        //     symbolSize: 12,
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //     itemStyle: {
        //         emphasis: {
        //             borderColor: 'yellow',
        //             borderWidth: 5
        //         }
        //     }
        // }
    ]




}



var optionLinesMapMulti = $.extend({}, optionSampleMap, LinesMapMultiSelf)




//↓↓↓↓↓↓↓***************  开始处理


var PointShowSelf_others = {

    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord] // lines 需要指定经纬度坐标 
                });
            }
        }
        return res;
    },
    BJData: [
        { name: '上海', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "1", "deviceIds": ["1"] } },
        { name: '广州', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "2", "deviceIds": ["2"] } },
        { name: '大连', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "3", "deviceIds": ["3"] } },
        { name: '南宁', value: { type: "RPC", "areaId": "2", "state": "import", "id": "4", "deviceIds": ["4"] } },
        { name: '南昌', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "5", "deviceIds": ["5"] } },
        { name: '拉萨', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "6", "deviceIds": ["6"] } },
        { name: '长春', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "7", "deviceIds": ["7"] } },
        { name: '包头', value: { type: "RPC", "areaId": "2", "state": "alarm", "id": "8", "deviceIds": ["8"] } },
        { name: '重庆', value: { type: "NEG", "areaId": "1", "state": "open", "id": "9", "deviceIds": ["1", "2", "3"] } },
    ]
};



var PointShowSelf = {
    _click: function(params) {
        
    },
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        data: PointShowSelf_others.BJData.map(function(dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name].concat([dataItem.value]),

                "itemStyle": { // series 的 style
                    "color": state[dataItem.value.state || "normal"]
                }
            };
        }),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: 'yellow',
                borderWidth: 5
            }
        }
    }]

}

var optionPointShow = $.extend({}, optionSampleMap, PointShowSelf)




//↓↓↓↓↓↓↓***************  开始处理

var PointShowHideSelf_others = {
    getData(deviceIds) {
        var pending = []
        if (deviceIds) {
            pending = PointShowHideSelf_others.BJData.filter(function(v) {
                if ($.inArray(v.value.id, deviceIds) >= 0) {
                    return true;
                }
            })
        } else {
            pending = PointShowHideSelf_others.BJData
        }

        pending = pending.map(function(dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name].concat([dataItem.value]),

                "itemStyle": { // series 的 style
                    "color": state[dataItem.value.state || "normal"]
                }
            };
        })

        return pending;
    },

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord] // lines 需要指定经纬度坐标 
                });
            }
        }
        return res;
    },
    BJData: [
        { name: '上海', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "1", "deviceIds": ["1"] } },
        { name: '广州', value: { type: "RPC", "areaId": "1", "state": "lucky", "id": "2", "deviceIds": ["2"] } },
        { name: '大连', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "3", "deviceIds": ["3"] } },
        { name: '南宁', value: { type: "RPC", "areaId": "2", "state": "import", "id": "4", "deviceIds": ["4"] } },
        { name: '南昌', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "5", "deviceIds": ["5"] } },
        { name: '拉萨', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "6", "deviceIds": ["6"] } },
        { name: '长春', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "7", "deviceIds": ["7"] } },
        { name: '包头', value: { type: "RPC", "areaId": "2", "state": "alarm", "id": "8", "deviceIds": ["8"] } },
        { name: '重庆', value: { type: "NEG", "areaId": "1", "state": "opened", "id": "9", "deviceIds": ["1", "2", "3"] } },
    ],
    getPoints: function(params) {
        var data = this.BJData;
        var points = []
        // todo


    }
};



var PointShowHideSelf = {
    _click: function(params, building) { //
        var self = this;
        


        if (params.seriesType === "scatter") {
            if (params.value[2].type == "NEG") {
                //  hide or show 
                var points = self.series.filter(function(v) {
                    return v.type == "scatter"
                })[0].data;

                var currentPoint = points.filter(function(v) {
                    return v.value[2].id == params.value[2].id;
                })

                currentPoint = currentPoint[0].value[2];
                var relativeDeviceId = currentPoint.deviceIds;
                if (currentPoint && relativeDeviceId) {

                    points = points.filter(function(v) {
                        if ($.inArray(v.value[2].id, relativeDeviceId) >= 0) {
                            return false;
                        } else {
                            return true;
                        }
                    })

                    if (currentPoint.state == "closed") { // to open 
                        currentPoint.state = "opened";

                        relativeDevice = PointShowHideSelf_others.getData(relativeDeviceId);
                        points = points.concat(relativeDevice);

                    } else {
                        currentPoint.state = "closed";
                    }
                }

                building.target.setOption({
                    "series": {
                        name: 'pm2.5',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        zlevel: 4,
                        data: points,
                        symbolSize: 12,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: 'yellow',
                                borderWidth: 5
                            }
                        }
                    }
                })

            }
        }
    },

    tooltip: {
        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: function(params) {
            return params.name + ' : ' + params.value[2].state + " " + params.value[2].type;
        }
    },

    series: [{
        name: 'pm',
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        data: PointShowHideSelf_others.getData(),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: 'yellow',
                borderWidth: 5
            }
        }
    }]

}

var optionPointShowHide = $.extend({}, optionSampleMap, PointShowHideSelf)


//↓↓↓↓↓↓↓***************  开始处理




var graphicDrow_others = {

    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord] // lines 需要指定经纬度坐标 
                });
            }
        }
        return res;
    },
    BJData: [
        { name: '上海', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "1", "deviceIds": ["1"] } },
        { name: '广州', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "2", "deviceIds": ["2"] } },
        { name: '大连', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "3", "deviceIds": ["3"] } },
        { name: '南宁', value: { type: "RPC", "areaId": "2", "state": "import", "id": "4", "deviceIds": ["4"] } },
        { name: '南昌', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "5", "deviceIds": ["5"] } },
        { name: '拉萨', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "6", "deviceIds": ["6"] } },
        { name: '长春', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "7", "deviceIds": ["7"] } },
        { name: '包头', value: { type: "RPC", "areaId": "2", "state": "alarm", "id": "8", "deviceIds": ["8"] } },
        { name: '重庆', value: { type: "NEG", "areaId": "1", "state": "open", "id": "9", "deviceIds": ["1", "2", "3"] } },
    ]
};



var graphicDrow = {
    _click: function(params) {
        
    },
    // _mouseover:function(params){
    //     // 
    //     console.log("params"+params.name);
    // },
    _mousemove: function(params) {
        // 
        console.log("params" + params.name);
    },
    tooltip: {
        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: function(params) {
            return params.name + ' : ' + params.value[2].state + " " + params.value[2].type;
        }
    },
    graphic: [{
        draggable: true, //
        type: 'circle',
        zlevel: 0,
        // invisible:true,
        position: [500, 100],
        shape: {
            cx: 10,
            cy: 10,
            r: 10
        },
        style: {
            stroke: '#BEBEBE',
            strokeWidth: 2,
            fill: "#FFFFFF"
        }
    },
    {
        draggable: true, //
        type: 'circle',
        zlevel: 2,
        // invisible:true,
        position: [600, 200],
        shape: {
            cx: 10,
            cy: 10,
            r: 10
        },
        style: {
            stroke: '#BEBEBE',
            strokeWidth: 2,
            fill: "#FFFFFF"
        }
    }


],
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        data: graphicDrow_others.BJData.map(function(dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name].concat([dataItem.value]),

                "itemStyle": { // series 的 style
                    "color": state[dataItem.value.state || "normal"]
                }
            };
        }),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: 'yellow',
                borderWidth: 5
            }
        }
    }]

}

var optionGraphicDrow = $.extend({}, optionSampleMap, graphicDrow)

//↑↑↑↑↑↑↑***************  处理完成

//↓↓↓↓↓↓↓***************  开始处理





var graphicDrowCustomPoint_others = {

    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord] // lines 需要指定经纬度坐标 
                });
            }
        }
        return res;
    },
    BJData: [
        { name: '上海', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "1", "deviceIds": ["1"] } },
        { name: '广州', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "2", "deviceIds": ["2"] } },
        { name: '大连', value: { type: "RPC", "areaId": "1", "state": "normal", "id": "3", "deviceIds": ["3"] } },
        { name: '南宁', value: { type: "RPC", "areaId": "2", "state": "import", "id": "4", "deviceIds": ["4"] } },
        { name: '南昌', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "5", "deviceIds": ["5"] } },
        { name: '拉萨', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "6", "deviceIds": ["6"] } },
        { name: '长春', value: { type: "RPC", "areaId": "2", "state": "normal", "id": "7", "deviceIds": ["7"] } },
        { name: '包头', value: { type: "RPC", "areaId": "2", "state": "alarm", "id": "8", "deviceIds": ["8"] } },
        { name: '重庆', value: { type: "NEG", "areaId": "1", "state": "open", "id": "9", "deviceIds": ["1", "2", "3"] } },
    ]
};



var graphicDrowCustomPoint = {
    _click: function(params) {
        
    },
    
    // _mousemove: function(params) {
    //     strolling+=1;
    //     // console.log("strolling"+strolling);
    //     console.log("params" + params.name);

        

     
    // },
 
    tooltip: {
        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    graphic: [{
        id:"cs",
        draggable: true, //
        type: 'circle',
        zlevel: 99,
        info:{
           "ok":"is my load"
        },
        // invisible:true,
        position: [500, 100],
        shape: {
            cx: 10,
            cy: 10,
            r: 10
        },
        style: {
            stroke: '#BEBEBE',
            strokeWidth: 2,
            fill: "#FFFFFF"
        },
        onmousedown:function(params){
            // debugger
            if(params.target&&params.target.zlevel==99){

                building.target.setOption({graphic:{
                    draggable: true, //
                    id:"cs",
                    type: 'circle',
                    zlevel: 0,
                    // invisible:true,
                    position: [500, 100],
                    shape: {
                        cx: 10,
                        cy: 10,
                        r: 10
                    },
                    style: {
                        stroke: '#BEBEBE',
                        strokeWidth: 2,
                        fill: "#FFFFFF"
                    }
                   
                }})
            }

       



        },


        ondragstart:function(params){
            
            // debugger
        }
       
    },


    {
        // id:"img",
        draggable: true, //
        type: 'image',
        zlevel: 999,
        // invisible:true,
        position: [300, 100],
        style: {
           image:"../../images/physical/neg.png",
           width: 20,
           height: 20,
        },
   
       
    },


    {
        draggable: true, //
        type: 'circle',
        zlevel: 99,
        // invisible:true,
        position: [400, 200],
        shape: {
            cx: 10,
            cy: 10,
            r: 10
        },
        style: {
            stroke: '#BEBEBE',
            strokeWidth: 2,
            fill: "#FFFFFF"
        },
       
    }


],
    series: [
    

        {
            id: 'points',
            name: 'points',
            type: 'custom',
            coordinateSystem: 'geo',
            itemStyle: {
                borderColor: '#BEBEBE',
                borderWidth: 1,
            },
            renderItem:function (params, api) {
                

                var position=api.coord([api.value(0),api.value(1)]);
                var size=10;
                var style = api.style();
// custom 坐标轴的 position 很重要;
                return {
                    roam:api.value(2),
                    type: 'path',
                    position:position,
                    shape: {
                        d: 'M27 52 A 25 25 0 1 1 27 2 A 25 25 0 1 1 27 52',
                        x: -5,
                        y: -5,
                        width: size,
                        height: size,
                        layout: 'cover'
                    },
                    style: {
                        stroke: style.stroke,
                        strokeWidth: style.lineWidth,
                        fill: style.fill
                    }
                }
            },
             zlevel: 99,
            data: convertData([
                { name: "海门", value: 9 },
    
            ])
        }
    
    ]

}

var optionGraphicDrowCustomPoint = $.extend({}, optionSampleMap, graphicDrowCustomPoint)
// optionGraphicDrowCustomPoint.series.splice(0,0,...optionSampleMap.series);
//↑↑↑↑↑↑↑***************  处理完成
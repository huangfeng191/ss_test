//  and point 

remarks.linesAndPointMap2 = {
    "desc": "简单的地图1",
    "default": true
}
remarks.normalMap={
    "desc": "简单的地图1",
    "default": true

}




//↑↑↑↑↑↑↑***************  处理完成




var linesAndPointMap2Self_others = {

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            res.push({
                coords: dataItem.coords, // lines 需要指定经纬度坐标 
                info: dataItem.info,
                lineStyle: {
                    // color:dataItem[1].color
                }
            });

        }
        return res;
    },

    convertPointData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            res.push({
                value: dataItem.coords[1].concat(dataItem.info || []), // lines 需要指定经纬度坐标 
                info: dataItem.info,
                itemStyle: {
                    color: "#fff",
                    borderColor: '#000',
                    borderWidth: 1,



                }
            });

        }
        return res;
    },

    lineData: [{
            "coords": [
                [95.69, 35.05],
                [102.05, 30.75]
            ],
        },
        {
            "coords": [
                [100.72, 37.86],
                [95.69, 35.05]
            ],
        },
        {
            "coords": [
                ["94.53", "37.53"],
                ["99.99", "35.40"]
            ],
        },
        {
            "coords": [
                ["92.90", "40.64"],
                ["94.53", "37.53"]
            ],
        },
        {
            "coords": [
                ["86.39", "41.47"],
                ["92.90", "40.64"]
            ],
        },
        {
            "coords": [
                ["99.99", "35.40"],
                ["102.05", "30.75"]
            ],
            "info": { "isPoint": "12", "name": "cs" }
        }
    ]
};


var linesAndPointMap2Self = {
    // _click: function(params) {
    _georoam: function(params) {
        // return ;
        // debugger
        // console.log("zoom"+params.zoom)
        console.log("zoom"+building.target.getOption().geo[0].zoom)
        var zoom= building.target.getOption().geo[0].zoom;
        if ((zoom||1)<= 1) {

            building.target.setOption({
                "series": [
                    {
                        id: "linePoint",
                        type: 'scatter',
                        data:[]
                    }
                ]
            })
        } else {
            // return;
            building.target.setOption({
                "series": {
                    name: 'linePoint',
                    id: 'linePoint',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: linesAndPointMap2Self_others.convertPointData(linesAndPointMap2Self_others.lineData),
                    symbol: "",
                    zlevel:999,
                    symbolSize: 12,
                    itemStyle: {},
                    tooltip: {
                        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                        formatter: function(params) {
                            var data = params.data;
                            if (data && data.info) {
                                return data.info.name;
                            } else {
                                return "";
                            }
                        }
                    },

                }
            })
        }
    },
    series: [{
            name: "北京" + ' Top10',
            id:"lines",
            type: 'lines',
            zlevel: 2,
            polyline: true,
            // symbol: ['none', 'arrow'],
            symbol: ['none', 'none'], // 起止点图标
            symbolSize: 10,

            lineStyle: {
                normal: {
                    color: 'green',
                    width: 2,
                    // opacity: 0.6,

                }
            },
            tooltip: {
                        trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                        formatter: function(params) {
                            return  "11";
                            // return params.name + ' : ' + params.value[2];
                        }
                    },

            data: linesAndPointMap2Self_others.convertData(linesAndPointMap2Self_others.lineData)
        },
        {
            name: 'linePoint',
            id: 'linePoint',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: linesAndPointMap2Self_others.convertPointData(linesAndPointMap2Self_others.lineData),
        //    data:mapDataTest,
            zlevel:20,
            symbol:"",
            symbolSize: 12,
            itemStyle: {
                // emphasis: {
                //     borderColor: 'yellow',
                //     borderWidth: 5

                // },

            },
            tooltip: {
                trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                formatter: function(params) {
                    var data=params.data;
                    if(data&&data.info){
                        return data.info.name;
                    }
                    else{
                        return "";
                    }
                    // return params.name + ' : ' + params.value[2];
                }
            },

        }
    ]




}

var optionLinesAndPointMap2 = $.extend({}, optionSampleMap, linesAndPointMap2Self)






//↓↓↓↓↓↓↓***************  开始处理
var optionNormalMap = {

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
        // "zoom": 1,
        "zlevel":1,
        map: 'china',
        label: {
            show:true,  // 是否显示区域
            fontSize:16,
            emphasis: {
                show: false
            },
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
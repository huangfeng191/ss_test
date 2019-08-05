var remarks = {
    "sampleMap": {
        "desc": "简单的地图",
    },
    "sampleMapBorder": {
        "desc": "边框",
        // "default":true
    },
    "linesMap": {
        "desc": "画线",
        "default": true
    }
}


var geoCoordMap = {
    "海门": [121.15, 31.89]
};

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

var optionSampleMap = {

    geo: {
        map: 'china',
        label: {
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
                areaColor: 'yellow' // 高亮区域
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

        ]),
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




var linesMapSelf = {

    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([
            { name: "海门", value: 9 },

        ]),
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


var optionLinesMap = $.extend({}, optionSampleMap, linesMapSelf)
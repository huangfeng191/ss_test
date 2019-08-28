//  and point 

remarks.linesAndPointMap= {
    "desc": "简单的地图",
    // "default": true
}

remarks.linesAndPointMap2= {
    "desc": "简单的地图",
    "default": true
}

var linesAndPointMapSelf_others = {

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            var centerCoord =[fromCoord[0],toCoord[1]];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name, // 辅助字段
                    toName: dataItem[1].name,
                    coords: [fromCoord,centerCoord, toCoord], // lines 需要指定经纬度坐标 
                    lineStyle:{
                        color:dataItem[1].color
                    }
                });
            }
        }
        return res;
    },
    BJData: [
        [{ name: '北京' }, { name: '上海',color:"#212121", value: 95 }],
        [{ name: '北京' }, { name: '广州',color:"ellow", value: 90 }],
        [{ name: '北京' }, { name: '大连',color:"#00CC00", value: 80 }],
        [{ name: '北京' }, { name: '南宁',color:"#FD3F64", value: 70 }],
        [{ name: '北京' }, { name: '南昌',color:"#FFAD01", value: 60 }],
        [{ name: '北京' }, { name: '拉萨',color:"#4796E3", value: 50 }],
        [{ name: '北京' }, { name: '长春',color:"grey", value: 40 }],
     
    ]
};


var linesAndPointMapSelf = {

    series: [{
            name: "北京" + ' Top10',
            type: 'lines',
            zlevel: 2,
            polyline:true,
            // symbol: ['none', 'arrow'],
            symbol: ['none', 'none'], // 起止点图标
            symbolSize: 10,
       
            lineStyle: {
                normal: {
                    // color: '#a6c84c',
                    width: 2,
                    opacity: 0.6,
                  
                }
            },
            data: linesAndPointMapSelf_others.convertData(linesAndPointMapSelf_others.BJData)
        },
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: linesAndPointMapSelf_others.BJData.map(function(dataItem) {
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

var optionLinesAndPointMap = $.extend({}, optionSampleMap, linesAndPointMapSelf)


//↑↑↑↑↑↑↑***************  处理完成




var linesAndPointMap2Self_others = {

    planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    convertData: function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
                dataItem=dataItem[0];
           
                res.push({
                  
                    coords: dataItem.coords, // lines 需要指定经纬度坐标 
                    info:dataItem.info,
                    lineStyle:{
                        // color:dataItem[1].color
                    }
                });
           
        }
        return res;
    },
  
    lineData:[
        [
            {
              "coords": [
                [ 111.15, 32.89 ], [ 111.15, 32.89 ], [ 106.1, 42.19 ]
              ],
              "info": {
                "id": "AtB2",
                "group": "123",
                "parent": "abcd-200",
                "port": "80",
                "outPort": "1080",
                "status": "Normal",
                "systemName": "XXX",
                "info": "节点1-节点2-节点3",
                "childrenNum": 3
              }
            }
          ]
    ]
};


var linesAndPointMap2Self = {

    series: [{
            name: "北京" + ' Top10',
            type: 'lines',
            zlevel: 2,
            polyline:true,
            // symbol: ['none', 'arrow'],
            symbol: ['none', 'none'], // 起止点图标
            symbolSize: 10,
       
            lineStyle: {
                normal: {
                    // color: '#a6c84c',
                    width: 2,
                    opacity: 0.6,
                  
                }
            },
            data: linesAndPointMap2Self_others.convertData(linesAndPointMap2Self_others.lineData)
        },
        // {
        //     name: 'pm2.5',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     data: linesAndPointMap2Self_others.BJData.map(function(dataItem) {
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

var optionLinesAndPointMap2 = $.extend({}, optionSampleMap, linesAndPointMap2Self)
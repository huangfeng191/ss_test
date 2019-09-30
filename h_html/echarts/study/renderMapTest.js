remarks.test = {
    "desc": "简单的地图",
    // "default": true
}

var optionTest = {
    "tooltip": {
        "trigger": "item"
    },
    "geo": {
        "scaleLimit": {
            "min": 1,
            "max": 3
        },
        "roam": true,
        "zlevel": 1,
        "map": "china",
        "label": {
            "emphasis": {
                "show": false
            }
        },
        "itemStyle": {
            "normal": {
                "areaColor": "#323c48",
                "borderColor": "yellow",
                "borderWidth": 1,
                "borderType": "solid"
            },
            "emphasis": {
                "areaColor": "yellow",
                "itemStyle": {
                    "opacity": 1
                }
            }
        }
    },
    "series": [{
        "id": "points",
        "name": "points",
        "type": "custom",
        "coordinateSystem": "geo",
        "itemStyle": {
            "borderColor": "#BEBEBE",
            "borderWidth": 1
        },
        renderItem: function(params, api) {
          var c="yellow";
            if(api.value(2)==9){
              c="blue";
            }
            var position = api.coord([api.value(0), api.value(1)]);
            var size = 10;
            var style = api.style();
            // custom 坐标轴的 position 很重要;
            return {
                roam: api.value(2),
                type: 'path',
                position: position,
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
                    fill: c
                }
            }
        },
        "zlevel": 99,
        "data": [{
            "name": "海门",
            "value": [
                121.15,
                31.89,
                9
            ]
        },
        {
          "name": "test",
          "value": [
              123.15,
              31.89,
              19
          ]
      }]
    }],
    "graphic": [{
            "id": "cs",
            "draggable": true,
            "type": "circle",
            "zlevel": 99,
            "info": {
                "ok": "is my load"
            },
            "position": [
                500,
                100
            ],
            "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
            },
            "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
            }
        },
        {
            "draggable": true,
            "type": "image",
            "zlevel": 999,
            "position": [
                300,
                100
            ],
            "style": {
                "image": "../../images/physical/neg.png",
                "width": 20,
                "height": 20
            }
        },
        {
            "draggable": true,
            "type": "circle",
            "zlevel": 99,
            "position": [
                400,
                200
            ],
            "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
            },
            "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
            }
        }
    ]
}
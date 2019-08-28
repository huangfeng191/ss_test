remarks.test = {
    "desc": "简单的地图",
    "default": true
}

var optionTest={
    "color": [
      "#c23531",
      "#2f4554",
      "#61a0a8",
      "#d48265",
      "#91c7ae",
      "#749f83",
      "#ca8622",
      "#bda29a",
      "#6e7074",
      "#546570",
      "#c4ccd3"
    ],
    "gradientColor": [
      "#f6efa6",
      "#d88273",
      "#bf444c"
    ],
    "textStyle": {
      "fontFamily": "Microsoft YaHei",
      "fontSize": 12,
      "fontStyle": "normal",
      "fontWeight": "normal"
    },
    "animation": "auto",
    "animationDuration": 1000,
    "animationDurationUpdate": 300,
    "animationEasing": "exponentialOut",
    "animationEasingUpdate": "cubicOut",
    "animationThreshold": 2000,
    "progressiveThreshold": 3000,
    "progressive": 400,
    "hoverLayerThreshold": 3000,
    "useUTC": false,
  
    "series": [
      {
        "name": "北京 Top10",
        "id": "lines",
        "type": "lines",
        "zlevel": 2,
        "polyline": true,
        "symbol": [
          "none",
          "none"
        ],
        "symbolSize": 10,
        "lineStyle": {
          "color": "green",
          "width": 2,
          "opacity": 0.5
        },
        "tooltip": {
          "trigger": "item"
        },
        "data": [
            {
              "coords": [
                [
                  95.69,
                  35.05
                ],
                [
                  102.05,
                  30.75
                ]
              ],
              "lineStyle": {}
            },
            {
              "coords": [
                [
                  100.72,
                  37.86
                ],
                [
                  95.69,
                  35.05
                ]
              ],
              "lineStyle": {}
            },
            {
              "coords": [
                [
                  "94.53",
                  "37.53"
                ],
                [
                  "99.99",
                  "35.40"
                ]
              ],
              "lineStyle": {}
            },
            {
              "coords": [
                [
                  "92.90",
                  "40.64"
                ],
                [
                  "94.53",
                  "37.53"
                ]
              ],
              "lineStyle": {}
            },
            {
              "coords": [
                [
                  "86.39",
                  "41.47"
                ],
                [
                  "92.90",
                  "40.64"
                ]
              ],
              "lineStyle": {}
            },
            {
              "coords": [
                [
                  "99.99",
                  "35.40"
                ],
                [
                  "102.05",
                  "30.75"
                ]
              ],
              "info": {
                "isPoint": "12",
                "name": "cs"
              },
              "lineStyle": {}
            }
          ],
        "coordinateSystem": "geo",
        "z": 2,
        "legendHoverLink": true,
        "hoverAnimation": true,
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "geoIndex": 0,
        "effect": {
          "show": false,
          "period": 4,
          "constantSpeed": 0,
          "symbol": "circle",
          "symbolSize": 3,
          "loop": true,
          "trailLength": 0.2
        },
        "large": false,
        "largeThreshold": 2000,
        "label": {
          "show": false,
          "position": "end"
        },
        "emphasis": {
          "label": {
            "show": false
          }
        }
      },
      {
        "name": "linePoint",
        "id": "linePoint",
        "type": "scatter",
        "zlevel":100,
        "coordinateSystem": "geo",
        "data": [
          {
            "value": [
              102.05,
              30.75
            ],
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          },
          {
            "value": [
              95.69,
              35.05
            ],
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          },
          {
            "value": [
              "99.99",
              "35.40"
            ],
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          },
          {
            "value": [
              "94.53",
              "37.53"
            ],
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          },
          {
            "value": [
              "92.90",
              "40.64"
            ],
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          },
          {
            "value": [
              "102.05",
              "30.75",
              {
                "isPoint": "12",
                "name": "cs"
              }
            ],
            "info": {
              "isPoint": "12",
              "name": "cs"
            },
            "itemStyle": {
              "color": "#fff",
              "borderColor": "#000",
              "borderWidth": 1
            }
          }
        ],
        "symbol": "",
        "symbolSize": 12,
        "itemStyle": {
          "opacity": 0.8
        },
        "tooltip": {
          "trigger": "item"
        },
        
        "z": 2,
        "legendHoverLink": true,
        "hoverAnimation": true,
        "large": false,
        "largeThreshold": 2000,
        "label": {},
        "emphasis": {
          "label": {}
        }
      }
    ],
   
    "visualMap": [],
    "dataZoom": [],
    "brush": [],
    "legend": [],
    "geo": [
      {
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
          },
          "show": false,
          "color": "#000"
        },
        "itemStyle": {
          "areaColor": "#323c48",
          "borderColor": "yellow",
          "borderWidth": 1,
          "borderType": "solid",
          "color": "#eee"
        },
        "emphasis": {
          "itemStyle": {
            "areaColor": "yellow",
            "itemStyle": {
              "opacity": 1
            },
            "color": "rgba(255,215,0,0.8)"
          },
          "label": {
            "show": false,
            "color": "rgb(100,0,0)"
          }
        },
        "z": 0,
        "show": true,
        "left": "center",
        "top": "center",
        "aspectScale": null,
        "silent": false,
        "boundingCoords": null,
        "center": [
          104.15247349467637,
          36.87605403697395
        ],
        "zoom": 1.4641000000000006,
        "regions": [
          {
            "name": "中华人民共和国"
          },
          {
            "name": "台湾"
          },
          {
            "name": "河北"
          },
          {
            "name": "山西"
          },
          {
            "name": "内蒙古"
          },
          {
            "name": "辽宁"
          },
          {
            "name": "吉林"
          },
          {
            "name": "黑龙江"
          },
          {
            "name": "江苏"
          },
          {
            "name": "浙江"
          },
          {
            "name": "安徽"
          },
          {
            "name": "福建"
          },
          {
            "name": "江西"
          },
          {
            "name": "山东"
          },
          {
            "name": "河南"
          },
          {
            "name": "湖北"
          },
          {
            "name": "湖南"
          },
          {
            "name": "广东"
          },
          {
            "name": "广西"
          },
          {
            "name": "海南"
          },
          {
            "name": "四川"
          },
          {
            "name": "贵州"
          },
          {
            "name": "云南"
          },
          {
            "name": "西藏"
          },
          {
            "name": "陕西"
          },
          {
            "name": "甘肃"
          },
          {
            "name": "青海"
          },
          {
            "name": "宁夏"
          },
          {
            "name": "新疆"
          },
          {
            "name": "北京"
          },
          {
            "name": "天津"
          },
          {
            "name": "上海"
          },
          {
            "name": "重庆"
          },
          {
            "name": "香港"
          },
          {
            "name": "澳门"
          },
          {
            "name": "南海诸岛"
          }
        ]
      }
    ]
  }
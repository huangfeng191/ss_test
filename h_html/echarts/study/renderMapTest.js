remarks.test = {
    "desc": "简单的地图",
    "default": true
}

var optionTest={
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
          "normal": {
            "color": "green",
            "width": 2
          }
        },
        "tooltip": {
          "trigger": "item",
          formatter: function(params) {
            //   return "11"
              return null
          }
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
        ]
      },
      {
        "name": "linePoint",
        "id": "linePoint",
        "type": "scatter",
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
        "zlevel": 20,
        "symbol": "",
        "symbolSize": 12,
        "itemStyle": {},
        "tooltip": {
          "trigger": "item",
          formatter: function(params) {
              return "11"
            //   return null
          }
        }
      }
    ]
  }

    myChart.setOption(option = {
        "tooltip": {
          "trigger": "item"
        },
        "geo": {
         
          "map": "china",
        
          "itemStyle": {
            "normal": {
              "areaColor": "#323c48",
              "borderColor": "yellow",
              "borderWidth": 1,
              "borderType": "solid"
            },
         
          }
        },
        "series": [
          {
            "name": "北京 Top10",
            "type": "lines",
            "zlevel": 2,
            "polyline":true,
            "symbol": "arrow",
            "symbolSize": 10,
            "effect": {},
            "lineStyle": {},
            "data": [
              {
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
          }
        ]
      });
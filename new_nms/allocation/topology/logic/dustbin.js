 // /nms/spring/viewData/addPath
 addPath = {
     "path": {
         "aNe": "ccf837a3-f852-4c70-a1da-c4835a423d56",
         "zNe": "db0ec7d6-69d0-44a3-9a09-746709b63287",
         "pathName": "白广路GNSS97_PRC,北京白广路_PRC",
         "pathType": "1",
         "remark": ""
     },
     "pathLinkList": [],
     "token": "C59D106E679DB12F561E943549257781"
 }


 addLogicDevice
     = {
         "areaId": "117c4c9f-4e09-462b-9c6e-fbb5d8be5506",
         "name": "白广路GNSS97_PRC",
         "neType": "PRC",
         "deviceType": "GNSS97",
         "ip": "192.11.1.1",
         "vendor": "dt",
         "owner": "",
         "description": "",
         "aliasName": "",
         "phyX": "157px",  // 设备变更的时候 会影响
         "phyY": "3px",    // 设备变更的时候 会影响 
         "addType": "2",   // 逻辑拓扑 
         "token": "A5FC8DBCF0FD6423E266D57D53A84CBD",
         "port": 0
     }





   draggableElement:  [
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": true,
              "position": [
                0,
                0
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
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "网元组"
              }
            }
          ],
          "id": "_NEG",
          "z": 100,
          "position": [
            895,
            341
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "polygon",
              "draggable": true,
              "position": [
                0,
                0
              ],
              "shape": {
                "points": [
                  [
                    15,
                    5
                  ],
                  [
                    15,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    15
                  ],
                  [
                    5,
                    15
                  ],
                  [
                    5,
                    20
                  ],
                  [
                    20,
                    20
                  ],
                  [
                    20,
                    5
                  ],
                  [
                    5,
                    5
                  ],
                  [
                    5,
                    15
                  ],
                  [
                    5,
                    5
                  ]
                ]
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "PRC"
              }
            }
          ],
          "id": "_PRC",
          "z": 100,
          "position": [
            895,
            381
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "rect",
              "draggable": true,
              "position": [
                0,
                0
              ],
              "shape": {
                "width": 20,
                "height": 20
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "LPR"
              }
            }
          ],
          "id": "_LPR",
          "z": 100,
          "position": [
            895,
            421
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "polygon",
              "draggable": true,
              "position": [
                0,
                0
              ],
              "shape": {
                "points": [
                  [
                    20,
                    8.66024
                  ],
                  [
                    15,
                    0
                  ],
                  [
                    5,
                    0
                  ],
                  [
                    0,
                    8.66024
                  ],
                  [
                    5,
                    17.36052
                  ],
                  [
                    15,
                    17.36052
                  ]
                ]
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "SSUT"
              }
            }
          ],
          "id": "_SSUT",
          "z": 100,
          "position": [
            895,
            461
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "polygon",
              "draggable": true,
              "position": [
                0,
                0
              ],
              "shape": {
                "points": [
                  [
                    20,
                    10
                  ],
                  [
                    10,
                    20
                  ],
                  [
                    0,
                    10
                  ],
                  [
                    10,
                    0
                  ]
                ]
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FFFFFF"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "SSUL"
              }
            }
          ],
          "id": "_SSUL",
          "z": 100,
          "position": [
            895,
            501
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": false,
              "position": [
                0,
                0
              ],
              "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#00EC00"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "正常"
              }
            }
          ],
          "id": "_Normal",
          "z": 100,
          "position": [
            1015,
            341
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": false,
              "position": [
                0,
                0
              ],
              "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FF0000"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "严重警告"
              }
            }
          ],
          "id": "_SWarning",
          "z": 100,
          "position": [
            1015,
            381
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": false,
              "position": [
                0,
                0
              ],
              "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#FE7B1A"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "主要警告"
              }
            }
          ],
          "id": "_MWarning",
          "z": 100,
          "position": [
            1015,
            421
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": false,
              "position": [
                0,
                0
              ],
              "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#F5D300"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "次要警告"
              }
            }
          ],
          "id": "_LIWarning",
          "z": 100,
          "position": [
            1015,
            461
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "circle",
              "draggable": false,
              "position": [
                0,
                0
              ],
              "shape": {
                "cx": 10,
                "cy": 10,
                "r": 10
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "#0991F5"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "事件"
              }
            }
          ],
          "id": "_Event",
          "z": 100,
          "position": [
            1015,
            501
          ]
        },
        {
          "type": "group",
          "children": [
            {
              "type": "polygon",
              "draggable": true,
              "position": [
                0,
                0
              ],
              "shape": {
                "points": [
                  [
                    15,
                    5
                  ],
                  [
                    15,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    15
                  ],
                  [
                    5,
                    15
                  ],
                  [
                    5,
                    20
                  ],
                  [
                    20,
                    20
                  ],
                  [
                    20,
                    5
                  ],
                  [
                    5,
                    5
                  ],
                  [
                    5,
                    15
                  ],
                  [
                    5,
                    5
                  ]
                ]
              },
              "style": {
                "stroke": "#BEBEBE",
                "strokeWidth": 2,
                "fill": "grey"
              }
            },
            {
              "type": "text",
              "style": {
                "x": 24,
                "y": 4,
                "text": "北京白广路SM2000_PRC"
              }
            }
          ],
          "id": "953b9471-17f9-450a-ba67-40fdd88ac1be",
          "z": 100,
          "position": [
            40,
            40
          ]
        }
      ]
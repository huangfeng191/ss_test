var logicBoard = {
    "svg": null,
    "resource": {
        stroke: "#565656",
        lineThick: 10,
        strokeWidth: 2
    },
    "state": {
        
        "green": { "fill": "#00dfdf", "gradient": "#00dfdf" },
        "blink-green": { "fill": "#00dfdf", "gradient": "#00dfdf" },
        "normal": { "fill": "#cbcccc", "gradient": "#cbcccc" },
        "grey": { "fill": "#cbcccc", "gradient": "#cbcccc" },
        "red": { "fill": "red", "gradient": "red" },
        "yellow": { "fill": "yellow", "gradient": "yellow" }
    },
    "basicShape": {
        "clock": {
            "set": function(point, option) { 
                var fill = logicBoard.state.normal.fill;
                var x = point.x;
                var y = point.y;
                var name = "IOC";
                if (option && option.state != null) {
                    fill = logicBoard.state[option.state].fill;
                }
                if (option && option.name != null) {
                    name = name + option.name;
                }
                var width=80;
                var height=200;
                var rect=logicBoard.svg.rect(x, y, width, height).attr({
                    "stroke": logicBoard.resource.stroke,
                    "fill": fill,
                    "stroke-width": logicBoard.resource.strokeWidth
                });
                var text=logicBoard.svg.text(x, y - 3, name).attr({
                    "font-size": 14
                })

                return logicBoard.svg.g(rect,text).data({"type":"clock"})
            }
        },
        "output": {
            "set": function(point, option) { // {x,y} ,{state:normal}
                var fill = logicBoard.state.normal.fill;
                var x = point.x;
                var y = point.y;
                var name = "OUT";
                if (option && option.state != null) {
                    fill = logicBoard.state[option.state].fill;
                }

                var rect=logicBoard.svg.rect(x, y, 40, 40).attr({
                    "stroke": logicBoard.resource.stroke,
                    "fill": fill,
                    "stroke-width": logicBoard.resource.strokeWidth
                });
                var text=logicBoard.svg.text(x, y - 3, name).attr({
                    "font-size": 12
                });
                return logicBoard.svg.g(rect,text).data({"type":"output"})
            }
        },
        "input": {
            "set": function(point, option) {
                var gradientSample = logicBoard.state.normal.gradient;
                var x = point.x;
                var y = point.y;
                var lineWidth = 190;
                var name="";
                if (option) {
                    if (option.state != null) {
                        gradientSample = logicBoard.state[option.state].gradient;
                        if(option.state=="blink-green"){
                            lineWidth=240;
                        }
                    }
                    if (option.lineWidth) {
                        lineWidth = option.lineWidth
                    }
                    if (option.name != null) {
                        name = name + option.name;
                    }
                }
                var gx = logicBoard.svg.gradient("l(0, 0,0, 1)" + gradientSample + "-#fff-" + gradientSample);
                var gc = logicBoard.svg.gradient("r(0.4,0.4,0.5, 0.5)" + gradientSample + "-#fff-" + gradientSample);

                var rect=logicBoard.svg.rect(x, y, lineWidth, logicBoard.resource.lineThick).attr({
                    "fill": gx,

                })

                var circle=logicBoard.svg.circle(x, y + 5, 9).attr({
                    "fill": gc,

                });
                var text=logicBoard.svg.text(x-56, y+10, name).attr({
                    "font-size": 14
                })


                return logicBoard.svg.g(rect,text,circle).data({"type":"input"});

            }
        },
        "slot": {
            "set": function(point, option) { 
                var gradientSample = logicBoard.state.normal.gradient;
                var x = point.x;
                var y = point.y;
                var name = "Slot";
                if (option && option.state != null) {
                    gradientSample = logicBoard.state[option.state].gradient;
                }
                var gx = logicBoard.svg.gradient("l(0, 0,0, 1)" + gradientSample + "-#fff-" + gradientSample);
                var lineWidth = 50;
                if (option && option.lineWidth) {
                    lineWidth = option.lineWidth
                }
                if (option && option.name != null) {
                    name = name + option.name;
                }
                var rect=logicBoard.svg.rect(x, y, lineWidth, logicBoard.resource.lineThick).attr({
                    "fill": gx,

                })

                var arrow=logicBoard.svg.polygon(x + lineWidth, y - 3, x + lineWidth + 15, y + 4.5, x + lineWidth, y + 15).attr({
                    "fill": gradientSample,
                    "stroke": logicBoard.resource["stroke"],
                    "stroke-width": logicBoard.resource.strokeWidth,
                    "stroke-dasharray": "1,1"

                });

                var text=logicBoard.svg.text(x, y - 3, name).attr({
                    "font-size": 14
                })


                return logicBoard.svg.g(rect,text,arrow).data({"type":"slot"});

            }



        },
        "toLine": {
            "set":function(point,option){

                var gradientSample = logicBoard.state.normal.gradient;
                var x = point.x;
                var y = point.y;
                var lineWidth = 190;
                var name="";
                var isVertical=false;
                var data=null;
                if (option) {
                    if (option.state != null) {
                        gradientSample = logicBoard.state[option.state].gradient;
                    }
                    if (option.lineWidth) {
                        lineWidth = option.lineWidth
                    }
                    if (option.name != null) {
                        name = name + option.name;
                    }
                    if (option.vertical != null) {
                        isVertical=true;
                    }
                    if (option.data != null) {
                        data=option.data;
                    }
                }
                var rect,gx;
                if(isVertical){
                    gx = logicBoard.svg.gradient("l(0, 0,1, 0)" + gradientSample + "-#fff-" + gradientSample);
                    rect=logicBoard.svg.rect(x, y, logicBoard.resource.lineThick, lineWidth).attr({
                        "fill": gx,
                    })
                }else{
                    gx = logicBoard.svg.gradient("l(0, 0,0, 1)" + gradientSample + "-#fff-" + gradientSample);
                    rect=logicBoard.svg.rect(x, y, lineWidth, logicBoard.resource.lineThick).attr({
                        "fill": gx,
                    })
                }
                if(data){
                    rect.data({"data":data});
                }
                return rect ;

                
            }
        },
       
    }
}



function getData() {
    return [{
        "ioType": null,
        "index": 1,
        "redundancy": null,
        "card": {
            "type": "CC",
            "cardName": null,
            "active": "yes",
            "portCount": null,
            "cardLed": { "freeRun": 0, "active": 1, "lock": 1, "alarm": 0 }
        }
    },
    { "ioType": null, "index": 0, "redundancy": null, "card": { "type": "CC", "cardName": null, "active": "yes", "portCount": null, "cardLed": { "freeRun": 0, "active": 0, "lock": 1, "alarm": 0 } } },
    

    { "ioType": null, "index": 2, "redundancy": null, "card": { "type": "MC", "cardName": null, "active": "yes", "portCount": null, "cardLed": { "pwrA": 0, "pwrB": 1, "system": 3, "alarm": 1 } } },
    

    { "ioType": null, "index": 3, "redundancy": "disable", "card": null },
    { "ioType": null, "index": 4, "redundancy": "--", "card": { "type": "4-E1", "cardName": null, "active": "--", "portCount": null, "cardLed": { "sys": 3, "gnss": 3, "port1": 1, "port2": 1, "port3": 0, "port4": 0 } } },
    

    
    
    { "ioType": null, "index": 5, "redundancy": "disable", "card": null },
    { "ioType": null, "index": 8, "redundancy": "disable", "card": { "type": "E1-T1", "cardName": null, "active": "yes", "portCount": null, "cardLed": { "pwr": 1, "enable": 1 } } },
    { "ioType": null, "index": 7, "redundancy": "disable", "card": { "type": "E1-T1", "cardName": null, "active": "yes", "portCount": null, "cardLed": { "pwr": 1, "enable": 1 } } },
    { "ioType": null, "index": 6, "redundancy": "disable", "card": null },
    { "ioType": null, "index": 9, "redundancy": "disable", "card": null }, { "ioType": null, "index": 10, "redundancy": "disable", "card": null }, { "ioType": null, "index": 11, "redundancy": "disable", "card": null }
]
}


var setLogicDevice = function() {
    var p1 = Snap("#logicDeviceSvg");

    logicBoard.svg = p1;
    var basicShape = logicBoard.basicShape;

    

    var baseInputTop = 80;
    var baseInputX = 68;
    var baseInputY = 40;
    var baseLineThick = 10;
    var baseOutputTop = 30;
    var baseClockX = 350;
    var baseClockWidth = 80;

    var baseOutputTop = 100;
    var baseOutputX = 520;
    var baseOutputY = 60;

    var clickLineWidth = 50;
    var baseOutputLine = {
      "offsetX": 40,
      "offsetY": 15
    }







    var logicGenerateData = {
      "binding": {
        "CCName": "钟卡",
        "CC": [
          { "name": "active", "ref": { "0": "grey", "1": "green" } },
        ],
        "4-E1Name": "GNSS+4E1",
        "4-E1": [
          { "title": "GNSS", "name": "gnss", "ref": { "0": "grey", "1": "green", "3": "blink-green" } },
          { "title": "input1", "name": "port1", "ref": { "0": "grey", "1": "red", "3": "blink-green" } },
          { "title": "input2", "name": "port2", "ref": { "0": "grey", "1": "red", "3": "blink-green" } },
          { "title": "input3", "name": "port3", "ref": { "0": "grey", "1": "red", "3": "blink-green" } },
          { "title": "input4", "name": "port4", "ref": { "0": "grey", "1": "red", "3": "blink-green" } },
        ],
        "E1-T1Name": "E1输出卡",
        "E1-T1": [
          // { "name": "pwr", "ref": { "0": "grey", "1": "green" } },
          { "title": "Enable", "name": "enable", "ref": { "0": "grey", "1": "blink-green" } }
        ]
      },
      "clock": [
        { x: baseClockX, y: 60, index: 0 },
        { x: baseClockX, y: 370, index: 1 },
      ],
      "input": [
        { x: baseInputX, y: baseInputTop, "name": "GNSS1", groupIndex: 0 },
        { x: baseInputX, y: baseInputTop + baseInputY * 1, "name": "GNSS2", groupIndex: 5 },
        { x: baseInputX, y: baseInputTop + baseInputY * 2, "name": "input1", groupIndex: 1 },
        { x: baseInputX, y: baseInputTop + baseInputY * 3, "name": "input2", groupIndex: 2 },
        { x: baseInputX, y: baseInputTop + baseInputY * 4, "name": "input3", groupIndex: 3 },
        { x: baseInputX, y: baseInputTop + baseInputY * 5, "name": "input4", groupIndex: 4 },
        { x: baseInputX, y: baseInputTop + baseInputY * 6, "name": "input5", groupIndex: 6 },
        { x: baseInputX, y: baseInputTop + baseInputY * 7, "name": "input6", groupIndex: 7 },
        { x: baseInputX, y: baseInputTop + baseInputY * 8, "name": "input7", groupIndex: 8 },
        { x: baseInputX, y: baseInputTop + baseInputY * 9, "name": "input8", groupIndex: 9 },



      ],
      "output": [
        { x: baseOutputX,name:1, y: baseOutputTop },
        { x: baseOutputX,name:2, y: baseOutputTop + baseOutputY * 1 },
        { x: baseOutputX,name:3, y: baseOutputTop + baseOutputY * 2 },
        { x: baseOutputX,name:4, y: baseOutputTop + baseOutputY * 3 },
        { x: baseOutputX,name:5, y: baseOutputTop + baseOutputY * 4 },
        { x: baseOutputX,name:6, y: baseOutputTop + baseOutputY * 5 },
        { x: baseOutputX,name:7, y: baseOutputTop + baseOutputY * 6 },
        // { x: baseOutputX, y: baseOutputTop + baseOutputY * 7 },



      ]
    }

    var data = getData();
    var bind = logicGenerateData.binding;
    data.forEach(function(o) {
      var card = o.card;

      if (card && card.type == "CC") {
        var cardLed = card.cardLed;
        if (logicGenerateData["clock"][o.index]) {
          bind[card.type].forEach(function(s) {
            logicGenerateData["clock"][o.index].state = s.ref[cardLed[s.name]]
          })
        }
      }
      if (card && card.type == "4-E1") {
        var cardLed = card.cardLed;
        if (logicGenerateData["input"][o.index]) {

          bind[card.type].forEach(function(s, i) {
            // 
            var isSecond = 0;
            if (o.index == 4) {
              isSecond = 5
            }
            logicGenerateData["input"].forEach(function(oneInput) {
              if (oneInput.groupIndex == i + isSecond) {
                oneInput.state = s.ref[cardLed[s.name]]
              }
            })
          })

        }
      }
      if (card && card.type == "E1-T1") {
        var cardLed = card.cardLed;
        if (logicGenerateData["output"][o.index-5]) {

          bind[card.type].forEach(function(s, i) {
            logicGenerateData["output"][o.index-5].state = s.ref[cardLed[s.name]]
          })

        }
      }
    })
    

    var logicShapes = { "input": [], "clock": [], "output": [], "slot": [] }

    logicGenerateData.input.forEach(function(o) {
      logicShapes.input.push(basicShape.input.set({ x: o.x, y: o.y }, { name: o.name, state: o.state }));
    })


    
    var logicClockLineData = []
    var verticalHeight = logicGenerateData.input[9].y - logicGenerateData.input[0].y;
    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x - clickLineWidth, y: logicGenerateData.input[0].y }, "option": { "lineWidth": clickLineWidth } });
    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x - clickLineWidth, y: logicGenerateData.input[9].y }, "option": { "lineWidth": clickLineWidth } });
    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x - clickLineWidth, y: logicGenerateData.input[0].y }, "option": { "lineWidth": verticalHeight, "vertical": true } });

    verticalHeight = logicGenerateData.output[6].y - logicGenerateData.output[0].y

    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x + baseClockWidth, y: logicGenerateData.output[0].y + baseOutputLine.offsetY }, "option": { "lineWidth": clickLineWidth } });
    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x + baseClockWidth, y: logicGenerateData.output[6].y + baseOutputLine.offsetY }, "option": { "lineWidth": clickLineWidth } });
    logicClockLineData.push({ "point": { x: logicGenerateData.clock[0].x + baseClockWidth + clickLineWidth - baseLineThick, y: logicGenerateData.output[0].y + baseOutputLine.offsetY }, "option": { "lineWidth": verticalHeight+baseLineThick, "vertical": true } });

    // second treatment ;


    var logicOutputModal = {
      "state": "normal",
      "activeClockIndex": null,
    }

    logicGenerateData.clock.forEach(function(o, i) {
      if (o.state == "green") {
        logicOutputModal.state = "yellow"
        logicOutputModal.activeClockIndex = i
      }
    })

    logicGenerateData.input.forEach(function(o) {
      if (o.state == "blink-green") {
        logicClockLineData[0].option.state = "green";
        logicClockLineData[1].option.state = "green";
        logicClockLineData[2].option.state = "green";
        logicOutputModal.state = "green";
      }
    })

    if (logicOutputModal.activeClockIndex != null) {

      logicClockLineData[3 + logicOutputModal.activeClockIndex * 1].option.state = logicOutputModal.state;
      logicClockLineData[5].option.state = logicOutputModal.state;
      // logicClockLineData[5].option.state =  logicOutputModal.state;
    }


// clock line 
    logicClockLineData.forEach(function(o) {
      basicShape.toLine.set(o.point, o.option);
    })

// clock
    logicGenerateData.clock.forEach(function(o) {
      logicShapes.clock.push(basicShape.clock.set({ x: o.x, y: o.y }, { name: o.name, state: o.state }));
    })


 // output   

    logicGenerateData.output.forEach(function(o) {
   
      basicShape.toLine.set({ x: o.x - baseOutputLine.offsetX, y: o.y + baseOutputLine.offsetY }, { "lineWidth": baseOutputLine.offsetX,"state":o.state });
      logicShapes.slot.push(basicShape.slot.set({ x: o.x + baseOutputLine.offsetX, y: o.y + baseOutputLine.offsetY }, { name: o.name, "state": o.state }));
      logicShapes.output.push(basicShape.output.set({ x: o.x, y: o.y }, { name: o.name, "state": o.state }));
    })
    // basicShape.line.set(logicShapes.clock[0], logicShapes.output[0]);


  }

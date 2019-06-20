var logicBoard = {
    "svg": null,
    "resource": {
        stroke: "#565656",
        lineThick: 10,
        strokeWidth: 2
    },
    "state": {
        "normal": { "fill": "#00dfdf", "gradient": "#00dfdf" },
        "grey": { "fill": "#cbcccc", "gradient": "#cbcccc" }
    },
    "basicShape": {
        "clock": {
            "set": function(point, option) { // {x,y} ,{state:normal}
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
            "set": function(point, option) { // {x,y} ,{state:normal}
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
        "line": {
            "set":function(shape1,shape2){


                debugger

            }

        }
    }
}
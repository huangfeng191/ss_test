function deleteShape(ele) {
    ele.parentElement.removeChild(ele)

}


var logic_start = function(x, y) {
        this.attr({ opacity: 1 });
        this.lastX = x;
        this.lastY = y;
    },
    logic_move = function(dx, dy, x, y) {
        // return 1
        var deltaX = x - this.lastX;
        var deltaY = y - this.lastY;

        var minTop = this.paper.canvas.parentElement.offsetTop;
        var paperHeight = this.paper.height;
        var shapeHeight = this.attrs.height / 2;
        var scrollTop = this.paper.canvas.parentElement.scrollTop;
        if (y < minTop + shapeHeight ||
            y + shapeHeight + scrollTop > minTop + paperHeight
        ) {
            deltaY = 0;
        }
        var minLeft = this.paper.canvas.parentElement.offsetLeft;
        var paperWidth = this.paper.width;
        var shapeWidth = this.attrs.width / 2;
        if (x < minLeft + shapeWidth ||
            x + shapeWidth > minLeft + paperWidth
        ) {
            deltaX = 0;
        }


        this.deltaX = deltaX;
        this.deltaY = deltaY;

        this.translate(deltaX, deltaY);
        this.lastX = x;
        this.lastY = y;

        for (var i = logicTopology.connections.length; i--;) {
            paper.connection(logicTopology.connections[i]);
            //  logicTopology.connections[i].line.mousedown=logicTopology.methods.bindRightMenu

        }


    },
    logic_up = function() {
        this.attr({ opacity: 0.8 });
        debugger
        // this.pair.attr({ x: this.lastX+20, y: this.lastY+25 });
        var position = this.getBBox();
        this.pair.attr({ x: position.x + 10, y: position.y + 25 });
    };





logicTopology = {
    doingLineStartId: null,
    draggableShapes: {
        creating: null,
        init: function() {

            $.each($(".logic-list-right img"), function(indexInArray, $el) {
                $el.ondragstart = function(e) {

                    logicTopology.draggableShapes.creating = {
                        "vendor": e.currentTarget.getAttribute("vendor")
                        // "id": "1",
                        // "position": { "left": 20, "top": 30 }
                    };
                }
                $el.ondragend = function(e) {
                    logicTopology.draggableShapes.creating = null;
                }

            });


        }
    },

    // "zNe": "db0ec7d6-69d0-44a3-9a09-746709b63287",
    // "pathName": "白广路GNSS97_PRC,北京白广路_PRC",
    // "isDelete": 0,
    // "aNe": "ccf837a3-f852-4c70-a1da-c4835a423d56",
    // "remark": "",
    // "id": "e1ebd7b4-704c-4eff-adf7-c0c73d5f3fa7",
    // "pathType": 1,
    // "timestamp": 1559109697000
    connections: [

    ],
    shapes: {},
    devices: [{
        "vendor": "ss",
        "name": "11",
        "id": "1",
        "position": { "left": 20, "top": 30 }
    }, {
        "vendor": "ss",
        "name": "22",
        "id": "2",
        "position": { "left": 120, "top": 30 }
    }, {
        "vendor": "ss",
        "name": "33",
        "id": "3",
        "position": { "left": 220, "top": 30 }
    }],
    methods: {
        bindRightMenu: function(handler) {
            if (handler.button == 2) {
                console.log("1" + handler.currentTarget.nodeName);
                if (handler.currentTarget.nodeName == "path") {

                }
                if (handler.currentTarget.nodeName == "image") {

                }
            }

            if (handler.button == 0) {
                if (handler.currentTarget.nodeName == "image") {

                    var shape = this.data("o");
                    if (logicTopology.doingLineStartId && shape.id && shape.id != logicTopology.doingLineStartId) {
                        var line = {
                            "startId": logicTopology.doingLineStartId,
                            "endId": shape.id
                        }
                        logicTopology.methods.doCreatingLine(line);
                    } else {
                        logicTopology.doingLineStartId = shape.id;
                    }
                }
            }

            // if(handler.)
        },
        creatingShape: function(x, option) {

            var position = x.position;
            var p = paper.image(imageConfig[x.vendor || "ss"], position.left, position.top, 20, 20);
            p.attr({ "fill": "green", 'opacity': 0.8 }).data("o", x);
            p.drag(logic_move, logic_start, logic_up);


            var position = p.getBBox();
            var t = paper.text(position.x + 10,
              position.y + 25,
                x.name).attr({
                cursor: 'pointer'
            });
            p.pair = t;



            p.mousedown(logicTopology.methods.bindRightMenu);


            logicTopology.shapes[x.id] = p;

        },
        doCreatingLine: function(line) {
            var shapes = logicTopology.shapes;
            if (shapes[line.startId] && shapes[line.endId]) {
                var flag = true;
                $.each(logicTopology.connections, function(oi, ov) {
                    if ((ov.from.data("o").id == line.startId &&
                            ov.to.data("o").id == line.endId) || (
                            ov.from.data("o").id == line.endId &&
                            ov.to.data("o").id == line.startId
                        )) {
                        flag = false;
                        return false;
                    }
                })
                if (flag == false) {
                    logicTopology.doingLineStartId = line.endId;
                    return;
                } else {
                    logicTopology.methods.creatingLine(line);
                }
            }

        },
        creatingLine: function(line, option) {
            var shapes = logicTopology.shapes;
            connection = paper.connection(shapes[line.startId], shapes[line.endId], "blue")
            connection.line.mousedown(logicTopology.methods.bindRightMenu);

            if (!option || option && option.certain) {
                logicTopology.connections.push(connection);
            }
            logicTopology.doingLineStartId = null;


        }
    },
    init: function() {
        logicTopology.draggableShapes.init();
        var paperDocument = document.getElementById("paper")

        $(document).on('contextmenu', function(e) {
            e.preventDefault();
        });



        paperDocument.ondragenter = function(e) {

            // 阻止浏览器默认行为
            e.preventDefault()
        }

        paperDocument.ondragover = function(e) {
            e.preventDefault()
        }
        paperDocument.ondrop = function(e) {

            var creating = logicTopology.draggableShapes.creating;
            if (creating) {

                creating.id = Math.random() * 1000 + ""
                creating.position = { "left": e.offsetX, "top": e.offsetY };
                logicTopology.methods.creatingShape(creating);
                logicTopology.draggableShapes.creating = null;
            }
            e.preventDefault()
        }


        imageConfig = {
            "ss": "../../images/net_topo/netNode1.png",
            "hw": "../../images/net_topo/netNode2.png",
            "dt": "../../images/net_topo/netNode3.png",
            "xt": "../../images/net_topo/netNode4.png",
            // "ss": "/nms/images/topo/net_topo/netNode1.png",
            // "hw": "/nms/images/topo/net_topo/netNode2.png",
            // "dt": "/nms/images/topo/net_topo/netNode3.png",
            // "xt": "/nms/images/topo/net_topo/netNode4.png",
        }




        // paper = Raphael("paper", 540 - 6, 540 - 6);
        // var height =540 - 8;
        // var width = 540 - 8;

        paper = Raphael("paper", paperDocument.clientWidth - 6, paperDocument.clientHeight - 6);

        var height = paperDocument.clientHeight - 8;
        var width = paperDocument.clientWidth - 8;
        // 取宽高 最小的为 园半径
        var WH = height > width ? width : height;
        var circleX = WH / 2 + 4
        var circleY = WH / 2 + 4
        var circleR = WH / 2 - 2

        // 最外的园
        var circle4 = paper.circle(circleX, circleY, circleR);
        circle4.attr("fill", "#f6f1cf");
        circle4.attr("stroke", "#ddd");

        // 第二层园
        var circle3 = paper.circle(circleX, circleY, circleR - 50);
        circle3.attr("fill", "#e9e4c4");
        circle3.attr("stroke-width", "0");

        // 第三层园
        var circle2 = paper.circle(circleX, circleY, circleR - 100);
        circle2.attr("fill", "#ebf1de");
        circle2.attr("stroke-width", "0");

        // 最内层园
        var circle1 = paper.circle(circleX, circleY, circleR - 150);
        circle1.attr("fill", "#d1dbae");
        circle1.attr("stroke-width", "0");




        connections = []
        logicTopology.shapes = {

        };
        logicTopology.devices.forEach(function(x) {
            logicTopology.methods.creatingShape(x);
        })




    }

}
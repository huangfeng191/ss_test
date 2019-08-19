Raphael.fn.connection = function(obj1, obj2, line, bg) {
    if (obj1.line && obj1.from && obj1.to) {
        line = obj1;
        obj1 = line.from;
        obj2 = line.to;
    }
    var bb1 = obj1.getBBox(),
        bb2 = obj2.getBBox(),
        p = [{ x: bb1.x + bb1.width / 2, y: bb1.y - 1 },
            { x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1 },
            { x: bb1.x - 1, y: bb1.y + bb1.height / 2 },
            { x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2 },
            { x: bb2.x + bb2.width / 2, y: bb2.y - 1 },
            { x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1 },
            { x: bb2.x - 1, y: bb2.y + bb2.height / 2 },
            { x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2 }
        ],
        d = {},
        dis = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 4; j < 8; j++) {
            var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
            if ((i == j - 4) || (((i != 3 && j != 6) || p[i].x < p[j].x) && ((i != 2 && j != 7) || p[i].x > p[j].x) && ((i != 0 && j != 5) || p[i].y > p[j].y) && ((i != 1 && j != 4) || p[i].y < p[j].y))) {
                dis.push(dx + dy);
                d[dis[dis.length - 1]] = [i, j];
            }
        }
    }
    if (dis.length == 0) {
        var res = [0, 4];
    } else {
        res = d[Math.min.apply(Math, dis)];
    }
    var x1 = p[res[0]].x,
        y1 = p[res[0]].y,
        x4 = p[res[1]].x,
        y4 = p[res[1]].y;
    dx = Math.max(Math.abs(x1 - x4) / 2, 10);
    dy = Math.max(Math.abs(y1 - y4) / 2, 10);
    // var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
    //   y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
    //   x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
    //   y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
    // 曲线
    // var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
    // 直线
    var path = ["M", x1.toFixed(3), y1.toFixed(3), "L", x4.toFixed(3), y4.toFixed(3)].join(",");
    if (line && line.line) {
        line.bg && line.bg.attr({ path: path });
        line.line.attr({ path: path });
    } else {
        var color = typeof line == "string" ? line : "#000";
        return {
            bg: bg && bg.split && this.path(path).attr({ stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3 }),
            line: this.path(path).attr({ stroke: color, "stroke-dasharray": "--", fill: "none" }),
            from: obj1,
            to: obj2
        };
    }
};


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

        var minTop = this.paper.canvas.parentElement.parentElement.offsetTop;
        var paperHeight = this.paper.height;
        var shapeHeight = this.attrs.height / 2;
        var scrollTop = this.paper.canvas.parentElement.parentElement.scrollTop;
        if (y < minTop + shapeHeight + 40 ||
            y + shapeHeight + scrollTop > minTop + paperHeight + 40
        ) {
            deltaY = 0;
        }
        var minLeft = this.paper.canvas.parentElement.parentElement.offsetLeft;
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

        // this.pair.attr({ x: this.lastX+20, y: this.lastY+25 });
        var position = this.getBBox();
        this.pair.attr({ x: position.x + 10, y: position.y + 25 });
    };





logicTopology = {

    "view": {
        "menuId": "logic_topology_menu",
        "initMenu": function() {
            _domId = "logic-topology";

            function hideContextMenu() {
                var menu = document.getElementById(logicTopology.view.menuId);
                menu.style.display = 'none';
            }

            var menuDiv = document.createElement('div');
            menuDiv.id = logicTopology.view.menuId;
            menuDiv.style.background = '#fff';
            menuDiv.style.zIndex = '999';
            menuDiv.style.position = 'absolute';
            menuDiv.style.width = '70px';
            menuDiv.style.borderRadius = '5px';
            menuDiv.style.boxShadow = '0 0 5px #000 inset';
            menuDiv.style.padding = '5px';
            menuDiv.style.textAlign = 'center';
            menuDiv.style.display = 'none';

            menuDiv.onmouseleave = function() {
                menuDiv.style.display = 'none';
            };

            var strokeBtn = document.createElement('div');
            strokeBtn.id = menuDiv.id + '_stroke';
            strokeBtn.style.width = '60px';
            strokeBtn.style.height = '25px';
            strokeBtn.innerText = '起点'; // 终点 
            strokeBtn.onmouseover = function() {
                this.style.background = '#ADD8E6';
            };
            strokeBtn.onmouseout = function() {
                this.style.background = '#fff';
            };
            strokeBtn.onclick = function() {
                var shape = $(this).offsetParent("#" + logicTopology.view.menuId).data("o");
                if (logicTopology.doingLineStartId && shape.id && shape.id != logicTopology.doingLineStartId) {
                    var line = {
                        "startId": logicTopology.doingLineStartId,
                        "endId": shape.id
                    }
                    logicTopology.methods.doCreatingLine(line);
                } else {
                    logicTopology.doingLineStartId = shape.id;
                }

                hideContextMenu();
                // make stroke ;

            };
            menuDiv.appendChild(strokeBtn);




            var syncBtn = document.createElement('div');
            syncBtn.id = menuDiv.id + '_syncBtn';
            syncBtn.style.width = '60px';
            syncBtn.style.height = '25px';
            syncBtn.innerText = '同步';
            syncBtn.onmouseover = function() {
                this.style.background = '#ADD8E6';
            };
            syncBtn.onmouseout = function() {
                this.style.background = '#fff';
            };
            syncBtn.onclick = function() {
                hideContextMenu();
                // /nms/spring/device/" + deviceID + "/syncAlarms",  row 1332 
            };
            menuDiv.appendChild(syncBtn);

            var editBtn = document.createElement('div');
            editBtn.id = menuDiv.id + '_editBtn';
            editBtn.style.width = '60px';
            editBtn.style.height = '25px';
            editBtn.innerText = '修改';
            editBtn.onmouseover = function() {
                this.style.background = '#ADD8E6';
            };
            editBtn.onmouseout = function() {
                this.style.background = '#fff';
            };
            editBtn.onclick = function() {};
            menuDiv.appendChild(editBtn);

            var delBtn = document.createElement('div');
            delBtn.id = menuDiv.id + '_delBtn';
            delBtn.style.width = '60px';
            delBtn.style.height = '25px';
            delBtn.innerText = '删除';
            delBtn.onmouseover = function() {
                this.style.background = '#ADD8E6';
            };
            delBtn.onmouseout = function() {
                this.style.background = '#fff';
            };
            delBtn.onclick = function() {
                var pathId = $(this).offsetParent("#" + logicTopology.view.menuId).data("pathId");

                if (pathId) {
                    $.each(logicTopology.connections, function(indexInArray, valueOfElement) {
                        if (valueOfElement.line.id == pathId) {
                            logicTopology.connections.splice(indexInArray, 1);
                            valueOfElement.line.remove();
                            hideContextMenu();
                            // for (var i = logicTopology.connections.length; i--;) {
                            //     paper.connection(logicTopology.connections[i]);
                            //     //  logicTopology.connections[i].line.mousedown=logicTopology.methods.bindRightMenu

                            // }
                        }
                    });
                } else {

                }
            };
            menuDiv.appendChild(delBtn);


            $($("#logic-topology #paper"))[0].append(menuDiv);
        },
        "bindMenu": function(handler, o) {

            var menu = document.getElementById(logicTopology.view.menuId);
            menu.style.display = "block";
            $(menu).data("o", o);
            var pageX = handler.offsetX + 20;
            var pageY = handler.offsetY + 20;
            menu.style.left = pageX + 'px';
            menu.style.top = pageY + 'px';
            menu.style.display = "block";
            if (handler.currentTarget.nodeName == "image") {
                $(menu).find("#" + logicTopology.view.menuId + "_syncBtn").css("display", "block");
                var flag = "起点";
                if (logicTopology.doingLineStartId && o.id != logicTopology.doingLineStartId) {
                    flag = "终点"
                }
                $(menu).find("#" + logicTopology.view.menuId + "_stroke").css("display", "block").html(flag);
            }
            if (handler.currentTarget.nodeName == "path") {
                $(menu).find("#" + logicTopology.view.menuId + "_syncBtn").css("display", "none")
                $(menu).find("#" + logicTopology.view.menuId + "_stroke").css("display", "none")
                $(menu).data("pathId", o.id);

            }

        }
    },
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
        "position": { "left": 120, "top": 80 }
    }, {
        "vendor": "ss",
        "name": "33",
        "id": "3",
        "position": { "left": 120, "top": 130 }
    }],
    methods: {
        doScale: function() {

        },
        bindRightMenu: function(handler) {
            if (handler.button == 2) {

                if (handler.currentTarget.nodeName == "path") {

                    logicTopology.view.bindMenu(handler, { "id": this.id });
                }
                if (handler.currentTarget.nodeName == "image") {
                    logicTopology.view.bindMenu(handler, this.data("o"));
                }
            }

            if (handler.button == 0) {
                if (handler.currentTarget.nodeName == "image") {


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
            var t = paper.text(position.x,
                position.y,
                x.name || "").attr({
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
        logicTopology.view.initMenu();
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
        var setW = 600;
        var setH = 540
        paper = Raphael("paper", setW, setH);
        var height = setH - 8;
        var width = setW - 8;
        // 
        // paper = Raphael("paper", paperDocument.clientWidth - 6, paperDocument.clientHeight - 6);
        // 
        // var height = paperDocument.clientHeight - 8;
        // var width = paperDocument.clientWidth - 8;


        var back1 = paper.rect(0, 0, setW, setH)
            .attr({
                "stroke": "blue",
                "stroke-width": 0,
                "fill": "#e1e1e1"
            })




        // 取宽高 最小的为 园半径
        var WH = height > width ? width : height;
        var circleX = WH / 2 + 4 + 30
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




        var back = paper.set();
        back.push(back1, circle1, circle2, circle3, circle4)
        back.hover(
            function() {
                //鼠标进入背景
                logicTopology.mouseOnBackGround = true;
            },
            function() {
                //鼠标移出背景
                logicTopology.mouseOnBackGround = false;
            }
        );

        logicTopology.back = back;

        logicTopology.scale = {
            "x": 0,
            "y": 0,
            "w": setW,
            "h": setH,
            "coef": 0.1,
            "zoom": 1
        }
        logicTopology.endScale = {
            x: null,
            y: null
        }
        
        logicTopology.minSize=0.5;
        logicTopology.maxSize=3;

        logicTopology.updateScale = function(x, y, w, h) {

            logicTopology.scale.x = x;
            logicTopology.scale.y = y;
            if (w) {
                logicTopology.scale.w = w;
                logicTopology.scale.h = h;
            }
        }



        var onBackMove = function(dx, dy, x, y) {
            console.log("dx:" + dx, "dy" + dy + "x:" + x, "y" + y);
            // debugger
            var w = setW / logicTopology.scale.zoom;
            var h = setH / logicTopology.scale.zoom;


            var nX = logicTopology.scale.x + dx;
            var nY = logicTopology.scale.y + dy;
            logicTopology.endScale["x"] = nX
            logicTopology.endScale["y"] = nY

            paper.setViewBox(-nX, -nY, w, h, false)
        }


        var onBackStart = function(x, y, event) {}

        var onBackEnd = function(event) {
            logicTopology.updateScale(logicTopology.endScale.x, logicTopology.endScale.y);
        }



        back.drag(onBackMove, onBackStart, onBackEnd)





        function onMouseWheeling(e) {
            var dtl;
            if (!logicTopology.mouseOnBackGround) {
                return;
            }

            if (e.wheelDelta) { //chrome
                dtl = e.wheelDelta;
            } else if (e.detail) { //firefox or others
                dtl = -e.detail;
            }

            if (dtl < 0) {
                //缩小,
                if (logicTopology.scale.zoom < logicTopology.minSize) {
                    return;
                }
                logicTopology.scale.zoom -= logicTopology.scale.coef;
            } else {
                //放大
                if (logicTopology.scale.zoom > logicTopology.maxSize) {
                    return;
                }
                logicTopology.scale.zoom += logicTopology.scale.coef;
            }


            var w = setW / logicTopology.scale.zoom;
            var h = setH / logicTopology.scale.zoom;


            var nX = logicTopology.scale.x;
            var nY = logicTopology.scale.y;
            paper.setViewBox(-nX, -nY, w, h, false)




        };


        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', onMouseWheeling, false);
            window.onmousewheel = document.onmousewheel = onMouseWheeling; //IE/Opera/Chrome/Safari
        } else {
            alert("鼠标滚轮监听事件绑定失败");
        }





        logicTopology.getLastCenterPoint = function() {
            var centerPoint = {};
            logicTopology.centerPoint.x = logicTopology.scale.x + logicTopology.scale.w / 2;
            logicTopology.centerPoint.y = logicTopology.scale.y + logicTopology.scale.h / 2;

            return centerPoint;
        }



        connections = []
        logicTopology.shapes = {

        };
        // logicTopology.devices.forEach(function(x) {
        //     logicTopology.methods.creatingShape(x);
        // })




    }

}
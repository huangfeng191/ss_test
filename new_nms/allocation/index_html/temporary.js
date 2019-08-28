//     device/page  ->  

//    /nms/spring/viewData?areaId=(获取设备的拓扑信息，on the basis of deviceIp  )   

//  eMap get 
//    /nms/spring/device/parents?type=all get device area infos   into  myData    setPointData(eMap.js)
//  /nms/spring/viewData/getAllGroup  query all 网元组 
{
    var mauto = {
        token: sessionID,
        page: '',
        pageSize: 200,
        name: '',
        ip: '',
        deviceStatus: '',
        areaId: '',
        user: 'admin',
        deviceType: '',
        NEType: '',
        Vendor: ''
    }
    $.ajax({
        url: '/nms/spring/device/page',
        headers: { 'token': sessionID },
        type: "GET",
        async: false,
        data: mauto,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        success: function(result) {
            $.ajax({
                url: '/nms/spring/viewData?areaId=',
                headers: { 'token': sessionID },
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                success: function(results) {
                    $.ajax({
                        url: "/nms/spring/device/parents?type=all&token=" + sessionID,
                        headers: { 'token': sessionID },
                        type: "GET",
                        async: false,
                        dataType: "json",
                        contentType: "application/json;charset=UTF-8",
                        success: function(resultType) {
                            console.log(result);
                            var data = result.data.content;
                            var phyData = results.data;
                            var myData = new Array();
                            for (var j = 0; j < phyData.length; j++) {
                                for (var i = 0; i < data.length; i++) {
                                    for (var k = 0; k < resultType.data.length; k++) {
                                        var resultData = resultType.data[k].children
                                        for (var n = 0; n < resultData.length; n++) {
                                            if (data[i].ip == phyData[j].ip && resultData[n].ip == phyData[j].ip) {
                                                var obj = new Object();
                                                var deviceObj = new Object();
                                                obj.name = data[i].name;
                                                var valArr = new Array();
                                                valArr[0] = phyData[j].phyX;
                                                valArr[1] = phyData[j].phyY;
                                                deviceObj.type = data[i].NEType;
                                                deviceObj.id = data[i].id;
                                                deviceObj.group = data[i].deviceType;
                                                deviceObj.parent = "abcd-200";
                                                deviceObj.status = resultData[n].type;
                                                deviceObj.value = 160;
                                                deviceObj.company = "1";
                                                deviceObj.ip = data[i].ip;
                                                deviceObj.clockLevel = 2;
                                                deviceObj.model = "V1.0";
                                                deviceObj.nodeOrDevice = "1";
                                                deviceObj.warningNum = resultData[n].alarmsCount;
                                                valArr[2] = deviceObj
                                                obj.value = valArr;
                                                myData.push(obj);
                                                if (top.SsCenter) {
                                                    top.SsCenter.setDeviceOne({ "id": deviceObj.id, "status": deviceObj.status, "alarmsCount": deviceObj.warningNum });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            //查询所有网元组
                            $.ajax({
                                url: "/nms/spring/viewData/getAllGroup",
                                headers: { 'token': sessionID },
                                type: "GET",
                                async: false,
                                dataType: "json",
                                contentType: "application/json;charset=UTF-8",
                                success: function(result) {
                                    var data = result.data;
                                    for (var i = 0; i < data.length; i++) {
                                        var obj = new Object();
                                        obj.name = data[i].groupName;
                                        var nodeGroupObj = new Object();
                                        var valArr = new Array();
                                        valArr[0] = data[i].xCoordinate;
                                        valArr[1] = data[i].yCoordinate;
                                        nodeGroupObj.id = data[i].id;
                                        nodeGroupObj.type = "NEG";
                                        nodeGroupObj.status = "greent";
                                        nodeGroupObj.nodeOrDevice = "2";
                                        nodeGroupObj.groupAddress = data[i].groupAddress;
                                        nodeGroupObj.remark = data[i].remark;
                                        valArr[2] = nodeGroupObj
                                        obj.value = valArr;
                                        myData.push(obj);
                                    }
                                },
                                error: function(XMLHttpRequest, textStatus, errorThrown) { // 状态码
                                    debugger;
                                    console.log(XMLHttpRequest.status);
                                    // 状态
                                    console.log(XMLHttpRequest.readyState);
                                    // 错误信息   
                                    console.log(textStatus);
                                }
                            });
                            console.log(JSON.stringify(myData));
                            var dom = document.getElementById("container");
                            var myChart = new eMap();
                            myChart.init(dom);
                            myChart.showMap('china');
                            setTimeout(function() {
                                myChart.setPointData(myData);
                                window.onresize = function() {
                                    myChart.resize();
                                }
                            }, 200);
                            var areaFlag = [{
                                '安徽': 'anhui',
                                '澳门': 'aomen',
                                '北京': 'beijing',
                                '重庆': 'chongqing',
                                '福建': 'fujian',
                                '甘肃': 'gansu',
                                '广东': 'guangdong',
                                '广西': 'guangxi',
                                '贵州': 'guizhou',
                                '海南': 'hainan',
                                '河北': 'hebei',
                                '黑龙江': 'heilongjiang',
                                '河南': 'henan',
                                '湖北': 'hubei',
                                '湖南': 'hunan',
                                '江苏': 'jiangsu',
                                '江西': 'jiangxi',
                                '吉林': 'jilin',
                                '辽宁': 'liaoning',
                                '内蒙古': 'neimenggu',
                                '宁夏': 'ningxia',
                                '青海': 'qinghai',
                                '山东': 'shandong',
                                '上海': 'shanghai',
                                '山西': 'shanxi',
                                '陕西': 'shanxi1',
                                '四川': 'sichuan',
                                '台湾': 'taiwan',
                                '天津': 'tianjin',
                                '香港': 'xianggang',
                                '新疆': 'xinjiang',
                                '西藏': 'xizang',
                                '云南': 'yunnan',
                                '浙江': 'zhejiang'
                            }];
                            myChart.on('click', function(params) {
                                if (!params.seriesType && myChart.geteMap().getOption().geo[0].map == 'china') {
                                    console.log(params.name);
                                    console.log(areaFlag[0][params.name]);
                                    if (params.name) {
                                        console.log(this._dom.id);
                                        __eMapGlobalVar[this._dom.id + '_eMapMenu'].curChart.showMap(areaFlag[0][params.name]);
                                    }
                                }
                            });
                            myChart.on('addLine', function(newLine, params) {
                                var data = newLine.coords
                                var dataLength = data.length - 1;
                                var aNodeLink = data[0];
                                var nodeArr = new Array();
                                $("#myChartAddLine").off("click");
                                $("#myChartAddLine").on("click", function() {
                                    var nodeDetail = $("#nodeDetail").val();
                                    var nodeName = nodeDetail.split("-");
                                    for (var i = 0; i < data.length - 1; i++) {
                                        var obj = new Object();
                                        var aNodeLinks = data[i];
                                        var aNodeIp = data[0];
                                        var aNodes = parseFloat(aNodeLinks[0]).toFixed(2) + "," + parseFloat(aNodeLinks[1]).toFixed(2);
                                        obj.aNode = aNodeIp[2];
                                        var zNodeLinks = data[i + 1];
                                        var zNodes = parseFloat(zNodeLinks[0]).toFixed(2) + "," + parseFloat(zNodeLinks[1]).toFixed(2);
                                        obj.zNode = params.data.value[2].ip;
                                        obj.aSlot = zNodes;
                                        obj.aPort = aNodes;
                                        obj.zSlot = "";
                                        obj.zPort = "";
                                        obj.linkName = nodeName[i];
                                        obj.linkStatus = $("#linkStatus").val();
                                        obj.linkType = 2;
                                        nodeArr.push(obj);
                                    }
                                    console.log(JSON.stringify(nodeArr));
                                    var aNode = aNodeLink[2];
                                    var zNode = params.data.value[2].ip;
                                    var pathName = aNodeLink[3] + "," + params.name;
                                    addLink(aNode, zNode, nodeArr, pathName);
                                    console.log(params);
                                    console.log('addLine');


                                });
                                $("#eInput").val(aNodeLink[3]);
                                $("#eOutput").val(params.name);
                                $("#linkStatus").val(0);
                                $("#systemName").val(aNodeLink[3] + "," + params.name);
                                $('#myModal_btn').click();
                                console.log(newLine);
                            });
                            myChart.on('editLine', function(editLine, params) {
                                console.log(params);
                                console.log('editLine');
                                console.log(editLine);
                                $('#myModal_btn').click();
                            });
                            myChart.on('syncClick', function(syncClick, params) {
                                var syncId = syncClick.data.value[2].id;
                                synchronousDevice(syncId);
                            });
                            myChart.on('addPoint', function(newPoint, params) {
                                if (newPoint.name == "PRC" || newPoint.name == "LPR" || newPoint.name == "SSUT" || newPoint.name == "SSUL") {
                                    $("#myAddModalLabel").html("设备添加");
                                    $("#judge").val(1)
                                    console.log(params);
                                    $("#longitude").attr("value", newPoint.value[0].toFixed(2));
                                    $("#latitude").attr("value", newPoint.value[1].toFixed(2));
                                    $("#neType").find("option[value='" + newPoint.name + "']").attr("selected", true);
                                } else {
                                    $("#groupPhyX").attr("value", newPoint.value[0].toFixed(2));
                                    $("#groupPhyY").attr("value", newPoint.value[1].toFixed(2));
                                }
                                console.log('addPoint');
                                if ("网元组" == newPoint.name) $('#myModal3_btn').click();
                                else $('#myModal2_btn').click();
                                console.log(newPoint);
                            });
                            myChart.on('editPoint', function(editPoint, params) {
                                $("#myAddModalLabel").html("设备编辑");
                                $("#judge").val(2);
                                $("#longitude").attr("value", editPoint.value[0]);
                                $("#latitude").attr("value", editPoint.value[1]);
                                $("#name").attr("value", editPoint.name);
                                $("#neType").find("option[value='" + editPoint.value[2].type + "']").attr("selected", true);
                                $("#ip").val(editPoint.value[2].ip);
                                $("#ip").attr("readOnly", "true");
                                $("#name").val(editPoint.name);
                                $("#name").attr("readOnly", "true");
                                $("#deviceType").val(editPoint.value[2].group);
                                var deviceType = editPoint.value[2].group;
                                var siteName = editPoint.name;
                                var arrSiteName = "";
                                if (deviceType == 'SM2000') {
                                    arrSiteName = siteName.split("SM2000");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                } else if (deviceType == 'SM2000_GN') {
                                    arrSiteName = siteName.split("SM2000_GN");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                } else if (deviceType == 'SYNLOCKV3') {
                                    arrSiteName = siteName.split("SYNLOCKV3");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                } else if (deviceType == 'GNSS97') {
                                    arrSiteName = siteName.split("GNSS97");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                } else if (deviceType == 'TSG3800') {
                                    arrSiteName = siteName.split("TSG3800");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                } else if (deviceType == 'TP1100') {
                                    arrSiteName = siteName.split("TP1100");
                                    $("#siteName").find("option[value='" + arrSiteName[0] + "']").attr("selected", true);
                                }
                                console.log(params);
                                console.log('editPoint');
                                console.log(editPoint);
                                if ("NEG" == params.data.value[2].type) $('#myModal3_btn').click();
                                else $('#myModal2_btn').click();
                            });
                            myChart.on('removePoint', function(params) {
                                var delDeviceId = params.value[2].id;
                                var nodeOrDevice = params.value[2].nodeOrDevice;
                                if (nodeOrDevice == "1") {
                                    deleteDevice(delDeviceId);
                                } else {
                                    deleteNodeGroup(delDeviceId);
                                }
                                console.log(params);
                                //params.Cancel=true;//取消操作
                                params.Cancel = false;
                            });
                            myChart.on('removeLine', function(params) {
                                var aNode = params.data.info.aNode;
                                var zNode = params.data.info.zNode;
                                deleteTopoLink(aNode, zNode);
                                console.log(params);
                            });
                            var data = {
                                "path": {}
                            }
                            $.ajax({
                                url: '/nms/spring/viewData/getAllVOPath',
                                headers: { 'token': sessionID },
                                type: "POST",
                                async: false,
                                data: JSON.stringify(data),
                                dataType: "json",
                                contentType: "application/json;charset=UTF-8",
                                success: function(result) {
                                    var linkData = new Array();
                                    for (var i = 0; i < result.length; i++) {
                                        var pathLinkIdList = result[i].pathLinkIdList || [];
                                        for (var j = 0; j < pathLinkIdList.length; j++) {
                                            if (result[i].path.aNe == pathLinkIdList[j].aNode && result[i].path.zNe == pathLinkIdList[j].zNode) {
                                                var nodeObj = new Object();
                                                var objInfo = new Object();
                                                var nodeArrALL = new Array();
                                                var zNodeArr = new Array();
                                                var linkName = "";
                                                var pathName = result[i].path.pathName.split(',');
                                                var aNodeSplit = pathLinkIdList[j].aPort.split(",");
                                                var zNodeSplit = pathLinkIdList[j].aSlot.split(",");
                                                nodeArrALL.push(aNodeSplit);
                                                zNodeArr.push(zNodeSplit);
                                                nodeArrALL = nodeArrALL.concat(zNodeArr);
                                                nodeObj.coords = nodeArrALL;
                                                objInfo.id = pathLinkIdList[j].id;
                                                objInfo.aNode = pathLinkIdList[j].aNode;
                                                objInfo.zNode = pathLinkIdList[j].zNode;
                                                objInfo.group = "123";
                                                objInfo.parent = "abcd-200";
                                                objInfo.port = pathName[0];
                                                objInfo.outPort = pathName[1];
                                                objInfo.status = "Normal";
                                                objInfo.systemName = result[i].path.pathName;
                                                for (var k = 0; k < pathLinkIdList.length; k++) {
                                                    linkName += pathLinkIdList[k].linkName + "-"
                                                }
                                                var newLinkName = linkName.substring(0, linkName.length - 1);
                                                objInfo.info = newLinkName;
                                                objInfo.childrenNum = 3;
                                                nodeObj.info = objInfo;
                                                linkData.push(nodeObj);
                                            }
                                        }

                                    }
                                    console.log(JSON.stringify(linkData));
                                    myChart.setLineData(linkData);
                                },
                                error: function(XMLHttpRequest, textStatus, errorThrown) { // 状态码
                                    console.log(XMLHttpRequest.status);
                                    // 状态
                                    console.log(XMLHttpRequest.readyState);
                                    // 错误信息   
                                    console.log(textStatus);
                                }
                            });

                            console.log(lineData);
                            myChart.highlight(2);

                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { // 状态码
                            debugger;
                            console.log(XMLHttpRequest.status);
                            // 状态
                            console.log(XMLHttpRequest.readyState);
                            // 错误信息   
                            console.log(textStatus);
                        }
                    });

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息   
                    console.log(textStatus);
                }
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            // 状态码
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 错误信息   
            console.log(textStatus);
        }
    });
}














setPointData(myData);
myData = [
    {
        "name": "白广路SM2000_LPR",
        "value": ["107.19", "35.17",
            { "type": "LPR", "id": "951d1cef-08f1-4185-9b0a-e512855544bb", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.5", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1 }
        ]
    },
    {
        "name": "白广路SM2000_PRC",
        "value": ["105.02", "33.39",
            { "type": "PRC", "id": "0e575aed-32d4-4b76-b154-15f6a98a1e91", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.1.99", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1 }
        ]
    },
    {
        "name": "白广路SM2000_LPR",
        "value": ["87.77", "34.67",
            { "type": "LPR", "id": "1d295901-3745-44d5-88a6-c9e51bba5d95", "group": "SM2000", "parent": "abcd-200", "status": "red", "value": 160, "company": "1", "ip": "192.168.1.33", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 27 }
        ]
    },
    {
        "name": "白广路SM2000_PRC98",
        "value": ["100.86", "39.25",
            { "type": "PRC", "id": "59235199-4190-4dcb-a907-fb5fea870d5b", "group": "SM2000", "parent": "abcd-200", "status": "gery", "value": 160, "company": "1", "ip": "192.168.99.98", "clockLevel": 2, "model": "V1.0", "nodeOrDevice": "1", "warningNum": 1 }
        ]
    }
]






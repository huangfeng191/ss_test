function onMessage(evt) {
    if (!evt || !evt.data || evt.data.length < 0) {return;}
    var res = evt.data,
        obj = JSON.parse(res),
        code = obj.code;
    if (code == "100000") {
        if (!obj.prompt && obj.data) {
            console.log(obj);
            var device = (obj.data.device.id).replace(/[#$%^&*!-]/g, '');
            var tipshow = $("#tip" + device);
            var desc = $("#desc" + device);
            tipshow.show();
            desc.text(obj.data.activeAlarmDesc);
            $timeout(function() {
                tipshow.hide();
            }, 6000)
        }
        if (!obj.data) {
            return;
        }
        var ooo = obj.data;
        if (ooo.activeAlarmDesc) {
            var desc_ = ooo.activeAlarmDesc;
            if (desc_.indexOf("loss of signal") > -1 || desc_.indexOf("disqualified as system reference") > -1) {

                if (window.location.hash.indexOf("#/index/") === -1) {
                    var o = {};
                    o.areaId = $scope.tuopuAreaId || "";
                    publicService.doRequest("GET", "/nms/spring/viewData", o).success(function(r) {
                        $scope.tuopoData = {};
                        $scope.tuopoData.data = JSON.parse(r.data);
                        jsPlumbas($scope, publicService, ngDialog, '', $translate, ooo);
                    });
                }
            }
        }

    } else if (code === "100002") { //扩展机框
        var data = obj.data;
        console.log("100002")
        updataExpData(data)
    } else if (code === "100003") { //主机框
        if ($scope.flag == "shil") {
            frameListFun($scope.curDevId, $scope.shelfind, $scope.deviceType)
        }
    } else if (code === "100041") { //设备上线
        var data = obj.data;
        updataTreeData(data, code);
        if (publicService._JTopo) {
            var allElements = publicService._JTopo.scene.getDisplayedElements();
            for (var i = 0; i < allElements.length; i++) {
                if (allElements[i].elementType === "node" && allElements[i].deviceModel.id == data.id) {
                    allElements[i].setImage(newTupoImg(allElements[i].deviceModel.img)["onLine"], true);
                    allElements[i].deviceModel.deviceStatus = 1;
                    allElements[i].deviceModel.type = "greent";
                }
            }
        }
    } else if (code === "100042") { //设备离线
        var data = obj.data;
        updataTreeData(data, code);
        if (publicService._JTopo) {
            var allElements = publicService._JTopo.scene.getDisplayedElements();
            for (var i = 0; i < allElements.length; i++) {
                if (allElements[i].elementType === "node" && allElements[i].deviceModel.id == data.id) {
                    allElements[i].setImage(newTupoImg(allElements[i].deviceModel.img)["offLine"], true);
                    allElements[i].deviceModel.deviceStatus = 0;
                    delete allElements[i].alarm;
                    allElements[i].deviceModel.type = "gery";
                }
            }
        }
    } else if (code === "100005") { //扩展机框
        if ($scope.flag == "shil") {
            frameListFun($scope.curDevId, $scope.shelfind, $scope.deviceType)
        }
    } else if (code === "100009") {
        console.log(obj)
        var data = obj.data;
        updataTreeData(data, "100009");
        if (window.location.hash.indexOf("#/index/") === -1) {
            var o = {};
            o.areaId = $scope.tuopuAreaId || "";
            publicService.doRequest("GET", "/nms/spring/viewData", o).success(function(r) {
                $scope.tuopoData = {};
                $scope.tuopoData.data = JSON.parse(r.data);
                jsPlumbas($scope, publicService, ngDialog, '', $translate, ooo);
            });
        }
    } else if (code === "100011") {
        publicService.ngAlert(obj.msg);
    } else if (code === "100020") {
        publicService.ngAlert(obj.msg);
    } else if (code === "100008") {
        var data = obj.data;
        updataTreeData(data, '100008');
        if (publicService._JTopo) {
            var allElements = publicService._JTopo.scene.getDisplayedElements();
            for (var i = 0; i < allElements.length; i++) {
                if (allElements[i].elementType === "node" && allElements[i].deviceModel.id == data.id) {
                    if (eveLevelColor(data.activeAlarmLevel) == "red") {
                        allElements[i].alarmColor = "214,15,15"
                    } else if (eveLevelColor(data.activeAlarmLevel) == "pink") {
                        allElements[i].alarmColor = '241, 147, 30'
                    } else if (eveLevelColor(data.activeAlarmLevel) == "yellow") {
                        allElements[i].alarmColor = '204,218,15'
                    } else if (eveLevelColor(data.activeAlarmLevel) == "gery") {
                        delete allElements[i].alarm;
                        allElements[i].setImage(_self.offLineImg(obj.img), true);
                    } else if (eveLevelColor(data.activeAlarmLevel) == "greent") {
                        allElements[i].alarmColor = '0, 0, 0'
                    }
                    allElements[i].deviceModel.type = eveLevelColor(data.activeAlarmLevel);
                    allElements[i].deviceModel.alarmsCount = data.alarmsCount;
                }
            }
            // publicService._JTopo.saveDate();
        }
    } else if (code === "100010") {
        ngTip.tip(obj.msg, "info")
            /*                    var userAgent = navigator.userAgent;
                           if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
                                window.open('http://' + location.hostname +'/nms/index.html');
                           } else {
                               window.opener = null;
                               window.open("", "_self");
                               window.close();
                           }*/
    } else if (code === "100099" || code === "100021") {
        /*   var par = document.getElementById('popover');
           if(par){
             angular.element(par).addClass('popoverS');
           }*/
        ngTip.tip(obj.msg, "info")
        console.log(obj);
        //7200设备升级信息返回
    } else if (code === "100015") {
        console.log("100015");
        console.log(obj);
        if ($scope.flag == "shil") {
            console.log("shil");
            frameListFun($scope.curDevId, $scope.shelfind, $scope.deviceType)
            console.log("end");
        }
    } else if (code === "100003") {
        $state.go("index");
        ngTip.tip(obj.msg, "info", 7200000)
    } else if (code === "100030") {
        $state.go("login");
        ngTip.tip(obj.msg, "info")
    } else if (code === "100022") { //100022还原数据库
        ngTip.tip(obj.msg, "info")
    }
}
模板     TDEV    MTIE

PerformanceType
    0 MTIE
    1 TDEV
    2 FREQ
    3 Phase1M

PerformanceModelType (if performanceType in (0 ,1 ))
    1 G811
    2 G812

Port     
/nms/spring/deviceConfig/" + m.id + "/getPerformancePortList


设备  deviceId 
类型 performanceFrameM c  Performance_PerformanceType 
端口 port    
展示日期 endTime 
模板 modelType c PerformanceModelType


// 

obj = {
    deviceId: devId,
    type: url,
    stratTime: self.endTime || "",//只查询一天内的性能数据
    endTime: self.endTime || "",
    port: self.port || "",
    limit: time
}

/nms/spring/performances/getForChart?token=04F7C067CD2A1BB2A9A3116A555804E2&
deviceId=dcd44ff7-9129-4802-b456-f3f73113cdf9&
endTime=2019-06-13&
limit=13&
port=Slot1-1&
stratTime=&
type=mtie




function(r) {
    if (r.data && r.data.length > 0) {
        var d = r.data;
        if($scope.performanceFrameM == 0 || $scope.performanceFrameM == 1){
            var objs = {};
            objs.data = d[0].coordinate;
            objs.name = ($rootScope.LANG == 'ch'?'数值':'value');
            data.push(objs);
            var labelData = d[0].x;
        }else{
            var objs = {};
            objs.data = d[0].y;
            objs.name = ($rootScope.LANG == 'ch'?'数值':'value');
            data.push(objs);
            var labelData = d[0].x;
        }
    } else {
        data = 0;
    }
    if (labelData) {
        loadChart(data, labelData);
    } else {
        loadChart(0, 0);

    }
}




function loadChart(y, x) {
    if ($scope.performanceFrameM == 0) {
        var chartName = 'MTIE';
    } else if ($scope.performanceFrameM == 1) {
        var chartName = 'TDEV';
    } else if ($scope.performanceFrameM == 2) {
        var chartName = 'FREQ';
    } else if ($scope.performanceFrameM == 3) {
        var chartName = 'Phase1M';
    }
    y == 0 ? datay = [{
        name: $rootScope.LANG=='ch'?'数值':'Value',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }] : datay = y;

    if ($scope.performanceFrameM == 0) {// 初始化MTIE模板数据
        if($scope.modelType == 1){
            var arr = [[1,25.3], [4,26.1], [10,27.8], [40,36.0], [100,52.5], [300,126.6], [900,283.5], [1800,309.4], [3600,324.8], [7200,383.7], [14400,413.3], [28800,569.9], [86400,930.6]];
        }else{
            var arr = [[1,24], [4,24], [10,24], [40,50.6], [100,80], [300,133.5], [900,160], [1800,160], [3600,160], [7200,160], [14400,160], [28800,160], [86400,160]];
        }
        var baseData = {
            name: $rootScope.LANG=='ch'?'模版':'Template',
            data: arr
        };
        if(y==0){
            datay = [{
                name: $rootScope.LANG=='ch'?'数值':'Value',
                data: [[1,0], [4,0], [10,0], [40,0], [100,0], [300,0], [900,0], [1800,0], [3600,0], [7200,0], [14400,0], [28800,0], [86400,0]]
            }]
        }
        datay.push(baseData);
    } else if ($scope.performanceFrameM == 1) {// 初始化TDEV模板数据
        if($scope.modelType == 1){
            var arr = [[1,3], [2,3], [4,3], [8,3], [16,3], [32,4.5], [64,15], [128,30], [256,30], [512,30], [1024,30]];
        }else{
            var arr = [[1,3], [2,3], [4,3], [8,4.8], [16,3], [32,4.5], [64,12], [128,12], [256,12], [512,12], [1024,12]];
        }
        var baseData = {
            name: $rootScope.LANG=='ch'?'模版':'Template',
            data: arr
        };
        if(y==0){
            datay = [{
                name: $rootScope.LANG=='ch'?'数值':'Value',
                data: [[1,0], [2,0], [4,0], [8,0], [16,0], [32,0], [64,0], [128,0], [256,0], [512,0], [1024,0]]
            }]
        }
        datay.push(baseData);
    }
    if ($scope.performanceFrameM == 2 || $scope.performanceFrameM == 3) {
        x == 0 ?  datax = arr : datax = arr;
        var tmp_name = $rootScope.LANG=='ch'?'性能图表':'PerformancesChart'
            $('#containerPer').highcharts({
            title: {
                text: chartName + tmp_name,
                x: -20
            },
            xAxis: {
                title: {
                    text: '/s'
                },
                gridLineWidth: 1,
                categories: x,
            },
            yAxis: {
                title: {
                    text: '/ns'
                },
                gridLineWidth: 1,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '/ns'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: datay
        });
    } else if($scope.performanceFrameM == 0) {
        var tmp_name = $rootScope.LANG=='ch'?'性能图表':'PerformancesChart';
        $('#containerPer').highcharts({
            title: {// 标题
                text: chartName + tmp_name
            },
            xAxis: {// x轴设置
                type: 'logarithmic',// 对数
                min: 1,
                max:100000,
                endOnTick: false,
                tickInterval: 1,
                gridLineWidth: 1,
                title: {
                    text: '/s'
                }
            },
            yAxis: {// y轴设置
                title: {
                    text: '/ns'
                },
                type: 'logarithmic',
                minorTickInterval: 10,
                min: 1,
                labels: {
                    format: '{value}'
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'x={point.x}/s,y = {point.y}/ns'
            },
            // 数据
            series: datay
        });
    } else if($scope.performanceFrameM == 1) {
        var tmp_name = $rootScope.LANG=='ch'?'性能图表':'PerformancesChart';
        $('#containerPer').highcharts({
            title: {// 标题
                text: chartName + tmp_name
            },
            xAxis: {// x轴设置
                type: 'logarithmic',// 对数
                min: 1,
                max:10000,
                endOnTick: false,
                tickInterval: 1,
                gridLineWidth: 1,
                title: {
                    text: '/s'
                }
            },
            yAxis: {// y轴设置
                title: {
                    text: '/ns'
                },
                type: 'logarithmic',
                minorTickInterval: 10,
                min: 0.1,
                labels: {
                    format: '{value}'
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'x={point.x}/s,y = {point.y}/ns'
            },
            // 数据
            series: datay
        });
    }else {
        var tmp_name = $rootScope.LANG=='ch'?'性能图表':'PerformancesChart'
        $('#containerPer').highcharts({
            title: {
                text: chartName + tmp_name
            },
            xAxis: {
                title: {
                    text: '/s'
                },
                gridLineWidth: 1,
                tickInterval: 1,
                categories: ['0.1','2','4','10', '21', '45', '100', '213', '457', '1000', '2137', '4570', '10000', '21379', '45708', '100000', ]
            },
            yAxis: {
                title: {
                    text: '/ns'
                },
                type: 'logarithmic',
                minorTickInterval: 0.1
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'y = {point.y}/ns'
            },
            series: datay
        });
    }
}






// 配置




$scope.paginationConf = {
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 10,
    pagesLength: 15,
    perPageOptions: [10, 20, 30, 40, 50],
    rememberPerPage: 'perPageItems',
    onChange: function(self){
        if(!self) return;
        var _self = this,
            obj = {
            page : _self.currentPage || 1,
            pageSize : _self.itemsPerPage,    
            deviceId : self.seachMod.deviceId || "",
            performanceType : self.seachMod.performanceType  || "",
            port : self.seachMod.port  || ""
        };
        publicService.loading('start');
        publicService.doRequest("GET", "/nms/spring/performances/pMP/page", obj).success(function(r){
            $scope.performanceConfigList = r.data.content;
            _self.currentPage = parseInt(r.data.number + 1);
            _self.totalItems = r.data.totalElements;
            _self.itemsPerPage = r.data.size;
        })
    }
}



// 性能设置
performanceConfig.html

设备 deviceName  c XXX
端口 port 
类型 performanceType c PerformanceType
检测周期 monitorPeriod
检测状态 monitorStatus  NotYes
监测开始时间 monitorStartTime d 
监测结束时间 monitorEndTime d 
是否自动上报 autoTrapFlag c NotYes

    操作 operate   edit: performanceConfigEditAdd(item)  delete :performanceConfigDel(item)

<tr ng-repeat="item in performanceConfigList">
    <td class="t-middle ng-block">{{item.device.name}}</td>
    <td class="t-middle ng-block">{{item.port}}</td>
    <td class="t-middle ng-block">{{item.performanceType}}</td>
    <td class="t-middle ng-block">{{item.monitorPeriod}}</td>
    <td translate="NO" class="t-middle ng-block" ng-if="item.monitorStatus === 0">否</td>
    <td translate="YES" class="t-middle ng-block" ng-if="item.monitorStatus !== 0">是</td>
    <td class="t-middle ng-block">{{item.monitorStartTime | date:"yyyy-MM-dd HH:mm:ss"}}</td>
    <td class="t-middle ng-block">{{item.monitorEndTime | date:"yyyy-MM-dd HH:mm:ss"}}</td>
    <td translate="NO" class="t-middle ng-block" ng-if="item.autoTrapFlag === 0">否</td>
    <td translate="YES" class="t-middle ng-block" ng-if="item.autoTrapFlag !== 0">是</td>
    <td class="text-center">
        <span title="edit" ng-click="performanceConfigEditAdd(item)" class="glyphicon glyphicon-cog editBtn" style=""></span> |
        <span title="delete" ng-click="performanceConfigDel(item)" class="glyphicon glyphicon-trash deleteBtn" style=""></span>
    </td>
</tr>
<tr ng-if="performanceConfigList.length == 0"><td colspan="9" class="textCenter"><span translate="NULL_DATA">暂无数据！</span></td></tr>
</tbody>






performanceConfigEditAdd:



设备 device.name
端口 port
类型 performanceType
检测周期（秒） monitorPeriod
检测状态 monitorStatus  c NotYes
监测开始时间 monitorStartTime
监测结束时间 monitorEndTime
是否自动上报 autoTrapFlag  c NotYes
操作 operate   edit: performanceConfigEditAdd(item)  delete :performanceConfigDel(item)




nms/spring/performances/pMP/page?token=0F239E20BE4AD97E5E13C5F36E8BBBCD&deviceId=&page=1&pageSize=10&performanceType=&port=



$scope.performanceConfigSub = function(m){
    if(!verify.performanceConfigEditAdd(m,publicService,$translate)) {return;}
    publicService.loading('start');
    m.device = {id : m.device};
    // 添加检测，检测当前端口的性能曲线是否有返回值，若无返回值，则返回失败到的提示，告诉用户无法添加该性能曲线的监测
    publicService.doRequest("POST", "/nms/spring/performances/checkDevicePort", m).success(function(r){
        if(r.errCode == "1"){// 失败
            publicService.ngAlert(r.message, "danger");
            return;
        }else{
            // 提交性能监测配置
            publicService.doRequest("POST", "/nms/spring/performances/performanceMonitorParam", m).success(function(r){
                if (r && r.errCode) {
                    publicService.ngAlert(r.message, "danger");
                }else{
                    publicService.ngAlert(r.message,"success");
                }
            });
        }
    });
}




// 删除

$scope.performanceConfigDel = function(m){ 
    var self = this;
        t = $translate.use() === "ch" ? "确认删除?" : "confirm delete？";
    if(confirm(t)){
        self.performanceConfigList.splice(self.performanceConfigList.indexOf(m),1)
        m.delete = 1;
        publicService.loading('start');
        publicService.doRequest("DELETE", "/nms/spring/performances/PerformanceMonitorParam/" + m.id, {}).success(function(data){
            publicService.loading('end');
            var tt = $translate.use() === 'ch' ? "删除成功！" : "Delete success！";
            publicService.ngAlert(tt,"success");
        });
    }
}



#current
#history
#set 
#count




if(!verify.performanceConfigEditAdd(m,publicService,$translate)) {return;}
		publicService.loading('start');
		m.device = {id : m.device};
		// 添加检测，检测当前端口的性能曲线是否有返回值，若无返回值，则返回失败到的提示，告诉用户无法添加该性能曲线的监测
		publicService.doRequest("POST", "/nms/spring/performances/checkDevicePort", m).success(function(r){
			if(r.errCode == "1"){// 失败
				publicService.ngAlert(r.message, "danger");
				return;
			}else{
				// 提交性能监测配置
				publicService.doRequest("POST", "/nms/spring/performances/performanceMonitorParam", m).success(function(r){
					if (r && r.errCode) {
						publicService.ngAlert(r.message, "danger");
					}else{
						publicService.ngAlert(r.message,"success");
					}
				});
			}
        });
        





        function setValue(Record, container) {
            for (var i = 0, Eles = jQuery(container), len = Eles.length; i < len; i++) {
                var Ele = jQuery(Eles[i]);
                var Field = Ele.attr("field");
                var Type = Ele.attr("showtype");
                var Value = getField(Record, Field);
                switch (Type) {
                    case "combo":
                        {
                            if (Value != null) {
                                Ele.combobox("setValue", Value);
                            }
                            else if (Ele.attr("require") == "require") {
                                var Items = Ele.combobox("getData");
                                if (Items.length > 0) {
                                    /* if (V && V.BindingDefaults && V.BindingDefaults[Ele.attr("source")])
                                    {
                                    Ele.combobox("setValue", V.BindingDefaults[Ele.attr("source")]);
                                    }
                                    else
                                    {
                                    Ele.combobox("setValue", Items[0].value);
                                    }*/
                                    Ele.combobox("setValue", Items[0].value);
                                }
                                else {
                                    Ele.combobox("clear");
                                }
                            }
                            else {
                                Ele.combobox("clear");
                            }
                        }
                        break;
                    case "combotree":
                        {
                            if (Value != null) {
                                Ele.combotree("setValue", Value);
                            }
                            else if (Ele.attr("require") == "require") {
                                var Items = Ele.combotree("getData");
                                //if (Items.length > 0) {
                                //    Ele.combotree("setValue", Items[0].value);
                                //}
                                //else {
                                //    Ele.combotree("clear");
                                //}
                            }
                            else {
                                Ele.combotree("clear");
                            }
                        }
                        break;
                    case "combocheck":
                        {
                            if (Value != null) {
                                Ele.combobox("setValues", Value);
                            }
                            else if (Ele.attr("require") == "require") {
                                var Items = Ele.combobox("getData");
                                if (Items.length > 0) {
                                    /*    if (V && V.BindingDefaults && V.BindingDefaults[Ele.attr("source")])
                                    {
                                    Ele.combobox("setValues", V.BindingDefaults[Ele.attr("source")]);
                                    }
                                    else
                                    {
                                    Ele.combobox("setValues", [Items[0].value]);
                                    }*/
                                    Ele.combobox("setValues", [Items[0].value]);
                                }
                                else {
                                    Ele.combobox("clear");
                                }
                            }
                            else {
                                Ele.combobox("clear");
                            }
                        }
                        break;
                    case "checkbox":
                        {
                            if (Value == "1") {
                                //Ele.prop("checked", "checked");
                                Ele[0].checked = true;
                            }
                            else {
                                //Ele.removeProp("checked");
                                Ele[0].checked = false;
                            }
                        }
                        break;
                    case "datetime":
                        {
                            if (Value) {
                                if (Ele.attr("valuetype") == "Number") {
                                    Ele.val(new Date(Value * 1000).FormatString(Ele.attr("format")));
                                }
                                else {
                                    Ele.val(Value);
                                }
                            }
                            else {
                                Ele.val("");
                            }
                        }
                        break;
                    default:
                        {
                            if (Value != null) {
                                Ele.val(Value);
                            }
                            else {
                                Ele.val("");
                            }
                        }
                        break;
                }
            }
        }















        <tr><td class="ta-c"><span class="circle bg-red"></span></td>
        <td>10000</td>
        <td>河北冀北公司SM2000_LPR</td>
        <td>产生</td>
        <td>MC</td>
        <td>CRITI</td>
        <td>Device Disconnected</td>
        <td>2019-06-14 16:48:48</td>
        <td>0</td>
        <td>dt</td>
        <td>河北</td><td id="" style="display:none">7fd8e202-1aa0-4325-983e-504652521489</td></tr>




/nms/spring/performances/PerformanceMonitorParam/c70e663e-dd4b-43fd-839c-a8339b931ec0?token=B60CF71E4E43955C7213EB0A2960C884
/nms/spring/performances/performanceMonitorParam/2ddb66c1-2dd3-4da3-a627-4ff1d3a59375        




















function queryInfo(event, tab, id) {
    var $dom;
    if (tab == "set" || tab == "current" || tab == "history") {
      if (id) {
        $dom = $($("#" + id));
      } else {
        $dom = $(event.target).offsetParent(".search-row");

      }
      var params = {}
      if ($dom.find("[qField='deviceId']")) { params.deviceId = $dom.find("[qField='deviceId']").val() }
      if ($dom.find("[qField='performanceFrameM']")) { params.performanceFrameM = $dom.find("[qField='performanceFrameM']").val() }
      if ($dom.find("[qField='port']")) { params.port = $dom.find("[qField='port']").val() }

      if (tab == "history") {
        if ($dom.find("[qField='startTime']")) { params.startTime = $dom.find("[qField='startTime']").val() }
        if ($dom.find("[qField='endTime']")) { params.endTime = $dom.find("[qField='endTime']").val() }
      }

      $.each(params, function(oi, ov) {
        if (ov == "请选择") params[oi] = "";
      })

      if (tab == "current" || tab == "history") {


        HighChartQuery(params, tab, id);
        return;
      }



      top.SsServer.getPerformancesSet(params).done(function(d) {

        var fields = [{
            "title": "设备",
            "field": "deviceName",
            format: function(v) {
              return v.device.name;
            }
          },
          { "title": "端口", "field": "port" },
          { "title": "类型", "field": "performanceType", binding: "Performance_PerformanceType" },
          { "title": "检测周期", "field": "monitorPeriod" },
          // { "title": "检测状态", "field": "monitorStatus" },
          { "title": "监测开始时间", "field": "monitorStartTime", format: "TimeFormatter" },
          { "title": "监测结束时间", "field": "monitorEndTime", format: "TimeFormatter" },
          { "title": "是否自动上报", "field": "autoTrapFlag", binding: "NotYes" },
          {
            "title": "操作",
            "field": "operate",
            format: function() {
              return '<a class="set m-r5" href="#"  onclick="addOrEditPerformerSet(event)"></a>' +
                '<a class="deleted" href="#" onclick="deletePerformer(event)"></a>'
            }
          },
        ];

        top.SsComm.setTableInfo($("#setting-table"), fields, d.content || []);



      })
    }
  }

  function HighChartQuery(params, tab, id) {
    var data = [];
    if (!params) {
      return;
    }
    if (tab == "history") {
      if (!params.startTime || params.startTime.match("_")) {
        if (id) {
          return;
        }
        alert("请选择开始时间");
        return;
      }

      if (!params.endTime || params.endTime.match("_")) {
        if (id) {
          return;
        }
        alert("请选择结束");
        return;
      }


    }

    // 设备检查
    if (!params.deviceId) {
      if (id) {
        return;
      }
      alert("请选择设备");
      return;
    }

    if (!params.performanceFrameM) {
      if (id) {
        return;
      }
      alert("请选择类型");
      return;
    }
    // 端口检查
    if (!params.port) {
      if (id) {
        return;
      }
      alert("请选择端口");
      return;
    }

    var deviceInfo = top.SsCenter.deviceInfo.details[params.deviceId] || {};
    if (params.performanceFrameM == "mtie") {
      time = 13;
      if (deviceInfo.deviceType == 'SSU2000') {
        time = 8;
      } else if (deviceInfo.deviceType == 'TP1100') {
        time = 6;
      }
    } else if (params.performanceFrameM == 'tdev') {
      time = 11;
      if (deviceInfo.deviceType == 'SSU2000') {
        time = 12;
      } else if (deviceInfo.deviceType == 'TP1100') {
        time = 9;
      }
    } else if (params.performanceFrameM == "freq") {
      time = 11;
      if (deviceInfo.deviceType == 'TP1100') {
        time = 60;
      }
    } else if (params.performanceFrameM == "phase1M") {
      time = 11;
      if (deviceInfo.deviceType == 'TP1100') {
        time = 60;
      }
    }
    params["limit"] = time;
    if (tab == "current") {
      params["startTime"] = top.SsComm.TSToString(new Date().getTime(), "yyyy-MM-dd")
      params["endTime"] = top.SsComm.TSToString(new Date().getTime(), "yyyy-MM-dd")
    }

    top.SsServer.getForChart(params).done(function(ret) {
      var labelData;
      if (ret && ret.length > 0) {

        if (params.performanceFrameM == "mtie" || params.performanceFrameM == "tdev") {
          var obj = {};
          obj.data = ret[0].coordinate;
          obj.name = '数值';
          data.push(obj);
          labelData = ret[0].x;
        } else {
          var obj = {};
          obj.data = ret[0].y;
          obj.name = '数值';
          data.push(obj);
          labelData = ret[0].x;
        }

      } else {
        data = 0;
      }
      params["domId"]=tab+"-chart";
      if (labelData) {
        loadChart(data, labelData, params);
      } else {
        loadChart(0, 0, params);

      }
    })

    // 加载图表
    function loadChart(y, x, params) {
      if (params.performanceFrameM == "mtie") {
        var chartName = 'MTIE';
      } else if (params.performanceFrameM == 'tdev') {
        var chartName = 'TDEV';
      } else if (params.performanceFrameM == 'freq') {
        var chartName = 'FREQ';
      } else if (params.performanceFrameM == "phase1M") {
        var chartName = 'Phase1M';
      }
      y == 0 ? datay = [{
        name: '数值',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }] : datay = y;

      if (params.performanceFrameM == "mtie") { // 初始化MTIE模板数据
        if (params.modelType == 1) {
          var arr = [
            [1, 25.3],
            [4, 26.1],
            [10, 27.8],
            [40, 36.0],
            [100, 52.5],
            [300, 126.6],
            [900, 283.5],
            [1800, 309.4],
            [3600, 324.8],
            [7200, 383.7],
            [14400, 413.3],
            [28800, 569.9],
            [86400, 930.6]
          ];
        } else {
          var arr = [
            [1, 24],
            [4, 24],
            [10, 24],
            [40, 50.6],
            [100, 80],
            [300, 133.5],
            [900, 160],
            [1800, 160],
            [3600, 160],
            [7200, 160],
            [14400, 160],
            [28800, 160],
            [86400, 160]
          ];
        }
        var baseData = {
          name: '模版',
          data: arr
        };
        if (y == 0) {
          datay = [{
            name: '数值',
            data: [
              [1, 0],
              [4, 0],
              [10, 0],
              [40, 0],
              [100, 0],
              [300, 0],
              [900, 0],
              [1800, 0],
              [3600, 0],
              [7200, 0],
              [14400, 0],
              [28800, 0],
              [86400, 0]
            ]
          }]
        }
        datay.push(baseData);
      } else if (params.performanceFrameM == "tdev") { // 初始化TDEV模板数据
        if (params.modelType == 1) {
          var arr = [
            [1, 3],
            [2, 3],
            [4, 3],
            [8, 3],
            [16, 3],
            [32, 4.5],
            [64, 15],
            [128, 30],
            [256, 30],
            [512, 30],
            [1024, 30]
          ];
        } else {
          var arr = [
            [1, 3],
            [2, 3],
            [4, 3],
            [8, 4.8],
            [16, 3],
            [32, 4.5],
            [64, 12],
            [128, 12],
            [256, 12],
            [512, 12],
            [1024, 12]
          ];
        }
        var baseData = {
          name: '模版',
          data: arr
        };
        if (y == 0) {
          datay = [{
            name: '数值',
            data: [
              [1, 0],
              [2, 0],
              [4, 0],
              [8, 0],
              [16, 0],
              [32, 0],
              [64, 0],
              [128, 0],
              [256, 0],
              [512, 0],
              [1024, 0]
            ]
          }]
        }
        datay.push(baseData);
      }

      if (params.performanceFrameM == "freq" || params.performanceFrameM == "phase1M") {
        x == 0 ? datax = arr : datax = arr;
        var tmp_name = '性能图表';
        $('#'+params.domId).highcharts({
          title: {
            text: chartName + tmp_name,
            x: -20
          },
          xAxis: {
            title: {
              text: '/s'
            },
            gridLineWidth: 1,
            categories: x,
          },
          yAxis: {
            title: {
              text: '/ns'
            },
            gridLineWidth: 1,
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: '/ns'
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: datay
        });
      } else if (params.performanceFrameM == "mtie") {
        var tmp_name = '性能图表' ;
        $('#'+params.domId).highcharts({
          title: { // 标题
            text: chartName + tmp_name
          },
          xAxis: { // x轴设置
            type: 'logarithmic', // 对数
            min: 1,
            max: 100000,
            endOnTick: false,
            tickInterval: 1,
            gridLineWidth: 1,
            title: {
              text: '/s'
            }
          },
          yAxis: { // y轴设置
            title: {
              text: '/ns'
            },
            type: 'logarithmic',
            minorTickInterval: 10,
            min: 1,
            labels: {
              format: '{value}'
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x={point.x}/s,y = {point.y}/ns'
          },
          // 数据
          series: datay
        });
      } else if (params.performanceFrameM == "tdev") {
        var tmp_name = '性能图表';
        $('#'+params.domId).highcharts({
          title: { // 标题
            text: chartName + tmp_name
          },
          xAxis: { // x轴设置
            type: 'logarithmic', // 对数
            min: 1,
            max: 10000,
            endOnTick: false,
            tickInterval: 1,
            gridLineWidth: 1,
            title: {
              text: '/s'
            }
          },
          yAxis: { // y轴设置
            title: {
              text: '/ns'
            },
            type: 'logarithmic',
            minorTickInterval: 10,
            min: 0.1,
            labels: {
              format: '{value}'
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x={point.x}/s,y = {point.y}/ns'
          },
          // 数据
          series: datay
        });
      } else {
        var tmp_name = '性能图表'
        $('#'+params.domId).highcharts({
          title: {
            text: chartName + tmp_name
          },
          xAxis: {
            title: {
              text: '/s'
            },
            gridLineWidth: 1,
            tickInterval: 1,
            categories: ['0.1', '2', '4', '10', '21', '45', '100', '213', '457', '1000', '2137', '4570', '10000', '21379', '45708', '100000', ]
          },
          yAxis: {
            title: {
              text: '/ns'
            },
            type: 'logarithmic',
            minorTickInterval: 0.1
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'y = {point.y}/ns'
          },
          series: datay
        });
      }
    }


  }

  var setForm = {
    render: function() {

        var q = {
          "deviceId": {
            "data": function() {
              a = [{ "Name": "请选择", "Value": "" }]
              Object.values(top.SsCenter.deviceInfo.details || {}).forEach(function(device) {
                a.push({ "Name": device.name, "Value": device.id });
              })
              return a;
            },
            "change": function(el) {
              $el = $(el.target);
              var $port = $el.offsetParent(".modal-content").find("[field='port']");
              if ($el.val()) {
                top.SsServer.getPerformancePortList($el.val()).done(function(data) {

                  a = [{ "Name": "请选择", "Value": "" }]
                  Object.values(data || {}).forEach(function(one) {
                    a.push({ "Name": one.key, "Value": one.value });
                  })

                  top.SsComm.setSelectOption($port, a)
                }).fail(function() {
                  a = [{ "Name": "请选择", "Value": "" }]
                  top.SsComm.setSelectOption($port, a)
                })

              } else {
                a = [{ "Name": "请选择", "Value": "" }]
                top.SsComm.setSelectOption($port, a)
              }

            }
          },
          "performanceType": {
            "data": "Performance_PerformanceType"
          },

          "monitorStatus": {
            "data": "NotYes"
          },
          "autoTrapFlag": {
            "data": "NotYes"
          },


        }
        $.each(q, function(oi, ov) {
          if (typeof ov.data == "function") {
            top.SsComm.setSelectOption($(".modal-content").find("[field=" + oi + "]"), ov.data())
          } else {
            top.SsComm.setSelectOption($(".modal-content").find("[field=" + oi + "]"), ov.data)
          }
          if (ov.change) {
            $(".modal-content").find("[field=" + oi + "]").on("change", ov.change);
          }

        })

      }

      ,

  }


  function addOrEditPerformance() {
    o = top.SsComm.getValue($(".modal-content"));
    var verify = {
      "deviceId": "请先选择设备",
      "monitorPeriod": "检测周期不能未空",
      port: "端口",
      monitorStartTime: "监测开始时间不能未空",
      monitorEndTime: "监测结束时间不能未空"
    }
    var err = ""
    $.each(verify, function(oi, ov) {
      if (!o[oi]) {
        err = ov;
        return false;
      }
    })
    if (err) {
      alert(err);
      return
    }


    o.device = { id: o.deviceId };
    var deviceDom = $("#setAddModal").find("[field='deviceId']");
    if (deviceDom.data("id")) {
      o["id"] = deviceDom.data("id");
    }
    top.SsServer.checkDevicePort(o).done(function(r) {
        if (r && r.errCode == "1") {
          alert(r.message)
          return;
        }
        top.SsServer.setPerformanceMonitorParam(o).done(function(ret) {
          if (ret && ret.code == "100000") {
            queryInfo("event", 'set', 'settingQueryButton');
            $('#setAddModal').modal("hide");
            $('#myModalTips').html(window.top.showTips("操作成功"));
            $('#myModalTips').modal('show');
          } else {

            alert(ret.message)

          }
        })
      }

    )




  }

  function deletePerformer($event) {
    data = $($event.target).closest("tr").data("data");
    data = $.extend({}, data);
    data.delete = 1;

    if (confirm("确定删除?")) {
      top.SsServer.deletePerformanceMonitorParam(data).done(function(ret) {
        if (ret && ret.code == "100000") {

          $('#myModalTips').html(window.top.showTips("操作成功"));
          queryInfo("event", 'set', 'settingQueryButton');
          $('#myModalTips').modal('show');
        } else {

          alert(ret.message)

        }
      })



    }

  }

  function addOrEditPerformerSet($event) {
    // setForm.render();
    var data = {
      performanceType: "freq",
      autoTrapFlag: "0",
      monitorStatus: "0",
      // monitorPeriod: 8,
      // monitorStartTime: "2019-06-14",
      // monitorEndTime: "2019-06-24",
    };
    var deviceDom = $("#setAddModal").find("[field='deviceId']");
    if ($event) {
      // 修改
      $("#setAddModal .modal-title").html("性能设置修改");
      if ($($event.target).closest("tr").data("data")) {
        data = $($event.target).closest("tr").data("data");
        data = $.extend({}, data);
        data.deviceId = data.device.id;
        data.monitorStartTime = top.SsComm.TSToString(data.monitorStartTime, "yyyy-MM-dd");
        data.monitorEndTime = top.SsComm.TSToString(data.monitorEndTime, "yyyy-MM-dd");

        deviceDom.val(data.device.id).data("id", data.id);
        beforeSet(deviceDom);
        $("#setAddModal").modal();

        function beforeSet($el) {

          var $port = $el.offsetParent(".modal-content").find("[field='port']");
          if ($el.val()) {
            top.SsServer.getPerformancePortList($el.val()).done(function(ret) {

              a = [{ "Name": "请选择", "Value": "" }]
              Object.values(ret || {}).forEach(function(one) {
                a.push({ "Name": one.key, "Value": one.value });
              })
              top.SsComm.setSelectOption($port, a)

              top.SsComm.setValue(data, $(".modal-content").find("[field]"));
              // $("#setAddModal").modal();


            }).fail(function() {
              a = [{ "Name": "请选择", "Value": "" }]
              top.SsComm.setSelectOption($port, a)
              top.SsComm.setValue(data, $(".modal-content").find("[field]"));
              // $("#setAddModal").modal();

            })

          } else {
            a = [{ "Name": "请选择", "Value": "" }]
            top.SsComm.setSelectOption($port, a)
            top.SsComm.setValue(data, $(".modal-content").find("[field]"));
          }

        }



      }
    } else {
      deviceDom.val("").data("id", "");
      $("#setAddModal .modal-title").html("性能设置添加");
      top.SsComm.setValue(data, $(".modal-content").find("[field]"));
      $("#setAddModal").modal();
    }

  }
  $(document).ready(function() {

    //显示
    window.parent.showNMRight();
    $.datetimepicker.setLocale('ch');

    setQFieldOptions();
    setForm.render();

    function setQFieldOptions() {
      var q = {
        "[qField='deviceId']": {
          "data": function() {
            a = [{ "Name": "请选择", "Value": "" }]
            Object.values(top.SsCenter.deviceInfo.details || {}).forEach(function(device) {
              a.push({ "Name": device.name, "Value": device.id });
            })
            return a;
          },
          "change": function(el) {
            $el = $(el.target);
            var $port = $el.offsetParent(".search-row").find("[qField='port']");
            if ($el.val()) {
              top.SsServer.getPerformancePortList($el.val()).done(function(data) {

                a = [{ "Name": "请选择", "Value": "" }]
                Object.values(data || {}).forEach(function(one) {
                  a.push({ "Name": one.key, "Value": one.value });
                })

                top.SsComm.setSelectOption($port, a)
              }).fail(function() {
                a = [{ "Name": "请选择", "Value": "" }]
                top.SsComm.setSelectOption($port, a)
              })
            } else {
              a = [{ "Name": "请选择", "Value": "" }]
              top.SsComm.setSelectOption($port, a)
            }

          }
        },
        "[qField='performanceFrameM']": {
          "data": "Performance_PerformanceType"
        }
      }
      $.each(q, function(oi, ov) {
        if (typeof ov.data == "function") {
          top.SsComm.setSelectOption($(oi), ov.data())
        } else {
          top.SsComm.setSelectOption($(oi), ov.data)
        }
        if (ov.change) {
          $(oi).on("change", ov.change);
        }
      })

    }




    //日期时间选择器
    $('.datetimepicker').datetimepicker({
      lang: "ch", //语言选择中文 注：旧版本 新版方法：$.datetimepicker.setLocale('ch');
      //   format: "Y-m-d h:i", //格式化日期yyyy-mm-dd hh:ii

      format: "Y-m-d", //格式化日期yyyy-mm-dd
      timepicker: false, //关闭时间选项
      mask: true
      //          yearStart:2000,     //设置最小年份
      //          yearEnd:2050,        //设置最大年份
      //          todayButton:false    //关闭选择今天按钮
    });

    //图表 告警类型
    var data1 = [{
      name: '数据',
      data: [
        [1, 3],
        [10, 4],
        [100, 5],
        [1000, 30],
        [10000, 40],
        [100000, 100],
      ]
    }, {
      name: '模板',
      data: [
        [1, 30],
        [6, 32],
        [9, 40],
        [20, 50],
        [600, 140],
        [1000, 300],
        [10000, 400],
        [100000, 1000],
      ]
    }];
    initChar('current-chart', 'MTIE性能表', data1);


    var data2 = [{
      name: '数据',
      data: [
        [1, 3],
        [10, 4],
        [100, 5],
        [1000, 30],
        [10000, 40],
        [100000, 100],
      ]
    }, {
      name: '模板',
      data: [
        [1, 30],
        [6, 32],
        [9, 40],
        [20, 60],
        [600, 140],
        [1000, 300],
        [10000, 400],
        [100000, 1000],
      ]
    }];
    initChar('history-chart', 'MTIE性能表', data2);







  });


  //tagId string 节点id
  //title string 表格标题
  //data array 数据
  function initChar(tagId, title, data) {

    var chart = Highcharts.chart(tagId, {
      chart: {
        backgroundColor: '#F6F3D6',
        type: 'spline'
      },
      title: {
        text: title
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'logarithmic', // 对数
        min: 1,
        max: 100000,
        logBase: 10,
        endOnTick: false,
        tickInterval: 1,
        gridLineWidth: 1,
        title: {
          text: '/s'
        }
      },
      colors: ['#0D908B', '#000'],
      yAxis: {
        title: {
          text: 'ns'
        },
        type: 'logarithmic',
        minorTickInterval: 10,
        min: 1,
        labels: {
          format: '{value}'
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        //  pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      series: data
    });

  }








  var tmp_name = '性能图表' ;
  $('#'+params.domId).highcharts({
    chart: {
  backgroundColor: '#F6F3D6',
  type: 'spline'
},
    title: { // 标题
      text: chartName + tmp_name
    },
    subtitle: {
  text: ''
},
    xAxis: { // x轴设置
      type: 'logarithmic', // 对数
      min: 1,
      max: 100000,
      endOnTick: false,
      tickInterval: 1,
      gridLineWidth: 1,
      title: {
        text: '/s'
      }
    },
    colors: ['#0D908B', '#000'],
    yAxis: { // y轴设置
      title: {
        text: '/ns'
      },
      type: 'logarithmic',
      minorTickInterval: 10,
      min: 1,
      labels: {
        format: '{value}'
      }
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br />',
      // pointFormat: 'x={point.x}/s,y = {point.y}/ns'
    },
    // 数据
    series: datay
  });





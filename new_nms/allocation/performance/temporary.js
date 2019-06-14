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
类型 performanceFrameM c  PerformanceType 
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

    设备 device.name
    端口 port
    类型 performanceType
    检测周期 monitorPeriod
    检测状态 monitorStatus  (0 否 ,其他 是)
    监测开始时间 monitorStartTime
    监测结束时间 monitorEndTime
    是否自动上报 autoTrapFlag  (0 否 ，其他是)
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
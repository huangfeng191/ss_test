angular.module('sm2000inputPtpModule',[]).controller('inputPtpCtrl', ['$scope', '$stateParams', '$state',"$translate",'publicService', function($scope, $stateParams, $state,$translate,  publicService) {
		publicService.doRequest("GET", 112, {
		page: "",
		pageSize: 200,
		name: "",
		ip: "",
		deviceStatus: "",
		areaId: "",
		deviceType: ""
	}).success(function(r) {
		if (r.data == null) return
		if (r.data !== null && r.data.content && r.data.content.length > 0) {
			var content = r.data.content;
			var deviceInfo = [];
			for (i = 0; i < content.length; i++) {
				if (content[i].deviceStatus == 1 && content[i].deviceType == 'SM2000_5G') {
					if(content[i].deviceAdditionalInfo.deviceFlag == $rootScope.selecttype)
						deviceInfo.push(content[i]);
				}
			}
			$scope.deviceInfo = deviceInfo;
		}
	})

	$scope.dev_Id = $stateParams.devid;
	$scope.slot = $stateParams.slot
    $scope.deviceData = $stateParams.deviceData;
    $scope.PTPport = '1';
    loadreport();
    function loadreport(devId) {
        var loadPortname = {};
        loadPortname.deviceId = $scope.dev_Id;
        loadPortname.shelf = "";
        loadPortname.slot = "";
        loadPortname.portType = '';
        loadPortname.port = $scope.PTPport;
        publicService.doRequest("GET", "/nms/spring/device/renamePort", loadPortname).success(function(r) {
            var loadPortnamedata = r.data;
            if (loadPortnamedata.length > 0) {
                for (var i = 0; i < loadPortnamedata.length; i++) {
                    if ('input-PTP' == loadPortnamedata[i].portType) {
                        $scope.portNamedata = loadPortnamedata[i].portName;
                        return
                    } else {
                        $scope.portNamedata = 'input-PTP(' + $scope.PTPport + ')';
                    }
                }
            } else {
                $scope.portNamedata = 'input-PTP(' + $scope.PTPport + ')';
            }
        })
    }


	$scope.changePort = function() {
		if ($scope.devIP && $scope.devIP != "No selection device") {
			loadreport();
		}
	}
}]);

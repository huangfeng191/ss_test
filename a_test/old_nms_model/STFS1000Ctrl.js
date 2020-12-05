angular.module('STFS1000CtrlModule',[]).controller('STFS1000Ctrl',['$scope', '$state', '$rootScope', '$stateParams', '$rootScope', "$translate", '$state', 'publicService', function($scope, $state, $rootScope, $rootScope, $stateParams, $translate, $state, publicService) {

	var DEVICETYPE = $state.params.router, _URL = "";
	$scope.DEVICE_TITLE = $state.params.title;
	$scope.deviceContent = {};
	$scope.devSlot=$state.params.devSlot;
	publicService.doRequest("GET", 30, {
		deviceType: DEVICETYPE
	}).success(function(r) {
		if (r.errCode) {
			publicService.ngAlert(r.message, "danger");
		} else {
			$scope.deviceInfo = r.data;
		}
	})


	$scope.macChange = function(x) {
		var self = this;
		$scope.mauto = self.devID;

		if (self.devID && self.devID.deviceStatus != 0){
			localStorage.setItem("mauto", angular.toJson(self.devID));
		
			$rootScope.devIP = self.devID.name;
		
			
			$scope.devIP = self.devID.ip;
			
		} else if (self.devID && self.devID.deviceStatus != 1) {
			var tt = $translate.use() === 'ch' ? "该设备处于离线状态！" : "The device is offline！";
			publicService.ngAlert(tt, "info");
			return
		}
	}






	$scope.seach = function() {
	
		if (!$scope.mauto) {
				var tt = $translate.use() === 'ch' ? "请选择设备" : "Please select device";
				publicService.ngAlert(tt,"info");
			return;
		}

		executeTL1();
	}

	function executeTL1( ) {
		var p={}
		if($state.params.tp=="STFS1000RefSource"){

			p={"command":"RTRV-OSC-CONFIG","param":$scope.devSlot}
		}
		
		publicService.doRequest("POST", "/nms/spring/deviceConfig/" + DEVICETYPE.toLowerCase() + "/" + $scope.mauto.id + "/executeTL1", p).success(function(r) {
			if (r.errCode) {
				publicService.ngAlert(r.message, "danger");
			} else {
			
			
				if (r.data.length == 0) {
					$scope.deviceContent={}	
				}else{
					if($state.params.tp=="STFS1000RefSource"){
						$scope.deviceContent.ref_aid=r.data.ref.aid
						$scope.deviceContent.ref_ref=r.data.ref.ref
						$scope.deviceContent.inp_onoff=r.data.inp.onoff
						$scope.deviceContent.inp_switch_t=r.data.inp.switch_t
						$scope.deviceContent.inp_ree_t=r.data.inp.ree_t
						$scope.deviceContent.status_switch_a=r.data.sta.us_switch_a
						$scope.deviceContent.status_switch_t=r.data.sta.us_switch_t
					}
				}

		

			}
		})
	}


}]);
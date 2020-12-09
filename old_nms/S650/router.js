a=[
   // "Dashboard",
   " Network",
   "Ethernet",
   "SNMP",
   "SNMPTraps",
   "Ping",
   " NetworkTiming",
   "NTPdSysinfo",
   "NTPdAssoc",
   "NTPdConfig",
   "NTPr_PTPConfig",
   "NTP_PTPMapping",
   "NTPr_PTPStatus",
   " Timing",
   "InputControl",
   "Holdover",
   "TimeZone",
   "Serial",
   " References",
   "Status",
   "GNSSConfig",
   " Security",
   "Users",
   "AccessControl",
   "Services_SysControl",
   "HTTPS",
   "SSH",
   "NTPdSymmetricKeys",
   "NTPdAutokeyServer",
   "NTPdAutokeyClient",
   "RADIUS",
   "TACACS+",
   "LDAP",
   "PacketMonitoring",
   "X509CSR",
   "X509Install",
   " Admin",
   "General",
   "AlarmRelay",
   "Alarms",
   "Email",
   "BannerConfig",
   "SerialPortConfig",
   "Upgrade",
   "Options",
   "ConfigBackup_Restore",
   " Logs",
   "Config",
   "Events",
   "Messages",
   " OPTIONSLOTA",
   "TIMINGI_OCARD",
   " OPTIONSLOTB",
   "NotInstalled",
   " Help",
   "Contacts"
 ]
var modual=""
var out={}
 a.forEach(function(v,i){
   if(v[0]==" "){
      v=v.replace(" ","")
      modual=v
      out[modual]={}
   }else{
      out[modual][v]={"folder":modual,"url":"index.s650."+v,"file":v}
   }
 })

 var outO={}
 Object.assign(outO,...Object.values(out))
 Object.values(outO).forEach(function(extract){
   extract.route=`
   .state('index.s650.${extract.file}', {
      url: '/s650${extract.file}',
      templateUrl: 'template/s650/${extract.folder.toLowerCase()}/${extract.file}.html',
      controller: "s650outputConfigCtrl",
      params: {
          devid: null,
          tp:'${extract.file}',
          deviceData : null
      },
      resolve: {
          load : loadJS("s650outputConfigCtrlModule",['controller/s650/outputConfigCtrl.js'])
      }
   })
   
   ` 

   extract.search=`
   <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 querySeach">
   <div>
     <label  translate="CURRENT_DEVICE" class="control-label" >当前设备</label>
     : {{devIP}}
     <select ng-model="devID" style="width:120px;height: 26px;"  class="form-inline input-sm" ng-options="m.name group by m.area.name for m in deviceInfo"  ng-change="macChange(devID)">
       <option value="" translate="PLEASE_SELECT">请选择</option>
     </select>
  
     <button  class="btn btn-primary btn-md" translate="SEARCH" ng-click="search('${extract.file}')" style="">搜索</button>         
   </div>
   <br></div>
   

   else if(x="${extract.file}"){
      url="/nms/spring/deviceConfig/"+$scope.selectedDevice.id+"/s650/sysinfo_ref_data"
   }
   `


 })

//  console.log(outO["NTPdSysinfo"].route)
//  console.log(outO["NTPdSysinfo"].search )



//  console.log(outO["NTPdAssoc"].route)
//  console.log(outO["NTPdAssoc"].search )


console.log(outO["NTPdConfig"].route)
console.log(outO["NTPdConfig"].search )




 




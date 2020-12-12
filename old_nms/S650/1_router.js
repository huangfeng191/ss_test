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
   " Security",
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
   else if($stateParams.tp=="${extract.file}"){
      url="/nms/spring/deviceConfig/"+$scope.selectedDevice.id+"/s650/${extract.file.toLowerCase()}"
   }


   else if($stateParams.tp=="${extract.file}"){
     special="${extract.file.toLowerCase()}"
    url="/nms/spring/deviceConfig/"+$scope.selectedDevice.id+"/s650/${extract.file.toLowerCase()}"
 }


   `


 })

//  console.log(outO["NTPdSysinfo"].route)
//  console.log(outO["NTPdSysinfo"].search )



//  console.log(outO["NTPdAssoc"].route)
//  console.log(outO["NTPdAssoc"].search )


// console.log(outO["Holdover"].route)
// console.log(outO["Holdover"].search )


// console.log(outO["TimeZone"].route)
// console.log(outO["TimeZone"].search )

// console.log(outO["Serial"].route)
// console.log(outO["Serial"].search)

// console.log(outO["AccessControl"].route )
// console.log(outO["AccessControl"].search )

// console.log(outO["Status"].route )
// console.log(outO["Status"].search )
// console.log(outO["Services_SysControl"].route )
// console.log(outO["Services_SysControl"].search )
console.log(outO["InputControl"].route )
console.log(outO["InputControl"].search )




 




a=[
    "Dashboard",
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
  
  
  var b=[]
  var pid=""
  a.forEach(function(v,i){
    var c=""
    var id=Math.round(Math.random()*1000000)
    
    if(v[0]==" "){
        v=v.replace(" ","")
    c=`'c5babc44-5361-4b9d-b730-${id}633cf7', 0, '2020-12-07 09:38:33', '2', 'S650${v}', '0', 'index.s650.${v}', 'c99a5a42-4f75-4c51-9185-5db0ba795d7a', NULL, ${i}, 'S650${v}', 'S650${v}'`
      pid=`c5babc44-5361-4b9d-b730-${id}633cf7`
    }else{
        c=`'c5babc44-5361-4b9d-b730-${id}633cf7', 0, '2020-12-07 09:38:33', '3', 'S650${v}', '1', 'index.s650.${v}', '${pid}', NULL, ${i}, 'S650${v}', 'S650${v}'`
    }
    b.push(c)
  
  })
  var d=[]
b.forEach(function(v){
    d.push("INSERT INTO `nms2.0`.`menu`(`id`, `isDelete`, `timestamp`, `level`, `menuName`, `type`, `url`, `parentId`, `name`, `menuIndex`, `menuNameCn`, `menuNameEN`) VALUES ("+v+");")
})

  copy(d.join("\n"))

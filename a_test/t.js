var a=[] ;
$(".nav-list .menu-text").each(function(i,v){a.push(v.innerHTML.replace(/&nbsp;/g,'').replace(/ /g,''))})
copy(a)


[
  "Dashboard",
  "Network",
  "NetworkTiming",
  "Timing",
  "References",
  "Security",
  "Admin",
  "Logs",
  "OPTIONSLOTA",
  "OPTIONSLOTB",
  "Help"
]


var a=[] ;
$(".nav-list a ").each(function(i,v){a.push(v.innerText.replace(/  /g,'').replace(/\n/g,'').replace(/\//g,'_').replace(/ /g,'').replace(/\./g,''))})
copy(a)
[
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
  "Security",
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

// neformatradio

// CR LFI DDD HH:MM:SS DTZ=XX CR LF
// CR LFI WWW DDMMMYY HH:MM:SS CR LF
// CR LFI YYYY DDD HH:MM:SS DZZ CR LF


// "field":"typeradio"


// "options": 
// {"name":"Off","value":"0"},
// {"name":"NMEA","value":"1"},
// {"name":"NENA","value":"2"},
// {"name":"Legacy Serial Out","value":"3"},

// on close 

// "chkzda":"NMEA - 0183 ZDA output - Date and Time"  
// "chkgga":"NMEA - 0183 GGA output - GNSS Fix Information",
// "chkgsv":"NMEA - 0183 GSV output - Detailed Satellite data",
// "chkrmc":"NMEA - 0183 RMC output - Minimum data for GPS",

var d = [{
        "field": "typeradio",
        "name": "Serial Timing Output",
        "type": "select",
        "options": [
            { "name": "Off", "value": "0" },
            { "name": "NMEA", "value": "1" },
            { "name": "NENA", "value": "2" },
            { "name": "Legacy Serial Out", "value": "3" },
        ]
    },
    { "field": "chkzda", "name": "0183 ZDA output - Date and Time", "type": "select", "options": [{ "name": "打开", "value": "on" },
    { "name": "关闭", "value": "" }] },
    { "field": "chkgga", "name": "0183 GGA output - GNSS Fix Information", "type": "select", "options": [{ "name": "打开", "value": "on" },
        { "name": "关闭", "value": "" }] },
    { "field": "chkgsv", "name": "0183 GSV output - Detailed Satellite data", "type": "select", "options": [{ "name": "打开", "value": "on" },
        { "name": "关闭", "value": "" }] },
    { "field": "chkrmc", "name": "0183 RMC output - Minimum data for GPS", "type": "select", "options": [{ "name": "打开", "value": "on" },
        { "name": "关闭", "value": "" }] },
    {
        "field": "neformatradio",
        "name": "Broadcast Mode",
        "type": "select",
        "options": [
            { "name": "CR LFI DDD HH:MM:SS DTZ=XX CR LF", "value": "0" },
            { "name": "CR LFI WWW DDMMMYY HH:MM:SS CR LF", "value": "1" },
            { "name": "CR LFI YYYY DDD HH:MM:SS DZZ CR LF", "value": "2" },

        ]
    },
]




var data = [{
        "name": "LAN 1 IPV4",
        "field": "txtipadd1ipv4"
    },
    {
        "name": "LAN 2 IPV4",
        "field": "txtipadd2ipv4"
    },
    {
        "name": "LAN 3 IPV4",
        "field": "txtipadd3ipv4"
    },
    {
        "name": "LAN 4 IPV4",
        "field": "txtipadd4ipv4"
    },
    {
        "name": "LAN 1 IPV6",
        "field": "txtipadd1ipv6"
    },
    {
        "name": "LAN 2 IPV6",
        "field": "txtipadd2ipv6"
    },
    {
        "name": "LAN 3 IPV6",
        "field": "txtipadd3ipv6"
    },
    {
        "name": "LAN 4 IPV6",
        "field": "txtipadd4ipv6"
    }
]

{
    "chkgga": true,
    "typeradio": "1",
    "chkrmc": false,
    "chkzda": true,
    "chkgsv": false
}




<input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlatdeg">degrees

<input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlatmin">minutes

<input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlatsec">seconds

<input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlondeg">degrees

input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlonmin">minutes

<input type="text"  class="excel_value form-control" ng-model="deviceContent.txtlonsec">seconds




a=[
  {
    "name": "Webserver",
    "field": "chkweb",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "SNMP",
    "field": "chksnmp",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "SSH",
    "field": "chkssh",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "TOD",
    "field": "chktime",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  }
]







[
  
  

{"key":"txttimecnt","value":"3"},
{"key":"txttimeid0","value":"0"},
{"key":"txttimeid1","value":"1"},
{"key":"txtholdcnt","value":"3"},




{"key":"txtholdid0","value":"0"},
{"key":"txtholdid1","value":"12"},


{"key":"inppriradio","value":"1"}, // 1 2

{"key":"chktime0","value":"on"},
{"key":"chktime1","value":"on"}, 

{"key":"chkcorr","value":"on"}, 


{"key":"chkhold0","value":"on"},
{"key":"chkhold1","value":"on"},

{"key":"ddlmonths","value":"12"},
{"key":"txtdate","value":"07"},
{"key":"txtyear","value":"2020"},
{"key":"txthr","value":"01"},
{"key":"txtmin","value":"00"},
{"key":"txtsec","value":"55"},


{"key":"txtirigyear","value":"2020"},
{"key":"txtutcoffset","value":"0"},


{"key":"manual_leap_year_radio","value":"0"},  1 -1 0
{"key":"manual-date-radio","value":"0"},

{"key":"action","value":"applyinput"} 0 1



Action : applyirig  , applyinput ,applyutc,applymanualleap




[
  {
    "name": "GNSS",
    "field": "chktime0",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "Slot A J1 Timecode",
    "field": "chktime1",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "Ignore UTC corrections from GPS reference and serve GPS timescale.  Not applicable to any other time reference (i.e. Timecode, NTP, etc.)",
    "field": "chkcorr",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "Slot A J2 (Frequency)",
    "field": "chkhold0",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  },
  {
    "name": "Slot A J1 (10MPPS, 1PPS)",
    "field": "chkhold1",
    "type": "select",
    "options": [
      {
        "name": "disable",
        "value": "0"
      },
      {
        "name": "enable",
        "value": "1"
      }
    ]
  }
]
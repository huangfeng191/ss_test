copy(parseFormDom({dom:"table tr "}))
//  form to form 
formToFieldItems({"dom":"table tr"})

// 
copy(temp_moudle({title:"Holdover",dom:"table tr "}))












copy(temp_moudle({title:"TimeZone",dom:"table tr "}))

console.log(outO["TimeZone"].route)
console.log(outO["TimeZone"].search )




copy(temp_moudle({dom:"","title":"Serial",data:data}))


var data=[
   {
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
copy(temp_moudle({dom:"","title":"Access Control",data:data}))





parseFormDom( {dom:".row-fluid:first tr"})

copy(temp_moudle({title:"GNSSConfig",dom:".row-fluid:first tr"}))


[
  {
    "name": "GPS",
    "field": "chkgps",
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
    "name": "GLONASS",
    "field": "chkglo",
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
    "name": "BeiDou",
    "field": "chkbei",
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
    "name": "Enable",
    "field": "chksbas",
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
    "name": "Elevation Mask (degrees)",
    "field": "txtmask"
  },
  {
    "name": "Position Mode",
    "field": "ddlmode",
    "type": "select",
    "options": [
      {
        "value": "GNSS_SURVEY",
        "name": "Survey"
      },
      {
        "value": "GNSS_POSITION_HOLD",
        "name": "Position Hold"
      }
    ]
  },
  {
    "name": "Latitude (for Position Hold)",
    "field": "ddllatdir",
    "type": "select",
    "options": [
      {
        "value": "GNSS_NORTH",
        "name": "North"
      },
      {
        "value": "GNSS_SOUTH",
        "name": "South"
      }
    ]
  },
  {
    "name": "Longitude (for Position Hold)",
    "field": "ddllondir",
    "type": "select",
    "options": [
      {
        "value": "GNSS_EAST",
        "name": "East"
      },
      {
        "value": "GNSS_WEST",
        "name": "West"
      }
    ]
  },
  {
    "name": "Altitude (for Position Hold)",
    "field": "txtalt"
  },
  {
    "name": "Antenna Cable Delay (ns)",
    "field": "txtdely"
  },
  {
    "name": "",
    "field": "chkreset",
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


getInputAndUnit({dom:"table.table-bordered:last tr:eq(2)"})
getInputAndUnit({dom:"table.table-bordered:last tr:eq(3)"})

data=getInputAndUnit({dom:"table.table-bordered:last tr:eq(2)"}).concat(getInputAndUnit({dom:"table.table-bordered:last tr:eq(3)"}))
formToFieldItems({data})

//  inputcontrol
getCheckboxTable({dom:"table"})
getInputId({dom:".table .table-bordered:eq(4)"})
parseFormDom({dom:".row-fluid:eq(4) tr "})



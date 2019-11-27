var clock = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": { // edit
            "clk": [{
                    "aid": "S1A01#S1A1,S1A12#true",
                    "warmup": "1200##false",  // false 标识可以修改
                    "mintau": "1000##false",
                    "maxtau": "9000##false",
                    "clkar": "ON#ON|OFF#false",
                    "inpswt": "AR##true",
                    "inpsel": "PRI##true",
                    "mintaulimit": "300##true",
                    "maxtaulimit": "10000##true",
                    "tod_timeout": "1440##true"
                },
                {
                    "aid": "S1A12#S1A1,S1A12#false",
                    "warmup": "1200##false",
                    "mintau": "1000##false",
                    "maxtau": "9000##false",
                    "clkar": "ON#ON|OFF#false",
                    "inpswt": "AR##true",
                    "inpsel": "PRI##true",
                    "mintaulimit": "300##true",
                    "maxtaulimit": "10000##true",
                    "tod_timeout": "1440##true"
                }

            ]
        },
        "others": {},
        "status": { // disabled
            "clk": [{
                "aid": "S1A01#S1A01|S1A12#false",
                "mstat": "SEL",
                "clock_mode": "HOLD#ACQ|LOCK|HOLD#false",
                "tau": "60",
                "pql": "5",
                "offset": "(0)",
                "sigma": "(5E-07)",
                "syn": "NO"
            }]
        }
    }
}

var manage=
{
  "code": 100000,
  "data": {
    "alarms": {},
    "params": {
      "comm": [
        {
          "aid": "COML#COML,COMA,COMB,TELNET,TL1#true",
          "baud": "9600#19200|9600|4800|2400|1200#false",
          "echo": "ON#ON|OFF#false",
          "eol": "CRLF#CR|LF|CRLF#false",
          "mode": "ASCII#ASCII|TL1#false",
          "tout": "300#5-43200|NEVER#false"
        },
        {
          "aid": "COMA#COML,COMA,COMB,TELNET,TL1#true",
          "baud": "9600#19200|9600|4800|2400|1200#false",
          "echo": "ON#ON|OFF#false",
          "eol": "CRLF#CR|LF|CRLF#false",
          "mode": "TL1#ASCII|TL1#false",
          "tout": "300#5-43200|NEVER#false"
        },
        {
          "aid": "COMB#COML,COMA,COMB,TELNET,TL1#true",
          "baud": "9600#19200|9600|4800|2400|1200#false",
          "echo": "ON#ON|OFF#false",
          "eol": "CRLF#CR|LF|CRLF#false",
          "mode": "ASCII#ASCII|TL1#false",
          "tout": "300#5-43200|NEVER#false"
        },
        {
          "aid": "TELNET#COML,COMA,COMB,TELNET,TL1#true",
          "baud": "#19200|9600|4800|2400|1200#false",
          "echo": "#ON|OFF#false",
          "eol": "#CR|LF|CRLF#false",
          "mode": "#ASCII|TL1#false",
          "tout": "300#5-43200|NEVER#false"
        },
        {
          "aid": "TL1#COML,COMA,COMB,TELNET,TL1#true",
          "baud": "#19200|9600|4800|2400|1200#false",
          "echo": "#ON|OFF#false",
          "eol": "#CR|LF|CRLF#false",
          "mode": "#ASCII|TL1#false",
          "tout": "NEVER#5-43200|NEVER#false"
        }
      ],
      "keepAlive": [
        {
          "tl1time": "0#0-60#false",
          "snmptime": "0#0-60#false"
        }
      ],
      "ip": [
        {
          "aid": "S1A02##true",
          "ip": "192.168.56.232#aaa.aaa.aaa.aaa#false",
          "ipmask": "255.255.255.0#mmm.mmm.mmm#false",
          "ipgateway": "192.168.56.1#ggg.ggg.ggg.ggg#false",
          "mac": "00A06E009978##true"
        }
      ],
      "aco": [
        {
          "aco": "INACTIVE#ACTIVE|INACTIVE#false"
        }
      ]
    },
    "others": {},
    "status": {}
  }
}

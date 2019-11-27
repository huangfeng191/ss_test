var clock = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "clk": [{
                "aid": "S1A01##true",
                "warmup": "1200#900-3600#false",
                "mintau": "1000#300–10000(ST2E),150–1200(ST3E)#false",
                "maxtau": "9000#300–10000(ST2E),150–1200(ST3E)#false",
                "clkar": "OFF#ON|OFF#false",
                "inpswt": "AR##true",
                "inpsel": "PRI##true",
                "mintaulimit": "300##true",
                "maxtaulimit": "10000##true",
                "tod_timeout": "1440##true"
            }],
            "status": [{
                "aid": "S1A01##true",
                "mstat": "SEL##true",
                "clock_mode": "HOLD#ACQ|LOCK|HOLD#false",
                "tau": "60##true",
                "pql": "5##true",
                "offset": "(0)##true",
                "sigma": "(5E-07)##true",
                "syn": "NO##true"
            }]
        },
        "others": {},
        "status": {}
    }
}

var system = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "operMode": [{
                "mode": "NORMAL#normal|Subtending|Japanese#false"
            }],
            "inputRef": [{
                "aid": "NA",
                "port": null,
                "swtmode": "AR#AR|AS|OFF#false",
                "selmode": "PRI#PRI|PQL#false"
            }],
            "tl1Format": [{
                "mode": "GR831#GR831|GR833#false"
            }],
            "name": [{ "aid": "S1A02##true", "name": "SSU_2000##false" }],
            "time": "2019-11-27 14:12:52",
            "pbo": [
                { "aid": "ALL##true", "mode": "REP#DIS|EVT|REP|NONE#false" }
            ]
        },
        "others": {},
        "status": {
            "clk": [{
                "aid": "S1A01##true",
                "mstat": "SEL##true",
                "clock_mode": "HOLD#ACQ|LOCK|HOLD#false",
                "tau": "60##true",
                "pql": "5##true",
                "offset": "(0)##true",
                "sigma": "(5E-07)##true",
                "syn": "NO##true"
            }]
        }
    }
}

var manage = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "comm": [{
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
            "keepAlive": [{
                "tl1time": "0#0-60#false",
                "snmptime": "0#0-60#false"
            }],
            "ip": [{
                "aid": "S1A02##true",
                "ip": "192.168.56.232#aaa.aaa.aaa.aaa#false",
                "ipmask": "255.255.255.0#mmm.mmm.mmm#false",
                "ipgateway": "192.168.56.1#ggg.ggg.ggg.ggg#false",
                "mac": "00A06E009978##true"
            }],
            "aco": [{
                "aco": "INACTIVE#ACTIVE|INACTIVE#false"
            }]
        },
        "others": {},
        "status": {}
    }
}
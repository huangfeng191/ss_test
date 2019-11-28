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
            "clk": [{
                "aid": "S1A01##true",
                "mstat": "SEL##true",
                "clock_mode": "HOLD#ACQ|LOCK|HOLD#false",
                "tau": "60##true",
                "pql": "5##true",
                "offset": "(0)##true",
                "sigma": "(5E-07)##true",
                "syn": "NO##true"
            }],
            "inputRef": [{
                "aid": "NA",
                "port": null,
                "swtmode": "AR#AR|AS|OFF#false",
                "selmode": "PRI#PRI|PQL#false"
            }],
            "tl1Format": [
                { "mode": "GR831#GR831|GR833#false" }
            ],
            "name": [{
                "aid": "S1A02##true",
                "name": "SSU_2000##false"
            }],
            "time": ["SSU_2000", "2019-11-27 16:16:00"],
            "pbo": [{
                "aid": "ALL##true",
                "mode": "REP#DIS|EVT|REP|NONE#false"
            }]
        },
        "others": {},
        "status": {}
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
                { "aid": "COMB#COML,COMA,COMB,TELNET,TL1#true", "baud": "9600#19200|9600|4800|2400|1200#false", "echo": "ON#ON|OFF#false", "eol": "CRLF#CR|LF|CRLF#false", "mode": "ASCII#ASCII|TL1#false", "tout": "300#5-43200|NEVER#false" },
                { "aid": "TELNET#COML,COMA,COMB,TELNET,TL1#true", "baud": "#19200|9600|4800|2400|1200#false", "echo": "#ON|OFF#false", "eol": "#CR|LF|CRLF#false", "mode": "#ASCII|TL1#false", "tout": "300#5-43200|NEVER#false" },
                { "aid": "TL1#COML,COMA,COMB,TELNET,TL1#true", "baud": "#19200|9600|4800|2400|1200#false", "echo": "#ON|OFF#false", "eol": "#CR|LF|CRLF#false", "mode": "#ASCII|TL1#false", "tout": "NEVER#5-43200|NEVER#false" }
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

var input = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "input": [
                { "aid": "S1A04#S1Ay[-z]#true", "port": "01##true", "pstate": "ON#ON|OFF#false", "pri": "1#1-10|MON#false", "pql": "7#1-16#false", "mode": "CCS#CCS|CAS|1|1.544|5|10#false", "ssm": "ON#ON|OFF#false", "zs": "ON#ON|OFF#false", "crc": "ON#ON|OFF#false", "gain": "OFF#ON|OFF#false", "csflt": "OFF#HI|LO|OFF#false", "bit": "4#4-8#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "02##true", "pstate": "OFF#ON|OFF#false", "pri": "3#1-10|MON#false", "pql": "3#1-16#false", "mode": "2.048#CCS|CAS|1|1.544|5|10#false", "ssm": "ON#ON|OFF#false", "zs": "ON#ON|OFF#false", "crc": "ON#ON|OFF#false", "gain": "OFF#ON|OFF#false", "csflt": "NA#HI|LO|OFF#false", "bit": "4#4-8#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "03##true", "pstate": "OFF#ON|OFF#false", "pri": "1#1-10|MON#false", "pql": "3#1-16#false", "mode": "10#CCS|CAS|1|1.544|5|10#false", "ssm": "ON#ON|OFF#false", "zs": "ON#ON|OFF#false", "crc": "ON#ON|OFF#false", "gain": "OFF#ON|OFF#false", "csflt": "NA#HI|LO|OFF#false", "bit": "8#4-8#false" }
            ],
            "name": [
                { "aid": "S1A04##true", "port": "01##true", "name": "OT21##false" },
                { "aid": "S1A04##true", "port": "02##true", "name": "HAISONG ##false" },
                { "aid": "S1A04##true", "port": "03##true", "name": "CS4310##false" }
            ]
        },
        "others": {},
        "status": {
            "input": [
                { "aid": "S1A04", "port": "01", "mstat": "OK", "pstate": "FLT", "pha": "NA", "phb": "NA", "pql": "7" },
                { "aid": "S1A04", "port": "02", "mstat": "OK", "pstate": "DIS", "pha": "NA", "phb": "NA", "pql": "3" },
                { "aid": "S1A04", "port": "03", "mstat": "OK", "pstate": "DIS", "pha": "NA", "phb": "NA", "pql": "3" }
            ],
            "data": [
                { "aid": "S1A04", "port": "01", "type": "LOS", "_err": "477", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "AIS", "_err": "0", "_clr": "148777" },
                { "aid": "S1A04", "port": "01", "type": "OOF", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "BPV", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "CRC", "_err": "0", "_clr": "111756" },
                { "aid": "S1A04", "port": "02", "type": "LOS", "_err": "21", "_clr": "0" },
                { "aid": "S1A04", "port": "02", "type": "AIS", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "02", "type": "OOF", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "02", "type": "BPV", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "02", "type": "CRC", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "LOS", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "AIS", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "OOF", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "BPV", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "CRC", "_err": "0", "_clr": "0" }
            ],
            "freq": []
        }
    }
}


var output = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "clkout": [],
            "e1": [{
                "aid": "S1A07#SxAy[-z]#true",
                "mode": "CAS#CAS|CSS#false",
                "bypass": "OFF#ON|OFF#false",
                "zs": "ON#ON|OFF#false",
                "signal": "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#E1|2048#false",
                "pstate": "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1#ON|OFF#false",
                "squelch": "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0#0-16#false",
                "crc": "ON#ON|OFF#false",
                "ssm": "ON#ON|OFF#false",
                "bit": "8#4-8#false"
            }]
        },
        "others": {},
        "status": {
            "output": [{
                "aid": "S1A07",
                "port": null,
                "mstat": "OK",
                "red": "NA",
                "clksrc": "CLK-A",
                "pql": "5",
                "pstate": "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1"
            }]
        }
    }
}
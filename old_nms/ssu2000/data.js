// OK
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
// OK
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
            "tl1Format": [{ "mode": "GR831#GR831|GR833#false" }],
            "name": [{ "aid": "S1A02##true", "name": "SSU_2000##false" }],
            "time": [{ "name": "SSU_2000", "time": "2019-11-28 09:00:19", "zone": null }],
            "pbo": [{ "aid": "ALL##true", "mode": "REP#DIS|EVT|REP|NONE#false" }]
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

var input = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "input": [{
                    "aid": "S1A04##true",
                    "port": "01##true",
                    "pstate": "ON#ON|OFF#false",
                    "pri": "1#1-10|MON#false",
                    "pql": "7#1-16#false",
                    "mode": "CCS#CCS|CAS|1|1.544|5|10#false",
                    "ssm": "ON#ON|OFF#false",
                    "zs": "ON#ON|OFF#false",
                    "crc": "ON#ON|OFF#false",
                    "gain": "OFF#ON|OFF#false",
                    "csflt": "OFF#HI|LO|OFF#false",
                    "bit": "4#4-8#false",
                    "name": "OT21",
                    "mstat": "OK",
                    "state": "FLT",
                    "pha": "NA",
                    "phb": "NA",
                    "freqA": 0.0,
                    "freqB": 0.0
                },
                {
                    "aid": "S1A04##true",
                    "port": "02##true",
                    "pstate": "OFF#ON|OFF#false",
                    "pri": "3#1-10|MON#false",
                    "pql": "3#1-16#false",
                    "mode": "2.048#CCS|CAS|1|1.544|5|10#false",
                    "ssm": "ON#ON|OFF#false",
                    "zs": "ON#ON|OFF#false",
                    "crc": "ON#ON|OFF#false",
                    "gain": "OFF#ON|OFF#false",
                    "csflt": "NA#HI|LO|OFF#false",
                    "bit": "4#4-8#false",
                    "name": "HAISONG ",
                    "mstat": "OK",
                    "state": "DIS",
                    "pha": "NA",
                    "phb": "NA",
                    "freqA": 0.0,
                    "freqB": 0.0
                },
                { "aid": "S1A04##true", "port": "03##true", "pstate": "OFF#ON|OFF#false", "pri": "1#1-10|MON#false", "pql": "3#1-16#false", "mode": "10#CCS|CAS|1|1.544|5|10#false", "ssm": "ON#ON|OFF#false", "zs": "ON#ON|OFF#false", "crc": "ON#ON|OFF#false", "gain": "OFF#ON|OFF#false", "csflt": "NA#HI|LO|OFF#false", "bit": "8#4-8#false", "name": "CS4310", "mstat": "OK", "state": "DIS", "pha": "NA", "phb": "NA", "freqA": 0.0, "freqB": 0.0 }
            ],
            "name": [{
                    "aid": "S1A04##true",
                    "port": "01##true",
                    "name": "OT21##false"
                },
                { "aid": "S1A04##true", "port": "02##true", "name": "HAISONG ##false" },
                { "aid": "S1A04##true", "port": "03##true", "name": "CS4310##false" }
            ]
        },
        "others": {},
        "status": {
            "data": [
                { "aid": "S1A04", "port": "01", "type": "LOS", "_err": "8", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "AIS", "_err": "0", "_clr": "152456" },
                { "aid": "S1A04", "port": "01", "type": "OOF", "_err": "9", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "BPV", "_err": "9", "_clr": "0" },
                { "aid": "S1A04", "port": "01", "type": "CRC", "_err": "0", "_clr": "114409" }, { "aid": "S1A04", "port": "02", "type": "LOS", "_err": "21", "_clr": "0" }, { "aid": "S1A04", "port": "02", "type": "AIS", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "02", "type": "OOF", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "02", "type": "BPV", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "02", "type": "CRC", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "03", "type": "LOS", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "03", "type": "AIS", "_err": "0", "_clr": "0" },
                { "aid": "S1A04", "port": "03", "type": "OOF", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "03", "type": "BPV", "_err": "0", "_clr": "0" }, { "aid": "S1A04", "port": "03", "type": "CRC", "_err": "0", "_clr": "0" }
            ]
        }
    }
}

// card state 
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




var limit = {
    "code": 100000,
    "data": {
        "alarms": {},
        "params": {
            "mtie": [
                {
                    "aid": "S1A04#S1Ay[-z]#true",
                    "port": "01##true",
                    "mtie": "MTIE##true",
                    "threshold": "EL1#EL1|EL2|CL1|CL2#true",
                    "t10": "260#0-60000#false",
                    "t100": "440#0-60000#false",
                    "t1k": "810#0-60000#false",
                    "t10k": "880#0-60000#false",
                    "t100k": "1600#0-60000#false"
                },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "01##true", "mtie": "MTIE##true", "threshold": "EL2#EL1|EL2|CL1|CL2#true", "t10": "325#0-60000#false", "t100": "550#0-60000#false", "t1k": "1010#0-60000#false", "t10k": "1100#0-60000#false", "t100k": "2000#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "01##true", "mtie": "MTIE##true", "threshold": "CL1#EL1|EL2|CL1|CL2#true", "t10": "230#0-60000#false", "t100": "400#0-60000#false", "t1k": "730#0-60000#false", "t10k": "790#0-60000#false", "t100k": "1440#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "01##true", "mtie": "MTIE##true", "threshold": "CL2#EL1|EL2|CL1|CL2#true", "t10": "290#0-60000#false", "t100": "490#0-60000#false", "t1k": "910#0-60000#false", "t10k": "990#0-60000#false", "t100k": "1800#0-60000#false" },

                { "aid": "S1A04#S1Ay[-z]#true", "port": "02##true", "mtie": "MTIE##true", "threshold": "EL1#EL1|EL2|CL1|CL2#true", "t10": "23#0-60000#false", "t100": "43#0-60000#false", "t1k": "240#0-60000#false", "t10k": "310#0-60000#false", "t100k": "0#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "02##true", "mtie": "MTIE##true", "threshold": "EL2#EL1|EL2|CL1|CL2#true", "t10": "28#0-60000#false", "t100": "53#0-60000#false", "t1k": "300#0-60000#false", "t10k": "390#0-60000#false", "t100k": "0#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "02##true", "mtie": "MTIE##true", "threshold": "CL1#EL1|EL2|CL1|CL2#true", "t10": "20#0-60000#false", "t100": "40#0-60000#false", "t1k": "215#0-60000#false", "t10k": "280#0-60000#false", "t100k": "0#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "02##true", "mtie": "MTIE##true", "threshold": "CL2#EL1|EL2|CL1|CL2#true", "t10": "25#0-60000#false", "t100": "48#0-60000#false", "t1k": "270#0-60000#false", "t10k": "350#0-60000#false", "t100k": "0#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "03##true", "mtie": "MTIE##true", "threshold": "EL1#EL1|EL2|CL1|CL2#true", "t10": "23#0-60000#false", "t100": "43#0-60000#false", "t1k": "240#0-60000#false", "t10k": "310#0-60000#false", "t100k": "1030#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "03##true", "mtie": "MTIE##true", "threshold": "EL2#EL1|EL2|CL1|CL2#true", "t10": "28#0-60000#false", "t100": "53#0-60000#false", "t1k": "300#0-60000#false", "t10k": "390#0-60000#false", "t100k": "1290#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "03##true", "mtie": "MTIE##true", "threshold": "CL1#EL1|EL2|CL1|CL2#true", "t10": "20#0-60000#false", "t100": "40#0-60000#false", "t1k": "215#0-60000#false", "t10k": "280#0-60000#false", "t100k": "930#0-60000#false" },
                { "aid": "S1A04#S1Ay[-z]#true", "port": "03##true", "mtie": "MTIE##true", "threshold": "CL2#EL1|EL2|CL1|CL2#true", "t10": "25#0-60000#false", "t100": "48#0-60000#false", "t1k": "270#0-60000#false", "t10k": "350#0-60000#false", "t100k": "1160#0-60000#false" }
            ],
            "freq": [{
                    "aid": "S1A04#SxAy[-z]#true",
                    "port": "01##true",
                    "freq": "FREQ##true",
                    "fae": "16000#0-10000000#false",
                    "fac": "12000#0-10000000#false",
                    "fbe": "16000#0-10000000#false",
                    "fbc": "12000#0-10000000#false",
                    "fatau": "400#10-1000#false",
                    "fbtau": "400#10-1000#false"
                },
                { "aid": "S1A04#SxAy[-z]#true", "port": "02##true", "freq": "FREQ##true", "fae": "16000#0-10000000#false", "fac": "12000#0-10000000#false", "fbe": "16000#0-10000000#false", "fbc": "12000#0-10000000#false", "fatau": "400#10-1000#false", "fbtau": "400#10-1000#false" },
                { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "freq": "FREQ##true", "fae": "16000#0-10000000#false", "fac": "12000#0-10000000#false", "fbe": "16000#0-10000000#false", "fbc": "12000#0-10000000#false", "fatau": "400#10-1000#false", "fbtau": "400#10-1000#false" }
            ],
            "fault": [
                {
                    "aid": "S1A04#SxAy[-z]#true",
                    "port": "01##true",
                    "prmtr": "LOS##true",
                    "errcnt": "10#1-100#false",
                    "clrcnt": "5#1-100#false"
                },
                { "aid": "S1A04#SxAy[-z]#true", "port": "01##true", "prmtr": "AIS##true", "errcnt": "12#1-100#false", "clrcnt": "5#1-100#false" },
                { "aid": "S1A04#SxAy[-z]#true", "port": "01##true", "prmtr": "OOF##true", "errcnt": "14#1-10000#false", "clrcnt": "5#1-10000#false" },
                { "aid": "S1A04#SxAy[-z]#true", "port": "01##true", "prmtr": "BPV##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" },
                { "aid": "S1A04#SxAy[-z]#true", "port": "01##true", "prmtr": "CRC##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" },
                
                {
                    "aid": "S1A04#SxAy[-z]#true",
                    "port": "02##true",
                    "prmtr": "LOS##true",
                    "errcnt": "10#1-100#false",
                    "clrcnt": "5#1-100#false"
                }, 
                { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "prmtr": "LOS##true", "errcnt": "10#1-100#false", "clrcnt": "5#1-100#false" },
                { "aid": "S1A04#SxAy[-z]#true", "port": "02##true", "prmtr": "AIS##true", "errcnt": "12#1-100#false", "clrcnt": "5#1-100#false" },
                 { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "prmtr": "AIS##true", "errcnt": "12#1-100#false", "clrcnt": "5#1-100#false" },
                 
                { "aid": "S1A04#SxAy[-z]#true", "port": "02##true", "prmtr": "OOF##true", "errcnt": "14#1-10000#false", "clrcnt": "5#1-10000#false" },
                 { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "prmtr": "OOF##true", "errcnt": "14#1-10000#false", "clrcnt": "5#1-10000#false" },
                
                { "aid": "S1A04#SxAy[-z]#true", "port": "02##true", "prmtr": "BPV##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" },
                 { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "prmtr": "BPV##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" },
                 
                { "aid": "S1A04#SxAy[-z]#true", "port": "02##true", "prmtr": "CRC##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" },
                 { "aid": "S1A04#SxAy[-z]#true", "port": "03##true", "prmtr": "CRC##true", "errcnt": "16#1-10000#false", "clrcnt": "5#1-10000#false" }
            ],
            "mtieMask": [{
                    "aid": "S1A04#S1Ay[-z]#true",
                    "port": "03##true",
                    "name": "G811#PRS|DS1|G811|G823#false"
                },
                {
                    "aid": "S1A04#S1Ay[-z]#true",
                    "port": "01##true",
                    "name": "DS1#PRS|DS1|G811|G823#false"
                },
                {
                    "aid": "S1A04#S1Ay[-z]#true",
                    "port": "02##true",
                    "name": "User Defined#PRS|DS1|G811|G823#false"
                }
            ]
        },
        "others": {},
        "status": {}
    }
}
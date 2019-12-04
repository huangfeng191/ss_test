var old_logic
    = {
        "code": 100000,
        "data": {
            "RTMA-2": {
                "rtmlbo": "0",
                "freeflt": "CUTTHRU",
                "rtmstate": "ENABLE",
                "rtmslip": "0",
                "rtmstatus": "UNEQUIPPED",
                "holdflt": "CUTTHRU"
            },
            "RTMB-1": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "CUTTHRU" },
            "GPS": { "mode": "", "instate": "DISABLE", "UTC": "", "POS": "", "qlevel": "3", "elevmask": "", "gpsstatus": "OK", "priority": "2" },
            "RTMA-1": { "rtmlbo": "1", "freeflt": "CUTTHRU", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "CUTTHRU" },
            "NTP": {},
            "RTMC-2": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
            "RTMD-1": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
            "RTMB-2": { "rtmlbo": "0", "freeflt": "CUTTHRU", "rtmstate": "DISABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
            "RTMC-1": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
            "COMR": { "baud": "2400", "echo": "DISABLE", "flow": "HW" },
            "RTMD-2": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
            "PRS": { "frmtype": "2M", "instate": "ENABLE", "prsstatus": "ALM", "qlevel": "3", "priority": "2" },
            "COML": { "baud": "19200", "echo": "DISABLE", "flow": "NONE" },
            "IOC1": { "clktype": "TYPEII", "ioccomm": "IOC1TO2COMM-OK", "iocstatus": "ALM", "imccomm": "IMC1COMM-OK", "iocstate": "OOSRV", "iocmode": "STANDBY", "clkmode": "" },
            "COMI": { "ipsubnet": "255.255.255.0", "ipgate": "255.255.255.0", "echo": "DISABLE", "ipaddr": "192.168.1.110" },
            "IOC2": { "clktype": "TYPEI", "ioccomm": "IOC2TO1COMM-OK", "iocstatus": "OK", "imccomm": "IMC2COMM-OK", "iocstate": "OOSRV", "iocmode": "STANDBY", "clkmode": "" },
            "IMC": { "ioc1comm": "OK", "ioc2comm": "OK" },
            "INP1": { "crcena": "DISABLE", "frmtype": "2M", "instate": "DISABLE", "ssmbit": "8", "qlevel": "6", "inpstatus": "OK", "priority": "1", "rqlevel": "6", "ssmena": "DISABLE" },
            "INP2": { "crcena": "DISABLE", "frmtype": "2M", "instate": "ENABLE", "ssmbit": "8", "qlevel": "2", "inpstatus": "ALM", "priority": "2", "rqlevel": "2", "ssmena": "DISABLE" },
            "SYS": { "pwra": "ALM", "inacttime": "180", "pwrb": "OK", "ioc1eqpt": "EQPT", "refmode": "AUTO", "inpref": "NONE", "ioc2eqpt": "EQPT", "syncmode": "SSU", "logecho": "ENABLE\r", "sysqlevel": "2", "fltdelay": "10", "lastdat": "03-01-24", "lasttim": "05-22-51", "clrdelay": "111", "expeqpt": "UNEQPT", "extalm2": "OK", "extalm1": "OK" },
            "OUTC": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
            "E422C": { "freeflt": "SQUELCH", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
            "OUTB": { "freeflt": "SQUELCH", "frmtype": "CAS", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
            "E422D": { "freeflt": "ON", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
            "OUTD": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
            "OUTA": { "freeflt": "ON", "frmtype": "2M", "outstatus": "", "outstate": "ENABLE", "holdflt": "ON" },
            "E422A": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
            "E422B": { "freeflt": "SQUELCH", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "ENABLE", "holdflt": "ON" }
        }
    }


var new_logic=
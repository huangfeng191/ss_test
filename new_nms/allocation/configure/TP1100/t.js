var old_logic = {
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
        "RTMA-1": { "rtmlbo": "1", "freeflt": "CUTTHRU", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "CUTTHRU" },
        "NTP": {},
        "RTMC-2": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
        "RTMD-1": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
        "RTMB-2": { "rtmlbo": "0", "freeflt": "CUTTHRU", "rtmstate": "DISABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
        "RTMC-1": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
        "COMR": { "baud": "2400", "echo": "DISABLE", "flow": "HW" },
        "RTMD-2": { "rtmlbo": "0", "freeflt": "RETIME", "rtmstate": "ENABLE", "rtmslip": "0", "rtmstatus": "UNEQUIPPED", "holdflt": "RETIME" },
        "COML": { "baud": "19200", "echo": "DISABLE", "flow": "NONE" },
        "IOC1": { "clktype": "TYPEII", "ioccomm": "IOC1TO2COMM-OK", "iocstatus": "ALM", "imccomm": "IMC1COMM-OK", "iocstate": "OOSRV", "iocmode": "STANDBY", "clkmode": "" },
        "COMI": { "ipsubnet": "255.255.255.0", "ipgate": "255.255.255.0", "echo": "DISABLE", "ipaddr": "192.168.1.110" },
        "IOC2": { "clktype": "TYPEI", "ioccomm": "IOC2TO1COMM-OK", "iocstatus": "OK", "imccomm": "IMC2COMM-OK", "iocstate": "OOSRV", "iocmode": "STANDBY", "clkmode": "" },
        "IMC": { "ioc1comm": "OK", "ioc2comm": "OK" },
        
        
        "INP1": { "crcena": "DISABLE", "frmtype": "2M", "instate": "DISABLE", "ssmbit": "8", "qlevel": "6", "inpstatus": "OK", "priority": "1", "rqlevel": "6", "ssmena": "DISABLE" },
        "INP2": { "crcena": "DISABLE", "frmtype": "2M", "instate": "ENABLE", "ssmbit": "8", "qlevel": "2", "inpstatus": "ALM", "priority": "2", "rqlevel": "2", "ssmena": "DISABLE" },
        "PRS": { "frmtype": "2M", "instate": "ENABLE", "prsstatus": "ALM", "qlevel": "3", "priority": "2" },
        "GPS": { "mode": "", "instate": "DISABLE", "UTC": "", "POS": "", "qlevel": "3", "elevmask": "", "gpsstatus": "OK", "priority": "2" },
        
        
        "SYS": { "pwra": "ALM", "inacttime": "180", "pwrb": "OK", "ioc1eqpt": "EQPT", "refmode": "AUTO", "inpref": "NONE", "ioc2eqpt": "EQPT", "syncmode": "SSU", "logecho": "ENABLE\r", "sysqlevel": "2", "fltdelay": "10", "lastdat": "03-01-24", "lasttim": "05-22-51", "clrdelay": "111", "expeqpt": "UNEQPT", "extalm2": "OK", "extalm1": "OK" },
        
        
        "OUTA": { "freeflt": "ON", "frmtype": "2M", "outstatus": "", "outstate": "ENABLE", "holdflt": "ON" },
        "OUTC": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
        
        
        "E422C": { "freeflt": "SQUELCH", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
        "OUTB": { "freeflt": "SQUELCH", "frmtype": "CAS", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
        "E422D": { "freeflt": "ON", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
        "OUTD": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "", "outstate": "DISABLE", "holdflt": "ON" },
        "E422A": { "freeflt": "SQUELCH", "frmtype": "2M", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "holdflt": "ON" },
        "E422B": { "freeflt": "SQUELCH", "frmtype": "1.544M", "outstatus": "UNEQUIPPED", "outstate": "ENABLE", "holdflt": "ON" }
    }
}


var new_logic = {
    "code": 100000,
    "data": [
        { "name": "IOC1,EQPT", "iocstatus": "CL", "ioccomm": "SYNTHEOR", "imccomm": "SA", "iocstate": "03-01-25", "iocmode": "10-48-41", "clkmode": "", "clktype": "" },
        { "name": "SYS", "pwra": "ALM", "pwrb": "OK", "expeqpt": "UNEQPT", "extalm1": "OK", "extalm2": "OK", "ioc1eqpt": "EQPT", "ioc2eqpt": "EQPT", "sysqlevel": "6", "lastdat": "2003-01-24", "lasttim": "16-56-47", "syncmode": "SSU", "refmode": "AUTO", "inpref": "NONE", "clrdelay": "111", "fltdelay": "10", "inacttime": "180", "logecho": "ENABLE" },
    
    
        { "name": "IMC", "ioc1comm": "OK", "ioc2comm": "OK" },
        { "name": "COML", "baud": "19200", "flow": "NONE", "echo": "DISABLE" },
        { "name": "COMR", "baud": "2400", "flow": "HW", "echo": "DISABLE" },
        { "name": "COMI", "ipaddr": "192.168.1.110", "ipgate": "255.255.255.0", "ipsubnet": "255.255.255.0", "echo": "DISABLE" },
      
    //   clock 
        { "name": "IOC1", "iocstatus": "ALM", "ioccomm": "IOC1TO2COMM-OK", "imccomm": "IMC1COMM-OK", "iocstate": "OOSRV", "iocmode": "STANDBY", "clkmode": "", "clktype": "TYPEII" },
        { "name": "IOC2", "iocstatus": "OK", "ioccomm": "IOC2TO1COMM-OK", "imccomm": "IMC2COMM-OK", "iocstate": "INSRV", "iocmode": "ACTIVE", "clkmode": "HOLDOVER", "clktype": "ST3E" },
  
        // source 
        { "name": "GPS", "gpsstatus": "OK", "instate": "DISABLE", "qlevel": "3", "priority": "2", "utc": "", "mode": "", "pos": "", "elevmask": "" },
        { "name": "PRS", "prsstatus": "ALM", "instate": "ENABLE", "qlevel": "3", "priority": "2", "frmtype": "2M" },
        { "name": "INP1", "inpstatus": "ALM", "instate": "ENABLE", "qlevel": "1", "priority": "1", "frmtype": "2M", "rqlevel": "1", "crcena": "ENABLE", "ssmena": "DISABLE", "ssmbit": "4" },
        { "name": "INP2", "inpstatus": "ALM", "instate": "ENABLE", "qlevel": "2", "priority": "2", "frmtype": "2M", "rqlevel": "2", "crcena": "DISABLE", "ssmena": "DISABLE", "ssmbit": "8" },
      
    //   out 
        { "name": "OUTA", "outstatus": "OK", "outstate": "ENABLE", "frmtype": "2M", "freeflt": "ON", "holdflt": "ON" },
        { "name": "OUTB", "outstatus": "OK", "outstate": "DISABLE", "frmtype": "CAS", "freeflt": "SQUELCH", "holdflt": "ON" },
        { "name": "OUTC", "outstatus": "OK", "outstate": "DISABLE", "frmtype": "2M", "freeflt": "SQUELCH", "holdflt": "ON" },
        { "name": "OUTD", "outstatus": "OK", "outstate": "DISABLE", "frmtype": "2M", "freeflt": "SQUELCH", "holdflt": "ON" },
       
       
       
        { "name": "RTMA-1", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "1", "freeflt": "CUTTHRU", "holdflt": "CUTTHRU", "rtmslip": "0" },
        { "name": "RTMA-2", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "CUTTHRU", "holdflt": "CUTTHRU", "rtmslip": "0" },
        { "name": "RTMB-1", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "RETIME", "holdflt": "CUTTHRU", "rtmslip": "0" },
        { "name": "RTMB-2", "rtmstatus": "UNEQUIPPED", "rtmstate": "DISABLE", "rtmlbo": "0", "freeflt": "CUTTHRU", "holdflt": "RETIME", "rtmslip": "0" },
        { "name": "RTMC-1", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "RETIME", "holdflt": "RETIME", "rtmslip": "0" },
        { "name": "RTMC-2", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "RETIME", "holdflt": "RETIME", "rtmslip": "0" },
        { "name": "RTMD-1", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "RETIME", "holdflt": "RETIME", "rtmslip": "0" },
        { "name": "RTMD-2", "rtmstatus": "UNEQUIPPED", "rtmstate": "ENABLE", "rtmlbo": "0", "freeflt": "RETIME", "holdflt": "RETIME", "rtmslip": "0" },
        { "name": "E422A", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "frmtype": "2M", "freeflt": "SQUELCH", "holdflt": "ON" },
        { "name": "E422B", "outstatus": "UNEQUIPPED", "outstate": "ENABLE", "frmtype": "1.544M", "freeflt": "SQUELCH", "holdflt": "ON" },
        { "name": "E422C", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "frmtype": "1.544M", "freeflt": "SQUELCH", "holdflt": "ON" },
        { "name": "E422D", "outstatus": "UNEQUIPPED", "outstate": "DISABLE", "frmtype": "1.544M", "freeflt": "ON", "holdflt": "ON" },
        { "name": "NTPAUTHEN", "authen": "DISABLE" }
    ],
    "message": "操作成功"
}



var ret={
    "input":[
     {"field":"GPS","data":{"qLevel":"1","type":"GPS"},"state":"grey" },
     {"field":"PRS","data":{"qLevel":"","type":"PRS"},"state":"grey" },
     {"field":"INP1","data":{"qLevel":"3","type":"INP1"},"state":"grey" },
     {"field":"INP2","data":{"qLevel":"","type":"INP2"},"state":"grey" },
   ],

   "output":[
     {"field":"OUTA","data":{"frameType":"1","text":"OUTA"},"state":"grey" },
     {"field":"OUTB","data":{"frameType":"","text":"OUTB"},"state":"grey" },
     {"field":"OUTC","data":{"frameType":"3","text":"OUTC"},"state":"grey" },
     {"field":"OUTD","data":{"frameType":"","text":"OUTD"},"state":"grey" },
   ],


   "clock":[
     {"field":"IOC1","data":{"text":"IOC1"},"state":"grey"},
     {"field":"IOC2","data":{"text":"IOC2"},"state":"grey"},
   ],
   "system":{
     "data":{
      "field":"SYS",
      "systemMode":"",
     "inputSelectionMode":""
     }
   },
   "lines":{
     "IOC1":"grey",
     "IOC2":"grey",
     "canOut":"grey" // 
   }
 }

var a=old_logic;
 Object.keys(a.data||[]).forEach(function(k,i){
       var v=a.data[k];
       
       if(["INP1","INP2","GPS","PRS"].includes(k)){
        
           var one=ret.input.filter(function(iv,ii){
             return iv.field==k;
           })[0]
           
           if (v.instate=="DISABLE"){
              one["state"]="grey"
           }else if(v.instate=="ENABLE"){
            if (v.inpstatus=="OK" || v.gpsstatus=="OK" || v.prsstatus=="OK"){
              one["state"]="green"
            }else{
              one["state"]="middle"
            }
           }          
           one["data"]["frameType"]=v.frmtype;
           
           one["data"]["qLevel"]=v.qlevel
       }


       if(["OUTA","OUTB","OUTC","OUTD"].includes(k)){
        
        var one=ret.output.filter(function(iv,ii){
          return iv.field==k;
        })[0]
        
     
         if (v.outstate=="ENABLE"){
           one["state"]="green"
         }else{
           one["state"]="grey"
         }
                
        one["data"]["frameType"]=v.frmtype;
        
       
    }


       if(["IOC1","IOC2"].includes(k)){
          
        var one=ret.clock.filter(function(iv,ii){
          return iv.field==k;
        })[0]
        
     
         if (v.iocstatus=="OK"){
           one["state"]="green"
           ret["lines"][k]="green"

         }else{
           one["state"]="grey"
         }
                
        one["data"]["frameType"]=v.frmtype;
        
        one["data"]["qLevel"]=v.qlevel
    }





       if(["SYS"].includes(k)){
        var one=ret.system;
        one["data"]["systemMode"]=v.syncmode;
        one["data"]["inputSelectionMode"]=v.refmode;
       }
  }) 


  console.log(JSON.stringify(ret))
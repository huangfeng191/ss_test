ntpService: function(m, y, t) {
    var str = this.nullFun(t),
        err = this.formatErrorFun(t),
        s = t.use() === 'ch' ? "请选择" : "Please select ";
 
   

    if (!verifyFun.isNumber(m["ntpServerBroadcastInterval"]) || !verifyFun.between(m["ntpServerBroadcastInterval"], 1, 9)) {
        y.ngAlert(this.fe("ntpServerBroadcastInterval", 3, 17,t), "warning")
        return false;
    }

    if (!verifyFun.isNumber(m["ntpServerManycastInterval"]) || !verifyFun.between(m["ntpServerManycastInterval"], 1, 9)) {
        y.ngAlert(this.fe("ntpServerManycastInterval", 3, 17,t), "warning")
        return false;
    }


  
    // if (!verifyFun.isIp(m["gatewayAddress"])) {
    //     y.ngAlert("GATEWAY" + err, "warning")
    //     return false;
    // }
    return true;
},
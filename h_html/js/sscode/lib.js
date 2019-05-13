var SsCenter = {
    alarmTypes: {
        "greent": "normal",
        "green": "normal",
        "gery": "offline",
        "grey": "offline",
        "EVENT": "event",
        "blue": "event",
        "MAJOR": "major",
        "pink": "major",
        "MINOR": "minor",
        "yellow": "minor",
        "CRITI": "serious",
        "red": "serious"

    },
    sessionID: window.localStorage.getItem("sessionID"),
    deviceInfo: {
        current: null,
        changed: null,
        details: {

        }
    },
    broadCast: function(method, data, isMain) {
        if (!data) {
            data = null
        }
        var ifr = document.getElementById('content');
        var win = ifr.window || ifr.contentWindow;
        if (this.theme["key"]=="index") {
            win = window.top;
        }
        if (method && win && this.theme.key && win.broadcastMethod && win.broadcastMethod[method]) {
            win.broadcastMethod[method](data);
        }

        //
    },

    setCurrentDevice: function(device) {
        this.deviceInfo.current = $.extend({}, device);
        this.deviceInfo.changed = new Date().getTime();

    },
    getCurrentDevice: function() {
        if (this.deviceInfo.current) {
            return this.deviceInfo.current
        } else {
            return null;
        }
    },
    setDeviceOne: function(device,flag) {
        if (!device) return;

        if (!this.deviceInfo.details[device.id]) {
            this.deviceInfo.details[device.id] = {}
        }
        one = this.deviceInfo.details[device.id];
       
        one.id = device.id;
        one.alarmsCount=device.alarmsCount
        one.alarmType = "normal";
        var refreshId="";
        if (device.status &&( this.alarmTypes[device.status] || "normal" !=one.alarmType) ) {
            one.alarmType = this.alarmTypes[device.status] || "normal";
            todo=true
        }
        
        if(flag=="do"){
           
            this.broadCast("refreshDevices",[one.id])  
        }else{
            return refreshId;
        }




    },
    setDeviceDetails: function(details) {
        $.each(details, function(oi, ov) {
            if (!this.deviceInfo.details[ov.id]) {
                this.deviceInfo.details[ov.id] = {}
            }
            one = this.deviceInfo.details[ov.id];
            this.setDeviceOne(one);
        })
    },
    getDeviceAlarm: function(id) {
        a = this.deviceInfo.details;
        var ret = null;
        if (id) {
            device = a[id];
            ret = a["alarmType"];
        } else {
            o = {}
            $.each(a, function(oi, ov) {
                o[ai] = av.alarmType;
            })
            ret = o
        }
        return ret;
    },
    themeChange: function(theme) {
        this.theme.key = theme;
    },
    theme: {
        "key": "index"
    },
    themes: {
        "index": {

        },
        "topology": {

        },
        "configure": {

        },
        "warning": {

        },
        "performance": {

        },
        "operation": {

        },
        "system": {

        },
        "help": {

        }
    }
}


var bindings={
    EnableDisable: [
      { "Name": "请选择", "Value": "" },
      { "Name": "disable", "Value": "0" },
      { "Name": "enable", "Value": "1" }
    ],
    EnableDisableRequest: [
        { "Name": "请选择", "Value": "" },
        { "Name": "disable", "Value": "0" },
        { "Name": "enable", "Value": "1" }
      ],
    GnssMode: [
      { "Name": "请选择", "Value": "" },
      { "Name": "Auto", "Value": "0" },
      { "Name": "Manual", "Value": "1" }
    ],
    GnssTrackMode: [
      { "Name": "请选择", "Value": "" },
      { "Name": "beidou", "Value": "0" },
      { "Name": "gps", "Value": "1" },
      { "Name": "priority-beidou", "Value": "2" },
      { "Name": "priority-gps", "Value": "3" }
    ],


    FrameType: [ //帧类型  e1 
      { "Name": "请选择", "Value": "" },
      { "Name": "freq1544KHz", "Value": "0" },
      { "Name": "freq2048KHz", "Value": "1" },
      { "Name": "ccs", "Value": "2" },
      { "Name": "cas", "Value": "3" },
      { "Name": "d4", "Value": "4" },
      { "Name": "esf", "Value": "5" },
    ],

    QualityGrade: [ //QUALITY_GRADE质量等级
      { "Name": "请选择", "Value": "" },
      { "Name": "QL_PRC", "Value": "1" },
      { "Name": "QL_UNK", "Value": "2" },
      { "Name": "QL_SSUT", "Value": "3" },
      { "Name": "QL_SSUL", "Value": "6" },
      { "Name": "QL_SEC", "Value": "7" },
      { "Name": "QL_DNU", "Value": "9" },
    ]



  };


function showTips(tipsValue) {
    var html = '<div class="modal-dialog">' +
        '<div class="modal-content" style="margin-top:30%">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title" id="myModalLabel">提示</h4>' +
        '</div>' +
        '<div class="modal-body device_add-modal" style="height:100px">' +
        '<div style = text-align:center;margin-top:3%;><h3>' + tipsValue + '</h3></div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>' +
        '</div>' +
        '</div>' +
        '</div>'
    return html;
}



var SsComm = {
    isEmpty: function(data) {
        if (data == null || data == undefined) return true;
        return JSON.stringify(data) == "{}" || JSON.stringify(data) == "[]"
    }
}
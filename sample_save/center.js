//  TODO: 
// 建立此文件的目的 是为了建立其他应用方便

var ssCenter = {
    deviceInfo: {
        current: {
            id: "",
        },
        changed: null
    },
    getCurrentDevice: function() {
        if (this.deviceInfo.current) {
            return this.deviceInfo.current
        } else {
            return null;
        }
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
            methods: {

            }
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
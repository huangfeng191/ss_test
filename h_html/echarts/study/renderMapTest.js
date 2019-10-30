remarks.test = {
    "desc": "简单的地图",
    // "default": true
}

var optionTest = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        "markPoint":{
            "symbol":"circle",
             data: [
                 {
                  type: 'min'
             }
                 ]
        }
    }]
};

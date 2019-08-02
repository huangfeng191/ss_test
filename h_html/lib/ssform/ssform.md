var setting= {
    AfterRender: function(x) {
    },
    "Class": "that",
    "bindings": {
      GnssState: [
        { "Name": "请选择", "Value": "" },
        { "Name": "disable", "Value": "0" },
        { "Name": "enable", "Value": "1" }
      ],

    },
    "Form": [{
      "Buttons": [
        { "Cmd": "insert", "Name": "设置", "Class": "btn-primary" },
        { "Cmd": "print", "Name": "打印", "Class": "btn-primary" }
      ],
      "Inputs": [
        [{ "title": "GNSS1使能", "field": "gnss1State", "showType": "select", binding: "GnssState" }],
        [{ "title": "优先级", "field": "gnss1Priority", "showType": "text", }],
        [{ "title": "经度", "field": "gnss1CurrentPositionJ", "showType": "text", }],
        [{ "title": "纬度", "field": "gnss1CurrentPositionW", "showType": "text", }],
        [{ "title": "高度", "field": "gnss1CurrentPositionH", "showType": "text", }],

      ]
    }]
  }
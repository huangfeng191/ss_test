{
    
    "bindings": [],
        "Form": [

        ],
}

setting={
    "title":"用户添加",
    "width":"330";
    "bindings": {
        "STATE": [
          { "Name": "", "Value": null },
          { "Name": "开始", "Value": "start" },
          { "Name": "结束", "Value": "end" },
        ]
      },
      "Form": [
        {
        "Inputs": [
          [
            { title: "Name", field: "Sn" },
          ],
          [
            { title: "LiSa001", field: "Lisa001" },
          ],
          [
            { title: "LiSa001", field: "Lisa002", ShowType: "select", binding: "STATE" },
          ]
        ]
      }]
    }
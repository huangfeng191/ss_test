var setting={
      "title": "用户添加",
      "width": "330",
      "bindings": {
        "Gender": [
          { "Name": "男", "Value": "male" },
          { "Name": "女", "Value": "female" },
        ]
      },
      "Form": [{
        "Inputs": [
          [
            { title: "Sn", field: "sn" },
          ],
          [
            { title: "Name", field: "name" },
          ],
          [
            { title: "sex", field: "sex", showType: "select", binding: "Gender" },
          ]
        ]
      }],
      "data": {
        "sn": 111,
        "name":"fred"
      },
      "confirm":function($dom,data){
            
        $("#ssModalDialog").modal("hide");
      }
    }

    $("#ssModalDialog").ssModal(modal);
    $("#ssModalDialog").modal("show");
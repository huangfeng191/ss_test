

                myData.forEach(function(x) {
                    x.value[0] = parseFloat(x.value[0]);
                    x.value[1] = parseFloat(x.value[1]);
                    x.value[2]=  {
                  "id": "db9df08c"+Math.ceil(Math.random()*10000),
                  "type": "NEG",
                  "status": "greent",
                  "nodeOrDevice": "2",
                  "groupAddress": "cs111",
                  "remark": ""
                  }
                    x.name=x.name+Math.ceil(Math.random()*10000);
                  })
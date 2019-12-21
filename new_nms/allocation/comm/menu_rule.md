``` js

a=
{
          value: "newMenu",
          label: "newMenu",
          template: '{"name":"${0}","id":"${1}",parentId: "${2}",},',
          param: [
          ],
          protoRowTranslate: [
            {
              k: "fun",
              v: function(arr, index, self) {
                let MDParam = self.protoParam.MDTitle;
                if (MDParam.length > 0) {
                  if (MDParam[index] && MDParam[index][0]) {
                    
                    if(MDParam[index][0]!=arr[1]){
                    arr[1] = MDParam[index][0] + "-" + (arr[1] || "");
                    arr[2] = MDParam[index][0]
                    }
                  }
                }

                return arr;
              }
            }
          ],
          fix: {
            roles: [
            ],
            fixRoles: [
              {
              }
            ],
            param: []
          }
        }
```
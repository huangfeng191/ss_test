
# name field dataType showType d||binding   
```js
var role={
    value: "InputThreeMD",
    label: "InputThreeMD",
    template:
      '{ "Field": "${1}", "Name": "${0}",DataType: "${2:String}", ShowType: "${3:text}", Ext: "${31}", "Required": false, RowSpan: 1, ColSpan: "$?ColSpan:1?" },',
    param: [
      {
        k: "2",
        v: [{ k: "replace", v: { string: "String", int: "Number", double: "Number" } }]
      },
      {
        k: "3",
        v: [
          { k: "filterStr", v: [{ k: "notNumber", operate: "and" }] },
          { k: "replace", v: { c: "combo", d: "datetime", a: "textarea", u: "upload", t: "text" } }
        ]
      },
      {
        k: "31",
        v: [
          { k: "copy", v: { "3": true }, scope: ["c", "d"] },
          {
            k: "containsReplace",
            v: {
              c: {
                k: "fun",
                v: function(row, strLikeObject) {
                  if (row[4]) {
                    return row[4];
                  } else {
                    return "USER";
                  }
                }
              },
              d: {
                k: "fun",
                v: function(row, strLikeObject) {
                  if (row[4] && /^[0-9]+$/g.exec(row[4]) == null) {
                    return row[4];
                  } else {
                    return "yyyy-MM-dd";
                  }
                }
              }
            }
          }
        ]
      }
    ],
    protoRowTranslate: [
      {
        k: "fun",
        v: function(arr, index, self) {
          let MDParam = self.protoParam.MDTitle;
          if (MDParam.length > 0) {
            if (MDParam[index] && MDParam[index][0]) {
                // field 
              arr[1] = MDParam[index][0] + "." + (arr[1] || "");
            }
          }
          if(arr.length>2 &&[ "c", "d", "a", "u", "t"].include(arr[2]) ){
              arr.splice(1,0,"String");
          }
          return arr;
        }
      }
    ],
    deakTemplateLikeArray: function(a, self) { // 对生成后的行数据数组,再次处理
      let ids=[];
      let o=self.protoParam.MDParamO;
      (a||[]).forEach(function(v,i){
          let colSpan=1
          if(o[i]){
            colSpan=o[i].ColSpan||1
          }
          ids.push(colSpan);
      })
      let group=0
      ids.forEach(function(v,i){
        if(group==0){
          a[i]=a[i].replace(/^{/,"[{");
        }
        group+=Number(v);
        if(i==ids.length-1 || group+ids[i+1]>3 
          ||o[i].br
          ){
          a[i]=a[i].replace(/},$/,"},],");
          group=0
        }
       
      })
      return a;
    },
    fix: {
      roles: [
      
      ],
      param: []
    }
  }

```  
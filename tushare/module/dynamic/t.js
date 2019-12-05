
MD 双空格 表示 参数的第一个   最后一个参数 可以 配置动态参数

name field dataType showType 
role={
    value: "crudinputThreeMD",
    label: "crudinputThreeMD",
    template:
      '{ "Field": "${1}", "Name": "${0}", ShowType: "${3:text}", Ext: "${31}",DataType: "${2:String}", "Required": false, RowSpan: 1, ColSpan: "$?ColSpan:1?" },',
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
              arr[1] = MDParam[index][0] + "." + (arr[1] || "");
            }
          }

          return arr;
        }
      }
    ],
    deakTemplateLikeArray: function(a, self) { // 行列处理
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
        if(i==ids.length-1 || group+ids[i+1]>3){
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
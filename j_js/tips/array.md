
# 数组长度不一合并：
### errdata=[1,2,3]   errdata=[13,23,33,33,3]
```js
 var row=[]
   $.each(errdata,function(ai,av){
      row.push({"err":av,"none":""})
   })
  $.each(nonedata,function(ai,av){
    if(row[ai]){
      row[ai]["none"]=av;
    }else{
      row[ai]={"none":av,"err":""};
    }
  })
```  
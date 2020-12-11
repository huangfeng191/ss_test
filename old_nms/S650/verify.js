
function getVerify({file,isNullFields=[]}){
   var content=[]
   isNullFields.forEach(function(v){
      var one=`
      if (verifyFun.isNull(m.${v.field})) {
         y.ngAlert(t.instant("${v.name||v.field}") + str, "warning")
         return false;
       }
    
      `
      content.push(one)
   })


   var temp=`
   S650${file}: function (m, y, t) {
      var str = this.nullFun(t); 
         ${content,join("")}
   
    
      return true
    },
   
   `
   return temp 
      
}



getVerify("Holdover",)

function getVerify({file,isNullFields=[]}){
   var content=[]
   isNullFields.forEach(function(v){
     
      var one=`
      if (verifyFun.isNull(m.${v.field})) {
         y.ngAlert(t.instant("${v.name||v.field}") + str, "warning")
         return false;
       }
    
      `
    
      if(v.range){
        
         var range=`
         if (!verifyFun.isNumber(m["${v.field}"]) || !verifyFun.between(m["${v.field}"],${v.range[0]}, ${v.range[1]})) {
            y.ngAlert(this.fe("${v.field}",${v.range[0]}, ${v.range[1]},t), "warning")
            return false;
         }
         `
         one=one+range
      }
      content.push(one)
   })

   var temp=`
   S650${file}: function (m, y, t) {
      var str = this.nullFun(t); 
         ${content.join("")}
   
    
      return true
    },
   
   `
   return temp 
      
}

a=[
{"field":"txtlatdeg","name":"degrees",range:[0,90]},
{"field":"txtlatmin","name":"minutes"},
{"field":"txtlatsec","name":"seconds"},
{"field":"txtlondeg","name":"degrees"},
{"field":"txtlonmin","name":"minutes"},
{"field":"txtlonsec","name":"seconds"},
{"field":"txtalt","name":"Altitude (for Position Hold)"},
{"field":"txtdely","name":"Antenna Cable Delay (ns)"},
]
console.log(getVerify({"file":"GNSSConfig","isNullFields":a}))


// if (!verifyFun.isNumber(m["txtlonsec"]) || !verifyFun.between(m["txtlonsec"],0, 59.999)) {
//    y.ngAlert(this.fe("txtlonsec", 0, 59.999,t), "warning")
//    return false;
// }

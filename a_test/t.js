menus.filter(function(v){
  if(v.id=="system-security-userAudit_operation"){
     menus=menus.filter(function(v1){
         if(v1.id=="system-security"){
          v1["name"]="审核"
         }
         return v1.parentId!="system-security-user" && v1.id!="system-security-user"
     })   
     menus.push({"name":"用户管理","id":"system-security-user","parentId": "system-security",},)     
     menus.push( {"name":"查看","id":"system-security-user_view","parentId": "system-security-user",},)     
     menus.push( {"name":"管理","id":"system-security-user_manage","parentId": "system-security-user",},)     
     return false;
  }
})
menus.filter(function(v){
  if(v.id=="system-security-roleAudit_operation"){
     menus=menus.filter(function(v1){
      if(v1.id=="system-security"){
          v1["name"]="审核"
      }
      return  v1.parentId!="system-security-role"&& v1.id!="system-security-role"
     }) 

     menus.push( {"name":"权限管理","id":"system-security-role","parentId": "system-security",},)     
     menus.push( {"name":"查看","id":"system-security-role_view","parentId": "system-security-role",},)     
     menus.push( {"name":"管理","id":"system-security-role_manage","parentId": "system-security-role",},)   
     return false;  
  }
})



<<<<<<< HEAD
=======



>>>>>>> de5c4190e84077567268387882caac31ae14f6db

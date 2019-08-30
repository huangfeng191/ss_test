用户名   userName 50 
单位     company 32
姓名     name 32
联系方式 mobile 32


```js

var verify={
    userName:{"length":50,"require":true,"用户名必填,长度<=50"},
    company:{"length":32,"require":true,"单位必填,长度<=32"},
    name:{"length":32,"require":true,"姓名必填,长度<=32"},
    mobile:{"length":32,"require":true,"联系方式必填,长度<=32"},
    cardID:{"require":true,"身份证必填"},
    userLevel:{"require":true,"用户级别必填"},
    roleLevel:{"require":true,"设备权限必填"},
}


var verify={
    roleName:{"length":50,"require":true,"角色名必填,长度<=50"},
    roleDesc:{"length":255,"require":true,"角色描述,长度<=255"}
}







#addUserModal .form-row label:first-child::before {
      content:"*";
      color:red;
    }

cardID



roleList



```


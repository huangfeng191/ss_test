var rules={
    userName:{"length":50,"require":true,"err":"用户名必填且长度<=50"},
    company:{"length":32,"require":true,"err":"单位必填且长度<=32"},
    name:{"length":32,"require":true,"err":"姓名必填且长度<=32"},
    mobile:{"length":32,"require":true,"err":"联系方式必填且长度<=32"},
    cardID:{"require":true,"err":"身份证必填"},
    userLevel:{"require":true,"err":"用户级别必填"},
    roleLevel:{"require":true,"err":"设备权限必填"},
}


function getVerify(data,rules ){
    var err =[];
    Object.keys(rules).forEach(function(k){
        var rule =rules[k];
        if(data[k]=="请选择"){
            data[k]="";
        }
        if(rule.require){
            if (!data[k]) {
                err.push(rule.err)
                return true ;
              }
        }
        if(data[k]&&rule.length){
            if (data[k].length>rule.length) {
                err.push(rule.err)
                return true ;
              }
        }
    })
    if(err.length>0){
        return err.join(",");

    }else{
        return "";
    }
}

var data={
    userName:"1234567890",
    company:"12345678901234567890123456789012345678901234567890",
    name:"1",
    mobile:"1",
    cardID:"",
    userLevel:"1",
    roleLevel:"1",   
}
var ret=getVerify(data,rules)
console.log("ret"+ret);
var skipRe = /\?|\</;

var a={
    "a":1,
    // "b":"23?",
    "b":"23",
    "c":{
        "adf":"sdff",
        "kk":{
            "sdf":"1"
        }
    }
}
function getCheckMsg(a){
    var msg=""    
    function getSubInfo(a){
    
        Object.values(a).forEach(function(v){
            if(typeof v=="object"){
                getSubInfo(v)
            }else if(v&& typeof v== "string"){
                if(v.match(skipRe)){
                    msg="输入文本中含有特殊字符，清先删除";
                    return false;
                }
            }
        });
    }
    getSubInfo(a)
    return msg ;
}

var msg1=getCheckMsg(a);

if(msg1){
    console.log("msg:"+msg1);

}

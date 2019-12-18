# while 


```js
var skipRe = /\?|\</;

var a={
    "a":1,
    "b":"23",
    "c":{
        "adf":"?sdff"
    }
}

function getSubInfo(a){
    Object.values().forEach(function(v){
        if(typeof v=="object"){
            getSubInfo(v)
        }else if(v&& typeof v== "string"){
            if(v.match(skipRe)){
                return "输入文本中含有特殊字符，清先删除";
            }
        }
    });
}

getSubInfo(a);


```
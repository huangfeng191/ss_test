// 对于个人来说 我觉得使用驼峰会比较舒服
// 对于binding 项来说 喜欢 小写  "key":[{"name":"","value":"" ,"default":""}]

var bindings = {

}
var elf = { // 精灵 
    "comm": {
        toFirstUpperCase:function(str){
            return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
                return $1.toUpperCase() + $2.toLowerCase();
            })
        },
        dictToArray:function(obj){
            var a=[];
            Object.keys(obj).sort(function() {
            }).map(function(k) { // 将词典转为默认排序的数组
               a.push({"key":k,"value":obj[k]})
            });
            return a ;
        },
        setSelectOption: function($el, optional, value) {
            if (typeof optional == "string") {
                optional = bindings[optional];
            }

            $el.html("");
            (optional || []).forEach(function(one) {
                if (!("value" in one)) {
                    one.value = one.Value;
                    one.name = one.Name;
                }
                /* 
                   priority:  value> default > normal 
                */
                if (value != undefined && value == one.value) { 
                    $el.append("<option selected value=" + one.value + ">" + one.name + "</option>");
                }else if(value == undefined && one.default){
                    $el.append("<option selected value=" + one.value + ">" + one.name + "</option>");
                } else {
                    $el.append("<option value=" + one.value + ">" + one.name + "</option>");

                }
            })
        },
    }
}
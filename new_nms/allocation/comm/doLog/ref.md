# 二级菜单

    function doSecondTab(evt) {
        var level2=evt.target.parentElement.getAttribute("level2");
             if(level2){
                top.SsCenter.doLog(level2,"warning");

                if(level2==""){
                  
                }else if (level2==""){
                  
                }else if(level2==""){
                  
                }else if(level2=""){
                 
                }else if(level2=""){
              
                }
           }
        
    }

# 菜单按钮
```js
// 获取页面对象

var keys=[]
var dom="handle"
var fields=["厂商","设备类型","区域","告警等级"]
var ifm=document.getElementById("content").contentWindow;
var domE=ifm.document.getElementById(dom);
$.each($(domE||[]).find("label"),function(oi,v){
        
        var text= v.innerText.replace(":","")
        if(fields.includes(text)){
            var next_ele=$(v).next()[0];
            if(next_ele.getAttribute("id")){
                var one=text+" "+next_ele.getAttribute("id")
                if(next_ele.nodeName=="SELECT"){
                    one+=" ?s"
                }
                keys.push(one)
            }
        }
    
 
})
console.log(keys.join("\n"));

function getQueryFields({dom,fields=[]}) {
    
    
var keys=[]
var dom="handle"
var fields=["厂商","设备类型","区域","告警等级"]
var ifm=document.getElementById("content").contentWindow;
var domE=ifm.document.getElementById(dom);
$.each($(domE||[]).find("label"),function(oi,v){
        
        var text= v.innerText.replace(":","")
        if(fields.includes(text)){
            var next_ele=$(v).next()[0];
            if(next_ele.getAttribute("id")){
            var one=text+" "+next_ele.getAttribute("id")
                if(next_ele.nodeName=="SELECT"){
                    one+=" ?s"
                }
                keys.push(one)
            }
        }
    
 
})

}



```

function doButton(id, theme, data, second) {
    theme = "warning";
    second = ""
    data = []
    top.SsCenter.doLog(id, theme, data, second);
    if (id = "warning-current") {
        searchTab('current')
    }else if (id = "warning-current") {
        searchTab('current')
    }else if (id = "warning-current") {
        searchTab('current')
    }else if (id = "warning-current") {
        searchTab('current')
    }else if (id = "warning-current") {
        searchTab('current')
    }

}




function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "warning");

        if (level2 == "warning-current") {
            searchTab('current')

        } else if (level2 == "warning-history") {
            searchTab('history')

        } else if (level2 == "warning-handle") {
            searchTab('handle')

        } else if (level2 = "warning-mask") {
            searchTab('shield')

        } else if (level2 = "warning-statistics") {
            Count()
        }
    }

}



function doButton(id, theme, data, second) {
    theme = "warning";
    second = ""
    data = []
    if (id = "warning-current") {

        data.push({ "name": "厂商", "value": $('#changshang').find("option:selected").text() || "" });
        data.push({ "name": "网元名称", "value": $('#device').find("option:selected").text() || "" });
        data.push({ "name": "区域", "value": $('#area').find("option:selected").text() || "" });
        data.push({ "name": "告警源", "value": $('#source').val() || "" });
        data.push({ "name": "告警等级", "value": $('#level').find("option:selected").text() || "" });
        data.push({ "name": "状态", "value": $('#state').find("option:selected").text() || "" });
        data.push({ "name": "告警原因", "value": $('#reason').val() || "" });
        data.push({ "name": "告警编号", "value": $('#code').val() || "" });
        data.push({ "name": "告警开始时间", "value": $('#bgtime').val() || "" });
        data.push({ "name": "告警结束时间", "value": $('#endtime').val() || "" });
        top.SsCenter.doLog(id, theme, data, second);
        searchTab('current')
    }

}


    
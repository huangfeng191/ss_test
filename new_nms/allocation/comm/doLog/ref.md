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
// getQueryFields({"dom":"current","fields": ["设备","类型","端口","模板","开始时间","结束时间"]})
function getQueryFields({ dom, fields = [] }) {


    var keys = []
    var ifm=window;
    if(document.getElementById("content")){
         ifm = document.getElementById("content").contentWindow;    
     }
    var domE = ifm.document.getElementById(dom);
    $.each($(domE || []).find("label"), function(oi, v) {

        var text = v.innerText.replace(":", "")
        if (fields.includes(text)) {
            var next_ele = $(v).next()[0];
            if (next_ele.getAttribute("id")) {
                var one = text + " " + next_ele.getAttribute("id")
                if (next_ele.nodeName == "SELECT") {
                    one += " ?s"
                }
                keys.push(one)
            }else   if (next_ele.getAttribute("qfield")) {
                var one = text + " " + next_ele.getAttribute("qfield")
                if (next_ele.nodeName == "SELECT") {
                    one += " ?s?q"
                }else{
                    one += " ??q"
                }
                keys.push(one)
            }

        }


    })
    if (keys.length>0){
        console.log(keys.join("\n"));
        copy(keys.join("\n"))
    }

}


```

# for   Iterate

```js


function doButton(id, theme, data, second) {
    theme = "warning";
    second = ""
    data = []
    query_flag=0
    if (id == "warning-current") {
        searchTab('current')
    }else if (id == "warning-current") {
        searchTab('current')
    }else if (id == "warning-current") {
        searchTab('current')
    }else if (id == "warning-current") {
        searchTab('current')
    }else if (id == "warning-current") {
        searchTab('current')
    }
    if(query_flag==1){
        top.SsCenter.doLog(id, theme, data, second);
    }
}


doSecondTab(event)

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



```


<!-- pageObject -->

&pageObject="+"配置管理-网元配置-输出"

配置管理-网元配置-输出
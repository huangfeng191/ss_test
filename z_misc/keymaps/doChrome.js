//  获取当前的对象
function getCurrentDocument() {
    
    var keys = []
    var ifm=window;
    if(document.getElementById("content")){
         ifm = document.getElementById("content").contentWindow;    
     }
     return ifm.document

}
// 获取 标题头
// getTabTitles({"domId":"myTab"})
function getTabTitles({domId="myTab",childTag="li"}) {
    var winDom=getCurrentDocument();
    var outs=[]
    if(winDom){
    $.each(winDom.getElementById(domId).querySelectorAll(childTag)||[],function(i,v){  outs.push(v.innerText)  })    
    }
    console.log(outs.join("\n"))
    copy(outs.join("\n"))

}


function getTabTitlesSecondTab({domId="myTab",childTag="li",secondTag="a" }) {
    var winDom=getCurrentDocument();
    var outs=[]
    if(winDom){
    $.each(winDom.getElementById(domId).querySelectorAll(childTag)||[],function(i,v){  

    var text=[v.innerText];
    if(v.getAttribute("level2")){
        text.push(v.getAttribute("level2"))
    }
    if(v.getElementsByTagName(secondTag).length>0){
        text.push(v.getElementsByTagName(secondTag)[0].getAttribute("onclick"))
    }
    
        outs.push(text.join(" "));

      })    
    }
//     console.log(outs.join("\n"))
    copy(outs.join("\n"))

}



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
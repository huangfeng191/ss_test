

// 获取需要点击的按钮
function getDoDom({text='立即购买'} ) {
    dom=null;
    a=document.querySelectorAll("a[role='button']");
    a.forEach(function(v){if(v.innerText==text){dom=v }})
    console.log("dom"+dom)
    return dom
}
// 查找需要点击的按钮，如果存在则自动点击
function doGetOne({dom=null,time=100,text='立即购买'}) {
    if(dom){
        dom.click();
    }else{
        fDom=getDoDom(text)
        var timer=setTimeout(() => {
            doGetOne({dom:fDom,time:time,text:text} )
        }, time);
        return timer;
       
    }
}
// 执行脚本
var timer=doGetOne({})

// unrealized
if(timer){
    clearTimeout(timer)
}

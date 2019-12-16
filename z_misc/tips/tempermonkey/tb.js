

// 获取需要点击的按钮
function getDoDom({text='立即购买'} ) {
    let dom=null;
    let a=document.querySelectorAll("a[role='button']");
    a.forEach(function(v){if(v.innerText==text){dom=v }})
    console.log("dom"+dom)
    return dom
}


// 查找需要点击的按钮，如果存在则自动点击 不需要循环执行
function doGetOne({dom=null,time=10,text='立即购买'}) {

    if(dom){
        dom.click();
    }else{
        var timer=setTimeout(() => {

            let fDom=getDoDom(text)
            if(fDom){
                debugger;
                  fDom.click();
            }else{
                doGetOne({dom:fDom,time:time,text:text} )
            }
        }, time);

        return timer;

    }
}
// 执行脚本
if(window.location.href.indexOf("item.htm")>=0){
    //  setTimeout(function(){
      doGetOne({})
    //  },100);
  }





//↓↓↓↓↓↓↓***************  不需要 

function doOneTime({text='立即购买',time=100}) {
    let dom =getDoDom({});
    if(dom){
        setTimeout(() => {
            dom.click();
        },time)
       
    }
    
}
doOneTime({});

function csCurry() {

    var cv = Array.prototype;
    pv = cv.slice
// 针对数组对象 调用slice 方法
    return pv.call(arguments,1);
}
csCurry(2,3,4)

// curry 方法，  t 是第一个放方法，可以将两次调用的参数 合并 
// curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。


function _(t) {
    var e = pv.call(arguments, 1);
    return function() {
        return t.apply(this, e.concat(pv.call(arguments)))
    }
}


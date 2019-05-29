// 证明了，只要调用时 环境中存在方法就不会报错。
function forClick() {
    showOtherPageMethod()
}





function csCurry() {

    var cv = Array.prototype;
    pv = cv.slice
// 针对数组对象 调用slice 方法
    return pv.call(arguments,1);
}
csCurry(2,3,4)

// curry 方法，  t 是第一个放方法，可以将两次调用的参数 合并
function _(t) {
    var e = pv.call(arguments, 1);
    return function() {
        return t.apply(this, e.concat(pv.call(arguments)))
    }
}
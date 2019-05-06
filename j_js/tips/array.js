//  数组替换，合并
a=[1,2,3,5]
b=[2,3,4,5,6]
Object.assign(a,b)
console.log(a+"out :[2,3,4,5,6]")

a=[1,2,3,5]
b=[2,3,4,5,6]
console.log(""+a.concat(b));


// 在原函数上删除指定元素 字符串：

a=[1,2,3,4,5,2,3,2,3,2]
r_v=3
while(a.indexOf(r_v)>=0){
    a.splice(a.indexOf(r_v),1)
}
console.log("a"+a);


// 利用 jquery  删除对象中不符合要求的元素 
a=[1,2,3,4,5,2,3,2,3,2]

var  toDels = []
$.each(data, function(ai, av) {
  if(State=="done" &&!av.leavet){
    toDels.push(ai);
  }
})
toDels.reverse();
toDels.forEach(function(idx){
  data.splice(idx,1);
})



// 排序  会改变原有数组

a=[1,4,2,3,6,7]
a.sort(function(x,y){
   return  x-y
});
console.log("a="+a)


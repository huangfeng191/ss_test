var obj = {'0':'a','1':'b','2':'c'};

Object.keys(obj).forEach(function(key){

     console.log(key,obj[key]);

});


//  改变 a 对象
a={"1":1};
b={"b":2,"1":3};
Object.assign(a,b)
# 获取设置

function getSetting()

##构建对象
```js

var building={
    dom:"",
    target:null, // 目标 对象，通常
    init:function(){ // 可以理解未 初始化，
        // render()
    },
    render:function(){ // 可以多次渲染

    }

}

```





# 命名规则：

字符串 文本 str
函数中未确定的变量，可以命名未 pending ;



# 模拟ajax 函数
var doPost = {
    done: function(callback) {
        var a=[
            { "id": "1", "name": "11" },
            { "id": "2", "name": "21" },
            { "id": "6", "name": "61" }
        ];


        return callback(a);
    }
}



# 在给 nginx 做配置时，如果需要关闭缓存 ，只需要 将 sendfile 参数设置未 off 就可以了


# tampermonkey match 可写多个
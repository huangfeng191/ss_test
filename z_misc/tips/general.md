# 获取设置

function getSetting()




# 命名规则：

字符串 文本 str




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
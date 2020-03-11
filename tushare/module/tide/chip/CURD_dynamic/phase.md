# row set:

sn dataType nm showType  

dataType 
    str String 
    string String 
    String 

showType:
    c combo
    d dateTime
    t text    as default
    a textarea 
    f text  

 最后一项是可配置项目 , 分割线 : 分割值
    optional:
        fmt:"yyyyMMdd" ? binding ? function?
        width:100
        show: 0  // hide 





# 

getConfig, 把之前的配置拿过来,

生成的时候只取前面的三个字段, 以后有时间再修改stock里面的

何时生成呢？
计划生成的时候,
循环 cell, 可以理解同一cell 编码 结果一样
生成的时候 可以参照源

生成一份配置, 保存一份配置, 记录一下日志
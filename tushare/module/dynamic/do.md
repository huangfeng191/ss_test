1 上7 个交易日  连续4 天 



tips:
    查问题时，可以考虑在查询数据库时的方法



2 数据删除， 需要做    


2019-9-25


1 对于test 以及 cell 提供删除数据的功能， 优先 cell 
2 link 数据需要计入日志，里面添加字段，数据的最后存储位置 
3 link 添加一个字段 取数规则， last  or first 
3 对于link 来说，可以将 cell 按复用性归类 doing 
4  step  环节的完成情况  横向比较结果， 一条记录一个结果 doing 


2019-9-29
1 copy to other link   ToCopy
2 实现一种类型 from link ,就是说 将 link 的 out 当作源进行处理   (** need to do )
3 编码的 规则


2019-09-30

1 from link
2  with regard to : Frequency can extend 
3 dataGrid edit:    
    relativeType , 
    generateW

4 step  dbClick -> selectedlink  generate 

2019-10-1
5 对于不同频率的数据 如何混合调用，
    也就是说 link 在生成数据的时候也需要报错，当前link的日志状态，每个cell 需要有单独的日志
    需要在cell 日志里记录 linkSn linkOutFrequency


2019-10-02

1 update mongoDb version try to solute the problem about   arrey query : $elemMatch  return only one row 


2019-10-03
0 对于记录日志时间的wrap 需要记录类型字段 OK
1 对于 outFrequency 的 extend  need to consider
2 对于日志中的 out 需要重新组织，方便查找数据：
    基本字段  phasedOut {"type":"table",
                         "table":""
                        "logKey":{},
                        "dataKey":{}}



2019-10-12

1 正向反向偏移度
2 对于数据需要添加板块信息、结果可以合并

数据源：  可以是 股票+指数 

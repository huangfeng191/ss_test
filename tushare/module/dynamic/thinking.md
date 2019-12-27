1 从表里取数据, 
2 指定上一级的输出
3 上一个步骤的结果

            1 直接save
            2 聚合
            3 分析 
                         保存 (saveWithOut) -> toSave


循环处理




其实: 原有的方式比较像是从表里取数的结构，可以重构一下


cell 

rule:
    cell类型(sourceType) 可以判别数据的来源  table(record) slot  extend 
    loop:{
        "source":{"table":{}},
        "query":{},
        "key":{"field":"field" }     // 对于命名，一般来说 可以上一级的 key+下一级的key
    }
    source:{
        "table":{},
        "slot":"",
        "extend":""
    }
    query:{}

    limit:{}
    sort:{} // 预留
    aggregate:{}


    标识一下：如果是table 说明是比较明确的,
                   slot  上一步骤的结果,类似插槽,需要指定level  
                   extend 已经生成的规则：->如果遇到无数据, 需要先生成,才能获取结果

                得到一个 source的输出- 其实目前来说不管是那种类型，都是取自表    
                
                def doCell_part:
                    def getCell_part
                        doPlan() // 有数据了才下一步
                        query ,(limit sort)
                        return 结构化的数据来源
                    def handleCell_part    
                        规则的方法    
                    def saveCell_part


                   <!-- 感觉上来说, 不属于此处,可以标识到算法里面 -->
                   arithmetic  当 cell 为 arithmetic 时,记录中level 自动填写 最高级别,就是说每个策略都有唯一性，只能用最高级的结果

                def doCell(a):
                    getCellLoop:

                    for r in a:
                        doCell_part
                    记录日志    


getSource 时需要调用生成的方法 

此处需要判断是否已经生成

def doPlan(level,{sn,cycle})

dynamic_log_[level]: none: 生成 , 有的时候返回 

先拼成有成绩关系的, 
r.children, 或者 加已字段 type:"cell"  无子项说明是cell ,
遇到有数据的直接数组的下一个

数组的下一个

for [measure,step,link,cell]:

for step in  measure.step :
    for link in step.link:
        for cell in link.clll:
            doCell()
            


可以考虑在一开始的时候就形成这个 树,这样的话,要获取上一级输出就相对容易了




对于循环如何处理：可以理解为所有的规则都是循环的，只不过是循环次数为已罢了
对于table 来说 一般是处理原始数据,条件就至关重要了, 可能遇到的情况是：需要循环调用
比如每个股票的最近7天的明细,如果直接调用的话,数据量太大，可以用时间来换取对原子的操作性, 因为是两个表 先把第一个表的code 查出来再处理性能不行

把query 拆成两部分 :1 source.query ,  loop:



level 主要用于对结果的获取


对于指定了level 的就是说有一定的复用性：
比如说 最近7天的交易明细 , 可以把 level 指定未 step : 这样的话 其他的规则可以调用这个结果， 也就是说 level 主要用于输出


cell等级: 主要是取数据、判别唯一性 

生成类型:调用的方法
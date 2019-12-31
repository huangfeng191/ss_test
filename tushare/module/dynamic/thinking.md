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




# 2019-12-27  Friday 

m_XXX
s_XXX
l_XXX
c_XXX

思考下需要重新结构化下参数吗

ruleType: basic aggregate pandas 

为什么 最近 7个交易日明细是link 呢 ，因为如果上一级是 10天的画 那么 可以生成10天的link,考虑到复用性的原因 

对于 cycle 怎么处理: 其实不需要 每个都设置，可以从上一级 继承下来,


对于 cell 的配置问题 : 建议不要挂到 links 里面, 减少字段的复杂度，可以考虑有一个 cell 总表，将 cell 分类 于此, 具体的业务只要勾选 cell 就好，
也就是说cell 里面 需要一个字段 分类，主要用于筛选用，考虑将此字段设置成复选框的方式。

fetch 目的是快速的获取日志,
具体取数 用 take 

对于 loop 可以返回数组数据  [{},{}]
{
    "sourceType":"table", // {"nm":"","query":{},"limit":,"sort" }
    "rule"
}
{"field1":{},"field2":{}}


1. links
   最近7天的交易明细 {"sn":"l_last-7days-daily-details","level":"link","cycle":"day"  }   // log 中 , stage:{"fetch":{},"take":{}} 
   1. cells:
       1. 最近7个交易日  {"sn":"c_last-7days","level":"cell","cycle":"day","sourceType":"table","ruleType":"basic" ,"outType":"log" }
       2. 时间内的交易日明细 {"sn":"c_daily-details","level":"link","cycle":"day","sourceType":"table","ruleType":"basic" ,"outType":"table","loop":{""} }

   2. up>3的明细




对于表的处理 : 包括一级子对象, 但是需要提供一个接口将完整的层级关系显示出来，可以考虑写到表里

在生成的时候生成子对象, 这个不就是放入日志吗




sn 
level 

log:
    level:
    sn :

在 cell_log 中 说明 level 肯定是 cell :
    但是 对 cell 的数据 来源 : level : 可能是 link 



抽象一下：

# sourceType:    
   1. table  // 抽象为 items 
        nm
        query
        limit
        sort 
    2. slot
        1. 获取上一步骤的结果, 得到上一步骤的 level 以及 sn 
        2. 规则 table 
    3. jump 
        1. 依据 jump 获取 上一步骤的 level 以及 sn
        2. 规则 table 
   

   step 
        link 
            1. 最近7个交易日的所有明细
                cell : 
                    1. 最近7个交易日    basic.sn: c_last-7days     fetch.level :"cell"  ://level 是正对取数的  只要 cell_log 中存在 sn="c_last-7days" 的记录 就直接获取
                    2. 所有的明细       sn:c_all_daily  level:"dynamic" ,
            2. 上涨大于3天的明细  
                // 在所有明细+ loop sn 来实现 , 把结果写入


basic:
    sn
    nm
    desc  
    type  // common , detail , params  // 按条件的 股票明细

fetch:
    level 
    cycle  
    t 
loop:
   1. getData  // 将数据整合成需要的循环输出  
   2. gather  
   { "data":{source,rule,out},
      "gather":[{field:"field1"},"field2":"field2"]
       }     // 此处可以循环规则，也可以生成规则
source:   // 获取数据
    table
    jump   // getTable 
    slot

    table 

rule:  // 将数据 应用算法
    type:"" //basic(table) aggregate pandas  
    "basic":{

    },
    "aggregate":
    "pandas":
out:    // 输出 
    type:"table" //log 
    "table":{
    }
refresh:
group:
    belong c belong //  .. 此处可扩展

        



log:
    take:{

    }

        source:
            type: table slot  jump // 链式调用   
                slot    
                    1. getFetch
                    2. getJump 
                jump
                    getTable():
                        level
                        sn  
                        cycle
                        t        
                table
                    nm 
                    query 
                    
        rule
            type table aggregate pandas               
                table
                    {
                        query
                        limit 
                        sort 
                    }
                aggregate

                pandas 
        getData:
            getSource:
    
            getRule 


            getOut  
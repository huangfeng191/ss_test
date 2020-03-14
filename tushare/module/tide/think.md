 # 2020-01-23  Thursday 
 
 loop :
    1. 获取所有股票编码 
    
base: // 资源 - 简化版的 cell  ,取数用，无日志 不输出 
    sn
    nm
    rule 
        type:  // values: table   static    asset    text  
        "table":{
            "nm":"",
            "field":{
                "key":{field:""...}  // 当field 未空时 key = field 
            }
            rule:{
                query,
                   [
                       {
                            asset , 
                            base ,  // date 可定义在 base 里面  operate 
                            operate, field,sn
                       }
                   ]
                sort,
                limit,

            }
        },
        "static":{
         type:"date"
        },
        "asset":{
            fetch:{
                level:""
                "sn":""
                "cycle"
            }
        }
    out 
       type : "array" ,"object" ,"rows"
       "rows":{    // loop 
           "fields":{
               "field":{}
           }
       },
       "object":{
           "field" :{}
       },
       "array":{      // table .query  
           "field":{}
       }

# cell.reuseParams
1. reuseParams 考虑去掉, 后面可以抽象
   考虑 使用 base 代替 ,
   全局对象？


   需要有一个 快速 获取 历史处理结果的 方法 , 可以 用在很多地方： PS. loop , table .query 
   loop 循环用 , 
取不到数据时 报错 。


# base.static 先定义 
  base.asset 可以获取资产结果 


# 2020-01-24  Friday 

tide
    cell_log

    link_log
            _id 
            proto
                cell
                    fetch // 设置 ,  当 cell 类型时 fetch =take 
                        key  // 确定的结果 
                            sn 
                            level 
                            cycle  // extend 
                            t 
                        option // 不确定的结果 
                            refresh 
                    take   //  取自 celll 的 结果- 可以重复
                        key
                            sn 
                            level 
                            cycle  
                            t  
                        option 
                            {}    
                        type
                            table \ log 
                        table 
                            nm 

                link 
                    fetch 
                        key 
                            sn 
                            cycle 
                        option 
                            refresh   
                    take 
                        key
                            sn 
                            level 
                            cycle  
                            t 
     
    step_log
    measure_log
    plan_log 

    base 
    cell 
        sn 
        nm
        type :slot fixed jump 
        level :cell link step measure plan 
        cycle day month year week 
        loop
        ruleType table agg pandas 
        rule
        outType
        out 
        w 
        refresh // extend
        classify  // extend  at present type text 
        desc 
      
           
    link 
    step 
    measure 
    plan 




cell_log 
    cell:
        fetch
        take 

link_log 
    cell:
            fetch
            take 
    link:
            fetch
            take         

step_log 
    cell:
            fetch
            take 
    link:
            fetch
            take
    step:
            fetch
            take                 


measure_log 


chain:["cell","link","step","measure","plan"]

按从小到大的目的是：
    便于以后的 扩展 

```py 
chain=["cell","link","step","measure","plan"]
type="step"



``` 

# 2020-01-24  Friday 
怎么找出 这个链的 

plan  
   id
   measure 
         id 
         pid 
         step 
            id 
            pid 
            link 
               id 
               pid 
               cell1 
                  id 
                  pid 
               cell2
                  id 
                  pid    

 


 virus:
chains list 
    step link  cell 
1    1    1     1
2    1    1     2
3    1    1     3
4    1    2     1
5    1    2     2
6    2    2     2
7    2    2     3  

PS The condition of the disease :
    next step 1!=step 
PS: 
    get(1)  get(2)
    1.step == 2.step 
    1.link==2.link 
    1.cell!=2.cell  (1.cell ill ) 处理完 生成日志 **

    get(2)  get(3)
    1.step == 2.step 
    1.link==2.link 
    1.cell!=2.cell  (2.cell ill )

    get(3)  get(4)
    1.step == 2.step 
    1.link!=2.link  (3.link ill )
    1.cell!=2.cell  (3.cell ill )

    get(4)  get(5)
    1.step == 2.step 
    1.link==2.link  
    1.cell!=2.cell  (4.cell ill )

    get(5)  get(6)
    1.step != 2.step (5.cell ill )
    1.link==2.link   (5.cell ill )
    1.cell==2.cell   (5.cell ill )

    get(6)  get(7)
    1.step == 2.step 
    1.link==2.link 
    1.cell!=2.cell  (5.cell ill )

    get(7)
    step  (cell.ill)
    link  (cell.ill)
    cell  (cell.ill)

if  last :
    spreed :  all  

conclusion:
    compare  all  step `s  key  sorted by level_down if  unequal : spreed down : // 一级染病扩散到下一级 

    1 gain cell`s take ,  
    2 get ill  hook  , 
    3 spreed  down ;


    reversed  chains list 

chains list 
    step link  cell virus
7    2    2     3  
6    2    2     2   (link)
5    1    2     2  (none)
4    1    2     1  (link)
3    1    1     3  (step)
2    1    1     2  (link)
1    1    1     1  (link)


1  最后一个 是 初始样本，后面的扩散 none 时是完成模板,供下属扩散




 


对于 refresh 先不递归生成， 考虑到 现在 实现 还不完全 


# 2020-02-11  Tuesday 

hook 
chain 
layer :
    fetch:
        key 
        option 
    config: // 配置 
        source 
        loop 
            type
                fixed
                    table 
                    agg  
                jump 
                    hook  sn  cycle t   level levelSn 
                        source
                        table 
                        agg ...

            key 

        ruleType 
        rule 
        outType
        out 


CellDeal:
  __init__

  check(layer.fetch,loop.key )
  calc,
   
  saveTake 
  getTake 



<!-- loop 属性不需要再deal 中体现 -->
Deal:  
    config:
        type : table  agg  
        source 
        agg:{

                                                                                                                                            },
    fetch:
        key 

    loop:{
        key :
    }
    __init__(self,rule,)
    doing(loop,fetch,config):
    save 



<!-- 计算的时候 其实是不需要关心其他的，只要有必要字段就可以  -->
    rule:
        type : table  agg  
        source 
        agg:{
            + loop.key 
        },

class  CalcRule:
    __init__(self,ruleType,rule)
        self.ruleType=ruleType
        self.rule=rule

    doing():
        if(self.ruleType=="table"):
            pass 
        if self.ruleType=="agg":
            pass 


query 的解析：
    {
        field:{
             type: 
                date 
                    cycle  day  month  week year 
                jump 
                    take : table log 
                    {
                        "field":""
                        "assist":""
                    }
                =value


        }
    }
    
            




    {
        "field":{
            
            "value":{
                type:"obj" 

            },
            "list":{
                "assist":""
            }
            "obj":{
               "field":{

               }     
            }
        }
    }


# source.query 需要合并 到 query 里面去吗， 不需要 
为了使方法 的展现 更加直观 


# 2020-02-12  Wednesday 

BindQuery 可以考虑抽象， 

对于 query 希望已业务进行串联， 而不是 表格， 对于 cell 可以获取配置 



loop 
    key:{  // 组成组成供循环的 key 
                "field1":{},
                "field2":{"quote":"field3"}
            }
    type
        jump
            hook 
            fetch.key:{
                sn 
                cycleLikely:"" // extend  day month week year 
                level
                levelSn
            } 
            
            getTake:
                outType:"table",
                "table"
                    nm 
                    +fetch.key 

                                key 
                                    {
                                        "field1":{},
                                        "field2":{"quote"}
                                    }                                      
        fixed   
        fixed:{
            table:"",
            query:{}  need parse 
        }
                                                    
                                                        

method.query.outType=="log" just only for query 


# rule :
     key 

     cell:
        type 
            slot
                
            jump
                {
                    hook,
                    fetch   
                        key:{
                            sn   
                            cycleLikely:"" // extend  day month week year 
                            level
                            levelSn     
                        }
                }
            fixed 
                                    source
                                        type: "table" // supply for  table 
                                        "table":
                                            nm 
                                            query 
                                        "type":"reserved"    
                        parseQuery 


loop.key +
fetch.key+
    

    query.key 

LoopDoing 
        for 



        RuleDoing(loop.key ,rule,ruleType,fetch ,type ,source   )
            
            parseSource:

            go
                BindQuery                


# import last step 

1  ruleDoing 
        type:fixed 
        "fixed":{
            type:"table",
            "table":{
                "nm":"",
                "query":""
            }
        }  // source

        ruleType:"table",
        
        "table":{
            "query",
            "sort"
            "limit"
        }  // rule 

        "out",
        "outConfig":{
            "type":"table",
            "table":{

            },
        
        
        }



# 2020-02-14  Friday 

deal with loop  just like cell 

fetch.key+

loop:
    source: cell.loop 
        type 
            slot // outType ='table'  at present   ?

            jump  // outType ='table'  at present  
                hook 
                fetch
                    key 
                        sn      
                        cycleLikely:"" // extend  day month week year 
                            PS: fetch.key.cycle  fetch.key.t  需要计算 t  
                        level
                        levelSn                             
                        PS:not: raise Error
            fixed 
                table 
                    nm 
                    query == need parse       jump  // outType ='table'  at present  
                hook 
                fetch
                    key 
                        sn      
                        cycleLikely:"" // extend  day month week year 
                            PS: fetch.key.cycle  fetch.key.t  需要计算 t  
                        level
                        levelSn                             
                        PS:not: raise Error
            fixed 
                table 
                    nm 
                    query == need parse     
    key:
            "field1":{},
            "field2":{"quote":""}

    parsed     
        key  array  可以支持 array  



cell 
    extend - loop.key 
    sourceType
    sourceConfig 
            slot 

            jump 

            fixed
            
    ruleType
    ruleConfig 

    outType 
    outConfig 


 每个环节 按对象来传输, 增加可扩展性 



chain 
    layer .fetch  
        loop 
            key 

            source 

            rule 

            out  
    layer.take 


# 2020-02-16  Sunday 

chain.topHook   // 规则的最高级别 

chain.getLayer("cell")

layer 

    fetch
        key 
        option 
    config

> dispose 处理
    loop:
        sourceType: slot jump  fixed 
        sourceConfig: 
> 返回数组结果         
            slot // outType ='table'  at present   ?

            jump  // outType ='table'  at present  
                hook 
                fetch
                    key 
                        sn      
                        cycleLikely:"" // extend  day month week year 
                            PS: fetch.key.cycle  fetch.key.t  需要计算 t  
                        level
                        levelSn                             
                        PS:not: raise Error

            fixed 
                table 
                    nm 
                    query == need parse     
> step
> 1. parseSource  得到source 对象 
> 2. doSource  根据不同的类型得到数组 供循环 
> 3.  loop row 对象 

        key:
                    "field1":{},
                    "field2":{"quote":""}
    loop 是一个对象, 只要定义这个对象的含义, 不用管中间有多少个步骤, 提供统一输出就好， 面向对象 

    loop.row 是一个对象
                
       
CellLoopConfig

    getCellLoop 
        CellLoop 
CellRule 
CellOut

CellDoing (loop, rule,out,layer,chain )


loopConfig
    sourceType
    sourceConfig 
    dateConfig


loopConfig 
    source 


    json.loads(loopConfig)

    source=loopConfig.get("source")

    if source.get("type")=="fixed":
        option=source.get("fixed)
        fixed.type:"table",
            "table":{
                "nm":"",
                "query":""
            }

       

    loopConfig.get("key")



    SourceConfig



sourceType 
    jump
    slot
    fixed
sourceConfig 
    fixed
        type 
            table // 取数据库表里的数据
            table 
                nm      
                query // need parse 
            array // []    
            object // 

    jump 
        hook 
        fetch
            key 
                sn      
                cycleLikely:"" // extend  day month week year 
                    PS: fetch.key.cycle  fetch.key.t  需要计算 t  
                level
                levelSn                             
                PS:not: raise Error         
        // 根据 take 得到  source         此处后续还可扩展 
    

SourceConfig 
    __init__(self,sourceType,sourceConfig):
        self.type=sourceType
        self.config=sourceConfig.get(sourceType)

    getSource():
        configType=self.config.get("type")
        configDetail=self.config[configType]
        if self.type=="fixed":
            if configType=="table":
                configDetail //  nm  query  // need parse 
        else self.type=="jump":
            getTake()
                "outType":"table"
                => 
        关键是 source.type : table ?
        return {  // 返回可配置对象的原因是 方便以后的扩展
            "type":"table",
            "table":{
                query:{},
                nm:""
            }
        }


    source 
       {  // 返回可配置对象的原因是 方便以后的扩展
            "type":"table",
            "table":{
                query:{},
                nm:""
            }
        }



    getSource 
    getRule 

    doRule(source,rule )    

// 得到source 之后 处理的方式不同 
loop 是直接应用 结果进行循环 得到可循环对象 
    sourceType 
    source 
        type "table" "array "
    
    dateConfig
        row:{
            "field1":{},
            "field2":{"quote":""}
        }
        key:[
             "field1","field2"
        ]
    func getData:
        {
            "row":{}，
            "key":{}
        }    

    func getLoop():
        if self.type=="table"
            items for    key
            


rule  对source 进行算法 

class LoopDataConfig
    __init__(self,source,loopDateConfig):
        self.config=dateConfig
    getData:
            {
                "row":{}，
                "key":{}
            }    
        

for r in loop :
    r.key  + layer.fetch (唯一性)
    source.query 
    rule.query 

RuleDoing 
    def go 
        fetch 
            判断是否要生成及删除老数据 refresh 删除 , keep 返回 
        getSource 
        getRule 



1 cell 设置正确 正确调用方法 
2 各个类调用 , 最好能实现方法的调用 









# 2020-02-20  Thursday 

outType 
    table 
    log 

outConfig
    table   
        nm 
            fieldConfig // preference 
    log 
        fieldConfig
            field1:{}
            field2:{type:"quote","quote":{}
            field3:{type:"otherMethod","otherMethod":{}}

ClassFieldConfig:
    func __init__(self,type,config):
        self.type=""
        self.config=""

    func getData(self,data):
        pass 


1f
take:
    type
        table 
            query 
            nm 
        log 
            field 
    fetch:{
        "key":{

        }
    }


doLog 
    满足条件记录, 
    对各个表记录日志，对task 也需要记录总的日志，
        处理时间 
            各步骤的处理时间，处理状态 , 
            类似一个全局概念 
完成 fixed 类型 1 
tomorrow:
    jump 功能 
    完成 fixed 类型2 
    




outType
    log  table 
outConfig 
<!-- 处理前的转换 -->
    fieldProcess  // don`t change dateType  
        field1:{}
        field2:
            type 
                quote
                ...
    transform
    log 
        field:""   // 空时为规则的 field 
        
            way 
                arrayToField
            field     
    table 
        nm 

                     


# take
    key =fetch.key 
    type
        log
            level:"cell",
            "field":"", 
            fields:["",""]
        table 
            nm 



# abstract into Object  
# aim at 
1. generate data to save 
2. generate take and necessary fields 
OutConfig  
    go
      accrueTake 
      transform data 
      cellLog=new CellLog 
      cellLog.save 
      cellLog.get()  

     
# optional 
        transform 
       


CellLog 
# fetch or fetchKey 
# if fetchKey 
    func __init__(params,isNew=False):
        pass 
    generate(data):
# 生成take 
# 保存数据
# 保存日志
        fetch 
        take 
            key:{

            },
            "type":"log" //  table 
            "table":{
                "nm":""
            },
            ""
        info {  //最终的存储 
            "type":"table",
            "table":{
                "nm":"",
                "query":{}
                "fields":[]  
            }
        }


    delete()

    getTake()
        type:"table",
        "table":{
            "nm":"",
            "query":{

            }
        }    
    getData

# 2020-02-29  Saturday 
   CellDoing 
> 串联  source rule  out        

```python

class EmphasisTake:
    def __init__(self,type,config):
        self.type=type
        self.config=config

    def get(self):
        config=self.config
        if self.type=="table":
            data=rule_doing_table(config,None)
            if info.get("fields"):
                info=info.get("fields")
        self.type=="log": 
            bean=eval("tide_%s_log"%config.get("hook))
            bean.get(self.config.get("key"))



```


# 2020-03-01  Sunday 


loop 配置 与 cell 规则一样  区别是  多了 指定  循环规则 

jump  and  slot  可以转变成  fixed 类型 

SourceConfig

SourceParse  jump  slot fixed 
    fixed.table
    QueryParse 

SourceType  


LoopConfig 
LoopType == fixed  or jump or slots  




# 2020-03-09  Monday 


1 取1条结果来生成默认

如果有配置类的话取配置的.没有配置的就直接取结果显示 ,
可以建立一个对应关系 


将stock的配置 组成 对象

column_library ={
  ts_code:{
      "nm":"",
      "scope":{
          "stock_basic":1,
          "stock_company":1,
      }
  }
}

$.each(a,function(k,v){

})

优先级 
以及自定义 

可以再定义中的才显示 


隐藏跟显示 考虑用接口保存 
下次可以获取 根据  hook sn 来进行保存 , 可以考虑 field 也用这种方式显示 
或者加几个功能 建  比如 form 隐藏 , 页面显示条件 


tomorrow

1. 数据展示模块开发
2. 点击关联到数据 
3. 考虑plan 模块 直接5 级 

# 2020-03-14  Saturday 

考虑下 怎么将 ts_code 放到 列中 



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
        key:
            "field1":{},
            "field2":{"quote":""}
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
                    query == need parse     
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



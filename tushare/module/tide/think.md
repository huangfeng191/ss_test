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

 
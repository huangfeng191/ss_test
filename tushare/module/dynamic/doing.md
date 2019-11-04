
# rule  ruleType 
    ruleType determining rule method


# inType
    对于输入类型：two ways
        1 figure out in rule
        2 identify in log 


        inTypeSn show in the log 

        ruleType =="log" is OK 






 "aggregate": [
        {
            "$group": {
                "_id": {"ts_code":"$ts_code"},
                "count": { "$sum": 1 }
            }
        },
        {
            "$match": {
                "count": { "$gte": 3 }
            }
        }
    ],




TODO:
 1. 解析pandas 代码段 可以变成数组考虑变成数组命令
  > 第一步需要将数据获取回来  多个源
        
        [
            { "type":"logOut","logOut":{type, sn ,field, `inType`,`query`  }  },
            { "type":"table ","table":{"nm",`query`  }  }
        ]

        logOut: field:{type, sn ,field, `inType`,`query`  }
        
rule type="log"       
1. 解析 inTypeSn  
2. 日志查询中应用inType 字段

对于   inType 需要      




outType :

  

 1. [ ] table
        1. table // ps. "table": "dynamic_daily_business",
        2. logKey  // ps. { "sn":1, "outFrequency":1 }
        3. dataKey // ps. { "ts_code":1 }
        > logKey+dataKey 找到已生成的数据的key历史数据，可以删除 或者 获取
        对于table 的 logKey 我觉得不用配置，因为 输入的时候已经有了，所以直接获取就好
2. log
       {"field":{
        "type":"field" ,// field object  fields
        "field": "cal_date",
        "fields":[field1,field2] 
        "object":{   
            "key":{field:""}
        }// 当 key 与 from_key 一致的时候 ，可以 简写为 [field1,field2...]


table: 取表数据
    1 all  2 particular

    table.table  ,logKey   particular: add dataKey

    先实现 all 的方式，因为目前来说， 数据的删选可以放置到查询中


log:

将计算的 频率 编码 输出编码 防止到同一的对象里面 ，好处就是 查询 代码编写 简单 也就是说 要对数据的字段进行归纳



ruleType:
    last-> table
    aggregate
    pandas 




    last.rule.queries 里面要实现 type="logOut" ？

    我觉得数据来源也可以时 lougOut




dynamic.__init__.DynamicLink_cell.test    

cell:
codeRule:
inType   inTypeSn  sn  frequency
输入类型 输入编码  编码  频率        共同组成cell唯一性

code:
log:
    inTypeSn  sn  frequency


生成策略 



cell:

base:
    name 名称
    sn 规则编码
    w 排序
    desc 描述
codeRule:
    frequency 频率
    inType 输入类型
    inTypeSn 输入编码

rule:
    reuseParams 复用参数  
    ruleType 规则类型  // 决定调用的方法 -> type 
    rule 生成规则  -> detail

out:
    outType 输出类型 ->type 
    outGenerate 生成策略  -> way 
    out 输出规则   -> detail


other:
    type cell类型 
    group cell分组
    exchange 交易所







#
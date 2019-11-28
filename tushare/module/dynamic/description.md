# 设计原理
    1. in
    2. rule
    3. out



# object meaning 
    1. cell 数据的来源： from  out sn
    2. link 有效的cell数据: 
    3. step 有现实意义的数据规则
    4. measure 多个现实意义的规则数据的合并
    5. plan 按方案类型


# cell
1. 输入类型: inType
   > relative fields:[inTypeSn]
   1. cell
   2. link
   3. step
   4. measure
   >tips:
     根据输入类型,生成输入编码
     >> 当cell 编码一样时，规则实际有差异的时候，值取自对于类型的编码

2. 规则类型: ruleType 
    > relative fields:[rule,reuseParams]  
    >  ==determining rule method==
    1. [x] last : getLastResult
    2. [ ] count
    3. [ ] total
    4. [ ] loop
    5. [ ] detail
    6. [x] aggregate :getAggregateResult
    7. [ ] pandas: 
3. 复用参数:reuseParams 
   > realize:reuse.bindReuse
   1. [x] date  
   >  {"date":{}} 默认今天  
   > 可以取配置的时间 
   >usage: rule :query.field:{"type":"date","value": "day", "operate": "lte" }  
   2. [ ]  other type
4. 生成规则 rule 
    1. queries :{field:{type,value,operate}}
       1. type
          - [x] date : field:{type,field,operate} 
          > date resource: reuseParams
          - [x] log  : field:{type, operate, field,sn , `inTypeSn` } // 扩展cell 取数据的能力
          > 取的时 log 中的data.field 数据 
          - [x] loop : field:{type,field, from:{ "table","field","query",sorts }}  // from.type 目前来说不需要
          > field is used to solve  deferent field in two tables
          > loop 用于 循环取数据，现在只支持 表取数  from 从那个表  from 表里的那个字段  
          > 一个规则最多一个loop 循环调用 规则
          1- [ ] logOut: field:{type, sn ,field, `inType`,`query`  } 
          > 获取输出
        
    1. source :{}
          1 - [ ] table 
          2 - [ ] lastStep
          3 - [ ] logOut
          > 上一步的输出，变为结果的源
          
    2. limits
        1. { "size": 7 }
    3. sorts:
        1. "order": [{"Field": "trade_date", "Type": true}]    
    4. aggregate: 主要解决单表问题
        1. [] 正常的聚合语法       
    5. [ ] pandas :
        1. 解析pandas 代码段 可以变成数组考虑变成数组命令
        > 第一步需要将数据获取回来 
        > 可以有多个数据来源并且处理
6. 输出类型 outType
   1. [ ] table
        1. table // ps. "table": "dynamic_daily_business",
        2. logKey  // ps. { "sn":1, "outFrequency":1 }
        3. dataKey // ps. { "ts_code":1 }
        > logKey+dataKey 找到已生成的数据的key历史数据，可以删除 或者 获取
   2. [ ]  log
        1. "field": "cal_date" // outData.cal_date
         {table,recordKey,field,fieldKey,fields}
         > table 取的就是 logSource 
         可以转变成多输出字段:
         {"field":{
             "type":"field" ,// field object  fields
             "field": "cal_date",
             "fields":[field1,field2] 
             "object":{   
                 "key":{field:""}
             }// 当 key 与 from_key 一致的时候 ，可以 简写为 [field1,field2...]
         }}
        >object 可以理解为 获取最大、最小？
   
7. 输出规则 out 
   1. type 
   2. 
   
8. [ ] sn 编码规则
    C_频率_输出表_意义  cell
    L_  link
    S_  step
    M_  measure

# sn coding rule




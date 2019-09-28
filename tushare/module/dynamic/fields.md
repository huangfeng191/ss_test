# link 

规则名称 nm 
规则编码 sn
是否必填 require
排序 w
分组 group //  规则 有 交易所 ， 将 两个交易所数据合并
分组规则 rule
输出规则 outType


# cell

数据表名 table_nm 
数据字段 table_field
生成输出 out_generate String a //获取输出字段的值  {"keyType":"field","value":""}   key 是字段  value 是 输出的值
输出字段 out_field // 空情况下=table_field 
规则 rule  // 用于与其他cell 关联 {"left":"","right":"","operate":""}
cell分组 group   //为空时独立
cell类型 type String  c CellType   // cell 的分类,目前只支持record 值类型: record (default )  , param , fixed  
规则编码 sn
排序 w
描述 desc 
交易所 exchange String  c exchange


<!-- last 规则 -->
{"type":"last","option":{
    "day":7,
    "field":"cal_date"
    "queries":{
        "^field":"today"
    }
}}


<!-- new -->





规则名称  name
规则编码 sn
规则类型 ruleType String c ruleType
生成规则 rule String a 
复用参数 reuseParams 
生成策略 outGenerate String  c outGenerate


输出类型 outType String c outType // 拆分两个字段的目的是 一次性配置多个规则，而只使用一个规则
输出规则 out String a

cell分组 group   //为空时独立
cell类型 type String  c CellType   // cell 的分类,目前只支持record 值类型: record (default )  , param , fixed  
排序 w
描述 desc 
交易所 exchange String  c exchange
频率 frequency String c frequency



```js

target={      // 对数据进行合并
    "key":"",
    "value":""
}


targetBind={
    "default":"field",
    "simple":"", // 可以设置
    "multi":["",""], // 可以设置

}


```


# for test 



标题   title  
方法名  method
编码 sn
版本 version  
有效 isValid String  c is_not
方法参数 args   String a 
复用参数 params   String a 
描述  description  String a 
频率 frequency String c frequency
频率时间 outFrequency
生成策略 outGenerate String  c outGenerate


first
refresh


#test log

linkType String c linkType





step:
    步骤名称 nm 
    编码  sn 
    规则集 links 
    是否必须 require String c require
    描述 desc
    排序 w
    规则连接方式 connect
    频率 frequency
    生成策略 outGenerate


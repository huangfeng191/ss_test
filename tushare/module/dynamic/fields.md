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






规则名称 nm 
规则编码 sn
是否必填 require
排序 w




数据表名 table_nm 
数据字段 table_field
生成输出 out_generate String a //获取输出字段的值  {"keyType":"field","value":""}   key 是字段  value 是 输出的值
输出字段 out_field // 空情况下=table_field 
规则 rule  // 用于与其他cell 关联 {"left":"","right":"","operate":""}
cell分组 group   //为空时独立
cell类型 type String  c CellType   // cell 的分类,目前只支持record 值类型: record (default )  , param , fixed  
规则编码 sn
排序 w





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
# link 

规则名称 nm 
规则编码 sn
是否必填 require
排序 w
分组 group //  规则 有 交易所 ， 将 两个交易所数据合并
分组规则 rule
输出规则 outType


# cell




# cell setting  ?ColSpan?br?
## basic 
规则名称  name
规则编码 sn
## 目的是生成唯一的记录 
频率 frequency  c frequency
cell类型 type   c CellType   // record slot arithmetic
### level   只要生成一次就好,其他情况可复用    
###  // link:  不同的link 需要单独生成 
###  // tips:  级别越高、代表差异性越大(可复用性越差) 当 cell 为 arithmetic 时,记录中自动填写 最高级别
唯一等级  level   c CellLevel ??  // cell,link,step,measure 
### 记录生成
生成类型 ruleType  c ruleType
生成策略 refresh   c CellRefresh  // refresh keep // discard: outFrequency
复用参数 reuseParams  ?3
生成规则 rule  a ?3

### 输出
输出类型 outType  c outType // 拆分两个字段的目的是 一次性配置多个规则，而只使用一个规则
输出规则 out  a

### other 
排序 w
描述 desc
业务分类 group 



<!-- discard  输入编码  inTypeSn  String  -->

cell分组 group   //为空时独立
交易所 exchange String  c exchange




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
    生成顺序  generateW


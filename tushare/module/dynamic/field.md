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
    reuseParams 复用参数  // -> params 
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



#  base // 注释
规则名称  name
规则编码 sn
排序 w
描述 desc 
#  codeRule:
频率 frequency String c frequency
输入类型  inType  String c inType 
输入编码  inTypeSn  String 
#  rule:
规则类型 ruleType String c ruleType
复用参数 reuseParams 
生成规则 rule String a 
#  out:
输出类型 outType String c outType // 拆分两个字段的目的是 一次性配置多个规则，而只使用一个规则
输出规则 out String a
生成策略 outGenerate String  c outGenerate
# other 
cell类型 type String  c CellType   // cell 的分类,目前只支持record 值类型: record (default )  , param , fixed  
cell分组 group   //为空时独立
交易所 exchange String  c exchange







# link 
#  base ?ColSpan? // 注释 
规则名称 nm
规则编码 sn
排序 w
描述 desc String a ?3

#  codeRule:
频率 frequency String c frequency
#  out:
生成策略 generate String  c outGenerate
# other 
是否必填 require


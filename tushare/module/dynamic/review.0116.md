# 2020-01-16  Thursday 

# cell setting  ?ColSpan?Required?br?
## basic 
规则名称  name ??true
规则编码 sn ??true
cell类型 type   c cellType  ??true 
业务分类 belong c belong // 参数 , 明细, 公共参数 
## 目的是生成唯一的记录 
周期 cycle  c cellCycle  // day week month year // discard  frequency  c frequency
source类型 source   c sourceType  ??true  // record slot arithmetic  -> extend   把字段变为 source
### level   只要生成一次就好,其他情况可复用    
###  // link:  不同的link 需要单独生成 
###  // tips:  级别越高、代表差异性越大(可复用性越差) 当 cell 为 arithmetic 时,记录中自动填写 最高级别
cell等级  level   c cellLevel ??true  // cell,link,step,measure 
### 记录生成
复用参数 reuseParams  ?2
生成类型 ruleType  c ruleType ??true   // 对数据的处理规则 
生成规则 rule  a ?3 // 具体的规则
刷新策略 refresh   c cellRefresh ??true // refresh keep // discard: outFrequency


### 输出
输出类型 outType  c outType ??true// 拆分两个字段的目的是 一次性配置多个规则，而只使用一个规则
输出规则 out  a  ?3
### other 
排序 w

描述 desc a  ?3


1. reuseParams 考虑去掉, 后面可以抽象

1. sn 
2. type: record slot arithmetic
3. level : cell link step measure 
4. cycle : day  week month year 
5. ruleType :  
6. rule 
7. outType
8. out 
9. refresh 
10. w 
11. desc 


12. 规则 


sn rule:
m_XXX
s_XXX
l_XXX
c_XXX
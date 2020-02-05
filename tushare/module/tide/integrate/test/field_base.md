#  cell  ?param1?colspan?dataType? 
规则编码 sn 
规则名称  nm
规则类型 type c ?cell_type?//:slot fixed jump 
规则等级 level c ?cell_level?//:cell link step measure plan 
周期 cycle c ?cycle?//day month year week 
循环配置 loop a ??3
计算规则 ruleType c ?ruleType?//table agg pandas 
计算配置 rule a ??3
输出规则 outType c ?outType?
输出配置 out a ??3
排序 w 
刷新 refresh c ?refresh// extend
分类 classify  // extend  at present type text 
描述 desc a ??3
pid pid


#  link  ?param1?colspan?dataType? 
编码 sn // 同一类型的sn 相同, 规范 sn 的编码 ，与cycle 形成唯一 
名称 nm  
规则等级 level c ?cell_level?//:link step measure plan 
周期 cycle c ?cycle?//day month year week 
刷新 refresh c ?refresh?// extend
排序 w 
分类 classify  // extend  at present type text 
描述 desc a ??3
pid pid 

#  step ?param1?colspan?dataType? 
编码 sn 
名称 nm  
规则等级 level c ?cell_level?//:step measure plan 
周期 cycle 
排序 w 
刷新 refresh c // extend
分类 classify  // extend  at present type text 
描述 desc a ??3
pid pid 
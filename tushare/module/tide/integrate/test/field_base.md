#  cell  ?param1?colspan?dataType? 
#  
规则编码 sn 
规则名称  nm
规则等级 level c ?cell_level?//:cell link step measure plan 
周期 cycle c ?cycle?//day month year week 
循环类型 loopType c ?loopType? // skip config 
循环配置 loopConfig a ??3
源类型 sourceType c ?sourceType?//:slot fixed jump 
源配置 sourceConfig a ??3
计算规则 ruleType c ?ruleType?//table agg pandas 
计算配置 ruleConfig a ??3
计算附加 subjoin a ??3
输出规则 outType c ?outType?
输出配置 outConfig a ??3
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




# chains 

#   ?param1?colspan?dataType? 
#  
_id  _id 
topHook topHook
topHookId topHookId
#  fetch.key
编码 sn 
名称 nm  
规则等级 level c ?cell_level?//:step measure plan 
周期 cycle ?cycle
t   t
#  fetch.option
刷新 refresh c ?refresh

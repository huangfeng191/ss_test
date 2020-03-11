
# why is it  named tide?
  tide   /taɪd/ 
       n. 趋势，潮流；潮汐
       vt. 随潮漂流

# link 里面需要 level 吗？
1. level `s meaning is  to solve  generating cell , so Do not need; 

# cell.rule.table.query type 类型 需要log 吗 
1. Do not need : 不需要取日志数据, 直接取 规则 结果 


# proto.level.fetch/take  refresh 

只有生成的时候 才需要 refresh 所以 take(取数) 中不需要包含 refresh , 字段 

fetch  关联的是相应的类型的配置 


# tide.service.bean.base 与 tide.service.bean.out   配置数据与产生数据分开的目的是 **

便以以后分离与拆分 


#  why take.option.refres is not need 

fetch.option.refresh 0 
take.option.refresh 1
已fetch 为准 ,


# 规则等级 level  不能小于 hook 
如果小于的话,那么上下及的chain 就会存在不一致的情况  virus.spreed 就是出现多余的数据 
可以大于  , 因为这种情形下及指向的都是正确的
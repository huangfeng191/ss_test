# cell_test

## ui.dynamic.__init__

def test:

    loadRule



## service.dynamic.funFun

def getLastResult:



def getAggregateResult:



@bind_dealWithCell_wrapper
def loadRuleloadRule:
    if ruleType=="last": #目前支持的规则
        return getLastResult(**kwArgs)
    elif ruleType=="aggregate":
      return getAggregateResult(**kwArgs)






## service.dynamic.rule
def  bind_dealWithCell_wrapper  //@ 
    rebindTier
    查询历史生成的日志：如果有、且不更新就返回

    记录日志
    组成具体规则需要的参数 
    for s in ["rule","reuseParams","out"]:
        if one[s]:
            cell[s]=json.loads(one[s] )

    调用具体的规则

// tier={"link":{},"step":{}}
def rebindTier(log,tier):
    补充 tier



@dynamic_params_wrapper
def beforeDynamicQuery(**kwArgs):
    dynamicDeal


<!-- 单个规则,单个计算 -->
def dynamicDeal(source={},  out={},**kwArgs):
    d=dynamicQuery(source,**kwArgs)
    ret=saveWithOut(out, d, **kwArgs)




## service.dynamic.common
<!-- 将参数 组合成需要的 格式 ， 配置与方法的转换 -->
def dynamic_params_wrapper(func):
    def bindSource(source):





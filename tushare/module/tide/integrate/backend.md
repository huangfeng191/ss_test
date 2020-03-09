# TaskRun 
    from customs.tide.service.dual.rule.doing.CellDoing
        func newResolve 
            1. 获取规则数据
            2. 保存数据
        func accrue
            1 解析对象
                loop
                source
                rule  CellRuleConfig
                out 
            2 老数据处理
            3 依据loop 循环生成数据

    from customs.tide.service.dual.rule.factor
            OriginConfig   source  loop 配置解析


                OriginParsed  fixed 类型解析 

                    QueryParsed 参数解析 
                        type 
                            jump

                            value
                            date 
                                "restrain": "extend",

            通用的解析 source loop query 

# 配置类型为 jump 的 所取数据 都是分 level 的 ***



# 配置 source.table  时 表要写全 指的是python 中的
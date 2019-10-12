cell 数据的来源： from  out sn
link 有效的cell数据: 
step 有现实意义的数据规则
measure 多个现实意义的规则数据的合并
plan 按方案类型

ps: 

    measure1:up>3 && up>10pct
            step1 up>3 
                link:最近七天明细
                    cell:
                        1 最近7天
                        2 明细
                link:up>3
                    cell:
                        1 type:link
                        2 up>3
            step2 up>10pct
                link:最近七天明细
                    cell:
                        1 最近7天
                        2 明细
                link:up>10pct
                    cell:
                        1 type:link
                        2 up>3
            step3 industry

        
            


对于数据来说可以选择数据来源：
    link
    step
    measure

    对于数据规则：还没生成过数据的话需要提前生成,
    按cell 一步步生成
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
                        1 最近7个交易日  unique :key:outSequency sn 
                        2 daily明细    (from_sn unique ) key:outSequency sn + soleSn : "cell/link --future: /step/measure" 
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
                        2 up>10%
            step3 industry

        
            


对于数据来说可以选择数据来源：
    link
    step
    measure

    对于数据规则：还没生成过数据的话需要提前生成,
    按cell 一步步生成








对于cell 来说:  
    inType 输入类型
    rule 生成规则
    outType 输出类型
    frequency 频率
    outGenerate 生成策略
    out 输出规则

方法： 解析输入
      输出


<<<<<<< Updated upstream
编码规则：
    C_
        C/L/S/M_
    L_

    S_

    M_

数据类型+ unique/ L / S /M 

返璞归真： 不管是何种类型，要查询数据都是到 cell 层级, 编码也代表其数据的来源
=======

C_
L_
S_
M_

对于link 来说已经有一定意义了 所以暂时需要在编码上区分出详细信息，不添加outTypeSn ,返回的数据也暂时不需要

>>>>>>> Stashed changes

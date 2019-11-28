
# 整体设计：
    module get: 从tushare 上获取数据到表中
    medule dynamic  从表里获取有用的数据、将数据保存到中间表：
    对于数据：1  表格数据
             2  日志数据  , 对于 cell 的数据 都是有保存的
                如何找到正确数据： 
                cell 字段有 sn 编码 
                           frequency 频率  
                    inTypeSn: 保证了 规则的唯一性


    cell 纯粹的获取表的数据                 
    link 有效的cell 数据 
    step 有现实意义的规则
    measure 多个显示意义的规则的数据的合并
    plan 按方案来执行

对于每一个步骤，都要能获取到 当前步骤的最终取值


     cell :

        
    

                                  
# cell:
    ruleType :
    
 - [x] last
 - [] aggregate
  
  目前实现两种 last 只是纯粹的取 数据
        aggregate 可以统计

  对于生成的规则: rule :
    取数来源： table:  
              log : 
              loop: 比较特殊,实际是循环调用 其他的规则
    

应该有个全局参数， 标识重新生成

        
未成功实现的原因是 ：
    对数据的模型 ，还有异议

    nm  sn  out: { outFrequency ,inTypeSn  }


    C_XX 
    L_XX
    S_XX
    M_XX
    P_XX


    对于 cell 其实应该是可插拔的, 插到那 就实现相应功能 
     
其实每个 环节 应该都是可插拔的， 可以把每数据 插拔到每个环节的下一步骤

source: [ "type":"link" ,"sn" , out: ],

取数可插拔， 

处理也应该可插拔，形成算法，
第一步完成 取数的可插拔

其实对于 数据的 按 对象化处理 很重要


1 先完成 取数的可插拔
    step1 : 数据存储的统一结构


 retrieve :{
     ""
 }


 phasedOut {"type":"table", 
            "table":""
            "logKey":{},
            "dataKey":{}}

需要考虑，如何不要生成重复数据，最大限度的复用数据，对目前的规则来说，是一天天的，
我希望要快速，所以，需要复用



2 业务逻辑的可插拔


如果在日志中已取到数据，则直接获取, 标识出那个job 生成


cell : sn  freq  

对于 数据 的 敏感度：

  最近7个交易日： 敏感度最弱： 只要生成一次就好, 所以这种数据 可以理解为 数据级别 cell 

  对于数据 有两类：
- [x] 一类是为取数据 --   只需生成一次
- [x] 二类是应用算法 -- 每次都生成       
for: 
step 
    link 
        cell 
        when  cell.level=="cell":
            sn, freq 
        when cell.level=="link":
            sn,freq,linkSn 
        when cell.level=="step":
            sn,freq,stepSn
        when cell.level=="measure":
            sn,freq,measureSn
^ code rule : C_    L_   S_   M_  P_ 

从日志中去判断是否已生成：
    cell_log   无时生成- (sn,freq )
    link_log
    step_log 


simulate:
step1 up>3 
        link:最近七天明细: L_7detail
        sn,freq ,
        fetch: {level:"cell",key:{sn,freq}}
            cell:
                1 最近7个交易日  
                    sn,freq, level=="cell"
                2 daily明细 最近7个工作日的明细
                    level=="cell"
                    sn,freq,     // query=log      
                
                1 最近7天 
                2 明细
        link:up>3
            cell:
                1 source_type:link ,inType Sn:"L_7detail" 
                2 up>3 

加一种cell 类型，只是为了获取上一步的输出
cellType :"getData"
sourceType: lastResult ,
下一步可以应用算法  link up >3 的股票数 

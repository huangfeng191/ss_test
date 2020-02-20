# 2020-01-23  Thursday 

   base 方法 
   循环的机制 

# 2020-01-24  Friday 

1. 各级调用 
2. cell 的规则 
3. base 的规则 cell 的简化版 
4. 先写片段 再合理整合
5. 先写部分代码 
6. 先写一个规则把 table 的规则把


proto 用于判定重复及 取实际数据 
   cell 
      fetch 是判断数据是否需要生成 ,
         此处数据 取日志表 
      take   是取实际的数据, 
   link 
      fetch  与 take 的  sn level 可不同 

      cycle refresh 可继承  


   cycle 与 t 的关系：
   根据cycle 生成 t , cycle 与t 必须同时保留，in order to keep unique


怎么把 cell  link  step measure plan 连接起来 



plan  
   id
   measure 
         id 
         pid 
         step 
            id 
            pid 
            link 
               id 
               pid 
               cell1 
                  id 
                  pid 
               cell2
                  id 
                  pid    


 


# 2020-02-17  Monday 
1 source 
2 rule 
3 out 
4 loop 
5 chain



# 2020-02-20  Thursday 

1. out outType
2. save data 
3. take 
4. doLog 



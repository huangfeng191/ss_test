1 上7 个交易日  连续4 天 



tips:
    查问题时，可以考虑在查询数据库时的方法



2 数据删除， 需要做    


2019-9-25


1 对于test 以及 cell 提供删除数据的功能， 优先 cell 
2 link 数据需要计入日志，里面添加字段，数据的最后存储位置 
3 link 添加一个字段 取数规则， last  or first 
3 对于link 来说，可以将 cell 按复用性归类 doing 
4  step  环节的完成情况  横向比较结果， 一条记录一个结果 doing 


2019-9-29
1 copy to other link   ToCopy
2 实现一种类型 from link ,就是说 将 link 的 out 当作源进行处理   (** need to do )
3 编码的 规则


2019-09-30

1 from link
2  with regard to : Frequency can extend 
3 dataGrid edit:    
    relativeType , 
    generateW

4 step  dbClick -> selectedlink  generate 

2019-10-1
5 对于不同频率的数据 如何混合调用，
    也就是说 link 在生成数据的时候也需要报错，当前link的日志状态，每个cell 需要有单独的日志
    需要在cell 日志里记录 linkSn linkOutFrequency


2019-10-02

1 update mongoDb version try to solute the problem about   array query : $elemMatch  return only one row 


2019-10-03
0 对于记录日志时间的wrap 需要记录类型字段 OK
1 对于 outFrequency 的 extend  need to consider
2 对于日志中的 out 需要重新组织，方便查找数据：
    基本字段  phasedOut {"type":"table",  (*defer )
                         "table":""
                        "logKey":{},
                        "dataKey":{}}


2019-10-12

1 正向反向偏移度
2 对于数据需要添加板块信息、结果可以合并

数据源：  可以是 股票+指数 




2019-10-13
1 对于pandas 处理 可以考虑将 过程写在参数里
  对于参数可以用变量替换的方式

TODO:
对于 cell 的 重复性问题， 
    因为 cell 是属于 link 的 所以 对于同一个 cell 编码+ 频率数据 要保证唯一 ，
    其中存在的问题：
        同一编码，但是数据源不一致的时候 ，得出的结果也应该是独立的，
        解决方法：
            对于cell 编码 , 辨识种类： 唯一性的 需要区别与其他的编码，

        编码规则：
            对于规则我觉得业务性更重要，

            linkSn+cellSn
            cell 编码分类：
                

                考虑添加一个字段 为了标识唯一标识： 输出编码,但现阶段可以先搁置，将编码设置为唯一编码

                
                

2019-10-15
    对于不同层级的 周期问题暂时搁置

    tier   层级信息     
    做step 的时候 可以参照 
    doLinkOne 方法，并且绑定 tier



# 2019-10-18
   1. 交叉数据的能力如何实现 可以用pandas的比较算法,先把逻辑初步整理一下
   2. python 对于子方法，可以考虑用类的形式 
   3. 实现pandas 算法  dateFrame ;
   4. 实现description.md
   5. 自动生成未存在的数据，考虑用last 字段，加快速度



# 2019-10-21
 1. 对于日志，可以钻取日志，或者明细信息 

# 2019-10-22
 1. with regard to cellType isn`t cell , need to generate in loop


# 2019-10-23
 with regard to generate need to create a module to loop generate data 


# 2019-10-24
1. 将计算的 频率 编码 输出编码 防止到同一的对象里面 ，好处就是 查询 代码编写 简单 也就是说 要对数据的字段进行归纳
2. out:
 type:log 中
 "fields":[field1,field2] // 后续可以扩展到不同的源 获取数据 可以考虑用 pandas 的能力
 table 也缺少 多表输出的能力 pandas 数据清洗的能力
  > 第一步需要将数据获取回来 
        > 可以有多个数据来源并且处理
3.  last.rule.queries 里面要实现 type="logOut" ？

    我觉得数据来源也可以时 logOut 
    
    last 类型 的源 可以时 logOut
    aggregate 的源 也可以是 logOut
    last.rule 的数据 也可以取自 logOut : field 类型

    但一般来说 作为步骤 还是倾向于 作为下一步骤的源赖处理,

4 pandas important ： because  daily & index 日报 跟 指数 需要结合
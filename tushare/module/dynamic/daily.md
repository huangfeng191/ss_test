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

  

# 2019-10-21
 1. 对于日志，可以钻取日志，或者明细信息 

# 2019-10-22
 1. with regard to cellType isn`t cell , need to generate in loop


# 2019-10-23
 with regard to generate need to create a module to loop generate data 


# 2019-10-24
1. 将计算的 频率 编码 输出编码 set to 同一的对象里面 ，好处就是 查询 代码编写 简单 也就是说 要对数据的字段进行归纳
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


# 2019 -11 -02  
  stock  project
?colSpan 的字段名 用markdown 的方式 
    crud Form 支持  ColSpan 类型   用 ?colSpan 来进行  ，可以用在


    配置中添加 ? param :1 ? 模式 增加灵活性      


# 2019 -11-03

    再日志中添加一个字段 

    需要再日志中加此字段 

   对于 cell 最后的输出 要在日志中形成统一的字段：unique
<!-- 驼峰自定义的字段，下划线方式：接口获取的字段 -->
    1 fetch:{
        "key":{ // 查找生成的数据 -- logKey 
            "sn":"",
            "inTypeSn":"",
            "t":"时间"
        },
        "type":"table", // log:
        "table":{
            "table":""
            "finest:{                   -- dataKey 
                "ts_code":"股票代码",
                "trade_date":"交易时间"
            }
        },
        
        "log":{ // 优先级是 id 相同
             "table" :"" // with regard to name , base on inTypeSn 
             "field" :"" ,
             "fields":?
        }
    }

    大部分数据中 inTypeSn = " link" or  higher-up   when = ceil  means 公用的 


    相同的编码 代表着 数据是一样的 ,抽象层级越高，代表着数据越唯一？ 
    对于编码 一定要有统一的规则

    需不需要 加一个批次的 概念：
    就是说同一个plan 里的 数据 , 可以是对象的方式 ;
    log 里面 加一个 

    对于数据的获取，我觉得 可以 加一个 批次表，

    将 数据的流程 记录到这个表中，

    id  目的是可追溯 

C_  cell  //频率_输出表_意义
L_  link
S_  step
M_  measure


C_SN_1911040001



1 对于 outFrequency 的 extend  need to consider
2 对于日志中的 out 需要重新组织，方便查找数据：
    基本字段  phasedOut {"type":"table",  (*defer )
                         "table":""
                        "logKey":{},
                        "dataKey":{}}




                        
# 19-11-05

找出 连续涨 5 天 股票明细

找出 连续跌 5 天 的 股票明细

找出 满足条件 的 行业 个数 排行 

找出 满足条件 的 省市个数排行
     
    


# 19-11-06

1 完成 cell 输入类型： logOut 
2 应用简单算法，取出有意义数据   (11月10号前 完成)
3 表格的方式展现
4 考虑曲线数据的获取




# 2019-12-05  Thursday 

1 对于编码规则的生成，需要有一个比较合理的编码规范
2 支持一个换行的 markdown 参数： 可以设置为默认值, 同时可以设置列宽 

3 可以将 类似的功能抽象成 公用的配置 , 有点像是包装模式 **** 
4  对于markDown 可以设置一个默认值, 可以解析 模板得到 
将 markDown 模板里的默认值 拿出来,作为第一行的数据



# 2019-12-26  Thursday 
  写算法的时候 尽量统一格式，完成单一功能不要有其他的多余代码, 需要提炼算法
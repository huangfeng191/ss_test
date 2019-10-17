sz

normal

ss

normal




元素类型：  横向

元素类型： 纵向

元素间的联系： & ||


数据： sea

计划:plan
   措施 :measure 可以勾选多个步骤，并且可以横向比较措施的完成情况
      步骤 :step  环节的完成情况
         环节 :link  属性： 是否必须等
            元素 :cell  最小单位可以是字段， 是否必须    分组
                     表名  field 值类型 (值类型) ,目标字段 target  ,group   "nm"={"left","right","operate"}     
                     
                      值类型: record , param , fixed  
                      目标字段: 默认情况下=field

               元素种类：
                    表
link 已经是筛选后的规则集了 P.S: 连续5天上
                                指数偏移多少
step : 多个规则应用后的结果集 ： 单个逻辑的最高级-------- setting 
measure： 可以勾选结果集   (根据条件 勾选方案)
plan: 对勾选的结果集进行命名 保存等



                    
一般来说: 
    参照物比较      


    可以理解为元素间 互比 ,  group :               

对于


1 个表的 一个字段 与另一个表的 一个字段 做比较

modal: 1 个元素 与 另一个元素做比较




元素类型：

code
指数


对于每个 元素可以拿到元素的输出表格 。


对于不相干的元素，可以通过 group 建立关联 ，并通过 target 进行比较，

对于多字段, target 可以由组合字段构成 并用 - 连接，构成唯一性

group: 字段值 // 找到元素进行合并
target: "规则库" 字段
target：{      // 对数据进行合并
    "key":"",
    "value":""
}

可以设置一个全局变量 

target:{
    "default":"field",
    "simple":"", // 可以设置
    "multi":["",""], // 可以设置

}



比较方式  横向比较：resolved
         纵向比较

        






        step_data   可以记录link 的 完成情况
        link_data  可以按每个stock 进行记录完成结果


<!-- crud  -->

table_nm 
table_field 
out_field 
type 
target 
relative_cell 
rule 



    "out": {
        "type": "table",
        "table": {
            "nm": "daily_business",
            "key": {
             "sn":1,
             "outFrequency":1   
            }
        }
    }



getLast

continue

one Method to :getOutData

getStepResult; 如果没数据，需要生成

link 已经是符合某种条件的数据，

对link 数据提供一个同级调用的功能, 





relativeType:lastStep  default
relativeType:LinkSn


if noData generate


lastStep : 只是将数据转换成数据来源字段 source ，后续还是要按规则配置



cell Link 分开 ，一般来说 只要用到 lastStep 跟 LinkSn 就可以， 

cell 能获取 link 信息 

source:{
    "type":"link",
    "type":"table"
}

step  Link 单个简单规则


step 1 获取7天内数据（名字， 核心是对 link 的处理 ）    link 获取有效数据规则可扩展
step 2 大于三天 




link   1
        from sm 


PXX_

MXX_

SXX_

LXX_
   NameCode-Level-
CXX_  

code rule:

c:
    Level:
        N:Normal
        C:Common
        I:Important

    Get:
        Lst:last
        Agg:aggregate

    OutType:
        Tab:Table
        Log:Log
        DAT:Data

    Frequency:
        D:day
        M:month
        W:week
        E:every 


    NameCode-Level-OutType-Frequency


    N_XX-L_XX-O_XX-F_DXX






    






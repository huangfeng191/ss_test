# 2020-01-31  Friday 


  gather 
        chain
            tier

# 2020-02-01  Saturday 

1. 将 chain 里的 方法形成 class             



# 2020-02-05  Wednesday 



#  cell  ?param1?colspan?dataType? 
规则编码 sn 
规则名称  nm
规则类型 type c ?cell_type?//:slot fixed jump 
规则等级 level c ?cell_level?//:cell link step measure plan  增加cell 的复用性, 不同的 step 可以配置相同的cell , 同时也可避免反复生成数据
周期 cycle c ?cycle?//day month year week 从上可以往下继承, cell 里面可以不指定，增加复用性
循环配置 loop a ??3
计算规则 ruleType c ?ruleType?//table agg pandas 
计算配置 rule a ??3
输出规则 outType c ?outType?
输出配置 out a ??3
排序 w 
刷新 refresh c ?refresh// extend  从上可以往下继承, cell 里面可以不指定，增加复用性
分类 classify  // extend  at present type text 
描述 desc a ??3
pid pid




#  link  ?param1?colspan?dataType? 
编码 sn // -
名称 nm  
周期 cycle c ?cycle?//day month year week -
刷新 refresh c ?refresh?// extend -
排序 w 
分类 classify  // extend  at present type text 
描述 desc a ??3
pid pid 


fetch
    level 
    sn 
    cycle 

take 



loop  // 简化版的 cell 配置 , 或者说 直接取自 chain 链数据 
    sn 
    type: 
        table 
        log 
    table  // 取配置 

    log 

    单独的表 

for r   in  loop 

details


rows_cell  // 返回多个数据 
rows_link
rows_step 
rows_measure
rows_plan 



proto
    cell  // 此时  fetch 里的项 == take 里的项
        fetch  // 针对日志 
            sn   // cell.level 
            level  // cell.level  决定数据的唯一性 PS1 PS2
            levelSn // cell.level !=cell 时 区分数据的唯一性 ,cell.level==cell.  levelSn==Sn 
            cycle 
            t 
        option
            refresh      
        take // 针对具体的数据
            sn 
            level 
            levelSn
            cycle
            t 
        out 
            type log table 
            table {}
            log {} 


           


    link 
        fetch  
            sn   // link.level 
            cycle 
            t 
            level  //  能正确获取数据  >cell 
            levelSn //


        take 
            sn  //cell.sn 
            level  // cell.level 
            levelSn // cell.levelSn 
            cycle 
            t 
    step 
        sn
        cycle 
    measure
        sn 
        cycle 
    plan 
        sn 
        cycle         

# cell.level=="cell"  // common result 

对于数据的存储来说 由cell 决定 


PS1
    level =="link"

    此时的 sn 取的 是 link 的 sn  所以需要现有层级关系

plan    
    measure
        step
            link 
                sn 
                cycle 
                t 
                cell 
                    sn 
                    level:"link"    
                    fetch 

                    take 
                        link.sn
                        link.cycle 
                        link.t 
                            link.take  // check whether exist 
                                refresh 


if  cell.level ==cell 
    只要cell 里面有 
        sn 
        cycle 
        t 的数据就直接取用
else if cell.level== link
      fetch  
            sn   // sn  
            level // link 
             
            cycle 
            t 
    fetch.sn == link.sn 
                link.cycle
                link.t 


日志:
    cell_log
        fetch 
        take 
        option 
        data // 只有cell 有 
         
    link_log 
        fetch 
        take 
        option  
    step_log 
        fetch 
        take 
        option  
    measure_log 
        fetch 
        take 
        option  
    plan_log  
        fetch 
        take 
        option  


1 形成 plan 树 

plan
    measure
        step
            link1
                cell1 
                cell2
            link2 


plan.fetch 
measure.fetch 
step.fetch 
link.fetch 
cell.fetch   OK

cell.take 
link.take 
step.take 
measure.take 
plan.take 
TODO:
形成这个链路 

cycle - > t 


reuse.getParamsDateType  

需要提供指定时间生成数据的能力

cycle 

    query :
        type ==date 
            value:"cycle" 
            针对的是 cycle and t 的值
        type =="data"

        type == "jump"
        {
            "sn":"",
            "cycle":"",
             level:"", // 找到配置取第一条就好 ,
            "t":"",
          
        }

level
sn  
cycle
t        
             

怎么把  w
step  link  区分开来 
            相同的 link sn 



# sn rule:
m_XXX
l_XXX
s_XXX
c_XXX


link  里是否需要一个 level , 标识下数据 
levelSn 


# 2020-02-06  Thursday 
 数据重算  
 refresh = refresh 
 从 chain 中 获取 layer 信息 
   new Chains 
   Chain 
     

    基于面向对象的思想老考虑 问题 


    Chains 处理所有的规则 

    Chain 处理单条规则

    思索出处理的通路 

# 2020-02-07  Friday 


# 2020-02-16  Sunday 


{
    "fixed":{
        "type":"table",
        "table":{
            "nm":"trade_cal",
            "query":{
                "cal_date": {
                    "type": "date",
                    "restrain": "cycle", // cycle day week month year 
                    "operate": "lte"
                }
              
            }
        }
    }
}


{
  "table":{
        query:{
        "is_open":1
        },

        "limits": {
            "size": 7
        },
        "sorts": {
            "order": [{"Field": "cal_date", "Type": true}]
        }
  }
}

# 2020-02-17  Monday 
1. 实现 第一个 cell 计算 



# 2020-02-20  Thursday 


outType 
    table 
    log 

outType

outConfig
{
    "log":{   
        fieldConfig:{
            cal_date:{}
        }
            
    }
}



Virus(chain,o_layer ,task.get("out"))
 

 # 2020-03-07  Saturday 
 
 1 最近 >5 in 7
 2 按行业 统计个数 最好使用 pandas **** 


上一步的结果, 进入规则计算 

industry,str,所属行业
market,str,市场类型
exchange,str,交易所代码
统计个数


如果是 jump  类型 输出为 table 时 ，获取的take  在解析查询的时候要把 level 加上 
sn rule:
m_XXX
s_XXX
l_XXX
c_XXX

everyType hasKey refresh 

cell:
    level: measure step link cell 
    refresh: default:0 
    type: record slot arithmetic
    stage:{
        fetch:{ // 目的是找到,产生数据的日志,同时判断是否需要生成数据
            level:"cell",
            "key":{
                sn:  
                freq:
            }
        },
        take:{ // 目的是找到,产生数据的结果
            type: table log,
            table:{
                "nm":"",
                "fetchKey": // 等同于 fetch 里的key 
                "dataKey":
            }
        }
    }

- plan:
    - 添加对象 stage refresh 字段   
    - 修改字段： inType ->level  删除字段 inTypeSn
    - cell.type==slot realize  
    - cell.ruleType==extend realize 
    - loop 生成数据 
        - 规则:  if cell.type==arithmetic : 将 fetch.level  autoRaise to the most level  
          fetch 及生成跟 记录的 sn  是两条线
        - 如果无生成 如果有跳过，到达下一步

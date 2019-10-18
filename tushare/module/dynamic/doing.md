
# rule  ruleType 
    ruleType determining rule method


# inType
    对于输入类型：two ways
        1 figure out in rule
        2 identify in log 


        inTypeSn show in the log 

        ruleType =="log" is OK 






 "aggregate": [
        {
            "$group": {
                "_id": {"ts_code":"$ts_code"},
                "count": { "$sum": 1 }
            }
        },
        {
            "$match": {
                "count": { "$gte": 3 }
            }
        }
    ],




TODO:
 1. 解析pandas 代码段 可以变成数组考虑变成数组命令
  > 第一步需要将数据获取回来  多个源
        
        [
            { "type":"logOut","logOut":{type, sn ,field, `inType`,`query`  }  },
            { "type":"table ","table":{"nm",`query`  }  }
        ]

        logOut: field:{type, sn ,field, `inType`,`query`  }
        
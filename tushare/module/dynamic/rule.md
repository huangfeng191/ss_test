sh-sz 区分开 ，也可一起配置

从源头上 两套配置

1 连续  up>5 

2 与指数同步率  >5

3 连续涨停


<!-- 考虑？ -->
行业筛选


<!--  -->
3 行业排行

sh:""
sz:""


查询条件归纳：

1 比值型 default  "key":{"type":"normal","value":"","operator":"" }

<!-- dateType:["day","month","year"] -->
<!-- 只有取界面时间的才配置时间 -->
2  "key":{"type":"date", "value":"day" , "operator":"" }

3  上一个输出

```js


a= {"type":"last",
    "option":{
        "source":{"table":"cal_date"},
        "limit":{"rows":7 },
        "queries":{
            "cal_date":{"type":"date","value":"day","operate":"gte"}
        },  
        "out":{
            "type":"array" // object  has key 
            "fields":[],
            "key":""
        }
    }

```


 



 
{"type":"last","option":{     "day":7,     "field":"cal_date"     "queries":{         "^field":"today"     } }}



#  在范围中 找到符合情况的数据
{
    "source": {
        "table": "daily"
    },
    "limits": {
       
    },
    "sorts": {
        "order": [{"Field": "trade_date", "Type": true}]
    },
   
    "queries": { 
        "trade_date": {
            "type": "log",
            "sn" :"last7"
            "operate": "in",
            "field":"cal_date"
        },
        "ts_code":"000001.SZ"
    }

}
proportion

占比
makeProportion

符合 占比

getProportionList




last 3 


getEligibilityList  




符合条件

eligibility




输出可以是表格型， 

同一规则可用 group 进行按顺序处理，此种情况，中间过程可以不输出

[{
    "ts_code":{"type":"loop","from":"stock_basic","from_k":"ts_code"},
    "start_date":{"type":"date","from":"day","operate":"="}
}

]


// 业务编号，可以取日志里面找  
编号规则 ：  业务号 +  7 位
业务号： 方法 编码 +7 

"out": {
    "type": "table",
    "table": {
        "nm": "eligibility",
        "business": "sn",
        "bn":"业务编号", 
        "key":{"ts_code":1,"trade_date"}

    },
    "array": {
        "fields": ["cal_date"]
    }
}


将结果写入 


<!-- 分析 -->
规则类型为 count 时 ：

params:{

}

out :{

}





normal situation:


loop

    oneQueries 

    out

同一个规则    
        


1  日期
2  符合条件数据
3  >        
 
TODO:
0 对于编码，需要有一套规则  ， 规则类型 - up/down limit - self   是否需要添加 public or private 
1 对于规则，考虑添加一类日志规则，对产生的数据做一些必要的逻辑验证  
2 可以考虑将步骤码存下来，为了后续的可以追述数据, 就是钻取数据的规则， 可以用规则的 source , queries ,+ showColumn do 


// 对于 统计接口，考虑

 query={}
  l = storageskc.db.aggregate(
                     [
                     {'$match':query},
                     {'$group':{"_id":'$tpid' , "a":{"$addToSet":'$stid'} }
                         },
                         { '$limit' : 10 }
                     ]
                     )
   for r in list(l):
       print 1
       
<!-- aggregate -->

{
    "source": {
        "table": "trade_cal"
    },

    "logQueries":{[^1]  // TODO: 暂未实现
          "sn":1,
          "outFrequency":1   
    }  
    "queries": {
        "cal_date": {
            "type": "date",
            "value": "day",
            "operate": "lte"
        },
        "is_open":1
    },

    aggregate:[

    "$group":{ 
            "_id":{ "ts_code":1 },
            "count":{"$sum":1}
    },
    "$match":{
        "count":{"gt":3}
     }     
    ],

    


  "out": {
        "type": "table",
        "table": {
            "nm": "dynamic_basic_business",
            "key": {
             "sn":1,
             "outFrequency":1   
            },
            "dataKey":{
                "ts_code":1
            }
        }
    }

} 



1 last 7
2 up 
3 up gte 3
4 show detail 

上一级就是为了复用用的

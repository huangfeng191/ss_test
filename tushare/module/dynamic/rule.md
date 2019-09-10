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

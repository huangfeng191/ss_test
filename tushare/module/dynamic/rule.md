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
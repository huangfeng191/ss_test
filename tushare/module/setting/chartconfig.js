o={"method_tp":"getStockHistory_tochart","query_data":{"s":"20180901","codes":["300097.SZ"],"items":{"daily":1}},
"query_chart":{
"in_xAxis":{"k":"trade_date","from":"daily"} , 
"in_yAxis":{"1":{"name":"涨跌幅","max":10,"min":-10}   },
"in_series":[
	{"from":"daily","k":"open"} ,
	{"from":"daily","k":"close"} ,
	{"from":"daily","k":"high"} ,
	{"from":"daily","k":"low"}, 
	{"from":"daily","k":"pct_change","yAxisIndex":1}
	
	]  }
}


comm_data={
    // 算法
    "calc_tp":"",
    
}

comm_data=[
    {
    // 算法
    "calc_tp":"",
    "calc_query":{}   
}
]

return {
    a:[
        {"code":"",
        "object_1":{ k1, k2, } || []

        }
    ],
    explain:{
        o:{},
        a:{}
    }
}
//  

数据条件 query_data

公共数据 comm_data

开始时间        s
结束时间  e
代码 codes
涉及对象    items  // {"daily":1}


query_chart
    in_xAxis   {"k":"trade_date","from":"daily"}
    in_series  {"from":"daily","k":"open"} ,


    "in_yAxis":{"1":{"name":"涨跌幅","max":10,"min":-10}   }
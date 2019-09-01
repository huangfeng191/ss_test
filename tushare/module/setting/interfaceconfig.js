// columns
分组名 group string 
记录名 nm string 
编码 table_nm string 
方法名 method string 
配置排序 w string
索引列 indexKey string 
存储方式 storageWay string c StorageWay
时间列 datecols string 
父对象列 storageKey string 
本对象列 selfKey string 
排序(CRUD) orders string 
方法参数1 param string 
方法参数2 param2 string 
查询条件 quicks string a
列配置 colInp string  a
备注 desc string a
发送方式  sendway  string c SendWay
获取周期  getCycle  string c GetCycle


GBindings.push({
    Code: 'StorageWay',
    Desc:"(存储方式)在获取接口数据的时候,将数据存储的方式",
    Records: [
       { name: '新建表', value: '1' },
       { name: '数组对象', value: '2' },
       { name: 'Object对象', value: '3' }
    ]
   });

GBindings.push({
    Code: 'SendWay',
    Desc:"发送方式,",
    Records: [
       { name: '全部下载', value: 'all',desc:" 只 param 方式下载" },
       { name: '增量下载', value: 'increase' ,desc:"两种方式,param全部下载,param2 增量下载"}, 
       { name: '单个更新', value: 'single' ,desc:"为了在界面上动态获取，接口信息"} 

    //    { name: 'Object对象', value: '3' }
    ]
   });


   GBindings.push({
    Code: 'GetCycle',
    Desc:"获取周期,",
    Records: [
       { name: '小时', value: 'hour',desc:"" },
       { name: '天', value: 'day',desc:"" },
       { name: '月', value: 'month' ,desc:""}, 
       { name: '年', value: 'year' ,desc:""} 

    //    { name: 'Object对象', value: '3' }
    ]
   });   


//  param  及 param2 

[{"ts_code":{"type":"loop","from":"stock_basic","from_k":"ts_code"}}]


[ // 数组方式，每个数组对象是一组接口调用，也就是说支持多次调用，主要为了解决 接口需要分类参数，而又想获取所有信息的问题
    {  // 配置方式 支持 常量获取， 配置如 ts_code:"000001.SZ" ,
       // 其他类型为对象方式，通过对象里的type 字段来确定类型：
       // key:{"type":"",...}
        /*  key : 接口参数字段
            type:  
                loop: basic:"接口调用时的参数字段",  from :"从哪个对象获取字段", from_k:"从获取的对象中，返回的值", from_q:"获取对象时的查询条件" 
                    类似与 接口参数：{从那个表获取哪个值，循环调用接口} 
        
        */     
    }

]


[{
    "ts_code":{"type":"loop","from":"stock_basic","from_k":"ts_code"},
    "start_date":{"type":"date","from":"day","operate":"gte"}
}

]



[{ "ts_code":{"type":"loop","from":"stock_basic","from_k":"ts_code"}, 
"start_date":{"type":"date","from_k":"day","operate":"="} } ]



// 用法解释

field colInp:
   sn ,dataType,nm,width   last:d  日期类型


field quicks:
    code , default 

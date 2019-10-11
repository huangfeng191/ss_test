source:link

对于link数据为生成的可以提示去生成

对于编码必须将频率字段挂上去，

关注 link output 

outFrequency , out.table out.logKey ,  ignore dataKey
       
        "outGenerate" : "last",
        "outFrequency" : "20190929",
        "out" : "{    \n        \"type\": \"table\",\n        \"table\": {\n            \"nm\": \"dynamic_basic_business\",\n            \"logKey\": {\n                \"sn\": 1,\n                \"outFrequency\": 1\n            }\n        }\n}",



有一个思想：***
    先不考虑 中间过程模式，暂时考虑 将数据都存入表里，同意冲表里取数据
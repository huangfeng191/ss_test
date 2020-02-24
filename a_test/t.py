# -*- coding: utf-8 -*-
import json


a=[{"c":1},{"c":2}]
b={"c":1}
print  type(b)
for k,r in b.items():
    print k 

del b["c"]

# 当整个对象替换时 , 对象的其他关联会被删除掉 
for  r in a :
    if r.get("c")==2:
        r["c"]=3
print json.dumps(a )


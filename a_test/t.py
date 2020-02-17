# -*- coding: utf-8 -*-
import json
def compressObject(obj):
    def plusKey(base,key,val,compressed):
        base1=base+key
        if type(val)== dict:
            if len(val.keys())>0:
                base1=base1+"."
                for k, v in val.items():
                    plusKey(base1,k,v,compressed)
            else:
                compressed[base1]=val         
        else:
             compressed[base1]=val

    o={}
    base = ""
    compressed={}
    for k,v in obj.items():
        plusKey(base,k,v,compressed)

    return compressed

o={
    "a":"sdf",
    "b":{
        "c":"3",
        "s":4,
        "e":{
            "e":3
        },
        "k":{}
    }
}    
b=compressObject(o)
print b 
print json.dumps(b)

print
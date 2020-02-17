# -*- coding: utf-8 -*-
import json
def compressObject(obj):
    def plusKey(base,key,val,compressed):
        if type(val)== dict:
            base1=base+"."
            for k, v in val.items():
                plusKey(base1,k,v,compressed)
        else:
             compressed[base+key]=val

    o={}
    base = ""
    compressed={}
    for k,v in obj.items():
        plusKey(base,k,v,compressed)

    return compressed

o={
    "a":"sdf"
}    
b=compressObject(o)
print json.dump(b)
# -*- coding: utf-8 -*-
import json
def compressObject(obj):
    def plusKey(base,key,val,compressed):
<<<<<<< HEAD
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
=======
        if type(val)== dict:
            base1=base+"."
            for k, v in val.items():
                plusKey(base1,k,v,compressed)
        else:
             compressed[base+key]=val
>>>>>>> f5d88e4dae4e23b2fe5ea327b0b1511396fb1605

    o={}
    base = ""
    compressed={}
    for k,v in obj.items():
        plusKey(base,k,v,compressed)

    return compressed

o={
<<<<<<< HEAD
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
=======
    "a":"sdf"
}    
b=compressObject(o)
print json.dump(b)
>>>>>>> f5d88e4dae4e23b2fe5ea327b0b1511396fb1605

# -*- coding: utf-8 -*-

#  fetch["t"]=tide_utils.getCycleToT(fetch.get("cycle"),t)
default_fill=[("cycle","day"),("refresh","refresh")]

for k,v in default_fill:
    print v

a=[1,2,3]

for n in a :
    if n==2:
        break 
    print n ;


a={
    "b":{}
}

print a.get("b")
print type(a.get("b"))==dict
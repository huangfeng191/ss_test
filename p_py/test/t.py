# -*- coding: utf-8 -*-
chain_level_up= ["cell","link","step","measure","plan"]

i=chain_level_up.index("measure")
print "下标%s"%i


from copy import deepcopy

a={"a":1,"b":2}

b=deepcopy(a)
b["b"]=3
print a==b
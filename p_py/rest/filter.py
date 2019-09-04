# -*- coding: utf-8 -*-
''' 
 filter 不会改变原有数组
 filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。

 '''
def f(o):
    if o==3:
        return False;
    else:
         return True  
a=[1,2,3,4]          
print filter(f,a)
print a


#  map 映射
 def f2(o):
    o["nm"] = re.sub(pattern, "", str(o.get("nm")))
    return o
s=map(f2,s)

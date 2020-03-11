# -*- coding: utf-8 -*-


'''
跳出循环 
'''
a=[1,2,3]
for n in a :
    if n==2:
        break 
    print n ;



''' 
 删除数组中的多个元素技巧：
step1 : complete copy one ,
    2 : cycle carbon 
    3 : remove array element
    4 : over
    PS: 此方法 支持对象数组
 '''
a=[1,2,3,4,5]
b=[]+a 
for r in b:
    if r in [2,3]:
        a.remove(r)
print a 


a=[{"_id":0},{"_id":1},{"_id":2},{"_id":3},{"_id":4}]
b=[]+a 
for r in b:
    if r.get("_id") in [0,3]:
        a.remove(r)
print a


# python 的 数组删除 支持不同对象，相同属性删除
a=[{"_id":0},{"_id":1},{"_id":2},{"_id":3},{"_id":4}]
b={"_id":1}
a.remove(b)
print a     


""" 
python 规则：
    循环时，不可整个替换对象，只能对立面的属性进行替换

 """

a=[1,2,3,4]
for r in a:
    if r==2:
        a.remove(r)
    print r
        
# 判断字符串 数字是否 包含在数组中
a=[1,4,3]
print  4 in a
print  2 in a



a=[1,2,3,4]
for  k, v in enumerate(a):
    if v==2:
        a.remove(v)
    print k,v    


from copy import deepcopy
a=[{"a":1,"b":1},{"a":2,"b":2},{"a":3,"b":3}]
for r in a:
    if r.get("a")==1:
        r=  dict(r,**deepcopy({"a":11,"b":11}))
        print r  
print a          


""" 
因为是对象 引用 ，如果对象删除元素了，
那么 在循环中 k没变化的时候，循环表现为 跳过一个元素
    0 1
    1 2
    2 4
 """     
#  此处验证 跳过了
a=[{"a":1,"b":1},{"a":2,"b":2},{"a":3,"b":3}]

for r in a:
    if r.get("a")==1:
        a.remove(r)
    if r.get("2")==1:
        a.remove(r)    
print a        


#  分隔函数
a=""
a.split(",")
print a.split(",")
#  L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。
print [1,2,3,4][0:1]





# 获取数组最后一位
a=[1,2,3,4]
print a[-1]

a=[1,2,3,4]
print a[len(a)-3:len(a)]


# 往数组第一位插
a=[1,2,3]
print a.insert(0,-3)
print a

# 获取数组下标  ***

a=[1,2,3,4]
print a.index(4)
print a[a.index(4)-3:a.index(4)]


a=[1,2,3,4]
print a.index(4)
print a[-3:a.index(4)]

print a[  [a.index(4)-3,0] [a.index(4)>2]:a.index(4)]

print a[0:a.index(4)]

# 查询数组中是否存在某个元素
print 2 in [1,2,3]


print [1,2,3][1:2]





# 数组简写
print [0]*16

# sort 

a=[{"w":None},{"w":1},{"w":3},{"w":2},{"w":None},{"w":None}]
a.sort(key=lambda x:x.get("w") if x.get("w") else 999)
print u"positive sequence" # 正序
print a

#  sorted
a=[{"w":0},{"w":1},{"w":3},{"w":2},{"w":None},{"w":None}]
def cmp(o):
    if o.get("w")==0:
        return 9999999999
    else:
        return o.get("w")
b=sorted(a,key=cmp,reverse=False)
print b
# b=sorted(a,key=lambda x :  x.get("w"),reverse=False)
# print b








# 数组复制，需要用到deepcopy
from copy import deepcopy
o={"a":2}
a=[]
a.append(deepcopy(o))
o["a"]=3
a.append(deepcopy(o))
a.append(deepcopy(o))
print a



a=["1","2","3"]
b=",".join(a)
print b


import json
a=["1","2","3"]
c=json.dumps(a)
print c[1:-1].replace("\"","'")



# 数组合并

a=[1,2,3]
b=[3,4,5]
print a+b



a=[1]
b=[2]
c=a+b
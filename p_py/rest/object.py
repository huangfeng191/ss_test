a={"a":1,"b":2}

for v in a:
    print v

for k,v in a.items():
    print k,v



for r in range(1,3):
    print r    



bn={1:2,2:1,3.0:3}
print bn.get(1)
print bn.get(3)



# 提取b中属于a 的属性
a={"a":None,"b":None}
b={"a":1,"b":2,"c":3}
print filter(lambda o: o[0] in a.keys(), b.items())
print dict(filter(lambda o: o[0] in a.keys(), b.items()))

# 数组合并
# 建议采用

a={"a":1}
b={"b":1}
c=dict(a,**b)
print a
print b
print c



# 空对象 updata 方法也可使用
a={"a":1}
b={"b":1}
c={}
c.update(a)
c.update(b)
print a
print b
print c


a="s"
b={a}
print b


# -*- coding: utf-8 -*-
#  将json 转成中文输出
b='\u64cd\u4f5c\u7cfb\u7edf'
b=b.decode('unicode-escape').encode('utf-8')
print b
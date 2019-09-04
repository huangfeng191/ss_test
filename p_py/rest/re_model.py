# -*- coding: utf-8 -*-
import re
#  必须把字符串转换成 str 
nm=str("我的天那我（1212）")
pattern=re.compile(r"\(.*\)$|（.*）$")
for r in  (pattern.findall(nm) or []):
    print type(r)
    print str(r)
    
print re.sub(pattern,"",nm)    



pattern1=re.compile(r".*\#.*")
test=str("101#1")
if re.match(pattern1, test):
    print('ok')
else:
    print('failed')


 

''' 

正则 是 ： 符合规则类型， 次数
预定义字符集（可以写在字符集[...]中） 
\d 相当于 数字:[0-9]


str 可以把 ascii 转换成 unicode 

匹配括号时 需要 用\ 转义字符

re.sub 函数 就是替换函数

'''


# -*- coding: utf-8 -*-
import  re

a="12345"
reg="234"
ret=re.match(reg,a)
print ret
if ret:
    print "exists"

retAll=re.findall(reg,a)
print retAll # 返回 array
a="1234512345"
reg2="2(.*)4"  #括号 ，的话 返括号里面的
retAll=re.findall(reg2,a)
print retAll # 返回 (3)
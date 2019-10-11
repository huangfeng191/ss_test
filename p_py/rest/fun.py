# -*- coding: utf-8 -*-

def TestResult():
    return 1,2
#一个常见的惯例是使用“_“作为要忽略的元组元素的变量名。例如：
a,_=TestResult()
print a 
print _



# 字符串替换
a="12345-12345-1-4-2018-12345"
b=a.replace("12345-12345-1-4-2018-","")
print b


# 补足数字位数

a=123
print "%05d"%a
print type("%05d"%a)


print 1
'''
左边补0位数补全
'''
a=1
print str(a).zfill(4)
print '---------- 0001'


#  截取
a="12#es"
b="12aes"
print a.split("#")[0]
print b.split("#")[0]


#  将json 转成中文输出
b=json.dumps(b).decode('unicode-escape').encode('utf-8')
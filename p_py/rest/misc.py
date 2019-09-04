# 获取头文件
web.ctx.headers
此方法 属于 web.webapi 里面的内容




#  此方法是精确到分钟，就是把秒数 删掉
import time;
t= time.time()
print t
print t- t%60

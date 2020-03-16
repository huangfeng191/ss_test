# -*- coding: UTF-8 -*-
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
   print "执行的文件名,也算在参数中" 
data = {'a':[1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2],'b':[1,2,3,4,5,8,9,10,1,2,3,6,7,8,9,12,13]}
df = pd.DataFrame(data)
for name,group in df.groupby('a'):
    group['c'] = ((group['b'].shift(1).fillna(0) + 1).astype(int) != group['b']).cumsum()
#    print(group)
    print(group['c'].value_counts())

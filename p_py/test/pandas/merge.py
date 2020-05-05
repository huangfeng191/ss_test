# -*- coding: UTF-8 -*-
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
   print "执行的文件名,也算在参数中" 
   a=pd.DataFrame({"a":[1,3,4,5],"c":["a","b","c","d"]})
   b=pd.DataFrame({"d":[11,12,13,14],"c":["a","b","c","d"]})
   c=pd.merge(a,b,how='left')
   print c


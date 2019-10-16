# -*- coding: UTF-8 -*-
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
   print "执行的文件名,也算在参数中" 
   df = pd.DataFrame([1, 2, 3, 4, 5], columns=['cols'], index=['a','b','c','d','e'])

   # df1 = pd.DataFrame([2, 4, 6, 4, 5], columns=['cols'], index=['a', 'b', 'c', 'd', 'e'])


   print df
# -*- coding: UTF-8 -*-
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
   print "执行的文件名,也算在参数中" 
   
   df=pd.DataFrame({'id':[100,20,1,1,3,3,2,2],'id11':[200,2,1,1,3,3,2,2]})
   print df
   print "↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓--down"  

#    print df.iloc[0] # 取行 
   def cs(d1):
       return d1[4]-d1[0]  
#    print df.apply(cs, axis=0)  # 以行 下一行 减去上一行 

   print df.shift(1)

   


#    print "↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑--up" 
# #    统计出现的个数 
#    print df['id'].value_counts()




# print "↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓--down" 

# df[df<50] = None
# print(df)
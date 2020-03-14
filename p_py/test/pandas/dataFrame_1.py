# -*- coding: UTF-8 -*-
# 根据行记录,查找最长连续的个数 
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
    print "执行的文件名,也算在参数中" 
    data = {'a':[1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1],'b':[1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1]}
    df = pd.DataFrame(data)
   
    # 不等时累加, c 列变成 唯一标识列 
    df['c']= ((df["b"].shift(1).fillna(0))!=df["b"]).cumsum()

           df[df["b"]==1]["c"].value_counts().max() # 最大连续上涨
    print  df[df["b"]==0]["c"].value_counts().max() # 最大连续下跌
    print  df[df["b"]==1]["b"].value_counts().max() # 上涨天数
    print  df[df["b"]==0]["b"].value_counts().max() # 下跌天数
                                                    # 上涨大于%5天数        
                                                    # 下跌大于%5天数      
                                                    #  环比    (new-old)/old   
    df1=pd.DataFrame([
       [df[df["b"]==1]["c"].value_counts().max(),
        df[df["b"]==0]["c"].value_counts().max() ,
        df[df["b"]==1]["b"].value_counts().max(),
        df[df["b"]==0]["b"].value_counts().max()]
    ],columns=[u"continue-raise",u"continue-down",u"raise",u"down"],index=["300097"])
    print df1 
 



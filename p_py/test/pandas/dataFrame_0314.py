# -*- coding: UTF-8 -*-
# 根据行记录,查找最长连续的个数 
import sys
import os, site
site.addsitedir(os.path.join(os.getcwd(), 'p_py', 'lib'))
site.addsitedir(os.path.join(os.getcwd(),"..","..", 'lib'))
import PlatLib  # 添加平台环境变量
import pandas as pd
if __name__ == "__main__":
# 最大连续上涨 
# 最大连续下跌
# 上涨天数
# 下跌天数
# 上涨大于%5天数        
# 下跌大于%5天数      
#  环比    (new-old)/old   
# 
    out={
        "continue_raise":None, "continue_down":None,
        "ups":None, "downs":None,
        "up_percent_gt5":None, "down_percent_gt5":None,
        "chain_ratio":None,
    }
    o={
        "close":[1,1,1,2,2,2,3,3,3,4],
        "change":[-1,0,1,1,-1,-1,-1,1,2,1],
        "pct_chg":[-1,-1,1,1,-1,-1,-1,1,1,1],
        "ta_code":["code","code","code","code","code","code","code","code","code","code"],

    }
    df=pd.DataFrame(o)
    df["temp"]=df["change"]
  # 查询满足条件的行
    df.loc[:,"change"]>0
  # 查询行后再查列  
    df.loc[df.loc[:,"change"]>0,"change"]
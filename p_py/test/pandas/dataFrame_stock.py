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
        "continue_up":None, "continue_down":None,
        "ups":None, "downs":None,
        "up_percent_gt5":None, "down_percent_gt5":None,
        "chain_ratio":None,
    }
    o={
        "close":[1.2,1,1,2,2,2,3,3,3,1],
        "change":[-1,0,1,1,-1,-1,-1,-1,2,-2],
        "pct_chg":[-1,-1,1,1,-1,-1,-1,1,1,1],
        "ta_code":["code","code","code","code","code","code","code","code","code","code"],

    }
    df=pd.DataFrame(o)
    df["temp"]=df["change"]
    df["pct_chg_5"]=df["pct_chg"]
    out["up_percent_gt5"]=df.loc[df.loc[:,"pct_chg"]>=0.05,"pct_chg"].count()
    out["down_percent_gt5"]=df.loc[df.loc[:,"pct_chg"]<=-0.05,"pct_chg"].count()
    df.loc[df.loc[:,"temp"]>=0,"temp"]=1
    df.loc[df.loc[:,"temp"]<0,"temp"]=0
    df['c']= ((df["temp"].shift(1).fillna(0))!=df["temp"]).cumsum()
    out["continue_up"]=df[df["temp"]==1]["c"].value_counts().max()
    out["continue_down"]=df[df["temp"]==0]["c"].value_counts().max()
    out["ups"]=df[df["temp"]==1]["c"].value_counts().sum()
    out["downs"]=df[df["temp"]==0]["c"].value_counts().sum()
    out["chain_ratio"]=(df["close"].iloc[-1]-df["close"].iloc[0])/df["close"].iloc[0]
    



    # loc 查出来 再处理  
    # value_counts  按值进行汇总 
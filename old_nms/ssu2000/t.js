df['temp']=df['change']
df['pct_chg_5']=df['pct_chg']
out['up_percent_gt5']=df.loc[df.loc[:,'pct_chg']>=0.05,'pct_chg'].count()
out['down_percent_gt5']=df.loc[df.loc[:,'pct_chg']<=-0.05,'pct_chg'].count()
df.loc[df.loc[:,'temp']>=0,'temp']=1
df.loc[df.loc[:,'temp']<0,'temp']=0
df['c']= ((df['temp'].shift(1).fillna(0))!=df['temp']).cumsum()
out['continue_up']=df[df['temp']==1]['c'].value_counts().max()
out['continue_down']=df[df['temp']==0]['c'].value_counts().max()
out['ups']=df[df['temp']==1]['c'].value_counts().sum()
out['downs']=df[df['temp']==0]['c'].value_counts().sum()
out['chain_ratio']=(df['close'].iloc[-1]-df['close'].iloc[0])/df['close'].iloc[0]
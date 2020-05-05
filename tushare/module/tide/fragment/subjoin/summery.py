df['temp'] = df['change']
df['pct_chg_5'] = df['pct_chg']
out['up_percent_gt5'] =int( df.loc[df.loc[:, 'pct_chg'] >= 5, 'pct_chg'].count())
out['down_percent_gt5'] = int(df.loc[df.loc[:, 'pct_chg'] <= -5, 'pct_chg'].count())
out['limit_up'] = int(df.loc[df.loc[:, 'pct_chg'] >= 9.7, 'pct_chg'].count())
out['limit_down'] = int(df.loc[df.loc[:, 'pct_chg'] == -9.7, 'pct_chg'].count())
df.loc[df.loc[:, 'temp'] >= 0, 'temp'] = 1
df.loc[df.loc[:, 'temp'] < 0, 'temp'] = 0
df['c'] =((df['temp'].shift(1).fillna(0)) != df['temp']).cumsum()

if not df[df.loc[:,"temp"]==1].empty:
    out['continue_up'] = int(df[df['temp'] == 1]['c'].value_counts().max())
if not df[df.loc[:, "temp"] == 0].empty:
    out['continue_down'] = int(df[df['temp'] == 0]['c'].value_counts().max())
out['ups'] = int(df[df['temp'] == 1]['c'].value_counts().sum())
out['downs'] = int(df[df['temp'] == 0]['c'].value_counts().sum())
out['ratio'] = round(float((df['close'].iloc[-1]) / df['close'].iloc[0]),3)
if self.loop_one:
    out.update(self.loop_one)
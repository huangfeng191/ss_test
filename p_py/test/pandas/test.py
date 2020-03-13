def check_value(dt):
    d_flag = 0
    for i in range(1,6):
        d1 = 1 if ( abs(dt['d'+str(i)] - dt['d'+str(i+1)]) == 1 ) else 0
        d_flag = d_flag + d1
    return d_flag
data_cols = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7']
data_txt = pd.read_csv(r'd:\demo\test1.txt', names = data_cols)
data_txt['LEVEL'] = data_txt.apply(lambda  x: check_value(x),axis=1)
df1 = data_txt[data_txt['LEVEL']<4]
print df1[data_cols]
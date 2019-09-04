# -*- coding: utf-8 -*-
nlist=range(0,10)
nlist=[float(i)/10 for i in nlist]
print nlist
N=len(nlist)
# 计算方差
sum1=0.0
sum2=0.0
for i in range(N):
    sum1+=nlist[i]
    sum2+=nlist[i]**2
mean=sum1/N
var=sum2/N-mean**2
print var



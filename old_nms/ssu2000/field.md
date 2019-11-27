#  clock



#  clock 配置 
#  clk
warmup warmup // : 1200#900-3600#false,
mintau mintau // : 1000#300–10000(ST2E),150–1200(ST3E)#false,
maxtau maxtau // : 9000#300–10000(ST2E),150–1200(ST3E)#false,
clkar clkar s // : OFF#ON|OFF#false,
inpswt inpswt // : AR##true,
inpsel inpsel // : PRI##true,
mintaulimit mintaulimit // : 300##true,
maxtaulimit maxtaulimit // : 10000##true,
tod_timeout tod_timeout // : 1440##true
#  status
mstat  mstat  //: SEL##true,
clock_mode  clock_mode s  //: HOLD#ACQ|LOCK|HOLD#false,
tau  tau  //: 60##true,
pql  pql  //: 5##true,
offset  offset  //: (0)##true,
sigma  sigma  //: (5E-07)##true,
syn  syn  //: NO##true


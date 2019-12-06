对于设备的生成 调用：

CommandForm


CommandFormExtend




<!-- query -->

qLevel:
 // 1 card 11 card businessId  2 port 21 port businessId
 // 1 card   11 板卡业务名  2 cardPort  21 端口业务名
,"qCommand": "rtrvCraft","qKey": "outstate","qOthers": "","qGroup": "craft" "qIndexKey":"name" ,"qIndexLevel":"1" name#outstate#1

使能 outstate rtrvCraft craft name#outstate#1
信号类型 frmtype rtrvCraft craft name#frmtype#1
状态 outstatus rtrvCraft craft name#outstatus#1
自由振荡输出 freeflt rtrvCraft craft name#freeflt#1
守时输出 holdflt rtrvCraft craft name#holdflt#1

<!-- set -->
nm  field   command  key  showType Binding 


使能 outstate ED-EQPT OUTSTATE c EnableDisable
信号类型 frmtype edSync  FRMTYPE c FrameTypeOutTP1100
状态 outstatus 
自由振荡输出 freeflt edSync FREEFLT c FreefltOutTP1100  //ON SQUELCH AIS
守时输出 holdflt edSync HOLDFLT c  HoldfltOutTP1100  // ON SQUELCH AIS

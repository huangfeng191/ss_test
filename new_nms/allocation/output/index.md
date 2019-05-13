# eng:
    redundancy 冗余

# configList



槽位号 ioStatusSlotID
IO/类型 ioSignal
信号类型 ioType
冗余使能 ioStatusRedundancy  c EnableDisable
主卡 ioStatusActive
版本信息 isSignal   //  if isSignal=="PTP" V 1.0 else ""
冗余操作 ioStatusRedundancyKey   // if  ioStatusSlotID>1  and isSignal!=="--"&&ioType=="output"
绑定 bindMethod //item.ioStatusSlotID != '1' && item.ioSignal !== 'PTP' &&  item.ioSignal !== '4-E1' && item.ioSignal !== 'NTP' && item.ioSignal !== '--'&& item.ioSignal !== 'Buffer'   method: outPTPchange(item) 
卡配置 cardConfig //item.ioSignal !== '4-E1' && item.ioSignal !== '--'&& item.ioSignal !== 'Buffer' method outPTPconfigEnt(item,mauto)



ioSignal 分类：E1-T1



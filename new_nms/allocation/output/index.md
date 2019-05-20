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


端口使能 outputConfigMainState  c EnableDisable
帧类型 outputConfigMainFrameType c FrameType
CRC状态 outputConfigMainCRCState  c EnableDisable
SSM状态 outputConfigMainSSMState  c EnableDisable
SSMBit outputConfigMainSSMBit c OutSsmBit
预热 outE1Warmup c OutE1State
自由 outE1Freerun c OutE1State
守时 outE1Holdover c OutE1State
快捕 outE1Fasttrack c OutE1State




端口号 portNo
端口使能 outputConfigMainState v EnableDisable
帧类型 outputConfigMainFrameType v FrameType
CRC状态 outputConfigMainCRCState v EnableDisable
SSM状态 outputConfigMainSSMState v EnableDisable
SSMBit outputConfigMainSSMBit v OutSsmBit
业务名 portName









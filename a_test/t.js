
synceStatePort    端口使能 
syncePrioPort      优先级 

ethSrcTypePort   网络参考源类型
1 SyncE 
0 PTP
   

syncePQLStatePort   质量优先级状态   
syncePQLPort      质量优先级值


PQL_VALUE : "质量优先级值",
PQL_STATE :"质量优先级状态",



ethSrcTypePort2   网络参考源类型2
synceStatePort2     端口使能2
syncePrioPort2       优先级2
syncePQLStatePort2 质量优先级状态2
syncePQLPort2       质量优先级值2







ptpInput: function(m, y, t) {
    var str = this.nullFun(t),
        s = t.use() === 'ch' ? "请选择" : "Please select ";
    if (verifyFun.isNull(m.synceStatePort)) {
        y.ngAlert(s + t.instant("PORT_ENABLE"), "warning")
        return false;
    }
    if (verifyFun.isNull(m["syncePrioPort"])) {
        y.ngAlert("优先级" + str, "warning")
        return false;
    }
    if (!verifyFun.isNumber(m["syncePrioPort"]) || !verifyFun.between(m["syncePrioPort"], 0, 16)) {
        y.ngAlert(this.fe("优先级", 0, 16,t), "warning")
        return false;
    }

    if (verifyFun.isNull(m["ppsTODCableDelay"])) {
        y.ngAlert("Cable Delay" + str, "warning")
        return false;
    }
  
    if (verifyFun.isNull(m.ethSrcTypePort)) {
        y.ngAlert(s + t.instant("PTPCKLX"), "warning")
        return false;
    }
    

    if (verifyFun.isNull(m["syncePQLPort"])) {
        y.ngAlert(t.instant("PQL_VALUE") + str, "warning")
        return false;
    }
    if (!verifyFun.isNumber(m["syncePQLPort"]) || !verifyFun.between(m["syncePQLPort"], 1, 3)) {
        y.ngAlert(this.fe(t.instant("PQL_VALUE"), 1, 3,t), "warning")
        return false;
    }
    return true;
},



















ptp  （类似ptp输出配置）


ptpPortID           端口号 （1，2） port-1(1) or port-2(2)
ptpState             使能  "Show / Set PTP port state, disable(0) or enable(1)."
ptpProfile           配置模式 "Show / Set ptp profile."


ptpGM1State     PTP server1的使能状态 "Show / Set PTP GM1 state, disable(0) or enable(1)"
ptpGM1Address PTP server1IP地址


ptpGM2State     PTP server2的使能状态
ptpGM2Address PTP server2IP地址


ptpAnnIntv        announce报文间隔  "Show / Set PTP announce interval."  （时间）
ptpSyncIntv       sync报文间隔    "Show / Set PTP sync interval."
ptpDomain        域
ptpLocalPrio      本地优先级？（具体小马哥说问问）
ptpMasterOnly   ？ （小马哥说问问） "Show / Set PTP master only, no(0) or yes(1)."

ptpPriority2        优先级2

ptpTxDelay        发送延迟
ptpRxDelay        接收延迟
ptpRefPrio         选源优先级
ptpPQLState      质量优先级状态 "Show / Set PTP PQL state, disable(0) or enable(1)."
ptpQLCfgValue  PQL使能
ptpPeerMode     对等模式 "Show / Set PTP peer mode state, disable(0) or enable(1)."


ptpInput1: function(m, y, t) {
    var str = this.nullFun(t),
        s = t.use() === 'ch' ? "请选择" : "Please select ";
    if (verifyFun.isNull(m.synceStatePort2)) {
        y.ngAlert(s + t.instant("PORT_ENABLE"), "warning")
        return false;
    }
    if (verifyFun.isNull(m["syncePrioPort2"])) {
        y.ngAlert("优先级" + str, "warning")
        return false;
    }
    if (!verifyFun.isNumber(m["syncePrioPort2"]) || !verifyFun.between(m["syncePrioPort2"], 0, 16)) {
        y.ngAlert(this.fe("优先级", 0, 16,t), "warning")
        return false;
    }

    if (verifyFun.isNull(m.ethSrcTypePort2)) {
        y.ngAlert(s + t.instant("PTPCKLX"), "warning")
        return false;
    }
    

    if (verifyFun.isNull(m["syncePQLPort2"])) {
        y.ngAlert(t.instant("PQL_VALUE") + str, "warning")
        return false;
    }
    if (!verifyFun.isNumber(m["syncePQLPort2"]) || !verifyFun.between(m["syncePQLPort2"], 1, 3)) {
        y.ngAlert(this.fe(t.instant("PQL_VALUE"), 1, 3,t), "warning")
        return false;
    }
    return true;
},





ptpPortID           端口号 port-1(1) or port-2(2)


ptpState 使能  disable(0) or enable(1)
ptpProfile 配置模式 
ptpGM1State  PTPserver1的使能状态 disable(0) or enable(1)
ptpGM1Address PTPserver1IP地址
ptpGM2State PTPserver2的使能状态
ptpGM2Address PTPserver2IP地址
ptpAnnIntv announce报文间隔 
ptpSyncIntv sync报文间隔 
ptpDomain 域
ptpLocalPrio ptpLocalPrio
ptpMasterOnly ptpMasterOnly   no(0) or yes(1)
ptpPriority2 优先级2
ptpTxDelay  发送延迟
ptpRxDelay 接收延迟
ptpRefPrio 选源优先级
ptpPQLState  质量优先级状态 disable(0) or enable(1)
ptpQLCfgValue PQL使能
ptpPeerMode 对等模式 disable(0) or enable(1)

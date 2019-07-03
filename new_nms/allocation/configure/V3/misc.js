LCIM :line clock  input measure 


input 
CHAN-MEAS
CHANMEAS : Y 测试 N 不进行测试

CSCLK1～ CSCLK4
CLCIM1-1~CLCIM1-8
CLCIM2-1~CLCIM2-8

aid: CLCIM1-1～CLCIMA-8

信号类型  SET-CHANPM-LCIM    //10M|5M|1M|2048K|CC|E1|NONE
输入信号使能                // （打开 SET-ENA，关闭 SET-DIS）
主用性设置  SET-MASTER-INP // (当参考源选源方式为人工 时有效)
优先级  SET-PRIOR-INP   //1～23或255。
SSM等级   SET-SQL-INP level //PRC|TNC|LNC|STU|DUS|SEC。
SSM位   SET-SQL-INP  bit // 4～8
SSM控制   SET-SQL-INP mode //AUTO|PROV
SSM响应时延   SET-SSMT-INP SSMtime // 1~1000 unit:0.1
LOS恢复时间  SET-LOS-INP LOStime // 1～100
测试重置  SET-CHAN-RETEST 






1、系统相关功能：
        工作模式：SET-PRMTR-SYS, (TYPE=WORKMODE)
                      (查询 RTRV-PRMTR-SYS)
        多数表决控制：SET-PRMTR-SYS, (TYPE=VOTECTRL)
                     （查询 RTRV-PRMTR-SYS）
      
        LCIM板卡类型：SET-PRMTR-LCIM，（PRMTRTYPE=TYPE）
                      (查询RTRV-STATE-LCIM， cmdtype=TYPE)
	 TSOU输出备份方式：SET-PRMTR-TSOU (PRMTRTYPE=TYPE)
                       (查询 RTRV-STATE-TSOU)
         板卡运行状态：RTRV-COND-EQPT




2、钟卡相关功能：
               时钟卡：SRCU1/SOCU1/SRCU2/SOCU2
         锁时状态延时：SET-PRMTR-SCLK, (PRMTRTYPE=LOCKDELAY)
           源切换延时：
         锁相状态延时：
           卫星卡类型：SET-PRMTR-SCLK, (PRMTRTYPE=SCARDTYPE)
       卫星卡工作模式：SET-PRMTR-SCLK, (PRMTRTYPE=WM)
         可视卫星门限：SET-PRMTR-SCLK, (PRMTRTYPE=SATNUMTH)
             仰角门限：SET-PRMTR-SCLK, (PRMTRTYPE=SATELETH)
                 位置：SET-PRMTR-SCLK, (PRMTRTYPE=SCARDPOS)



4、测试相关功能：
             信号类型：SET-CHANPM-LCIM, CMDTYPE=CHANTYPE
                      (查询 RTRV-PRMTR-LCIM)
             测试使能：SET-CHANPM-LCIM, CMDTYPE=CHANMEAS
         通道测试模板：SET-PMTH-INP, montype=WG/WT/FT

5、输出相关功能：
          端口使能：SET-CHPRMTR-TSOU (CHPMTYPE=CHANBLOCK)
                    (查询 RTRV-STATE-TSOU)
          信号类型：SET-CHPRMTR-TSOU (CHPMTYPE=CHANTYPE
                    (查询 RTRV-STATE-TSOU)

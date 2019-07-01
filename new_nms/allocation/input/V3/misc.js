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







工作模式：

多数表决控制：

LCIM板卡类型：SET-PRMTR-INP，TYPE参数

运行状态： （查询 RTRV-COND-INP）

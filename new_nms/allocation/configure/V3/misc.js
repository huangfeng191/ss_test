LCIM :line clock  input measure 


input  //fold mode
CHAN-MEAS
CHANMEAS : Y 测试 N 不进行测试

输入信道只能时 1 跟2 槽位
1- 10 可做测试信道

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






1、系统相关功能 

工作模式 SET-PRMTR-SYS,    //VALUE MAN|INT1  (TYPE=WORKMODE) (查询 RTRV-PRMTR-SYS)
多数表决控制 SET-PRMTR-SYS, //VALUE Y|N   (TYPE=VOTECTRL) （查询 RTRV-PRMTR-SYS）
LCIM板卡类型 SET-PRMTR-LCIM,（PRMTRTYPE=TYPE） (查询RTRV-STATE-LCIM， cmdtype=TYPE) // <aid>：取值为BLCIM1～BLCIMA。 ?
TSOU输出备份方式 SET-PRMTR-TSOU (PRMTRTYPE=TYPE) (查询 RTRV-STATE-TSOU) //<aid>：取值为BTSOU11～BTSOU4A。

// 板卡运行状态 RTRV-COND-EQPT






// 在独立模式下 可以设置 group 
2、钟卡相关功能 
时钟卡 SRCU1/SOCU1/SRCU2/SOCU2
锁时状态延时 SET-PRMTR-SCLK, (PRMTRTYPE=LOCKDELAY)  //<VALUE>值域为3～86400，表示设置时钟板锁时状态的延迟时间。
源切换延时                                        //<VALUE2>值域为10～86400，表示源切换的延迟时间。
锁相状态延时                                        //<VALUE3>值域为90～86400，表示设置时钟板锁相状态的延迟时间。
卫星卡类型 SET-PRMTR-SCLK, (PRMTRTYPE=SCARDTYPE)  //<VALUE>取值为GLOGPS|GPS| BEIDOU|NONE，表示配置卫星卡为：双星卡|GPS卡| 北斗卡|无卫星卡。
卫星卡工作模式 SET-PRMTR-SCLK, (PRMTRTYPE=WM) //<VALUE>：取值为DUAL|GPS|GLO|BD，表示配置双星卡的工作模式为混合|| GPS|GLONASS工作模式| 北斗卡工作模式。
                                             //– <VALUE2>：取值为GPS|GLO|BD，表示配置双星卡的时间基准为GPS| GLONASS| BEIDOU。
可视卫星门限 SET-PRMTR-SCLK, (PRMTRTYPE=SATNUMTH) //取值为SATNUMTH表示配置卫星卡的可视卫星门限。 <VALUE>值域为0～8
仰角门限 SET-PRMTR-SCLK, (PRMTRTYPE=SATELETH) //取值为SATELETH表示配置卫星卡仰角门限。 <VALUE>值域为0～10
位置 SET-PRMTR-SCLK, (PRMTRTYPE=SCARDPOS) // <PRMTRTYPE>：取值为SCARDPOS表示卫星卡的位置信息
                                          //– <VALUE>： <VALUE>表示设置卫星卡的纬度信息。
                                          //– <VALUE2>： <VALUE2>表示设置卫星卡的经度信息。
                                          //– <VALUE3>：表示设置卫星卡的高度信息。



4、测试相关功能  //<aid>：取值为CLCIM1-1～CLCIMA-8   
信号类型 SET-CHANPM-LCIM, CMDTYPE=CHANTYPE  //<CMDTYPE> 为CHANTYPE。 <VALUE>：取值为10M|5M|1M|2048K|CC|E1|NONE，  // (查询 RTRV-PRMTR-LCIM)
测试使能 SET-CHANPM-LCIM, CMDTYPE=CHANMEAS  // <CMDTYPE>为CHANMEAS。 <VALUE>取值为Y | N，代表进行测试和不进行测试。 
通道测试模板 SET-PMTH-INP, montype=WG/WT/FT //<montype>：取值为WG|WE|WT|WJ|FT|G812。




5、输出相关功能 
{/* <aid>：取值为GTSOU10-01～GTSOU45-20。 */}
端口使能 SET-CHPRMTR-TSOU (CHPMTYPE=CHANBLOCK) //<CHPMTYPE>取值为CHANBLOCK，表示设置通道信号关闭打开状态。 <VALUE>取值为CLOSE|OPEN ，代表打开或关闭TSOU通道。  (查询 RTRV-STATE-TSOU)
信号类型 SET-CHPRMTR-TSOU (CHPMTYPE=CHANTYPE // <CHPMTYPE>取值为CHANTYPE，表示设置通道信号类型。 <VALUE>取值为10M|5M|1M|2048K|1544K|E1|T1。  (查询 RTRV-STATE-TSOU)

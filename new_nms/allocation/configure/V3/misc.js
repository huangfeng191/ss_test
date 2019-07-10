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

信号类型  SET-CHANPM-LCIM   //10M|5M|1M|2048K|CC|E1|NONE
输入信号使能                //(打开 SET-ENA，关闭 SET-DIS)
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





single  // 时 遇到 group 合并 







信号类型	RTRV-PRMTR-LCIM	channelType	{"cmdtype":"CHANTYPE"}	
输入信号使能	无查询命令			
主用性设置	RTRV-MASTER-INP	MASTERABLE	{}	
优先级	RTRV-PRIOR-INP	priority	{}	
SSM等级	RTRV-SQL-INP	level      {} SSM
SSM位	RTRV-SQL-INP	bit 	{}	SSM
SSM控制	RTRV-SQL-INP	mode	{}	SSM
SSM响应时延	RTRV-SSMT-INP	SSMtime	{}	
LOS恢复时间	RTRV-LOS-INP	LOStime	{}	







condtype


– MASTNOR：表示该板卡主用正常。
– MASTERR：表示该板卡主用异常。
– BACKNOR：表示该板卡备用正常。
– BACKERR：表示该板卡备用异常。




信号类型 RTRV-PRMTR-LCIM  {"cmdtype": "CHANTYPE"}


信号类型	RTRV-PRMTR-LCIM	aid: BLCIM1 ~ BLCIMA
	channelID
channelType
测试使能	RTRV-PRMTR-LCIM	aid: BLCIM1 ~ BLCIMA
cmdtype: CHANMEAS	channelID
measureable
测试模板	RTRV-TH-INP	aid: 
CSCLK1~CSCLK4，
BLCIM1-1~BLCIM1-8,
BLCIM2-1~BLCIM2-8
montype: MTIE/TDEV/FREQ/...	montype
threshold



// 测试输入
信号类型 channelType	RTRV-PRMTR-LCIM	 cmdtype=CHANTYPE  //aid: BLCIM1 ~ BLCIMA cmdtype: CHANTYPE	channelID channelType	
测试使能 measureable 	RTRV-PRMTR-LCIM	 cmdtype=CHANMEAS  //aid: BLCIM1 ~ BLCIMA cmdtype: CHANMEAS	channelID measureable	
// 测试模板	RTRV-TH-INP	                //aid: montype: MTIE/TDEV/FREQ/...	montype threshold	






// 
// CLCIM1  channel LCIM

// 配置通道


// 输出

,"qIndexKey":"channelID" ,"qIndexLevel":"2","qIndexBase":{"CLOCK":"CSCLK","default":"BLCIM"}



端口使能	RTRV-STATE-TSOU	cmdtype=CHANSTATE	channelID#block
信号类型	RTRV-STATE-TSOU	Cmdtype=CHANTYPE	chnannelID#channeltype






// 钟卡

锁时状态延时 value1	RTRV-STATE-SCLK	 cmdtype=LOCKDELAY	defer 
源切换延时	value2 RTRV-STATE-SCLK		defer	
锁相状态延时 value3	RTRV-STATE-SCLK	 	defer	
卫星卡类型	scardtype RTRV-STATE-SCLK	 cmdtype=SCARDTYPE	
卫星卡工作模式 WORKMODE  RTRV-STATE-SCLK	 cmdtype=WM	 WM
卫星卡工作模式 TBase     RTRV-STATE-SCLK	 cmdtype=WM	 WM
可视卫星门限 thVssr	RTRV-PRMTR-SCLK	 cmdtype=SATNUMTH	
仰角门限	elevation RTRV-PRMTR-SCLK	 cmdtype=SATELETH	
纬度 latitude	RTRV-PRMTR-SCLK	 cmdtype=SCARDREALPOS	 position
经度 longitude	RTRV-PRMTR-SCLK	 cmdtype=SCARDREALPOS	 position
高度 altitude 	RTRV-PRMTR-SCLK	 cmdtype=SCARDREALPOS	 position


// 系统

工作模式  WORKMODE	RTRV-PRMTR-SYS			sys
多数表决控制	VOTECTRL		RTRV-PRMTR-SYS	 	sys
LCIM板卡类型 boardtype		RTRV-STATE-LCIM cmdtype=TYPE	
TSOU输出备份方式 type		RTRV-STATE-TSOU cmdtype=TYPE	

板卡运行状态	 	condtype RTRV-COND-EQPT	 running 
单板软件的版本号	 	ver RTRV-COND-EQPT	 running 	 
工作模式	 	syncmode RTRV-COND-EQPT	 running 	 
PlState	 	PlState RTRV-COND-EQPT	 running 	 	


// input 

signalType 

信号类型  ""  RTRV-PRMTR-LCIM  cmdtype=CHANTYPE channelID#channeltype


, "qCommand": "RTRV-PRMTR-LCIM", "qKey": "channelType", "qOthers": { "cmdtype": "CHANTYPE" }, "qGroup": ""





// 1号板卡 输入 
{"aid":"BLCIM1","command":"RTRV-STATE-LCIM","cmdtype":"CHANTYPE"}
   // 1 card  2 cardPort 11 板卡业务名  21 端口业务名

qCommandOther:{
    "CLOCK":"SCLK",
    "default":"LCIM"
}

信号类型 "" RTRV-STATE-LCIM   cmdtype=CHANTYPE  channelID#channeltype


,"qCommand": "RTRV-STATE-LCIM","qKey": "channeltype","qOthers": {"cmdtype":"CHANTYPE"},"qGroup": "" ,"qIndexKey":"channelID" ,"qIndexLevel":"2"

,"qAid":"21"  



{"aid":"BSRCU1","command":"RTRV-STATE-SCLK","cmdtype":"CHANTYPE"}
{"aid":"BLCIM1","command":"RTRV-STATE-LCIM","cmdtype":"CHANTYPE"}

信号类型





if ($(".nav-left a.three-active").html() == "输入测试") {
    if (isMeasure == false && (consilient == 1 || consilient == 2)) {
      return true;
    }

  } 

  params.devParams.command = "RTRV-STATE-LCIM"
  params.devParams.cmdtype = "TYPE"
  params.devParams.aid = v.card.name;
  top.SsServer[doPost](params).done(function(r) {
    if (r.data.boardtype == "MEASUR") {
      isMeasure = true;
    }
  });






  {"aid":"CSCLK1","priority":"8","command":"SET-PRIOR-INP"}

  {"aid":"CSCLK1","SSMtime":"0","command":"SET-SSMT-INP"}

  {"aid":"CSCLK1","LOStime":"0","command":"SET-LOS-INP"}



 // 1 card  2 cardPort 11 板卡业务名  21 端口业务名

  qLevel="21"



  信号类型 "" RTRV-STATE-LCIM   cmdtype=CHANTYPE  channelID#channeltype




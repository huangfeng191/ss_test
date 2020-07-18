# clock 

{
  "aid": "BSRCU1",
  "": "5#0-10#false",
  "": "2#0-8#false",
  "": "GPS#GLOGPS|GPS|BEIDOU|NONE#false",
  "": "NONE#GPS|GLO|BD|NONE#false",
  "": "NONE#DUAL|GPS|GLO|BD|NONE#false"
}

卫星卡类型 scardtype c
卫星卡工作模式 workmode c
卫星卡时间基准 tbase c
可视卫星门限 satnumth c
仰角门限 sateleth c


# input
{
  "aid": "BLCIM1",
  "bit": "8#0|4-8#false",
  "enable": "disable#enable|disable#false",
  "level": "DUS#PRC|TNC|LNC|STU|DUS|SEC#false",
  "mode": "PROV#AUTO|PROV#false",
  "port": "CLCIM1-4",
  "prio": "5",
  "type": "E1"
}


端口使能 enable c
信号类型 type c
优先级 prio c
SSM等级 level c
SSM位 bit c 
SSM控制 mode c  
SSM响应时延
LOS恢复时间


 private String aid;  // 槽位
 private String port; // 端口
 private String enable; // 端口使能
 private String type;  // 信号类型
 private String prio;     // 优先级
 private String level; // SSM等级。PRC|TNC|LNC|STU|DUS|SEC，代表输入信号实际携带的SSMB信息，无SSMB的源， 此项为空。其中：
 – PRC（0010）代表G.811时钟信号。
 – TNC（0100）代表G.812转接局时钟信号。
 – LNC（1000）代表G.812本地局时钟信号。
 – SEC（1011）代表同步设备定时源。
 – STU（0000）代表同步质量不知道。
 – DUS（1111）代表此信号不应用作同步。
 private String bit;  // SSM位，值域为：4～8,（非E1或无SSMB的E1信号，此参数 无效）。 
 private String mode;   // SSM控制。AUTO|PROV，设置为PROV时，表示 该E1信号为无SSMB。






output 


"    private String aid;        // 板卡ID
    private String port;       // 通道ID。
    private String chantype;  // 信号类型。取值为 10M|5M|1M|2048K|1544K|E1|T1 或
                                       者 10M|5M|1M|2048k|E1|CC。
    private String chanblock; // 阻塞状态。取值为CLOSE|OPEN
"


端口使能 chantype c 
信号类型 chanblock c 








system 



" private String aid;

 private String workmode;  // 系统工作模式。
 private String votectrl;  // 多数表决是否参与系统控制。Y为参与控制，N为不参与控制。
 /*
  * UNKNOW：表示该板卡状态未知或未配置；
  * UNEXIST：表示该板卡不存在或与主机通信断掉；
  * CFGERR：表示该板卡配置错误；
  * WTFCFG：表示该板卡等待配置；
  * MASTNOR：表示该板卡主用正常；
  * MSTERR：表示该板卡主用异常；
  * BACKNOR：表示该板卡备用正常；
  * BACKERR：表示该板卡备用异常；
  */
 private String condtype; // 运行状态
 private String ver;      // 版本。
 /**
  * – FREE：该时钟单元工作于自由方式。
  * – FAST：该时钟单元工作于快捕方式。
  * – FOLLOW：该时钟单元工作于跟踪方式。
  * – HOLD：该时钟单元工作于记忆方式。
  */
 private String syncmode; // 同步模式
 private String plstate;"

{
  "aid": "BLCIM1",
  "condtype": "MASTNOR",
  "ver": "1007A",
  "votectrl": "Y#Y|N#false",
  "workmode": "INT1#MAN|INT1#false"
}


系统工作模式 workmode c
多数表决控制 votectrl c 
运行状态 condtype  
版本 ver  
同步模式  syncmode 
Pl状态 plstate 





Index | No. | SNR | Health  | Azimuth | Elevation 
                                

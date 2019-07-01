
18.8.7 设置 LCIM 板的通道输入信号类型
输入命令语法
SET-CHANPM-LCIM:[<tid>]:<aid>:[<ctag>]::<CMDTYPE>,<VALUE>;
说明
1. <aid>：取值为CLCIM1-1～CLCIMA-8。
2. <CMDTYPE> 为CHANTYPE。
<VALUE>：取值为10M|5M|1M|2048K|CC|E1|NONE，表示设定的通道类型。
3. <CMDTYPE>为CHANMEAS。
<VALUE>取值为Y | N，代表进行测试和不进行测试。


18.9.5 使能频率输入信号
输入命令语法
SET-ENA:[<tid>]:<aid>:[<ctag>];
说明
1级别和2级别的用户可执行此命令。
此命令只有对已配置单板的源有作用。
<aid>：输入信号名称



18.9.9 设置定时输入信号优先级
输入命令语法
SET-PRIOR-INP:[<tid>]:<aid>:[<ctag>]:<priority>;
说明
1级别和2级别的用户可执行此命令。
l <aid>：输入信号名称。
l <priority>：输入信号优先级。字段长度为2，值阈： 1～23或255。



1级别和2级别的用户可执行此命令。
1. <aid>：输入信号名称，不包括卫星信号。
2. <level>：输入信号SSM级别门限。格式为<level>:PRC|TNC|LNC|STU|DUS|SEC。
其中：
– PRC（0010）代表G.811时钟信号。
– TNC（0100）代表G.812转接局时钟信号。
– LNC（1000）代表G.812本地局时钟信号。
– SEC（1011）代表同步设备定时源。
– STU（0000）代表同步质量不知道。
SYNLOCK V3 BITS
操作手册 18 TL1 语言维护接口
文档版本 04 (2018-09-09) 版权所有 © 华为技术有限公司 383– DUS（1111）代表此信号不应用作同步。
注意
对于非E1信号或E1信号无SSMB时，此设置即为该源的时钟级别。
卫星信号不能改变级别，默认为PRC。
3. <bit>： SSM信息所在的bit位，值域为： 4～8,（非E1或无SSMB的E1信号，此参数
无效）。
4. <mode>：读取SSM的方式，格式为<mode>:AUTO|PROV，设置为PROV时，表示
该E1信号为无SSMB。





18.9.18 设置定时输入信号 SSM 响应时延
输入命令语法
SET-SSMT-INP:[<tid>]:<aid>:[<ctag>]::<SSMtime>;
说明
1级别和2级别的用户可执行此命令。
该命令设置各E1输入信号的处理时延。
l <aid>： E1/T1输入信号名称。
l <SSMtime>： E1/T1输入信号的SSM响应时延值，单位为0.1秒，取值范围为1～
1000。




18.9.20 设置定时输入信号 LOS 恢复时间
输入命令语法
SET-LOS-INP:[<tid>]:<aid>:[<ctag>]::<LOStime>;
说明
1级别和2级别的用户可执行此命令。
该命令设置各E1输入信号的处理时延。
l <aid>： E1/T1输入信号名称。
l <LOStime>： E1/T1输入信号的LOS恢复时间，单位为1秒，取值范围为1～100













18.8.11 设置 SCLK 板的通道输入信号类型
输入命令语法
SET-CHANPM-SCLK:[<tid>]:<aid>:[<ctag>]::<CMDTYPE>,<VALUE>;
说明
1级别和2级别的用户可执行此命令。
1. <aid>：取值为CSSR1， CSSR2， C1PPS， CSCLK1-CSCLK4。
2. <CMDTYPE> 为CHANTYPE，此时<aid>只能取CSCLK1-CSCLK4。
<VALUE>：取值为10M|5M|1M|2048K|1544K|E1|T1，表示设定的通道类型。
3. <CMDTYPE>为CHANMEAS。
<VALUE>取值为Y|N，代表进行测试和不进行测试。




18.9.23 设置通道重新测试
输入命令语法
SET-CHAN-RETEST:[<tid>]:<aid>:[<ctag>];
说明
1级别和2级别的用户可执行此命令。
<aid>：取值为LCIM输入通道的名称、 CLK输入通道或卫星信号的名称，即CLCIM1-1
～CLCIM1-8、 CLCIM2-1～CLCIM2-8、 CSCLK1～CSCLK4、 CSSR1、 CSSR2、
CPNSU1或PNSU2。





18.8.7 设置 LCIM 板的通道输入信号类型
输入命令语法
SET-CHANPM-LCIM:[<tid>]:<aid>:[<ctag>]::<CMDTYPE>,<VALUE>;
说明
1. <aid>：取值为CLCIM1-1～CLCIMA-8。
2. <CMDTYPE> 为CHANTYPE。
<VALUE>：取值为10M|5M|1M|2048K|CC|E1|NONE，表示设定的通道类型。
3. <CMDTYPE>为CHANMEAS。
<VALUE>取值为Y | N，代表进行测试和不进行测试
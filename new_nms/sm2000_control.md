telnet :192.168.1.33:23


ccom_user     
zjsaisi   

su // enter
zss@10s!#

factorycfg -l

alarmTest
> 第一位：1 触发报警，2取消报警   
> 第二位：告警编号 
> 第三未: 业务参数  1 管理卡 2钟卡1 ？canDo  （mc：管理卡 cc(冗余)钟卡 ）
1 0 1
2 0 1


1 91 0    产生告警编号为91 的  slot 0 的告警
2 91 0 
critical 危险的


ssh:192.168.1.33:22

// sm2000
 
admin 
saisiadmin

>查看报警命令
show alarm-config

show alarm

>查看设备状态
show status





mc 钟卡  mc1 mc2 
Communication 通讯
buffer card 钟卡
Communication to peer card failed 



配置管理这块坐下来





show status 

show ref




show snmp manager


// set snmp add manager 192.168.1.171

   set snmp delete manager 192.168.1.79

<!-- Engine ID -->


show log alarm




show mtie  


show mtie  slot1


show mtie  slot1 gnss 





squelch 消除


预热 运行状态
自由 运行状态
守时 运行状态
快捕 运行状态


查看扩展框 状态

show io-status 

shelf main  9 
exp1- exp4  14 个槽位

Redundancy

当不是冗余状态时,  冗余卡槽位 都是主卡 ， 当冗余状态开启的时候，一个时主卡 一个是冗余卡



sm2000 状态




snmp  

5.101
 server 192.168.1.139:8080;


uap  
 192.168.1.160






show  alarm-config 


ais 告警，此状态下不能用

Input alarm indication signal


squelch = 不可用  on  ais 
只有运行(on)状态能用




# led-alarm 

cc :  (disable(0), green(1), red(2), yellow(3), blink-green(4), blink-red(5), blink-yellow(6))
4-E1 input card: (disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6)), 
input-PTP  card disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6))
PPSS-TOD:  (disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6))




# cc 
disable 0
green 1
red 2
yellow 3
blink-green 4
blink-red 5
blink-yellow 6

"0":"disable", "1":"green", "2":"red", "3":"yellow", "4":"blink-green", "5":"blink-red", "6":"blink-yellow"



# 4-E1 input card:

"0":"disable", "1":"red", "2":"green", "3":"blink-green", "4":"yellow", "5":"blink-red", "6":"blink-yellow"





# output card 


 disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6))


nput-PTP card disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6))
PPSS-TOD; (disable(0),red(1),green(2), blink-green(3), yellow(4), blink-red(5), blink-yellow(6))






telnet :192.168.1.33:23


ccom_user     
zjsaisi   

su // enter
zss@10s!#

factorycfg -l

alarmTest
> 第一位：1 触发报警，2取消报警   
> 第二位：报警类型 
> 第三未: 1 管理卡 2钟卡1 ？canDo  （mc：管理卡 cc(冗余)钟卡 ）
1 0 1
2 0 1


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


// set snmp add manager 192.168.1.11

   set snmp delete manager 192.168.1.11

<!-- Engine ID -->


show log alarm




show mtie  


show mtie  slot1


show mtie  slot1 gnss 
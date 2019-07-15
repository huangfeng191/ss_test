管理卡（MCP）: 



钟卡（Rb盘）：槽位16



卫星卡（GBTP2）


输入卡（REFTF）：




输出卡（OUT32):





槽位号 编码
1. a   后版
2. b
3. c
4. d
5. e
6. f
7. g
8. h
9. i
10. j
11. k
12. l
13. m
14. n
15. o   // clock  前版
16. p // clock
17. q
18. r
19. s
20. t
21. u
22. v
23. w


<!-- A|B|C|D|E|F|G|H|I|J|K|L|M|N|O， 表示盘类型 -->

1. A PTP4
2. B PFO4
3. C PGE4
4. D PGO4
5. E PTP8
6. F PFO8
7. G PGE8
8. H PGO8
9. I TP16
10. J OUT16
11. K Rb盘  #clock valid
12. L GBTP盘
13. M 电源盘  #output  
14. N MCP盘   #output   valid 
15. O 无盘
16. P GTP盘
17. Q FAN盘
18. R XO盘
19. S REFTF盘    // valid
20. T RS422盘
21. U PPX盘
22. V TOD16盘
23. W IRIGB盘
24. X SF16盘
25. Y 工装盘
26. Z NTP12盘
27. a OUT32   // valid
28. b OUTH32
29. c OUTE32
30. d DRV
31. e GGTP
32. f MGE
33. g GBTP2  //valid
34. h OUT32S
35. i OUT16S
36. j PGE4II
37. k PTP4II
38. l BTP




REFTF、
OUT32、 none
Rb、
GBTP2、  none
MCP板卡。



system 

面板输入选择   fb      ET-MCP-FB  aid==u  //  0/1  0 代表从前面板输入（默认）， 1 代表从后面板输入 
Rb盘2Mb输入SSM位 sa 	SET-RB-SA  aid==u  c  RBSAGNS97
Rb盘2MHz输入信号等级	SET-RB-TL   RBTL97   



RBSAGNS97

sa8 A  
sa7 B  
sa6 C  
sa5 D  
sa4 E  
无输入时 @  


RBTL97

 代表 G.811 时钟（02） a
 代表 G.812 转接局时钟（04） b
 代表 G.812 本地时钟（08） c
 代表同步设备定时源（0B） d
 代表不应用作同步（0F） e
 代表质量情况未知（00） f
 代表无输入时 g



a表示G.811时钟
b表示G.812转接局时钟
c表示同步设备定时源
d表示同步设备定时源
e表示不应用作同步
f表示质量情况未知
g表示无输入时





# clock
  aid: o | p  

主备状态 msmode	SET-MAIN  c ClockMainGNSS97 // MAIN | STBY	

ClockMainGNSS97
 主用 MAIN
 备用 STBY




# input  

## front

aid:  o | p


系统参考源	SET-SYS-REF	
o为15槽位Rb板卡
p为16槽位Rb板卡；

goe: 0, 1, 2, 5, 6, 7, 8, F		
输入优先级	SET-PRIO-INP	
o为15槽位Rb板卡
p为16槽位Rb板卡；

priority: xx00xxxx  (x值为0-8)  
8个字段分别对应GBTP1卫星、GBTP2卫星、GBTP1的1PPS+TOD、GBTP2的1PPS+TOD、Rb1板卡的2MHz、Rb2的2MHz、Rb1的2Mb、Rb2的2Mb		
使能	SET-MASK-E1	
o为15槽位Rb板卡
p为16槽位Rb板卡；

mask: xxxxxxxx (x值为0 或者1）
8个字段分别对应GBTP1卫星、GBTP2卫星、GBTP1的1PPS+TOD、GBTP2的1PPS+TOD、Rb1板卡的2MHz、Rb2的2MHz、Rb1的2Mb、Rb2的2Mb		


output 


 a ~ n




# output


信号类型 out	SET-OUT-TYP	 //  : 0 | 1 | 2   // aid : a ~ n  (板卡类型映射表)


信号等级	SET-OUT-LEV	aid : a ~ n  (板卡类型映射表)
Level: 00 | 02 | 04 | 08 | 0B | 0F
02 表示 G.811时钟 
04 表示G.812转接局时钟
08 表示 G.812本地时钟
0B 表示 同步设备定时源
0F 表示 不应用作同步
00 表示 质量情况未知
软倒换	SET-OUT-PRR	aid : a ~ n  (板卡类型映射表)

主备模式	SET-OUT-MOD	aid : a ~ n  (板卡类型映射表)
mode: '0' | '1'
'1' 表示 主备模式
'0' 表示 普通模式



0  表示 2.048Mhz
1  表示 2.048Mb/s
2  表示 无输出
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


<!-- A|B|C|D|E|F|G|H|I|J|K|L|M|N|O， 表示盘类型 -->  通过卡类型 ,找钟卡 

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
19. S REFTF盘    // valid input 
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
OUT32、 
Rb、
GBTP2、  
MCP板卡。



system 

面板输入选择   fb      ET-MCP-FB  fb c FrontBackGNSS97  //  aid=u   0/1  0 代表从前面板输入（默认）， 1 代表从后面板输入 
Rb盘2Mb输入SSM位 sa 	SET-RB-SA  sa   c  RBSAGNS97 //aid=u 
Rb盘2MHz输入信号等级 tl SET-RB-TL tl c    RBTL97     //aid=u 




面板输入 fb	RTRV-EQPT group
钟卡2Mb/s输入SSM位 sa 	RTRV-EQPT	group //aid:  o | p（需要选择当前主用）	
钟卡2MHz信号等级 tl_2mhz	RTRV-EQPT	group //aid:  o | p（需要选择当前主用）	








FrontBackGNSS97:[
{"Name": "从前面板输入", "Value":"0" },
{"Name": "从后面板输入", "Value":"1" },
]



RBSAGNS97:[//nm
{"Name": "sa8", "Value":"A" },
{"Name": "sa7", "Value":"B" },
{"Name": "sa6", "Value":"C" },
{"Name": "sa5", "Value":"D" },
{"Name": "sa4", "Value":"E" },
{"Name": "无输入时", "Value":"@" },
]




RBTL97:[//nm
{"Name": "G.811时钟（02）", "Value":"a" },
{"Name": "G.812转接局时钟（04）", "Value":"b" },
{"Name": "G.812本地时钟（08）", "Value":"c" },
{"Name": "同步设备定时源（0B）", "Value":"d" },
{"Name": "不应用作同步（0F）", "Value":"e" },
{"Name": "质量情况未知（00）", "Value":"f" },
{"Name": "无输入时", "Value":"g" },
]



a表示G.811时钟
b表示G.812转接局时钟
c表示同步设备定时源
d表示同步设备定时源
e表示不应用作同步
f表示质量情况未知
g表示无输入时





# clock
  aid: o | p  

主备状态 msmode	SET-MAIN  msmode c ClockMainGNSS97 // MAIN | STBY	

ClockMainGNSS97
主用 MAIN
备用 STBY


主备状态 msmode	RTRV-EQPT	//aid:  o | p（需要选择当前主用）	
参考源屏蔽 mask	RTRV-EQPT	//aid:  o | p（需要选择当前主用）	
系统参考源 ref	RTRV-EQPT	//aid:  o | p（需要选择当前主用）	
输入优先级 priority	RTRV-EQPT	//aid:  o | p（需要选择当前主用）	




主备状态 msmode	RTRV-EQPT msmode //	aid:  o | p（需要选择当前主用）	





# input  

## back

card  port 

端口优先级	priority1 SET-REF-PRIO  priority1  c Number0To8
端口SSM位	sa SET-REF-SA  sa c SSMBitGNSS97
端口2MHz信号等级 tl	SET-REF-TL tl c SSMLevelGNSS97
端口鉴相使能 portEnable 	SET-REF-PH  en c EnableDisable 
端口SSM使能	portSSMEnable SET-REF-IEN en  c EnableDisable 



端口优先级 priority1 	RTRV-EQPT  group //	aid = a ~ n 
端口SSM位 sa 	RTRV-EQPT group  //	aid = a ~ n 
端口2MHz信号等级 tl 	RTRV-EQPT group  //	aid = a ~ n 
端口鉴相使能 en 	RTRV-EQPT  group //	aid = a ~ n 
端口SSM使能 ssm_en 	RTRV-EQPT  group //	aid = a ~ n ssm-


others:{"priority2": "00000000"}

SSMBitGNSS97

nm:[//nm
{"Name": "sa8", "Value":"A" },
{"Name": "sa7", "Value":"B" },
{"Name": "sa6", "Value":"C" },
{"Name": "sa5", "Value":"D" },
{"Name": "sa4", "Value":"E" },
{"Name": "2MHz输入或无输入时的默认值或者是不设置", "Value":"@" },
]

SSMLevelGNSS97

nm:[//nm
{"Name": "G.811", "Value":"时钟" },
{"Name": "G.812", "Value":"转接局时钟" },
{"Name": "G.812", "Value":"本地时钟" },
{"Name": "同步设备定时源", "Value":"d" },
{"Name": "不应用作同步", "Value":"e" },
{"Name": "质量情况未知", "Value":"f" },
{"Name": "2Mb/s输入或无输入时的默认值或者是不设置", "Value":"g" },
]


output 


 a ~ n




# output

 [{ "title": "${0:nm}","field": "${1:sn}","command": "${2}","key": "${3}","showType": "${4:text}", ${41} }],



信号类型  signalType  SET-OUT-TYP  out-type  c  SignalTypeGNSS97
信号等级  signalOutLevel  SET-OUT-LEV level c SignalOutLevelGNSS97
主备模式  signalOutMod    SET-OUT-MOD out-sta c SignalOutModGNSS97


<!-- 软倒换 mildChange  	SET-OUT-PRR	aid   //  SET-OUT-PRR -->







信号类型 outtype	RTRV-EQPT OUT //	aid : a ~ n  (槽位号)		
信号等级 level	RTRV-EQPT OUT //	aid : a ~ n  (槽位号)		
主备模式 outsta	RTRV-EQPT OUT //	aid : a ~ n  (槽位号)	









信号类型 out	SET-OUT-TYP	 //  : 0 | 1 | 2   // aid : a ~ n  (板卡类型映射表)




SignalTypeGNSS97:[//nm
{"Name": "2.048Mhz", "Value":"0" },
{"Name": "2.048Mb/s", "Value":"1" },
{"Name": "无输出", "Value":"2" },
]



信号等级	SET-OUT-LEV	aid : a ~ n  (板卡类型映射表)





SignalOutLevelGNSS97:[//nm
{"Name": "G.811时钟", "Value":"02" },
{"Name": "G.812转接局时钟", "Value":"04" },
{"Name": "G.812本地时钟", "Value":"08" },
{"Name": "同步设备定时源", "Value":"0B" },
{"Name": "不应用作同步", "Value":"0F" },
{"Name": "质量情况未知", "Value":"00" },
]


主备模式	SET-OUT-MOD	aid : a ~ n  (板卡类型映射表)


SignalOutModGNSS97:[//nm
{"Name": "主备模式", "Value":"1" },
{"Name": "普通模式", "Value":"0" },
]





 "a":"1",
 "b":"2",
 "c":"3",
 "d":"4",
 "e":"5",
 "f":"6",
 "g":"7",
 "h":"8",
 "i":"9",
 "j":"10",
 "k":"11",
 "l":"12",
 "m":"13",
 "n":"14",
 "o":"15",
 "p":"16",
 "q":"17",
 "r":"18",
 "s":"19",
 "t":"20",
 "u":"21",
 "v":"22",
 "w":"23",





 port 




 var parDom = $(".nav-left").find("li.active").find("[to]").attr("to");
     parDom = $("#item-box-" + parDom);
     parDom.find(settingCommandDual.formDom).data("o");
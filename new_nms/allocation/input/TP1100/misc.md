1、系统相关功能：
       系统运行模式：SET-SYS-MODE   SSU SUB PRR 
         源选择方式：ED-SYNC,  (REFMODE=AUTO  FORCED)     aid SYS 
             当前源：ED-SYNC,  (INPREF=GPS PRS INP1 INP2)     aid SYS 
      
2、钟卡相关功能：
          时钟卡：IOC1/IOC2

      时钟卡模式：ED-EQPT , (IOCMODE=ACTIVE/STANDBY)   aid IOC1 2
            状态：ED-EQPT，（IOCSTATE=INSRV/OOSRV
            类型：ED-EQPT，（CLKTYPE=ST2/TYPEII/ST3E/TYPE）//  todo 

3、输入相关功能： (PRS/INP1/INP2/GPS)
            状态：ED-EQPT,  (INSTATE=ENABLE/MONITOR/DISABLE)
        信号类型：ED-SYNC,  (FRMTYPE=2M/CAS/CCS/)
        质量等级：ED-SYNC,  (QLEVEL=)
		优先级：  ED-SYNC，(PRIORITY=)
        SSM使能：ED-SYNC,  (SSMENA=)
          SSM位：ED-SYNC,  (SSMBIT=)
       CRC4使能：ED-SYNC,  (CRCENA=)
  

4、输出相关功能：


INSTATE=ENABLE/MONITOR/DISABLE

FRMTYPE=2M/CAS/CCS/

QLEVEL:
1 = PRS
2 = UNK/STU
3 = TYPE II/ST2
4 = TYPE I
5 = TYPE V/TNC
6 = TYPE III/ST3E
7 = TYPE IV/ST3
8 = G.813OPT3/SMC
9 = DUS


PRIORITY

<!-- GPS = 1 -->
PRS = 2
INP1 = 3
INP4 = 4


SSMENA

ENABLE 
DISABLE

SSMBIT

4 | 5 | 6 | 7 | 8


CRCENA


ENABLE 
DISABLE
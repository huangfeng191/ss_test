; 示例 #1: 当不想要的窗口出现时关闭它们:
#Persistent
lastDone := 0
; doTime := 000000
doTime := 104400
; doTime := 160500
; doTime := 130100
; doTime := 12
doOffset := 0 ; 单位毫秒 目前只支持延时,也就是说系统时间要快于网络时间
; doOffset := 10000 ; 单位毫秒 目前只支持延时,也就是说系统时间要快于网络时间
SetTimer, doF5, 2
return

doF5:
    FormatTime, now,,HHmmss
    ; FormatTime, now,,HH

    if (now == doTime) 
    {
        if (lastDone == 1)
        {
            Return
        }
        lastDone =1
        if(doOffset > 0){
            Sleep doOffset 
        }
        Send, {F5} 
        ; MsgBox, i m OK %now% %doTime%
    }
return 
; 示例 #1: 当不想要的窗口出现时关闭它们:
#Persistent
lastDone := 0
doTime := 000000
; doTime := 100000
; doTime := 160000
doTime := 200000
; doTime := 191700
; doTime := 12
; doOffset := 0 ; 单位毫秒 目前只支持延时,也就是说系统时间要快于网络时间
doOffset := 400 ; 单位毫秒 目前只支持延时,也就是说系统时间要快于网络时间
; doOffset := 0 ; 单位毫秒 最大1000  目前只支持延时,也就是说系统时间要快于网络时间
; SetTimer, doF5, 2
SetTimer, doF5, 2
return

doF5:
    new_int:=now+1
    FormatTime, now,,HHmmss
    ; FormatTime, now,,HH
    ; MsgBox ,%now%
    ; Return 
    if (doOffset>-1)
    {
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
        }
    }else{
    ;   error
        FormatTime, new_int,,HHmmss
        MsgBox,%new_int% %now%
        if( new_int == dotime)
        { 
            if (lastDone == 1)
            {
                Return
            }
            lastDone =1
            sleep 1000+doOffset
            MsgBox,%new_int%
            ; Send, {F5} 
            
        }
    }

return 
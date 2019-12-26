; 示例 #1: 当不想要的窗口出现时关闭它们:
#Persistent
lastDone := 0
FormatTime, doDay,,yyyyMMdd
; :=20191220
; doTime := 000000
; doTime := 100000
; doTime := 160000
doTime := 200000

; doOffset :=0 ;  延迟毫秒数： 系统快 + ,系统慢 -  范围 (-1000,+无穷大)
doOffset :=0 ;  延迟毫秒数： 系统快 + ,系统慢 -  范围 (-1000,+无穷大)
; doOffset := -1000 ;  延迟毫秒数： 系统快 + ,系统慢 -  范围 (-1000,+无穷大)


if(doTime =="000000")
{
    tomorrow:=""
    tomorrow += 1, Days
    FormatTime, doDay,%tomorrow%,yyyyMMdd
}

doDate=%doDay%%doTime%
SetTimer, doF5, 2
return

doF5:
    if (doOffset>-1)
    {
        FormatTime, now,,HHmmss
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
        new_int := ""  
        new_int += 1, Seconds  
     
        if( new_int == doDate)
        { 
            if (lastDone == 1)
            {
                Return
            }
            lastDone =1
            sleep 1000+doOffset
            ; MsgBox,%new_int%
            Send, {F5} 
            
        }
    }

return 
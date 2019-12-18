; 示例 #1: 当不想要的窗口出现时关闭它们:
#Persistent
lastDone := 0
doTime := 160000
; doTime := 12
SetTimer, doF5, 120
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
        ; MsgBox, i m OK %now% %doTime%
        Send, {F5} 
    }
return 
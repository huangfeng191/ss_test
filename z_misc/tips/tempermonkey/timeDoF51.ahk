; 示例 #1: 当不想要的窗口出现时关闭它们:
#Persistent
lastDone := 0
doTime := 214900
; doTime := 160500
; doTime := 130100
; doTime := 12
SetTimer, doF5, 2
return

doF5:
    FormatTime, now,,HHmmss
    ; FormatTime, now,,HH
    
    if (now == doTime) 
    {
        if (lastDone == 1)
        {
            ; send,{Click}
            return 
        }else{
        lastDone =1
        ; MsgBox, i m OK %now% %doTime%
        Send, {F5} 
        }
       
    }
  
return 
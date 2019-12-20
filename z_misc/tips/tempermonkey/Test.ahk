;  FormatTime, now,,HHmmss
; var1 :=20191010100100
; var2 :=20191010110000
; EnvSub, var1, %var2%, Seconds
; MsgBox, %var1%  ; The answer will be 366 since 2004 is a leap year.


; var1 := ""  ; Make it blank so that the below will use the current time instead.
; var1 += 120, Seconds
; MsgBox, %var1%  ; The answer will be the date 31 days from now.
; FormatTime, var1,, YYYYMMDD
; MsgBox ,var1


; var1 := "20191220"  ; Make it blank so that the below will use the current time instead.
;  FormatTime, now1,,HHmmss
; var2 =%var1%%now1%
; MsgBox %var2%


; var1 := ""  ; Make it blank so that the below will use the current time instead.
; var1 += 1, Seconds
; MsgBox, %var1%  ; The answer will be the date 31 days from now.

var1:="20191220"
var2:="102020"
var3:="20191220102020"
var4=%var1%%var2%
 MsgBox %var4%
if(var3==var4)
{
    MsgBox %var1%%var2%
}
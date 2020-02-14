# 2020-02-14  Friday 


# warning 

#current 

告警时间  bgtime 

#history 

告警时间 bgtimeH



#warning_sj
开始时间 #titme1

# performance

#current 

开始时间 #sTime


# operation 

告警统计 ：

#alarm_statement 
开始时间 #titme1

审计日志

#statisticsLog_table

开始时间 qfield="bgnDate"

备份／归档记录
开始时间:id="backupLogTimeStart"



function setTime (){
  var s=new Date().Format("yyyy-MM-01 hh:mm")
  var s1=new Date().Format("yyyy-MM-01")
  var e=new Date().Format("yyyy-MM-01 hh:mm")

  $("#current #bgtime").val(s);
  $("#current #endtime").val(e);
  $("#history #bgtimeH").val(s)
  $("#history #endtimeH").val(e)

  $("#warning_sj #titme1").val(s)
;
}
setTime()








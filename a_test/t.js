$("#in_activeAlarmId").val("");
$("#in_activeAlarmDesc").val("");
$("#in_alarmID").val("");



$("#in_activeAlarmId").data("data",{})



err_incomplete_chunked_encoding 


max_num

max_monthp


    感谢测试组同事对上一个版本的测试。 
    针对测试组同事提出的问题，我们经过一段时间的开发，
修复了大部分问题。现在发布一个新的版本，版本号为：1.1.0,
改版本主要修复了以下问题：
    1 系统安全相关功能
    2 链路相关功能
    3 拓扑管理相关功能
    4 帮助相关功能
    5 运维管理相关功能
    6 告警管理相关功能
    7 SM2000_GN 接收机相关功能
    8 SM2000 性能管理相关功能
    9 管网检测-数据库备份
还未修复的问题主要包括：
    1 针对tp1100设备信息的管理及维护
    2 SM2000设备的升级及网管系统的自动部署




    	
1 帮助管理bug修改


1 性能管理bug修改 2 运维管理bug修改 3 帮助管理bug修改 4 运维管理用户、告警统计日志统计bug修改 5 系统测试，bug修改







    





测试服务器地址： http://192.168.1.227:16080 


  



var rules = {
    userName: { "length": 50, "err": "用户名长度<=50" },
    description: { "length": 50, "err": "描述长度<=50" },
  }

  var verified = top.SsComm.getVerify(data, rules);
  delete data.userLevel;
  delete data.roleLevel;
  if (verified) {
    $('#myModalTips').html(window.top.showTips(verified));
    $('#myModalTips').modal('show');
    return;
  }
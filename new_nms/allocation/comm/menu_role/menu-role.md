# 权限 与 按钮日志的关系

权限是控制到页面的：将每个页面划分成 两类： 操作 以及 查询

按钮是在页面下的操作，所以说 dom 可取 页面的, 针对页面下的按钮进行操作，按钮分成

doing:
  query print import export upload


so  the first step is role   

  
  
  


  if ((level2Menu["index-physics"]&&level2Menu["index-physics"].operate==false)||
		    (level2Menu["topology-physics"]&&level2Menu["topology-physics"].operate==false))
		{
			return ;
		}


<!-- 去除操作按钮 -->
 if (level2Menu["topology-logic"]&&level2Menu["topology-logic"].operate==false){
     return false
 }        
 if (level2Menu["warning-mask"]&&level2Menu["warning-mask"].operate==false){
     return false
 }        
 if (level2Menu["warning-handle"]&&level2Menu["warning-handle"].operate==false){
     return false
 }

 if (level2Menu["performance-setting"]&&level2Menu["performance-setting"].operate==false){
     return false
 }        


 对于三级菜单：
 1 隐藏无权限菜单
 2 模拟点击 

# configure 
 if (level2Menu["configure-config"]&&level2Menu["configure-config"].operate==false){
 if (level2Menu["configure-manage"]&&level2Menu["configure-manage"].operate==false){


1 step1  不划分审核 

缺少配置的权限 ,及审核的权限 

添加 manage 权限 manage 


今天 与明天 要搞定 ，
记录日志 ，区域的功能




if (level2Menu["system-security-user"]&&level2Menu["system-security-user"].operate==false){
    
}

if (level2Menu["system-monitor-database"]&&level2Menu["system-monitor-database"].operate==false){
    
}



系统管理员
审核管理员
审计管理员
业务配置员
业务审计员
业务操作员





# 2020-01-14  Tuesday 


1 去除 websocket 
2 审计 审核 人员权限 
3 操作级




审计  审计管理员
    日志管理

审核 审核管理员
    安全管理
           用户审核
           权限审核


拓扑配置 业务配置员
    


{"name":"拓扑管理","id":"topology","parentId": "",},
{"name":"物理拓扑","id":"topology-physics","parentId": "topology",},
{"name":"逻辑拓扑","id":"topology-logic","parentId": "topology",},
{"name":"网管拓扑","id":"topology-net","parentId": "topology",},


告警配置
    告警配置 

业务操作员



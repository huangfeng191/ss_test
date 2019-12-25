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
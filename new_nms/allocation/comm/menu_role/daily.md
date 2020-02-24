# 2019-12-27  Friday 

1. mapRole:
   链路： 
   1. 同步 operate
   2. 修改、删除 manage
   3. add manage 
   设备：
   1. sync operate
   2. edit,delete manage 
   3. add manage 


if (!((level2Menu["index-physics"] && level2Menu["index-physics"].manage == true) ||
				(level2Menu["topology-physics"] && level2Menu["topology-physics"].manage == true))) {


if ((level2Menu["index-physics"] && level2Menu["index-physics"].manage == true) ||
				(level2Menu["topology-physics"] && level2Menu["topology-physics"].manage == true)) {



initMenu:

syncBtn
_editBtn

_delBtn

http://192.168.1.160/nms/index.html



# 2020-02-24  Monday 

1. divide  from first Level 
2. the same as second Level
3. translate before  getMenu  


theme 
   shenji 
   shenhe 

   warning-config
   topu-config 
   做好菜单对应 

   OK 



if(v.id=="shenhe"){
   v.id="system"
}else  if(v.id=="shenhe-user"){
   v.id="system-security-user"
   v.operate.manage=v.operate.operate
   v.operate.operate=false
}else  if(v.id=="shenhe-role"){
   v.id="system-security-role"
   v.operate.manage=v.operate.operate
   v.operate.operate=false
}else  if(v.id=="shenhe-menu"){
   v.id="system-security-menu"
   v.operate.manage=v.operate.operate
   v.operate.operate=false
}else  if(v.id=="shenhe-security"){
   v.id="system-security"
   v.operate.manage=v.operate.operate
   v.operate.operate=false
}   

if(id=="system"){
   id="shenhe"
}else if(id=="system-security-user"){
   id="shenhe-user"
}else if(id=="system-security-role"){
   id="shenhe-role"
}else if(id=="system-security-menu"){
   id="shenhe-menu"
}else if(id=="system-security"){
   id="shenhe-security"
}

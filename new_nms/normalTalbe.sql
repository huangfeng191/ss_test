-- normal tables 
-- basic 
select * from menu ;  -- 菜单
select * from role_menu_ref ; -- 权限包含的菜单
select * from device_role_ref ; --  roleId , deviceld 权限包含的设备
select * from role ; -- all role ; 
select * from user_role_ref ; -- user role ; one user can have  multipile  role ;
select * from users ; -- 用户

select * from field_data_dictionary ;  -- 数字词典
select * from param_config ; -- unverified

-- business 
select * from area ; -- 区域表 parentId   connented
select * from device ; -- device info 
select * from device_additional_info ; -- unverified
select * from shelf ;  --机箱  deviceId  
select * from alarm ; -- unverified

select * from view_location_data ; -- pysical and logic  topology
select * from path; -- -- pysical and logic  topology path
select * from net_topo_node;
select * from net_topo_scene;


select * from site ; -- unverified
select * from nms_log ; -- logs 




select * from notifytrap; -- 通知

select * from alarm_history; -- 报警历史
select * from operation; -- unverified

select * from field_data_dictionary; -- 数字此地爱你
select * from net_topo_node; -- net_topology
select * from secu_log;
select * from event_log; -- 事件日志
select * from cmd_log;  --unverified



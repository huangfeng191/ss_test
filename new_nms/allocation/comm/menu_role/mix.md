

1 step1  不划分审核 

缺少配置的权限 ,及审核的权限 

添加 manage 权限 manage 


今天 与明天 要搞定 ，
记录日志 ，区域的功能


只有拓扑管理的时候 是需要有三个权限的




onclick='getDeviceChangeReport()'
onclick='getMalDeviceModelAnalysis()'


onclick="getInterfaceState()"




addRole:


系统管理员: 
231562fc-8b99-4046-9e25-fa4972c58349 





system-security-user_view
system-security-user_operation
system-security-role_view
system-security-role_operation
system-security-parameter_view
system-security-parameter_operation
system-security-menu_view
system-security-menu_operation



system-monitor-infos_view
system-monitor-infos_operation
system-monitor-database_view
system-monitor-database_operation
system-monitor-remote_view
system-monitor-remote_operation


<!-- 系统管理 -->



INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-user_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-user_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-role_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-role_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-parameter_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-parameter_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-menu_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-menu_operation");


<!-- 运维管理 -->

INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-infos_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-infos_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-database_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-database_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-remote_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-remote_operation");



# 系统管理员


INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-user_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-user_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-role_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-role_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-parameter_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-parameter_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-menu_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-security-menu_operation");

INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-infos_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-infos_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-database_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-database_operation");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-remote_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"system-monitor-remote_operation");



# 审核管理员

INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('6b030da4-be4e-45f4-9f38-980f36dff189',"system-security-user_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('6b030da4-be4e-45f4-9f38-980f36dff189',"system-security-user_manage");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('6b030da4-be4e-45f4-9f38-980f36dff189',"system-security-role_view");
INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('6b030da4-be4e-45f4-9f38-980f36dff189',"system-security-role_manage");

# 审计管理员


# 业务配置员	


# 业务操作员	


# 业务审计员





231562fc-8b99-4046-9e25-fa4972c58349	系统管理员
509bdbd5-a7af-44ed-88b9-ac25758e51a7	管理员
615c1531-f4f7-4a52-b702-708ff318ceec	cf
6b030da4-be4e-45f4-9f38-980f36dff189	审核管理员 1
6bb95013-ad3c-4191-b29c-85da689c63e9	操作级
6fcc660a-039c-4571-88e1-4e3dcf99766d	所有设备
83bac8dc-bedf-4894-a8ba-01d00f3b251d	不可描述1
a7a29939-62ed-446d-91c0-8ec87a668986	审计管理员  
cb6f7c13-cdf6-413a-8719-52017171d436	业务配置员
e02483b9-c64e-47f8-9a92-a7f40ef8cdba	业务审计员
eafa2d04-900d-422d-8477-956218ffd763	业务操作员
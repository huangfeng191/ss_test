

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



INSERT INTO `nms3.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"index-physics_manage");



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




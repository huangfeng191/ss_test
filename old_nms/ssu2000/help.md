
```sql
-- select id from menu where menuName = ''
INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES ('231562fc-8b99-4046-9e25-fa4972c58349',);

ssu钟卡

select id,menuName from menu where menuName  in ("ssu输入","ssu输出","ssu管理","ssu系统","ssu钟卡","ssulimit")




INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"1be5d188-e7e9-45b3-a034-1d5910db5b23");
INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"3d1da4b4-8dbe-4696-8300-308e132930a9");
INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"a4720d3d-4d1c-4e80-85bb-4148382d81e6");
INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"dede3b65-8982-4d22-8cf5-5ed68b9e2329");
INSERT INTO `nms2.0`.`role_menu_ref`(`roleId`, `menuId`) VALUES('231562fc-8b99-4046-9e25-fa4972c58349',"32a39796-8c3d-4f23-843a-7fc670e40843");

```

"ssu输入":index.ssuConfig.irrational_input , 
"ssu输出":index.ssuConfig.irrational_output ,
"ssu管理" :index.ssuConfig.irrational_manage,
"ssu系统":index.ssuConfig.irrational_system,
"ssu钟卡":index.ssuConfig.irrational_clock
"板卡配置（SSU）":index.ssuConfig.ssu2000OutputCard
"告警列表查看":index.ssuConfig.ssu2000alarmShow
"告警模板配置":index.ssuConfig.ssu2000alarmConfig
"ssu输入限制":index.ssuConfig.irrational_limit
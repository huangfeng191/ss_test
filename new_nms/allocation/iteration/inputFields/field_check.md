checkInputLegal("remark",100,"告警备注",false,{"special":"extension"} )

# 首页 index.html 
告警备注 remark 100 extension

# 拓扑管理 topology.html 
## 告警列表
告警备注 remark 100 extension
## 物理拓扑 、逻辑拓扑 、系统拓扑
### add/edit myModal2 设备维护

网元名称 name 20
资产归属 owner 32
网元地址 aliasName 32
机架位置 location 32


### add/edit myModalLabel 链路  物理拓扑、逻辑拓扑
网元输出端口	eInput 32
网元输入端口	eOutput 32
系统名	systemName 30
物理节点信息 nodeDetail 18


### add/edit 网元组
网元组名称 groupName 36
网元组地址 groupAddress 36

# warning.html 


## 当前告警  getQueryArrays({domId:"currSearchFormC"})
告警原因 reason 255 chen_space
告警编号 code 16 en




## 历史告警 getQueryArrays({domId:"history"})
告警原因 reasonH 255 chen_space
告警编号 codeH1 16 en



## add edit 告警屏蔽
告警编号 devIDAdd 16 en 


## 配置管理 configure.html 

## 网元配置 单独处理

### add/edit myModal2 设备维护


网元名称 name 20
资产归属 owner 32
网元地址 aliasName 32
机架位置 location 32




## EMS配置 getQueryArrays({domId:"searchContainer"})
### 查询
厂商网管系统标识符 systemIdentifier 20

### 设置
厂商网管系统标识符	identifier 20
厂商网管用户标签	userLabel 20
厂商网管系统软件版本 softwareVersion 20	en_dot
网管产品名称 productName 20	 
厂商名称 manufacturer 20	 
附加信息 additionalInfo	20




# operation 运维管理

## 调整记录
内容 search_message 120 extension
原因 search_reason 120 extension

### add edit  addAdjustmentModal
原因 adjust_reason 120 extension
内容 adjust_message 120 extension
处理步骤 adjust_step 120 extension




# help.html 

## 知识库 getQueryArrays({domId:"knowledgeLibC"})

处理方法 seach_method 255 extension
原因 seach_reason 255 extension

## add   addKnowledgeModal
告警编号 activeAlarmId 16 en 
原因 reason 255 extension
处理方法 method 255 extension
 
## edit updateLedgeModal
原因 update_ledge_reason 255
处理方法 update_ledge_method 255


## 站点详情 getQueryArrays({domId:"StationSearchC"})
站点名称 site_name 50 chen

站点名称 siteName 50 chen
站点说明 message 255 extension

## edit updateStationModal
站点名称 update_site_name 50 chen
站点说明 update_site_message 255


## 网元详情

## edit  addDeviceModal
补充说明 wy_desc 255


# system 
## 安全管理


### 用户管理
用户名 namess 30 chen



#### add  addUserModal

用户名 userName 30 chen
单位 company 50 chen
姓名 name 10 ch

联系方式 mobile 11

#### edit  updateUserModal

<!-- 用户名 username  不可修改  -->
单位 companys 50 chen
姓名 names 10 ch
联系方式 mobiles 11


### 用户信息修改

单位 companys 50 chen
姓名 names 10 ch 


### 权限管理
角色名称：  qRoleName 50 chen


描述  field="roleDesc" 255
### 用户统计

用户名： namess1 30 chen


### 系统参数

配置值 configValue
说明1 comment1 100
说明2 comment2 100
说明3 comment3 100


### 角色管理

用户级别  qRoleNameReal 50 ch 




system 

用户名 qfield="userName"  30 chen 
操作对象 qfield="object" 50 chen
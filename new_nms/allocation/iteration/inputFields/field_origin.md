# 首页 index.html 
告警备注 remark 100

# 拓扑管理 topology.html 
## 告警列表
告警备注 remark 100
## 物理拓扑 、逻辑拓扑 、系统拓扑
### add/edit myModal2 设备维护
网元IP ip
网元名称 name
资产归属 owner
网元地址 aliasName
机架位置 location
经度 longitude	
纬度 latitude
接收机1ip 	ip1
接收机2ip	ip2

### add/edit myModalLabel 链路  物理拓扑、逻辑拓扑
网元输出端口	eInput
网元输入端口	eOutput
系统名	systemName
物理节点信息 nodeDetail


### add/edit 网元组
网元组名称 groupName
网元组地址 groupAddress

## 拓扑信息统计
### 无

# warning.html 

## 告警配置
### 无

## 当前告警  getQueryArrays({domId:"currSearchFormC"})
告警原因 reason
告警编号 code
告警ID alarmId

厂商 changshang ?s
网元名称 device ?s
区域 area ?s
告警源 source ?s
告警等级 level ?s
状态 state ?s
确认状态： state2 ?s


## 历史告警 getQueryArrays({domId:"history"})
告警原因 reasonH
告警编号 codeH1

厂商 changshangH ?s
网元名称 deviceH ?s
区域 areaH ?s
告警源 sourceH ?s
告警等级 levelH ?s

<!-- 告警确认人 operatorH  -->
状态 stateH1 ?s

## 告警屏蔽查询
### 无

## add edit 告警屏蔽
告警编号 devIDAdd

## 告警统计
### 无

## 配置管理 configure.html 

## 网元配置 单独处理

## 网元管理 getQueryArrays({domId:"deviceSearchC"})
### 无已隐藏
<!-- 网元名称 device -->
厂商 vendor ?s
网元类型 deviceType ?s

### add/edit myModal2 设备维护


网元IP	ip
网元名称 name 
资产归属 owner
网元地址 aliasName
机架位置 location
经度	longitude
纬度 latitude
接收机1ip 	ip1
接收机2ip	ip2



## EMS配置 getQueryArrays({domId:"searchContainer"})
### 查询
厂商网管系统标识符 systemIdentifier

### 设置
厂商网管系统标识符	identifier
厂商网管用户标签	userLabel
厂商网管系统软件版本 softwareVersion	
网管产品名称 productName	
厂商名称 manufacturer	
附加信息 additionalInfo	


## 配置信息统计
### 无


# performance.html 性能管理

## 当前性能
### 无
## 历史性能
### 无
## 性能配置
### 性能检测
#### 可以理解为无 性能检测值
## 性能统计
### 无


# operation 运维管理

## 数据统计
### 无
## 年度报表
### 无
## 综合分析
### 无

## 调整记录
内容 search_message
原因 search_reason


### add edit  addAdjustmentModal
原因 adjust_reason
内容 adjust_message
处理步骤 adjust_step


## 环境管理
### 查询无
### 
温度 show_wendu
湿度 show_humidity


# help.html 

## 知识库 getQueryArrays({domId:"knowledgeLibC"})
网元类型 seach_deviceType ?s
处理方法 seach_method
原因 seach_reason

## add   addKnowledgeModal
告警编号 activeAlarmId
原因 reason
处理方法 method

## edit updateLedgeModal
原因 update_ledge_reason
处理方法 update_ledge_method


## 站点详情 getQueryArrays({domId:"StationSearchC"})
站点名称 site_name

站点名称 siteName
站点说明 message

## edit updateStationModal
站点名称 update_site_name
站点说明 update_site_message


## 网元详情
## edit  addDeviceModal
补充说明 wy_desc


# system 
## 安全管理





### 用户管理
用户名： namess
级别： userLevelInfo ?s
区域 area ?s
单位： companines ?s
网元： device ?s
登录状态： state ?s
用户状态： userState ?s


#### add  addUserModal

用户名 userName  
单位 company
姓名 name
联系方式 mobile
email emailAdd
身份证 cardID
允许ip allowIpAdd

#### edit  updateUserModal

<!-- 用户名 username  不可修改  -->
单位 companys
姓名 names
联系方式 mobiles
email email
身份证 cardIDs //cardId_shield
允许ip allowIp
延长时间(天) delayDays


### 用户信息修改

单位 companys
姓名 names
联系方式 mobiles
email email
身份证 cardIDs // cardId_shield 


### 权限管理
角色名称：  qRoleName


描述  field="roleDesc"
### 用户统计

用户名： namess1
级别： userLevelInfo1 ?s
单位： companines1 ?s
网元： device1 ?s
登录状态： state1 ?s



### 系统参数

配置值 configValue
说明1 comment1
说明2 comment2
说明3 comment3


### 角色管理

用户级别：  qRoleNameReal




## 接口管理
#### 无

## 管网检测

### 系统信息
#### 无
### 数据管理
#### 无
### 网管升级
#### 无




system 

用户名 qfield="userName"
ip地址 qfield="ip"
操作对象 qfield="object"
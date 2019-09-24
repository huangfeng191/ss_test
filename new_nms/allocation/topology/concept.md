## 链路
1. 新增拓扑 
    POST /nms/spring/viewData/addPath
    pathType  1 逻辑拓扑  2 物理
    when pathType==1   zNe   aNe saved base on device id ;


2. 删除拓扑
    /nms/spring/viewData/deletePathByObject
3. 查询拓扑
    /nms/spring/viewData?areaId=


## 添加设备:  
>与链路相反
1. /nms/spring/device
   "addType":   "1" 物理拓扑 , "2": 逻辑拓扑





链路：
  输出设备的输出口， 连接 输入设备的输入口, 
  如果只显示联通设备的话，如何体现异常链路的概念.
  添加链路的时候 是否需要加一个字段 是否是主链路
  当主链路时体现异常链路概念
  只有1台设备的话、如何测试
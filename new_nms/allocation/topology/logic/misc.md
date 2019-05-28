myData.forEach(function(x) {
    x.value[0] = parseFloat(x.value[0]);
    x.value[1] = parseFloat(x.value[1]);
    x.value[2]=  {
  "id": "db9df08c"+Math.ceil(Math.random()*10000),
  "type": "NEG",
  "status": "greent",
  "nodeOrDevice": "2",
  "groupAddress": "cs111",
  "remark": ""
  }
    x.name=x.name+Math.ceil(Math.random()*10000);
  })





  NEG ? netElementGroup  网元组



  //颜色灯不能拖拽控制
  if (dataItem.value[2].status == 'StaticNormal' || 
      dataItem.value[2].status == 'StaticSWarning' ||  
      dataItem.value[2].status == 'StaticMWarning' || 
      dataItem.value[2].status == 'StaticLIWarning' || 
      dataItem.value[2].status == 'StaticEvent')
      
      canDrag = false



      网元组 : /nms/spring/viewData/getAllGroup



      obj.name=data[i].groupName;  // == is show 
      var nodeGroupObj = new Object();
      var valArr = new Array();
      valArr[0] = data[i].xCoordinate;
      valArr[1] = data[i].yCoordinate;
      nodeGroupObj.id = data[i].id;
      nodeGroupObj.type = "NEG";
      nodeGroupObj.status = "greent";
      nodeGroupObj.nodeOrDevice = "2";
      nodeGroupObj.groupAddress = data[i].groupAddress;   // == is show 
      nodeGroupObj.remark = data[i].remark;
      valArr[2] = nodeGroupObj
      obj.value=valArr; 



      nodeOrDevice 1 is equipment  
      nodeOrDevice 2 is net element group ;


      
points：

  getEffectPoints(true) :去除不属于地图上的坐标
    setPointData() // 将数据归类为 可拖拽 以及 地图上的点
     one dragPointData （if coordinate <10 ）  the other pointData  








      var valArr = new Array();
      valArr[0] = data[i].xCoordinate;
      valArr[1] = data[i].yCoordinate;


  issues:
      网元组的状态如何获取及显示？





设备编辑 ：
  judge :1 新增    /nms/spring/device   post
         2 修改    /nms/spring/device   put 




myModal_btn  myModal 链路编辑
myModal2_btn myModal2 设备添加
myModal3_btn myModal3 网元组添加




parents 接口 获取设备
















onPointDragEnd  拖拽完成的时候触发的方法


_onClick :点击时触发，主要是添加链路



```js

// 说明有坐标
drawLineData.coords=[];
[经度,纬度，ip , 设备名称 ]


   if (params.seriesType === 'custom' && params.value && params.value.length > 1 && params.value[0] > 0) {
                    startPoint = {
                        name: params.name,
                        value: params.value
                    };
                    drawLineData.coords.push([params.value[0], params.value[1],params.data.value[2].ip,params.name]);
                }

```
lineData  points 

getEffectLines(true) 获取线段，起止都是设备

 reflashLine(getEffectLines(true));



```js
//可以设置多个线段
			_eMap.setOption({
					series: [{
						id: 'line1',
						name: 'line1',
						type: 'lines',
						zlevel: 3,
						polyline: true,
						lineStyle: {
							normal: {
								color: function (params) {
									if (!params.data.info.status) params.data.info.status = 'Normal';
									return lineStatus[params.data.info.status];
								},
								width: 2
							}
						},
						data: lines
					}]
				})

```


<!-- pathType  2： 线 -->
/nms/spring/viewData/deletePathByObject

{"aNe":"192.168.1.33","zNe":"192.168.99.98","pathType":"2"}


logic-chart.js
    var nodes = logic_nodes;//设备
	  var lines = logic_lines;//设备链路


    render:
          setNodesPos();
	        renderLines();
	        renderNodes();



    // 根据ip 获取坐标
// 其实只关系类型图标
    if (device.Vendor == "hw") {
        devices.type = 'type1';
      } else if (device.Vendor == "ss") {
        devices.type = 'type3';
      } else if (device.Vendor == "dt") {
        devices.type = 'type2';
      } else if (device.Vendor == "xt") {
        devices.type = 'type4';
      } else {
        devices.type = 'type1';
      }

    // 
    devices = {
        id: device.id,   // 设备id
        type: devices.type, // 类型厂商
        status: 0, // 
        //level : 3,
        pos: posArr
      };
      arrLogicData.push(devices);





    设备端口
    设备输出端口
    链路状态
    系统名
    物理节点信息
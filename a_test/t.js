<<<<<<< HEAD
姓名	部门（下拉选项）	月份（下拉选项）	日期（下拉选项）	项目编号（下拉选项）	项目描述(自动匹配，无需填写)	归属（下拉选项）	开发工时
（8时/天）	加班工时
（周末按小时算）	项目讨论会	售前技术方案撰写	售后技术支持	其他	合计
(内含公式，无需填写)	每日具体工作内容（尽可能详尽）
吴金建	软件部	8月22	日	1806-NMS	国网信通委托网管开发	软件	8	0	0	0	0	0	8   	1 物理拓扑功能调整:单击弹出设备信息,且可放大，双击添加链路信息,修复为解决区域问题，引起的缩放问题
2 配合外包功能修改

吴金建
18867655461
浙江省嘉兴市南湖区大桥镇亚太工业园区（Ａ９）３１６室
网址:www.zjsaisi.com
=======
var canDrag = true;
                    var type = dataItem.value[2].type;
                    if (type == 'NEG') {
                    	
                    	//颜色灯不能拖拽控制
                    	if (dataItem.value[2].status == 'StaticNormal' || dataItem.value[2].status == 'StaticSWarning' || dataItem.value[2].status == 'StaticMWarning' || dataItem.value[2].status == 'StaticLIWarning' || dataItem.value[2].status == 'StaticEvent') canDrag = false;
                        render = {
							type: 'group',
							children: [{
								type: 'image',
								draggable: canDrag,
								position: [0,0],
								style: {
									image:"/nms/images/topo/physical/NEG.png",
									width: 20/scale,
									height: 20/scale,
								}
							},{
								type: 'text',
								style: {
									x: 24 / scale,
									y: 4 / scale,
									text: dataItem.name
								}
							}]
                        };
                    } else if (type == 'PRC') {
                        render = {
                            type: 'group',
                            children: [{
								type: 'image',
								draggable: canDrag,
								position: [0,0],
								style: {
									image:"/nms/images/topo/physical/PRC.png",
									width: 20/scale,
									height: 20/scale,
								}
							}, {
								type: 'text',
								style: {
									x: 24 / scale,
									y: 4 / scale,
									text: dataItem.name
								}
							}]
                        };
                    } else if (type == 'LPR') {
                        render = {
							type: 'group',
							children: [{
								type: 'image',
								draggable: canDrag,
								position: [0,0],
								style: {
									image:"/nms/images/topo/physical/LPR.png",
									width: 20/scale,
									height: 20/scale,
								}
							},{
								type: 'text',
								style: {
									x: 24 / scale,
									y: 4 / scale,
									text: dataItem.name
								}
							}]
                        };
                    } else if (type == 'SSUT') {
                        render = {
							type: 'group',
							children: [{
								type: 'image',
								draggable: canDrag,
								position: [0,0],
								style: {
									image:"/nms/images/topo/physical/SSUT.png",
									width: 20/scale,
									height: 20/scale,
								}
							},{
								type: 'text',
								style: {
									x: 24 / scale,
									y: 4 / scale,
									text: dataItem.name
								}
							}]
                        };
                    } else if (type == 'SSUL') {
                        render = {
							type: 'group',
							children: [{
								type: 'image',
								draggable: canDrag,
								position: [0,0],
								style: {
									image:"/nms/images/topo/physical/SSUL.png",
									width: 20/scale,
									height: 20/scale,
								}
							},{
								type: 'text',
								style: {
									x: 24 / scale,
									y: 4 / scale,
									text: dataItem.name
								}
							}]
                        };
					}
					


		
>>>>>>> c5fae8168d631bfbd0a148e9bd17031671aedb39

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
					


		

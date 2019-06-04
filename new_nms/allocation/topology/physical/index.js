// pathType  1  线  2  node 

"path" = {
    "aNe": aNodeLink,
    "zNe": zNodeLink,
    "pathName": pathName,
    "pathType": '2',
    "remark": ''
}


//逻辑拓扑线数据
var topoLink = new Object();
topoLink.s = res.data[i].zNe;
topoLink.t = res.data[i].aNe;
topoLink.status = 1;
//alert(JSON.stringify(topoLink));
arrTopoLinkData.push(topoLink);

logic_lines = JSON.parse(JSON.stringify(arrTopoLinkData));







var logic_nodes = [];
// 连线
//   device/page interface 
// device.area.id;
var formatObj = {};
FormatObjLike = {
    "areaId": {
        id: areaId,
        name: "such as 北京",
        children: [{
            "deviceInfos": Object
        }]
    }
}
//equipmentList =formatObj;
logicDeviceData = formatObj


devices = {
    id: device.id,
    type: devices.type,
    status: 0,
    //level : 3,
    pos: posArr
};

pos:
    // pos[0] pos[1] node info 
    function setNodePos(x, y, n) {
        n.ele = n;
        n.pos = {
            x: x,
            y: y
        };
    }

// nodes 
WebMasterLogicData(data) = {
    device: GetCoordinate(device.ip) //  get coordinate on the basis of ip 
}

var logic_lines = [{ s: '67597c57-b5b9-4cbc-a22f-36be397dcabf', t: '85994464-1b2e-4103-9cdf-a500d1456a37', status: 1 }];


var nodes = logic_nodes;
var lines = logic_lines;



function render() {


     setNodesPos();// just add pos:{x:x,y:y } to nodes;
     renderLines();
    renderNodes();
}
render();





getEffectPoints  (sync)

setLineData
    getEffectLines

    reflashEffectPoints (async)
        reflashLine (async)



        getLinesAvgPoints (sync) //获取关联的点

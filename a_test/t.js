{
    	
  let $mydtree = $('.mydtree');
  $mydtree.empty();
  if ($.isEmptyObject(data)) {
      $mydtree.html('<div class="m-t30" style="text-align:center; margin-top:-32px;padding-top:32px">没有数据</div>');
      return;
  }
  tree = new dTree('tree');
  tree.add(0, -1, '');
  tree.add(1, 0, '全网');// 添加一级树节点全网
  // 由于2级树节点骨干网必须在省网上面，且树默认最低节点为设备因此添加两个循环
  var v3= "c89f5031-8737-48a7-a103-398fdafe4a28";
  var v2 = 'guganwang';
  tree.add(v2, 1, '骨干网', "", "", "", "", "", true);
  tree.add(v3, 1, '省网', "", "", "", "", "", true);
 
  for (var n in data) {
      tree.add(data[n].id, v3, data[n].name);
      $.each(data[n].children, function(i, device) {
          if (device.deviceStatus) {
              tree.add(device.id, v2, device.name, device.id, "", "", "", "", true);
              tree.add(device.id, data[n].id, device.name, device.id, "", "", "", "", true);
          } else {
              tree.add(device.id, v2, device.name, device.id, '', '', '/nms/images/off-line.png',"",true);
              tree.add(device.id, data[n].id, device.name, device.id, '', '', '/nms/images/off-line.png',"",true);
          }
      })
  } 

  /*for (var n in data) {
    if(data[n].name == '骨干网'){
       tree.add(data[n].id, 1, data[n].name);// 添加二级树节点骨干网
     break;
    }
  }
  for (var n in data) {
    if(data[n].name != '骨干网'){
     tree.add(v3, 1, '省网');// 添加二级树节点省网
     break;
    }
  }
 
  for (var n in data) {
    if(data[n].name == '骨干网'){// 如果设备所在区域为骨干网，则骨干网下级节点(3级节点)直接添加设备
      $.each(data[n].children, function(i, device) {
               if (device.deviceStatus) {
                   tree.add(device.id, data[n].id, device.name, device.id)
               } else {
                   tree.add(device.id, data[n].id, device.name, device.id, '', '', '/images/off-line.png');
               }
           })
    }else{// 如果设备所在区域不为骨干网，则代表为省网
      tree.add(data[n].id, v3, data[n].name);// 先在省网下级节点(3级节点)再加具体省区域节点
          $.each(data[n].children, function(i, device) {// 具体省区下级节点(4级节点)直接添加设备
              if (device.deviceStatus) {
                  tree.add(device.id, data[n].id, device.name, device.id)
              } else {
                  tree.add(device.id, data[n].id, device.name, device.id, '', '', '/images/off-line.png');
              }
          })
    }

  } */

  tree.clickCallback = function(id) {
      node=null;
      if(this.selectedNode && this.aNodes){
          node=this.aNodes[this.selectedNode]||null;
      }
      if (!node)return ;
      id=node.id;
      var device = selectData.find(item => {
          return item.id === id;
      })
      fun1(device);
  }

// tree.openAll();
// $mydtree.html(tree);
let mydtree = document.querySelector('.mydtree');
mydtree.innerHTML = tree;
// debugger


$(mydtree).find("#dtree0 .dTreeNode").append("<span  style='position: absolute;z-index:-1;right: 5px;' >-----------------------------------------------</span><span id='showMapOne' style='background-color: #FCF7D5;position:absolute;z-index:600;right:5px;cursor: pointer;' >详情</span>")




$($mydtree).unbind("click").on('click', '.dTreeNode', function(e) {
  if(e.target.getAttribute("id")=="showMapOne"){
      function showMapOneTooltip(name) {
          var one=null;
          if(top.SsCenter.deviceInfo.details){
              $.each(top.SsCenter.deviceInfo.details||[],function(oi,x){
                  if(x.name==name){
                      one=x;
                  }     
              })




          }

          if(one){
              top.SsCenter.broadCast("showPhysicalMapTooltip",one.name,{"notTop":true} );
          }else{
              top.SsCenter.broadCast("showPhysicalMapProvince",name,{"notTop":true});
          }
      }

      showMapOneTooltip($(e.target.parentElement).find(".node").html()||$(e.target.parentElement.getElementsByClassName("nodeSel")).html())
      return ;
  }
  if (e.target.nodeName == 'DIV' && e.target.className == 'dTreeNode') {
      var hre = $(this).find('.node').attr('href');
      var links =  $(this).find('.node').html();
      // console.log(hre);
     
      var ifr = document.getElementById('content');
      // console.log(ifr);
      var win = ifr.window || ifr.contentWindow;
      console.log(win);
      
      // for (var n in data) {
      // 	
      // }
      // alert(1);
      // console.log(e);
      // $('.device-layer').show();
      // window.parent.location.href = hre;
      for (var n in data) {
         $.each(data[n].children, function(i, device) {
          if(hre==device.id){
                  // alert(1);
                  if(win.document.getElementById('device-layer')&&win.document.getElementById('device-layer').length>0&&win.document.getElementById('device-layer').style){
                      win.document.getElementById('device-layer').style.display = 'inline';
                  }
            // alert(device.ip);
            if(typeof (device.name) != "undefined"){
              // 设备名称
                      if (win.document.getElementById("divDetailDeviceName")){
                          win.document.getElementById("divDetailDeviceName").innerHTML= device.name;
                      }else{
                          return false;
                      }
            }
            if(typeof (device.ip) != "undefined"){
              // IP
                win.document.getElementById("divDetailDeviceIP").innerHTML= device.ip;
            }
            if(typeof (device.NEType) != "undefined"){
              // 时钟类型
              win.document.getElementById("divDetailClockType").innerHTML= device.NEType;
            }
            if(typeof (device.devicetype) != "undefined"){
              // 设备类型
              win.document.getElementById("divDetailDeviceType").innerHTML= device.devicetype;
            }
            if(typeof (device.Vendor) != "undefined"){
              // 设备厂商
              win.document.getElementById("divDetailDeviceCompany").innerHTML= device.Vendor;
            }
            if(typeof (device.description) != "undefined"){
              // 补充说明
              win.document.getElementById("divDetailDeviceRemark").innerHTML= device.description;
            }
          }
           })
      }
  }
});




}
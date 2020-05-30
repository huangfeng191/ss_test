$("#eInput").get(0).innerHTML = editLine.info.port;
$("#eOutput").get(0).innerHTML = editLine.info.outPort;
$("#nodeDetail").get(0).innerHTML = editLine.info.remarks;
$("#isBackup").val(editLine.info.isBackup||"false");
$("#systemName").get(0).innerHTML = editLine.info.systemName;
$("#map #detail-info").css("display", "none");




setTimeout(function(){
    $('#eInput').get(0).innerHTML = "";
    $('#eOutput').get(0).innerHTML = "";
    $('#systemName').get(0).innerHTML = "";
    $('#nodeDetail').get(0).innerHTML = "";
    adjustHeight();
},300)



function adjustHeight(){
    $(`.bodyItem`).css('height', 'inherit');
   $('#isBackup').css('height', 'inherit');
   var height = document.getElementById('bodyContainer').scrollHeight;
   $(`.bodyItem`).css('height', height);
   $('#isBackup').css('height', height);
}
















$('#nodeDetail').on('input', function(e){
    var value = e.target.innerText;
    if(value.length > 18){
        $(this).blur()
        $('#myModalTips').html(window.top.showTips("物理节点信息不能超过18个字符"));
        $('#myModalTips').modal('show');
        e.target.innerText = e.target.innerText.slice(0,18)
        return;
    }
})
$('#systemName').on('input', function(e){
    var value = e.target.innerText;
    if(value.length > 30){
        $(this).blur()
        $('#myModalTips').html(window.top.showTips("系统名称不能超过30个字符"));
        $('#myModalTips').modal('show');
        e.target.innerText = e.target.innerText.slice(0,30)
        return;
    }
})

$('#eInput').on('input', function(e){
    var value = e.target.innerText;
    if(value.length > 32){
        $(this).blur()
        $('#myModalTips').html(window.top.showTips("设备输入端口不能超过32个字符"));
        $('#myModalTips').modal('show');
        e.target.innerText = e.target.innerText.slice(0,32)
        return;
    }
})
$('#eOutput').on('input', function(e){
    var value = e.target.innerText;
    if(value.length > 32){
        $(this).blur()
        $('#myModalTips').html(window.top.showTips("设备输出端口不能超过32个字符"));
        $('#myModalTips').modal('show');
        e.target.innerText = e.target.innerText.slice(0,32)
        return;
    }
})












var rules={
    nodeDetail:{"length":32,"err":"物理节点信息不能超过18个字符"},
    sysName:{"length":32,"err":"系统名称不能超过30个字符"},
    aSlot:{"length":32,"err":"设备输出端口不能超过32个字符"},
    zSlot:{"length":32,"err":"设备输入端口不能超过32个字符"}
}
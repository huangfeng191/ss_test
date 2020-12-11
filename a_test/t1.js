function deleteNodeGroup(groupId) {
    $.ajax({
        url: "/nms/spring/viewData/deleteNodeGroup?groupId=" + groupId+"&pageObject=2",
        headers: {'token': seD,"repeat":1},
        type: "GET",
        async: false,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        success: function (result) {
            frames.parent.getAllDeviceInfo()
            queryDevice();
            $('#myModalTips').html(tips("操作成功"));

            $('#myModalTips').modal('show')
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { // 状态码
            $('#myModalTips').html(tips("操作失败"));
            $('#myModalTips').modal('show')
            queryDevice();

        }
    });
}
function showTips(e, a) {
    
    return '\n            <div class="modal-dialog" '.
    concat(a ? "style='width:" + a + "' " : "",
        ' >\n            <div class="modal-content" style="margin-top:30%">\n            <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-backdrop="static">&times;</button>\n                <h4 class="modal-title" id="myModalLabel">提示</h4>\n            </div>\n            <div class="modal-body device_add-modal" style="height:120px">\n                <div style=text-align:center;margin-top:3%;>\n                <h4>'
        ).
    concat(e,
        '</h4>\n                </div>\n            </div>\n            <div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">确定</button></div>\n            </div>\n        </div>\n      '
        )
    
    
    }
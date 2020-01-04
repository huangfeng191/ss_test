function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "warning");

        if (level2 == "warning-current") {
            searchTab('current')

        } else if (level2 == "warning-history") {
            searchTab('history')

        } else if (level2 == "warning-handle") {
            searchTab('handle')

        } else if (level2 = "warning-mask") {
            searchTab('shield')

        } else if (level2 = "warning-statistics") {
            Count()
        }
    }

}

doButton('warning-current');
doButton('warning-history');
doButton('warning-handle');
doButton('warning-mask');
doButton('warning-statistics');


function doButton(id, theme, data, second) {
    theme = "warning";
    second = ""
    data = []
    query_flag = 0
    if (id == "warning-current") {


        data.push({ "name": "厂商", "value": $('#changshang').find("option:selected").text() || "" });
        data.push({ "name": "网元名称", "value": $('#device').find("option:selected").text() || "" });
        data.push({ "name": "区域", "value": $('#area').find("option:selected").text() || "" });
        data.push({ "name": "告警源", "value": $('#source').val() || "" });
        data.push({ "name": "告警等级", "value": $('#level').find("option:selected").text() || "" });
        data.push({ "name": "状态", "value": $('#state').find("option:selected").text() || "" });
        data.push({ "name": "告警原因", "value": $('#reason').val() || "" });
        data.push({ "name": "告警编号", "value": $('#code').val() || "" });
        data.push({ "name": "告警开始时间", "value": $('#bgtime').val() || "" });
        data.push({ "name": "告警结束时间", "value": $('#endtime').val() || "" });

        search('current', 1)
    } else if (id == "warning-history") {
        data.push({ "name": "厂商", "value": $('#changshangH').find("option:selected").text() || "" });
        data.push({ "name": "网元名称", "value": $('#deviceH').find("option:selected").text() || "" });
        data.push({ "name": "区域", "value": $('#areaH').find("option:selected").text() || "" });
        data.push({ "name": "告警源", "value": $('#sourceH').val() || "" });
        data.push({ "name": "告警等级", "value": $('#levelH').find("option:selected").text() || "" });
        data.push({ "name": "告警原因", "value": $('#reasonH').val() || "" });
        data.push({ "name": "告警确认人", "value": $('#operatorH').val() || "" });
        data.push({ "name": "状态", "value": $('#stateH1').find("option:selected").text() || "" });
        data.push({ "name": "告警编号", "value": $('#codeH1').val() || "" });
        data.push({ "name": "告警开始时间", "value": $('#bgtimeH').val() || "" });
        data.push({ "name": "告警结束时间", "value": $('#endtimeH').val() || "" });
        data.push({ "name": "告警清除开始时间", "value": $('#bgCtimeH').val() || "" });
        data.push({ "name": "告警清除结束时间", "value": $('#endCtimeH').val() || "" });
        data.push({ "name": "告警确认开始时间", "value": $('#bgOtimeH').val() || "" });
        data.push({ "name": "告警确认结束时间", "value": $('#endOtimeH').val() || "" });

        search('history', 1)
    } else if (id == "warning-handle") {
        data.push({ "name": "厂商", "value": $('#vendor').find("option:selected").text() || "" });
        data.push({ "name": "设备类型", "value": $('#deviceDeal').find("option:selected").text() || "" });
        data.push({ "name": "区域", "value": $('#areaHandle').find("option:selected").text() || "" });
        data.push({ "name": "告警等级", "value": $('#activeAlarmLevel').find("option:selected").text() || "" });
        search('handle', 1)
    } else if (id == "warning-mask") {
        data.push({ "name": "设备类型", "value": $('#shieldQdeviceType').find("option:selected").text() || "" });
        data.push({ "name": "告警等级", "value": $('#shield_level').find("option:selected").text() || "" });
        data.push({ "name": "是否启用", "value": $('#shield_enable').find("option:selected").text() || "" });
        search('shield', 1)
    } else if (id == "warning-statistics") {
        Count()
    }
    if (query_flag == 1) {
        top.SsCenter.doLog(id, theme, data, second);
    }

}

var keys = []
$.each($("#handle").find("label"), function(oi, v) {
    var fields = ["厂商", "设备类型", "区域", "告警等级"]
    var text = v.innerText.replace(":", "")
    if (fields.includes(text)) {
        var next_ele = $(v).next()[0];
        if (next_ele.getAttribute("id")) {
            keys.push(text + " " + next_ele.getAttribute("id"))
        }
    }


})
console.log(keys.join("\n"));


$("#handle").find("label")[0].innerText.replace(":", "").includes(["厂商"])

$($("#handle").find("label")[0]).next()[0]
$($("#handle").find("label")[0]).next()[0].getAttribute("id")









function getQueryArrays({ dom, fields = [] }) {


    var keys = []
    var ifm = document.getElementById("content").contentWindow;
    var domE = ifm.document.getElementById(dom);
    $.each($(domE || []).find("label"), function(oi, v) {

        var text = v.innerText.replace(":", "")
        if (fields.includes(text)) {
            var next_ele = $(v).next()[0];
            if (next_ele.getAttribute("id")) {
                var one = text + " " + next_ele.getAttribute("id")
                if (next_ele.nodeName == "SELECT") {
                    one += " ?s"
                }
                keys.push(one)
            }
        }


    })
    if (keys.length > 0) {
        console.log(keys.join("\n"));
    }

}

getQueryArrays({ dom: "handle", "fields": ["厂商", "设备类型", "区域", "告警等级"] })







// performance-current 当前性能
// performance-history 历史性能
// performance-setting 性能配置
// performance-statistics 性能统计



function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "warning");

        if (level2 == "performance-current") {
            queryInfo(evt, 'current', 'currentChartButton')
        } else if (level2 == "performance-history") {
            queryInfo(evt, 'history', 'historyChartButton')
        } else if (level2 == "performance-setting") {
            queryInfo(evt, 'set', 'settingQueryButton')
        } else if (level2 = "performance-statistics") {
            getPerformanceStatistics()
        }
    }

}

doButton('performance-current', '', '', '', event)
doButton('performance-history', '', '', '', event)
doButton('performance-setting', '', '', '', event)
doButton('performance-statistics', '', '', '', event)


function doButton(id, theme, data, second, event) {
    theme = "performance";
    second = ""
    data = []
    query_flag = 0
    if (id == "performance-current") {

        data.push({ "name": "设备", "value": $('[qfield=deviceId]').find("option:selected").text() || "" });
        data.push({ "name": "类型", "value": $('#do_performanceFrameM').find("option:selected").text() || "" });
        data.push({ "name": "端口", "value": $('[qfield=port]').find("option:selected").text() || "" });
        data.push({ "name": "模板", "value": $('[qfield=modelType]').find("option:selected").text() || "" });

        queryInfo(event);
    } else if (id == "performance-history") {
        data.push({ "name": "设备", "value": $('[qfield=deviceId]').find("option:selected").text() || "" });
        data.push({ "name": "类型", "value": $('#do_performanceFrameM').find("option:selected").text() || "" });
        data.push({ "name": "端口", "value": $('[qfield=port]').find("option:selected").text() || "" });
        data.push({ "name": "模板", "value": $('[qfield=modelType]').find("option:selected").text() || "" });
        data.push({ "name": "开始时间", "value": $('#startTime').val() || "" });
        data.push({ "name": "结束时间", "value": $('#endTime').val() || "" });
        queryInfo(event)
    } else if (id == "performance-setting") {
        data.push({ "name": "设备", "value": $('[qfield=deviceId]').find("option:selected").text() || "" });
        data.push({ "name": "类型", "value": $('#just_performanceFrameM').find("option:selected").text() || "" });
        data.push({ "name": "端口", "value": $('[qfield=port]').find("option:selected").text() || "" });
        queryInfo(event, 'set', '', 1)
    } else if (id == "performance-statistics") {
        getPerformanceStatistics()
        data.push({ "name": "设备", "value": $('#dirver_name').val() || "" });
    }
    if (query_flag == 1) {
        top.SsCenter.doLog(id, theme, data, second);
    }

}




<li level2="help-knowledge"   class="active"><a href="#knowledge" data-toggle="tab" onclick="doSecondTab(event)">知识库</a></li  >
<li level2="help-station"  ><a href="#details" data-toggle="tab" onclick="doSecondTab(event)">站点详情</a></li>  
<li level2="help-area"  ><a href="#area" data-toggle="tab" onclick="doSecondTab(event)">区域详情</a></li>  
<li level2="help-device"  ><a href="#device" data-toggle="tab" onclick="doSecondTab(event)">设备详情</a></li>  
<li level2="help-operation"  ><a href="#manual" data-toggle="tab" onclick="doSecondTab(event)">操作手册</a></li>  
<li level2="help-online"  ><a href="#manual2" data-toggle="tab" onclick="doSecondTab(event)">在线帮助</a></li>  




doButton('help-knowledge')
doButton('help-station')
doButton('help-area')
doButton('help-device')
doButton('help-operation')
doButton('help-online')

function doButton(id, theme, data, second) {
    theme = "help";
    second = ""
    data = []
    query_flag = 0
    if (id == "help-knowledge") {
        getUserInfo(null,1)
    } else if (id == "help-station") {
        getSiteListByPage(1)
    } else if (id == "help-area") {
        
    } else if (id == "help-device") {
        getDeviceListByPage(1)
    } else if (id == "help-operation") {
        
    } else if (id == "help-online") {
        
    }
    if (query_flag == 1) {
        top.SsCenter.doLog(id, theme, data, second);
    }
}


doSecondTab(event)

function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "warning");

        if (level2 == "help-knowledge") {
            searchTab('knowledge')

        } else if (level2 == "help-station") {
            searchTab('details')

        }else if (level2 == "help-area") {
            searchTab('area')

        }else if (level2 == "help-device") {
            searchTab('device')

        }else if (level2 == "help-operation") {
            

        }else if (level2 == "help-online") {
            

        }
    }

}




// operation 

安全管理 system-security doThirdMenu('system-security')
日志管理 system-log doThirdMenu('system-log')
接口管理 system-interface doThirdMenu('system-interface')
网管监测 system-monitor doThirdMenu('system-monitor')



doButton('system-security');
doButton('system-log');
doButton('system-interface');
doButton('system-monitor');

function doButton(id, theme, data, second) {
    theme = "system";
    second = ""
    data = []
    query_flag=0
    if (id == "system-security") {
        searchTab('current')
    }else if (id == "system-log") {
        searchTab('current')
    }else if (id == "system-interface") {
        searchTab('current')
    }else if (id == "system-monitor") {
        searchTab('current')
    }
    if(query_flag==1){
        top.SsCenter.doLog(id, theme, data, second);
    }
}


doSecondTab(event)
doSecondTab(event)
doSecondTab(event)
doSecondTab(event)

function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "system");

        if (level2 == "system-security") {
            doThirdMenu('system-security')

        } else if (level2 == "system-log") {
            doThirdMenu('system-log')

        } else if (level2 == "system-interface") {
            doThirdMenu('system-interface')

        } else if(level2 == "system-monitor") {
            doThirdMenu('system-monitor')

        }
    }

}


// 原有的代码是需要修改的

//  将第三级的目录记录到路径中

// 不要急,只能一个个来













//  operation 



数据统计 operation-datas doThirdMenu('operation-datas')
年度报表 operation-year doThirdMenu('operation-year')
综合分析 operation-allocation doThirdMenu('operation-allocation')
调整记录 operation-adjust searchTab('record')
环境管理 operation-environment searchTab('manage')



doButton('operation-datas');
doButton('operation-year');
doButton('operation-allocation');
doButton('operation-adjust');
doButton('operation-environment');



function doButton(id, theme, data, second) {
    theme = "operation";
    second = ""
    data = []
    query_flag=0
    if (id == "operation-datas") {
        searchTab('current')
    }else if (id == "operation-year") {
        searchTab('current')
    }else if (id == "operation-allocation") {
        searchTab('current')
    }else if (id == "operation-adjust") {
        searchTab('current')
    }else if (id == "operation-environment") {
        searchTab('current')
    }
    if(query_flag==1){
        top.SsCenter.doLog(id, theme, data, second);
    }
}


doSecondTab(event)


function doSecondTab(evt) {
    var level2 = evt.target.parentElement.getAttribute("level2");
    if (level2) {
        top.SsCenter.doLog(level2, "operation");

        if (level2 == "operation-datas") {
            doThirdMenu('operation-datas')

        } else if (level2 == "operation-year") {
            doThirdMenu('operation-year')

        } else if (level2 == "operation-allocation") {
            doThirdMenu('operation-allocation')

        } else if(level2 == "operation-adjust") {
            searchTab('record')

        } else if (level2 == "operation-environment") {
            searchTab('manage')

        }
    }
}


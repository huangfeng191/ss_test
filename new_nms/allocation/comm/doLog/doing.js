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
    query_flag=0
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

        search('current',1)
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

        search('history',1)
    } else if (id == "warning-handle") {
        data.push({"name":"厂商","value":$('#vendor').find("option:selected").text()||""});
        data.push({"name":"设备类型","value":$('#deviceDeal').find("option:selected").text()||""});
        data.push({"name":"区域","value":$('#areaHandle').find("option:selected").text()||""});
        data.push({"name":"告警等级","value":$('#activeAlarmLevel').find("option:selected").text()||""});
        search('handle',1)
    } else if (id == "warning-mask") {
        data.push({"name":"设备类型","value":$('#shieldQdeviceType').find("option:selected").text()||""});
        data.push({"name":"告警等级","value":$('#shield_level').find("option:selected").text()||""});
        data.push({"name":"是否启用","value":$('#shield_enable').find("option:selected").text()||""});
        search('shield',1)
    } else if (id == "warning-statistics") {
        Count()
    }
    if(query_flag==1){
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









function getQueryFields({ dom, fields = [] }) {


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
    if (keys.length>0){
        console.log(keys.join("\n"));
    }

}

getQueryFields({dom:"handle","fields":["厂商", "设备类型", "区域", "告警等级"]})
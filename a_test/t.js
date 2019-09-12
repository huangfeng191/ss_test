1 选择SM2000网元，配置输出卡的warmup、holdover等值的时候，无法配置成功，bug修复
2 选择SM2000网元设备上如果没有插输入卡slot2卡，那么在网管上，点击“gnss2”依然显示有配置内容，bug修复
3 配置管理无法查看到添加的SM2000扩展箱设备bug修复


系统配置模块开发：查询、删除、新增、修改
首页告警数与告警列表联动、首页中心地图，与左下脚地图导航等
与开发公司人员需求整理及沟通完全情况
sm2000设置bug 修改


local 3



          __eMapGlobalVar.container_eMapMenu.curChart.refreshAllData();

            var a=__eMapGlobalVar.container_eMapMenu.curChart.geteMap().getOption().series.filter(function(x){return x.name=="points"})
            if(a&&a.length>0){
                if(a[0].data&&a[0].data.length>0){
                    a[0].data.map(function(v){
                        if(v.name==top.SsCenter.deviceInfo.current.name){
                            getDeviceDetail($("#map #detail-info") ,v.value[2],top.SsCenter.deviceInfo.current.name);
                        }
                    })
                }
                
                
            }

local 2 

local 5

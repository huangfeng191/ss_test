function search(fg,isFirst) {
    console.log('---------search---------')
    var warningId = '';
    var reason = '';
    var source = '';

    if(fg == 'current'){
      warningId = $('#code').val();
      reason = $('#reason').val();
      source = $('#source').val();
    }
  

    currentFG = fg;
    if (fg == "current" || fg == "history") { // 当前 历史
      var mauto = {
        vandor: '', //厂商
        area: '', //区域
        token: '',
        page: 1,
        pageSize: 10,
        deviceId: "", //设备
        state: '1,2', //状态
        activeAlarmSource: "", //告警源
        activeAlarmLevel: "", //级别
        activeAlarmReason: "", //告警原因
        activeAlarmId: "", //告警id
        activeAlarmtimeBgn: "", //开始时间
        activeAlarmtimeEnd: "", //止时间
        clearTimeBgn: "", //清除开始时间
        clearTimeEnd: "", //清除止时间
        confirmTimeBgn: "", //确认开始时间
        confirmTimeEnd: "", //确认人止时间
        confirmOperator: "" //确认人 user: "admin",
      };
      if (fg == "current") { // 当前
        var bgtime = document.getElementById('bgtime').value ? document.getElementById('bgtime').value + ' 00:00:00' : '';
        var endtime = document.getElementById('endtime').value ? document.getElementById('endtime').value + ' 23:59:59' : '';

        var flag = isAlert(bgtime, endtime)
        
        if(flag == true){
          $('#myModalTips').html(window.top.showTips('结束时间不能在开始时间之前'));
          $('#myModalTips').modal('show');
          return;
        }
        else if(flag == '请选择结束时间' || flag == '请选择开始时间'){
          $('#myModalTips').html(window.top.showTips(flag));
          $('#myModalTips').modal('show');
          return;
        }
        if(bgtime.length==16){
          bgtime=bgtime+":00"
        }
        if(endtime.length==16){
          endtime=endtime+":59"
        }
        // debugger
        mauto.vandor = document.getElementById('changshang').value;
        mauto.deviceId = document.getElementById('device').value;
        mauto.area = document.getElementById('area').value;
        mauto.activeAlarmSource = document.getElementById('source').value;
        mauto.activeAlarmLevel = document.getElementById('level').value;
        mauto.activeAlarmReason = document.getElementById('reason').value;
        mauto.activeAlarmtimeBgn = bgtime;
        mauto.activeAlarmtimeEnd = endtime;
        mauto.confirmOperator = document.getElementById('operator').value;
        var sta = document.getElementById('state').value;
        var sta2 = document.getElementById('state2').value;
        mauto.activeAlarmId = document.getElementById('code').value;
        mauto.token = sessionID;

        if(sta == ""){
          if(sta2 == ""){
            mauto.state = "1,2";
          }else{
            mauto.state = sta2;
          }
        }else if(sta2 == ""){
          mauto.state = sta;
        }else if(sta == sta2){
          mauto.state = sta;
        }else{
          mauto.state = "1,2";
        }
        // if (typeof sta == "undefined" || sta == null || sta == "") {
        //   mauto.state = "1,2";
        // } else {
        //   mauto.state = document.getElementById('state').value;
        // }
      } 

      mauto.page=1
      if (fg == "current") {

        if($("#current_pagination").data("pagination_select")){
              mauto.page = $("#current_pagination").data("pagination").currentPage + 1;
          $("#current_pagination").data("pagination_select",false)
        }
        mauto.pageSize = $("#current_pagination").data("pagination").itemsOnPage;
        // mauto.pageSize = 30;

      } else if (fg == "history") {

        if($("#history_pagination").data("pagination_select")){
          mauto.page = $("#history_pagination").data("pagination").currentPage + 1;
          $("#history_pagination").data("pagination_select",false)
        }
        mauto.pageSize = $("#history_pagination").data("pagination").itemsOnPage;

      }
     
      Loading.Show();

      query_flag=1;
      search.params = mauto
      top.SsServer.getActiveAlarmFilter(mauto, fg).done(function (ret) {
        getNewestData.data = ret.content;
        if (fg == "current") {
          Loading.Hide();
          if (ret) {
            var option = {
              "onPageClick": function (pageNumber, event) {
                search("current");
              }

            }
            option.items = ret.totalElements
          
              option.currentPage = mauto.page
          
            //option.currentPage = mauto.page;

            $("#current_pagination").pagination(option);
          }


        } else if (fg == "history") {
          Loading.Hide();
          if (ret) {
            var option = {
              "onPageClick": function (pageNumber, event) {
                search("history");
              }

            }
            option.items = ret.totalElements
          
              option.currentPage = mauto.page
            

            $("#history_pagination").pagination(option);
          }


        }


        if (typeof ret == "undefined" || ret == null || ret == "") {
          if (fg == "current") {
            $("#currentAlarm_tab").empty();
            //$("#currentAlarm_tab").append("<tr><td>" + "无数据" + "</td></tr>")
            $("#currentAlarm_tab").append("<div>无数据</div>");
          } 
        } else {
          var r = ret.content;

          if (fg == "current") {
            $("#currentAlarm_tab").empty();
            if (ret.content.length == 0) {
              //$("#currentAlarm_tab").append("<tr><td>" + "无数据" + "</td></tr>")
              $("#currentAlarm_tab").append("<div>无数据</div>");
            } else {
              alarmArr = ret.content;
              $.each(r, function (i, item) {
                var dd;
                var d = item[currentAlarm_tab[3]];
                switch (d) {
                  case 'CRITI':
                    dd = "严重";
                    break;
                  case 'MAJOR':
                    dd = "主要";
                    break;
                  case 'MINOR':
                    dd = "次要";
                    break;
                  case 'EVENT':
                    dd = "事件";
                    break;
                };
                var ee;
               
                var aa;
                var a = getDeviceAttr(item.deviceId, 'vendor'); // item[currentAlarm_tab[1]].vendor;
                switch (a) {
                  case 'hw':
                    aa = "华为";
                    break;
                  case 'ss':
                    aa = "赛思";
                    break;
                  case 'dt':
                    aa = "大唐";
                    break;
                  case 'xt':
                    aa = "讯腾";
                    break;
                };
                var cc;
                var c = item[currentAlarm_tab[9]];
                switch (c) {
                  case 0:
                    cc = "消失";
                    ee = "未确认";
                    break;
                  case 1:
                    cc = "产生";
                    ee = "未确认";
                    break;
                  case 2:
                    cc = "确认";
                    ee = "已确认";
                    break;
                  case 3:
                    cc = "清除";
                    ee = "未确认";
                    break;
                };
                var td = "<td data-id=" + item.id + ">";
                $("#currentAlarm_tab").append(`
                    <div class='row' id='${item.id}' onclick='aaa("${item.id}")'>
                      <div data-id="${item.id}" class='item item0'>
                        <span class='circle pos ${LEDState[item[currentAlarm_tab[3]]]}'></span>
                      </div><div data-id="${item.id}" class='item item3'>${item.alarmId}</div><div data-id="${item.id}" class='item item1'>${item[currentAlarm_tab[0]]}</div><div data-id="${item.id}" class='item item2'><span title='${getDeviceAttr(item.deviceId, 'name')}'>${getDeviceAttr(item.deviceId, 'name')}</span></div><div data-id="${item.id}" class='item item4'>${cc}</div><div data-id="${item.id}" class='item item5'><span title="${en2cn(item[currentAlarm_tab[2]])}">${en2cn(item[currentAlarm_tab[2]])}</span></div><div data-id="${item.id}" class='item item6'>${dd}</div><div data-id="${item.id}" class='item item7'><span title='${item[currentAlarm_tab[4]]}'>${item[currentAlarm_tab[4]]}</span></div><div data-id="${item.id}" class='item item8'>${formatDateTime(item[currentAlarm_tab[5]])}</div><div data-id="${item.id}" class='item item9'>${ee}</div><div data-id="${item.id}" class='item item10'>${aa}</div><div data-id="${item.id}" class='item item11'>${getDeviceAttr(item.deviceId, 'areaId')}</div><div data-id="${item.id}" class='item' style='display:none' data-id="${item.id}">${item[currentAlarm_tab[10]]}</div>
                    </div>
                  `);
              })
              setTableHead()
            }
          } 
        }

      })



    } 
  };

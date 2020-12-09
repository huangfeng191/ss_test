var a = { "code": 100000, "data": "{\"st1list\":[{\"Reach\":\"377\",\"Disp (ms)\":\"0.004\",\"Poll (s)\":\"64\",\"Delay (ms)\":\"0.000\",\"Mode\":\"sys.peer; being polled\",\"Stratum\":\"0\",\"Offset (ms)\":\"0.000\",\"Remote\":\"*127.127.47.0\",\"Refid\":\".GNSS.\"}],\"st2list\":[{\"Reach\":\"0\",\"Disp (ms)\":\"0.000\",\"Poll (s)\":\"1024\",\"Delay (ms)\":\"0.000\",\"Mode\":\"reject; symmetric active\",\"Stratum\":\"16\",\"Offset (ms)\":\"0.000\",\"Remote\":\"1.1.1.1\",\"Refid\":\".INIT.\"},{\"Reach\":\"0\",\"Disp (ms)\":\"0.000\",\"Poll (s)\":\"1024\",\"Delay (ms)\":\"0.000\",\"Mode\":\"reject; symmetric active\",\"Stratum\":\"16\",\"Offset (ms)\":\"0.000\",\"Remote\":\"2.1.1.2\",\"Refid\":\".INIT.\"}]}" }
a.data = JSON.parse(a.data)




var temp_table = function({ data, prefix = "", table_title = "", title = "", dom = "deviceData", isCRUD = false }) {

    if (table_title) {
        table_title = `
      <span style="    font-size: 16px; padding: 20px; height: 30px; line-height: 30px;">
         ${table_title}
     </span>
      `
    }
    ti = []
    da = []
    data.forEach(function(v) {
        ti.push(`<th class="excel_key t-middle" style="width:100px">${v}</th>`)
        da.push(`<td class="excel_value t-middle ">{{${"item."+v.replace(/[ ()]/g,"")}}}</td>`)
    })
    var add={
      "th":`<th translate="OPERATION" style="width: 100px;" class="t-middle">操作</th>`,
      "option":` 
               <td class="text-center">
                  <span >
                  <span title="edit" ng-click="edit(item)" class="glyphicon glyphicon-cog editBtn" style=""></span>
                  |
                  </span>
                  <span title="delete" ng-click="delete(item)" class="glyphicon glyphicon-trash deleteBtn" style=""></span>
               </td>
      `
   }


    return `

   <div class="row tableTs" id="pre">
     ${table_title}
     <div class="col-md-12">
       <table class="excel table table-striped table-bordered table-hover table-condensed">
         <thead>
           <tr class="table-tr-title">
             ${ti.join("\n             ")}
            ${  isCRUD?add.th:''}
           </tr>
         </thead>
         <tbody>
           <tr ng-repeat="item in ${dom+(  prefix?"."+prefix:'')}">
             ${da.join("\n             ")}
             ${  isCRUD?add.option:''}
           </tr>
           <tr ng-if="${dom+(  prefix?"."+prefix:'')}.length == 0">
             <td colspan="8" class="textCenter">
               <span translate="NULL_DATA">暂无数据！</span>
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
   
   `
}

function temp_modual ({ data, prefix = "", table_title = "", title = "", dom = "deviceData", isCRUD = false }) {
   var content_part=temp_table({ data, prefix, table_title, dom, isCRUD })
   if(title){
      title=`
      <h3 translate="${title}">${title}</h3>
      <div class="boxH"></div>
      `
   }
   var add={
      "button":` <button class="btn btn-primary btn-md pull-right" translate="ADD" ng-click="addInfo()" style="margin-top: 3px;">添加</button>`
   }
   if(isCRUD){
    
   }
   var temp= `
   <div class="content-s">
      ${title}
   <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 querySeach">
     <div>
       <label translate="CURRENT_DEVICE" class="control-label">当前设备</label>
       : {{devIP}}
       <select ng-model="devID" style="width:120px;height: 26px;" class="form-inline input-sm"
         ng-options="m.name group by m.area.name for m in deviceInfo" ng-change="macChange(devID)">
         <option value="" translate="PLEASE_SELECT">请选择</option>
       </select>
 
       <button class="btn btn-primary btn-md" translate="SEARCH" ng-click="search()" style="">搜索</button>      
      ${isCRUD?add.button:""}
     </div>
     <br>
   </div>
   <br>
 
 
   ${content_part}
 
 
   
 </div>`
    return temp
}

function getTitle (field) {
    var f = field.split("\n")
    arr = f.map(function(v) {
        return v.replace(/<th.*?>/g, "").replace(/<\/th>/g, "").trim()
    })

    return arr.filter(function(x) {
        return x
    });
}



var field = `
<th>Remote</th>
<th>Mode</th>
<th>Refid</th>
<th> Stratum</th>
<th>Reach</th>
<th>Offset (ms)</th>
<th>Delay (ms)</th>
<th>Disp (ms) </th>
<th> Poll (s)</th>
`
// data,prefix="",title="",dom="deviceData"
var r = getTitle(field);
var t = temp_table({ data: r, prefix: "st1list", title: "Hardware Reference Clock" })
var t = temp_table({ data: r, prefix: "st2list", title: "NTP Associations" })




field = `
<th width="">Role</th>
<th width="">Address</th>
<th width="">Port</th>
<th width=""> Prefer</th>
<th width="">Burst</th>
<th width="">MinPoll</th>
<th width="">MaxPoll</th>
<th width="">Symmetric</th>
<th width="">TTL</th>
`
var title="NTPdConfig"

r = getTitle(field);

t = temp_table({ data: r,title:title, prefix: "st1list", table_title: "", isCRUD: 1 })
t=temp_modual({ data: r,title:title, prefix: "st1list", table_title: "", isCRUD: 1 })


console.log(t)
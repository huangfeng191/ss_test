function formOuter({fields}){
   var temp =`
   <div class="row tableTs" id="pre">
   <form class="excel form-horizontal formBiao">
     <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5 fa15x  b-radius padding-l padding-r padding-b15 t-right">
         ${fields}

     </div>

     <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 fa15x  b-radius ">
       <div class="form-group" style="border-top:0;text-align: center;">
         <button ng-disabled="configSubD" ng-click="configSub()" translate="SAVE" type="button" class="btn btn-primary"
           translate="command">保存</button>
       </div>
     </div>
   </form>
 </div>
   `

}

function temp_moudle ({ title = "" ,dom=""}) {
   var fields=formToFieldItems({dom})
  var content_part=formOuter({fields})
   if(title){
      title=`
      <h3 translate="${title}">${title}</h3>
      <div class="boxH"></div>
      `
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
     
     </div>
     <br>
   </div>
   <br>
 
 
   ${content_part}
 
 
   
 </div>`
    return temp
}
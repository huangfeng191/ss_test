
       <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       NTP名单控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerListEnable" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerListEnable == 0" value="0">不使用名单</option>
<option ng-selected="deviceContent.ntpServerListEnable == 1" value="1">使用白名单</option>
<option ng-selected="deviceContent.ntpServerListEnable == 2" value="2">使用黑名单</option>


         </select>
       </div>
     </div>

           

      <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       Autokey控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerAutoKeyEnable" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerAutoKeyEnable == 0" value="0">不使用autokey加密</option>
<option ng-selected="deviceContent.ntpServerAutoKeyEnable == 1" value="1">使用autokey加密</option>


         </select>
       </div>
     </div>

           

      <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       MD5控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerMd5Enable" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerMd5Enable == 0" value="0">不使用MD5加密</option>
<option ng-selected="deviceContent.ntpServerMd5Enable == 1" value="1">使用MD5加密</option>



         </select>
       </div>
     </div>

           

      <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       NTP广播控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerBroadcastEnable" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerBroadcastEnable == 0" value="0">不使用广播授时</option>
<option ng-selected="deviceContent.ntpServerBroadcastEnable == 1" value="1">使用广播授时</option>

         </select>
       </div>
     </div>

           

      <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       NTP组播控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerManycastEnable" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerManycastEnable == 0" value="0">不使用组播授时</option>
<option ng-selected="deviceContent.ntpServerManycastEnable == 1" value="1">使用组播授时</option>



         </select>
       </div>
     </div>

           

      <div class="form-group">
       <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
       NTP网口状态控制
       </label>
       <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
         <select ng-model="deviceContent.ntpServerConfigPortState" class="excel_value form-control input-sm">
           <option translate="PLEASE_SELECT" value="">请选择</option>
           <option ng-selected="deviceContent.ntpServerConfigPortState == 0" value="0">禁用</option>
<option ng-selected="deviceContent.ntpServerConfigPortState == 1" value="1">启用</option>
<option ng-selected="deviceContent.ntpServerConfigPortState == 2" value="2">重启</option>
         </select>
       </div>
     </div>

           
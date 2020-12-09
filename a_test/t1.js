<div class="row tableTs" id="pre">
  <span>
    Hardware Reference Clock
  </span>
  <div class="col-md-12">
    <table class="excel table table-striped table-bordered table-hover table-condensed">
      <thead>
        <tr class="table-tr-title">
          <th class="excel_key t-middle" style="width:100px">槽位号</th>


        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in frameConfigList">
          <td class="excel_value">{{item.ioStatusSlotID}}</td>
        </tr>
        <tr ng-if="frameConfigList.length == 0">
          <td colspan="8" class="textCenter">
            <span translate="NULL_DATA">暂无数据！</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
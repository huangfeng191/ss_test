
//可以选择的图表
// 1 setRemark   :  "可选择分类": 属性

var remarks={
  "business":{
    default:true
  },
  "sample":{
    // default:true
  },
  "scatter":{
    
  }
    
  }





  optionBusiness={
    // 加载最简单的地图
      // 加载 bmap 组件
      tooltip : {
        formatter: function(params) {
            var stock_basic=params.value[2];

          

            return  "股票全称:"+stock_basic.fullname+
                " <br/> 股票代码:"+stock_basic.ts_code+
                " <br/> 所属行业:"+stock_basic.industry+
                " <br/> 上市状态 :"+stock_basic.list_status+
                " <br/> 上市日期 :"+stock_basic.list_date+
                " <br/> 沪深港:"+stock_basic.is_hs+
                " <br/> 所在地域:"+stock_basic.area+
                " <br/> 公司介绍:<div class='divC' style='height:100px;'>"+stock_basic.introduction+"</div>"+
                " <br/> 主要业务:<div class='divC' style='height:100px;'>"+stock_basic.main_business+"</div>"+
                // " <br/> 员工人数:<div >"+stock_basic.employees+"</div>"+
                " <br/> 所在地域:<div class='divC' style='height:80px;'>"+stock_basic.business_scope+"</div>";
                // " <br/> 主要业务:"+stock_basic.main_business+
                // " <br/> 员工人数,:"+stock_basic.employees+
                // " <br/> 所在地域:"+stock_basic.business_scope;
        }
    },
      bmap: {
          // 百度地图中心经纬度
          center: [120.13066322374, 30.240018034923],
          // 百度地图缩放
          zoom: 5, // 
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        //   mapStyle: mapStyle
      },
      series: [{
          type: 'scatter',
          // 使用百度地图坐标系
          coordinateSystem: 'bmap',
          // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
          data: [ [120, 30, 1] ]
      }]
  }
  optionSample={
    // 加载最简单的地图
      // 加载 bmap 组件
      bmap: {
          // 百度地图中心经纬度
          center: [120.13066322374, 30.240018034923],
          // 百度地图缩放
          zoom: 5,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: {}
      },
      series: [{
          type: 'scatter',
          // 使用百度地图坐标系
          coordinateSystem: 'bmap',
          // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
          data: [ [120, 30, 1] ]
      }]
  }











optionScatter = {
  // backgroundColor: '#404a59',
  title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
          color: '#fff'
      }
  },
  tooltip : {
      trigger: 'item'
  },
  bmap: {
      center: [104.114129, 37.550339],
      zoom: 5,
      roam: true,
      mapStyle:{}
  },
  series : [
      {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data:[],
          symbolSize: function (val) {
              return val[2] / 10;
          },
          label: {
              normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
              },
              emphasis: {
                  show: true
              }
          },
          itemStyle: {
              normal: {
                  color: '#ddb926'
              }
          }
      }]
};









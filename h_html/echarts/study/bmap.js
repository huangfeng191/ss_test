
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
      bmap: {
          // 百度地图中心经纬度
          center: [120.13066322374, 30.240018034923],
          // 百度地图缩放
          zoom: 5, // 
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: mapStyle
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



var data = [
  {name: '海门', value: 911},
  {name: '鄂尔多斯', value: 12},
  {name: '招远', value: 12},
  {name: '舟山', value: 12},
  {name: '齐齐哈尔', value: 14},
  {name: '盐城', value: 15},
  {name: '赤峰', value: 16},

];

var geoCoordMap = {
  '海门':[121.15,31.89],
  '鄂尔多斯':[109.781327,39.608266],
  '招远':[120.38,37.35],
  '舟山':[122.207216,29.985295],
  '齐齐哈尔':[123.97,47.33],
  '盐城':[120.13,33.38],
  '赤峰':[118.87,42.28],
  
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
          res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
          });
      }
  }
  return res;
};



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
          data: convertData(data),
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








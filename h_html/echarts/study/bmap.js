
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



optionSample = {
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








//可以选择的图表
// 1 setRemark   :  "可选择分类": 属性

var remarks={
"sample":{

},
"sample1":{
  default:true
}
  
}


optionSample1= {
  xAxis: {
    type: 'category',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [{
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
}
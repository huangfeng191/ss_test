# 2019-08-05

goal:
    1 消除黑屏bug ： 设备添加删除修改正常
    2 链路管理：
    3 网元组管理 ：




    949 画线时触发 ，


直接把线取出来
直接把点取出来



group :



series: {
    id: 'points',
    name: 'points',
    type: 'custom',
    coordinateSystem: 'geo',
    itemStyle: {
        borderColor: '#BEBEBE',
        borderWidth: 1,
        color: function (params) {
            return pointStatus[params.data.value[2].status];
        }
    },
    renderItem: echarts.util.curry(renderItem, _eMap, points, pointIndex),
    zlevel: 99,
    data: points
}



hide:show base on point 

point conditions:





新增 删除 网元组 时
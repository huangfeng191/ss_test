
```js
// 点数据
setPointData

pointData

    function getEffectPoints(isShow) {
        var effectPoints = [];
		pointData.forEach(function (item, i) {
            var position = _eMap.convertToPixel('geo', [item.value[0], item.value[1]]);
			if (_eMap.containPixel('geo', position)) {
				if (isShow) {
					if (typeof(item.value[2].parent) == 'undefined' || item.value[2].parent == '' || item.value[2].show) {
						effectPoints.push(item);
					}
				}
				else effectPoints.push(item);
			}
		});
		return effectPoints;
    }

// 按钮绑定
reflashGraphic







```
- dragPointDataClear 还原右下角的可拖动按钮
- reflashGraphic 绑定按钮

- init 
  -dragPointDataClear 

- setPointData
  -dragPointDataClear 
  

- onPointDragEnd 拖动结束时
  - reflashGraphic 绑定按钮

- reflashAllData
  - getEffectPoints
    -pointData 
  - reflashEffectPoints
  - reflashGraphic

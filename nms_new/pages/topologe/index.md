current 物理拓扑
handle 逻辑拓扑
shield 网管拓扑    [http://raphaeljs.com]2.2.2
count 拓扑信息统计



```html

<div class="tab-pane fade chart" id="shield">
        <div>
            <div class="net-chart" id="net-chart" ondrop="drop2(event)"
                ondragover="allowDrop(event)"></div>
        </div>
</div> 

```

# 逻辑拓扑
## webapp\lib\logic-chart.js
```html

    <div class="tab-pane fade chart" id="handle">
        <div class="chart-warpper">
            <div class="logic-chart" id="logic-chart" ondrop="drop(event)"
                ondragover="allowDrop(event)"></div>
        </div>
	</div>

```
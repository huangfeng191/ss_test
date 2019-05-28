```js  
// points and lines status
var pointStatus = {
    gery: 'gery',
    greent: '#00EC00',
    yellow: 'yellow',
    pink: 'pink',
    red: 'red',
    Normal: '#00EC00',
    SWarning: '#FF0000',
    MWarning: '#FE7B1A',
    LIWarning: '#F5D300',
    Event: '#0991F5',
	Static: '#FFFFFF',
    StaticNormal: '#00EC00',
    StaticSWarning: '#FF0000',
    StaticMWarning: '#FE7B1A',
    StaticLIWarning: '#F5D300',
    StaticEvent: '#0991F5'
};

var lineStatus = {
    Normal: '#00EC00',
    SWarning: '#FF0000',
    MWarning: '#FE7B1A',
    LIWarning: '#F5D300',
    Event: '#0991F5',
	Static: '#000'
};
```


SSM 编码  优选顺序   质量等级描述  对应我国时钟等级
0010     最高       QL_PRC        1级基准时钟          PLR 也是一级基准时钟
0000     ↓          QL_UNK        质量等级未知
0100     ↓          QL_SSUT       2级节点时钟
1000     ↓          QL_SSUL       3级节点时钟
1011     ↓          QL_SEC        SDH网元设备时钟
1111     最低        QL_DNU       同步信号不可用


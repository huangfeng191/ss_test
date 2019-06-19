// 证明了，只要调用时 环境中存在方法就不会报错。
function forClick() {
    showOtherPageMethod()
}





function csCurry() {

    var cv = Array.prototype;
    pv = cv.slice
// 针对数组对象 调用slice 方法
    return pv.call(arguments,1);
}
csCurry(2,3,4)

// curry 方法，  t 是第一个放方法，可以将两次调用的参数 合并
function _(t) {
    var e = pv.call(arguments, 1);
    return function() {
        return t.apply(this, e.concat(pv.call(arguments)))
    }
}


type={
    "CCName":"钟卡",
    "CC":{
        
        "freeRun":{"0":"grey","1":"green"},
        "active":{"0":"grey","1":"green"},
        "lock":{"0":"grey","1":"green"},
        "alarm":{"0":"grey","1":"red"},
    },
    "MCName":"管理卡",
    "MC":{
        "pwrA":{"0":"grey","1":"green"},
        "pwrB":{"0":"grey","1":"green"},
        "system":{"0":"grey","3":"blink-green"},
        "alarm":{"0":"grey","1":"red"}
    },
    "4-E1Name":"GNSS+4E1",
    "4-E1":{
        "sys": {"0":"grey","3":"blink-green"}, 
        "gnss": {"0":"grey","1":"blink-green"},  
        "port1": {"0":"grey","1":"red"}, 
        "port2": {"0":"grey","1":"red"},
        "port3": {"0":"grey","1":"red"},
        "port4": {"0":"grey","1":"red"},
    },
    "E1-T1Name":"E1输出卡",
    "E1-T1":{
        "pwr": {"0":"grey","1":"green"}, 
        "gnss": {"0":"grey","1":"blink-green"},
    }
}



boardInfo=[
    {
      "ioType": null,
      "index": 0,
      "redundancy": null,
      "card": {
        "type": "CC",
        "cardName": null,
        "active": "yes",
        "portCount": null,
        "cardLed": {
          "freeRun": 0,
          "active": 1,
          "lock": 0,
          "alarm": 0
        }
      }
    },
    {
      "ioType": null,
      "index": 1,
      "redundancy": null,
      "card": {
        "type": "CC",
        "cardName": null,
        "active": "yes",
        "portCount": null,
        "cardLed": {
          "freeRun": 0,
          "active": 0,
          "lock": 0,
          "alarm": 0
        }
      }
    },
    {
      "ioType": null,
      "index": 2,
      "redundancy": null,
      "card": {
        "type": "MC",
        "cardName": null,
        "active": "yes",
        "portCount": null,
        "cardLed": {
          "pwrA": 0,
          "pwrB": 1,
          "system": 3,
          "alarm": 1
        }
      }
    },
    {
      "ioType": null,
      "index": 3,
      "redundancy": "--",
      "card": {
        "type": "4-E1",
        "cardName": null,
        "active": "--",
        "portCount": null,
        "cardLed": {
          "sys": 3,
          "gnss": 1,
          "port1": 1,
          "port2": 1,
          "port3": 0,
          "port4": 0
        }
      }
    },
    {
      "ioType": null,
      "index": 4,
      "redundancy": "disable",
      "card": null
    },
    {
      "ioType": null,
      "index": 5,
      "redundancy": "disable",
      "card": null
    },
    {
      "ioType": null,
      "index": 6,
      "redundancy": "disable",
      "card": {
        "type": "E1-T1",
        "cardName": null,
        "active": "yes",
        "portCount": null,
        "cardLed": {
          "pwr": 1,
          "enable": 1
        }
      }
    },
    {
      "ioType": null,
      "index": 7,
      "redundancy": "disable",
      "card": {
        "type": "E1-T1",
        "cardName": null,
        "active": "yes",
        "portCount": null,
        "cardLed": {
          "pwr": 1,
          "enable": 1
        }
      }
    },
    {
      "ioType": null,
      "index": 8,
      "redundancy": "disable",
      "card": null
    },
    {
      "ioType": null,
      "index": 9,
      "redundancy": "disable",
      "card": null
    },
    {
      "ioType": null,
      "index": 10,
      "redundancy": "disable",
      "card": {
        "type": "PPS-TOD",
        "cardName": null,
        "active": "--",
        "portCount": null,
        "cardLed": {
          "pwr": 1,
          "enable": 2
        }
      }
    },
    {
      "ioType": null,
      "index": 11,
      "redundancy": "disable",
      "card": null
    }
  ]

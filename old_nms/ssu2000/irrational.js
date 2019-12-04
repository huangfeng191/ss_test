data = {
    "alarms": {},
    "params": {
        "clk": [{
            "aid": "S1A01##true",
            "warmup": "1200#900-3600#false",
            "mintau": "1000#300–10000(ST2E),150–1200(ST3E)#false",
            "maxtau": "9000#300–10000(ST2E),150–1200(ST3E)#false",
            "clkar": "ON#ON|OFF#false",
            "inpswt": "AR##true",
            "inpsel": "PRI##true",
            "mintaulimit": "300##true",
            "maxtaulimit": "10000##true",
            "tod_timeout": "1440##true"
        }],
        "status": [{
            "aid": "S1A01##true",
            "mstat": "SEL##true",
            "clock_mode": "HOLD#ACQ|LOCK|HOLD#false",
            "tau": "60##true",
            "pql": "5##true",
            "offset": "(0)##true",
            "sigma": "(5E-07)##true",
            "syn": "NO##true"
        }]
    },
    "others": {},
    "status": {}
}

var inputs=[
    [
        { "name": "maxtau", "field": "clk-maxtau", "showType": "text", },
        { "name": "clock_mode", "field": "status-clock_mode", "showType": "select", },
    ],
    [
        { "name": "tau", "field": "status-tau", "showType": "text", },
        { "name": "pql", "field": "status-pql", "showType": "text", },
    ],
    [
        { "name": "offset", "field": "status-offset", "showType": "text", },
        { "name": "sigma", "field": "status-sigma", "showType": "text", },
    ],
]
var aid="S1A01";
Object.keys(data.params).forEach(function(tp,tpI){
    if(data.params[tp]){
        data.params[tp].forEach(function(one){
            var oneAid=one.aid.split("#")[0]
             if(oneAid==aid){
                Object.keys(one).forEach(function(oK,oI){
                  
                   var oneParamA= one[oK].split("#");
                   var oneOptions=oneParamA[1].split("|");
                   var oneDisable=oneParamA[2]=="false"?false:true;
                   var oneUnit=""
                   if (oneOptions.length>1){
                    oneOptions= oneOptions.map(function(v){
                        return {
                            "name":v,
                            "value":v
                        }
                    })
                   }else{
                       if(oneOptions&&oneOptions[0]){
                        oneUnit=oneOptions[0];
                       }
                    oneOptions=[]
                   }

                    var inputSet={
                        "aid":oneAid,
                        "tp":tp,
                        "field":tp+"-"+oK,
                        "value":oneParamA[0],
                        "options":oneOptions,
                        "disable":oneDisable,
                        "oldValue":oneParamA[0],
                        "unit":oneUnit
                    }
                    inputs.forEach(function(row,rowI){
                        row.forEach(function(input){
                            if(input.field==inputSet.field){
                                Object.assign(input,inputSet)
                                return false;
                            }
    
                        } )
                    })
                })

             

            }
        })
    }
})

// console.log(""+inputs.length)
console.log(JSON.stringify(inputs));

// 一开始 把数据存下来;

var irrationalData={
    "clk-maxtau":"12"
}

function input2Data(inputs,k){
    var o={};
    inputs.forEach(function(row,i){
        row.forEach(function(one,oI){
            o[one["field"]]=one[k];
        })
    })
    return o;
}

var changedTp=new Set();
var record=[]
inputs.forEach(function(row,i){
    row.forEach(function(one,oI){
        if(irrationalData[one.field]!=one.oldValue){
            changedTp.add(one.tp)
        };
    })
})

if(changedTp.size>=0){
    changedTp.forEach(function(tp,i){
        var oneChange ={"name":tp,"aid":"","values":{}}
        inputs.forEach(function(row,i){
            row.forEach(function(one,oI){
                debugger
                console.log("one.tp:"+one.tp)
                if(one.tp==tp&&one.disable!=true){
                    oneChange["aid"]=one["aid"];
                    console.log(""+one["field"])
                    oneChange["values"]["aid"]=one["aid"];
                    // console.log(irrationalData[one["field"]]||"")
                    oneChange["values"][one["field"].replace(tp+"-","")]= irrationalData[one["field"]]||""    
                };
            })
        })
        
        record.push(oneChange)
    })
}
console.log("changedTp "+changedTp.size);
console.log("record"+JSON.stringify(record))




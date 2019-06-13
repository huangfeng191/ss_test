if(isEdit==3){
    // netTopology_id
    $.each(ret["netTopuList"], function(ai, av) {
        if (av.elementType == "node" && !av.deviceId) {
        if(av.imageUrl&&av.imageUrl.match("netNode") &&$("#ip").data("netTopology_id")){
        
                $.each(devices,function(di,dv){
                    if(dv.ip==$("#ip").data("netTopology_ip")){
                        av.deviceId=dv.id;
                    }
                })
            
        }
            
        }
    })

}
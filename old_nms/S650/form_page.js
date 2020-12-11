data=[
   {
     "type": "select",
     "options": [
       {
         "value": "server",
         "name": "Server"
       },
       {
         "value": "peer",
         "name": "Peer"
       },
       {
         "value": "broadcast",
         "name": "Broadcast"
       }
     ],
     "field": "Role"
   },
   {
     "type": "text",
     "field": "Address"
   },
   {
     "type": "select",
     "options": [
       {
         "value": "DEFAULT",
         "name": "DEFAULT"
       },
       {
         "value": "LAN1",
         "name": "LAN1"
       },
       {
         "value": "LAN2",
         "name": "LAN2"
       },
       {
         "value": "LAN3",
         "name": "LAN3"
       },
       {
         "value": "LAN4",
         "name": "LAN4"
       }
     ],
     "field": "Port"
   },
   {
     "type": "text",
     "field": "Prefer"
   },
   {
     "type": "select",
     "options": [
       {
         "value": "NA",
         "name": "N/A"
       },
       {
         "value": "burst",
         "name": "Burst"
       },
       {
         "value": "iburst",
         "name": "iBurst"
       },
       {
         "value": "both",
         "name": "Both"
       }
     ],
     "field": "Burst"
   },
   {
     "type": "select",
     "options": [
       {
         "value": "00",
         "name": "Default"
       },
       {
         "value": "04",
         "name": "0:00:16"
       },
       {
         "value": "05",
         "name": "0:00:32"
       },
       {
         "value": "06",
         "name": "0:01:04"
       },
       {
         "value": "07",
         "name": "0:02:08"
       },
       {
         "value": "08",
         "name": "0:04:16"
       },
       {
         "value": "09",
         "name": "0:08:32"
       },
       {
         "value": "10",
         "name": "0:17:04"
       },
       {
         "value": "11",
         "name": "0:34:08"
       },
       {
         "value": "12",
         "name": "1:08:16"
       },
       {
         "value": "13",
         "name": "2:16:32"
       },
       {
         "value": "14",
         "name": "4:33:04"
       },
       {
         "value": "15",
         "name": "9:06:08"
       },
       {
         "value": "16",
         "name": "18:12:16"
       }
     ],
     "field": "MinPoll"
   },
   {
     "type": "select",
     "options": [
       {
         "value": "00",
         "name": "Default"
       },
       {
         "value": "04",
         "name": "0:00:16"
       },
       {
         "value": "05",
         "name": "0:00:32"
       },
       {
         "value": "06",
         "name": "0:01:04"
       },
       {
         "value": "07",
         "name": "0:02:08"
       },
       {
         "value": "08",
         "name": "0:04:16"
       },
       {
         "value": "09",
         "name": "0:08:32"
       },
       {
         "value": "10",
         "name": "0:17:04"
       },
       {
         "value": "11",
         "name": "0:34:08"
       },
       {
         "value": "12",
         "name": "1:08:16"
       },
       {
         "value": "13",
         "name": "2:16:32"
       },
       {
         "value": "14",
         "name": "4:33:04"
       },
       {
         "value": "15",
         "name": "9:06:08"
       },
       {
         "value": "16",
         "name": "18:12:16"
       }
     ],
     "field": "MaxPoll"
   },
   {
     "type": "select",
     "options": [
       {
         "value": "0",
         "name": "None"
       },
       {
         "value": "-1",
         "name": "Auto"
       },
       {
         "value": "1",
         "name": "1"
       },
       {
         "value": "2",
         "name": "2"
       },
       {
         "value": "3",
         "name": "3"
       },
       {
         "value": "4",
         "name": "4"
       },
       {
         "value": "5",
         "name": "5"
       },
       {
         "value": "6",
         "name": "6"
       },
       {
         "value": "7",
         "name": "7"
       },
       {
         "value": "8",
         "name": "8"
       },
       {
         "value": "9",
         "name": "9"
       },
       {
         "value": "10",
         "name": "10"
       },
       {
         "value": "11",
         "name": "11"
       },
       {
         "value": "12",
         "name": "12"
       },
       {
         "value": "13",
         "name": "13"
       },
       {
         "value": "14",
         "name": "14"
       },
       {
         "value": "15",
         "name": "15"
       },
       {
         "value": "16",
         "name": "16"
       },
       {
         "value": "17",
         "name": "17"
       },
       {
         "value": "18",
         "name": "18"
       },
       {
         "value": "19",
         "name": "19"
       },
       {
         "value": "20",
         "name": "20"
       }
     ],
     "field": "Symmetric"
   },
   {
     "type": "text",
     "field": "TTL"
   },
   {
     "type": "text",
     "field": "&nbsp;"
   }
 ]


 function getItem({type='text',options=[],field}){
    var temp=`
         <div class="form-group">
            <label for="inputEmail3" 
            class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">${field}</label>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
            <input type="text"  class="excel_value form-control" ng-model="deviceContent.${field.replace(/ /g ,"")}"></div>
         </div>
    `
    if(type=="select"){
      var option=[]
      options.forEach(function(op){
         option.push(`                     
               <option value="${op.value}">${op.name}</option> `)
      })
       
       temp=`
         <div class="form-group">
            <label for="inputEmail3"  class="excel_key col-xs-5 col-sm-5 col-lg-5 col-md-5 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 control-label">
            ${field}
            </label>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
               <select ng-model="deviceContent.${field.replace(/ /g ,"")}" class="excel_value form-control input-sm">
               <option translate="PLEASE_SELECT" value="">请选择</option>${option.join("")} 
               </select>
            </div>
         </div>
       `
    }
    return temp 

 }

 function getItems({data}){
    var ret=[]
    data.forEach(function(d){
      ret.push(getItem(d))
    })
    return ret 
 }

 console.log(getItems({"data":data}).join("\n"))
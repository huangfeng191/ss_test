/*

端口使能开,SET-EN
端口使能关,SET-DIS

质量等级,SET-PRMTR-SQL,level=PRS, ST2, ST3 DUS, STU
SSM模式,SET-PRMTR-SQL,mode=Auto, On, Prov, Off
SSM位,SET-PRMTR-SQL,bit = 4, 5, 6, 7, 8

频率格式,SET-PRMTR-INPT,Freq=1, 1.544,

2.048, 5, 10
端接电阻,SET-PRMTR-INPT,term=50, 75, 100, 120, 3300
帧格式,SET-PRMTR-INPT,mode=D4, ESF, CLK
CRC开关,SET-PRMTR-INPT,crc=On,Off
相位清零,SET-PHASE_ZERO,clksrc=CLKA or CLKB

优先级,SET-PRMTR-PRI,priority = 0, 1, 2, 3, 4

 */




var settingCommandDual={
   type:null,
   getInputs:function(type){

      return [
         {"title":"","field":"","command":"value","key":"","showType":"","binding":"","valueCommand":{
            "disable":"SET-DIS",
            "enable":"SET-EN"
         }}
      ]
   },
   getFields:function(type){
      settingCommandDual.type=type;
      var inputs=settingCommandDual.getInputs(type);
      var o={}
      inputs.forEach(function(v){
         o[v.field]={ "old":"", "now":"", "command":v.command,"key":v.key }
      })
      return o;
   },
   doPostOne:function(command,data){
      console.log("ok"+command)
   },

   save:function(todoCommand){
      if(todoCommand&&todoCommand.length>0){
         var relativeFields=settingCommandDual.getInputs(settingCommandDual.type)
         var errInfo=[];
         var option={};
         todoCommand.forEach(function(v){
            var data=$extend({},option);
            var cmd=v;
            relativeFields.forEach(function(input){
               if(input.command=="value"){
                  cmd=input.valueCommand[settingCommandDual.currentFieldsData[input.field].now];
               }   
               else if(input.command==v){
                     data[input.key ]=settingCommandDual.currentFieldsData[input.field].now;
               }
            })
            var ret=doPostOne(cmd,data)
            if(ret){
               errInfo.push(ret)
            }
            
         })
         if(errInfo.length>0){
            console.log("error"+errInfo)
         }else{
            console.log("that`s Ok");
         }
      }
   },
   currentFieldsData:null,
   init:function(type){
      settingCommandDual.currentFieldsData=$.extend({},settingCommandDual.getFields(type));
   },
   makeAGoodDeal:function(){
      var todoCommand=[]
      newO={
         "inputCardState":"enable"
      }
      $.each(newO,function(field,ov){
         settingCommandDual.currentFieldsData[field].now=ov
      })
      $.each(settingCommandDual.currentFieldsData,function(field,ov){
         if(ov.now!=ov.old){
            todoCommand.push(ov.command);
         }
      })
   }

}







// otherFields:["clock"]

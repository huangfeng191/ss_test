$("#updateUserModal,#addUserModal,#monitor .public-content #system-data2 #nav-three-3").find("input.character_other").on("blur", function(event) {
    if(!event.target.value){
      return 
    }
    if(event.target.id=="allowedIp" ||event.target.id=="allowIpAdd"||event.target.id=="backups-op13"  ){
      if (checkIP(event)) {
        return
      }
    }else if(event.target.id=="cardID"||event.target.id=="cardIDs"){
      if (checkCardID(event)) {
        return
      } 
    }else if(event.target.id=="mobile"||event.target.id=="mobiles"){
      if (checkPhoneNum(event)) {
        return
      }
    }else if(event.target.id=="emailAdd"||event.target.id=="email"){
       if (checkEmail(event)) {
         return
       }
    }
  })





  $("#updateUserModal,#addUserModal,#monitor .public-content #system-data2 #nav-three-3").find("input.character_other").on("input propertychange",function(event){
    var value=event.target.value;
  
    if(event.target.id=="allowedIp" ||event.target.id=="allowIpAdd"||event.target.id=="backups-op13" || event.target.id== 'allowIp' ){
      if (value.length > 15) {
        event.target.value = event.target.value.slice(0,15)
        $("#allowedIp, #allowIpAdd, #backups-op13").unbind("blur");
        document.getElementById('allowIp').removeEventListener('blur', checkIP)
        $('#myModalTips').html(window.top.showTips($(event.target).parent().parent().children()[0].children[0].innerHTML.replace(":","")+"长度不能超过15个字符"));
        $('#myModalTips').modal('show');
      }
      else {
        $("#allowedIp, #allowIpAdd, #backups-op13").on('blur', checkIP)
        document.getElementById('allowIp').addEventListener('blur', checkIP)
      }
    }
    else if (event.target.id=="cardID"||event.target.id=="cardIDs"){
      if (value.length > 18) {
        event.target.value = event.target.value.slice(0,18)
        $("#cardID, #cardIDs").unbind("blur");
        $('#myModalTips').html(window.top.showTips($(event.target).parent().parent().children()[0].children[0].innerHTML.replace(":","")+"长度不能超过18个字符"));
        $('#myModalTips').modal('show');
      }
      else {
        $("#cardID, #cardIDs").on('blur', checkCardID)
      }
    }
  
    else if (event.target.id=="mobile"||event.target.id=="mobiles") {
      if (value.length > 11) {
        event.target.value = event.target.value.slice(0,11)
        $("#mobile, #mobiles").unbind("blur");
        $('#myModalTips').html(window.top.showTips($(event.target).parent().parent().children()[0].children[0].innerHTML.replace(":","")+"长度不能超过11个字符"));
        $('#myModalTips').modal('show');
      }
      else {
        $("#mobile, #mobiles").on('blur', checkPhoneNum)
      }
    }
  
    else if (event.target.id=="emailAdd"||event.target.id=="email") {
      if (value.length > 32) {
        event.target.value = event.target.value.slice(0,32)
        $("#emailAdd, #email").unbind("blur");
        $('#myModalTips').html(window.top.showTips($(event.target).parent().parent().children()[0].children[0].innerHTML.replace(":","")+"长度不能超过32个字符"));
        $('#myModalTips').modal('show');
      }
      else {
        $("#emailAdd, #email").on('blur', checkPhoneNum)
      }
    }
    else if (event.target.id=="allowedStartTAdd"||event.target.id=="allowedEndTAdd" || event.target.id=="allowedStartT"||event.target.id=="allowedEndT") {
      if (value.length > 5) {
        event.target.value = event.target.value.slice(0,5)
        $('#myModalTips').html(window.top.showTips($(event.target).parent().parent().children()[0].children[0].innerHTML.replace(":","")+"长度不能超过5个字符"));
        $('#myModalTips').modal('show');
      }
    }
  })
  









  function checkCardID (event) {
    var cardId_do=event.target.value;
    if(event.target.id=="cardIDs"){
      if(document.getElementById("cardId_shield").value==$("#cardIDs").val()){
        cardId_do=$("#cardIDs").data("all");
      }
    }
    var ret = IdCodeValid(cardId_do);
    if (ret.pass == false) {
      $('#myModalTips').html(window.top.showTips(ret.msg));
      $('#myModalTips').modal('show');
      return true
    }
  }  




  $("#cardIDs").on('blur', function (e) {
    var cardId_do=e.target.value
    if(cardId_do==$("#cardId_shield").val()){
      cardId_do=$("#cardIDs").data("all");
    }
    checkCardID(cardId_do)
  })




  if(!checkCardID(document.getElementById("cardID").value)){
    return false 
  }










  function checkLocation (event) {
    var regX = /^[\-\+]?(0(\.\d{1,2})?|([1-9](\d)?)(\.\d{1,2})?|1[0-7]\d{1}(\.\d{1,2})?|180\.0{1,2})$/
    var regY = /^[\-\+]?((0|([1-8]\d?))(\.\d{1,2})?|90(\.0{1,2})?)$/;
    var regCom = /-/;
    if(event.target.id=="longitude"){
        if (!(event.target.value + "" || "").match(regX)) {
            $('#myModalTips').html(window.top.showTips("经度不符合要求,最多只能保留两位小数"));
            $('#myModalTips').modal('show');
            return
        }
    }else{
        if (!(event.target.value + "" || "").match(regY)) {
            $('#myModalTips').html(window.top.showTips("经度不符合要求,最多只能保留两位小数"));
            $('#myModalTips').modal('show');
            return
        }
    }
  }




  
  $('#show_wendu').on('input', function(e){
    var values = $('#show_wendu').val().split('.');
    if(values.length == 2 && values[1] != ''){
        $('#show_wendu').val(values[0] + '.' + values[1][0]);
    }
})

$('#show_humidity').on('input', function(e){
    var values = $('#show_humidity').val().split('.');
    if(values.length == 2 && values[1] != ''){
        $('#show_humidity').val(values[0] + '.' + values[1][0]);
    }
})
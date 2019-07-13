if(deviceType!="SM2000"&&deviceType!="SM2000_SN"){
    if($("#collapseexample2").css("display")=="block"){
          $("#collapseexample2 [item=GNSS1]").css("display", "none");
          $("#collapseexample2 [item=GNSS2]").css("display", "none");
    }
    $(".nav-left  [to='system']").parent().css("display", "block");
    $(".nav-left  [to='clock']").parent().css("display", "block");
  }else{
    $(".nav-left  [to='system']").parent().css("display", "none");
    $(".nav-left  [to='clock']").parent().css("display", "none");
    if($("#collapseexample2").css("display")=="block"){
          $("#collapseexample2 [item=GNSS1]").css("display", "block");
          $("#collapseexample2 [item=GNSS2]").css("display", "block");
    }
  }
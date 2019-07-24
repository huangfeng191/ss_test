function LongTimeNoOperation(minutes) {
    var maxTime = 5; // seconds
    if(seconds){
         maxTime=minutes*60;
    }
	var time = maxTime;
	document.body.addEventListener("mousemove", function() {
		time = maxTime; // reset
	}, false);
 
	var intervalId = setInterval(function() {
		time--;
		if(time <= 0) {
            window.top.location.href="/nms/index.html";  
		}
    }, 1000)
    
 
}


window.top.onunload=function(){
    debugger
    $.ajax({
        url: '/nms/spring/user/logoutsystem?token='+top.SsCenter.sessionID,
        headers: { 'token': top.SsCenter.sessionID },
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        success: function(result) {
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
    });

}
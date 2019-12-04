// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:60/nms/index.html
// @match        http://127.0.0.1:61/nms/index.html
// @match        http://127.0.0.1:62/nms/index.html
// @match        http://127.0.0.1:63/nms/index.html
// @match        http://192.168.90.10/users/sign_in
// @match        http://192.168.1.139:8080/nms/index.html
// @match        http://192.168.1.171:40/index.html
// @match        http://192.168.1.171:60/nms/index.html
// @match        http://192.168.1.171:61/nms/index.html
// @match        http://192.168.1.171:62/nms/index.html
// @match        http://192.168.90.20:8088/zentao/user-login.html

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.indexOf("60/nms/index.html")>=0||
       window.location.href.indexOf("139:8080/nms/index.html")>=0||
       window.location.href.indexOf("/nms/index.html")>=0||window.location.href.indexOf("62/nms/index.html")>=0){
        //document.getElementsByName("username")[0].value="zjsaisi";
        //document.getElementsByName("username")[0].value="sgferq";
        //document.getElementsByName("username")[0].value="sgnms";
        //document.getElementsByName("username")[0].value="fengfeng";
        document.getElementsByName("username")[0].value="drow";
        document.getElementsByName("password")[0].value="Diamond!1";
        $("button.submit").click();
    }

    if(window.location.href.indexOf("/users/sign_in")>=0){

       setTimeout(function(){

           $("[name='user[login]']").val("jinjianwu@zjsaisi.com");
           $("[name='user[password]']").val("Sandy123");
           $("[name='commit']").click();

       },1000)

    }
      if(window.location.href.indexOf("/zentao/user-login.html")>=0){

       setTimeout(function(){
           $("#account").val("jinjianwu");
           $('input:password').val("zjsaisi")
          // $("#password").val("7a60be8982dbac2b9b665ec400fd302b");
           $("#submit").click()

       },1000)

    }
    if(window.location.href.indexOf("index.html#/login")>=0){

       setTimeout(function(){
           //debugger;
          // $("[ng-model='mauto.userName']").val("f");
          // $("[ng-model='mauto.password']").val("f");
           document.getElementsByClassName("btn-login")[0].click()


       },1000)

    }

    // Your code here...
})();
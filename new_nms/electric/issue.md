Client DOM XSS 51 高风险  
    应用程序的 function 使用 src/main/webapp/js/help.js. 145 行的 append
    .html()
    $('#myModalTips').html(window.top.showTips(ret.msg));
    在生成的输出中嵌入了不受信任的数据


Client DOM Stored XSS 2 高风险
Stored XSS 2 高风险
Command Injection 1 高风险
Reflected XSS All Clients 1 高风险
PAGE 14 OF 214
XSRF 222 中风险
Client Potential XSS 116 中风险
Unchecked Input for Loop Condition 61 中风险
Heap Inspection 24 中风险
Input Path Not Canonicalized 10 中风险
Client Privacy Violation 4 中风险
HTTP Response Splitting 3 中风险
SSRF 2 中风险
Unsafe Object Binding 2 中风险
Use of System exit 2 中风险
Absolute Path Traversal 1 中风险














   $("#Role").append(`<option value='${item.id}'>${item.roleDesc}</option>`);



   
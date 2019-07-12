v3   查询输出板卡 端口
    {"aid":"BTSOU18","command":"RTRV-STATE-TSOU","cmdtype":"CHANTYPE"}

    测试卡 业务名 查询
    {"aid":"","command":"RTRV-COND-INP"}


    钟卡经纬度查询
    {"cmdtype":"SCARDREALPOS","aid":"BSRCU1","command":"RTRV-PRMTR-SCLK"}



clock 

<!-- 双星卡工作模式 -->
{"cmdtype":"WM","aid":"BSRCU1","command":"RTRV-STATE-SCLK"}     //TBase 未返回 


<cmdtype>值为LOCKDELAY，表示状态切换的延时时间
{"cmdtype":"LOCKDELAY","aid":"BSRCU1","command":"RTRV-STATE-SCLK"}  都没返回  // 不支持


少了 VALUE2

{"PRMTRTYPE":"WM","aid":"BSRCU1","VALUE":"GPS","VALUE2":"GPS","command":"SET-PRMTR-SCLK"}
SET-PRMTR-SCLK::BSRCU1:269::WM,GPS;


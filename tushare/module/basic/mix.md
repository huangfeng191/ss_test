parentPage:
```js

Out,daily,图表,ts_code,all
Chart,daily,单表,ts_code,all


Chart daily 单表 ts_code
showDialogChart(idx,table_nm=null,s_query,url="/stock/onechart.html")

if(a_foreignCol[0]=="Chart"){
    sn=a_foreignCol[1]||"onechart";
    nm=a_foreignCol[2];
    s_key=a_foreignCol[3];
    width="100"
    templateCols=`{ "field": "${sn}","title":"${nm}","width":"${width}", "halign": "center", "align": "center"}`;
    o_foreignCol=JSON.parse(templateCols)
    o_foreignCol["formatter"]= function (V, R, I) {
        sn=a_foreignCol[1];
        nm=a_foreignCol[2];
        s_key=a_foreignCol[3];
        is_all=a_foreignCol[4];
        if(!V&&!is_all){
            return ""
        }
        return "<a onclick=showDialogChart("+I+",'"+sn+"','"+s_key+"')>"+nm+"</a>" }
    retO.columns.push(o_foreignCol)
}




```


s_query

# oneChart.html 

params : code=
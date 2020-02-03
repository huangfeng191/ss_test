# 2020-02-03  Monday 


 name sn desc 文件路径   方法名  参数 
 name sn desc  path   method   params 



{ c: "combo", d: "datetime", a: "textarea", u: "upload", t: "text" }



CrudColumns

'{ "field": "${1:sn}","title": "${0:nm}", "width": 100,${21} },',

CrudInputs3
 '{ "Field": "${1}", "Name": "${0}", ShowType: "${2:text}",DataType: "$?dataType:String?", Ext: "${21}", "Required": ${3:false}, RowSpan: 1, ColSpan: "$?ColSpan:1?" },',


 CrudProp
 '{ "Field": "${1}", "Name": "${0}", ShowType: "${2:text}", Ext: "${21}",DataType: "$?dataType:String?" },',

CrudQueries
   '{ "Field": "${1:nm}", "Label": "${0:nm}", "Type":  "${3:QText}", ${21} },',



1      0      2         3
field  name   showType  Required  ?param1?colspan?dataType  // 

field  name   showType  required 

#  模块名 ?param1?colspan?dataType? 
field  name   showType  Required  ?param1?colspan?dataType 
field  name   d   true   ?param1?1?


showType  c: "combo", d: "datetime", a: "textarea", u: "upload", t: "text",f:"text"

param1 
col 
# 21 
c 
d  
f 

input 
# 21 
c 
d  

prop 
# 21 
c 
d  
quick 
# 21 
c 
d  






 
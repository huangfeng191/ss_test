cell:
    sn 
    nm
    type :slot fixed jump 
    level :cell link step measure plan 
    cycle day month year week 
    loop
    loopConfig
    rule
    ruleConfig table agg pandas 
    out 
    outConfig
    w 
    refresh // extend
    classify  // extend  at present type text 
    desc 
    pid
link:
    sn 
    nm  
    cycle 
    w 
    refresh 
    classify
    desc
    pid

step:
    sn 
    nm  
    cycle 
    w 
    refresh 
    classify 
    desc
    pid

# sn rule:
m_XXX
l_XXX
s_XXX
c_XXX



# cell.loop 
    {
        "type",
        "sn",
        "others"
    }




# sourceType  and ruleType  mapping 


| sourceType | ruleType  |
| ---------- | --------- |
| table      | table     |
| table      | agg       |
| object     | uncertain |
| array      | uncertain |
     
     

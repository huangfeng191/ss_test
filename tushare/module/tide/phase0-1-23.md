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
     
     


# CellOutConfig
    type
        table
        log
    log
        field
        fields
    table
        nm
        query // reserved 预留
    regulate []
        type:
            quote 
                {"field1":"field2" ,"field3":"field4" }
            restrain
                ["field1","field2"...]
            extract 
                way 
                    rowsToObject
                        fields //[]
                    rowToObject 
                        index:0  




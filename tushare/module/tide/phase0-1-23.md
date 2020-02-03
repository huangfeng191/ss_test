cell:
    sn 
    nm
    type :slot fixed jump 
    level :cell link step measure plan 
    cycle day month year week 
    loop
    ruleType table agg pandas 
    rule
    outType
    out 
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
s_XXX
l_XXX
c_XXX

# cell.loop 
    {
        "type",
        "sn",
        "others"
    }


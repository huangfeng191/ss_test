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
    refresh
    classify
    desc 
link:
    sn 
    nm  
    cycle 
    refresh // extend
    w 
    classify // extend  at present type text 
    desc

step:
    sn 
    nm  
    cycle 
    refresh // extend
    w 
    classify // extend 
    desc

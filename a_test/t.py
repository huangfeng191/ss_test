# -*- coding: utf-8 -*-



a="""{
    "source": {
        "table": "dynamic_daily_business"
    },
    "queries": {
        "outFrequency": {
            "type": "date",
            "value": "day",
            "operate": "eq"
        },
        "sn": "eligibilityUpLoop"
    },
    "aggregate": [{
            "$group": {
                "_id": {"ts_code":"$ts_code"},
                "count": { "$sum": 1 }
            }
        },
        {
            "$match": {
                "count": { "$gte": 3 }
            }
        }
    ]

}"""

print a 
import json
print json.loads(a)
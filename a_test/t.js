var a={
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
            "group": {
                "_id": {"ts_code":"$ts_code"},
                "count": { "$sum": 1 }
            }
        },
        {
            "match": {
                "count": { "$gte": 3 }
            }
        }
    ],


}
sourceConfig={
    "fixed": {
        "type": "table",
        "table": {
            "nm": "tide_daily_link",
            "sorts": {
                "order": [
                    {
                        "Field": "trade_date",
                        "Type": true
                    }
                ]
            },
            "query": {
                "change": {
                    "$gte": 0
                },
                "trade_date": {
                    "type": "jump",
                    "operate": "in",
                    "assist": "cal_date",
                    "jump": {
                        "hook": "cell",
                        "fetchKey": {
                            "sn": "cell_last7days",
                            "cycleLikely": "extend",
                            "level": "cell",
                            "levelSn": "cell_last7days"
                        }
                    }
                }
            }
        }
    }
}
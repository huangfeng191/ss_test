# -*- coding: UTF-8 -*-
# Module  : p_py
# Description :
# Author  : Wujj
# Date    : 2019/04/16
# Version : 1.0
# -*- coding: UTF-8 -*-
# Module  : p_py
# Description :
# Author  : Wujj
# Date    : 2019/04/16
# Version : 1.0
import ctx
import logging
from misc import utils
import time
from datetime import datetime
from service import comm
from bson import ObjectId

misc_info = comm.CRUD(ctx.nmsdb, "misc_info", [("cid", 1)])
misc_house = comm.CRUD(ctx.nmsdb, "misc_house", [("cid", 1)])





import time
from  inteface import *
AK="BvuuwDDNnTkpZkVYHjCI1GtsSzQo1GuD"
from copy import deepcopy

def getBaiduCoordinates():
    default={"output":"json","ak":AK,"city":"嘉兴市","address":""}
    l=misc_house.items(query={"location":{'$exists':0}}).batch_size(100)
    for r in l:
        address=r.get("address")

        query = dict(default, **deepcopy({"address":address}))
        ret=toGetUrl("http://api.map.baidu.com/geocoding/v3",
        query)
        if(ret):
            ret=json.loads(ret)
            if(ret.get("status")==0 and  ret.get("result")):
                r["location"]=ret.get("result").get("location")
                misc_house.upsert(**r)
            time.sleep(1)
    return "OK"


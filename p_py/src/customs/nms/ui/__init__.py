# -*- coding: UTF-8 -*-
# Module  : p_py
# Description :
# Author  : Wujj
# Date    : 2019/04/16
# Version : 1.0

import re
import time
from misc import utils
from ui import path, wildcard
from ui.route import CRUD
from customs.nms.service import *
from customs.nms.service.baidu_api import *
from customs.nms.service.mysql import *
from webservice import POST



from bson.objectid import ObjectId




@wildcard("/nms/misc_info/")
class NmsMiscCRUD(CRUD):

    def __init__(self):
        self.module = misc_info

    def action(self, act, *args, **kwArgs):
          if act == 'one':
              return self.one(*args, **kwArgs)
          else:
              return CRUD.action(self, act, *args, **kwArgs)


    def one(self,order=None, record=None, *args, **kwArgs):
        print 1
        time.sleep(2)
        if not order:
            print 2
            # 最后一条
            order= [{"Field": "created", "Type": True}]
        l=self.module.items(query=kwArgs.get("query"),order=order,size=1)
        o={}
        if l.count()>0:
          o= list(l)[0]
        return o




@wildcard("/nms/house/")
class NmsHouseCRUD(CRUD):
    def __init__(self):
        self.module = misc_house
    def action(self, act, *args, **kwArgs):   
          if act == 'fixPosition':
              return self.fixPosition(*args, **kwArgs)
          elif act == 'list':
              return self.list(*args, **kwArgs)
          else:
              return CRUD.action(self, act, *args, **kwArgs)

    def query(self, count=True, *args, **kwArgs):
        conditions = kwArgs.get('conditions', [
            {"Field": "building_area", "Value": "80", "Group": 1, "Operate": ">=", "Relation": "and"},
            {"Field": "building_area", "Value": "120", "Group": 1, "Operate": "<=", "Relation": "and"}
        ])
        record = {"conditions": conditions}
        if "conditions" in kwArgs:
            del kwArgs["conditions"]
        details = self.list(record)
        o={}
        for r in details.get("rows"):
            if(r.get("community") not in o):
                o[r.get("community")]={"count":1,"avg":0,"avg_sum":r.get("avg_price")}
            else:
                o[r.get("community")]["count"]+=1
                o[r.get("community")]["avg_sum"] += r.get("avg_price")


        ret = CRUD.query(self, count=count, *args, **kwArgs)
        r1=[]
        for r in ret.get("rows"):

            r["count"]=0
            r["avg"]=0
            r["avg_sum"] = 0
            if r.get("address") in o:
                r["count"]= o[r.get("address")]["count"]
                r["c"]= o[r.get("address")]["count"]
                r["avg_sum"] = o[r.get("address")]["avg_sum"]
                r["avg"]=r["avg_sum"]/r["count"]
                r1.append(r)

        return {'total': len(r1), 'rows':r1}



    def list(self, record={}, *args, **kwArgs):
        community=record.get("community")
        source={"driver":"mysql"}
        d=getDB(source,"anjuke_secondhand_house")
        conditions=[
        ]
        if record.get("conditions"):
            conditions=record.get("conditions")
        # parse marked
        marked=None
        for r in conditions:
            if(r.get("Field")=="marked"):
                marked=r.get("Value")
                conditions.remove(r)

        if community:
            conditions.append( {"Field":"community","Value":community,"Group":1,"Operate":"=","Relation":"and"})
        marks=list(misc_house_mark.items())



        re=d.items(fields={
            "id": 1, "total_price": 1, "total_price_unit": 1, "avg_price": 1, "avg_price_unit": 1, "title": 1,
            "house_type": 1,
            "building_area": 1, "building_area_unit": 1, "floor": 1, "building_time": 1, "community": 1, "city": 1,
            "area": 1,
            "address": 1, "advantage": 1, "salesman": 1, "url": 1, "url_md5": 1, "create_time": 1
        },order=[
            # {"Type":1,"Field":"create_time"},
                 {"Type":1,"Field":"building_area"},
                 {"Type":1,"Field":"floor"}],
        conditions=conditions)
        for r in re.get("rows"):
            r["marked"] = ""
            for m in marks:
                if(m.get("floor")==r.get("floor") and
                   m.get("community") == r.get("community") and
                   m.get("building_area") == r.get("building_area") and
                   m.get("title") == r.get("title")

                ):
                    r["marked"] = m["marked"]
                    break
        if marked:
            re1={"rows":[],"total":0}
            for r in re.get("rows"):
                if r.get("marked","") in marked:
                    re1["rows"].append(r)
            re1["total"]=len(re1["rows"])
            re=re1

        return re
    def fixPosition(self, record=None, *args, **kwArgs):
        getBaiduCoordinates()
        return "OK"


@wildcard("/nms/house_mark/")
class NmsHouse_markCRUD(CRUD):
    def __init__(self):
        self.module = misc_house_mark
    def update(self, record=None, *args, **kwArgs):
        if record:
            if  record.get('_id'):
                del  record["_id"]
            o=self.module.get({
                "floor":record.get("floor"),
                "community":record.get("community"),
                "building_area":record.get("building_area"),
                "title":record.get("title"),
            })
            if o:
                record["_id"]=o["_id"]
            return self.module.upsert(** record)
        raise Exception('无效更新!')

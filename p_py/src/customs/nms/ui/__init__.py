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

    def list(self, record={}, *args, **kwArgs):
        community=record.get("community")
        source={"driver":"mysql"}
        d=getDB(source,"anjuke_secondhand_house")
        conditions=[
        ]
        if community:
            conditions.append( {"Field":"community","Value":community,"Group":1,"Operate":"=","Relation":"and"})

        re=d.items(fields={
            "id": 1, "total_price": 1, "total_price_unit": 1, "avg_price": 1, "avg_price_unit": 1, "title": 1,
            "house_type": 1,
            "building_area": 1, "building_area_unit": 1, "floor": 1, "building_time": 1, "community": 1, "city": 1,
            "area": 1,
            "address": 1, "advantage": 1, "salesman": 1, "url": 1, "url_md5": 1, "create_time": 1
        },order=[{"Type":1,"Field":"create_time"}],
        conditions=conditions)
        return re
    def fixPosition(self, record=None, *args, **kwArgs):
        getBaiduCoordinates()
        return "OK"


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
          else:
              return CRUD.action(self, act, *args, **kwArgs)  
              
    def fixPosition(self, record=None, *args, **kwArgs):
        getBaiduCoordinates()
        return "OK"

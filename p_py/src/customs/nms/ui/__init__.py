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
from webservice import POST



from bson.objectid import ObjectId




@wildcard("/nms/misc_info/")
class NmsMiscCRUD(CRUD):

    def __init__(self):
        self.module = misc_info
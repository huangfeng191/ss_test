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
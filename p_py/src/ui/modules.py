# -*- coding: utf-8 -*-
# Module  : ui.modules
# Author  : fengfeng
# Date    : 2017-07-15
# Version : 1.0

# 导入path 处理
import logging

import ctx



# 动态导入模块
import importlib

for o in ctx.customs:

    try:
        importlib.import_module("customs.%s.ui" % o)
    except Exception, e:
        logging.error(e)



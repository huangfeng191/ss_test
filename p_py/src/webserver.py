# -*- coding: UTF-8 -*-
# Module  : boot
# Description : 启动脚本

import os, site
# 添加临时环境变量 os.getcwd() 当前路径
site.addsitedir(os.path.join(os.getcwd(), '..', 'lib'))


import sys

reload(sys)
sys.setdefaultencoding("utf-8");  # @UndefinedVariable
 

import web
import misc.static
urls = (
    '/', 'index'
)

class index:
    def GET(self):
        return "Hello, world!"



if __name__ == "__main__":
    dirs = []
    port = 8822
    web.wsgi.runwsgi = lambda func, addr=('0.0.0.0', port): misc.static.run_multiapp(func, addr, dirs)
    app = web.application(urls, globals())
    app.run()
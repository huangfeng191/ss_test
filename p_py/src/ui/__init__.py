# -*- coding: utf-8 -*-
import web
import sys
import misc.static
def _cookie_name():
    if web.ctx.host and ':' in web.ctx.host:
        return 'sid' + web.ctx.host.split(':')[1]
    return 'sid'


urls=()



def path(*uris):
    class ClassWrapper:
        def __init__(self, cls):
            global urls
            for uri in uris:
                urls += (uri, cls)
            self.other_class = cls

        def __call__(self, *args, **kwArgs):
            return self.other_class(*args, **kwArgs)

    return ClassWrapper




# 引入路由


# CRUD 使用
def wildcard(base, suffix='\.json'):
    return path(base + '([^/]+)' + suffix)


import biz

# 导入模块
import modules

def main(argv=None):
    argv = argv or sys.argv
    web.config.session_parameters['cookie_name'] = _cookie_name
    web.config.debug = False
    web.config.session_parameters['cookie_domain'] = None
    web.config.session_parameters['timeout'] = 30 * 24 * 3600
    web.config.session_parameters['secret_key'] = 'FENGFENG'
    web.config.session_parameters['cookie_path'] = '/'
    port = 82
    if len(argv) > 1:
        port = int(argv[1])
    dirs=[]
    web.wsgi.runwsgi = lambda func, addr=('0.0.0.0', port): misc.static.run_multiapp(func, addr, dirs)

    app = web.application(urls, globals())
    app.run()   
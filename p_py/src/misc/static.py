# -*- coding: utf-8 -*-
# Module  : 
# Author  : fengfeng
# Date    : 
# Version : 1.0
# 返回静态文件资源***********
import web.httpserver
from web.httpserver import StaticApp, StaticMiddleware, LogMiddleware,\
  WSGIServer
import os

class MultiStaticApp(StaticApp):
  
  """WSGI application for serving static files."""
  def __init__(self, environ, start_response, dirs=[]):
    
    self.dirs = dirs
    self.headers = []
    self.environ = environ
    self.start_response = start_response
    
  def __iter__(self):
    
    environ = self.environ

    self.path = environ.get('PATH_INFO', '')
    self.client_address = environ.get('REMOTE_ADDR','-'), \
                          environ.get('REMOTE_PORT','-')
    self.command = environ.get('REQUEST_METHOD', '-')

    from cStringIO import StringIO
    self.wfile = StringIO() # for capturing error
    
    for d in self.dirs:
      path = self.translate_path(d + self.path)
      if os.path.isfile(path):
        self.path = d + self.path
        break

    try:
      
      path = self.translate_path(self.path)
      etag = '"%s"' % os.path.getmtime(path)
      client_etag = environ.get('HTTP_IF_NONE_MATCH')
      self.send_header('ETag', etag)
      
      if etag == client_etag:
        self.send_response(304, "Not Modified")
        self.start_response(self.status, self.headers)
        raise StopIteration
    except OSError:
      pass # Probably a 404

    f = self.send_head()
    self.start_response(self.status, self.headers)

    if f:
      block_size = 16 * 1024
      while True:
        buf = f.read(block_size)
        if not buf:
          break
        yield buf
      f.close()
    else:
      value = self.wfile.getvalue()
      yield value
# 读取静态文件 *********
# 很重要
class MultiStaticMiddleWare(StaticMiddleware):
  # prefix static
  def __init__(self, app, prefix='/static/', dirs=[]):
    
    self.app = app
    self.prefix = prefix
    self.dirs = dirs

  def __call__(self, environ, start_response):
    
    path = environ.get('PATH_INFO', '')
    path = self.normpath(path)

    if path.startswith(self.prefix):
        return MultiStaticApp(environ, start_response, self.dirs)
    else:
        return self.app(environ, start_response)
      
def run_multiapp(func, server_address=("0.0.0.0", 8080), dirs=[]):
  
    func = MultiStaticMiddleWare(func, dirs=dirs)
    func = LogMiddleware(func)
    
    web.httpserver.server = WSGIServer(server_address, func)

    if web.httpserver.server.ssl_adapter:
        print "https://%s:%d/" % server_address
    else:
        print "http://%s:%d/" % server_address

    try:
        web.httpserver.server.start()
    except (KeyboardInterrupt, SystemExit):
        web.httpserver.server.stop()
        web.httpserver.server = None
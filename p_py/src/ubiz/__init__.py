# -*- coding: utf-8 -*-


# 导入测试模块




import web,ctx
from ui.route import *
from ui import *
from web.contrib.template import render_mako
from webservice import POST
get_path_for_post="E:/d_project/ss_test/nms_new_rest/interface/"
render_ubiz = render_mako(directories=['templates/ubiz'],input_encoding='utf-8',output_encoding='utf-8',)


# 跳转根目录
@path("/")
class Index:
    def __init__(self):
        self.index = ctx.get("web", "index")
    def GET(self, _cid=None, _customer=None, _role=None, *args, **kwArgs):
        index = self.index
        raise web.seeother(index)


@path("/ubiz/index.html")
class UbizIndex:

    def GET(self):
        return render_ubiz["index"]()

@path("/admin.html")
class UbizIndex:

    def GET(self):
        return render_ubiz["admin"]()        


@path("/ubiz/local/post.json")
class UbizLocal(POST):
    def get_data(self, AType=None, _scid=None, _role=None, _user=None, _cid=None, _customer=None, *args, **kwArgs):
        from misc.files import getContent
        import  json
        # 路径，文件名， 完整路径
        pre,f,p=get_path_for_post,"temp1",get_path_for_post+"/temp1.json"

        if kwArgs.get("file"):
           f=kwArgs.get("file")
        if kwArgs.get("prefix"):
            pre=kwArgs.get("prefix")   
        if not kwArgs.get("path"):
            p="%s%s.json"%(pre,f)
        else:
            p= kwArgs.get("path")     
        f=getContent(p)
        if f:
           return  json.loads(f)
        else:
           raise Exception("请先维护目录")


    def action(self, dks=None, *args, **kwArgs):
        return self.get_data(*args, **kwArgs)

@path("/ubiz/local/info.json")
class UbizLocalInfo(POST):
    def get_data(self, AType=None, _scid=None, _role=None, _user=None, _cid=None, _customer=None, *args, **kwArgs):
        from misc.files import getFiles
        import  json
         # 路径，
        pre=get_path_for_post

        if kwArgs.get("prefix"):
            pre=kwArgs.get("prefix")   
        f=getFiles(pre,".json",True)
        if f:
            a=[]
            for r in f:
                a.append({"path":r,"file":r.replace(pre,"").replace(".json","")})
            return a
        else:
           raise Exception("请先维护目录")


    def action(self, dks=None, *args, **kwArgs):
        return self.get_data(*args, **kwArgs)        



@path("/ubiz/local/tojson.json")
class UbizLocalTojson(POST):
    def get_data(self,tp="blank", *args, **kwArgs):
        from misc.files import getFiles
        import  json
         # 路径，
        # 
        from collections import OrderedDict
        if tp=="blank":
            a=kwArgs.get("a") or ""
            retO=OrderedDict()
            a=a.replace("\r","")
            b=a.split("\n")
            _a=[]
            for r in b :
                l2=r.split(",")
                if len(l2)==1:
                    _a.append(l2[0])
                else:
                    for r2 in l2:
                        _a.append(r2)
            for r in _a:
                s=filter(lambda x:x  ,r.split(" "))
                if len(s)==2:
                    retO[s[1]]=s[0]
            return retO
        else:
            return {}    




    def action(self, dks=None, *args, **kwArgs):
        return self.get_data(*args, **kwArgs)                

from test import *
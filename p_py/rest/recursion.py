# -*- coding: utf-8 -*-

    def checkChild(self,r,o):
        def by_in(r):
            if r.get("Type")=="D":
                return True
            elif r.get("Id") in o:
                return True
            else:
                return False
        if r.get("children"):
            r["children"]=filter(by_in,r.get("children"))
        for r1 in  r.get("children",[]):
            if r1.get("children",[]):
                r["children"]=self.checkChild(self,r,o)
    def kcTree(self,*args,**kwargs):
        pass
        l=self.module.items(query={"count":{"$gt":0}})
        o={}
        for r in l:
            if r.get("count")> (r.get("borrowcount",0) or 0):
                o[r.get("tpid")]=1

        if kwargs.get("tree"):
            for r in kwargs.get("tree",[]):
                if r.get("children",[]):
                   self.checkChild(r,o)
        return  kwargs.get("tree")




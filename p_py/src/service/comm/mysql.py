# -*- coding: utf-8 -*-
# Module  : MysqlCRUD
# Author  : chending
# Date    : 2016-3-4
# Version : 1.0

import logging
from collections import OrderedDict
from datetime import datetime
from contextlib import closing
import os 
import time
import decimal

os.environ['NLS_LANG'] = 'SIMPLIFIED CHINESE_CHINA.UTF8'

 
# Mysql 
class MySqlCRUD:
     
    def __init__(self, db, collection, ty='table', alias=None, *args, **kwArgs):
       
        self.ty = ty
        self.collection = collection if ty == 'table' else '(' + alias + ')'
        self.db = db
    
     #测试连接
    def test_connect(self):
        try:
            sSec =time.localtime(time.time()).tm_sec
            self.single('SELECT 1')
            eSec = time.localtime(time.time()).tm_sec
            return eSec - sSec
        except Exception,e:
            return 25
     
    def execute(self, sql, params=(), callback=None):
       
        try:
          with closing(self.db.connection()) as conn:
            with closing(conn.cursor()) as cursor:
                logging.debug(sql)
                 
                ex = cursor.execute(sql, params)
                if callback: return callback(cursor)
                return ex
        except Exception, e:
            logging.exception(e)
            raise e;
     
    def fetchall(self, sql, params={}):
        return self.execute(sql, params, lambda x: x.fetchall())
    
    def fetchallwithcolumns(self, sql, params={}):
        return self.execute(sql, params, lambda x: {'data': x.fetchall(), 'cols': x.column_names})
     
    def fetchone(self, sql, params={}):
        return self.execute(sql, params, lambda x: x.fetchone())
   
    def single(self, sql, params={}):
        return self.execute(sql, params, lambda x: x.fetchone()[0])
     
    def tables(self):
       
        rows = self.fetchall("show tables")
        return [r[0] for r in rows] or []
   
     
    def columns(self):
        
        if self.ty == 'table':
          
            sql = 'show full columns from %s' % self.collection
                 
            rs = []
            for i in self.fetchall(sql):
                v = OrderedDict()
                v['column'] = i[0]
                v['otype'] = i[1]  # 数据库原始类型
                    
                if v['otype'] in ['VARCHAR', 'NVARCHAR', 'CHAR', 'NCHAR']:
                    v['type'] = 'String'
                elif v['otype'] in ['DATETIME', 'DATETIME2']:
                    v['type'] = 'Date'
                elif v['otype'] == 'TIMESTAMP':
                    v['type'] = 'Time'                  
                elif v['otype'] in ['INT', 'BIGINT']:
                    v['type'] = 'Int'  
                elif v['otype'] in ['FLOAT', 'DECIMAL']:
                    v['type'] = 'Float'
                else:
                    v['type'] = 'String'
                         
                v['name'] = i[0] if i[8] is None else i[8] 
                rs.append(v)
            return rs
              
        else:
              
            rs = [] 
                
            def collector(datas):
              
                import MySQLdb
                for i in datas.description:
                    v = OrderedDict()
                    v['column'] = i[0]
                            
                    if i[1] == MySQLdb.STRING:
                        v['type'] = 'String'
                    elif i[1] == MySQLdb.NUMBER:
                        v['type'] = 'Number'
                    elif i[1] == MySQLdb.BINARY:
                        v['type'] = 'Binary'
                    elif i[1] == MySQLdb.DATE:
                        v['type'] = 'Date'
                    elif i[1] == MySQLdb.TIME:
                        v['type'] = 'Time'
                    elif i[1] == MySQLdb.TIMESTAMP:
                        v['type'] = 'TimeStamp'
                    elif i[1] == MySQLdb.DATETIME:
                        v['type'] = 'DateTime'
                    else:
                        v['type'] = 'String'
                        
                    v['otype'] = v['type']
                    v['name'] = i[0]
                    rs.append(v)
                    
            sql = 'select * from %s a limit 0,1 ' % self.collection
            self.execute(sql, callback=collector)
                
            return rs
     
    '''
    @param fields:筛选字段
    @param order:排序
    @param group:分组
    @param aggregate:聚合
    @param conditions:条件组合
    @param index:页码 从1开始
    @param size:条数  默认20
    @param count: 是否合计  
    '''
    def items(self, fields=None, order=None, group=None, aggregate=None, conditions=None, index=None, size=None, count=True, *args, **kwArgs):
         
        strField, strSort, strGroups, sqlTemplate, countTemplate = '', '', '', '', ''
        strCondtion = 'where 1=1 '
        condtionLS = []  # 参数化结构
         
        # 聚合列表为 fx的直接放进fields
        if aggregate:
            if fields is None:fields = {}
            for ag in aggregate:
                if ag.get('Type', 'fx') == 'fx':
                    fn = ''
                    if ag.get('Alias', '') == '':
                        fn = ag.get('Field')
                    else:
                        fn = ' (' + ag.get('Field') + ') as ' + ag.get('Alias')
                    fields[fn] = 1
        # 筛选字段 
        if fields: 
            for f in fields.items():
                fn = f[0]
                i = f[1]
                flag = False
                 
                if i == 1:  # 是否包含字段 
                    # 查询是否包含在聚合函数里 
                    if aggregate:
                        for ag in aggregate: 
                            if ag['Field'] == fn and ag['Type'] != 'fx':
                                    strField += ag['Type'] + '(' + fn + ') as ' + ag.get('Alias', fn) + ',' 
                                    flag = True
                                    break
                                # fn=ag.get('Alias',fn)
                    # 没有包含聚合函数
                    if flag == False:
                        strField += fn + ','
                             
            strField = strField[:len(strField) - 1] if fields else 'a.*'
            # print '筛选字段-------->'+strField
        else:
            self.collection = self.collection + ' a '
            strField = 'a.*'
         
        # 分组字段
        if group:
            groups = ",".join([g.get('Field') for g in group])
            if groups:
              groups = "group by %s" % groups
            strGroups = groups or ""
               
        # 字段排序
        if order:
            s = {'asc':[], 'desc':[]} 
            for o in order:
                order = 'desc' if o['Type'] == -1 else 'asc'
                s[order].append(o['Field'])
            if len(s['asc']) > 0:
                strSort += ','.join(s['asc']) + ' asc'
            if len(s['desc']) > 0:
                strSort = strSort + ',' + (','.join(s['desc'])) + ' desc' if strSort != '' else (','.join(s['desc'])) + ' desc' 
            strSort = 'order by ' + strSort
            # print '排序字段-------->'+strSort
        # 查询条件
        if conditions:
             
            for c in list(set([ c.get('Group', 1) for c in conditions ])): 
                tempCondition = ''
                lastRelation = ''
                for v in range(len(conditions)):
                    if conditions[v]['Group'] == c: 
                         
                        if conditions[v]['Operate'] == 'like':
                            conditions[v]['Operate'] = ' like '
                            condtionLS.append('%' + conditions[v]['Value'] + '%')
                            conditions[v]['Value'] = '%s' 
                             
                        elif conditions[v]['Operate'] == 'nil':
                            conditions[v]['Operate'] = ' is not null'
                            conditions[v]['Value'] = None
                             
                        elif conditions[v]['Operate'] == 'in':
                            conditions[v]['Operate'] = ' in '
                            condtionLS.append(conditions[v]['Value'])
                            conditions[v]['Value'] = "%s"
                        else:
                            condtionLS.append(conditions[v]['Value'])
                            if isinstance(conditions[v]['Value'], int):
                                conditions[v]['Value'] = '%d'
                            else:
                                conditions[v]['Value'] = '%s'
                             
                         
                        if conditions[v]:
                            tempCondition += ' ' + conditions[v]['Field'] + conditions[v]['Operate'] + conditions[v]['Value'] + ' ' + conditions[v]['Relation']
                        else:
                            tempCondition += ' ' + conditions[v]['Field'] + conditions[v]['Operate'] + ' ' + conditions[v]['Relation']
                           
                        lastRelation = conditions[v]['Relation']
                     
                tempCondition = ' and (' + tempCondition[:tempCondition.rfind(lastRelation)] + ')' if tempCondition else ''
                strCondtion += tempCondition    
            # print '查询条件-------->'+strCondtion   
         
         
         
        if index and size:  # 是否分页
            startSize = (index - 1) * size if index > 0 else 0
            endSize = index * size
             
            sqlTemplate = '''
                SELECT
                      {Field}
                      FROM {collection} {Condtion}
                      {Groups}
                      {Sort}
                      limit {startSize},{endSize}
            '''.replace('{Field}', strField)\
            .replace('{collection}', self.collection)\
            .replace('{Condtion}', strCondtion)\
            .replace('{Groups}', strGroups)\
            .replace('{Sort}', strSort)\
            .replace('{endSize}', str(endSize))\
            .replace('{startSize}', str(startSize))
             
        else:
            sqlTemplate = '''
               SELECT
                      {Field}
                      FROM {collection} {Condtion}
                      {Groups}
                      {Sort}
            '''.replace('{Field}', strField)\
             .replace('{collection}', self.collection)\
             .replace('{Condtion}', strCondtion)\
             .replace('{Groups}', strGroups)\
             .replace('{Sort}', strSort)
         
        # 是否查询全部
        if count:
           
            countTemplate = '''
                SELECT count(*)
                       FROM {collection} {Condtion}
                       {Groups}
            '''.replace('{Field}', strField)\
             .replace('{collection}', self.collection)\
             .replace('{Condtion}', strCondtion)\
             .replace('{Groups}', strGroups)
         
        # 组装数据
        def assembler(data=None, _fields={} ):
           
          def wrapper(v):
            if isinstance(v, datetime):
                v = v.strftime('%Y-%m-%d %H:%M:%S')
            elif isinstance(v, decimal.Decimal):
                v = float(v)
            return v
           
          r = []
           
          for c in data:
             
            n = len(c)
            v = OrderedDict()
            r.append(v) 
            f = _fields.items()
             
            for i in xrange(0, n - 1):
              k = f[i][0] if _fields else '%s' % (i + 1)
              v[k] = wrapper(c[i])
               
          return r
         
        rs = {}
         
        if count:
          rs['total'] = self.single(countTemplate, tuple(condtionLS))
        
        if not fields:
            res = self.fetchallwithcolumns(sqlTemplate, tuple(condtionLS))
            rs['rows'] = assembler(res['data'], OrderedDict([(item, 1) for item in res['cols']]))
        else:
            rs['rows'] = assembler(self.fetchall(sqlTemplate, tuple(condtionLS)), fields)
         
        return rs



'''
fields = {
   'Module':1,
   'Mode':1
}

aggregate = [
    {'Field':'STATE','Type':'fx','Alias':'S'}
]

group= [
    {'Field':'name'}
]

sorts = [
    {'Field':'Sysno','Type':-1},
    {'Field':'Stat','Type':-1}
]

condtion = [
            { 'Field': "Stat", 'Operate': "=", 'Value': 1, 'Relation': "and",'Group':1},
            { 'Field': "Remark", 'Operate': "like", 'Value': '50', 'Relation': "and",'Group':1}
           ]
'''


''' 
@summary:调用示例
'''

# connect=MySQLdb.connect(host="localhost",user="root",passwd="garychen871043",db="world",charset="utf8")
# conn = MySqlCRUD(db=connect,collection='',ty='',alias='select ID ,Name from city')
# tb = conn.columns()
# pass

 



    

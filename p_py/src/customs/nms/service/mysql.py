# -*- coding: UTF-8 -*-
# Module  : p_py
# Description :
# Author  : Wujj
# Date    : 2020/5/5
# Version : 1.0
from DBUtils.PooledDB import PooledDB
db_source = {}
def init_db_source(_id, driver, **kwArgs):

    if driver == 'mysql':
        import MySQLdb
        # db_source[_id] = PooledDB(MySQLdb, **{'host': host, 'user': username, 'passwd': password, 'db': database,
        #                                       'charset': 'utf8'})
        db_source[_id] = PooledDB(MySQLdb, **{'host': "localhost", 'user': "root", 'passwd': "Sandy123", 'db': "anjuke",
                                              'charset': 'utf8'})
    return db_source[_id]

def get_db_source(_id='default', ** kwArgs):
    return db_source.get(_id) or init_db_source(_id, ** kwArgs)

def getDB(source, table):
    db = get_db_source(**source)
    if source.get('driver', '') == 'mysql':
        from service.comm.mysql import MySqlCRUD
        return MySqlCRUD(db, table)

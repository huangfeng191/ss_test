# -*- coding: utf-8 -*-



import os,shutil,re


# 根据路径获取文件，不包括目录
# postfix hint: .md
# isPath  True 输出完整路径
def getFiles (srcPath,postfix=None,isPath=False):
    aFiles = [x for x in os.listdir(srcPath) if
              os.path.isfile(os.path.join(srcPath, x)) ]

    def not_empty(s):
        if os.path.splitext(s)[1]==postfix:
            return True
        else:
            return False
    if postfix:
        aFiles=filter(not_empty,aFiles)
    if isPath:
        def f(x):
            return os.path.join(srcPath, x)
        aFiles=map(f,aFiles)

    return aFiles


# path  读
# transform
# write

# 读取文件内容
def getContent(file_path):
    content=""
    with open(file_path, 'r') as f:
        content=f.read()
    return content


# 保存内容到文件
def saveContent(content,file_path):
    fpath, _ = os.path.split(file_path)  # 分离文件名和路径
    if not os.path.exists(fpath):
        os.makedirs(fpath)
    with open(file_path, 'w') as f:
            f.write(content)
    return "OK"


# 删除文件
def delFile(file_path):
    os.remove(file_path)

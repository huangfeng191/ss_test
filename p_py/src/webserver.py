# -*- coding: UTF-8 -*-
import os, site
# 添加临时环境变量 os.getcwd() 当前路径
site.addsitedir(os.path.join(os.getcwd(), '..', 'lib'))
import PlatLib  # 添加平台环境变量
import ctx
import ui

if __name__ == "__main__":
    ui.main()


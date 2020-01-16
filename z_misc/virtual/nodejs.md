最近window系统转向linux系统开发，linux系统的确适合程序员的开发。 作为前端安装了nodejs和npm，遇到了一些坑，赶紧记录下来

第一种安装方法：
安装nodejs  ： 

sudo  apt-get install nodejs

运行 nodejs  -v   会弹出安装node的版本号

这里使用的是 nodejs  并不是常用的node ，可以通过 


sudo ln -s /usr/bin/nodejs /usr/bin/node

命令让node与nodejs
建立软连接，接着就可以使用 node命令

安装npm:


 sudo  apt-get install npm
测试安装是否成功: npm -v 弹出安装的版本号，即可证明安装成功



第二种安装方法：

先安装，nvm，即是Node Version Manager(Node版本管理器)


# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
 或者使用  wget

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
之后需要激活nvm:

# $ source ~/.nvm/nvm.sh
激活完成后，安装node

# nvm install node 
安装完成后，切换到该版本


# nvm use node

总结：
 个人比较喜欢第二种方式，第二种方式会安装最新的版本，而且可以可以通过nvm可以任意切换node的版本
--------------------- 
作者：Sir814 
来源：CSDN 
原文：https://blog.csdn.net/gaomengwang/article/details/77540429 
版权声明：本文为博主原创文章，转载请附上博文链接！

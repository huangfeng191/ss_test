

# step1:

| step | doing                                           | desc    |
| ---- | ----------------------------------------------- | ------- |
| 1    | bash <(curl -L -s https://install.direct/go.sh) | 安装 v2 |
| 2    | 修改配置文件                                    |         |

# step2: node 


| step | doing                                                                                | desc |
| ---- | ------------------------------------------------------------------------------------ | ---- |
| 1    | curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh \| bash |      |
| 1    | source ~/.nvm/nvm.sh                                                                 |      |
| 1    | nvm install node                                                                     |      |
| 1    | nvm use node                                                                         |      |



# step3 : 启动stock

| step | doing                         | desc      |
| ---- | ----------------------------- | --------- |
| 1    | sudo apt update               | 安装mongo |
| 1    | sudo apt install -y mongodb   | 安装mongo |
| 1    | sudo systemctl status mongodb | 查看状态  |
| 1    | sudo systemctl enable mongod  |           |
| 1    | service mongod restart        | 重启mongo |

| 1    | npm install forever -g | 安装mongo |
| 1    | pt install net-tools   | netstat |

| 1    | npm install forever -g                   |      |
| 2    | forever start /etc/stock/service/bin/www |      |










| shortcut      | view            | rating |
| ------------- | --------------- | ------ |
| netstat -tnlp | 查看 端口是否打 |        |






启用和禁用
sudo systemctl enable XX
sudo systemctl disable XX
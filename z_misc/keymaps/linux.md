# https:

| step                                                                                                                          | purpose            | rating        |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| systemctl stop firewalld                                                                                                      | 关闭防火墙         |               |
| iptables -I INPUT -p tcp --dport 80 -j ACCEPT                                                                                 | 允许所有ip访问     |               |
| nginx -s stop                                                                                                                 | 关闭服务           |               |
| sudo ~/.acme.sh/acme.sh --issue -d fengdo.xyz --standalone -k ec-256                                                          | 生成证书           | not necessary |
| sudo ~/.acme.sh/acme.sh --renew -d fengdo.xyz --force --ecc                                                                   | 更新证书           |               |
| sudo ~/.acme.sh/acme.sh --installcert -d fengdo.xyz --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key --ecc | 将证书复制到路径下 |               |
| iptables -I INPUT -p tcp --dport 80 -j DROP                                                                                   | 禁止所有ip访问     |               |
| systemctl start firewalld                                                                                                     | 开启防火墙         |               |
| nginx                                                                                                                         | 打开服务           |               |




| shortcut                                | view            | rating |
| --------------------------------------- | --------------- | ------ |
| netstat -tnlp                           | 查看 端口是否打 |        |
| Kill -9 Pid                             | 杀任务          |        |
| find / -name mongodb                    | 寻找命令目      |        |
| unzip -o  20190303.zi                   | 解压            |        |
| forever start etc/stock/service/bin/www | 后台启动        |        |



sudo ~/.acme.sh/acme.sh --issue -d mydomain.me --standalone -k ec-256
sudo ~/.acme.sh/acme.sh --issue -d feng.agency --standalone -k ec-256 




           
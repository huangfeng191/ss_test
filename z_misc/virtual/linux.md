# comm 

## create file:

# touch fileA  
  1. 如果fileA存在，使用touch命令可更改这个文件或目录的日期时间，包括存取时间和更改时间；
  2. 如果fileA不存在，touch命令会在当前目录下新建一个空白文件fileA。

PS. 使用touch指令可更改文件或目录的日期和时间，包括存取时间和更改时间。
    文件的时间属性包括文件的最后访问时间，最后修改时间以及最后在磁盘上修改的时间，
    命令stat显示结果显示了三个时间属性。




# https:

| step                                                                                                                          | purpose            | rating        |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| systemctl stop firewalld                                                                                                      | 关闭防火墙         |               |
| iptables -I INPUT -p tcp --dport 80 -j ACCEPT                                                                                 | 允许所有ip访问     |               |
| nginx -s stop                                                                                                                 | 关闭服务           |               |
| sudo ~/.acme.sh/acme.sh --issue -d xyzdogoli.xyz --standalone -k ec-256                                                          | 生成证书           | not necessary |
| sudo ~/.acme.sh/acme.sh --renew -d xyzdogoli.xyz --force --ecc                                                                   | 更新证书           |               |
| sudo ~/.acme.sh/acme.sh --installcert -d xyzdogoli.xyz --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key --ecc | 将证书复制到路径下 |               |
| iptables -A OUTPUT -p tcp --dport 80 -j DROP                                                                                  | 禁止所有ip访问     |               |
| systemctl start firewalld                                                                                                     | 开启防火墙         |               |
| nginx                                                                                                                         | 打开服务           |               |





| shortcut                                 | view            | rating          |
| ---------------------------------------- | --------------- | --------------- |
| history \grep XXX                        |                 | 查看 端口是否打 |  |
| netstat -tnlp                            | 查看 端口是否打 |                 |
| Kill -9 Pid                              | 杀任务          |                 |
| find / -name mongodb                     | 寻找命令目      |                 |
| unzip -o  20190303.zi                    | 解压            |                 |
| forever start /etc/stock/service/bin/www | 后台启动        |                 |


sudo ~/.acme.sh/acme.sh --issue -d feng.agency --standalone -k ec-256 

sudo ~/.acme.sh/acme.sh --installcert -d feng.agency --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key --ecc 



对于域名: 需要在 godaddy 上先绑定


godaddy 绑定 dns ->  被绑定的dns 里面要有 域名，然后找到ip  

iptables -A OUTPUT -p tcp --dport 80 -j DROP


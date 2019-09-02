
#!/bin/sh

#war包 
#rm /opt/nmsdevs/apache-tomcat-8.0.47/work -rf
#脚本进入,请使用点运行
echo "是否启动主备模式:(启动请按1，否则请按2)"
#接收键盘输入，并把输入的值存放在userinput变量中
read userinput


if [ `ps aux | grep domain | grep -v grep -c` = 0 ]; then
        domain.sh &
fi

sleep 2s

if [ `ps aux | grep domain | grep -v grep -c` = 0 ]; then
        ntfy -port 1777 &
fi

sleep 1s

if [ `ps aux | grep domain | grep -v grep -c` = 0 ]; then
        ns -DOAPort=1778 &
fi

sleep 2s

if [ `ps aux | grep nginx | grep -v grep -c` = 0 ]; then
        echo "start nginx"
        nginx
fi

sleep 2s

if [ `ps aux | grep activemq | grep -v grep -c` = 0 ]; then
        echo "start activemq"
        activemq start


else
        activemq stop
        sleep 10s
        echo "restart activemq"
        activemq start
fi

sleep 5s

if [ `ps aux | grep catalina | grep -v grep -c` = 0 ]; then
        echo "start catalina"
else
        #kill -9 `ps -ef| grep catalina | grep -v grep | cut -c 9-15`
        echo "catalina stop"
        catalina.sh stop
"nms_start.sh" 65L, 1155C                                                                                                                                                                                                      17,1          Top

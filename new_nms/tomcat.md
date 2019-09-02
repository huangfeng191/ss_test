kill -9 `ps -ef| grep catalina | grep -v grep | cut -c 9-15`

catalina.sh start
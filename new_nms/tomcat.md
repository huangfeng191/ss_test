kill -9 `ps -ef| grep catalina | grep -v grep | cut -c 9-15`

catalina.sh start



question :  告警库是不是必须要选择一个实际的告警记录

1 目前控制最大字符 255个
2 支持导入 导出
3 告警编号 告警原因 相同的告警，再次添加知识库的时候，，处理方法可以下拉选择或者填写，


2 


root 查看状态

jps


unzip nms.war 


touch nms.war.deployed


mv nms.war deployments/nms.war/


rm -rf deployments/*



nohup sg-aps-start.sh > aps.log 2>&1 &




kill -9 `ps -ef| grep catalina | grep -v grep | cut -c 9-15`






# UAP 

替换文件
cp -r ./XXX /opt/nmsdevs/sgaps-3.0.0/standalone/deployments/nms.war/src/page


cp -r ./page/* /opt/nmsdevs/sgaps-3.0.0/standalone/deployments/nms.war/src/page


nohup sg-aps-start.sh > aps.log 2>&1 &



PS:

cp -r ./performance.html /opt/nmsdevs/sgaps-3.0.0/standalone/deployments/nms.war/src/page
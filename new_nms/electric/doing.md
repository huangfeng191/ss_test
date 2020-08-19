CREATE TABLE `log_config` (
  `id` int(36) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isDelete` int(4) DEFAULT '0',
  `parent` varchar(36) DEFAULT NULL COMMENT '父结点',
  `object` varchar(50) DEFAULT NULL COMMENT '操作页面',
  `opType` varchar(20) DEFAULT NULL COMMENT '操作动作',
  `logType` varchar(20) DEFAULT NULL COMMENT '日志类型(业务级，系统级)',
  `status` varchar(10) DEFAULT '1' COMMENT '状态（1：记录，0：不记录）',
  `change` varchar(10) DEFAULT NULL COMMENT '是否可以修改（1：可以修改，0：不可修改）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8;


parent   父节点
object
opType
logType
status
change




id, timestamp, isDelete, parent, object, opType, logType, status, change


# 2020-08-18  Tuesday 



init function : at row 1174 

logicTopology.paperW = paperW= 1561
logicTopology.paperH = paperH= 736

basic


logicTopology.scale
  x 
  y 
  coef
  width 840
  height 722.4


issue at  moving 

var setW = 600;
var setH = 516;


logicBlow = Math.floor(paperH * 10 / setH) / 10

pageLeftOffset = (paperW - setW * logicBlow) / 2=(1561-840(600*1.4))/2=360.5


左移时没有生效


logicPaperDocument.ondrop   --  at row 1194 





logicBlow=1.4
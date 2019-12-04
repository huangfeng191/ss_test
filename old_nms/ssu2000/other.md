desc: "Communication"
hwpart: "23413012-000-0"
hwrev: "F.02"
hwserival: "T03420"
sw_art: "14313012-000-5"
swrev: "W.00"









  <th translate="SSU2000_desc">描述</th>
  <th translate="SSU2000_hwpart">序列号</th>
  <th translate="SSU2000_hwrev">硬件编号</th>
  <th translate="SSU2000_hwserival">硬件版本号</th>
  <th translate="SSU2000_sw_art">软件编号</th>
  <th translate="SSU2000_swrev">软件版本号</th>

desc Description	描述
hwpart Serial	序列号
hwrev H/W Part#	硬件编号
hwserival H/W Rev	硬件版本号
sw_art S/W Part#	软件编号
swrev S/W Rev	软件版本号








mtie: "MTIE", threshold: "EL1", t10: "", t100: "", t1k: "", t10k: "", t100k: ""



  default_Mtie["PRS"].push(    {"threshold":"EL1","t10": "12", "t100":"30","t1k": "240","t10k": "310","t100k": "1030"});
	default_Mtie["PRS"].push(    {"threshold":"CL1","t10": "9", "t100":"26","t1k": "215","t10k": "280","t100k": "930"});
	default_Mtie["PRS"].push(    {"threshold":"EL2","t10": "15", "t100":"40","t1k": "300","t10k": "390","t100k": "1290"});
	default_Mtie["PRS"].push(    {"threshold":"CL2","t10": "12", "t100":"35","t1k": "270","t10k": "350","t100k": "1160"});
	default_Mtie["DS1"].push(    {"threshold":"EL1","t10": "260", "t100":"440","t1k": "810","t10k": "880","t100k": "1600"});
	default_Mtie["DS1"].push(    {"threshold":"CL1","t10": "230", "t100":"400","t1k": "730","t10k": "790","t100k": "1440"});
	default_Mtie["DS1"].push(    {"threshold":"EL2","t10": "325", "t100":"550","t1k": "1010","t10k": "1100","t100k": "2000"});
	default_Mtie["DS1"].push(    {"threshold":"CL2","t10": "290", "t100":"490","t1k": "910","t10k": "990","t100k": "1800"});
	default_Mtie["G811"].push(   {"threshold":"EL1","t10": "23", "t100":"43","t1k": "240","t10k": "310","t100k": "1030"});
	default_Mtie["G811"].push(   {"threshold":"CL1","t10": "20", "t100":"40","t1k": "215","t10k": "280","t100k": "930"});
	default_Mtie["G811"].push(   {"threshold":"EL2","t10": "28", "t100":"53","t1k": "300","t10k": "390","t100k": "1290"});
	default_Mtie["G811"].push(   {"threshold":"CL2","t10": "25", "t100":"48","t1k": "270","t10k": "350","t100k": "1160"});
	default_Mtie["G812"].push(   {"threshold":"EL1","t10": "1000", "t100":"2000","t1k": "5000","t10k": "5000","t100k": "0"});
	default_Mtie["G812"].push(   {"threshold":"CL1","t10": "900", "t100":"1800","t1k": "4500","t10k": "4500","t100k": "0"});
	default_Mtie["G812"].push(   {"threshold":"EL2","t10": "1200", "t100":"2400","t1k": "6000","t10k": "6000","t100k": "0"});
	default_Mtie["G812"].push(   {"threshold":"CL2","t10": "1080", "t100":"2160","t1k": "5400","t10k": "5400","t100k": "0"});

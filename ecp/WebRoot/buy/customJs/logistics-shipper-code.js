//获取快递名称
function getLogisName(ShipperCode){
	var logisName = null ;
	$.each(shipperData,function(i,n){
		if(n.ShipperCode == ShipperCode){
			logisName = n.logisName ;
			return false;
		}
	});
	if(logisName == null){
		logisName = ShipperCode ;
	}
	return logisName ;
}

shipperData=[
		{"ShipperCode":"SF","logisName":"顺丰"},
		{"ShipperCode":"HTKY","logisName":"百世快递"},
		{"ShipperCode":"ZTO","logisName":"中通"},
		{"ShipperCode":"STO","logisName":"申通"},
		{"ShipperCode":"YTO","logisName":"圆通"},
		{"ShipperCode":"YD","logisName":"韵达"},
		{"ShipperCode":"YZPY","logisName":"邮政平邮"},
		{"ShipperCode":"EMS","logisName":"EMS"},
		{"ShipperCode":"HHTT","logisName":"天天"},
		{"ShipperCode":"JD","logisName":"京东"},
		{"ShipperCode":"QFKD","logisName":"全峰"},
		{"ShipperCode":"GTO","logisName":"国通"},
		{"ShipperCode":"UC","logisName":"优速"},
		{"ShipperCode":"DBL","logisName":"德邦"},
		{"ShipperCode":"FAST","logisName":"快捷"},
		{"ShipperCode":"AMAZON","logisName":"亚马逊"},
		{"ShipperCode":"ZJS","logisName":"宅急送"}
];

$(function(){
	var logisId = GetQueryString(logisId);
	//$.post("ns/webLogis/followLogis.action",{"logisId":logisId},function(data){
	$.post("buy/json/logistic.json",function(data){
		//console.log(JSON.stringify(data));
		if(data == null ){
			alert("没有数据！");
		}else{
			var op = getLogisHtml(data) ;
			$("#aaa").empty().html(op);
		}
	});
	
});


function getLogisHtml(data){
	var state ;
	switch (data.State) {
	case 0:
		state = "无轨迹" ;
		break;
	case 2:
		state = "在途中" ;
		break;
	case 3:
		state = "已签收" ;
		break;
	case 4:
		state = "问题件" ;
		break;
	default:
		break;
	}
	
	var op = '<div class="package-title">\
		<div class="m-item">\
			<div class="item-info">\
				<p class="log-status">\
					物流状态:<span>'+ state +'</span>\
				</p>\
				<p>承运公司：'+ getLogisName(data.ShipperCode) +'</p>\
				<p>快递单号：'+ data.LogisticCode +'</p>\
			</div>\
		</div>\
		<div class="clear"></div>\
	</div>\
	<div class="package-status">\
		<ul class="status-list">';
		
	if(data.Traces != null ){
		for(var i=0 ; i<data.Traces.length ; i++){
			op += getDetailHtml(data.Traces[i]);
		}
	}
	
	op+='</ul>\
	</div>' ;
	
	return op ;
}

function getDetailHtml(Trace){
	var op = '<li class="latest">\
		<p class="text">'+ Trace.AcceptStation +'</p>\
		<div class="time-list">\
			<span class="date">'+ Trace.AcceptTime +'</span>\
		</div>\
	</li>' ;
	return op ;
}

//获取url 中参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
    	 return  unescape(r[2]);
     }else{
    	 return null;
     }
}


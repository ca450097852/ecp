$(function(){
	$("#leftOrderId").addClass("active");
	$.ajax({
		url : 'web/shop/hadshop.action',
	    type: "POST",
	    data: {"memberId":null},
	    dataType: "JSON",
	    cache:false,
	    async:false,
	    success: function (shop) {   
	    	if(shop&&shop!=null){
	    		if(shop.shopState!=2){
	    			window.location.href="seller/shop/waitshop.jsp";
	    		}
	    		var shopId = shop.shopId;
	    		var memberId = shop.memberId;
	    		var shopName = shop.shopName;
	    	}else{
	    		window.location.href="seller/shop/noshop.jsp";
	    	}
	    }
	});
	refreshTab1();
	
	
});

function getPage(data){
	layui.use(['laypage', 'layer'], function(){
		  var laypage = layui.laypage
		  ,layer = layui.layer;
		 
		  laypage({
			    cont: 'layuipage'
			    ,pages:  Math.ceil(data.total/nums) //得到总页数
			    ,skin: '#0085D7'
			    ,skip: true
			    ,jump: function(obj, first){
				    //得到了当前页，用于向服务端请求对应数据
				    var curr = obj.curr;
				    if(page!=curr){
				    	 page=curr;
				    	 refreshTab1();
				    }
				  }
			  });
		});
}

var page=1;
var nums =5; //每页出现的数据量

//刷新所有订单
function refreshTab1(){
	$.ajax({
	   type: "POST",
	   url: "weborder/pageBySale.action",
	   data : {"order":" order by order_time desc",'rows': nums,'page': page} ,
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var op = getHtmlList(data);
		   $('#tab1 .order-list').html(op);
		   if(page==1){
			   getPage(data); 
		   }
	   }
	});
}

//刷新待付款订单
function refreshTab2(){
	var queryParam = {"params[orderState]":1,"params[payState]":1,"order":" order by order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/pageBySale.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab2 .order-list').html(op);
		   }
		});
}

//刷新待发货订单
function refreshTab3(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":" order by order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/pageBySale.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab3 .order-list').html(op);
		   }
		});
}

//刷新待收货订单
function refreshTab4(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":" order by order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/pageBySale.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab4 .order-list').html(op);
		   }
		});
}

//刷新待评价订单
function refreshTab5(){
	var queryParam = {"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":" order by order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/pageBySale.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab5 .order-list').html(op);
		   }
		});
}
//加载tab
function loadTab(hr){
	var tabHtml ;
	
	switch (hr) {
	case "#tab1":
		tabHtml = $('#tab1 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab1();
		}
		break;
	
	case "#tab2":
		tabHtml = $('#tab2 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab2();
		}
		break;
		
	case "#tab3":
		tabHtml = $('#tab3 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab3();
		}
	break;
	
	case "#tab4":
		tabHtml = $('#tab4 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab4();
		}
	break;
	
	case "#tab5":
		tabHtml = $('#tab5 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab5();
		}
	break;
	
	default:
		break;
	}
}
function getHtmlList(data){
	var op = '' ;
	var rows = data.rows ;
	for(var i= 0 ; i < rows.length ; i++){
		op += getOrderHtml(rows[i].tbOrder,rows[i].tbOrderDetailList);
	}
	return op ;
}

//获取一个订单的html
function getOrderHtml(tbOrder,tbOrderDetailList){
	var op = '';
	if(tbOrder != null && tbOrderDetailList!=null){
		if(tbOrder.orderState == 1){//交易中
			if(tbOrder.payState == 1){//待付款
				//这里写“等待买家付款，一键支付”的div
				return getPayment(tbOrder,tbOrderDetailList) ;
			}else if(tbOrder.payState == 2){//已付款
				if(tbOrder.sendState == 1){//待发货
					//这里写“买家已付款，提醒发货”的div
					return getPromptShipment(tbOrder,tbOrderDetailList);
				}else if(tbOrder.sendState == 2||tbOrder.sendState == 4){//已发货或拒收
					//这里写“买家已付款，确认收货”的div
					return getConfirmReceipt(tbOrder,tbOrderDetailList);
				}else{
					op = '发货状态异常' ;
					return op ;
				}
				/*}else if(tbOrder.sendState == 3){//已收获 = 交易完成
					
				}*/
			}else{
				op = '支付状态异常！' ;
				return op ;
			}
			
		}else if(tbOrder.orderState == 2 || tbOrder.orderState == 3){//取消或无效
			//这里写“交易关闭，删除订单”div
			return getDeleteOrder(tbOrder,tbOrderDetailList) ;
		}else if(tbOrder.orderState == 4){//交易完成
			if(tbOrder.evaluateState ==1){//买家未评价
				//这里写“交易完成，评价订单”的div
				return getEvaluateOrder(tbOrder,tbOrderDetailList);
			}else{
				//这里写“交易完成，隐藏右侧按钮”的div
				return getCompleteOrder(tbOrder,tbOrderDetailList);
			}
			
		}else if(tbOrder.orderState == 5){//退货
			//暂时用不到（没想好怎么写）
			return '' ;
		}else{
			op = '订单状态异常！';
			return op ;
		}
	}
}

//这里写“等待买家付款，一键支付”的div
function getPayment(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status1">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],0);
		};
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">等待买家付款</p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a onclick="orderState('+tbOrder.orderId+');" style="cursor:pointer;">\
							<div class="am-btn am-btn-danger anniu">取消订单</div></a>\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//这里写“买家已付款，提醒发货”的div
function getPromptShipment(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status2">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],1);
		};
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">买家已付款</p>\
								<p class="order-info">\
									<a  onclick="refund('+tbOrder.orderId+');" style="cursor:pointer;">退款</a>\
								</p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<div class="am-btn am-btn-danger anniu" onclick="sendGoods('+tbOrder.orderId+');">马上发货</div>\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//这里写“买家已付款，查看物流”的div
function getConfirmReceipt(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status3">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],2);
		};
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">等待买家收货</p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<div class="am-btn am-btn-danger anniu" onclick="logistics('+tbOrder.orderId+');">查看物流</div>\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//这里写“交易关闭，删除订单”div
function getDeleteOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status2">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],0);
		};
		var tmp = "";
		if(tbOrder.orderState==2){
			tmp="买家已取消";
		}else if(tbOrder.orderState==3){
			tmp="卖家已取消";
		}
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">'+tmp+'</p>\
							</div>\
						</li>\
						<li class="td td-change"></li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//这里写“交易完成，评价订单”的div
function getEvaluateOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status3">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],2);
		};
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status" style="margin-top: 5px;">\
								<p class="order-info">交易成功</p>\
								<p class="order-info">等待买家评价</p>\
							</div>\
						</li>\
						<li class="td td-change">\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}
//<a><div class="am-btn am-btn-danger anniu" onclick="comment('+tbOrder.orderId+');">评价商品</div></a>\

//这里写“交易完成，隐藏右侧按钮”的div
function getCompleteOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-status2">\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a href="javascript:;">'+ tbOrder.orderId +'</a>\
				</div>\
				<span>成交时间：'+ tbOrder.orderTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
		for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],0);
		};
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-amount">\
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">交易成功</p>\
							</div>\
						</li>\
						<li class="td td-change"></li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//获取订单中一个商品的html
function getDetailHtml(tbOrderDetail,index){
	var op = '\
<ul class="item-list">\
	<li class="td td-item">\
		<div class="item-pic">\
			<a  href="/ecp/webGoods/ns/goods.action?goodsId='+tbOrderDetail.goodsId+'" target="_blank" class="J_MakePoint"> <img src="'+ tbOrderDetail.goodsImg +'" class="itempic J_ItemImg"> </a>\
		</div>\
		<div class="item-info">\
			<div class="item-basic-info">\
				<a  href="/ecp/webGoods/ns/goods.action?goodsId='+tbOrderDetail.goodsId+'" target="_blank">\
					<p>'+ tbOrderDetail.goodsName +'</p>\
					<p class="info-little">规格：' + tbOrderDetail.modelName + '</p>\
			</a>\
			</div>\
		</div>\
	</li>\
	<li class="td td-price"><div class="item-price">' + tbOrderDetail.saledPrice + '</div></li>\
	<li class="td td-number">\
		<div class="item-number">\
			<span>×</span>'+ tbOrderDetail.goodsCount +'\
		</div>\
	</li>\
	<li class="td td-operation">\
		<div class="item-operation">';
	
//	switch (index) {
//	case 0:
//		break;
//	case 1:
//		op += '<a href="refund.html">退款</a>';
//		break;
//	case 2:
////		op += '<a href="refund.html">退款/退货</a>';
//		break;
//	default:
//		break;
//	};
	
	op += '\
		</div>\
	</li>\
</ul>' ;
	return op ;
}

//取消订单
function orderState(orderId) {

	if (!confirm('您真的确定要取消吗?')) {
		return;
    }else{
		$.post(
			'weborder/orderState.action', 
			{
				'orderId' : orderId ,
				'state' : "3"
			},
			function(result) {
				 layer.msg(result);
				$('#tab1 .order-list').empty();
			    refreshTab1();
			    $('#tab2 .order-list').empty();
			    refreshTab2();
			}
		);
    }

}
//取消订单
function refund(orderId) {
	alert("那就退款吧"+orderId);
}
//发货
function sendGoods(orderId){
	var content = '<div class="info-main">\
	<form class="am-form am-form-horizontal"  id="shopForm" method="post" style="padding-top: 25px;">\
		<div class="am-form-group">\
			<label for="user-name2" class="am-form-label">收件人：</label>\
			<div class="am-form-content">\
				<input type="text" id="recipient"  maxlength="50" style="width: 450px;" readonly="readonly">\
			</div>\
		</div>\
		<div class="am-form-group">\
			<label for="user-name2" class="am-form-label">手机号：</label>\
			<div class="am-form-content">\
			<input type="text"  value="" id="mobile" maxlength="50" style="width: 450px;" readonly="readonly">\
			</div>\
		</div>\
		<div class="am-form-group">\
			<label for="user-phone" class="am-form-label">邮政编号：</label>\
			<div class="am-form-content">\
				<input type="text"  value="" id="postCode" maxlength="20" style="width: 450px;" readonly="readonly">\
			</div>\
		</div>\
		<div class="am-form-group">\
			<label for="user-name" class="am-form-label">收件地址：</label>\
			<div class="am-form-content">\
				<textarea id="addr" style="width: 450px;height: 80px" maxlength="1000" readonly="readonly"></textarea>\
			</div>\
		</div>\
		<div class="am-form-group">\
			<label for="user-email" class="am-form-label"><font color="red">*</font>物流公司：</label>\
			<div class="">\
			<select name="logisName" id="logisName" style="width: 450px;" lay-verify="" lay-search>';
	for (var i = 0 ; i< shipperData.length ;i++ ) {
		content +='<option value="'+shipperData[i].logisName+'">'+shipperData[i].logisName+'</option>';
	};
	
	content +='</select></div>\
		</div>\
		<div class="am-form-group">\
			<label for="user-email" class="am-form-label"><font color="red">*</font>物流单号：</label>\
			<div class="am-form-content">\
				<input type="text" id="logisNo" maxlength="100" style="width: 450px;" >\
			</div>\
		</div>\
		<input type="hidden" id="orderId"  >\
		<input type="hidden" id="logisId"  >\
	</form>\
</div>';
	    content += '<br><br><br><div style="text-align: center;"><input type="button" style="height:38px;padding: 0 18px;" value="确  定" onclick="sendGoodsSure()"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
	    	&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="height:38px;padding: 0 18px;" value="取  消" onclick="layer.closeAll();"/></div>';
	layer.open({
	    type: 1, //page层
	    area: ['600px', '550px'],
	    title: '物流信息',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content
	});   
	
	var queryParams = {"params[orderId]":orderId } ;
	$.ajax({
	   type: "POST",
	   url: "ns/webLogis/findTbLogisByParam.action",
	   data : queryParams ,
	   dataType:"json" ,
	   success: function(data){
		  $('#recipient').val(data.recipient);
		  $('#mobile').val(data.mobile);
		  $('#postCode').val(data.postCode);
		  $('#addr').val(data.addrArea+data.addr);
		  $('#orderId').val(data.orderId);
		  $('#logisId').val(data.logisId);
	   }
	});

}
var params = {};
function sendGoodsSure(){
	params={};
	var logisName = $('#logisName').val();
	var logisNo = $('#logisNo').val();
	if(logisName!=''){
		params['logisName'] = logisName;
	}else{
		layer.msg('请选择物流公司   !');
		return;
	}
	if(logisNo!=''){
		params['logisNo'] = logisNo;
	}else{
		layer.msg('请填写物流单号  !');
		return;
	}
	var orderId = $('#orderId').val();
	var logisId = $('#logisId').val();
	params['logisId'] = logisId;
	$.ajax({
		   type: "POST",
		   url: "ns/webLogis/modify.action",
		   data : params ,
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   if(data!=1){
				   layer.msg("系统繁忙，请稍后再试 ！");
			   }
		   }
		});
	$.post(
		'weborder/sendState.action', 
		{
			'orderId' : orderId ,
			'state' : "2"
		},
		function(result) {
			$('#tab1 .order-list').empty();
		    refreshTab1();
		    $('#tab3 .order-list').empty();
		    refreshTab3();
		    layer.closeAll();
		    layer.msg(result);
		}
	);
}
//查看物流信息
function logistics(orderId){
//	 layer.msg(orderId+"功能完善中~~~！！！");
//	window.location.href="seller/order/logistics.jsp";v
	window.open("seller/order/logistics.jsp","_blank");
}
//商品评价
function comment(){
	layer.msg("功能完善中~~~！！！");
}




















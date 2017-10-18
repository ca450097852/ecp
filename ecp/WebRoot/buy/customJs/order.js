
$(function(){
	$("#leftOrderId").addClass("active");
	refreshTab1();
	
});

$(document).ready(function(){
	//分页
	//"第一页"点击
	$(".am-pagination-first").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		//console.log("tabId===="+tabId) ;
		if(parseInt(currentPage)==1){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":1,"rows":10,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab1 .order-list').html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":1,"rows":10,"params[orderState]":1,"params[payState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab2 .order-list').html(op);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab3 .order-list').html(op);
					   }
					});
				break;
			case "tab4":
				queryParam = {"page":1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab4 .order-list').html(op);
					   }
					});
				break;
			case "tab5":
				queryParam = {"page":1,"rows":10,"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab5 .order-list').html(op);
					   }
					});
				break;
			}
			
			$(this).parents("ul").find(".currentPage").empty().text(1);
			$(document).scrollTop(0);
		};
	});
	
	//"最末页"点击
	$(".am-pagination-last").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":totalPage,"rows":10,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab1 .order-list').html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":totalPage,"rows":10,"params[orderState]":1,"params[payState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab2 .order-list').html(op);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":totalPage,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab3 .order-list').html(op);
					   }
					});
				break;
			case "tab4":
				queryParam = {"page":totalPage,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab4 .order-list').html(op);
					   }
					});
				break;
			case "tab5":
				queryParam = {"page":totalPage,"rows":10,"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab5 .order-list').html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(totalPage);
			$(document).scrollTop(0);
		};
	});
	
	//"上一页"点击
	$(".am-pagination-prev").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==1){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)-1,"rows":10,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab1 .order-list').html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[orderState]":1,"params[payState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab2 .order-list').html(op);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab3 .order-list').html(op);
					   }
					});
				break;
			case "tab4":
				queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab4 .order-list').html(op);
					   }
					});
				break;
			case "tab5":
				queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab5 .order-list').html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)-1);
			$(document).scrollTop(0);
		};
	});
	
	//"下一页"点击
	$(".am-pagination-next").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)+1,"rows":10,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab1 .order-list').html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[orderState]":1,"params[payState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab2 .order-list').html(op);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab3 .order-list').html(op);
					   }
					});
				break;
			case "tab4":
				queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab4 .order-list').html(op);
					   }
					});
				break;
			case "tab5":
				queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":"order by too.order_time desc"} ;
				$.ajax({
					   type: "POST",
					   url: "weborder/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = getHtmlList(data);
						   $('#tab5 .order-list').html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)+1);
			$(document).scrollTop(0);
		};
	});
	
	$(".mytab").click(function() {
		var hr = $(this).children("a").attr("href");
		loadTab(hr);
	});
	
});

//刷新所有订单
function refreshTab1(){
	var queryParam = {"order":"order by too.order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParam,
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   
			   var op = getHtmlList(data);
			   $('#tab1 .order-list').html(op);
			   
			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab1").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab1").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

//刷新待付款订单
function refreshTab2(){
	var queryParam = {"params[orderState]":1,"params[payState]":1,"order":"order by too.order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab2 .order-list').html(op);
			   
			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab2").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab2").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

//刷新待发货订单
function refreshTab3(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1,"order":"order by too.order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab3 .order-list').html(op);
			   
			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab3").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab3").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

//刷新待收货订单
function refreshTab4(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2,"order":"order by too.order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab4 .order-list').html(op);

			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab4").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab4").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

//刷新待评价订单
function refreshTab5(){
	var queryParam = {"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1,"order":"order by too.order_time desc"} ;
	
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   var op = getHtmlList(data);
			   $('#tab5 .order-list').html(op);

			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab5").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab5").find(".totalPage").empty().text(1);
			   }
		   }
		});
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
			if(tbOrder.evaluateState !=2 && tbOrder.evaluateState != 4){//买家未评价
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
		<div class="order-item order-status1">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
			<div class="order-title">\
				<div class="dd-num">\
					订单编号：<a >'+ tbOrder.orderId +'</a>\
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
							合计：' + (tbOrder.orderAmount==null ? 0:tbOrder.orderAmount)+ '\
							<p>含运费：<span>' + (tbOrder.shipFree==null ? 0:tbOrder.shipFree) + '</span></p>\
						</div></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">等待买家付款</p>\
								<p class="order-info"><a href="javascript:void(0)" onclick="cancelOrder(this)">取消订单</a></p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a href="javascript:void(0)" onclick="payment(this)">\
							<div class="am-btn am-btn-danger anniu">一键支付</div></a>\
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
		<div class="order-item order-status2">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
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
								<p class="order-info"><a href="javascript:void(0)" onclick="orderInfo(this)">订单详情</a></p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a href="javascript:void(0)" onclick="promptShipment(this)"><div class="am-btn am-btn-danger anniu">提醒发货</div></a>\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//这里写“买家已付款，确认收货”的div
function getConfirmReceipt(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-item order-status3">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
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
								<p class="Mystatus">卖家已发货</p>\
								<p class="order-info"><a href="javascript:void(0)" onclick="orderInfo(this)">订单详情</a></p>\
								<p class="order-info"><a href="javascript:void(0)" onclick="logistics(this)">查看物流</a></p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a href="javascript:void(0)" onclick="confirmReceipt(this)"><div class="am-btn am-btn-danger anniu">确认收货</div></a>\
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
		<div class="order-item order-status2">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
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
								<p class="order-info">\
									<a href="javascript:void(0)" onclick="orderInfo(this)">订单详情</a>\
								</p>\
								<p class="order-info">\
									<a href="javascript:void(0)" onclick="logistics(this)">查看物流</a>\
								</p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a href="javascript:void(0)" onclick="deleteOrder(this)"><div class="am-btn am-btn-danger anniu">删除订单</div></a>\
						</li>\
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
		<div class="order-item order-status3">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
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
			if(tbOrderDetailList[i].evaluateState == 1){//未评价
				op += getDetailHtml(tbOrderDetailList[i],2);
			}else{
				op += getDetailHtml(tbOrderDetailList[i],1);
			}
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
								<p class="order-info"><a href="javascript:void(0)" onclick="orderInfo(this)">订单详情</a></p>\
								<p class="order-info"><a href="javascript:void(0)" onclick="logistics(this)">查看物流</a></p>\
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

//这里写“交易完成，隐藏右侧按钮”的div
function getCompleteOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op = '\
		<div class="order-item order-status2">\
			<input type="hidden" name="orderId" value="'+ tbOrder.orderId +'"/>\
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
								<p class="order-info">\
									<a href="javascript:void(0)" onclick="orderInfo(this)">订单详情</a>\
								</p>\
								<p class="order-info">\
									<a href="javascript:void(0)" onclick="logistics(this)">查看物流</a>\
								</p>\
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
		<input type="hidden" class="orderDetailId-class" value="'+ tbOrderDetail.orderDetailId+'"/>\
		<div class="item-pic">\
			<a href="webGoods/ns/goods.action?goodsId='+ tbOrderDetail.goodsId +'" class="J_MakePoint"> <img src="'+ tbOrderDetail.goodsImg +'" class="itempic J_ItemImg"> </a>\
		</div>\
		<div class="item-info">\
			<div class="item-basic-info">\
				<a href="webGoods/ns/goods.action?goodsId='+ tbOrderDetail.goodsId +'">\
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
	
	switch (index) {
	case 0:
		break;
	case 1:
		op += '<a href="javascript:void(0)" onclick="refund(this)">退款/退货</a>';
		break;
	case 2:
		op += '<a href="javascript:void(0)" onclick="refund(this)">退款/退货</a><br>';
		op += '<a href="javascript:void(0)" onclick="evaluateOrder(this)">评价</a>';
		break;
	default:
		break;
	};
	
	op += '\
		</div>\
	</li>\
</ul>' ;
	return op ;
}

//退款
function refund(obj){
	layer.alert("二期开发！");
}

//取消订单
function cancelOrder(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	layer.confirm('真的要取消订单吗?', {icon: 3, title:'提示'}, function(index){
		  //do something
		$.ajax({
			   type: "POST",
			   url: "weborder/orderState.action",
			   data: {"orderId":orderId,"state":2 },
			   success: function(msg){
				   $('#tab1 .order-list').empty();
				   refreshTab1();
				   $('#tab2 .order-list').empty();
				   refreshTab2();	
			   }
			});
		  
		  layer.close(index);
		});
	
	
}

//订单详情
function orderInfo(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	window.open('buy/custom/orderinfo.jsp?orderId='+orderId);
}

//查看物流
function logistics(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	
	$.post("ns/webLogis/findTbLogisByParam.action",{"params[orderId]":orderId},function(data){
		if(data == null){
			layer.msg('没有物流信息！' );
		}else{
			var logisId = data.logisId;
			window.open('buy/custom/logistics.jsp?logisId='+logisId);
		}
	});
}

//一键支付
function payment(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	//window.open("weborder/toPayHtml.action?orderId="+orderId) ;
	window.open("weborder/toMemberAlipay.action?orderId="+orderId);
}

//提醒发货
function promptShipment(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	layer.msg('已提醒' );
}

//确认收货
function confirmReceipt(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	//待开发（涉及支付问题）
	layer.confirm('真的要确认收货吗?', {icon: 3, title:'提示'}, function(index){
		  //do something
		$.ajax({
			   type: "POST",
			   url: "weborder/orderState.action",
			   async:false,
			   data: {"orderId":orderId,"state":4 },
			   success: function(msg){
				   
			   }
			});
		$.ajax({
			   type: "POST",
			   url: "weborder/sendState.action",
			   async:false,
			   data: {"orderId":orderId,"state":3 },
			   success: function(msg){
				   
			   }
			});
		  
		  layer.close(index);
		  window.location.reload();
		});
}

//删除订单
function deleteOrder(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	layer.confirm('真的要删除订单吗?', {icon: 3, title:'提示'}, function(index){
		  //do something
		$.ajax({
			   type: "POST",
			   url: "weborder/delete.action",
			   data: {"ids":orderId },
			   success: function(msg){
				   $('#tab1 .order-list').empty();
				   refreshTab1();
			   }
			});
		  
		  layer.close(index);
		});
	
}

//评价商品
function evaluateOrder(obj){
	//传递参数订单详细id
	var orderDetailId = $(obj).parents("ul").find(".orderDetailId-class").val();
	console.log(orderDetailId);
	var orderId = getOrderId(obj);
	console.log(orderId);
	window.location.href= 'buy/custom/commentlist.jsp?orderDetailId='+orderDetailId +'&orderId='+orderId;
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

function getOrderId(obj){
	var orderId = $(obj).parents(".order-item").children("input").val();
	return orderId ;
}

var orderId ;

$(function(){
	$("#leftOrderId").addClass("active");
	orderId = GetQueryString("orderId");
	var queryParams = {"params[orderId]":orderId } ;
	//加载订单列表
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParams ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('.order-main').empty().html(op);
		   }
		});
	//加载物流信息
	$.ajax({
		   type: "POST",
		   url: "ns/webLogis/findTbLogisByParam.action",
		   data : queryParams ,
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   var op = addressDetail(data);
			   $(".order-addresslist").empty().html(op);
			   var lo = logis(data);
			   $(".inquire").empty().html(lo);
		   }
		});
	
});

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

function logis(logis){
	var op ='' ;
	op ='\
		<span class="package-detail">物流：'+ logis.logisName==null?"---":logis.logisName +'</span>\
		<span class="packageDetail">快递单号: </span>\
		<span class="packageNumber">'+ logis.logisNo == null?"---":logis.logisNo+'</span>\
		<a href="buy/custom/logistics.jsp?logisId='+logis.logisId+'">查看</a>';
		
	
		
	
		
	return op ;
}



function addressDetail(address){
	var mobile = address.mobile ;
	var a = mobile.substr(0, 3) ;
	var b = mobile.substr(7, 10) ;
	mobile = a +'****' + b ;
	
	var addrArea = address.addrArea;
	addrArea = addrArea.split(',');
	var province = addrArea[0];
	var city = addrArea[1];
	var dist = '' ;
	if(addrArea.length >2){
		dist = addrArea[2];
	}
	
	var op = '' ;

	op += '\
	<div class="order-address">\
		<div class="icon-add">\
		</div>\
		<p class="new-tit new-p-re">\
			<span class="new-txt">'+ address.recipient +'</span>\
			<span class="new-txt-rd2">'+ mobile +'</span>\
		</p>\
		<div class="new-mu_l2a new-p-re">\
			<p class="new-mu_l2cw">\
				<span class="title">收货地址：</span>\
				<span class="province">'+ province +'</span>\
				<span class="city">'+ city +'</span>\
				<span class="dist">'+ dist +'</span>\
				<span class="street">'+address.addr+'</span></p>\
		</div>\
	</div> ';
	
	return op ;
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
							合计：' + tbOrder.orderAmount + '\
							<p>含运费：<span>' + tbOrder.shipFree + '</span></p>\
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
								<p class="Mystatus">卖家已发货</p>\
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
								<p class="Mystatus">交易成功</p>\
								<p class="order-info"><a href="javascript:void(0)" onclick="logistics(this)">查看物流</a></p>\
							</div>\
						</li>\
						<li class="td td-change">\
							<a href="javascript:void(0)" onclick="evaluateOrder(this)"><div class="am-btn am-btn-danger anniu">评价商品</div></a>\
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
		<div class="item-pic">\
			<a href="#" class="J_MakePoint"> <img src="'+ tbOrderDetail.goodsImg +'" class="itempic J_ItemImg" style="heigh"> </a>\
		</div>\
		<div class="item-info">\
			<div class="item-basic-info">\
				<a href="#">\
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
		op += '<a href="javascript:void(0)" onclick="refund(this)">退款</a>';
		break;
	case 2:
		op += '<a href="javascript:void(0)" onclick="refund(this)">退款/退货</a>';
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

//一键支付
function payment(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	window.open("weborder/toPayHtml.action?orderId="+orderId) ;
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
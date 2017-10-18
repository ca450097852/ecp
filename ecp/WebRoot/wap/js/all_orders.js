$(document).ready(function(){
	
	
	$(".weui-navbar__item").click(function() {
		var hr = $(this).attr("href");
		loadTab(hr);
	});
	
});
$(function(){
	init();
	var tab = GetRequest();
	if(tab==1){
		$("#ordertab1").click();
	}else if(tab==2){
		$("#ordertab2").click();
	}else if(tab==3){
		$("#ordertab3").click();
	}else if(tab==4){
		$("#ordertab4").click();
	}else if(tab==5){
		$("#ordertab5").click();
	}else if(tab==6){
		$("#ordertab6").click();
	}
	
	
});
//初始化页面
function init(){
	if($('#nickName').val()==""){
	   	$.toptip('请先登录', 'warning');
	   	setTimeout('window.location.href="login.jsp"', 1000 );
    }
}


function backspace() {
//	window.location.href=document.referrer; 
	window.location.href="mine.jsp"; 
}

function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	if (url.indexOf("?") != -1) {  //判断是否有参数
		var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
		return strs[1];     //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
	}
}
//刷新所有订单
function refreshTab1(){
	
	$.ajax({
		   type: "POST",
		   url: "../wap/order/page.mobile",
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   
			   var op = getHtmlList(data);
			   $('#tab1').html(op);
			   
			 
		   }
		});
}

//刷新待付款订单
function refreshTab2(){
	var queryParam = {"params[orderState]":1,"params[payState]":1} ;
	
	$.ajax({
		   type: "POST",
		   url: "../wap/order/page.mobile",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab2').html(op);
			   
		   }
		});
}

//刷新待发货订单
function refreshTab3(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":1} ;
	
	$.ajax({
		   type: "POST",
		   url: "../wap/order/page.mobile",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab3').html(op);
			   
		   }
		});
}

//刷新待收货订单
function refreshTab4(){
	var queryParam = {"params[orderState]":1,"params[payState]":2 ,"params[sendState]":2} ;
	
	$.ajax({
		   type: "POST",
		   url: "../wap/order/page.mobile",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab4').html(op);

		   }
		});
}

//刷新待评价订单
function refreshTab5(){
	var queryParam = {"params[orderState]":4,"params[payState]":2 ,"params[sendState]":3 ,"params[evaluateState]":1} ;
	
	$.ajax({
		   type: "POST",
		   url: "../wap/order/page.mobile",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   var op = getHtmlList(data);
			   $('#tab5').html(op);

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
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">等待付款</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
	var goodsCount=0;
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
		op += getDetailHtml(tbOrderDetailList[i],2);
		goodsCount+=tbOrderDetailList[i].goodsCount;
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+goodsCount+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">' + (tbOrder.orderAmount==null ? 0:tbOrder.orderAmount)+ '</em></span>\
	       <span>(含运费<b>￥' + (tbOrder.shipFree==null ? 0:tbOrder.shipFree) + '</b>)</span>\
	     </div>\
	     <div class="weui-panel__ft">\
	       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
	       <a href="javascript:void(0)" onclick="cancelOrder('+ tbOrder.orderId +')" class="ords-btn-dele">取消订单</a><a href="javascript:void(0)" onclick="payment('+ tbOrder.orderId +')" class="ords-btn-com">去支付</a>\
	       </div>\
	     </div>\
	   </div>';
	
		return op ;
}

//这里写“买家已付款，提醒发货”的div
function getPromptShipment(tbOrder,tbOrderDetailList){
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">待发货</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
	var goodsCount=0;
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
		op += getDetailHtml(tbOrderDetailList[i],0);
		goodsCount+=tbOrderDetailList[i].goodsCount;
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+goodsCount+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">' + (tbOrder.orderAmount==null ? 0:tbOrder.orderAmount)+ '</em></span>\
	       <span>(含运费<b>￥' + (tbOrder.shipFree==null ? 0:tbOrder.shipFree) + '</b>)</span>\
	     </div>\
	     <div class="weui-panel__ft">\
	     <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">商品正在打包中，请您耐心等待....</div>\
	     </div>\
	   </div>';
	
		return op ;
}

//这里写“买家已付款，确认收货”的div
function getConfirmReceipt(tbOrder,tbOrderDetailList){
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">待收货</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
	var goodsCount=0;
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
		op += getDetailHtml(tbOrderDetailList[i],0);
		goodsCount+=tbOrderDetailList[i].goodsCount;
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+goodsCount+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">' + (tbOrder.orderAmount==null ? 0:tbOrder.orderAmount)+ '</em></span>\
	       <span>(含运费<b>￥' + (tbOrder.shipFree==null ? 0:tbOrder.shipFree) + '</b>)</span>\
	     </div>\
	     <div class="weui-panel__ft">\
	       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
	       <a href="javascript:void(0)" onclick="logistics(this)" class="ords-btn-dele">查看物流</a><a href="javascript:void(0)" onclick="confirmReceipt('+ tbOrder.orderId +')" class="ords-btn-com">确认收货</a>\
	       </div>\
	     </div>\
	   </div>';
	
		return op ;	
}

//这里写“交易关闭，删除订单”div
function getDeleteOrder(tbOrder,tbOrderDetailList){
	
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">交易关闭</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
	var goodsCount=0;
	 for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
			op += getDetailHtml(tbOrderDetailList[i],0);
			goodsCount+=tbOrderDetailList[i].goodsCount;
		};       
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+goodsCount+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">'+tbOrder.orderAmount+'</em></span>\
	       <span>(含运费<b>￥' + tbOrder.shipFree + '</b>)</span>\
	     </div>\
	     <div class="weui-panel__ft">\
	       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
	         <a href="javascript:void(0)" onclick="deleteOrder('+tbOrder.orderId+')" class="ords-btn-dele">删除订单</a>\
	       </div>\
	     </div>\
	   </div>';
	
		return op ;
}

//这里写“交易完成，评价订单”的div
function getEvaluateOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">交易完成</span></div>';
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
    	op += '<div class="weui-media-box__bd  pd-10">';
		op += getDetailHtml(tbOrderDetailList[i],0);
		if(tbOrderDetailList[i].evaluateState==1){
			op +=' <div class="weui-panel__ft">\
			       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
			        <a onclick="evaluateOrder('+ tbOrder.orderId +','+tbOrderDetailList[i].orderDetailId+','+tbOrderDetailList[i].goodsId+')" class="ords-btn-com">评价</a>\
			       </div>\
			     </div>\
			   </div>';
		}else{
			op +=' <div class="weui-panel__ft">\
			       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
			        <a class="ords-btn-com">已评价</a>\
			       </div>\
			     </div>\
			   </div>';
		}
		
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+tbOrderDetailList.length+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">'+tbOrder.orderAmount+'</em></span>\
	       <span>(含运费<b>￥' + tbOrder.shipFree + '</b>)</span>\
	     </div>';
	
		return op ;
}

//这里写“交易完成，隐藏右侧按钮”的div
function getCompleteOrder(tbOrder,tbOrderDetailList){
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">交易关闭</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
		op += getDetailHtml(tbOrderDetailList[i],0);
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+tbOrderDetailList.length+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">'+tbOrder.orderAmount+'</em></span>\
	       <span>(含运费<b>￥' + tbOrder.shipFree + '</b>)</span>\
	     </div>\
	     <div class="weui-panel__ft">\
	       <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">\
	         <a href="javascript:;" class="ords-btn-dele">删除订单</a><a href="comment.html" class="ords-btn-com">评价</a>\
	       </div>\
	     </div>\
	   </div>';
	
		return op ;
}

//获取订单中一个商品的html
function getDetailHtml(tbOrderDetail,index){
	var op='';
	if(index==2){
		op = ' <div class="weui-media-box_appmsg ord-pro-list">\
		     <div class="weui-media-box__hd"><a href="javascript:void(0)" onclick="payment('+ tbOrderDetail.orderId +')"><img class="weui-media-box__thumb" src="'+ tbOrderDetail.goodsImg +'" alt=""></a></div>\
		     <div class="weui-media-box__bd">\
		       <h1 class="weui-media-box__desc"><a onclick="payment('+ tbOrderDetail.orderId +')" class="ord-pro-link">'+ tbOrderDetail.goodsName +'</a></h1>\
		       <p class="weui-media-box__desc">规格：<span>' + tbOrderDetail.goodsSpecs + '</span><span></span></p>\
		       <div class="clear mg-t-10">\
		         <div class="wy-pro-pri fl">¥<em class="num font-15">' + tbOrderDetail.saledPrice + '</em></div>\
		         <div class="pro-amount fr"><span class="font-13">数量×<em class="name">'+ tbOrderDetail.goodsCount +'</em></span></div>\
		         </div>\
		        </div>\
	          </div>';
	}else{
		op = ' <div class="weui-media-box_appmsg ord-pro-list">\
			 <input type="hidden" class="orderDetailId-class" value="'+ tbOrderDetail.orderDetailId+'"/>\
		     <div class="weui-media-box__hd"><a onclick="goodsDetail('+tbOrderDetail.goodsId+')"><img class="weui-media-box__thumb" src="'+ tbOrderDetail.goodsImg +'" alt=""></a></div>\
		     <div class="weui-media-box__bd">\
		       <h1 class="weui-media-box__desc"><a onclick="goodsDetail('+tbOrderDetail.goodsId+')" class="ord-pro-link">'+ tbOrderDetail.goodsName +'</a></h1>\
		       <p class="weui-media-box__desc">规格：<span>' + tbOrderDetail.goodsSpecs + '</span><span></span></p>\
		       <div class="clear mg-t-10">\
		         <div class="wy-pro-pri fl">¥<em class="num font-15">' + tbOrderDetail.saledPrice + '</em></div>\
		         <div class="pro-amount fr"><span class="font-13">数量×<em class="name">'+ tbOrderDetail.goodsCount +'</em></span></div>\
		         </div>\
		        </div>\
	          </div>';
	}
	

	return op ;
}

//退款
function refund(obj){
	layer.alert("二期开发！");
}

//取消订单
function cancelOrder(orderId){
	
	$.confirm("您确定要取消此订单吗?", "确认取消订单?", function() {
		$.ajax({
		   type: "POST",
		   url: "../wap/order/orderState.mobile",
		   data: {"orderId":orderId,"state":2 },
		   success: function(msg){
			   $('#tab1').empty();
			   refreshTab1();
			   $('#tab2').empty();
			   refreshTab2();	
		   }
		});
	
		$.toast("订单已经取消!");
	}, function() {
		//取消操作
	});
		
}

//进入详细页
function goodsDetail(goodsId){
	window.location.href="proinfo.jsp?goodsId="+goodsId; 
}


//查看物流
function logistics(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	
	$.post("ns/webLogis/findTbLogisByParam.mobile",{"params[orderId]":orderId},function(data){
		if(data == null){
			layer.msg('没有物流信息！' );
		}else{
			var logisId = data.logisId;
			window.open('buy/custom/logistics.jsp?logisId='+logisId);
		}
	});
}

//一键支付
function payment(orderId){
	window.location.href="order_info.jsp?orderId="+orderId; 
//	window.open("order_info.jsp?orderId="+orderId) ;
}

//提醒发货
function promptShipment(obj){
	var orderId = getOrderId(obj);
	console.log(orderId);
	layer.msg('已提醒' );
}

//确认收货//待开发（涉及支付问题）
function confirmReceipt(orderId){
	$.confirm("您真的要确认收货吗?", "确认收货?", function() {
		$.ajax({
			   type: "POST",
			   url: "../wap/order/orderState.mobile",
			   async:false,
			   data: {"orderId":orderId,"state":4 },
			   success: function(msg){
				   
			   }
			});
		$.ajax({
			   type: "POST",
			   url: "../wap/order/sendState.mobile",
			   async:false,
			   data: {"orderId":orderId,"state":3 },
			   success: function(msg){
				   
			   }
			});
	   $('#tab1').empty();
	   refreshTab1();
	   $('#tab4').empty();
	   refreshTab4();	
		$.toast("收货成功!");
	}, function() {
		//取消操作
	});
}

//删除订单
function deleteOrder(orderId){
	$.confirm("您真的要删除此订单吗?", "确认删除?", function() {
		$.ajax({
			   type: "POST",
			   url: "../wap/order/delete.mobile",
			   data: {"ids":orderId },
			   success: function(msg){
				   $('#tab1').empty();
				   refreshTab1();
				   $.toast("删除成功!");
			   }
			});
		});
	
}

//评价商品
function evaluateOrder(orderId,orderDetailId,goodsId){
	//传递参数订单详细id
//	alert(orderId+'+aaaaaaaaaaaaaaaa+'+orderDetailId);
	window.location.href= 'comment.jsp?orderDetailId='+orderDetailId +'&orderId='+orderId +'&goodsId='+goodsId;
}

//加载tab
function loadTab(hr){
	var tabHtml ;
	switch (hr) {
	case "#tab1":
		tabHtml = $('#tab1').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab1();
		}
		break;
	
	case "#tab2":
		tabHtml = $('#tab2').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab2();
		}
		break;
		
	case "#tab3":
		tabHtml = $('#tab3').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab3();
		}
	break;
	
	case "#tab4":
		tabHtml = $('#tab4').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab4();
		}
	break;
	
	case "#tab5":
		tabHtml = $('#tab5').children("div:first");
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

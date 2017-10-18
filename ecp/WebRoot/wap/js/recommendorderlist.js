
$(function(){
	init();
	$.ajax({
		   type: "POST",
		   url: "../wap/order/recommendpage.mobile",
		   dataType:"json" ,
		   success: function(data){			   
			   var op = getHtmlList(data);			   
			   $('#tab1').html(op);			   			 
		   }
		});
	
});
//初始化页面
function init(){
	if($('#nickName').val()==""){
	   	$.toptip('请先登录', 'warning');
	   	setTimeout('window.location.href="login.jsp"', 500 );
    }
}

function backspace() {
//	window.location.href=document.referrer; 
	window.location.href="mine.jsp"; 
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
	if(tbOrder != null && tbOrderDetailList!=null){
		return getCompleteOrder(tbOrder,tbOrderDetailList);		
	}
}

//这里写“交易完成，隐藏右侧按钮”的div
function getCompleteOrder(tbOrder,tbOrderDetailList){
	
	console.info("tbOrderDetailList.length="+tbOrderDetailList.length);
	var op ='' ;
	op+= '<div class="weui-panel weui-panel_access">\
	     <div class="weui-panel__hd"><span>单号：'+ tbOrder.orderId +'</span><span class="ord-status-txt-ts fr">成交日期:'+tbOrder.orderTime+'</span></div>\
	     <div class="weui-media-box__bd  pd-10">';
    for (var i = 0 ; i< tbOrderDetailList.length ;i++ ) {
		op += getDetailHtml(tbOrderDetailList[i],0);
	};      
	op+=' <div class="ord-statistics">\
	       <span>共<em class="num">'+tbOrderDetailList.length+'</em>件商品，</span>\
	       <span class="wy-pro-pri">总金额：¥<em class="num font-15">'+tbOrder.orderAmount+'</em></span>\
	       <span>(含运费<b>￥' + tbOrder.shipFree + '</b>)</span>\
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
		     <div class="weui-media-box__hd"><a onclick="goodsDetail(\''+tbOrderDetail.recommend+'\')"><img class="weui-media-box__thumb" src="'+ tbOrderDetail.goodsImg +'" alt=""></a></div>\
		     <div class="weui-media-box__bd">\
		       <h1 class="weui-media-box__desc"><a onclick="goodsDetail(\''+tbOrderDetail.recommend+'\')" class="ord-pro-link">'+ tbOrderDetail.goodsName +'</a></h1>\
		       <p class="weui-media-box__desc">规格:<span>' + tbOrderDetail.goodsSpecs + '</span> , 代理价:<span>￥' + tbOrderDetail.saledPrice + '</span></p>\
		       <div class="clear mg-t-10">\
		         <div class="wy-pro-pri fl">¥<em class="num font-15">' + tbOrderDetail.goodsPrice + '</em></div>\
		         <div class="pro-amount fr"><span class="font-13">数量×<em class="name">'+ tbOrderDetail.goodsCount +'</em></span></div>\
		         </div>\
		        </div>\
	          </div>';
	}
	return op ;
}


//进入详细页
function goodsDetail(goodsId){
	window.location.href="recommendpro.jsp?rgId="+goodsId; 
}


function getOrderId(obj){
	var orderId = $(obj).parents(".order-item").children("input").val();
	return orderId ;
}

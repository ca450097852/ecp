<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String cartIds = request.getParameter("cartIds");

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>订单确认</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back"><span></span></div>
  <div class="wy-header-title">订单详情</div>
</header>
<div class="weui-content">
  <div class="wy-media-box weui-media-box_text address-select" onclick="selectAddr()">
    <div class="weui-media-box_appmsg" >
      <div class="weui-media-box__hd proinfo-txt-l" style="width:20px;"><span class="promotion-label-tit"><img src="images/icon_nav_city.png" /></span></div>
      <div class="weui-media-box__bd">
        <a href="javascript:;" class="weui-cell_access">
          <h4 class="address-name"><span id="recipient"></span><span id="mobile"></span></h4>
          <div class="address-txt" id="addr"></div>
          <input type="hidden"  id="addrId" />
        </a>
      </div>
      <div class="weui-media-box__hd proinfo-txt-l" style="width:16px;"><div class="weui-cell_access"><span class="weui-cell__ft"></span></div></div>
    </div>
  </div>
  <div class="wy-media-box weui-media-box_text">
    <div class="weui-media-box__bd"  id="cartlist">

    </div>
  </div>
  <div class="weui-panel">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_small-appmsg">
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">配送方式</span><span class="fr">快递</span></p>
            </div>
          </div>
          <div class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">运费</span><span class="fr txt-color-red">￥<em class="num" id="ship_free">0</em></span></p>
            </div>
          </div>
          
           <div class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><input type="text" placeholder="选填：给卖家留言" id="buy_remark"  class="weui-input"/></p>
            </div>
          </div>
	<!--<a class="weui-cell weui-cell_access" href="money.html">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">可用蓝豆</span><span class="sitem-tip"><em class="num">1235</em>个</span></p>
            </div>
            <span class="weui-cell__ft"></span>
          </a>
          <a class="weui-cell weui-cell_access" href="coupon.html">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">优惠券</span><span class="sitem-tip"><em class="num">0</em>张可用</span></p>
            </div>
            <span class="weui-cell__ft"></span>
          </a> -->
        </div>
      </div>
    </div>
  </div>
  <div class="wy-media-box weui-media-box_text">
    <div class="mg10-0 t-c">总金额：<span class="wy-pro-pri mg-tb-5">¥<em class="num font-20" id="totalMoney">0.0</em></span></div>
    <div class="mg10-0"><a href="javascript:;" class="weui-btn weui-btn_primary" onclick="createOrder()">立即下单</a></div>
  </div>
</div>

<div id="selectAddr" class='weui-popup__container' style="z-index:600;">
  <div class="weui-popup__overlay" style="opacity:1;"></div>
  <div class="weui-popup__modal">
    <div class="modal-content">
    
    <div class="weui-panel address-box">
    
  </div>
  <div class="weui-btn-area">
    <a class="weui-btn weui-btn_primary" href="address_list.jsp" id="showTooltips">添加新地址</a>
    
    <a class="weui-btn  weui-btn_default close-popup" href="javascript:;" id="showTooltips">返回</a>
  </div>
      
    </div>
  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
    
	$(".wy-header-icon-back").click(function () {
		window.history.go(-1);  //返回上一页
	});
	
  });
</script>
<script src="js/jquery-weui.js"></script>
<script type="text/javascript">
$(function(){
	loadGoods();
	loadMemberAddress();
	
	//减
	$(".Decrease").click(function () {	
		var saledPrice = $("#saledPrice").html();
		var goodsCount = $("#goodsCount").html();
		var totalMoney=(parseFloat(saledPrice*100)*goodsCount)/100;  															
		$("#totalMoney").html(totalMoney);	
	});

	//加
	$(".Increase").click(function () {
		var saledPrice = $("#saledPrice").html();
		var goodsCount = $("#goodsCount").html();
		var totalMoney=(parseFloat(saledPrice*100)*goodsCount)/100;  															
		$("#totalMoney").html(totalMoney);				

	});
	
	//单选
	$("input[name=cartpro]").click(function () {			
		  var addrId = $(this).val();		
		  $("#recipient").html( $("#recipient_"+addrId).html());
		  $("#mobile").html( $("#mobile_"+addrId).html());
		  $("#addrId").val(addrId);
		  $("#addr").html( $("#addr_"+addrId).html());
		  
		  $("input[name=cartpro]").each(function () {	  
				if ($(this).prop("checked")&&addrId!=$(this).val()) {
					$(this).prop("checked", false);
				}
			});    
	});
});


function createOrder(){
	var buy_remark = $("#buy_remark").val();
	var addrId = $("#addrId").val();
	var shipFree= $("#ship_free").html();
	var cartIds = "<%=cartIds%>";
	var params = {"buyRemark":buy_remark,"addrId":addrId,"shipFree":shipFree,"cartIds":cartIds};
	
	if(!addrId){
		$.toast("请选择收货地址!");
		return;
	}
	
	$.ajax({
		   type: "POST",
		   data: params,
		   url: "order/createOrderByCart.mobile",
		   dataType:"text",
		   async:false,
		   success: function(data){
				if(data){
					window.location.href="order_info.jsp?orderId="+data;	
				}
		   }
		});
	
}
function selectAddr(){
	  var addrId = $("#addrId").val();
	  $("input[name=cartpro]").each(function () {	  
			if (addrId==$(this).val()) {
				$(this).prop("checked", true);
			}
		});    
	  $("#selectAddr").popup();
}
/**
 * 加载收货地址信息
 */
function loadMemberAddress(){
		$.ajax({
		   type: "POST",
		   data: {},
		   url: "memberAddr/list.mobile",
		   dataType:"json",
		   async:false,
		   success: function(data){
				if(data){
					var html='';
					$.each( data, function(i, row){
						  if( row.addrDefault=="0" ){
							  $("#recipient").html(row.recipient);
							  $("#mobile").html(row.mobile);
							  $("#addrId").val(row.addrId);
							  $("#addr").html(row.addrArea+row.addr);
							  html += '<div class="weui-panel__bd">';
								html += '<div class="weui-media-box weui-media-box_text address-choose-box">';
								html += '<div class="weui-media-box__hd check-w weui-cells_checkbox">';
								html += '<label class="weui-check__label" for="cart-pto'+i+'">';
								html += '<div class="weui-cell__hd cat-check"><input type="checkbox" class="weui-check close-popup" name="cartpro" id="cart-pto'+i+'" value="'+row.addrId+'"><i class="weui-icon-checked"></i></div>';
								html += '</label>';
								html += '</div>';
								html += '<h4 class="weui-media-box__title"><span id="recipient_'+row.addrId+'">'+row.recipient+'</span><span  id="mobile_'+row.addrId+'">'+row.mobile+'</span></h4>';
								html += '<p class="weui-media-box__desc address-txt" id="addr_'+row.addrId+'">'+row.addrArea+row.addr+'</p>';
								html += '<span class="default-add">默认地址</span>';
								html += '</div>';
								html += '</div>';
						  }else{
							  html += '<div class="weui-panel__bd">';
								html += '<div class="weui-media-box weui-media-box_text address-choose-box">';
								html += '<div class="weui-media-box__hd check-w weui-cells_checkbox">';
								html += '<label class="weui-check__label" for="cart-pto'+i+'">';
								html += '<div class="weui-cell__hd cat-check"><input type="checkbox" class="weui-check close-popup" name="cartpro" id="cart-pto'+i+'" value="'+row.addrId+'"><i class="weui-icon-checked"></i></div>';
								html += '</label>';
								html += '</div>';
								html += '<h4 class="weui-media-box__title"><span id="recipient_'+row.addrId+'">'+row.recipient+'</span><span id="mobile_'+row.addrId+'">'+row.mobile+'</span></h4>';
								html += '<p class="weui-media-box__desc address-txt" id="addr_'+row.addrId+'">'+row.addrArea+row.addr+'</p>';
								html += '</div>';
								html += '</div>';
						  }					  							
						});
					$(".address-box").html(html);
				}
		   }
		});
	}

/**
 * 加载商品信息
 */
function loadGoods(){
		var cartIds="<%=cartIds%>";
		var params =  {"ids":cartIds};	
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "cart/listByCartIds.mobile",
		   dataType:"json",
		   async:false,
		   success: function(data){
				if(data){					
					//console.info(data);
					var html='';
					var totalMoney=0;  															
					$.each( data, function(i, cart){
						var goods = cart.	tbGoods;						
						totalMoney+=(parseFloat(goods.saledPrice*100)*cart.goodsCount)/100; 
						html += '<div class="weui-media-box_appmsg ord-pro-list">';
						html += '<div class="weui-media-box__hd"><a href="javascript:;"><img class="weui-media-box__thumb" id="goodsImg" src="'+goods.goodsImg+'" alt=""></a></div>';
						html += '<div class="weui-media-box__bd">';
						html += '<h1 class="weui-media-box__desc"><a href="javascript:;" class="ord-pro-link" id="goodsName">'+goods.goodsName+'</a></h1>';
						html += '<p class="weui-media-box__desc">规格：<span id="goodsSpecs">'+goods.goodsSpecs+'</span></p>';
						html += '<div class="clear mg-t-10">';
						html += '<div class="wy-pro-pri fl">¥<em class="num font-15" id="saledPrice">'+goods.saledPrice+'</em></div>';
						html += '<div class="pro-amount fr">×<em class="num font-15" id="goodsCount">'+cart.goodsCount+'</em></div>';
						html += '</div>';
						html += '</div>';
						html += '</div>';
	
					});
					$("#cartlist").html(html);
					$("#totalMoney").html(totalMoney);				
					}
				}
			});
	}
</script>

</body>
</html>

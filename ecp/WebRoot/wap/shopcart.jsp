<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
Object object = session.getAttribute("member");
if(object==null){
	response.sendRedirect("login.jsp");
}
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>购物车</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="<%=basePath %>wap/lib/weui.min.css">
<link rel="stylesheet" href="<%=basePath %>wap/css/jquery-weui.css">
<link rel="stylesheet" href="<%=basePath %>wap/css/style.css">
</head>
<body ontouchstart>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back"><span></span></div>
  <div class="wy-header-title">购物车</div>
</header>
<div class="weui-content">

	<c:forEach items="${list}" var="item" varStatus="status">
	  <div class="weui-panel weui-panel_access" id="shop_${item.tbShop.shopId }">
	    <div class="weui-panel__hd"><span> ${item.tbShop.shopName }</span><a href="javascript:;" class="wy-dele" onclick="removeShop(${item.tbShop.shopId })"></a></div>
	    <div class="weui-panel__bd">
	    
	    <c:forEach items="${item.list }" var="sonitem" varStatus="status">
	    
	      <div class="weui-media-box_appmsg pd-10" id="cart_${sonitem.cartId }">
	        <div class="weui-media-box__hd check-w weui-cells_checkbox">
	          <label class="weui-check__label" for="cart_${sonitem.tbGoods.goodsId }">
	            <div class="weui-cell__hd cat-check"><input type="checkbox" class="weui-check" name="cartpro" id="cart_${sonitem.tbGoods.goodsId }" value="${sonitem.tbGoods.goodsId }" shopId="${item.tbShop.shopId }" cartId="${sonitem.cartId }"><i class="weui-icon-checked"></i></div>
	          </label>
	        </div>
	        <div class="weui-media-box__hd"><a href="../proinfo.jsp?goodsId=${sonitem.tbGoods.goodsId }"><img class="weui-media-box__thumb" src="${sonitem.tbGoods.goodsImg }" alt=""></a></div>
	        <div class="weui-media-box__bd">
	          <h1 class="weui-media-box__desc"><a href="../proinfo.jsp?goodsId=${sonitem.tbGoods.goodsId }" class="ord-pro-link">${sonitem.tbGoods.goodsName }</a></h1>
	          <p class="weui-media-box__desc">规格：<span>${sonitem.tbGoods.goodsSpecs }</span></p>
	          <div class="clear mg-t-10">
	            <div class="wy-pro-pri fl">¥<em class="num font-15" id="gp_${sonitem.tbGoods.goodsId }">${sonitem.tbGoods.saledPrice }</em>	<a href="javascript:;" onclick="removeCart(${sonitem.cartId })" class="wy-dele" style="margin-left: 20px"></a>	        </div>
	            <div class="pro-amount fr">    
	           	 	<div  id="gc_${sonitem.tbGoods.goodsId }_${sonitem.goodsCount }" class="Spinner"></div>
	            </div>
	          </div>
	        </div>
	      </div>
	      
		</c:forEach>
	      
	    </div>
	  </div>
  </c:forEach>
  
</div>
<!--底部导航-->
<div class="foot-black"></div>
<div class="weui-tabbar wy-foot-menu">
  <div class="npd cart-foot-check-item weui-cells_checkbox allselect">
    <label class="weui-cell allsec-well weui-check__label" for="all">
        <div class="weui-cell__hd">
          <input type="checkbox" class="weui-check" name="all-sec" id="all">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p class="font-14">全选</p>
        </div>
    </label>
  </div>
  <div class="weui-tabbar__item  npd">
    <p class="cart-total-txt">合计：<i>￥</i><em class="num font-16" id="zong1">0.0</em></p>
  </div>
  <a href="javascript:;" class="red-color npd w-90 t-c" onclick="toBuy()">
    <p class="promotion-foot-menu-label">去结算</p>
  </a>
</div>

<script src="<%=basePath %>wap/lib/jquery-2.1.4.js"></script> 
<script src="<%=basePath %>wap/lib/fastclick.js"></script> 
<script type="text/javascript" src="<%=basePath %>wap/js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
    
	$(".wy-header-icon-back").click(function () {
		window.history.go(-1);  //返回上一页
	});
	
	$.each( $(".Spinner"), function(i, n){
		 var id = $(n).attr("id");
		 var ids = id.split('_'); 
		 var goodsCount = ids[ids.length-1];
		 $(n).Spinner({value:goodsCount,gid:ids[1]});
	});	
});
</script>
<script src="<%=basePath %>wap/js/jquery-weui.js"></script>
<!---全选按钮-->

<script type="text/javascript">
$(document).ready(function () {      
	 getTotalMoney();
	//全选
	$(".allselect").click(function () {
		if($(this).find("input[name=all-sec]").prop("checked")){
			$("input[name=cartpro]").each(function () {
				$(this).prop("checked", true);		
			});	
		}else{
			$("input[name=cartpro]").each(function () {
				if ($(this).prop("checked")) {
					$(this).prop("checked", false);
				} else {
					$(this).prop("checked", true);
				} 
			});    
   		}
		getTotalMoney();
	});
	
	//单选
	$("input[name=cartpro]").click(function () {		
		getTotalMoney();
	});
	
	//减
	$(".Decrease").click(function () {	
		var id = $(this).parent().attr("id");
		var ids = id.split('_'); 
		var goodsId = ids[1];
		var goodsCount = $("#gid_"+goodsId).val();					
		var params = {"goodsCount":goodsCount,"goodsId":goodsId};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "../cart/update.mobile",
		   dataType:"text",
		   async:false,
		   success: function(data){
				if(data){
					 getTotalMoney();
				}
		   }
		});
	});
	
	//加
	$(".Increase").click(function () {
		var id = $(this).parent().attr("id");
		var ids = id.split('_'); 
		var goodsId = ids[1];
		var goodsCount = $("#gid_"+goodsId).val();					
		var params = {"goodsCount":goodsCount,"goodsId":goodsId};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "../cart/update.mobile",
		   dataType:"text",
		   async:false,
		   success: function(data){
				if(data){
					 getTotalMoney();
				}
		   }
		});
	});

});


function toBuy(){
	var selectcount =0; 
	var shopArray = new Array();
	var cartArray = new Array();
	$("input[name=cartpro]").each(function () {
		if ($(this).prop("checked")) {
			selectcount++;								
			var cartId = $(this).attr("cartId");
			var shopId = $(this).attr("shopId");
			if(shopArray.indexOf(shopId) <0 ){
				shopArray.push(shopId);
			}
			cartArray.push(cartId);
		}
	});
	if(selectcount==0){
		$.alert("请至少选择一种商品进行结算!");
	}else if(selectcount>=1){
		if(shopArray.length>1){
			$.alert("您选择了多个店铺商品，请选择单个店铺商品进行结算!");		
			return;
		}
		//商品结算界面
		var cartIds = cartArray.join(",");
		window.location.href="../orderFromCart.jsp?cartIds="+cartIds;
	}
}

/**
 * 计算总价
 */
function getTotalMoney(){
	var totalMoney=0;		
	$("input[name=cartpro]").each(function () {
		if ($(this).prop("checked")) {
			//获取选中的商品ID
			var goodsId = $(this).val();
			var saledPrice = $("#gp_"+goodsId).html();
			var goodsCount = $("#gid_"+goodsId).val();			
			totalMoney=(parseFloat(totalMoney*100)+parseFloat(saledPrice*100)*goodsCount)/100;  															
		}
	});
	$("#zong1").html(totalMoney);	
}


      function removeShop(shopId) {
        $.confirm("您确定要把此店铺所有商品从购物车删除吗?", "确认删除?", function() {
    		var params = {"shopId":shopId};
    		$.ajax({
    		   type: "POST",
    		   data: params,
    		   url: "../cart/removeShop.mobile",
    		   dataType:"text",
    		   async:false,
    		   success: function(data){
    				if(data){
						$("#shop_"+shopId).remove();
    				}
    		   }
    		});
          $.toast("商品已移除购物车!");
        }, function() {
          //取消操作
        });
      }
      
      function removeCart(cartId) {
          $.confirm("您确定要把此商品从购物车删除吗?", "确认删除?", function() {
        	  var params = {"ids":cartId};
	      		$.ajax({
	     		   type: "POST",
	     		   data: params,
	     		   url: "../cart/delete.mobile",
	     		   dataType:"text",
	     		   async:false,
	     		   success: function(data){
	     				if(data){
	     					$("#cart_"+cartId).remove();
	     				}
	     		   }
	     		});
        	  $.toast("商品已移除购物车!");
          }, function() {
            //取消操作
          });
        }

    </script>

</body>
</html>

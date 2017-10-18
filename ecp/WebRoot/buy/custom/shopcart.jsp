<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<title>购物车页面</title>

	<link href="buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css" />
	<link href="buy/basic/css/demo.css" rel="stylesheet" type="text/css" />
	<link href="buy/css/cartstyle.css" rel="stylesheet" type="text/css" />
	<link href="buy/css/optstyle.css" rel="stylesheet" type="text/css" />

	<script type="text/javascript" src="static/js/jquery-1.9.1.min.js"></script>

</head>

	<body>

		<!--头 -->
    	<jsp:include page="../common/buyTop.jsp"></jsp:include>
    	
    	<form id="jsFrom" action="webcart/toPay.action" method="post">
    		<input type="hidden" name="listStr"/>
    	</form>

			<!--购物车 -->
			<div class="concent">
				<div id="cartTable">
					<div class="cart-table-th">
						<div class="wp">
							<div class="th th-chk">
								<div id="J_SelectAll1" class="select-all J_SelectAll">

								</div>
							</div>
							<div class="th th-item">
								<div class="td-inner">商品信息</div>
							</div>
							<div class="th th-price">
								<div class="td-inner">单价</div>
							</div>
							<div class="th th-amount">
								<div class="td-inner">数量</div>
							</div>
							<div class="th th-sum">
								<div class="td-inner">金额</div>
							</div>
							<div class="th th-op">
								<div class="td-inner">操作</div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
					
					<c:forEach items="${list}" var="item" varStatus="status">
					<tr class="item-list">
						<div class="bundle  bundle-last ">
							<div class="bundle-hd">
								<span>店铺：</span><span> ${item.tbShop.shopName }</span>
							</div>
							<div class="clear"></div>
							<div class="bundle-main">
								
								<c:forEach items="${item.list }" var="sonitem" varStatus="status">
									<ul class="item-content clearfix">
										<input type="hidden" class="cart-class" value="${sonitem.cartId }">
										<input type="hidden" class="goodsid-class" value="${sonitem.goodsId }">
										<li class="td td-chk">
											<div class="cart-checkbox ">
												<input class="check check-item"  type="checkbox">
											</div>
										</li>
										<li class="td td-item">
											<div class="item-pic">
												<a href="#" target="_blank" data-title="${sonitem.tbGoods.goodsName }" class="J_MakePoint" data-point="tbcart.8.12">
													<img src="${sonitem.tbGoods.goodsImg }" class="itempic J_ItemImg" style="width:100%"></a>
											</div>
											<div class="item-info">
												<div class="item-basic-info">
													<a href="#" target="_blank" title="${sonitem.tbGoods.goodsName }" class="item-title J_MakePoint" data-point="tbcart.8.11">${sonitem.tbGoods.goodsName }</a>
												</div>
											</div>
										</li>
										<li class="td td-info">
											<div class="item-props ">
												<em class=" J_MakePoint" >规格：</em>&nbsp<em class=" J_MakePoint" >${sonitem.tbGoods.goodsSpecs }</em>
											</div>
										</li>
										<li class="td td-price">
											<div class="item-price price-promo-promo">
												<div class="price-content">
<!--  												<div class="price-line">
														<em class="price-original">${sonitem.tbGoods.marketPrice }</em>
													</div> 
-->													
													<div class="price-line">
														<em class="J_Price price-now" tabindex="0">${sonitem.tbGoods.saledPrice }</em>
													</div>
												</div>
											</div>
										</li>
										<li class="td td-amount">
											<div class="amount-wrapper ">
												<div class="item-amount ">
													<div class="sl">
														<input class="min am-btn" name="" type="button" value="-" />
														<input class="text_box" name="" type="text" value="${sonitem.goodsCount }" readonly="readonly" style="width:30px;" />
														<input class="add am-btn" name="" type="button" value="+" />
													</div>
												</div>
											</div>
										</li>
										<li class="td td-sum">
											<div class="td-inner">
												<em tabindex="0" class="J_ItemSum number">0.0</em>
											</div>
										</li>
										<li class="td td-op">
											<div class="td-inner">
												<a href="javascript:void(0);" data-point-url="#" class="delete" > 删除</a>
											</div>
										</li>
										
									</ul>
								</c:forEach>
								
							</div>
						</div>
					</tr>
					<div class="clear"></div>
					</c:forEach>

					
				</div>
				<div class="clear"></div>

				<div class="float-bar-wrapper">
					<div id="J_SelectAll2" class="select-all J_SelectAll">
						<div class="cart-checkbox">
							<input class="check-all check" id="J_SelectAllCbx2" name="select-all" value="true" type="checkbox">
							<label for="J_SelectAllCbx2"></label>
						</div>
						<span>全选</span>
					</div>
					<div class="float-bar-right">
						<div class="amount-sum">
							<span class="txt">已选商品</span>
							<em id="J_SelectedItemsCount">0</em><span class="txt">种</span>
							<div class="arrow-box">
								<span class="selected-items-arrow"></span>
								<span class="arrow"></span>
							</div>
						</div>
						<div class="price-sum">
							<span class="txt">合计:</span>
							<strong class="price">¥<em id="J_Total">0.00</em></strong>
						</div>
						<div class="btn-area" id="J_Go" >
							<a href="javascript:void(0)" class="submit-btn submit-btn-disabled" aria-label="请注意如果没有选择宝贝，将无法结算">
								<span>结&nbsp;算</span></a>
						</div>
					</div>

				</div>

			<!--底部-->
			<%@include file="../common/buyFooter.jsp"%>

			</div>
			
		<script type="text/javascript" src="static/js/layer/layer.js"></script>
		<script type="text/javascript" src="buy/customJs/shopcart.js"></script>
	</body>

</html>

<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

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
<meta name="viewport"
	content="width=device-width, initial-scale=1.0 ,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<title>结算页面</title>

<link href="buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet"
	type="text/css" />

<link href="buy/basic/css/demo.css" rel="stylesheet" type="text/css" />
<link href="buy/css/cartstyle.css" rel="stylesheet" type="text/css" />
<link href="buy/css/jsstyle.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="static/js/jquery-1.9.1.min.js"></script>

<!-- 省市区三级联动 -->
<script type="text/javascript" src="static/js/pdata/pdata.js"></script>
<script type="text/javascript" src="static/js/pdata/default.js"></script>

<script type="text/javascript" src="static/js/layer/layer.js"></script>
<script type="text/javascript" src="buy/customJs/confirmOrder.js"></script>

</head>

<body>
	<form id="formId" method="post" action="weborder/buildOrders.action">
		<input type="hidden" name="buildOrdersListStr"/>
		<input type="hidden" name="paytype"/>
	</form>

	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>
	<div class="concent">
		<!--地址 -->
		<div class="paycont">
			<div class="address">
				<h3>确认收货地址</h3>
				<div class="control">
					<div class="tc-btn createAddr theme-login am-btn am-btn-danger" id="addNew">使用新地址</div>
				</div>
				<div class="clear"></div>

				<div id="addressListId"></div>
				<div class="clear"></div>

			</div>
<!-- 			物流 
			<div class="logistics">
				<h3>选择物流方式</h3>
				<ul class="op_express_delivery_hot">
					<li data-value="yuantong" class="OP_LOG_BTN  "><i
						class="c-gap-right" style="background-position:0px -468px"></i><span>圆通</span>
					</li>
					<li data-value="shentong" class="OP_LOG_BTN  "><i
						class="c-gap-right" style="background-position:0px -1008px"></i><span>申通</span>
					</li>
					<li data-value="yunda" class="OP_LOG_BTN  "><i
						class="c-gap-right" style="background-position:0px -576px"></i><span>韵达</span>
					</li>
					<li data-value="zhongtong"
						class="OP_LOG_BTN op_express_delivery_hot_last "><i
						class="c-gap-right" style="background-position:0px -324px"></i><span>中通</span>
					</li>
					<li data-value="shunfeng"
						class="OP_LOG_BTN  op_express_delivery_hot_bottom"><i
						class="c-gap-right" style="background-position:0px -180px"></i><span>顺丰</span>
					</li>
				</ul>
			</div>
			<div class="clear"></div>-->

			<div class="clear"></div> 

			<!--订单 -->
			<h3>确认订单信息</h3>
			<div class="cart-table-th">
				<div class="wp">

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
					<div class="th th-oplist">
						<div class="td-inner">配送方式</div>
					</div>

				</div>
			</div>
			<div class="clear"></div>

			<c:forEach items="${list}" var="item" varStatus="status">

				<div class="order-concent">
					<div class="bundle-hd">
						<span>店铺：</span><span>${item.tbShop.shopName }</span><input class="shopId" type="hidden" value="${item.shopId }" />
					</div>
					<div class="clear"></div>

					<c:forEach items="${item.list }" var="sonitem" varStatus="status1">
						<tr class="item-list">
							<div class="bundle bundle-last">

								<div class="bundle-main">
									<ul class="item-content clearfix">
										<input type="hidden" class="cart-class"
											value="${sonitem.cartId }">
										<input type="hidden" class="goodsid-class"
											value="${sonitem.goodsId }">
										<div class="pay-phone">
											<li class="td td-item">
												<div class="item-pic">
													<a href="javascript:void(0)" class="J_MakePoint"> <img
														src="${sonitem.tbGoods.goodsImg }" style="width: 100%"
														class="itempic J_ItemImg"> </a>
												</div>
												<div class="item-info">
													<div class="item-basic-info">
														<a href="javascript:void(0)"
															class="item-title J_MakePoint" data-point="tbcart.8.11">${sonitem.tbGoods.goodsName
															}</a>
													</div>
												</div></li>
											<li class="td td-info">
												<div class="item-props">
													<input type="hidden" class="modelId" value="${sonitem.tbGoodsModel.modelId }">
													<em class=" J_MakePoint" >规格：</em>&nbsp<em class=" J_MakePoint" >${sonitem.tbGoodsModel.modelName }</em>
												</div></li>
											<li class="td td-price">
												<div class="item-price price-promo-promo">
													<div class="price-content">
														<%-- <em class="J_Price price-now">${sonitem.tbGoodsModel.modelPrice}</em> --%>
														<em class="J_Price price-now">${sonitem.tbGoods.saledPrice}</em>
													</div>
												</div></li>
										</div>
										<li class="td td-amount">
											<div class="amount-wrapper ">
												<div class="item-amount ">
													<span class="phone-title">购买数量</span>
													<div class="sl">
														<input class="text_box goodsCount-class" name="" type="text"
															value="${sonitem.goodsCount }" style="width:30px;"
															readonly="readonly" />
													</div>
												</div>
											</div></li>
										<li class="td td-sum">
											<div class="td-inner">
												<em tabindex="0" class="J_ItemSum number">0.0</em>
											</div></li>
										<li class="td td-oplist">
											<div class="td-inner">
												<span class="phone-title">配送方式</span>
												<div class="pay-logis">
													快递<b class="sys_item_freprice"></b>
												</div>
											</div></li>

									</ul>
									<div class="clear"></div>

								</div>
							</div>
						</tr>
						<div class="clear"></div>
					</c:forEach>

					<div class="clear"></div>
					<div class="pay-total">
						<!--留言-->
						<div class="order-extra">
							<div class="order-user-info">
								<div id="holyshit257" class="memo">
									<label>买家留言：</label> <input type="text"
										title="选填,对本次交易的说明（建议填写已经和卖家达成一致的说明）"
										placeholder="选填,建议填写和卖家达成一致的说明"
										class="memo-input J_MakePoint c2c-text-default memo-close">
									<div class="msg hidden J-msg">
										<p class="error">最多输入500个字符</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--含运费小计 -->
					<div class="buy-point-discharge ">
						<p class="price g_price ">
							合计（含运费） <span>¥</span><em class="pay-sum">0.0</em>
						</p>
					</div>
				</div>
			</c:forEach>
			<div class="payMethod">
				<h3>选择支付方式</h3>
				<ul class="pay-list">
					<!-- <li class="pay card"><img src="buy/images/wangyin.jpg" /><span>银联</span>
								</li> -->
					<li class="pay qq"><input name="paytypeSelect" type="radio" value="1" /><img src="buy/images/weizhifu.jpg" /><span>微信支付</span>
					</li>
					<li class="pay taobao"><input name="paytypeSelect" type="radio" value="2" checked="checked" /><img src="buy/images/zhifubao.jpg" /><span>支付宝</span>
					</li>
				</ul>
			</div>
			<!--信息 -->
			<div class="order-go clearfix">
				<div class="pay-confirm clearfix">
					<div class="box">
						<div tabindex="0" id="holyshit267" class="realPay">
							<em class="t">实付款：</em> <span class="price g_price "> <span>¥</span>
								<em class="style-large-bold-red " id="J_ActualFee">0.0</em> </span>
						</div>

						<div id="holyshit268" class="pay-address">

							<p class="buy-footer-address">
								<span class="buy-line-title buy-line-title-type">寄送至：</span> <span
									class="buy--address-detail"> <span class="province">xx省</span>
									<span class="city">xx市</span>&nbsp;<span class="dist">xx区</span>&nbsp;<span
									class="street">xx街道xx号xxx</span> </span> </span>
							</p>
							<p class="buy-footer-address">
								<span class="buy-line-title">收货人：</span><span
									class="buy-address-detail"><span class="buy-user">xxx
								</span> <span class="buy-phone">xxxxxxxxxxxx</span></span>
							</p>
						</div>
					</div>

					<div  class="submitOrder">
						<div class="go-btn-wrap">
							<a id="Submit_Go" href="javascript:void(0)" class="btn-go"
								tabindex="0" title="点击此按钮，提交订单">提交订单</a>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>

		<div class="clear"></div>
	</div>
	</div>
	<!--底部-->
	<%@include file="../common/buyFooter.jsp"%>

	</div>

</body>

</html>

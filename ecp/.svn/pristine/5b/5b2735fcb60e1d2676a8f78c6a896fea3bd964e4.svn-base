<%@page import="com.fasterxml.jackson.annotation.JsonInclude.Include"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/" ;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>退款售后</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<meta name="viewport"
	content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/admin.css"
	rel="stylesheet" type="text/css">
<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/amazeui.css"
	rel="stylesheet" type="text/css">
<link href="${basePath }buy/css/personal.css" rel="stylesheet"
	type="text/css">
<link href="${basePath }buy/css/orstyle.css" rel="stylesheet"
	type="text/css">
<link href="buy/css/addstyle.css" rel="stylesheet" type="text/css">
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>

<script type="text/javascript" src="static/js/layer/layer.js"></script>
<script src="./static/angular-1.5.8/angular.min.js"></script>
<script src="${basePath }buy/customJs/change.js"></script>

</head>

<body>

	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>
	
		<div class="center">
			<div class="col-main">
				<div class="main-wrap">

					<div class="user-order">

						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">退款售后</strong> / <small>Change</small></div>
						</div>

						<div class="am-tabs am-tabs-d2 am-margin" data-am-tabs>

							<div class="am-tabs-bd">
								<div class="am-tab-panel am-fade am-in am-active" ng-app="myApp" ng-controller="myCtrl" ng-model="refunds">
									<div class="order-top">
										<div class="th th-item">
											<td class="td-inner">商品</td>
										</div>
										<div class="th th-orderprice th-price">
											<td class="td-inner">交易金额</td>
										</div>
										<div class="th th-changeprice th-price">
											<td class="td-inner">退款金额</td>
										</div>
										<div class="th th-status th-moneystatus">
											<td class="td-inner">交易状态</td>
										</div>
										<div class="th th-change th-changebuttom">
											<td class="td-inner">交易操作</td>
										</div>
									</div>

									<div class="order-main" >
										<div class="order-list" ng-repeat="x in refunds.rows" >
											<div class="order-title">
												<div class="dd-num">退款编号：<a href="javascript:;">{{x.tbRefund.refundNo}}</a></div>
												<span>申请时间：{{x.tbRefund.refundTime}}</span>
											</div>
											<div class="order-content">
												<div class="order-left">
													<ul class="item-list" ng-repeat="tbOrderDetail in x.tbOrderDetailList">
														<li class="td td-item">
															<div class="item-pic">
																<a href="webGoods/ns/goods.action?goodsId={{tbOrderDetail.goodsId}}" class="J_MakePoint">
																	<img ng-src="{{tbOrderDetail.goodsImg}}" class="itempic J_ItemImg">
																</a>
															</div>
															<div class="item-info">
																<div class="item-basic-info">
																	<a href="javascript:void(0)">
																		<p>{{tbOrderDetail.goodsName}}</p>
																		<p class="info-little">规格：{{tbOrderDetail.modelName}} </p>
																	</a>
																</div>
															</div>
														</li>

														<ul class="td-changeorder">
															<li class="td td-orderprice">
																<div class="item-orderprice">
																	<span>交易金额：</span>{{tbOrderDetail.saledPrice}}
																</div>
															</li>
															<li class="td td-changeprice">
																<div class="item-changeprice">
																	<span>退款金额：</span>{{tbOrderDetail.saledPrice}}
																</div>
															</li>
														</ul>
														<div class="clear"></div>
													</ul>

													<div class="change move-right">
														<li class="td td-moneystatus td-status">
															<div class="item-status" ng-switch="{{x.tbRefund.orderState}}">
																<p ng-switch-when="1" class="Mystatus">退款申请</p>
																<p ng-switch-when="2" class="Mystatus">卖家确认</p>
																<p ng-switch-when="3" class="Mystatus">退款成功</p>
																<p ng-switch-when="4" class="Mystatus">退款失败</p>

															</div>
														</li>
													</div>
													<li class="td td-change td-changebutton">
														<div class="am-btn am-btn-danger anniu" ng-click="momeyWay(x.tbRefund)">
															钱款去向</div>
													</li>

												</div>
											</div>
										</div>

									</div>
									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="" ng-click="first()">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="" ng-click="pre()">上一页</a>
								      </li>
								
										<span class="currentPage">{{currentPage}}</span><span>/</span><span class="totalPage">{{totalPage}}</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="" ng-click="next()">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="" ng-click="end()">最末页</a>
								      </li>
								  </ul>

								</div>

							</div>

						</div>
					</div>

				</div>

			<!--底部-->
			<%@include file="../common/buyFooter.jsp"%>
		</div>
		<!-- 左侧导航栏 -->
		<%@include file="../common/buyLeft.jsp"%>

	</div>	
<script>
	var app = angular.module('myApp', []);
	var queryParams ;
	
	app.controller('myCtrl', function($scope, $http) {
	  $scope.currentPage = 1 ;
	  $scope.totalPage = 1 ;
	  
	  //定义方法，方便下面复用
	  $scope.myhttp =function(){
		  $http({
			  method: 'POST',
			  url: 'webRefund/page.action',
			  data:queryParams
		  }).then(function successCallback(response) {
		  		//console.log("response::"+JSON.stringify(response));
		  	  $scope.refunds = response.data;
		  	  //设置页码
		  	  var totalPage = Math.ceil(parseInt(response.data.total)/10) ;
					if(totalPage > 0 ){
					   $scope.totalPage=totalPage;
				   }else{
					   $scope.totalPage=1;
				   }
		   });
	   };
	   
	  //加载数据
	  $scope.myhttp();
	  
	  //钱款去向点击事件
	  $scope.momeyWay = function(tbRefund){
	  	console.log(JSON.stringify(tbRefund));
	  	var op = '<div class="add-dress">\
		<!--标题 -->\
		<div class="am-cf am-padding">\
			<div class="am-fl am-cf">\
				<strong class="am-text-danger am-text-lg">钱款去向</strong> / <small>Money&nbsp;way</small>\
			</div>\
		</div>\
		<hr />\
		<div class="am-u-md-12 am-u-lg-11" style="margin-top: 20px;">\
			<form id="doc-vld-msg" class="am-form am-form-horizontal">\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">收款人</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.receiver +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">收款账号</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.receiverAccount +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">退款编号</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.refundNo +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">退款状态</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.orderState +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">退款卖家账号</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.refundAccount +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">退款时间</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.refundTime +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-name" class="am-form-label">订单金额</label>\
					<div class="am-form-content">\
						<input type="text" value="'+ tbRefund.orderAmount +'" readonly="readonly">\
					</div>\
				</div>\
				<div class="am-form-group">\
					<label for="user-addr" class="am-form-label">退款原因</label>\
					<div class="am-form-content">\
						<textarea class="" rows="3" readonly="readonly"\
							>'+ tbRefund.cause +'</textarea>\
					</div>\
				</div>\
			</form>\
		</div>\
	</div>' ;
	
	  	layer.open({
		  type: 1,
		  title:'钱款去向',
		  area: '800px',
  		  maxmin: true,
		  content: op 
		});
	  };
	  
	  //第一页
	  $scope.first = function(){
	  	
	  	if($scope.currentPage == 1){
	  		return ;
	  	}else{
	  		queryParams={"page":1,"rows":10} ;
	  		$scope.myhttp();
	  	}
	  };
	  
	  //上一页
	  $scope.pre = function(){
	  	
	  	if($scope.currentPage == 1){
	  		return ;
	  	}else{
	  		queryParams={"page":$scope.currentPage-1,"rows":10} ;
	  		$scope.myhttp();
	  	}
	  };
	  
	  //下一页
	  $scope.next = function(){
	  	if($scope.currentPage == $scope.totalPage){
	  		return ;
	  	}else{
	  		queryParams={"page":$scope.currentPage+1,"rows":10} ;
	  		$scope.myhttp();
	  	}
	  };
	  
	  //最末页
	  $scope.end = function(){
	  	if($scope.currentPage == $scope.totalPage){
	  		return ;
	  	}else{
	  		queryParams={"page":$scope.totalPage,"rows":10} ;
	  		$scope.myhttp();
	  	}
	  };
	  
	});

	
	
</script>
	

</body>
</html>

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

<title>推荐记录查询</title>

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
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>

<script src="${basePath }buy/customJs/recommend.js"></script>
<script type="text/javascript" src="${basePath }static/js/layer/layer.js"></script>

</head>

<body>

	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

	<!-- mian -->
	<div class="center">
	
			<div class="col-main">
			
				<div class="main-wrap">
					<div class="user-order">
				
						</div>
					<div class="user-order">
					<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">推荐信息</strong> / <small>Recommend information</small></div>
						</div>
							
									<div class="order-top">
										
								<table>
									<tr>
									<td  width="200px"align="right">用户名：</td>
									<td align="center" id="userName">小叮当</td>
									</tr>
									<tr>
									<td  width="200px"align="right">推荐等级：</td>
									<td align="center" id="lv">普通</td>
									</tr>
									<tr>
									<td  width="200px"align="right">推荐成功次数：</td>
									<td align="center" id="count">0</td>
									</tr>
									<tr>
									<td  width="200px"align="right">奖励金额：</td>
									<td align="center" id="money">0</td>
									</tr>
									</table>
									</div>
									
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">推荐记录</strong> / <small>Recommended to record</small></div>
						</div>
						<hr/>

						<div class="am-tabs am-tabs-d2 am-margin" data-am-tabs>

							<ul class="am-avg-sm-5 am-tabs-nav am-nav am-nav-tabs">
								<li class="mytab am-active"><a href="#tab1">所有记录</a></li>
								 <li class = "mytab"><a href="#tab2">未提取</a></li>
								<li class = "mytab"><a href="#tab3">已提取</a></li>
								<!--  <li class = "mytab"><a href="#tab4">待收货</a></li>
								<li class = "mytab"><a href="#tab5">待评价</a></li>-->
							</ul>

							<div class="am-tabs-bd">
								<div class="am-tab-panel am-fade am-in am-active" id="tab1">
									<div class="order-top">
										<table>
									<tr>
									<td width="150px" align="center">订单号</td>
									<td width="580px" align="center">商品</td>
									<td width="150px" align="center">被推荐人</td>
									<td width="150px" align="center">订单金额</td>
									<td width="150px" align="center">推荐奖励金额</td>
									<td width="150px" align="center">记录时间</td>
									<td width="150px" align="center">奖励金提取状态</td>
									</tr>
									
									</table>
										
										
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list-->
									
									 
										</div>
									</div>

									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="">上一页</a>
								      </li>
								
										<span class="currentPage">1</span><span>/</span><span class="totalPage">1</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="">最末页</a>
								      </li>
								  </ul>
								</div>
									<div class="am-tab-panel am-fade am-in am-active" id="tab2">
									<div class="order-top">
										<table>
									<tr>
									<td width="150px" align="center">订单号</td>
									<td width="580px" align="center">商品</td>
									<td width="150px" align="center">被推荐人</td>
									<td width="150px" align="center">订单金额</td>
									<td width="150px" align="center">推荐奖励金额</td>
									<td width="150px" align="center">记录时间</td>
									<td width="150px" align="center">奖励金提取状态</td>
									</tr>
									
									</table>
										
										
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list-->
									
									 
										</div>
									</div>

									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="">上一页</a>
								      </li>
								
										<span class="currentPage">1</span><span>/</span><span class="totalPage">1</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="">最末页</a>
								      </li>
								  </ul>
								</div>
								<div class="am-tab-panel am-fade am-in am-active" id="tab3">
									<div class="order-top">
										<table>
									<tr>
									<td width="150px" align="center">订单号</td>
									<td width="580px" align="center">商品</td>
									<td width="150px" align="center">被推荐人</td>
									<td width="150px" align="center">订单金额</td>
									<td width="150px" align="center">推荐奖励金额</td>
									<td width="150px" align="center">记录时间</td>
									<td width="150px" align="center">奖励金提取状态</td>
									</tr>
									
									</table>
										
										
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list-->
									
									 
										</div>
									</div>

									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="">上一页</a>
								      </li>
								
										<span class="currentPage">1</span><span>/</span><span class="totalPage">1</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="">最末页</a>
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


</body>
</html>

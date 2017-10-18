<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<title>评价管理</title>

<link href="buy/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet"
	type="text/css">
<link href="buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet"
	type="text/css">

<link href="buy/css/personal.css" rel="stylesheet" type="text/css">
<link href="buy/css/cmstyle.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="buy/js/jquery-1.7.2.min.js"></script>
<script src="buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>

<style type="text/css">
	.filePic{width:80px;margin:10px 0px ; display:inline;}
	.filePic li{width:80px;float:left;}
	.filePic img{width:80px;height:auto;}
</style>

</head>

<body>
	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

	<div class="center">
		<div class="col-main">
			<div class="main-wrap">

				<div class="user-comment">
					<!--标题 -->
					<div class="am-cf am-padding">
						<div class="am-fl am-cf">
							<strong class="am-text-danger am-text-lg">评价管理</strong> / <small>Manage&nbsp;Comment</small>
						</div>
					</div>
					<hr />

					<div class="am-tabs am-tabs-d2 am-margin" data-am-tabs>

						<ul class="am-avg-sm-2 am-tabs-nav am-nav am-nav-tabs">
							<li class="mytab am-active"><a href="#tab1">所有评价</a>
							</li>
							<li class="mytab"><a href="#tab2">有图评价</a>
							</li>
						</ul>

						<div class="am-tabs-bd">
							<div class="am-tab-panel am-fade am-in am-active" id="tab1">

								<div class="comment-main">

									<div class="comment-top">
										<div class="th th-price">
											<td class="td-inner">评价</td>
										</div>
										<div class="th th-item">
											<td class="td-inner">商品</td>
										</div>
									</div>

									<div class="comment-list">
										
									</div>

									<ul data-am-widget="pagination"
										class="am-pagination am-pagination-default">

										<li class="am-pagination-first "><a
											href="javascript:void(0)" class="">第一页</a></li>

										<li class="am-pagination-prev "><a
											href="javascript:void(0)" class="">上一页</a></li>

										<span class="currentPage">1</span>
										<span>/</span>
										<span class="totalPage">1</span>

										<li class="am-pagination-next "><a
											href="javascript:void(0)" class="">下一页</a></li>

										<li class="am-pagination-last "><a
											href="javascript:void(0)" class="">最末页</a></li>
									</ul>
								</div>

							</div>
							<div class="am-tab-panel am-fade" id="tab2">

								<div class="comment-main">
									<div class="comment-top">
										<div class="th th-price">
											<td class="td-inner">评价</td>
										</div>
										<div class="th th-item">
											<td class="td-inner">商品</td>
										</div>
									</div>
									<div class="comment-list">

									</div>

									<ul data-am-widget="pagination"
										class="am-pagination am-pagination-default">

										<li class="am-pagination-first "><a
											href="javascript:void(0)" class="">第一页</a></li>

										<li class="am-pagination-prev "><a
											href="javascript:void(0)" class="">上一页</a></li>

										<span class="currentPage">1</span>
										<span>/</span>
										<span class="totalPage">1</span>

										<li class="am-pagination-next "><a
											href="javascript:void(0)" class="">下一页</a></li>

										<li class="am-pagination-last "><a
											href="javascript:void(0)" class="">最末页</a></li>
									</ul>
								</div>

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


	<script type="text/javascript" src="static/js/layer/layer.js"></script>
	<script type="text/javascript" src="buy/customJs/comment.js"></script>
</body>
</html>

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

<title>物流</title>

<link href="buy/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet"
	type="text/css">
<link href="buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet"
	type="text/css">

<link href="buy/css/personal.css" rel="stylesheet" type="text/css">
<link href="buy/css/lostyle.css" rel="stylesheet" type="text/css">

<script src="buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="buy/customJs/logistics-shipper-code.js"></script>
<script src="buy/customJs/logistics.js"></script>

</head>

<body>
	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

	<!-- main -->
	<div class="center">
		<div class="col-main">
			<div class="main-wrap">
				<div class="user-logistics">
					<!--标题 -->
					<div class="am-cf am-padding">
						<div class="am-fl am-cf">
							<strong class="am-text-danger am-text-lg">物流跟踪</strong> / <small>Logistics&nbsp;History</small>
						</div>
					</div>
					<hr />
					<div id="aaa"></div>
		
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

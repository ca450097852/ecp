<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>

<!DOCTYPE html>
<html>

	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

		<title>卖家中心</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="<%=basePath%>static/js/jquery-1.8.0.min.js"></script>
		
		<link href="<%=basePath%>/seller/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>/seller/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">

		<link href="<%=basePath%>/seller/css/personal.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>/seller/css/infstyle.css" rel="stylesheet" type="text/css">
		<script src="<%=basePath%>/seller/AmazeUI-2.4.2/assets/js/jquery.min.js" type="text/javascript"></script>
		<script src="<%=basePath%>/seller/AmazeUI-2.4.2/assets/js/amazeui.js" type="text/javascript"></script>
		<script type="text/javascript" src="<%=basePath%>seller/js/shop/noshop.js"></script>	
	
	</head>
	<!--/.fluid-container#main-container-->
	<!-- basic scripts -->
		<!-- 引入 -->
		<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
		<script src="<%=basePath%>static/js/bootstrap.min.js"></script>
		<script src="<%=basePath%>static/js/ace-elements.min.js"></script>
		<script src="<%=basePath%>static/js/ace.min.js"></script>
		<!-- 引入 -->
		<script type="text/javascript" src="<%=basePath%>static/js/jquery.cookie.js"></script>
	<body>
	
	<input type="hidden" id="basePath" value="<%=basePath%>">
	
		<!--头 -->
	<jsp:include page="../common/sellerTop.jsp"></jsp:include>	
	
			<b class="line"></b>
		<div class="center">
			<div class="col-main">
				<div class="main-wrap">
				
<!-- 					<iframe  src="<%=basePath%>jsp/member/member.jsp" style="margin:0 auto;width:100%;height:100%;"></iframe> -->
					<div class="user-info">
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">店铺信息</strong> / <small>Shop&nbsp;information</small></div>
						</div>
						<hr/>
						<br>
						<br>
						<br>
						<br>
						<!--个人信息 -->
						<div class="info-main" style="margin: 2% 30%;">
							尊敬的会员，您还没有<a href="<%=basePath%>seller/shop/openshop.jsp" style="color: red;">开通店铺</a>	
						</div>

					</div>
			
				</div>
				<!--底部-->
			<jsp:include page="../common/sellerFooter.jsp"></jsp:include>
			
			</div>
		<!-- 左侧导航栏 -->
		<jsp:include page="../common/sellerLeft.jsp"></jsp:include>

		</div>

	</body>

</html>
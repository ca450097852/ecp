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

<title>个人中心</title>

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

<script src="${basePath }buy/customJs/index.js"></script>

</head>

<body>

	
	<jsp:include page="./information.jsp"></jsp:include>



</body>
</html>

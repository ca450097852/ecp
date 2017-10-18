<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.sys.model.TsUser"%>
<%@page import="com.hontek.member.model.TbMember"%>
<%
	String path = request.getContextPath();
	pageContext.setAttribute("path",path+"/");
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	TbMember user = new TbMember();
	user.setMemberId(0);
	session.setAttribute("memberUser",user);
%>
<!DOCTYPE HTML>
<html>
	<head>
	<base href="<%=basePath%>">
		<title>商品列表</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="${path}static/js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="${path}static/js/uploadify/jquery.uploadify.js"></script>
		<link rel="stylesheet" href="${path}static/js/uploadify/uploadify.css"	type="text/css"></link>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="${path}static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
		<script type="text/javascript" src="${path}seller/js/goods/GoodsList.js"></script>
		<script type="text/javascript" src="${path}static/js/layer/layer.js"></script>
		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/bootstrap/easyui.css"/>
		<script type="text/javascript" src="${path}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${path}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
<!-- 		<script type="text/javascript" src="${path}static/js/module/comm/hontek.js"></script> -->
		<link href="${path}static/css/web/goodsList.css" rel="stylesheet" type="text/css" />
		
	</head>
	<body>
		<div id="toolbar" style="height: 40px;padding: 5px;">
			<ul class="main_top_ul">
		    	<li class="tj" onclick="window.location.href='web/goods/addGoods.jsp'"><a>添加商品</a></li>
		     	<!-- <li class="sc"><a onclick="delInfo('goods.goods_id','/admin_Goods_delete.action')">删除</a></li> -->
		     	<li class="shuaix" onclick="showSearch();"><a>筛选</a></li>
		     	<li class="tj" onclick="upperLowerGoods(1);"><a>商品上架</a></li>
		     	<li class="tj" onclick="upperLowerGoods(2);"><a>商品下架</a></li>
		     	<li class="tj" onclick="upInventory();"><a>库存设置</a></li>
		   	</ul>
		</div>
		<table id="goodsTable"></table>
		
	</body>
</html>

<%@page import="com.fasterxml.jackson.annotation.JsonInclude.Include"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/" ;
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">


<title>商品管理</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<link href="${basePath }seller/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
<link href="${basePath }seller/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">
<link href="${basePath }seller/css/personal.css" rel="stylesheet" type="text/css">
<link href="${basePath }seller/css/orstyle.css" rel="stylesheet" type="text/css">
<script src="${basePath }seller/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="${basePath }seller/AmazeUI-2.4.2/assets/js/amazeui.js"></script>


		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/bootstrap/easyui.css"/>
		<script type="text/javascript" src="${path}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${path}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/default/easyui.css"/>
		<script type="text/javascript" src="${path}static/js/json2.js"></script>

<link href="${path}static/css/web/goodsList.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${path}static/js/layer/layer.js"></script>
<script type="text/javascript" src="<%=basePath%>static/js/layui/layui.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/layui/css/layui.css" />

<script src="${basePath }seller/js/goods/goods.js"></script>
	<style type="text/css">
		
	</style>
</head>
	
<body>

<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">

	<!--头 -->
	<jsp:include page="../common/sellerTop.jsp"></jsp:include>

	<!-- mian -->
	<div class="center">
			<div class="col-main">
				<div class="main-wrap">

					<div class="user-order">

						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">商品管理</strong> / <small>Goods</small></div>
						</div>
						<hr/>

					
				<div id="toolbar" style="height: 40px;padding: 5px;">
					<ul class="main_top_ul">
				    	<li class="tj" onclick="addgoods()"><a>添加商品</a></li>
				     	<!-- <li class="sc"><a onclick="delInfo('goods.goods_id','/admin_Goods_delete.action')">删除</a></li> -->
				     	<li class="shuaix" onclick="showSearch();"><a>筛选</a></li>
				   	</ul>
				</div>
							<div class="am-tabs-bd">
								<div class="am-tab-panel am-fade am-in am-active" id="tab1">
									<div class="order-top">
										<div class="th th-item">
											<td class="td-inner">商品名称</td>
										</div>
										<div class="th th-price">
											<td class="td-inner">所属分类</td>
										</div>
										<div class="th th-price">
											<td class="td-inner">销售价</td>
										</div>
										<div class="th th-price">
											<td class="td-inner">销售数量</td>
										</div>
										<div class="th th-price">
											<td class="td-inner">库存数量</td>
										</div>
										<div class="th th-status">
											<td class="td-inner">状态</td>
										</div>
										<div class="th th-change">
											<td class="td-inner">操作</td>
										</div>
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list -->
										</div>
										<div id="layuipage" style="text-align: center;margin: 0 auto;"></div>
									</div>
								</div>
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

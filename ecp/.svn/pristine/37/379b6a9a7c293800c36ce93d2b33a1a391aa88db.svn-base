<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.sys.model.TsUser"%>
<%@page import="com.hontek.member.model.TbMember"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>商品列表</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="static/js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="static/js/uploadify/jquery.uploadify.js"></script>
		<link rel="stylesheet" href="static/js/uploadify/uploadify.css"	type="text/css"></link>
		<script type="text/javascript" src="static/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
		<script type="text/javascript" src="static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
		<script type="text/javascript" src="static/js/module/goods/GoodsList.js"></script>
		<script type="text/javascript" src="static/js/layer/layer.js"></script>
		<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
		<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
		<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
		<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
		<style type="text/css">
			ul {list-style-type: none; margin: 0; padding: 0;}
			.main_top_ul li {
			    background: rgba(0, 0, 0, 0) url("static/images/goods/plcza.jpg") no-repeat scroll left center;
			    float: left;
			    height: 24px;
			    line-height: 24px;
			    margin-right: 7px;
			    text-align: center;
			    width: 76px;
			}
			.button_div {
			    bottom: 10px;
			    position: absolute;
			    text-align: center;
			    width: 100%;
			}
		</style>
	</head>
	<body>
		<div id="toolbar" style="height: 23px;padding: 5px;">
		     	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-filter',plain:true" onclick="showSearch()">筛选</a>
		     	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-undo',plain:true" onclick="audit(2)">审核通过</a>
		     	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-redo',plain:true" onclick="audit(3)">审核不通过</a>
		</div>
		<table id="goodsTable"></table>
		
		<div id="columnWindow" class="easyui-window" data-options="closed:true,shadow:false,modal:true" 
			style="width:400px;top:100px;height:400px;">
			<ul id="columnTree"></ul>
			<div class="button_div">
				<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="saveColumn()">提 交</a>
			    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('columnWindow')">关 闭</a>
			</div>
		</div>
		
		<div id="modelWindow" class="easyui-window" data-options="closed:true,shadow:false,modal:true" 
			style="width:1000px;top:100px;height:400px;">
			<iframe id="ifrId" src="<%=basePath%>jsp/goods/goodsModel.jsp" style="margin:0 auto;width:100%;height:600px;"></iframe>
		</div>
	</body>
</html>

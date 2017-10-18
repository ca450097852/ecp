<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 系统日志列表</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	
	<script type="text/javascript" src="static/js/module/sys/log.js"></script>	

  </head>
  <body>
	    <!-- 系统日志列表 -->
	    <table id="logDatagrid"></table>
	     
	    <!-- logDatagrid 工具栏 -->
	    <div id="toolbar" style="height:auto">
	    	
		<div>
		&nbsp;用户名称: <input type="text" class="easyui-validatebox" style="width:150px" id="userName">
		&nbsp;IP地址: <input type="text" class="easyui-validatebox" style="width:150px" id="ip">
		&nbsp;起止时间: <input type="text" class="easyui-datetimebox" style="width:150px" id="startTime">到<input type="text" class="easyui-datetimebox" style="width:150px" id="endTime">
		&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
		</div>
	
	</div>
  </body>
</html>

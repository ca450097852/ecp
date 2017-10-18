<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 默认角色设置</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/sys/roleDef.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	<style type="text/css">
		#option_col a{
			margin-top: 15px;
		}
	</style>
	
  </head>
  <body>
    
    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-role'" onclick="empower(1)">默认管理员授权</a>
    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-role'" onclick="empower(2)">默认普通角色授权</a>
    
	
	<!-- 栏目授权 -->
	<div id="rolePower" class="easyui-window" title="角色授权" data-options="modal:true,closed:true,iconCls:'icon-save'" style="width:500px;top:10;height:450px">
	<div id="cc" class="easyui-layout" data-options="fit:true">
			<div data-options="region:'west',split:true" title="栏目菜单" style="width:350px;">
				<ul id="rol_col"></ul>
			</div>
			<div data-options="region:'center',title:'操作'" align="center" id="option_col">
				<a href="javascript:void(0)" id="userlist_sub" class="easyui-linkbutton" onclick="selectAll()">全选</a><br/>
		    	<a href="javascript:void(0)" id="userlist_update" class="easyui-linkbutton" onclick="RevSelect()">反选</a><br/>
		    	<a href="javascript:void(0)" id="userlist_reset" class="easyui-linkbutton" iconCls="icon-ok" onclick="passPower()">授权</a><br/>
		    	<a href="javascript:void(0)" id="userlist_reset" class="easyui-linkbutton" onclick="$('#rolePower').window('close')">关闭</a>
			</div>
		</div>
	</div>
  </body>
</html>

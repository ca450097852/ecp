<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 栏目菜单列表</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/sys/sysCol.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
  </head>
  <body>
    <!-- 栏目菜单列表 -->
    <table id="sysColDatagrid"></table>
     
    <!-- sysColDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addSysCol()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateSysCol()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeSysCol()">删除</a>
		<div>
			&nbsp;菜单名称: <input class="easyui-validatebox" style="width:150px" id="name">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加栏目菜单 -->
	<div id="sysColWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:400px;padding:10px;top:100px">
         <div align="center">
		    <form id="sysColForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" name="colId"/>
			    <table>
			    	<tr height="35px">
				        <td>上级菜单:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="_parentId" name="_parentId" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>菜单名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="colName" name="colName" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>链接地址:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="colUrl" name="colUrl" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>顺序号:</td>
					    <td>
					      <input class="easyui-numberbox" type="text" id="seq" name="seq" value="5" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>菜单图标:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="iconUrl" name="iconUrl" style="width:250px">
					    </td>
				    </tr>
				    
				    <tr height="35px">
				        <td>菜单描述:</td>
					    <td>
					      <textarea class="easyui-validatebox" rows="3" cols="50" name="remarks"></textarea>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('sysColWindow')">关 闭</a>
	   </div>
	</div>
  </body>
</html>

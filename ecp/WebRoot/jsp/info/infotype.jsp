<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>资讯分类</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/info/infotype.js"></script>

	<style type="text/css">
		.form_label {
		   width:80px;
		   color: #5e7595;
		   font-weight: bold;
		   text-align: right;
		   background-color: #eaf2ff;
		}
		.form_value {
		    background-color: #ffffff;
		    padding: 5px;
		}
		#label>tbody>tr>td{
		    width: 75px;
		}
	</style>
  </head>
  
  <body>
    <!-- 栏目菜单列表 -->
    <table id="infoTypeDatagrid"></table>
     
    <!-- infoTypeDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addInfoType()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateInfoType()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeInfoType()">删除</a>
		<div>
			&nbsp;分类名称: <input class="easyui-validatebox" style="width:150px" id="typeName">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加栏目菜单 -->
	<div id="infoTypeWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:250px;padding:10px;top:100px">
         <div align="center">
		    <form id="infoTypeForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" name="typeId"/>
		    	<input class="easyui-validatebox" type="hidden" name="userId"/>
		    	<input class="easyui-validatebox" type="hidden" name="crttime"/>
			    <table>
			    	<tr height="35px">
				        <td class="form_label">上级分类:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" id="parentId" name="parentId" required="true" style="width:400px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">分类名称:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" id="typeName" name="typeName" required="true" style="width:400px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">分类描述:</td>
					    <td>
					      <textarea class="easyui-validatebox form_value" rows="3" cols="50" name="remark" style="width:400px"></textarea>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('infoTypeWindow')">关 闭</a>
	   </div>
	</div>
  </body>
</html>

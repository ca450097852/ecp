<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>商品管理  - 商品分类列表</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<script type="text/javascript" src="${basePath}seller/js/goods/goodsType.js"></script>
	
  </head>
  <body>
    <!-- 栏目菜单列表 -->
    <table id="goodsTypeDatagrid"></table>
     
    <!-- goodsTypeDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addGoodsType()">添加</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateGoodsType()">修改</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeGoodsType()">删除</a> -->
		<div>
			&nbsp;分类名称: <input class="easyui-validatebox" style="width:150px" id="name">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="reset()">重置</a>
		</div>
	</div>
	
	<!-- 添加栏目菜单 -->
	<div id="sysColWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:400px;height:270px;padding:10px;top:100px">
         <div align="center">
		    <form id="goodsTypeForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" name="typeId"/>
			    <table>
			    	<tr height="35px">
				        <td>上级分类:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="upcateId" name="upcateId" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>分类编号:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="typeNo" name="typeNo" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>分类名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="typeName" name="typeName" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>状态:</td>
					    <td>
					      <select id="sts" name="sts">
					      	<option value="1">启用</option>
					      	<option value="2">停用</option>
					      </select>
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

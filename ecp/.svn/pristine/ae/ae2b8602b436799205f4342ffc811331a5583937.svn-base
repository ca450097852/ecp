<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>商品管理  - 商品品牌列表</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<script type="text/javascript" src="${basePath}static/js/uploadify/jquery.uploadify.js"></script>
    <link rel="stylesheet" href="${basePath}static/js/uploadify/uploadify.css" type="text/css"></link>
    
    <script type="text/javascript" src="${basePath}static/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
	<script type="text/javascript" src="${basePath}static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
	<script type="text/javascript" src="${basePath}seller/js/goods/goodsBrand.js"></script>
	
	<style type="text/css">
	    .uploadify-queue-item .cancel a {
			width: 20px;
		}
    </style>
  </head>
  <body>
  <input type="hidden" id="sessionId" value="<%=session.getId() %>">
    <!-- 栏目菜单列表 -->
    <table id="goodsBrandDatagrid"></table>
     
    <!-- goodsBrandDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addgoodsBrand()">添加</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updategoodsBrand()">修改</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removegoodsBrand()">删除</a>  -->
		<div>
			&nbsp;品牌名称: <input class="easyui-validatebox" style="width:150px" id="name">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="reset()">重置</a>
		</div>
	</div>
	
	<!-- 添加栏目菜单 -->
	<div id="sysColWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true,shadow:false,modal:true" style="width:400px;padding:10px;top:100px">
         <div align="center">
		    <form id="goodsBrandForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" name="brandId"/>
			    <table>
				    <tr height="35px">
				        <td>品牌编号:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="brandNo" name="brandNo" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>品牌名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="brandName" name="brandName" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>显示顺序:</td>
					    <td>
					      <input class="easyui-numberbox" type="text" name="brandSeq" required="true" style="width:250px" value="5">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>状态:</td>
					    <td>
					      <select name="state">
					      	<option value="1">启用</option>
					      	<option value="2">停用</option>
					      </select>
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>品牌标志:</td>
					    <td>
					      <!-- <input class="easyui-validatebox" type="text" name="modelImg" required="true" style="width:250px" value="5"> -->
					      <input type="hidden" id="brandLogo" name="brandLogo"/>
					      <input type="file" id="brandLogoFile">
					      <div id="quenu"></div>
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

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>商品管理  - 商品库存变化记录表</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/goods/goodsModel.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<script type="text/javascript" src="${basePath}static/js/uploadify/jquery.uploadify.js"></script>
    <link rel="stylesheet" href="${basePath}static/js/uploadify/uploadify.css" type="text/css"></link>
	
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
	</style>
  </head>
  <body>
    <!-- 商品库存变化列表 -->
    <table id="goodsBrandDatagrid"></table>
     
    <!-- goodsBrandDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<div>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="add()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="update()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="remove()">删除</a> 
			&nbsp;状态: <select id="state" name="state"  editable="false">
							<option value= 1>启用</option>
							<option value= 2>停用</option>
						</select>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="reset()">重置</a>
		</div>
	</div>
	
	<div id="inventoryWin" class="easyui-window"  style="width:700px;height:330px"   
        data-options="iconCls:'icon-save',modal:true">   
        <form id="inventoryForm">
        		<input type="hidden" name="modelId">
        		<input type="hidden" id="goodsId" name="goodsId">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">规格编码:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="modelNo"  style="width:250px"  data-options="required:true,validType:['length[0,50]']">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">规格名称:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="modelName" style="width:250px" data-options="required:true,validType:['length[0,50]']">
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">规格图片:</td>
					    <td>
					    	<input type="hidden" id="modelImg" name="modelImg"/>
					        <input type="file" id="modelImgFile">
					        <div id="quenu"></div>
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label" >状态:</td>
					    <td>
					      <select name="state" editable="false">
					      	<option value="1">启用</option>
					      	<option value="2">停用</option>
					      </select>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
	   <div style="text-align:center;padding:10px;">
	   		<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('inventoryWin')">关 闭</a>
	   </div>
	</div>  

  </body>
</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>商品管理  - 商品规格管理</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/goods/goodsInventory.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
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
    <!-- 商品规格列表 -->
    <table id="goodsBrandDatagrid"></table>
     
    <!-- goodsBrandDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<div>
			&nbsp;商品名称: <input class="easyui-validatebox" style="width:150px" id="goodsName">
			&nbsp;卖家名称: <input class="easyui-validatebox" style="width:150px" id="memberName">
			&nbsp;店铺名称: <input class="easyui-validatebox" style="width:150px" id="shopName">
			&nbsp;变化类型: <select id="changeType" name="changeType">
							<option value= "">全部</option>	
							<option value= "1">增加</option>
							<option value= "2">减少</option>		
						</select>
						<br>
			&nbsp;变化时间: <input type="text" class="easyui-datebox" style="width:150px" id="beginTime">
			&nbsp;~ <input type="text" class="easyui-datebox" style="width:150px" id="endTime">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="reset()">重置</a>
		</div>
	</div>
	
	<div id="inventoryWin" class="easyui-window" title="商品库存变化详情" style="width:700px;height:330px"   
        data-options="iconCls:'icon-save',modal:true">   
        <form id="inventoryForm">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">商品名称:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="goodsName"  style="width:250px">
					    </td>
					    <td class="form_label">卖家名称:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="memberName" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">店铺名称:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="shopName"  style="width:250px">
					    </td>
					    <td class="form_label">商品原数量:</td>
					    <td>
					      <input type="text" class="easyui-numberbox form_value"  name="oldCount" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">变化类别:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="changeType"  style="width:250px">
					    </td>
					    <td class="form_label">变化数量:</td>
					    <td>
					      <input type="text" class="easyui-numberbox form_value"  name="changeCount" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">变化时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="changeTime"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">变化原因:</td>
					    <td rowspan="3">
					    <textarea class="form_value" rows="5" cols="3" type="text" name="changeCause" style="width:250px"></textarea>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('inventoryWin')">关 闭</a>
	   </div>
	</div>  

  </body>
</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>推荐管理  - 推荐记录查看</title>
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
	<script type="text/javascript" src="${basePath}static/js/easyui/datagrid-detailview.js"></script>
	
	<script type="text/javascript" src="${basePath}static/js/module/recommend/record.js"></script>
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
    <!-- 会员列表 -->
    <table id="memberDatagrid"></table>
     
    <!-- memberDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<div>
			&nbsp;推荐人: <input class="easyui-validatebox" style="width:150px" id="levelName" >
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
<div id="win" class="easyui-window" title="详细信息管理" data-options="iconCls:'icon-house',closed:true,resizable:false,shadow:false" style="width:900px;height:450px;padding:0px;top:10px">
	
		 <div class="easyui-tabs" id="companyTab" data-options="fit:true">		 
	         <div align="center" title="订单信息">
	            <div class="easyui-layout" data-options="fit:true">   
        <div data-options="region:'north',split:true" style="height:150px">
        <form>
         <table>
			    	<tr height="35px">
				        <td class="form_label">订单编号:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" id="mrId"  style="width:250px" value="1">
					    </td>
					    <td class="form_label">推荐人:</td>
					    <td>
					     <input class="easyui-textbox form_value" type="text" id="nickName1"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">被推荐人:</td>
					    <td>
					     <input class="easyui-textbox form_value" type="text" id="nickName"  style="width:250px">
					    </td>
					    <td class="form_label">订单金额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" id="orderMoney"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">推荐奖励金额:</td>
					    <td>
					       <input class="easyui-numberbox form_value" type="text" id="recommendMoney"  style="width:250px">
					    </td>
					    <td class="form_label">奖励金提取状态:</td>
					    <td>
					      <input class="easyui-textbox form_value" type="text" id="state"  style="width:250px">
					    </td>
					    
				    </tr>
				     <tr height="35px">
				        <td class="form_label">记录时间:</td>
					    <td>
					       <input class="easyui-textbox form_value" type="text" id="createTime"  style="width:250px">
					    </td>
					  
					   
				    </tr>
				    
			    </table>
			    </form>
        </div>   
        <div data-options="region:'center'"> 
        <!-- 商品信息 -->  
            <table id="goodsDatagrid"></table>
        </div>   
    </div>   
		 
			   
	       </div>
	       
	       <div align="center" title="推荐信息">
	     	 
	      </div>
	      
		<div align="center" title="商品信息">
	     	 
	      </div>
	      
	      
	</div>
	</div>
  </body>
</html>

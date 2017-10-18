<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>推荐管理  - 会员推荐等级</title>
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
	
	<script type="text/javascript" src="${basePath}static/js/module/recommend/integral.js"></script>
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
<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addEntType()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateEntType()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeMember()">删除</a> 	
		<div>
			&nbsp;等级名称: <input class="easyui-validatebox" style="width:150px" id="levelName" >
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加会员 推荐积分-->
	<div id="memberWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:300px;padding:10px;top:100px">
         <div align="center">
		    <form id="memberForm" method="post">
		       <input type="hidden" id="levelId" name="levelId"/>
			    <table>
				    <tr height="40px">
				        <td>等级名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="levelName" name="levelName" required="true" style="width:250px">
					    </td>
				    </tr>
				     <tr height="40px">
				        <td>等级金额:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="score" name="score" required="true" style="width:250px">
					    </td>
				    </tr>
				     <tr height="40px">
				        <td>奖励比例:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="score" name="score" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>等级介绍:</td>
					    <td>
					      <textarea class="easyui-validatebox" rows="3" cols="50" id="levelDesc" name="levelDesc" style="width:250px"></textarea>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('memberWindow')">关 闭</a>
	   </div>
	</div>

	
  </body>
</html>

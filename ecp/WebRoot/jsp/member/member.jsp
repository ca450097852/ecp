<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>会员管理  - 会员列表</title>
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
	
	<script type="text/javascript" src="${basePath}static/js/module/member/member.js"></script>
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
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addMember()">查看详细</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateMember()">审核</a> -->
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeMember()">删除</a>
		<a href="javascript:void(0)" id="auditsts_ok"  class="easyui-linkbutton" data-options="iconCls:'icon-ok',plain:true" onclick="doAuditsts(1)">审核通过</a>
		<a href="javascript:void(0)" id="auditsts_no"  class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="doAuditsts(2)">审核不通过</a>
			
		<div>
			&nbsp;会员名称: <input class="easyui-validatebox" style="width:150px" id="memberName">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加会员 -->
	<div id="memberWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:250px;padding:10px;top:100px">
         <div align="center">
		    <form id="memberForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" id="typeId" name="typeId"/>
			    <table>
				    <tr height="40px">
				        <td>类型名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="typeName" name="typeName" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>备注:</td>
					    <td>
					      <textarea class="easyui-validatebox" rows="3" cols="50" id="remarks" name="remarks"></textarea>
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
	
	<div id="dlg" class="easyui-dialog" title="Basic Dialog" data-options="iconCls:'icon-save'" style="width:800px;top:90;height:250px;">
		<table width="100%">
				<tr>
					<td class="form_label">会员名称：</td>
					 <td class="form_value" >
						<span id="dtl_memberName"></span>
					</td>
					<td class="form_label">会员类型：</td>
					 <td class="form_value" >
					 <span id="dtl_memberFlag"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">登录账号：</td>
					 <td class="form_value" >
					 <span id="dtl_account"></span>
					</td>
					<td class="form_label">真实名称：</td>
					 <td class="form_value" >
					 <span id="dtl_realName"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">用户状态：</td>
					 <td class="form_value" >
						<span id="dtl_memberState"></span>
					</td>
					<td class="form_label">性别：</td>
					 <td class="form_value" >
						<span id="dtl_sex"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">联系电话：</td>
					 <td class="form_value" >
						<span id="dtl_memberPhone"></span>
					</td>
					<td class="form_label">生日：</td>
					 <td class="form_value" >
						<span id="dtl_birthday"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">电子邮箱：</td>
					 <td class="form_value" >
						<span id="dtl_memberEmail"></span>
					</td>
					<td class="form_label">家乡：</td>
					 <td class="form_value" >
						<span id="dtl_hometown"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">联系地址：</td>
					 <td class="form_value" >
						<span id="dtl_memberAddr"></span>
					</td>
					
				</tr>
				
				
					   
			</table>
	</div>
	
  </body>
</html>

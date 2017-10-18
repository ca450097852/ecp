<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>会员收货地址</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
		<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
		<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/bootstrap/easyui.css"/>
		
		<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
		<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
		<script type="text/javascript" src="${basePath}static/js/easyui/datagrid-detailview.js"></script>
		
		<script type="text/javascript" src="<%=basePath%>static/js/web/member/addr.js"></script>
		<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	</head>
<body>
	<!-- 收货地址列表 -->
    <table id="addrDatagrid"></table>
     
    <!-- addrDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addEntType()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateEntType()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeEntType()">删除</a>
		<div>
			&nbsp;类型名称: <input class="easyui-validatebox" style="width:150px" id="name" name="typeName">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加收货地址 -->
	<div id="addrWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:250px;padding:10px;top:100px">
         <div align="center">
		    <form id="addrForm" method="post">
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
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('addrWindow')">关 闭</a>
	   </div>
	</div>	

</body>
</html>

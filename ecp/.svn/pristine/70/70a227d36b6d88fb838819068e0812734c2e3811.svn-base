<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 机构类型列表</title>
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
    <!-- easyui end -->
     
	<script type="text/javascript" src="static/js/module/sys/entType.js"></script>
	<script type="text/javascript" src="static/js/module/comm/hontek.js"></script>	

</head>
<body>

	 <!-- 角色列表 -->
	    <table id="table"></table>
	     
	    	<!-- roleDatagrid 工具栏 -->
	    	
	    <div id="toolbar" style="height:auto">
	    	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addEntType()">添加</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateEntType()">修改</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeEntType()">删除</a>
		</div>
		
		<div id="myWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:350px;height:300px;padding:10px;top:100px">
					    <form id="entTypeForm" method="post">
					    	<input type="hidden" name="typeId"/>
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
								      <textarea style="width:250px"  rows="3" cols="50" id="remarks" name="remarks"></textarea>
								    </td>
							    </tr>
						    </table>
					    </form>
					    <div style="text-align:center;padding:10px;">
		   				<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    			<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('myWindow')">关 闭</a>
	   				</div>
		            </div>



</body>
    
</html>

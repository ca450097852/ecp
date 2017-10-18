<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 角色列表</title>
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
	<script type="text/javascript" src="static/js/module/sys/role.js"></script>
	<script type="text/javascript" src="static/js/module/comm/hontek.js"></script>		
  </head>
  <body>
  
	    <!-- 角色列表 -->
	    <table id="roleDatagrid"></table>
	     
	    <!-- roleDatagrid 工具栏 -->
	    <div id="toolbar" style="height:auto">
	    	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addRole()">添加</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateRole()">修改</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeRole()">删除</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-redo',plain:true" onclick="empower()">角色授权</a>
		<div>
		&nbsp;角色名称: <input class="easyui-validatebox" style="width:150px" id="name">
		&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
		</div>
		
	    		<div id="myWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:350px;height:350px;padding:10px;top:100px">
					    <form id="roleForm" method="post">
					    	<input type="hidden" name="roleId"/>
						    <table >
						    	<tr height="35px">
							        <td>所属机构:</td>
								    <td>
								      <input class="easyui-validatebox" required="true" type="text" id="entId" name="entId" style="width:250px">
								    </td>
							    </tr>
							    <tr height="35px">
							        <td>角色名称:</td>
								    <td>
								      <input class="easyui-validatebox" required="true" type="text" id="roleName" name="roleName" style="width:250px">
								    </td>
							    </tr>
							    <tr height="35px">
							        <td>角色级别:</td>
								    <td>
									    <select id="roleLevel"   name="roleLevel" style="width:250px;">   
										    <option value="1" selected="selected">管理员</option>   
										    <option value="2">普通用户</option>   
										</select>  
								    </td>
							    </tr>
							    <tr height="35px">
							        <td>角色状态:</td>
								    <td>
								      <select id="roleSts"  name="sts" style="width:250px;">   
										    <option value="1" selected="selected">发布</option>   
										    <option value="2">作废</option>   
										</select>
								    </td>
							    </tr>
							    <tr height="35px">
							        <td>角色描述:</td>
								    <td>
								      <textarea class="easyui-validatebox"  name="roleDesc" style="width: 250px;height: 80px"></textarea>
								    </td>
							    </tr>
						    </table>
					    </form>
					    <div style="text-align:center;padding:10px;">
		   				<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    			<a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('myWindow')">关 闭</a>
	   				</div>
		            </div>
		            
	    		<!-- 角色授权 -->
			<div id="rolePower" class="easyui-window" title="角色授权" data-options="modal:true,closed:true,iconCls:'icon-save'" style="width:400px;top:50;height:450px">
				<div id="cc" class="easyui-layout" data-options="fit:true">
					<div data-options="region:'west',split:true" title="栏目菜单" style="width:250px;">
						<ul id="role_col"></ul>
					</div>
				<div data-options="region:'center',title:'操作'" align="center" id="option_col">
					<a href="javascript:void(0)" style="margin-top: 50px;" class="btn btn-primary" onclick="selectAll()">全选</a><br/>
		    		<a href="javascript:void(0)" style="margin-top: 20px;" class="btn btn-info" onclick="RevSelect()">反选</a><br/>
			    		<a href="javascript:void(0)" style="margin-top: 20px;" class="btn btn-success" iconCls="icon-ok" onclick="passPower()">授权</a><br/>
			    	<a href="javascript:void(0)" style="margin-top: 20px;" class="btn btn-danger" iconCls="icon-no" onclick="$('#rolePower').window('close')">关闭</a>
				</div>
			</div>
	</div>
		             
		            
	    	
		    
	
  </body>
</html>

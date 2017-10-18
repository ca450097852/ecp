<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 用户列表</title>
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
	<script type="text/javascript" src="${basePath}static/js/module/sys/user.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
  </head>
  <body>
    <!-- 组织用户列表 -->
    <table id="userDatagrid"></table>
     
    <!-- userDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addUser()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateUser()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeUser()">删除</a>
		<div>
			&nbsp;用户账号: <input class="easyui-validatebox" style="width:150px" id="name">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加组织用户 -->
	<div id="userWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:700px;height:400px;padding:10px;top:10px">
         <div align="center">
		    <form id="userForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" name="userId"/>
			    <table>
				    <tr height="35px">
				        <td>所属机构:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="entId" name="entId" style="width:200px">
					    </td>
					    <td>用户名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="nickname" name="nickname" required="true" style="width:200px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>用户账号:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="userName" name="userName" required="true" style="width:200px">
					    </td>
					    <td>用户密码:</td>
					    <td>
					      <input class="easyui-validatebox" type="password" name="password" required="true" style="width:200px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>性别:</td>
					    <td>
					      	<select id="sex" class="easyui-combobox" name="sex" style="width:200px;">   
							    <option value="1" selected="selected">男</option>   
							    <option value="2">女</option>   
							</select> 
					    </td>
					    <td>出生日期:</td>
					    <td>
					      <input class="easyui-datebox" type="text" name="birthDate" style="width:200px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>用户性质:</td>
					    <td>
						    <select id="flag" class="easyui-combobox" name="flag" style="width:200px;">   
							    <option value="1" selected="selected">管理用户</option>   
							    <option value="2">企业用户</option>   
							</select>  
					    </td>
					    <td>用户状态:</td>
					    <td>
					      <select id="userSts" class="easyui-combobox" name="sts" style="width:200px;">   
							    <option value="1" selected="selected">发布</option>   
							    <option value="2">作废</option>   
							</select>
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>联系地址:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" name="addr"  style="width:200px">
					    </td>
					    <td>联系电话:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" name="tel" style="width:200px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td>电子邮箱:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" name="email"  style="width:200px">
					    </td>
					    <td>手机号码:</td>
					    <td>
					      <input class="easyui-numberbox" type="text" name="phone" style="width:200px">
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('userWindow')">关 闭</a>
	   </div>
	</div>
	
	
	<div id="assignRoleWindow" class="easyui-window" data-options="closed:true" title="用户角色设置" style="width:550px;top:10;height:350px;">
		<div id="assignRoleLayout" class="easyui-layout" data-options="fit:true">   		   
		   <div data-options="region:'west',iconCls:'icon-group',title:'未分配角色',split:true" style="width:210px;">
		    	<select multiple id="wait" style="width:200px;height:280px;">
		    		
		    	</select>
		    </div>   
		    
		    <div data-options="region:'east',iconCls:'icon-group',title:'已分配角色',split:true" style="width:210px;">
		    	<select multiple id="had" style="width:200px;height:280px;">
		    			
		    	</select>
		    </div>   
		    
		    <div data-options="region:'center',title:'操作'" style="background:#eee;" align="center">
		    		<div style="height: 50px;"></div>
		    		<div style="height: 50px;">
		    			<a href="javascript:void(0)" id="addRole" class="easyui-linkbutton" data-options="iconCls:'icon-add'">添加</a>
		    		</div>
		    		
		    		<div style="height: 50px;">
		    			<a href="javascript:void(0)" id="removeRole" class="easyui-linkbutton" data-options="iconCls:'icon-remove'">移除</a>
		    		</div>
					
					<div style="height: 50px;">
						<a href="javascript:void(0)" id="saveRole" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a>	
					</div>
						
					<div style="height: 50px;">
						<a href="javascript:void(0)" id="closeRoleWindow" class="easyui-linkbutton" data-options="iconCls:'icon-no'">关闭</a>	
					</div>
		    </div>   
		</div>  
	</div>
  </body>
</html>

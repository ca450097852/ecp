<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>系统管理  - 机构列表</title>
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

	<script type="text/javascript" src="static/js/module/sys/enterprise.js"></script>
	<script type="text/javascript" src="static/js/module/comm/hontek.js"></script>
  </head>
  <body>
    <!-- 组织机构列表 -->
    <table id="enterpriseDatagrid"></table>
     
    <!-- enterpriseDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
	    	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addEnterprise()">添加</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateEnterprise()">修改</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeEnterprise()">删除</a>
		<div>
		&nbsp;机构名称: <input class="easyui-validatebox" style="width:150px" id="name">
		&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
		</div>
		
		<div id="myWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:700px;height:600px;padding:10px;top:50px">
					      <form id="enterpriseForm" method="post">
					    	<input type="hidden" name="entId"/>
					    	<input type="hidden" value="0" name="sts">
					    	<input type="hidden" value="5" name="seq">		    	
					    	<input type="hidden" name="crtTime"/>
					    	<input type="hidden" name="userId"/>
					    	<input type="hidden" name="logoUrl"/>
					    	<input type="hidden" name="entCode"/>
					    	<input type="hidden" name="dimenno"/> 		    	
						    <table >
							    <tr height="30px">
							        <td>上级机构:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" id="_parent_id" name="parentId" style="width:250px">
								    </td>
								    <td>机构名称:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" id="entName" name="entName" required="true" style="width:250px">
								    </td>
							    </tr>
							    <tr height="30px">
							        <td>机构账号:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" id="account" name="account" required="true"  style="width:250px">
								    </td>
								    <td>机构简称:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="simpleName" required="true" style="width:250px">
								    </td>
							    </tr>
							    
							    <tr height="30px">
							        
								    <td>组织机构代码:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="orgCode"  style="width:250px">
								    </td>
								    <td>营业执照:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="entLicense" style="width:250px">
								    </td>
							    </tr>				    
							    <tr height="30px">
							        <td>企业法人:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="legalPerson"  style="width:250px">
								    </td>
								    <td>联系人:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="contacts"  style="width:250px">
								    </td>
								   
							    </tr>
						    
							    <tr height="30px">
							        <td>手机号码:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="phone" style="width:250px">
								    </td>
								    <td>固定电话:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="tel" style="width:250px">
								    </td>
							    </tr>
							    <tr height="30px">
							        <td>传真号码:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="fax" style="width:250px">
								    </td>
								    <td>邮政编码:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="postCode" style="width:250px">
								    </td>
							    </tr>
							    <tr height="30px">
							        <td>联系地址:</td>
								    <td colspan="3">
								      <input class="easyui-validatebox" type="text" name="regAddr"  style="width:100%">
								    </td>					    
							    </tr>
							    <tr height="30px">
							        <td>电子邮箱:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="email"  style="width:250px">
								    </td>
								    <td>机构域名:</td>
								    <td>
								      <input class="easyui-validatebox" type="text" name="domName" style="width:250px">
								    </td>
							    </tr>
							    <tr height="30px">				        
								    <td>机构类型:</td>
								    <td>
								      <select id="entType"  name="entType" style="width:250px;">   
										    
									  </select>
								    </td>
								    <td>机构标识:</td>
								    <td>
									    <select id="flag"  name="flag" style="width:250px;">   
										    <option value="1" selected="selected">管理机构</option>   
										    <option value="2">公司企业</option>   
										</select>  
								    </td>
							    </tr>
							    <tr height="30px">
							        <td>机构介绍:</td>
								    <td colspan="3">
								      <textarea   name="intro" style="width: 100%;height: 100px"></textarea>
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

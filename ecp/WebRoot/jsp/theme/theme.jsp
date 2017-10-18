<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>会员管理  - 店铺列表</title>
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
		
	<script type="text/javascript" src="${basePath}static/js/module/theme/theme.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/browser.js"></script>
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
  </head>
  <body>
  
   	 <input type="hidden" id="basePath" value="<%=basePath%>"/>
 	 <input type="hidden" id="filePath" value="<%=filePath%>"/>
  
    <!-- 店铺列表 -->
    <table id="themeDatagrid"></table>
     
    <!-- memberDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
    	<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addTheme()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateTheme()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeTheme()">删除</a>
				<a href="javascript:void(0)" id="auditsts_ok"  class="easyui-linkbutton" data-options="iconCls:'icon-ok',plain:true" onclick="doAuditsts(2)">发布</a>
		<a href="javascript:void(0)" id="auditsts_no"  class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="doAuditsts(1)">不发布</a>
		 <!--
		 <a href="javascript:void(0)" id="auditsts_ok"  class="easyui-linkbutton" data-options="iconCls:'icon-ok',plain:true" onclick="doAuditsts(2)">审核通过</a>
		<a href="javascript:void(0)" id="auditsts_no"  class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="doAuditsts(3)">审核不通过</a>
		 -->
		<div>
			&nbsp;主题名称: <input class="easyui-validatebox" style="width:150px" id="themeName">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加店铺 -->
	<div id="themeWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:350px;padding:10px;top:100px">
         <div align="center">
		    <form id="themeForm" method="post">
		    	<input class="easyui-validatebox" type="hidden" id="themeId" name="themeId"/>
			    <table>
				    <tr height="40px">
				        <td>主题名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="themeName" name="themeName" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>主题时间:</td>
					    <td>
					      <input class="easyui-datebox" type="text" id="themeTime" name="themeTime" required="true" style="width:250px">
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>主题介绍:</td>
					    <td>
					      <textarea class="easyui-validatebox" rows="3" cols="50" id="themeIntro" name="themeIntro"></textarea>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('themeWindow')">关 闭</a>
	   </div>
	</div>
	
  </body>
</html>

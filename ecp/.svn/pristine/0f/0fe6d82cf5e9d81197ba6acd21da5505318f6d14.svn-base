<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!-- 如果使用IE浏览器，优先使用IE高版本 -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" ></meta>
	<!-- 如果使用双核浏览器，优先使用极速模式 -->
	<meta name="renderer" content="webkit"></meta>
    <title>系统管理 - 广告列表</title>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/easyui/demo/demo.css" />
	
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="<%=basePath %>static/js/jquery.cookie.js"></script>
	<link href="<%=basePath %>static/js/easyui/themes/<c:out value="${cookie.easyuiThemeName.value}" default="metro-blue"/>/easyui.css" id="easyuiTheme" rel="stylesheet" type="text/css"/>
	
	
	<script type="text/javascript" src="<%=basePath%>static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="<%=basePath%>static/js/module/comm/hontek.js"></script>
	
	<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
	<script language="JavaScript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>
	
	<script type="text/javascript" src="<%=basePath%>static/js/module/info/banner.js"></script>
	
  </head>
  <body>
   <!-- 广告图片列表 -->
   <table id="bannerDataGrid"></table>  
   	  
   <input type="hidden" id="jsessionid" value="<%=session.getId() %>"> 
   <input type="hidden" value="<%=basePath %>" id="basePath">
   <input type="hidden" value="<%=filePath %>" id="filePath">
    <!-- bannerDataGrid 工具栏 -->
    <div id="tb" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="appendBanner()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateBanner()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeBanner()">删除</a>
		<div>
				&nbsp;&nbsp;广告位置: 
				<input class="easyui-combobox" id="s_imgType" style="width:150px"/>
				&nbsp;&nbsp;显示状态: <select class="easyui-combobox" id="s_sts" style="width:150px;">
							      	<option value='-1' selected="selected">--请选择显示状态--</option>
							      	<option value="1">显示</option>
						   			<option value="2">不显示</option>
							      </select>
				&nbsp;&nbsp;名称: <input class="easyui-validatebox" style="width:150px" id="s_imgName" >
				&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
				&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-reload" onclick="clearSearch();">重 置</a>
		</div>
	</div>
	
	<div id="addWin" class="easyui-window" title="添加广告图片" data-options="iconCls:'icon-save',closed:'true'" style="width:520px;height:440px;padding:10px;top:50px">
		 <div class="easyui-panel" style="width:490px">
         <div align="center">
		    <form id="bannerForm" method="post">
	     		<input type="hidden" id="imgId" name="imgId"/>
			    <input type="hidden" id="crttime" name="crttime"/>
			    <input type="hidden" id="userId" name="userId"/>
			    <input type="hidden" id="imgUrl" name="imgUrl">
			    <table>
				    <tr height="40px">
				        <td>选择图片:</td>
					    <td>
					    	<input type="file" name="uploadify" id="uploadify" />
		   					<div id="fileQueue"></div>
					    </td>
				    </tr>
				    <tr height="40px">
				        <td></td>
				        <td><font color="red">pc端广告图片最佳规格为：2057*450像素</font></td>
				    </tr>
				    <tr height="40px">
				        <td></td>
				        <td><font color="red">app端广告图片最佳规格为：640*300像素</font></td>
				    </tr>
				    <tr height="40px">
				        <td>图片名称:</td>
					    <td>
					      <input class="easyui-validatebox" type="text" id="imgName" name="imgName" data-options="validType:'length[0,50]'" style="width:300px" />
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>广告位置:</td>
					    <td>
					    	<input class="easyui-combobox" id="imgType" name="imgType" style="width:300px"/>
					    </td>
				    </tr>
					<tr height="40px">
				        <td>链接地址:</td>
					    <td>
						   <input id="linkUrl" name="linkUrl"  class="easyui-validatebox" validType="length[0,100]" style="width: 300px">
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>显示顺序:</td>
					    <td>
						   <input class="easyui-numberbox" id="seq" value="5" name="seq" style="width:300px"/>
					    </td>
				    </tr>
				    <tr height="40px">
				        <td>显示状态:</td>
					    <td>
						   <select class="easyui-combobox" id="sts" name="sts" style="width:300px">
						   		<option value="1" selected="selected">显示</option>
						   		<option value="2">不显示</option>
						   </select>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:5px">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>&nbsp;&nbsp;&nbsp;
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="clearForm()">关 闭</a>
	   </div>
    </div>
	</div>
  </body>
</html>

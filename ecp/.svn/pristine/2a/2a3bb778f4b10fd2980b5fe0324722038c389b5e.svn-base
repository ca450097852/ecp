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
    
    <title>资讯内容管理</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	<!-- 百度编辑器 -->
	<script type="text/javascript" charset="utf-8" src="<%=basePath%>static/js/ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8" src="<%=basePath%>static/js/ueditor/ueditor.all.min.js"> </script>
	<script type="text/javascript" charset="utf-8" src="<%=basePath%>static/js/ueditor/lang/zh-cn/zh-cn.js"></script>
	
	<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
	<script language="JavaScript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>
	
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/browser.js"></script>
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
	<script type="text/javascript" src="${basePath}static/js/module/info/info.js"></script>
	
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
		#label>tbody>tr>td{
		    width: 75px;
		}
	</style>

  </head>
  
  <body>
    <!-- 栏目菜单列表 -->
    <table id="infoDatagrid"></table>
  		  <input type="hidden" id="basePath" value="<%=basePath%>"/>
 		  <input type="hidden" id="filePath" value="<%=filePath%>"/>
     
    <!-- infoTypeDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addInfo()">添加</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateInfo()">修改</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeInfo()">删除</a>
		<div>
			&nbsp;关键字: <input style="width:150px" id="infoName">
			&nbsp;&nbsp;状态: <select id="input_sts" class="easyui-combobox" data-options="editable:false,panelHeight:'auto'" >
						<option value="-1">--全部--</option>
						<option value="0">待审核</option>
						<option value="1">已发布</option>
						<option value="2">审核未通过</option>
						</select>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加栏目菜单 -->
	<div id="infoWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:900px;height:450px;padding:10px;top:100px">
         <div align="center">
		    <form id="infoForm" method="post">
		    	<input type="hidden" name="infoId"/>
		    	<input type="hidden" id="titlePic" name="titlePic"/>
			    <table>
			    	<tr height="35px">
				        <td class="form_label">资讯分类:</td>
					    <td>
					      <input class=" form_value" type="text" id="typeId" name="typeId" required="true" style="width:300px">
					    </td>
					    <td class="form_label">标题:</td>
					    <td>
					      <input class=" form_value" type="text" id="title" name="title" required="true" style="width:300px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">排序号:</td>
					    <td>
					      <input class=" form_value" type="text" name="seq" value="5" required="true" style="width:300px">
					    </td>
					    <td class="form_label">状态:</td>
					    <td>
						    <select class=" form_value" name="rsts" style="width:300px;" required="true" ata-options="editable:false,panelHeight:'auto'">   
							    <option value="0">待审核</option>   
							    <option value="1">审核通过</option>   
							    <option value="2">未通过</option>   
							</select>  
					    </td>
				    </tr>
				    
				    <tr height="30px">
					  	<td class="form_label">标题图片：</td>
						<td align="left">
							<input type="file" id="up_titlePic"/>
						</td>
						<td align="left">
							<div id="showtitlePic" align="left" style="width: 200px;display: none;"></div>
						</td>
						<td colspan="2">
						<div id="fileQueueLogo"></div>
						</td>
					</tr> 
				    
				    <tr height="35px">
				        <td class="form_label">备注:</td>
					    <td>
					      <textarea class="form_value" rows="3" cols="50" name="remark" style="width:300px;"></textarea>
					    </td>
				    </tr>
				    <tr height="35px">
					    <td class="form_label" style="width:100px">资讯内容:</td>
					    <td colspan="4">
					      	<textarea  id="content"  name="content" style="display: none;"></textarea>
					       <script id="u_content" type="text/plain" class="ueditorZk"></script>
					    </td>
				    </tr>
			    </table>
		    </form>
       </div>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-ok" onclick="submitForm()">提 交</a>
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('infoWindow')">关 闭</a>
	   </div>
	</div>
  </body>
</html>

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
		
	<script type="text/javascript" src="${basePath}static/js/module/member/shop.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/browser.js"></script>
	<script type="text/javascript" src="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
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
  
   	 <input type="hidden" id="basePath" value="<%=basePath%>"/>
 	 <input type="hidden" id="filePath" value="<%=filePath%>"/>
  
    <!-- 店铺列表 -->
    <table id="shopDatagrid"></table>
     
    <!-- memberDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true" onclick="addMember()">查看详细</a> -->
<!-- 		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true" onclick="updateMember()">审核</a> -->
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true" onclick="removeMember()">删除</a>
		<a href="javascript:void(0)" id="auditsts_ok"  class="easyui-linkbutton" data-options="iconCls:'icon-ok',plain:true" onclick="doAuditsts(2)">审核通过</a>
		<a href="javascript:void(0)" id="auditsts_no"  class="easyui-linkbutton" data-options="iconCls:'icon-cancel',plain:true" onclick="doAuditsts(3)">审核不通过</a>
		<a href="javascript:void(0)" id="auditsts_no"  class="easyui-linkbutton" data-options="iconCls:'icon-lock',plain:true" onclick="doAuditsts(4)">店铺关闭</a>
		<div>
			&nbsp;店铺名称: <input class="easyui-validatebox" style="width:150px" id="shopName">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
		</div>
	</div>
	
	<!-- 添加店铺 -->
	<div id="memberWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true" style="width:500px;height:350px;padding:10px;top:100px">
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
	
	<div id="dlg" class="easyui-dialog" title="Basic Dialog" data-options="iconCls:'icon-save'" style="width:800px;top:90;height:350px;">
		<table width="100%">
				<tr>
					<td class="form_label">店铺名称：</td>
					 <td class="form_value" >
						<span id="dtl_shopName"></span>
					</td>
					<td class="form_label">店铺类型：</td>
					 <td class="form_value" >
					 <span id="dtl_shopType"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">会员名称：</td>
					 <td class="form_value" >
					 <span id="dtl_memberName"></span>
					</td>
					<td class="form_label">店铺掌柜：</td>
					 <td class="form_value" >
					 <span id="dtl_userName"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">店铺状态：</td>
					 <td class="form_value" >
						<span id="dtl_shopState"></span>
					</td>
					<td class="form_label">主营范围：</td>
					 <td class="form_value" >
						<span id="dtl_shopMain"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">店铺介绍：</td>
					 <td class="form_value" >
						<span id="dtl_shopDesc"></span>
					</td>
					<td class="form_label">店铺地址：</td>
					 <td class="form_value" >
						<span id="dtl_shopAddr"></span>
					</td>
				</tr>
				<tr>
					<td class="form_label">身份证号：</td>
					 <td class="form_value" >
						<span id="dtl_idcard"></span>
					</td>
					<td class="form_label">开店时间：</td>
					 <td class="form_value" >
						<span id="dtl_openTime"></span>
					</td>
				</tr> 
				
				<tr height="30px">
					  	<td class="form_label">身份证图片：</td>
						<td align="left">
							<div id="showtitlePic1" align="left" style="width: 200px;display: none;"></div>
						</td>
						
						<td colspan="2">
						<div id="fileQueueLogo"></div>
						</td>
					</tr> 
				
				<tr height="30px">
					  	<td></td>
						<td align="left">
							<div id="showtitlePic2" align="left" style="width: 200px;display: none;"></div>
						</td>
					</tr> 
			
				  
			</table>
	</div>
	
  </body>
</html>

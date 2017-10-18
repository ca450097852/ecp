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
	<link rel="stylesheet" href="./layui/css/layui.css">
	<script src="./layui/layui.js"></script>
  </head>
  <body>
  	<table class="layui-table" lay-data="{height:315, url:'./webGoods/ns/page.action', page:true, id:'test'}" lay-filter="test">
  <thead>
    <tr>
      <th lay-data="{field:'total', width:80, sort: true}">ID</th>
      <th lay-data="{field:'', width:80}">用户名</th>
      <th lay-data="{field:'checked', width:80}">用户名</th>
     
    </tr>
  </thead>
</table>
 

<script>
layui.use('table', function(){
  var table = layui.table;
});
</script>
	
  </body>
</html>

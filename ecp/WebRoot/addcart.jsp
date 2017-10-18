<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String tomcatPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
String goodsId = request.getParameter("goodsId");
String pcount = request.getParameter("pcount");

TbMemberUser memberUser = (TbMemberUser) session.getAttribute ( "memberUser" );
int memberId = 0;
if(memberUser!=null){
	memberId = memberUser.getMemberId().intValue();
}
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>添加到购物车页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="static/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="static/js/web/comm/addcart.js"></script>
	
<style type="text/css">

</style>

  </head>
  
  <body>
  <!-- qql -->
  <input type="hidden" id="goodsId" value="<%=goodsId %>"/>
  <input type="hidden" id="pcount" value="<%=pcount %>"/>
  <input type="hidden" id="memberId" value="<%=memberId %>" />
  <input type="hidden" id="tomcatPath" value="<%=tomcatPath %>"/>
  
  

  <!-- cart cookie -->
  <!-- cart cookie -->
  
  <div>
  <p><strong><font style="color: green">该商品已经成功放入购物车!</font></strong>&nbsp;&nbsp;&gt;<a href="cart.jsp">去购物车结算</a>&nbsp;&nbsp;&gt;<a href="javascript:void(0);" onclick="javascript:history.back();">继续购物</a></p>
  </div>
  
  
  </body>
</html>

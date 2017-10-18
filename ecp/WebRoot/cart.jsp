<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String tomcatPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

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
    
    <title>购物车页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="static/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="static/js/layer/layer.js"></script>
	<script type="text/javascript" src="static/js/web/comm/cart.js"></script>
	
<style type="text/css">

</style>

  </head>
  
  <body>
  <!-- qql -->
  <input type="hidden" id="tomcatPath" value="<%=tomcatPath %>"/>
  <input type="hidden" id="sessionId" value="<%=session.getId()%>" />
  <input type="hidden" id="memberId" value="<%=memberId %>" />
  
  <!-- cart cookie -->
  <!-- cart cookie -->
  <div id="islogin"></div>
  
  <div align="center" style="width: 1000px;">
  
  <table id="cart_table" align="center" style="width: 80%;" border="1">
  
  
  </table>
	<div align="right"><a href="javascript:void(0);" onclick="javascript:toplay();"><font color="red">去结算</font></a></div>
  </div>
  
  
  
<!-- 登录窗口 --> 
<div class="clear"></div> 
<div class="login_main" style="display: none;">
	<form id="memberForm" method="post">    <h2 class="title">会员登录</h2>
	    <p class="name"><span>帐号</span><input type="text" name="account" maxlength="20" value="" id="account" class="text"/><a href="/portal/memberuser!executename.action">找回登录名</a></p>
	    <p class="name"><span>密码</span><input type="password" name="password" maxlength="20" id="password" class="text"  autocomplete="off"/><a href="/portal/memberuser!executepwd.action">找回密码</a></p>
	    <div class="buttom">
	       <input type="hidden" name="loc" id="refloc" value=""/>
	       <input type="button" value="登 录" class="dl" onclick="javascript:loginForm();" style="cursor:pointer;"/>
	       <input type="button" onclick="window.location.href='<%=basePath%>/web/member/register.jsp'" style="cursor:pointer;" value="注 册"  class="zc" />
	    </div>
	    <div class="tipDiv">
	    </div>
	    <P class="other"><b>您还可以用</b> <a>手机号码登录</a></P>
	</form>
</div>
<!-- 登录窗口 -->  
  </body>
</html>

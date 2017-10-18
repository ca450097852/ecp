<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>会员登陆-电商平台</title>
		<base href="<%=basePath%>">
		<link href="${basePath}static/css/web/comm/index_new.css" rel="stylesheet" type="text/css" />
		<link href="${basePath}static/css/web/comm/login.css" rel="stylesheet" type="text/css" />
		<script src="${basePath}static/js/easyui/jquery.min.js" type="text/javascript"></script>


	<script type="text/javascript">
		function init() {
			loginForm.user_name.focus();
		}
		
	</script>

</head>	 
<body onload="init()">
<div class="top">
  <a href="/mallindex.html"><img src="static/images/web/comm/logo.gif" class="logo"  width="210" height="80"/></a>
  <div class="top_right">
    <P><a href="/mallindex.html">返回首页</a> | <a href="#" onClick="window.external.AddFavorite(location.href,document.title)">收藏本页</a></P>
    <P>如需帮助，请咨询或拨打<span>0592-333333</span> </P>
  </div>
</div>
<div class="clear"></div>
<div class="cont">
<div class="cont_adv">
  <img height="344" width="553" src="static/images/web/comm/login.jpg">
</div>
<div class="cont_main">
  <div class="login_main">
<form id="loginForm" name="loginForm" action="#" method="post">    
	<h2 class="title">商家会员登录</h2>
    <p class="name"><span>帐号</span><input type="text" name="memberuser.user_name" maxlength="20" value="" id="user_name" class="text"/><a href="#">找回登录名</a></p>
    <p class="name"><span>密码</span><input type="password" name="memberuser.passwd" maxlength="20" id="memberuser!loginUser_memberuser_passwd" class="text"/><a href="#">找回密码</a></p>
    <div class="buttom">
       <input type="hidden" name="loc" id="refloc" value=""/>
       <input type="submit" value="登 录" class="dl" style="cursor:pointer;"/>
       <input type="button" onclick="location.href='/register.html';" style="cursor:pointer;" value="注 册"  class="zc" />
    </div>
    <div class="tipDiv">
    	
    	
    </div>
    <P class="other"><b>您还可以用</b> <a>手机号码登录</a></P>
</form>



  </div>
  
  <img height="27" width="100%" src="static/images/web/comm/daoying.png" />
</div>
</div>

<!--页面底部页面引用-->
 <!--注册、登录 底部-->
<div class="bottom">
   <div class="w980">
       <ul class="bottom_help">
           <li class="bottom_t way">
           <a href="#" target="_blank">新手上路</a></li>
       </ul>
       <ul class="bottom_help">
           <li class="bottom_t security">
           	<a href="#" target="_blank">购物指南</a></li>
       </ul>
       <ul class="bottom_help">
           <li class="bottom_t after_sales">
           	<a href="#" target="_blank">支付/配送</a>
           </li>
       </ul>
       <ul class="bottom_help">
           <li class="bottom_t security">
           	<a href="#" target="_blank">售后服务</a></li>
       </ul>
       <ul class="bottom_help">
           <li class="bottom_t about">
           	<a href="#" target="_blank">关于我们</a></li>
       </ul>
       <div class="clear"></div>
   </div>
   <div class="w980 copyright">
      <P>Copyright 2008-2018 电商平台, All Rights Reserved</P>
      <P>广州薪火网络科技有限公司  版权所有 粤ICP 05002119号</P>
   </div>
</div>
<script type="text/javascript">
  $(document).ready(function(){ 
	     var un="#user_name";
	     var un_conent="用户名/邮箱/手机号";
		 if($(un).val()=='' || $(un).val()==un_conent){
		     $(un).val(un_conent);
		     $(un).addClass("usersize");
		 }	
		 //获得焦点事件
		 $(un).focus(function(){	
			 if($(un).val()=='' || $(un).val()==un_conent){	     
			     $(un).val("");
			     $(un).removeClass("usersize");
			  }
		 });	
		 //失去焦点事件
		 $(un).blur(function(){
		     if($(un).val()==''){
			    $(un).val(un_conent);
			    $(un).addClass("usersize");
			 }
		 });		 
   });
   var urlhref = window.location.href;
   var locstr = '?loc=';
   if(urlhref.indexOf(locstr) > -1){
   	  var posi = urlhref.indexOf('?loc=');
   	  var loc = urlhref.substring(posi,urlhref.length);
   	  loc = loc.replace(locstr,'');
   	  document.getElementById('refloc').value = loc;
   }
</script>
</body>
</html>
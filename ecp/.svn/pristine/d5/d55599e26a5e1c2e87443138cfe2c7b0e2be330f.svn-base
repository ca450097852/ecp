<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	TbMember member = (TbMember)session.getAttribute ( "member" );
	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>会员中心</title>
	<script type="text/javascript" src="<%=basePath%>static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>static/js/web/member/center.js"></script>		
	<link type="text/css" rel="stylesheet" href="<%=basePath%>static/css/web/gobal.css"/>
	<link type="text/css" rel="stylesheet" href="<%=basePath%>static/css/web/member_center.css"/>
</head>

<body>
<div class="site_nav">
	<div class="site_nav_bd">
    	<ul class="site_nav_bd_l">
        	<li><%
			if(memberUser==null){
				%>
				请您先<a href="<%=basePath%>web/member/login.jsp">登录!</a>
				<%
			}else{
				Integer	memberId = memberUser.getMemberId();
			
				%>
				欢迎您，<%=member.getMemberName()%>!<%
			}
			
			%></li>
            <li>消息</li>
            <li>手机逛</li>
        </ul>
        <ul class="site_nav_bd_r">
        	<li><a href="<%=basePath%>index.jsp">首页</a></li>
            <li>会员中心</li>
            <li>购物车</li>
            <li>收藏夹</li>
            <li>商品分类</li>
            <li>卖家中心</li>
            <li>联系客服</li>
            <li>网站导航</li>
        </ul>
    </div>
</div>

<header class="mt_header">
	<article>
        <div class="mt_logo">会员中心</div>
        <nav class="mt_nav">
            <ul>
                <li><a href="<%=basePath%>index.jsp">首页</a></li>
                <li>个人主页</li>
                <li>账号设置</li>
                <li>消息</li>
            </ul>
            <div class="search">
            	<div class="search_panel">
                	<div class="search_button"><button class="btn_search" type="submit">搜 索</button></div>
                    <div class="search_panel_fields"><input  class="search_combobox_input"/></div>
                </div>
            </div>
    	</nav>
    </article>
</header>

<div class="grid_c2">
	<div class="mt_menu_tree">
    	<dl class="mt_menu_item">
        	<dt class="mt_btn_go_setings">全部功能</dt>
            <dd>我的购物车</dd>
            <dd>已买到的商品</dd>
            <dd>购买过的店铺</dd>
            <dd>我的收藏</dd>
            <dd>我的评价</dd>
            <dd>我的收货地址</dd>
        </dl>
    </div>
    <div class="mt_ml_c1">
    	<div class="m_userinfo">
        	<div class="s_userbar">
            	<div class="s_baseinfo">
                	<a class="s_avatar"><img src="../../static/images/web/avatar.png" /></a>
                    <span class="s_name">(求真相)</span>
                </div>
            </div>
            <div class="s_my_counts">
        		<ul>
                	<li><a>待付款</a></li>
                    <li><a>待发货</a></li>
                    <li><a>待收货</a></li>
                    <li><a>待评价</a></li>
                    <li><a>交易完成</a></li>
                </ul>
        	</div>
            <div class="clear"></div>
        </div>
    </div>
</div>

</body>
</html>

<%--<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>会员中心</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="<%=basePath%>static/js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>static/js/web/shop/shop.js"></script>		

		<style type="text/css">

			body {
				margin: 0;padding:0;	
			}
		</style>
	</head>
	<body>
			<%
			if(memberUser==null){
				%>
				请您先<a href="<%=basePath%>web/member/login.jsp">登录!</a>
				<%
			}else{
				Integer	memberId = memberUser.getMemberId();
				
				%>
				欢迎您，<%=member.getMemberName()%>!   <a href="<%=basePath%>index.jsp">首页</a><br><br>
				<a href="">查看我的购物车</a><br><br>
				<a href="javascript:void(0)" onclick="showShop('<%=memberId%>')">查看我的店铺</a><br><br>
				<a href="">查看我的订单</a><br><br>
				<a href="">查看我的收藏</a><br><br>
				<%
			}
			
			%>
		
	</body>
</html>
--%>
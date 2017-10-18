<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String pageName = request.getParameter("pageName");
String item1="";
String item2="";
String item3="";
String item4="";
if(pageName ==null||"".equals(pageName)){
	item1 = "weui-bar__item--on";
}else if(pageName !=null&&"classify".equals(pageName)){
	item2 = "weui-bar__item--on";
}else if(pageName !=null&&"cart/".equals(pageName)){
	item3 = "weui-bar__item--on";
}else if(pageName !=null&&"mine".equals(pageName)){
	item4 = "weui-bar__item--on";
}
%>

	<div class="foot-black"></div>
		<div class="weui-tabbar wy-foot-menu">
			<a href="index.jsp" class="weui-tabbar__item <%=item1%>">
				<div class="weui-tabbar__icon foot-menu-home"></div>
				<p class="weui-tabbar__label">首页</p>
			</a>
			<a href="classify.jsp" class="weui-tabbar__item <%=item2%>">
				<div class="weui-tabbar__icon foot-menu-list"></div>
				<p class="weui-tabbar__label">分类</p>
			</a>
			<a href="cart/list.mobile" class="weui-tabbar__item <%=item3%>">
				<!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: 1.5em;"></span> -->
				<div class="weui-tabbar__icon foot-menu-cart"></div>
				<p class="weui-tabbar__label">购物车</p>
			</a>
			<a href="mine.jsp" class="weui-tabbar__item <%=item4%>">
				<div class="weui-tabbar__icon foot-menu-member"></div>
				<p class="weui-tabbar__label">我的</p>
			</a>
		</div>

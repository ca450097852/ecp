<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
// 	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String memberName = "" ;
	if(member!=null){
		memberName = member.getMemberName();
	}else{
		memberName = null ;
	}
%>

<!DOCTYPE html>
<html>

	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

		<title>商品分类</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="<%=basePath%>static/js/jquery-1.8.0.min.js"></script>
<!-- 		<script type="text/javascript" src="<%=basePath%>seller/js/shop/shop.js"></script>	 -->
		
		<link href="<%=basePath%>/web/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>/web/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">

		<link href="<%=basePath%>/web/css/personal.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>/web/css/infstyle.css" rel="stylesheet" type="text/css">
		<script src="<%=basePath%>/web/AmazeUI-2.4.2/assets/js/jquery.min.js" type="text/javascript"></script>
		<script src="<%=basePath%>/web/AmazeUI-2.4.2/assets/js/amazeui.js" type="text/javascript"></script>	
		<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/easyui/themes/icon.css"/>
	
		<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
		<script type="text/javascript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>
		
		<script type="text/javascript" src="<%=basePath %>static/js/fancybox/browser.js"></script>
		<script type="text/javascript" src="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
	</head>
	<!--/.fluid-container#main-container-->
	<!-- basic scripts -->
		<!-- 引入 -->
		<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
		<script src="<%=basePath%>static/js/bootstrap.min.js"></script>
		<script src="<%=basePath%>static/js/ace-elements.min.js"></script>
		<script src="<%=basePath%>static/js/ace.min.js"></script>
		<!-- 引入 -->
		<script type="text/javascript" src="<%=basePath%>static/js/jquery.cookie.js"></script>
	<body>
		 <input type="hidden" id="basePath" value="<%=basePath%>"/>
 		 <input type="hidden" id="filePath" value="<%=filePath%>"/>
		<!--头 -->
		<header>
			<article>
				<div class="mt-logo">
					<!--顶部导航条 -->
					<div class="am-container header">
						<ul class="message-l">
							<div class="topMessage">
								<div class="menu-hd">
									<a href="#" target="_top" class="h" id="shopName"><%=memberName %></a>
									<a href="web/member/login.jsp" target="_top">，退出</a>
								</div>
							</div>
						</ul>
						<ul class="message-r">
							<div class="topMessage home">
								<div class="menu-hd"><a href="#" target="_top" class="h">商城首页</a></div>
							</div>
							<div class="topMessage my-shangcheng">
								<div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
							</div>
							<div class="topMessage mini-cart">
								<div class="menu-hd"><a id="mc-menu-hd" href="#" target="_top"><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></a></div>
							</div>
							<div class="topMessage favorite">
								<div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
						</ul>
						</div>

						<!--悬浮搜索框-->

						<div class="nav white">
							<div class="logoBig">
								<li><img src="<%=basePath%>/web/images/logobig.png" /></li>
							</div>

<!-- 							<div class="search-bar pr"> -->
<!-- 								<a name="index_none_header_sysc" href="#"></a> -->
<!-- 								<form> -->
<!-- 									<input id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off"> -->
<!-- 									<input id="ai-topsearch" class="submit am-btn" value="搜索" index="1" type="submit"> -->
<!-- 								</form> -->
<!-- 							</div> -->
						</div>

						<div class="clear"></div>
					</div>
				</div>
			</article>
		</header>
            <div class="nav-table">
					   <div class="long-title"><span class="all-goods">全部分类</span></div>
					   <div class="nav-cont">
							<ul>
								<li class="index"><a href="#">首页</a></li>
								<li class="qc"><a href="web/shop/myshop.jsp">店铺管理</a></li>
                                <li class="qc"><a href="web/goods/iframe-goods.jsp">商品管理</a></li>
                                <li class="qc last"><a href="#">订单管理</a></li>
							</ul>
<!-- 						    <div class="nav-extra"> -->
<!-- 						    	<i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>我的福利 -->
<!-- 						    	<i class="am-icon-angle-right" style="padding-left: 10px;"></i> -->
<!-- 						    </div> -->
						</div>
			</div>
			<b class="line"></b>
		<div class="center">
			<div class="col-main">
				<div class="main-wrap">
				
					<iframe  src="<%=basePath%>web/goods/goodsType.jsp" style="margin:0 auto;width:100%;height:600px;"></iframe>
					
			
				</div>
				<!--底部-->
				<div class="footer1">
					<div class="footer-hd">
						<p>
							<a href="#">薪火科技</a>
							<b>|</b>
							<a href="#">商城首页</a>
							<b>|</b>
							<a href="#">支付宝</a>
							<b>|</b>
							<a href="#">物流</a>
						</p>
					</div>
					<div class="footer-bd">
						<p>
							<a href="#">关于薪火</a>
							<a href="#">合作伙伴</a>
							<a href="#">联系我们</a>
							<a href="#">网站地图</a>
<!-- 							<em>© 2015-2025 Hengwang.com 版权所有. 更多模板 <a href="#" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="#" title="网页模板" target="_blank">网页模板</a></em> -->
						</p>
					</div>
				</div>
			</div>


			<aside class="menu">
				<ul>
					<li class="person">
						<a href="web/shop/myshop.jsp">卖家中心</a>
					</li>
					<li class="person">
						<a href="web/shop/myshop.jsp">店铺管理</a>
						<ul>
							<li > <a href="web/shop/myshop.jsp">店铺信息</a></li>
						</ul>
					</li>
					<li class="person">
						<a href="web/goods/iframe-goods.jsp">商品管理</a>
						<ul>
							<li ><a href="web/goods/iframe-goods.jsp">商品信息</a></li>
							<li class="active"> <a href="web/goods/iframe-type.jsp">商品分类</a></li>
							<li> <a href="web/goods/iframe-brand.jsp">商品品牌</a></li>
							<li> <a href="change.html">商品规格</a></li>
							
						</ul>
					</li>
					<li class="person">
						<a href="#">订单管理</a>
						<ul>
							<li> <a href="coupon.html">详细信息</a></li>
							<li> <a href="bonus.html">支付信息</a></li>
							<li> <a href="bill.html">物流信息</a></li>
							<li> <a href="bill.html">退款信息</a></li>
							<li> <a href="bill.html">评价</a></li>
						</ul>
					</li>

					
				</ul>

			</aside>
		</div>

	</body>
<script type="text/javascript">
if($("#shopName").html()=="null"){
	window.location.href="web/member/login.jsp";
}
</script>
</html>
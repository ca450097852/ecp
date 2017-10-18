<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%@page import="com.hontek.comm.util.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String memberName = "" ;
	if(memberUser!=null){
		memberName = memberUser.getNickname();
	}else{
		memberName = null ;
	}
	int memberId=0;
	if(memberUser!=null){
		memberId = memberUser.getMemberId();
	}
	String memberId_md5= Md5Util.MD5(memberId+"");
%>
 <script type="text/javascript" src="<%=basePath%>web/js/top.js"></script>

	<input type="hidden"  id="goodsTypeData" >
	<input type="hidden"  id="classifyNum" value="0">
	<input type="hidden"  id="memberId" value="<%=memberId_md5 %>">
	
	<form id="typeIdFrom" action="ns/webGoodsType/list.action" method="get">
		<input type="hidden" name="typeId"/>
	</form>
	
 <!--top start-->
  <div class="top">
    <div class="top-content"> 
    	<div id="loginout" style="float: left;">
	     <a href="web/member/login.jsp" style="color: #fff;">亲，请登录！</a>
		 <a href="web/member/register.jsp" target="_top" style="color: #fff;">免费注册</a>
	  </div>
	  <div id="logined"><p><span id="memberName"><%=memberName %></span>， 欢迎光临xxx商城！<span >
	  <a onclick="loginout()" target="_top" style="color: #fff;cursor:pointer">退出</a></span></p></div>
	 
      <ul>
<!--         <li><a href="web/member/register.jsp"><b>注册</b></a></li> -->
<!--         <li><a href="web/member/login.jsp"><b>登录</b></a></li> -->
<!--         <li>|</li> -->
        <li><a onclick="buy()" style="cursor:pointer;" >个人中心</a></li>
        <li>|</li>
        <li><a href="web/help/help_index.jsp">客户服务</a></li>
        <li>|</li>
        <li><a href="web/help/help_index.jsp">新手帮助</a></li>
        <li>|</li>
         <li><a onclick="seller()" style="cursor:pointer;" >卖家中心</a></li>
        <li>|</li>
        <li><a href="web/help/help_index.jsp">常见问题</a></li>
      </ul>
      <div style="clear:both;"></div>
    </div>
  </div>
  <!--top end--> 
  
  <!--head start-->
  <div class="head">
    <div class="head-content">
      <div class="logo"> <img /> </div>
      <div class="search">
        <div class="inp bd-r3">
<!--           <div class="inp-type">商品<i class="dropdown"></i></div> -->
          <input placeholder="请输入要搜索的内容" id="goodsFind" />
          <button onclick="findgoods()" style="cursor:pointer;">搜索</button>
<!--           <p>苹果   香蕉   车厘子  猪肉  羊肉  贝壳  礼盒  鸡蛋</p> -->
        </div>
      </div>
      <div class="shopping-chart" onclick="shoppingcartTop()" style="cursor:pointer;">
        <p>购物车</p>
        <b id="shoppingcartNum">0</b><i class="dropdown"></i></div>
    </div>
  </div>
  <!--head start--> 
  
   <!--nav start-->
  <div class="nav">
			<div class="navwrap">
				<div id="nav">
					<div class="navbar clearfix">
						<!-- 栏目list  -->
					</div>
					<div class="pros subpage">
						<h2 onclick="classify()" id="h2id">全部分类</h2>
						<div class="order-list" id="classify" >
							<!-- 这里放list -->
						</div>
					</div>
				</div>
			</div>
		
  </div>
  <!--nav end--> 
  
  




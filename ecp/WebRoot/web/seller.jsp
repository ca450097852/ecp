<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	String search = request.getParameter("search");	
	String shopId = request.getParameter("shopId");	
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head lang="en">
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>商城</title>
<link rel="stylesheet"  type="text/css" href="<%=basePath%>web/protal/style.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/nav/css/nav-style.css" />
<script src="<%=basePath%>web/protal/js/jquery-1.7.2.min.js"></script>

<script type="text/javascript" src="<%=basePath%>static/js/layer/layer.js"></script>
<script type="text/javascript" src="<%=basePath%>static/js/layui/layui.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/layui/css/layui.css" />

</head>
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">
<input type="hidden"  id="typeId" value="${typeId}">
<input type="hidden"  id="search" value="<%=search%>">
<input type="hidden"  id="shopId" value="<%=shopId%>">
<body>
<div class="container"> 

	 <!--头 -->
	<jsp:include page="common/top.jsp"></jsp:include>
  
  
    
 <!--list start-->
  <div class="list">
    <div class="seller-banner">
    	<div class="seller-logo"><img id="seller-logo" src="<%=basePath%>/web/protal/images/brand-logo-01.png" /></div>
        <div class="seller-btn">
        	<button>联系店铺</button>
            <button>收藏店铺</button>
        </div>
        
        <p class="seller-banner-title" id="seller-banner-title">易果生鲜<small>欢迎光临</small></p>
        <div class="seller-banner-nav">
        	<ul>
            	
                <li><a href="#">首页</a></li>
                <li><a href="#">店铺活动</a></li>
            </ul>
        </div>
    </div>
    <div class="list-left">
    	<div class="left-bar">
       	 <h3>店铺信息</h3>
        	 <ul class="seller-center seller-info">
          <li>企业：<strong>易果生鲜</strong></li>
          <li>地区：广东省广州市</li>
          <li>入驻时间：2016/4/12</li>
        </ul>
<!--         <div class="seller-center seller-score"> -->
<!--           <ul> -->
<!--             <li>商品<span>3.3<i class="score-up"></i></span></li> -->
<!--             <li>服务<span>3.3<i class="score-down"></i></span></li> -->
<!--             <li>物流<span>3.3<i class="score-eq"></i></span></li> -->
<!--           </ul> -->
<!--           </div> -->
        </div>
      <div class="left-bar">
<!--       	<h3>商品分类</h3> -->
        	<ul class="expmenu">
		<li>
			<div class="expmenu-header">
				<span class="label" >商品分类</span>
				<span class="arrow up"></span>
			</div>
			<span class="no">
			<ul class="expmenu-submenu" style="display:block;" id='expmenu-submenu'>
				
		</ul>
		</span>
		</li>
<!-- 		<li> -->
<!-- 			<div class="expmenu-header"> -->
<!-- 				<span class="label">箭牌卫浴</span> -->
<!-- 				<span class="arrow up"></span> -->
<!-- 			</div> -->
<!-- 			<ul class="expmenu-submenu"> -->
<!-- 				<li>小便器</li> -->
<!-- 			</ul> -->
<!-- 		</li> -->
	</ul>
      </div>
     
	<!--推荐商品 -->
	<jsp:include page="common/recommendGoods.jsp"></jsp:include>

    </div>
    <div class="list-right">
      <div class="seller-center product-selector">
		  	<dl id="product-selector">
		    <!-- 放分类list -->
		    </dl>
      <div style="clear:both"></div>
    </div>
     <div class="second-selector">
      <ul>
<!--         <li><a href="#">排序</a></li> -->
        <li><a onclick="orderBy()" style="cursor:pointer;" >综合</a></li>
        <li><a onclick="orderBy('saledNum')" style="cursor:pointer;">销量<span  id="saledNum"></span></a></li>
<!--         <li><a href="#">评价</a></li> -->
        <li><a onclick="orderBy('saledPrice')" style="cursor:pointer;">价格<span  id="saledPrice"></span></a></li>
      </ul>
     
    </div>
    
  		<form id="jsFrom" action="webGoods/ns/goods.action" method="get">
    		<input type="hidden" name="goodsId"/>
    	</form>
    	
      
       <div class="product-item" id="product-item">
	     <!--goodslist -->
	    </div>
    
    </div>
    
    <div id="layuipage" style="text-align: center;margin: 0 auto;"></div>
   
    <div style="clear:both"></div>
  </div>
  <!--list end--> 
    
  <!--footer start-->
  <jsp:include page="common/footer.jsp"></jsp:include>
   
  <!--right-bar-->
  <jsp:include page="common/right-bar.jsp"></jsp:include>
  
  
</div>

</body>
<script type="text/javascript" src="<%=basePath%>web/js/seller.js"></script>
</html>
<script type="text/javascript">
$(document).ready(function(){
						   
	/* 滑动/展开 */
	$("ul.expmenu li > div.expmenu-header").click(function(){
												   
		var arrow = $(this).find("span.arrow");
	
		if(arrow.hasClass("up")){
			arrow.removeClass("up");
			arrow.addClass("down");
		}else if(arrow.hasClass("down")){
			arrow.removeClass("down");
			arrow.addClass("up");
		}
	
		$(this).parent().find("ul.expmenu-submenu").slideToggle();
		
	});
	
});
</script>

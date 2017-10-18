<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	String search = request.getParameter("search");	
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
<body>
<div class="container"> 

	 <!--头 -->
	<jsp:include page="common/top.jsp"></jsp:include>
  
  <!--list start-->
<div class="list">
  <div class="result" id="result"> 
   <!-- 放分类list -->
  </div>
  <div class="product-selector">
  	<dl id="product-selector">
    <!-- 放分类list -->
    </dl>
    <div style="clear:both"></div>
  </div>
  
	<!--推荐商品 -->
	<jsp:include page="common/recommendGoods.jsp"></jsp:include>

  
  <div class="list-right">
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
<script type="text/javascript" src="<%=basePath%>web/js/list.js"></script>
</html>

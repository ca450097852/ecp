<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	String columnId = request.getParameter("columnId");	
	String columnName = request.getParameter("columnName");	
	 
%>
<!DOCTYPE html>
<html>
<head lang="en">
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet"  type="text/css" href="<%=basePath%>web/protal/style.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/nav/css/nav-style.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/banner/banner-style.css" />
<script src="<%=basePath%>web/protal/js/jquery-1.7.2.min.js"></script>
<script src="<%=basePath%>web/protal/banner/lubotu.js"></script>
<script src="<%=basePath%>web/protal/banner/lubotu.js"></script>
<script src="<%=basePath%>web/protal/slide-pic/slide-pic.js"></script>

 <script type="text/javascript" src="<%=basePath%>static/js/layer/layer.js"></script>
</head>
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">
<input type="hidden" id="columnId" value="<%=columnId%>">
<input type="hidden" id="columnName" value="<%=columnName%>">

<body>
<div class="container"> 
  <!--头 -->
	<jsp:include page="common/top.jsp"></jsp:include>
  
 
  <!--banner start-->
 <div class="banner">
  
  <div class="lubo">
  <ul class="lubo_box">
    <li style=" opacity: 1;filter:alpha(opacity=100);"><a href="" style="background:url(<%=basePath%>web/protal/banner/1.jpg) center top no-repeat"></a></li>
    <li><a href="" style="background:url(<%=basePath%>web/protal/banner/2.jpg) center top no-repeat"></a></li>
    <li><a href="" style="background:url(<%=basePath%>web/protal/banner/3.jpg) center top no-repeat"></a></li>
    <li><a href="" style="background:url(<%=basePath%>web/protal/banner/4.jpg) center top no-repeat"></a></li>
    <li><a href="" style="background:url(<%=basePath%>web/protal/banner/5.jpg) center top no-repeat"></a></li>
  </ul>
</div>
</div>
  <!--banner end--> 
  
  
  
  <!--main start-->
  <div class="main clearfix"> 
    <!--today-recommend start-->
    <div class="theme-today-recommend ">
      <h3><i class="title-line-lt"></i>今日推荐<i class="title-line-rt"></i></h3>
      <div class="theme-today-recommend-content"> <img class="mr_frBtnL prev01" src="<%=basePath%>web/protal/images/product-pic-pre.png"/>
        <div class="mr_frUl">
          <ul id="today-recommend">
            
          </ul>
        </div>
        <img class="mr_frBtnR next01" src="<%=basePath%>web/protal/images/product-pic-next.png"/> </div>
    </div>
    <!--today-recommend end--> 
    
    <form id="jsFrom" action="webGoods/ns/goods.action" method="get">
   		<input type="hidden" name="goodsId"/>
   	</form>
   	<form id="columnsFrom" action="ns/webGoodsType/list.action" method="get">
   		<input type="hidden" name="typeId"/>
   	</form>
    	
    <!--theme-product start-->
    <div class="theme-product" id="theme-product"> 
       <!--goodslist-->
    </div>
    <!--theme-product end--> 
  </div>
  <!--main end--> 
  
  <!--footer start-->
  <jsp:include page="common/footer.jsp"></jsp:include>
  
   
  <!--right-bar-->
  <jsp:include page="common/right-bar.jsp"></jsp:include>
</div>
</body>
</html>
<script type="text/javascript" src="<%=basePath%>web/js/theme.js"></script>     
<!--nav-->
<script type="text/javascript">
	
		// 解码  
		function decodeUnicode(str) {  
		    str = str.replace(/\\/g, "%");  
		    return unescape(str);  
		}

</script>
<script type="text/javascript">

$(function(){

    $(".lubo").lubo({

    });

})

</script>

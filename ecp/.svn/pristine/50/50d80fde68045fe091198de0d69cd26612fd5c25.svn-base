<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<script>
//滚动后导航固定
$(function(){
	$(window).scroll(function(){
          height = $(window).scrollTop();
   	  	  if(height > 820){
   	  	  	$('.left-nav').fadeIn();
   	  	  }else{
   	  	  	$('.left-nav').fadeOut();
   	  	  };
	});
});
</script>

<!--left-nav-->
  <div class="left-nav" id="left-nav">
  	<div class="left-nav-title">导航</div>
  	<ul>
  	<!-- 这里放list -->
<!--         <li><a href="#">新鲜水果</a></li> -->
    </ul>
    <div class="left-nav-title"><a href="javascript:scroll(0,0)"  style="border:none">顶部</a></div>
  </div>
  

<style type="text/css">
  .left-nav{
	width:40px;
	position:fixed;
	left:50%;
	top:50%;
	margin-left:-670px;
	margin-top:-150px;
	}

</style>
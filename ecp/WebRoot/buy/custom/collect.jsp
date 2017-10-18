<%@page import="com.fasterxml.jackson.annotation.JsonInclude.Include"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/" ;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>推荐记录查询</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<meta name="viewport"
	content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/admin.css"
	rel="stylesheet" type="text/css">
<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/amazeui.css"
	rel="stylesheet" type="text/css">
<link href="${basePath }buy/css/personal.css" rel="stylesheet"
	type="text/css">
<link href="${basePath }buy/css/orstyle.css" rel="stylesheet"
	type="text/css">
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>


<script type="text/javascript" src="${basePath }static/js/layer/layer.js"></script>

</head>

<body>

	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

	<!-- mian -->
	<div class="center">
	
			<div class="col-main">
			
				<div class="main-wrap">
					<div class="user-order">
				
						</div>
					<div class="user-order">
					<!--标题 -->
						
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">我的收藏</strong> / <small>My collection</small></div>
						</div>
						<hr/>

						<div class="am-tabs am-tabs-d2 am-margin" data-am-tabs>

							<ul class="am-avg-sm-5 am-tabs-nav am-nav am-nav-tabs">
								<li class="mytab am-active"><a href="#tab1">商品</a></li>
								 <li class = "mytab"><a href="#tab2">店铺</a></li>
								
							</ul>

							<div class="am-tabs-bd">
								<div class="am-tab-panel am-fade am-in am-active" id="tab1">
									<div class="order-top">
										<table>
									<tr>
									
									<td width="500px" align="center">商品</td>
									<td width="150px" align="center">商品价格</td>
									<td width="150px" align="center">收藏时间</td>
									<td width="150px" align="center">操作</td>
									
									</tr>
									
									</table>
										
										
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list-->
									
									 
										</div>
									</div>

									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="">上一页</a>
								      </li>
								
										<span class="currentPage">1</span><span>/</span><span class="totalPage">1</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="">最末页</a>
								      </li>
								  </ul>
								</div>
									<div class="am-tab-panel am-fade am-in am-active" id="tab2">
									<div class="order-top">
										<table>
									<tr>
									<td width="500x" align="center">店铺名称</td>
									<td width="350px" align="center">店铺介绍</td>
									<td width="150px" align="center">收藏时间</td>
									<td width="150px" align="center">操作</td>
									</tr>
									
									</table>
										
										
									</div>

									<div class="order-main">
										<div class="order-list">
										<!-- 这里放list-->
									
									 
										</div>
									</div>

									<ul data-am-widget="pagination"
								      class="am-pagination am-pagination-default">
								
								      <li class="am-pagination-first ">
								        <a href="javascript:void(0)" class="">第一页</a>
								      </li>
								
								      <li class="am-pagination-prev ">
								        <a href="javascript:void(0)" class="">上一页</a>
								      </li>
								
										<span class="currentPage">1</span><span>/</span><span class="totalPage1">1</span>
								
								      <li class="am-pagination-next ">
								        <a href="javascript:void(0)" class="">下一页</a>
								      </li>
								
								      <li class="am-pagination-last ">
								        <a href="javascript:void(0)" class="">最末页</a>
								      </li>
								  </ul>
								</div>
								
								
							</div>
						</div>
					</div>
					
				</div>
			
			<!--底部-->
			<%@include file="../common/buyFooter.jsp"%>
		</div>
		<!-- 左侧导航栏 -->
		

	</div>
			
		<script type="text/javascript" src="static/js/layer/layer.js"></script>
		
		
<script>	
$(function() {
  	shangping();
  	dianpu();
   });
 
  //商品
function  shangping(){
	var menberId=$("#memberId").val();
	var queryParam ={"params[collectType]":"1","params[menberId]":menberId,"page":1,"rows":4};
    $.ajax({
  		url:"collect/page.action",
  		type:"post",
  		data:queryParam,
  		dataType:"json" ,
  		success:function(data){
  		var html=htmlList(data);
  		$("#tab1 .order-list").html(html);
  		
  			 if(data.total/data.rows.length>parseInt(data.total/data.rows.length)){
  			
				 $(".totalPage").empty().text(data.total/data.rows.length+1);
			 }else if(data.total/data.rows.length==parseInt(data.total/data.rows.length)){
				 $(".totalPage").empty().text(data.total/data.rows.length);
			 }else{
				 $(".totalPage").empty().text(1);
			 }
  		}
  	});
  }
function dianpu(){
	var menberId=$("#memberId").val();
	var queryParam ={"params[collectType]":"2","params[menberId]":menberId,"page":1,"rows":4};
    $.ajax({
  		url:"collect/page.action",
  		type:"post",
  		data:queryParam,
  		dataType:"json" ,
  		success:function(data){
  		var html=htmlList1(data);
  		$("#tab2 .order-list").html(html);
  			 if(data.total/data.rows.length>parseInt(data.total/data.rows.length)){
				 $(".totalPage1").empty().text(data.total/data.rows.length+1);
			 }else if(data.total/data.rows.length==parseInt(data.total/data.rows.length)){
				 $(".totalPage1").empty().text(data.total/data.rows.length);
			 }else{
				 $(".totalPage1").empty().text(1);
			 }
  		}
  	});
}
function htmlList(data){
	 var html='';
	 var state="";
	  var rows = data.rows;	
	  for ( var i = 0; i < rows.length; i++){
		html+='<div class="order-top"><table><tr>\
			<td width="500px"align="center" ><div class="item-pic"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'" class="J_MakePoint">\
			<img  src="#" class="itempic J_ItemImg"></a></div><div class="item-info">\
			<div class="item-basic-info"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'">\
			<p>'+rows[i].goodsName+'</p></a></div></div></td>\
			<td width="150px" align="center">'+rows[i].saledPrice+'</td>\
			<td width="150px" align="center">'+rows[i].createTime+'</td>\
			<td width="150px" align="center"><a class="delete" href="javascript:void(0);" data-point-url="#" onclick="delCollect('+rows[i].collectId+')"> 删除</a></td>\
			</tr></table></div>';
	}
	return html;
}
function htmlList1(data){
	 var html='';
	 var state="";
	  var rows = data.rows;	
	
	  for ( var i = 0; i < rows.length; i++){
	    
		html+='<div class="order-top"><table><tr>\
			<td width="500px"align="center" ><div class="item-pic"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'" class="J_MakePoint">\
			<img  src="#" class="itempic J_ItemImg"></a></div><div class="item-info">\
			<div class="item-basic-info"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'">\
			<p>'+rows[i].shopName+'</p></a></div></div></td>\
			<td width="350px" align="center">'+rows[i].shopDesc+'</td>\
			<td width="150px" align="center">'+rows[i].createTime+'</td>\
			<td width="150px" align="center"><a class="delete" href="javascript:void(0);" data-point-url="#" onclick="delCollect('+rows[i].collectId+')"> 删除</a></td>\
			</tr></table></div>';
	}
	return html;

}

	$(document).ready(function(){
	//分页
	var menberId=$("#memberId").val();
	//"第一页"点击
	$(".am-pagination-first").click(function(){
	
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var totalPage1 = $(this).parents("ul").find(".totalPage1").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==1 ){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam ={"params[collectType]":"1","params[menberId]":menberId,"page":1,"rows":4};
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				var queryParam ={"params[collectType]":"2","params[menberId]":menberId,"page":1,"rows":4};
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList1(data);
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
			}
			$(this).parents("ul").find(".currentPage").empty().text(1);
			$(document).scrollTop(0);
		};
	});

//"最末页"点击
	$(".am-pagination-last").click(function(){
		
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var totalPage1 = $(this).parents("ul").find(".totalPage1").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		
		if(parseInt(currentPage)==parseInt(totalPage) ||parseInt(currentPage)==parseInt(totalPage1)  ){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
			var queryParam ={"params[collectType]":"1","params[menberId]":menberId,"page":totalPage,"rows":4};
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
						   $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
			var queryParam ={"params[collectType]":"2","params[menberId]":menberId,"page":totalPage1,"rows":4};
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList1(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(totalPage);
			$(document).scrollTop(0);
		};
	});
	
	//"上一页"点击
	$(".am-pagination-prev").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var totalPage1 = $(this).parents("ul").find(".totalPage1").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==1){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)-1,"rows":4,"order":"order by m.create_time desc","params[collectType]":"1","params[menberId]":menberId} ;
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)-1,"rows":4,"params[state]":1,"params[collectType]":"2","params[menberId]":menberId} ;
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)-1);
			$(document).scrollTop(0);
		};
	});
	
	//"下一页"点击
	$(".am-pagination-next").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var totalPage1 = $(this).parents("ul").find(".totalPage1").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==parseInt(totalPage)||parseInt(currentPage)==parseInt(totalPage1)){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)+1,"rows":4,"params[collectType]":"1","params[menberId]":menberId} ;
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)+1,"rows":4,"params[state]":1,"params[collectType]":"2","params[menberId]":menberId} ;
				$.ajax({
					   type: "POST",
					   url: "collect/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList1(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)+1);
			$(document).scrollTop(0);
		};
	});
	});




//删除
function delCollect(collectId){

	layer.confirm('确定要删除么？', {
 			},function(){
	$.ajax({
		url:"collect/delete.action",
		data:{"ids":collectId},
		type:"post",
		success:function (data){
 			layer.alert("删除成功");
 				shangping();
 				dianpu();
		}
	});
});
}


</script>
</body>

</html>

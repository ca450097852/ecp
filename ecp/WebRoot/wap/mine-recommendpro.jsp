<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>销售产品列表</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<header class="weui-header fixed-top">
  <div class="wy-header-icon-back"><span></span></div>
  <div class="wy-header-title">销售商品</div>
</header>
<!--主体-->
<div class="weui-content" style="padding-top:85px;">
  <div class='proListWrap' id="list">

  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script> 
<script src="js/jquery-weui.js"></script>
<script>

	$(function($){			
		
		$("#list").html("");
		loadGoods();
		

	     $(document.body).pullToRefresh().on("pull-to-refresh", function() {
	        setTimeout(function() {
	          $("#time").text(new Date);
	          $(document.body).pullToRefreshDone();
	        }, 2000);
	      });
	      // infinite
	      var loading = false;
	      $(document.body).infinite().on("infinite", function() {
	        if(loading) return;
	        loading = true;
	        setTimeout(function() {
	        	
	          loading = false;
	        }, 2000);
	      });  

	});
	
	function loadGoods(){
		
		var params = {"params[state]":"1"};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "recommendGoods/page.mobile",
		   dataType:"json",
		   success: function(data){
				if(data){
					var rows = data.rows;				
					for(var i=0;i<rows.length;i++){
						var row = rows[i];
						var goods = row.goods;						
				          $("#list").append('<div class="weui-panel weui-panel_access" style="margin-top:0px;" id="rgId_'+row.rgId+'">'+
				        		    '<div class="weui-panel__bd">'+
				        		      '<div class="weui-media-box_appmsg pd-10">'+
				        		        '<div class="weui-media-box__hd"><a href="recommendpro.jsp?rgId='+row.rgId+'"><img class="weui-media-box__thumb" src="'+goods.goodsImg+'" alt=""></a></div>'+
				        		        '<div class="weui-media-box__bd">'+
				        		          '<h1 class="weui-media-box__desc"><a href="recommendpro.jsp?rgId='+row.rgId+'" class="" style="color:black">'+goods.goodsName+'</a></h1>'+
				        		          '<p class="weui-media-box__desc">规格:<span>'+goods.goodsSpecs+'</span>，代理价:¥<span>'+row.saledPrice+'</span></p>'+
				        		          '<div class="clear mg-t-10">'+
				        		            '<div class="wy-pro-pri fl font-15">销售价:¥<em class="num font-15">'+row.rgPrice+'</em></div>'+
				        		            '<div class="pro-amount fr"><a href="javascript:;" onclick="removeRg(\''+row.rgId+'\')" class="wy-dele"></a></div>'+
				        		          '</div>'+
				        		        '</div>'+
				        		      '</div>'+
				        		    '</div>'+
				        		  '</div>');
					}
			          loading = false;
				}
		   }
		});
	}
	
	function removeRg(rgId){
        $.confirm("您确定要把此商品从销售列表中删除吗?", "确认删除?", function() {
      	  var params = {"ids":rgId};
	      		$.ajax({
	     		   type: "POST",
	     		   data: params,
	     		   url: "recommendGoods/delete.mobile",
	     		   dataType:"text",
	     		   async:false,
	     		   success: function(data){
	     				if(data){
	     					$("#rgId_"+rgId).remove();
	     				}
	     		   }
	     		});
      	  $.toast("商品已移除!");
        }, function() {
          //取消操作
        });
	}

</script>
</body>
</html>

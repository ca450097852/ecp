<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

String shopId=request.getParameter("shopId");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>店铺详情页</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">

<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<input type="hidden" id="shopId" value="<%=shopId %>"/>
<input type="hidden" id="filePath" value="<%=filePath %>"/>


<header class="wy-header">
  <div class="wy-header-icon-back" onclick="javascript:window.history.go(-1);"><span></span></div>
  <div class="wy-header-title">店铺详情</div>
</header>
<!--主体-->
<div class='weui-content'>
  <div class="wy-center-top">
    <div class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd shop"><img class="weui-media-box__thumb radius" style="height:100%" id="shopLogo" src="" alt=""></div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title user-name" id="shopName"></h4>
         <p class="user-grade">信用度：二级</p>
        
      </div>
      <div class="weui-media-box__bd">
        <div class="fans">
          <p class="user-integral ">粉丝<em class="num" id="sum_shoucang"></em></p>
        </div>
      </div>
    </div>
<!--    <div class="xx-menu weui-flex">
      <div class="weui-flex__item"><div class="xx-menu-list"><em>987</em><p>账户余额</p></div></div>
      <div class="weui-flex__item"><div class="xx-menu-list"><em>459</em><p>我的蓝豆</p></div></div>
      <div class="weui-flex__item"><div class="xx-menu-list"><em>4</em><p>收藏商品</p></div></div>
    </div>-->
  </div>
  
  
  <div class="weui-panel weui-panel_access">
    
    <div class="weui-panel__bd">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <a href="shop.jsp?shopId=<%=shopId %>&flag=1" class="center-ordersModule">
            <div class="shop-score"><em id="goodsCount"></em></div>
            <div class="name">商品总量</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="shop.jsp?shopId=<%=shopId %>" class="center-ordersModule">
            <div class="shop-score"><em id="hotShop"></em></div>
            <div class="name">热门推荐</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="myburse.html" class="center-ordersModule">
            <div class="shop-score"><em>9</em></div>
            <div class="name">优惠</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="myburse.html" class="center-ordersModule">
            <div class="shop-score"><em>9.8</em></div>
            <div class="name">动态</div>
          </a>
        </div>
        
      </div>
    </div>
  </div>
  <div class="weui-panel weui-panel_access">
    
    <div class="order-list-Below clear">
      <h1>商品评价</h1>
      <ul>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
        <li class=""></li>
      </ul>
  </div>
  <div class="order-list-Below clear">
      <h1>服务态度</h1>
      <ul>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
        <li class=""></li>
        <li class=""></li>
      </ul>
  </div>
  <div class="order-list-Below clear">
      <h1>物流速度</h1>
      <ul>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
        <li class="on"></li>
      </ul>
  </div>
  </div>
  
  
  <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" href="javascript:;" onclick="$.alert('预留功能');">
                <div class="weui-cell__hd"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">联系店家</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:;" onclick="$.alert('预留功能');">
                <div class="weui-cell__hd"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">资质证件</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      
      <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access txt-color-gray">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">简介</span><span class="fr explain" id="shopDesc"></span></p>
            </div>
          </div>
              <div class="weui-cell weui-cell_access txt-color-gray">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">所在地区</span><span class="fr explain" id="shopAddr"></span></p>
            </div>
          </div>
              <div class="weui-cell weui-cell_access txt-color-gray">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">开业时间</span><span class="fr explain" id="openTime"></span></p>
            </div>
          </div>
              
            </div>
          </div>
        </div>
      </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  var shopId= $("#shopId").val();
  $(function() {
  
    FastClick.attach(document.body);
    getShop(shopId);
    getShopGoods(shopId);
    getShopHot(shopId);
  });
  
  //获取shop
function getShop(shopId){
  $.ajax({
       type: "POST",
       url: "shop/ns/getshop.mobile",
       data : {"shopId":shopId},
       dataType:"json" ,
       success: function(data){
         if(data){
           $('#shopName').html(data.shopName);
           $('#shopDesc').html(data.shopDesc);
           $('#openTime').html(data.openTime);
           $('#shopAddr').html(data.shopAddr);
           if(data.shopLogo.length>0){
              $("#shopLogo").attr('src',$('#filePath').val()+data.shopLogo); 
              }
           else{
              $("#shopLogo").attr('src','upload/headimg.jpg'); 
              }
         }
       }
    });
    
    //获取收藏数
	$.ajax({
		   type: "POST",
		   url: "collect/ns/getCount.mobile",
		   data : {"shopId":shopId},
		   dataType:"text" ,
		   success: function(data){
			   if(data){
				   $("#sum_shoucang").html(data);
			   }else{
				   $("#sum_shoucang").html("0");
			   }
			   
		   }
		});
}

//获取shop的全部商品
function getShopGoods(shopId){
  $.ajax({
    type: "POST",
    url: "Goods/ns/shopGoods.mobile",
    data : {"shopId":shopId},
    dataType:"json" ,
    success: function(data){
      if(data){
        $('#goodsCount').html(data.length);
      }
    }
  });
}

//获取shop的热推商品
function getShopHot(shopId){
	$.ajax({
		type: "POST",
		url: "Goods/ns/shopHot.mobile",
		data : {"shopId":shopId,"number":999},
		dataType:"json" ,
		success: function(data){
			if(data){
				$('#hotShop').html(data.length);
			}
		}
	});
}
</script> 
<script src="js/jquery-weui.js"></script>
</body>
</html>

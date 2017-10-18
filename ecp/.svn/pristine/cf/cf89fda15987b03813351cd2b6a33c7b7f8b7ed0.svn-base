<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
// 	String goodsId = request.getParameter("goodsId");	
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
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/banner/banner-style.css" />
<script src="<%=basePath%>web/protal/js/jquery-1.10.2.min.js"></script>
<script src="<%=basePath%>web/protal/banner/lubotu.js"></script>
<script src="<%=basePath%>web/protal/banner/lubotu.js"></script>
<script src="static/js/jd/Popt.js"></script>
<script src="static/js/jd/cityJson.js"></script>
<script src="static/js/jd/citySet.js"></script>

<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/tabox/css/tabox-style.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/pic/css/magnifier.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/nav/css/nav-style.css" />
<script type="text/javascript" src="<%=basePath%>web/protal/tabox/js/jquery.SuperSlide.js"></script>
<script type="text/javascript" src="<%=basePath%>web/protal/pic/js/magnifier.js"></script>
<script type="text/javascript" src="<%=basePath%>static/js/layer/layer.js"></script>
<script type="text/javascript" src="<%=basePath%>web/js/goodsDetail.js"></script>
<style type="text/css">
/* 评价图片 */
.tabox .lh.tabox-02 .comment-content .user-comment .comment-img{
	width:800px;
	margin-top:5px;
	overflow:hidden;
	}
.tabox .lh.tabox-02 .comment-content .user-comment .comment-img li{
	float:left;
	margin-right:10px;
	}
.tabox .lh.tabox-02 .comment-content .user-comment .comment-img li a{
	display:block;
	width:48px;
	height:48px;
	overflow:hidden;
	border:2px solid #fff;
	}
.tabox .lh.tabox-02 .comment-content .user-comment .comment-img li a:hover{
	border:2px solid #ff6c00;}
.tabox .lh.tabox-02 .comment-content .user-comment .comment-img li a img{
	width:auto;
	height:54px;
	
	}
	
/* 分页 */
.am-pagination {
	padding:20px 10px 10px 10px;
	margin: 5px 20px ;
	font-size:14px; 
	font-family: arial,"Lantinghei SC","Microsoft Yahei"
}
.am-pagination li{
	padding:0.5em 1em ;
	border:1px solid #ddd;
	text-align: center;
	margin: 5px 5px ;
	display : inline ;
}

/* 省市区联动  */
._citys { width: 450px; display: inline-block; border: 2px solid #eee; padding: 5px; position: relative; background-color: #b50909}
._citys span { color: #56b4f8; height: 15px; width: 15px; line-height: 15px; text-align: center; border-radius: 3px; position: absolute; right: 10px; top: 10px; border: 1px solid #56b4f8; cursor: pointer; }
._citys0 { width: 100%; height: 34px; display: inline-block; border-bottom: 2px solid #56b4f8; padding: 0; margin: 0; }
._citys0 li { display: inline-block; line-height: 34px; font-size: 15px; color: #888; width: 80px; text-align: center; cursor: pointer; }
.citySel { background-color: #56b4f8; color: #fff !important; }
._citys1 { width: 100%; display: inline-block; padding: 10px 0; }
._citys1 a { width: 83px; height: 35px; display: inline-block; background-color: #f5f5f5; color: #666; margin-left: 6px; margin-top: 3px; line-height: 35px; text-align: center; cursor: pointer; font-size: 13px; overflow: hidden; }
._citys1 a:hover { color: #fff; background-color: #56b4f8; }
.AreaS { background-color: #56b4f8 !important; color: #fff !important; }
 .textAreaA{ background-color: #ffffff; border: 1px #D7D7D7 solid;font-size: 11px;
scrollbar-arrow-color: #cccccc;scrollbar-darkshadow-color:ffffff;scrollbar-face-color:#ffffff;scrollbar-track-color:#ffffff;scrollbar-highlight-color: 
#ffffff;scrollbar-shadow-color:#eeeee4 
}
</style>
</head>
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">
<input type="hidden"  id="goodsId" value="${goodsId}">
<input type="hidden" id="shopId">
<input type="hidden" id="sc">
<body>
<div id="shale_hidden" style="padding:16px" >
<div><font size="4"   >您要分享的链接为：</font>
<div><textarea id="share_url" rows="5" cols="50" class="textAreaA" ></textarea></div>
</div>
<div><font size="4"  style="padding-top:25px"  >分享至：</font></div>
<div class="bdsharebuttonbox">
<a href="#" class="bds_more" data-cmd="more"></a>
<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
<a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
</div>
</div>

<div class="container"> 

		<form id="jsFrom" action="webGoods/ns/goods.action" method="get">
    		<input type="hidden" name="goodsId"/>
    	</form>
    	
	 <!--头 -->
	<jsp:include page="common/top.jsp"></jsp:include>
  
  
 <div class="product-intro" >
    <div class="result"></div>
	    <div class="product-intro-main">
	      <div class="product-pic">
	      	<div class="magnifier" id="magnifier1">
			<div class="magnifier-container">
				<div class="images-cover"></div>
				<!--当前图片显示容器-->
				<div class="move-view"></div>
				<!--跟随鼠标移动的盒子-->
			</div>
			<div class="magnifier-assembly">
				<div class="magnifier-btn">
					<span class="magnifier-btn-left">&lt;</span>
					<span class="magnifier-btn-right">&gt;</span>
				</div>
				<!--按钮组-->
				<div class="magnifier-line">
					<ul class="clearfix animation03" id="product-intro-img">
						<!--  放图片list -->
					</ul>
				</div>
				<!--缩略图-->
			</div>
			<div class="magnifier-view"></div>
			<!--经过放大的图片显示容器-->
		</div>
	</div>
	<div id="buyinfo">
      <div class="product-info">
  		 <!--  放购买list -->
      </div>
	</div>    
      <div class="seller">
        <div class="seller-title"> <strong>—— 店铺信息 ——</strong> </div>
        <ul class="seller-info">
          <li>企业：<strong>花果山水果</strong></li>
          <li>地区：<span>广东省广州市</span></li>
          <li>入驻时间：<span>2016/4/12</span></li>
        </ul>
       <!--  <div class="seller-score">
          <ul>
            <li>商品<span>3.3<i class="score-up"></i></span></li>
            <li>服务<span>3.3<i class="score-down"></i></span></li>
            <li>物流<span>3.3<i class="score-eq"></i></span></li>
          </ul>
        </div> -->
        <div class="seller-btn">
          <button class="btn bd-r3">联系卖家</button>
          <button class="btn bd-r3">进入店铺</button>
        </div>
        <div class="seller-title" style="color:#ff6c00; background:none"> <strong>—— 商户推荐产品 ——</strong>
          <div class="seller-promotion">
            <ul>
              <li><a href="#"><img src="<%=basePath%>web/protal/images/rank-01.png" /><span>智利红提</span></a></li>
              <li><a href="#"><img src="<%=basePath%>web/protal/images/rank-01.png" /><span>智利红提</span></a></li>
              <li><a href="#"><img src="<%=basePath%>web/protal/images/rank-01.png" /><span>智利红提</span></a></li>
              <li><a href="#"><img src="<%=basePath%>web/protal/images/rank-01.png" /><span>智利红提</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cl"></div>
    </div>
    
 	<!--推荐商品 -->
	<jsp:include page="common/recommendGoods.jsp"></jsp:include>
    
    <div class="product-info-describe">
		<div class="tabox">
		  <div class="hd">
			<ul>
			  <li class=" ">商品介绍</li>
			  <li id="evaluate" class=" ">用户评价</li>
			  <li class="on">售后保障</li>
		      </ul>
		  </div>
		  <div class="bd">
		  		<div class="lh tabox-01" style="display: block;">
				 <!--  放商品介绍html -->
		  		</div>
		  		<div class="lh tabox-02" style="display: none;">
		  		
			  		<div class="comment-percent">好评率<span class="praiseRate">100%</span></div>
						<div class="comment-type">
						<ul>
					 	<li><a href="javascript:void(0);" onclick="comment(0)">全部评价(<span class="totalEvaluate"></span>)</a></li>
					     <li><a href="javascript:void(0);" onclick="comment(1)">好评(<span class="goodEvaluate"></span>)</a></li>
					     <li><a href="javascript:void(0);" onclick="comment(2)">中评(<span class="commonEvaluate"></span>)</a></li>
					     <li><a href="javascript:void(0);" onclick="comment(3)">差评(<span class="badEvaluate"></span>)</a></li>
					 </ul>
					</div>
					<div class="cl"></div>
					<!-- 用户评价 -->
					<div class="comment-content">
					
					</div>
					<ul class="am-pagination ">

										<li class="am-pagination-first "><a
											href="javascript:void(0)" class="">第一页</a></li>

										<li class="am-pagination-prev "><a
											href="javascript:void(0)" class="">上一页</a></li>

										<span class="currentPage">1</span>
										<span>/</span>
										<span class="totalPage">1</span>

										<li class="am-pagination-next "><a
											href="javascript:void(0)" class="">下一页</a></li>

										<li class="am-pagination-last "><a
											href="javascript:void(0)" class="">最末页</a></li>
									</ul>
		  		</div>
		  		<div class="lh tabox-03" style="display: none;">
		  		<!-- 售后保障 -->
		  		</div>
		  </div>
		</div>
    </div>
    
    
    
    <div style="clear:both;"></div>
  </div>
  
  <!--product-intro end--> 

    
  <!--footer start-->
  <jsp:include page="common/footer.jsp"></jsp:include>
   
  <!--right-bar-->
  <jsp:include page="common/right-bar.jsp"></jsp:include>
  
  
</div>

</body>

</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.goods.model.TbGoodsModel"%>
<%
	String path = request.getContextPath();
	pageContext.setAttribute("path",path+"/");
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
	List<TbGoodsModel> modelList = (List<TbGoodsModel>)request.getAttribute("modelList");
			
%>
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>商品详情</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		
		<style type="text/css">
			body{padding:0;margin: 0 auto;width: 1210px;}
			#p-box, #root-nav {
			 	background: #f2f2f2 none repeat scroll 0 0;
			}
			#p-box{padding: 10px;}
			#goodImg{width:378px;float:left;margin-right:10px;}
			#goodsInfo{width:500px;float:left;margin-right:10px;}
			#shopInfo{width:292px;float:left;background-color: gray;}
			.clear{clear:both;}
			
			.goodsName h1 {font-family: arial,"microsoft yahei";font-size: 16px;font-weight: 700;line-height: 1.5em;overflow: hidden;}
			.p-price {
			    color: #e4393c;
			    display: inline-block;
			    font-size: 20px;
			    vertical-align: middle;
			}
			.goodsPrice{background: #f2f2f2 none repeat scroll 0 0;padding: 9px;}
			#comment-count{
				border-left: 1px solid #e6e6e6;
			    color: #005ea7;
			    font: 14px verdana;
			    height: 37px;
			    left: 852px;
			    padding-left: 7px;
			    position: absolute;
			    top: 80px;
			    width: 71px;
			}
			.spmodel{float:left;width:80px;}
			.modelList{float:left;width:400px;}
			.modelList ul{padding: 0;margin: 0}
			.modelList ul li{border: 1px solid #ccc;
						    float: left;
						    list-style-type: none;
						    margin: 3px;
						    padding: 3px;
						    width: auto;}
		</style>
	</head>
	<body>
		<div id="root-nav">
			<span>电脑办公</span>><span>外设产品</span>
		</div>
		<div id="p-box">
			<div style="background-color: white;">
				<!-- 商品图片展示 -->
				<div id="goodImg">
					<img alt="" width="350px" src="${goods.goodsImg }">
				</div>
				<!-- 商品说明 -->
				<div id="goodsInfo">
					<div class="goodsName"><h1>${goods.goodsName }</h1></div>
					<div class="goodsPrice">
						<div clstag="shangpin|keycount|product|pingjiabtn_1" id="comment-count">
                            <span class="comment">累计评价</span>
                            <a href="#comment" class="count J-comm-1235915">99118</a>
                        </div>
	                   <span>成本价：</span>
	                   <strong id="jd-price" class="p-price">￥${goods.chengbenPrice }</strong>
	                   <br/>
	                   <span>市场价：</span>
	                   <strong id="jd-price" class="p-price">￥${goods.marketPrice }</strong>
					</div>
					<div class="goods_buttom">
						<div class="model">
							<div class="spmodel">选择型号：</div>
							<div class="modelList">
								<ul>
									<li>
										<img alt="" width="25" height="25" src="http://img12.360buyimg.com/n9/jfs/t796/165/735611888/81958/4fa225b6/5541f8f2N3af98be1.jpg">
										<i>蝰蛇1800黑寡妇套装</i>
									</li>
									<li>11111</li>
									<li>11111</li>
									<li>11111</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- 店铺信息 -->
				<div id="shopInfo">
					店铺信息
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</body>
</html>

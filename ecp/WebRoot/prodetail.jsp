<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String tomcatPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
String goodsId = request.getParameter("goodsId");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>商品页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="static/js/jquery-1.8.0.min.js"></script>
	
	<link href="${basePath}static/css/web/comm/prodetail.css" rel="stylesheet" type="text/css" />
	<link href="${basePath}static/css/web/comm/jquery.jqzoom.css" rel="stylesheet" type="text/css" />
	<link href="${basePath}static/css/web/comm/css.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="static/js/web/comm/jquery.jqzoom-core.js"></script>
	
	<script type="text/javascript" src="static/js/web/comm/prodetail.js"></script>
	
  </head>
  
  <body>
  <!-- 新秀 -->
  <input type="hidden" id="goodsId" value="<%=goodsId %>"/>
  <input type="hidden" id="tomcatPath" value="<%=tomcatPath %>"/>
  <div id="right" align="center">
			<div class="here">
	<a href="#">首页</a>
	 &gt; <a href="#">产品展示</a>	 &gt; </div>

				
	
	<div id="goo_info">
		<div class="img">
			<div class="clearfix" id="content">
				<div class="clearfix" style="height:300px;">
					<table cellspacing="0" cellpadding="0" id="goods_table">
					<!--  
						<tr>
							<td>
								<a href="static/images/web/comm/goods/goo_3.jpg" class="jqzoom" rel="gal1" title="产品名称产品名称10">
									<img class="main_img" src="static/images/web/comm/goods/goo_3.jpg" title="产品名称产品名称10" onload="picresize(this,300,300)">
								</a>
							</td>
						</tr>
					-->
					</table>
				</div>
				<div class="clearfix" style="padding:20px 0 0 0;">
					<ul id="thumblist" class="clearfix" >
					<!-- 
						<li><a href="javascript:void(0);" rel="{gallery:'gal1',smallimage:'static/images/web/comm/goods/goo_3.jpg',largeimage:'static/images/web/comm/goods/goo_3.jpg'}" class="zoomThumbActive"><img src='static/images/web/comm/goods/goo_3.jpg'></a></li>
						<li><a href="javascript:void(0);" rel="{gallery:'gal1',smallimage:'static/images/web/comm/goods/goo_4.jpg',largeimage:'static/images/web/comm/goods/goo_4.jpg'}"><img src='static/images/web/comm/goods/goo_4.jpg'></a></li>
						<li><a href="javascript:void(0);" rel="{gallery:'gal1',smallimage:'static/images/web/comm/goods/goo_1.jpg',largeimage:'static/images/web/comm/goods/goo_1.jpg'}"><img src='static/images/web/comm/goods/goo_1.jpg'></a></li>
					 -->
					</ul>
				</div>
			</div>
		</div>
		<div class="info">
			<table cellspacing="0" cellpadding="0">
				<tr>
					<td colspan="2"><span class="orange">产品名称</span></td>
				</tr>
				<tr>
					<td><span>成本价格：</span></td>
					<td id="info_chengbenPrice"></td>
				</tr>
				<tr>
					<td><span>市场价格：</span></td>
					<td id="info_marketPrice"></td>
				</tr>
				<tr>
					<td><span>销售价格：</span></td>
					<td id="info_saledPrice"></td>
				</tr>
				<tr>
					<td><span>规格参数：</span></td>
					<td id="info_goodsSpecs"></td>
				</tr>
				<tr>
					<td><span>商品重量：</span></td>
					<td id="info_netWeight"></td>
				</tr>
				<tr>
					<td><span>商品毛重：</span></td>
					<td id="info_roughWeight"></td>
				</tr>
				<tr>
					<td><span>商品产地：</span></td>
					<td id="info_goodsAddr"></td>
				</tr>
				<tr>
					<td><span>储藏条件：</span></td>
					<td id="info_storageConditions"></td>
				</tr>
				<tr>
					<td><span>保质期：</span></td>
					<td id="info_shelfLife"></td>
				</tr>
				<tr>
					<td>
						<div clstag="shangpin|keycount|product|goumaishuliang_2" class="choose-amount fl ">
			               <div class="wrap-input">
			                   <a onclick="reduce('#buy-num')" href="javascript:;" class="btn-reduce">-</a>
			                   <a onclick="add('#buy-num')" href="javascript:;" class="btn-add">+</a>
			                   <input onkeyup="modify('#buy-num');" value="1" id="buy-num" class="text">
			                </div>
			            </div>
					</td>
					<td>
					<div clstag="shangpin|keycount|product|initcarturl_2" id="choose-btn-append" class="btn">
			            <a href="#" id="InitCartUrl" class="btn-append "><img alt="" src="static/images/web/comm/goods/jrgwc.png"> </a>
			        </div>
					</td>
				</tr>

				
			</table>
			
			
			
		</div>
		<div class="clear"></div>
	</div>
	<div class="texts">
		<div class="head">
			<a class="tag" id="texts_tag_1" name="1">产品描述</a>
			<a class="tag" id="texts_tag_2" name="2">产品参数</a>
			<div class="claer"></div>
		</div>
		<div class="main">
			<div class="right_bg"></div>
			<div class="goo_text" id="goo_text_1">按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。10</div>
			<div class="goo_text" id="goo_text_2">按照目前的速度，我国海洋公务船很可能在2020年左右达到或接近美国海岸警卫队的规模。但除了已确定的11艘海军退役舰船改造的外，其他绝大多数都采用民用船舶标准建造，强度略显不足；另外，中国公务船的直升机搭载能力也很有限。这两点与日本和美国差距很大，仍需继续努力追赶。10</div>
		</div>
		<div class="foot"></div>
	</div>


		</div>
<!-- 新秀 -->
  </body>
</html>

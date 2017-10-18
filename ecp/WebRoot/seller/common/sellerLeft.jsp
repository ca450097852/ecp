<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

	<aside class="menu">
	<ul>
		<li class="person"><a href="seller/shop/myshop.jsp">卖家中心</a></li>
		<li class="person"></a>
			<ul>
				<!-- 后期需要再添加
				<li><a href="information.html">个人信息</a>
				</li>
				<li><a href="safety.html">安全设置</a>
				</li>
				 -->
				<li id="leftShopId"><a href="seller/shop/myshop.jsp">店铺信息</a>
				</li>
			</ul></li>
		<li class="person">
			<ul>
				<!-- <li class="active"><a href="order.html">订单管理</a></li> -->
				<li id="leftOrderId"><a href="seller/order/order.jsp">订单管理</a></li>
				<li id="leftChangeId"><a >退款售后</a>
				<li id="leftCommentId"><a href="seller/order/comment.jsp">评价</a>
				</li>
			</ul></li>
		<!-- 后期需要再添加
		<li class="person"><a href="#">我的资产</a>
			<ul>
				<li><a href="coupon.html">优惠券 </a>
				</li>
				<li><a href="bonus.html">红包</a>
				</li>
				<li><a href="bill.html">账单明细</a>
				</li>
			</ul></li>
		-->
		<li class="person">
			<ul>
				<!-- 后期需要再添加
				<li><a href="collection.html">收藏</a>
				</li>
				<li><a href="foot.html">足迹</a>
				</li>
				-->
				<li id="leftGoodsId"><a href="seller/goods/goods.jsp">商品管理</a>
				</li>
				<!-- 后期需要再添加
				<li><a href="news.html">消息</a>
				-->
			</ul>
		</li>
			
	</ul>

	</aside>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	pageContext.setAttribute("path",path+"/");
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String orderId = request.getParameter("orderId");
	
%>
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>添加商品</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="${path}static/js/jquery-1.8.0.js"></script>
		<script type="text/javascript" src="${path}static/js/uploadify/jquery.uploadify.js"></script>
		<link rel="stylesheet" href="${path}static/js/uploadify/uploadify.css"	type="text/css"></link>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="${path}static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
		<script type="text/javascript" src="${path}static/js/layer/layer.js"></script>
		<link href="${path}static/css/web/addGoods.css" rel="stylesheet"	type="text/css" />
		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/default/easyui.css"/>
		<script type="text/javascript" src="${path}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${path}static/js/json2.js"></script>
		<script type="text/javascript" src="${path}static/js/xheditor-1.2.1/xheditor-1.2.1.min.js"></script>
		
		<script type="text/javascript" src="${path}seller/js/order/orderDetail.js"></script>
		
		<style type="text/css">
			.prompt {
				width: 300px;
				height: 30px;
				background-color: #2F9833;
				position: fixed;
				left: 0px;
				right: 0px;
				margin-left: auto;
				margin-right: auto;
				margin-top:-10px;
				text-align:center;
				display: none;
			}
			body {
				margin: 0;padding:0;	
			}
	</style>
	
	</head>
	<body>
	
       <div >
       <form id="detailForm">
       	  <input type="hidden" name="orderId" id="orderId" value="<%=orderId %>">
			    <table>
			    	<tr height="35px">
				        <td class="table_name">订单ID:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="orderId"  style="width:250px">
					    </td>
<!-- 					    <td class="table_name">卖家名:</td> -->
<!-- 					    <td> -->
<!-- 					      <input class="easyui-validatebox form_value" type="text" name="memberIdSaleName" style="width:250px"> -->
<!-- 					    </td> -->
					    <td class="table_name">买家名:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="memberIdBuyName" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="table_name">下单方式:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="orderType" style="width:250px;">   
							    <option value="1">网页订单</option>   
							    <option value="2">App订单</option>   
						  </select> 
					    </td>
					    <td class="table_name">下单时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="orderTime" style="width:250px">
					    </td>
					    <td class="table_name">支付时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="payTime" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				    	<td class="table_name">发货时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="sendTime" style="width:250px">
					    </td>
				        <td class="table_name">交易完成时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="finishTime" style="width:250px">
					    </td>
					    <td class="table_name">订单金额:</td>
					    <td>
					      <input type="text" class="easyui-numberbox form_value"  name="orderAmount" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="table_name">运费:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="shipFree"  style="width:250px">
					    </td>
					    <td class="table_name">优惠额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="preferAmount"  style="width:250px">
					    </td>
					    <td class="table_name">发票种类:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="invoiceType" style="width:250px;">   
							    <option value="0">不开发票</option>   
							    <option value="1">开发票</option>   
						  </select> 
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="table_name">发票抬头:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="invoiceTop"  style="width:250px">
					    </td>
					    <td class="table_name">发票税:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="taxInvoice"  style="width:250px">
					    </td>
					    <td class="table_name">发票内容:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="invoiceContent"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="table_name">默认折扣率:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="discount"  style="width:250px">
					    </td>
					    <td class="table_name">默认折扣价:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="discountMoney"  style="width:250px">
					    </td>
					    <td class="table_name">订单总额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="totalAmount"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="table_name">订单状态:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="orderState" style="width:250px;">   
							    <option value="1">交易中</option>   
							    <option value="2">取消</option>   
							    <option value="3">无效</option>   
							    <option value="4">交易完成</option>   
							    <option value="5">退货</option>   
						  </select> 
					    </td>
					    <td class="table_name">支付状态:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="payState" style="width:250px;">   
							    <option value="1">代付款</option>   
							    <option value="2">已付款</option>   
						  </select> 
					    </td>
					    <td class="table_name">发货状态:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="sendState" style="width:250px;">   
							    <option value="1">代发货</option>   
							    <option value="2">已发货</option>   
							    <option value="3">收货确认</option>   
							    <option value="4">拒收</option> 
						  </select>
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="table_name">配送方式:</td>
					    <td>
					     <select class="easyui-combobox form_value" name="deliverType" style="width:250px;">   
							    <option value="0">到店自取</option>   
							    <option value="1">物流配送</option>   
						  </select>
					    </td>
					    <td class="table_name">买家留言:</td>
					    <td>
					      <textarea rows="2" cols="3" class="easyui-validatebox form_value" name="buyRemark"  style="width:250px"></textarea>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
		    <div style="width: 1000px;height: 300px">
			    <table id="detailDatagrid"></table>
		    </div>
		    
       </div>
	   <div style="text-align:center;padding:10px;" class="buttom">
		    <input type="button" onclick="window.location.href='web/order/order.jsp'" value="返回列表">
	   </div>
	</body>
</html>

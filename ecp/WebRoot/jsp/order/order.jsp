<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>订单管理  - 订单列表</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/order/order.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
	
	<style type="text/css">
		.form_label {
		   width:80px;
		   color: #5e7595;
		   font-weight: bold;
		   text-align: right;
		   background-color: #eaf2ff;
		}
		.form_value {
		    background-color: #ffffff;
		    padding: 5px;
		} 
    </style>
  </head>
  <body>
    <!-- 栏目菜单列表 -->
    <table id="orderDatagrid"></table>
     
    <!-- orderDatagrid 工具栏 -->
    <div id="toolbar" style="height:auto">
		<div>
			&nbsp;订单ID: <input class="easyui-validatebox" style="width:150px" id="orderId">
			&nbsp;卖家名: <input class="easyui-validatebox" style="width:150px" id="memberIdSaleName">
			&nbsp;买家名: <input class="easyui-validatebox" style="width:150px" id="memberIdBuyName">
			&nbsp;下单方式: <select id="orderType" name="orderType">
							<option value= "">全部</option>	
							<option value= "1">网页订单</option>
							<option value= "2">App订单</option>		
						</select>
						<br>
			&nbsp;下单时间: <input type="text" class="easyui-datebox" style="width:150px" id="beginTime">
			&nbsp;~ <input type="text" class="easyui-datebox" style="width:150px" id="endTime">
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="find()">搜 索</a>
			&nbsp;<a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-search" onclick="reset()">重置</a>
		</div>
	</div>
	
	<!-- 详情窗口 -->
	<div id="detailWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true,shadow:false,modal:true" style="width:1040px;height:555px;padding:10px;top:100px">
       <div align="center">
       <form id="detailForm">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">订单ID:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="orderId"  style="width:250px">
					    </td>
					    <td class="form_label">卖家名:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="memberIdSaleName" style="width:250px">
					    </td>
					    <td class="form_label">买家名:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="memberIdBuyName" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">下单方式:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="orderType" style="width:250px;">   
							    <option value="1">网页订单</option>   
							    <option value="2">App订单</option>   
						  </select> 
					    </td>
					    <td class="form_label">下单时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="orderTime" style="width:250px">
					    </td>
					    <td class="form_label">支付时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="payTime" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				    	<td class="form_label">发货时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="sendTime" style="width:250px">
					    </td>
				        <td class="form_label">交易完成时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="finishTime" style="width:250px">
					    </td>
					    <td class="form_label">订单金额:</td>
					    <td>
					      <input type="text" class="easyui-numberbox form_value"  name="orderAmount" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">运费:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="shipFree"  style="width:250px">
					    </td>
					    <td class="form_label">优惠额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="preferAmount"  style="width:250px">
					    </td>
					    <td class="form_label">发票种类:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="invoiceType" style="width:250px;">   
							    <option value="0">不开发票</option>   
							    <option value="1">开发票</option>   
						  </select> 
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">发票抬头:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="invoiceTop"  style="width:250px">
					    </td>
					    <td class="form_label">发票税:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="taxInvoice"  style="width:250px">
					    </td>
					    <td class="form_label">发票内容:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="invoiceContent"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">默认折扣率:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="discount"  style="width:250px">
					    </td>
					    <td class="form_label">默认折扣价:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="discountMoney"  style="width:250px">
					    </td>
					    <td class="form_label">订单总额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="totalAmount"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">订单状态:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="orderState" style="width:250px;">   
							    <option value="1">交易中</option>   
							    <option value="2">取消</option>   
							    <option value="3">无效</option>   
							    <option value="4">交易完成</option>   
							    <option value="5">退货</option>   
						  </select> 
					    </td>
					    <td class="form_label">支付状态:</td>
					    <td>
					      <select class="easyui-combobox form_value" name="payState" style="width:250px;">   
							    <option value="1">代付款</option>   
							    <option value="2">已付款</option>   
						  </select> 
					    </td>
					    <td class="form_label">发货状态:</td>
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
				        <td class="form_label">配送方式:</td>
					    <td>
					     <select class="easyui-combobox form_value" name="deliverType" style="width:250px;">   
							    <option value="0">到店自取</option>   
							    <option value="1">物流配送</option>   
						  </select>
					    </td>
					    <td class="form_label">买家留言:</td>
					    <td>
					      <textarea rows="2" cols="3" class="easyui-validatebox form_value" name="buyRemark"  style="width:250px"></textarea>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
		    <div style="width: 950px;height: 300px">
			    <table id="detailDatagrid"></table>
		    </div>
		    
       </div>
	   <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('detailWindow')">关 闭</a>
	   </div>
	</div>
	
	<!-- 支付 -->
	<div id="payWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true,shadow:false,modal:true" style="width:720px;height:272px;padding:10px;top:100px">
         <div align="center">
         <form id="payForm">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">订单金额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="orderAmount"  style="width:250px">
					    </td>
					    <td class="form_label">付款状态:</td>
					    <td>
					    <select class="easyui-combobox form_value" name="orderState" style="width:250px;">   
							    <option value="1">未付款</option>   
							    <option value="2">付款失败</option>   
							    <option value="3">付款成功</option>   
						  </select> 
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">付款方式:</td>
					    <td>
					    <select class="easyui-combobox form_value" name="payWay" style="width:250px;">   
							    <option value="1">支付宝</option>   
							    <option value="2">网银</option>   
						  </select> 
					    </td>
					    <td class="form_label">付款账号:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="payAccount" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">付款时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="payTime"  style="width:250px">
					    </td>
					    <td class="form_label">付款编号:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="payNo" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">收款账号:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="receiverAccount"  style="width:250px">
					    </td>
				        <td class="form_label">收款人:</td>
					    <td >
					    <input class="easyui-validatebox form_value" type="text" name="receiver"  style="width:250px">
					    </td>
				    </tr>
				    
			    </table>
		    </form>
         </div>
         <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('payWindow')">关 闭</a>
	    </div>
    </div>
    
    <!-- 物流 -->
 	<div id="logisticsWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true,shadow:false,modal:true" style="width:1100px;height:340px;padding:10px;top:100px">
         <div align="center">
                  <form id="logisticsForm">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">订单ID:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="orderId"  style="width:250px">
					    </td>
					    <td class="form_label">所在地区:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="addrArea" style="width:250px">
					    </td>
				       <td class="form_label">详细地址:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="addr"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
					    <td class="form_label">电话号码:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="telephone" style="width:250px">
					    </td>
				        <td class="form_label">手机号码:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="mobile"  style="width:250px">
					    </td>
					    <td class="form_label">邮编:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="postCode" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">运送方式:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="logisWay"  style="width:250px">
					    </td>
					    <td class="form_label">物流公司:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="logisName"  style="width:250px">
					    </td>
					    <td class="form_label">物流单号:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="logisNo"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				    	<td class="form_label">发货时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="logisTime"  style="width:250px">
					    </td>
					    <td class="form_label">收货时间:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="receiveTime"  style="width:250px">
					    </td>
					    <td class="form_label">签收人:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="receiveUser"  style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				    	<td class="form_label">买家留言:</td>
					    <td rowspan="3">
					    <textarea class="form_value" rows="5" cols="3" type="text" name="leaveWord" style="width:250px"></textarea>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
         </div>
         <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('logisticsWindow')">关 闭</a>
	    </div>
    </div>  
    
    <!-- 退款 -->
	<div id="refundWindow" class="easyui-window" data-options="iconCls:'icon-save',closed:true,shadow:false,modal:true" style="width:720px;height:315px;padding:10px;top:100px">
         <div align="center">
              <form id="refundForm">
			    <table>
			    	<tr height="35px">
				        <td class="form_label">订单金额:</td>
					    <td>
					      <input class="easyui-numberbox form_value" type="text" name="orderAmount"  style="width:250px">
					    </td>
					    <td class="form_label">退款状态:</td>
					    <td>
					    <select class="easyui-combobox form_value" name="orderState" style="width:250px;">   
							    <option value="1">退款申请</option>   
							    <option value="2">卖家确认</option>   
							    <option value="3">退款成功</option>   
						  		<option value="4">退款失败</option>
						  </select> 
					    </td>
				    </tr>
				    <tr height="35px">
				       <td class="form_label">退款卖家账号:</td>
					    <td>
					    <input type="text" class="easyui-validatebox form_value"  name="refundAccount" style="width:250px">
					    </td>
					    <td class="form_label">退款时间:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="refundTime" style="width:250px">
					    </td>
				    </tr>
				    <tr height="35px">
				        <td class="form_label">退款编号:</td>
					    <td>
					      <input class="easyui-validatebox form_value" type="text" name="refundNo"  style="width:250px">
					    </td>
					    <td class="form_label">收款编号:</td>
					    <td>
					      <input type="text" class="easyui-validatebox form_value"  name="receiverAccount" style="width:250px">
					    </td>
				    </tr>
				   
				    <tr height="35px">
				        <td class="form_label">收款人:</td>
					    <td >
					    <input class="easyui-validatebox form_value" type="text" name="receiver"  style="width:250px">
					    </td>
					     
				        <td class="form_label">退款原因:</td>
					    <td>
					      <textarea rows="5" cols="3" class="easyui-validatebox form_value" name="cause"  style="width:250px"></textarea>
					    </td>
				    </tr>
				    
			    </table>
		    </form>
         </div>
         <div style="text-align:center;padding:10px;">
		    <a href="javascript:void(0)" class="easyui-linkbutton" iconcls="icon-no" onclick="closeWin('refundWindow')">关 闭</a>
	    </div>
    </div>   
      
  </body>
</html>

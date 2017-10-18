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

<title>支付结果</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<meta name="viewport"
	content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<link rel="stylesheet"  type="text/css" href="../AmazeUI-2.4.2/assets/css/amazeui.css"/>
<link href="buy/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
<link href="buy/basic/css/demo.css" rel="stylesheet" type="text/css" />

<link href="buy/css/failstyle.css" rel="stylesheet" type="text/css" />
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>

</head>

<body>

<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

<div class="take-delivery">
 <div class="status">
   <h2>您未能成功付款</h2>
   <div class="successInfo">
<%--      <ul>
       <li>付款金额<em>${total_amount}</em></li>
       <div class="user-info">
         <p>收货人：${tbMemberAddr.recipient}</p>
         <p>联系电话：${tbMemberAddr.mobile}</p>
         <p>收货地址：${tbMemberAddr.addrArea} ${tbMemberAddr.addr}</p>
       </div>
             请认真核对您的收货信息，如有错误请联系客服
                               
     </ul>  --%>
     <div class="option">
       <span class="info">您可以</span>
        <a href="/ecp/buy/custom/order.jsp" class="J_MakePoint">到会员中心<span>继续付款</span></a>
        <%-- <a href="/ecp/buy/custom/orderinfo.jsp?orderId=${order_id}" class="J_MakePoint">查看<span>交易详情</span></a> --%>
     </div>
    </div>
  </div>
</div>

<!--底部-->
<%@include file="../common/buyFooter.jsp"%>


</body>
</html>

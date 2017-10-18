<%@page import="com.fasterxml.jackson.annotation.JsonInclude.Include"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>支付结果</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description"
	content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
	<!--主体-->

	<div class="weui-content pay-result">
		<div class="pay-result-icon">
			<img src="images/pay-success.png" id="pay_result_img">
			<p id="pay_result"></p>
		</div>
		<div class="pay-result-content">
			<h4>付款金额</h4>
			<!--<h4>支付失败原因</h4>-->
			<div class="wy-pro-pri">
				¥<em class="num font-20" id="total_amount"></em>
			</div>
			<!--支付失败原因
  		<p class="pay-result-fail">可能是由于您的银行卡里余额不足,或是网络延迟的原因,造成系统提示支付失败,在这种情况下,将不会从您的银行卡里扣除费用。</p>
  	-->
		</div>
		<div class="button_sp_area pay-result-btn">
			<a href="#" class="weui-btn  weui-btn_primary" id="tobuy">继续购物</a> 
			<a href="#" class="weui-btn  weui-btn_default" id="tolook">查看宝贝</a>
			<!--
        	<a href="javascript:;" class="weui-btn  weui-btn_warn">返回订单</a>
        	<a href="javascript:;" class="weui-btn  weui-btn_default">联系客服</a>
        -->
		</div>
	</div>

	<script src="lib/jquery-2.1.4.js"></script>
	<script src="lib/fastclick.js"></script>
	<script type="text/javascript" src="js/jquery.Spinner.js"></script>
	<script>
		$(function() {
			FastClick.attach(document.body);
		});
	</script>

	<script src="js/jquery-weui.js"></script>
	<script src="js/pay_result.js"></script> 
</body>
</html>


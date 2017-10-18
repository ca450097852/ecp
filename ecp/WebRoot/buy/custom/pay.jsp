<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>收银台</title>
<link rel="stylesheet" type="text/css" href="buy/custom/protal/style.css" />
<script src="buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
</head>

<body>
<div class="al-container">

<!--al-head-->
  <div class="al-head">
    <div class="al-head-content">
      <div class="al-logo"> <a href="#"><img src="buy/custom/protal/images/al-logo.png"/></a> </div>
      <div class="al-title">我的收银台</div>
      <form>
        <select>
          <option>中国大陆版</option>
          <option>香港版</option>
          <option>台湾版</option>
          <option>海外其他地区版</option>
        </select>
      </form>
      <ul>
        <li class="al-account">支付宝账号：<b>15705115887</b></li>
        <li class=""><a href="#">找人代付</a></li>
        <li>唯一热线：95188</li>
      </ul>
    </div>
  </div>
  
  
  
<!--al-main-->
  <div class="al-main">
  	<form id="orderIdForm">
  		<c:forEach items="${tbOrderPayTDO.orderIdList }" var="item" varStatus="status">
  			<input name="orderIds" value="${item }" type="hidden"/>
  		</c:forEach>
  	</form>
  
    <div class="al-order clearfix">
      <div class="al-qr"> <img src="buy/custom/protal/images/al-qr.png" /> </div>
      <div class="al-order-seller"> 合并 | ${tbOrderPayTDO.total}个订单 </div>
      <div class="al-order-amount"> <em>${tbOrderPayTDO.totalAcount }</em>元 <i class="al-refresh"> <a href="#"><img src="buy/custom/protal/images/al-refresh.png"/></a> </i> </div>
      <a class="al-detail">订单详情</a> </div>
    <div class="al-main-content">
      <ul>
        <li class="al-saved-card-list on">
          <label>
          <input type="radio" />
          <span><img src="buy/custom/protal/images/al-leave.png" /></span>
          <p>账户余额<em>12000.3</em>元</p>
          </label>
        </li>
        <li class="al-saved-card-list">
          <label>
          <input type="radio" />
          <span><img src="buy/custom/protal/images/al-bank-ccb.png" /></span>
          <p>账户余额<em>1000.3</em>元</p>
          </label>
        </li>
      </ul>
      <div class="al-manage-list">
      	<a href="#" class="al-manage-item on">其他付款方式</a>
        <a href="#" class="al-manage-item">快捷付款/网银付款</a>
      </div>
      <div class="al-explain">
      		<p><span><img src="buy/custom/protal/images/al-tick.png"/></span>安全设置检测成功！无需短信校验。</p>
      </div>
      <div class="al-password">
      	<label>支付宝支付密码：</label>
        <input id="password" type="password" />
        <a href="#" class="al-forget">忘记密码？</a>
      </div>
      <div class="al-submit">
      	<a href="javascript:void(0);" ">确认付款</a>
      </div>
    </div>
  </div>
  
 <!--al-footer-->
  <div class="al-footer">
  	<a href="#">ICP证：沪B2-20150087</a>
  </div>
  
</div>
<script >
	$(function(){
		$(".al-submit").click(function(){
			var password = $("#password").val();
			if("123456" == password){
				$.post("weborder/paySuccess.action",$("#orderIdForm").serialize());
				window.location.href="buy/custom/success.jsp";
			}else{
				alert("密码错误！");
			}
			
		});
	});
</script>
</body>
</html>

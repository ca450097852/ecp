<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>使用新地址</title>

<link href="buy/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet"
	type="text/css">
<link href="buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet"
	type="text/css">

<link href="buy/css/personal.css" rel="stylesheet" type="text/css">
<link href="buy/css/addstyle.css" rel="stylesheet" type="text/css">
<script src="buy/AmazeUI-2.4.2/assets/js/jquery.min.js"
	type="text/javascript"></script>
<script src="buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>

<script src="buy/customJs/iframe-addr-edit.js"></script>

<!-- 省市区三级联动 -->
<script type="text/javascript" src="static/js/pdata/pdata.js"></script>
<script type="text/javascript" src="static/js/pdata/default.js"></script>

</head>

<body>

	<div class="add-dress">

		<!--标题 -->
		<div class="am-cf am-padding">
			<div class="am-fl am-cf">
				<strong class="am-text-danger am-text-lg">编辑地址</strong> / <small>Edit&nbsp;address</small>
			</div>
		</div>
		<hr />

		<div class="am-u-md-12 am-u-lg-8" style="margin-top: 20px;">
			<form id="doc-vld-msg" class="am-form am-form-horizontal">
				<input type="hidden" name="addrId" id="addrId">
				<div class="am-form-group">
					<label for="user-name" class="am-form-label">收货人</label>
					<div class="am-form-content">
						<input type="text" id="recipient" name="recipient"
							placeholder="收货人" required><span id="recipientSpan"></span>
					</div>
				</div>

				<div class="am-form-group">
					<label for="user-mobile" class="am-form-label">手机号码</label>
					<div class="am-form-content">
						<input id="mobile" placeholder="手机号必填" name="mobile" type="text"
							required><span id="mobileSpan"></span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="user-phone" class="am-form-label">电话号码</label>
					<div class="am-form-content">
						<input id="telephone" placeholder="电话号码选填" name="telephone"
							type="text"><span id="telephoneSpan"></span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="user-postCode" class="am-form-label">邮政编码</label>
					<div class="am-form-content">
						<input id="postCode" placeholder="邮政编码必填" name="postCode"
							type="text" required><span id="postCodeSpan"></span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="user-address" class="am-form-label ">所在地</label>
					<div class="am-form-content address">
						<select id="input_province">

						</select> <select id="input_city">

						</select> <select id="input_area">

						</select> <span id="addrAreaSpan"></span>
					</div>
				</div>

				<div class="am-form-group">
					<label for="user-addr" class="am-form-label">详细地址</label>
					<div class="am-form-content">
						<textarea class="" rows="3" id="addr" name="addr"
							placeholder="输入详细地址"></textarea>
						<span id="addrSpan"></span> <small>100字以内写出你的详细地址...</small>
					</div>
				</div>

				<div class="am-form-group">
					<div class="am-u-sm-9 am-u-sm-push-3">
						<a href="javascript: void(0)" class="am-btn am-btn-danger"
							onclick="submit()">保存</a> <a href="javascript: void(0)"
							class="am-close am-btn am-btn-danger" onclick="reset()">重置</a>
					</div>
				</div>
			</form>
		</div>

	</div>

</body>
</html>

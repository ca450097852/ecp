<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

%>

<!DOCTYPE html>
<html>

	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

		<title>卖家中心</title>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<script type="text/javascript" src="<%=basePath%>static/js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>seller/js/shop/openshop.js"></script>	
		
		<link href="<%=basePath%>seller/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>seller/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">

		<link href="<%=basePath%>seller/css/personal.css" rel="stylesheet" type="text/css">
		<link href="<%=basePath%>seller/css/infstyle.css" rel="stylesheet" type="text/css">
		<script src="<%=basePath%>seller/AmazeUI-2.4.2/assets/js/jquery.min.js" type="text/javascript"></script>
		<script src="<%=basePath%>seller/AmazeUI-2.4.2/assets/js/amazeui.js" type="text/javascript"></script>	
		<link rel="stylesheet" type="text/css" href="<%=basePath%>static/js/easyui/themes/icon.css"/>
	
		<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
		<script type="text/javascript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>
		
		<script type="text/javascript" src="<%=basePath %>static/js/fancybox/browser.js"></script>
		<script type="text/javascript" src="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=basePath %>static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	
	</head>
	<!--/.fluid-container#main-container-->
	<!-- basic scripts -->
		<!-- 引入 -->
		<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
		<script src="<%=basePath%>static/js/bootstrap.min.js"></script>
		<script src="<%=basePath%>static/js/ace-elements.min.js"></script>
		<script src="<%=basePath%>static/js/ace.min.js"></script>
		<!-- 引入 -->
		<script type="text/javascript" src="<%=basePath%>static/js/jquery.cookie.js"></script>
	<body>
		 <input type="hidden" id="basePath" value="<%=basePath%>"/>
 		 <input type="hidden" id="filePath" value="<%=filePath%>"/>
		<!--头 -->
		<jsp:include page="../common/sellerTop.jsp"></jsp:include>
			
			<b class="line"></b>
		<div class="center">
			<div class="col-main">
				<div class="main-wrap">
				
<!-- 					<iframe  src="<%=basePath%>jsp/member/member.jsp" style="margin:0 auto;width:100%;height:100%;"></iframe> -->
					<div class="user-info">
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">开通店铺</strong> / <small>Open&nbsp;Shop</small></div>
						</div>
						<hr/>

						<!--个人信息 -->
						<div class="info-main">
							<form class="am-form am-form-horizontal"  id="shopForm" method="post">
								<input type="hidden" name="shopState" id="shopState">
								<input type="hidden" name="shopId" id="shopId">
								<input type="hidden" id="shopLogo" name="shopLogo"/>
								<input type="hidden" id="idcardImg1" name="idcardImg1"/>
								<input type="hidden" id="idcardImg2" name="idcardImg2"/>
								<div class="am-form-group">
									<label for="user-name2" class="am-form-label"><em style="color: red">*</em>店铺名称：</label>
									<div class="am-form-content">
										<input type="text"  value="" name="shopName" maxlength="50">

									</div>
								</div>
									
									
							
								<table>
									<tr>
										<td style="width: 70px;">
											<label for="user-name2" class="am-form-label">店铺标识：</label>
										</td>
										
										<td align="left" style="padding-left: 20px;">
											<div id="showtitlePic" align="left" style="width:100px;display: none;" ></div>
										</td>
										<td align="left">
											<input type="file" id="up_titlePic"/><span class="info-tip">文件格式GIF、JPG、JPEG、PNG文件大小80K以内，建议尺寸80PX*80PX</span>
										</td>
										<td colspan="2">
											<div id="fileQueueLogo"></div>
										</td>
									</tr>
								</table>
							
	
								<div class="am-form-group">
									<label for="user-name" class="am-form-label">店铺地址：</label>
									<div class="am-form-content">
										<input type="text"  value="" name="shopAddr" maxlength="100">
									</div>
								</div>
								
								<div class="am-form-group">
									<label for="user-phone" class="am-form-label">店铺掌柜：</label>
									<div class="am-form-content">
										<input type="text"  value="" name="userName" maxlength="20">
									</div>
								</div>
								
								<div class="am-form-group">
									<label for="user-phone" class="am-form-label"><em style="color: red">*</em>身份证号：</label>
									<div class="am-form-content">
										<input type="text"  value="" name="idcard" maxlength="18">
									</div>
								</div>
								<table>
									<tr>
										<td style="width: 90px;">
											<label for="user-name2" class="am-form-label"><em style="color: red">*</em>身份证正面：</label>
										</td>
										
										<td align="left" style="padding-left: 20px;">
											<div id="showtitlePic1" align="left" style="width:100px;display: none;" ></div>
										</td>
										<td align="left">
											<input type="file" id="up_titlePic1"/><span class="info-tip">文件格式GIF、JPG、JPEG、PNG</span>
										</td>
										<td colspan="2">
											<div id="fileQueueLogo1"></div>
										</td>
										
									</tr>
								</table>
								<table>
									<tr>
										<td style="width:90px;">
											<label for="user-name2" class="am-form-label"><em style="color: red">*</em>身份证背面：</label>
										</td>
										
										<td align="left" style="padding-left: 20px;">
											<div id="showtitlePic2" align="left" style="width:100px;display: none;" ></div>
										</td>
										<td align="left">
											<input type="file" id="up_titlePic2"/><span class="info-tip">文件格式GIF、JPG、JPEG、PNG</span>
										</td>
										<td colspan="2">
											<div id="fileQueueLogo2"></div>
										</td>
										
									</tr>
								</table>
								<div class="am-form-group">
									<label for="user-email" class="am-form-label">主营类目：</label>
									<div class="am-form-content">
										<input type="text" name="shopMain" maxlength="100" >
									</div>
								</div>
								<div class="am-form-group">
									<label class="am-form-label">店铺类型：</label>
									<div class="am-form-content sex">
										<label class="am-radio-inline">
											<input type="radio" name="shopType" value="1" data-am-ucheck checked="checked"> 个人
										</label>
										<label class="am-radio-inline">
											<input type="radio" name="shopType" value="2" data-am-ucheck> 公司
										</label>
									</div>
								</div>
								<div class="am-form-group">
									<label for="user-email" class="am-form-label">店铺介绍：</label>
									<div class="am-form-content">
										<textarea name="shopDesc" style="width: 615px;height: 100px" maxlength="1000"></textarea>
									</div>
								</div>
								<br>
								<br>
								<br>
								<div class="info-btn">
									<div class="am-btn am-btn-danger" onclick="submitForm();">开通店铺</div><div id="dialog" class="am-btn" style="color: green">开通成功！</div>
								</div>
								
							</form>
						</div>

					</div>
			
				</div>
				<!--底部-->
			<jsp:include page="../common/sellerFooter.jsp"></jsp:include>
			
			</div>
		<!-- 左侧导航栏 -->
		<jsp:include page="../common/sellerLeft.jsp"></jsp:include>

		</div>

	</body>

</html>
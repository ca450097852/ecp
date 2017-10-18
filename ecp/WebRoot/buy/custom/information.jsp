<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
// 	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String memberName = "" ;
	if(member!=null){
		memberName = member.getMemberName();
	}else{
		memberName = null ;
	}
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>个人中心</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
<link href="${basePath }buy/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">
<link href="${basePath }buy/css/personal.css" rel="stylesheet" type="text/css">
<link href="${basePath }buy/css/infstyle.css" rel="stylesheet" type="text/css">
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
<script src="${basePath }buy/AmazeUI-2.4.2/assets/js/amazeui.js"></script>
<script type="text/javascript" src="${path}static/js/layer/layer.js"></script>
	<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
		<script type="text/javascript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>

<script src="${basePath }buy/customJs/information.js"></script>

</head>

<body>
 		 <input type="hidden" id="basePath" value="<%=basePath%>"/>
 		 <input type="hidden" id="filePath" value="<%=filePath%>"/>
	<!--头 -->
	<jsp:include page="../common/buyTop.jsp"></jsp:include>

	<!-- mian -->
	<div class="center">
			<div class="col-main">
				<div class="main-wrap">
					<div class="user-info">
						<!--标题 -->
						<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">个人信息</strong> / <small>Personal&nbsp;information</small></div>
						</div>
						<hr/>

						<!--头像 -->
						<div class="user-infoPic">
				
							<div class="filePic" >
								<div id="divinput" style="padding-left: 5px;margin-left: -35px;">
									<input type="file" id="up_titlePic" class="inputPic" allowexts="gif,jpeg,jpg,png,bmp" accept="image/*">
								</div>
								<div id="divimg">
									<img class="am-circle am-img-thumbnail"  src="${basePath }buy/images/getAvatar.do.jpg" />
								</div>
								<div id="showtitlePic">
								</div>
							</div>
						<div id="fileQueueLogo"></div>
							<p class="am-form-help">头像</p>

							<div class="info-m">
								<div><b>用户名：<i id="account">小叮当</i></b></div>
								<div class="u-level">
									<span class="rank r2">
							             <s class="vip1"></s><a class="classes"  id="lvName">普通会员</a>
						            </span>
								</div>
								<div class="u-safety">
									<a href="safety.html">
									 账户安全
									<span class="u-profile"><i class="bc_ee0000" style="width: 60px;" width="0">60分</i></span>
									</a>
								</div>
							</div>
						</div>

						<!--个人信息 -->
						<div class="info-main">
							<form class="am-form am-form-horizontal" id="shopForm">
		<input type="hidden" name="memberUserId" id="memberUserId">
		<input type="hidden" name="memberId" id="memberId">
		<input type="hidden" id="password" name="password"/>
		<input type="hidden" id="regTime" name="regTime"/>
		<input type="hidden" id="headPhoto" name="headPhoto"/>
		<input type="hidden" id="memberState" name="memberState"/>
								<div class="am-form-group">
									<label for="user-name2" class="am-form-label">昵称</label>
									<div class="am-form-content">
										<input type="text" id="nickname" name="nickname">

									</div>
								</div>

								<div class="am-form-group">
									<label for="user-name" class="am-form-label">姓名</label>
									<div class="am-form-content">
										<input type="text" id="realName" name="realName">

									</div>
								</div>

								<div class="am-form-group">
									<label class="am-form-label">性别</label>
									<div class="am-form-content sex">
										<label class="am-radio-inline">
											<input type="radio" name="sex" value="1" > 男
										</label>
										<label class="am-radio-inline">
											<input type="radio" name="sex" value="2" > 女
										</label>
									</div>
								</div>

								<div class="am-form-group">
									<label for="user-phone" class="am-form-label">生日</label>
									<div class="am-form-content">
										<input id="birthday" name="birthday" type="text">

									</div>
								</div>
								<div class="am-form-group">
									<label for="user-email" class="am-form-label">城市</label>
									<div class="am-form-content">
										<input id="hometown" name="hometown" type="text">

									</div>
								</div>
								
								<div class="info-btn">
									<div class="am-btn am-btn-danger" onclick="submitForm()">保存修改</div>
								</div>

							</form>
						</div>

					</div>
				</div>
			
			<!--底部-->
			<%@include file="../common/buyFooter.jsp"%>
		</div>
		<!-- 左侧导航栏 -->
		<%@include file="../common/buyLeft.jsp"%>

	</div>


</body>
</html>

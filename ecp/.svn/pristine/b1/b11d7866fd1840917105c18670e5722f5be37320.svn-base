<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>电商平台-登录</title>
		<base href="<%=basePath%>">
		<link href="${basePath}static/css/login/login.css" type="text/css" rel="stylesheet"></link>
		<script src="${basePath}static/js/easyui/jquery.min.js" type="text/javascript"></script>
		<script language="JavaScript">

	    function onLogin() {
	       var nametxt = $('#tbLoginName');
	        if (nametxt.val() == "") {
	            $("#oTip").text('请输入登录名！');
	            nametxt.focus();
	            return false;
	        }



	        txt = $('#account');
	        if (txt.val() == ""&&nametxt.val() != "administrator") {
	            $("#oTip").text('请输入机构号！');
	            txt.focus();
	            return false;
	        }
	
	        txt = $('#tbPassword');
	        if (txt.val() == "") {
	            $("#oTip").text('请输入密码！');
	            txt.focus();
	            return false;
	        }
	
	        $("#oTip").text('正在登录...');
			var form = document.forms[0];
	         form.action="login/login.do";
	         form.method="post";
	         form.submit();
	        
	        return true;
	    }
	
	
	    function detectCapsLock(event) {
	        var e = event || window.event;
	        var o = e.target || e.srcElement;
	        var oTip = o.nextSibling;
	
	        var keyCode = e.keyCode || e.which; // 按键的keyCode
	        var isShift = e.shiftKey || (keyCode == 16) || false; // shift键是否按住
	
	        var o = document.getElementById('oTip');
	        if (((keyCode >= 65 && keyCode <= 90) && !isShift)  // Caps Lock 打开，且没有按住shift键
	            || ((keyCode >= 97 && keyCode <= 122) && isShift)  // Caps Lock 打开，且按住shift键
	            ) {
	            o.style.display = '';
	            $("#oTip").text('大写锁定键被按下，请注意大小写');
	        }
	        else {
	            o.style.display = 'none';
	        }
	    }
	
	    function addFavorite(sURL, sTitle) {
	
	        try { window.external.addFavorite(sURL, sTitle); } catch (e) {
	            try {
	                window.sidebar.addPanel(sTitle, sURL, "");
	            } catch (e) {
	                alert("浏览器收藏没有成功，请使用Ctrl+D进行添加!");
	            }
	        }
	    }
	
	</script>

	</head>
	<body>
		<form name="form1" method="post" action="" id="form1">
			<div class="mainContent">
				<div class="loginhead" style="margin: 0; padding: 0">
					<%--<div class="logo" style="margin: 0; padding: 0">
						<img src="<%=basePath %>static/images/login/login.jpg" />
					</div>
				--%>
				</div>
				<div class="greenl"></div>
				<div class="loginbody" id="loginBody" style="display: block">
					<table class="logintb" cellpadding="0" cellspacing="0">
						<tr>
							<td colspan="2" class="ltitle">
								<img class="titleImg1" src="<%=basePath %>static/images/login/login_title.jpg" />
							</td>
						</tr>
						<tr>
							<td colspan="2">
								机构号:
								<input class="username textInput" type="text" name="account" value="" placeholder="请输入机构号" id="account" />
							</td>
						</tr>
						<tr>
							<td colspan="2">
								用户名:
								<input class="username textInput" type="text" name="userName" value="administrator" placeholder="请输入用户名" id="tbLoginName" />
							</td>
						</tr>
						<tr>
							<td colspan="2">
								密&nbsp;&nbsp;&nbsp;码:
								<input class="pwd textInput" type="password" name="password" placeholder="请输入密码" value="hontek" id="tbPassword" onkeypress="detectCapsLock(event)" />
							</td>
						</tr>
						<tr>
							<td colspan="2" class="btns" style="padding-left: 70px">
								<input class="login_bt" type="submit" value="登录" onclick="onLogin(); return false" />
								<input class="cancel_bt" type="reset" value="取消" onclick="javascript: history.go(-1);" />
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<span id="oTip" style="color: Red; font: 12px/ 1.231 Tahoma;">${msg}</span>
							</td>
						</tr>
					</table>
				</div>
				        <div class="loginbotm">
            <a href="<%=basePath %>index.jsp" target="_blank" class="aboutUs">电商平台网站</a>|
            <a href="<%=basePath %>" target="_blank"  class="aboutUs">帮助中心</a>|
            <a href="javascript:addFavorite('<%=basePath %>', '电商平台')" class="aboutUs">加入收藏</a>
            <br />
            最佳尺寸1024×768DPI&nbsp;&nbsp;&nbsp;推荐浏览器 <a href="http://download.firefox.com.cn/releases/webins2.0/official/zh-CN/Firefox-latest.exe"
                title="点击下载火狐浏览器" target="_blank">火狐</a>| <a href="http://www.google.com/chrome?hl=zh-cn"
                    target="_blank">谷歌</a><br />
                     <script type="text/javascript">
                         var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
                         document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd796fdb8c57000115377e0cc55ab56f0' type='text/javascript'%3E%3C/script%3E"));
            </script>
		       技术支持:广州薪火网络科技有限公司
        </div>
			</div>
		</form>

	</body>
</html>

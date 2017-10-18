<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
session.removeAttribute("memberUser");
session.removeAttribute("member");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>登陆</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
  		<div class="wy-header-icon-back"  onclick="window.location.href='index.jsp';"><span></span></div>
<!--主体-->
<div class="login-box">
  	<div class="lg-title">欢迎登录溯源商城</div>
    <div class="login-form">
    	<form action="#">
        	<div class="login-user-name common-div">
            	<span class="eamil-icon common-icon">
                	<img src="images/eamil.png" />
                </span>
                <input type="email"  value="" id="loginname" name="account" placeholder="请输入您的手机号" />        
            </div>
            <div class="login-user-pasw common-div">
            	<span class="pasw-icon common-icon">
                	<img src="images/password.png" />
                </span>
                <input type="password" id="password" name="password" value="" placeholder="请输入您的密码" />        
            </div>
            <a href="javascript:;" onclick="severCheck();" class="login-btn common-div">登陆</a>
            <div class="forget-pw">
            <a href="regist.jsp" style="padding:0 5px;">免费注册</a>
            <a href="psd_change.jsp?flag=1">忘记密码?</a>
            </div>
            <div class="wy-Module-tit-line"><span>其他账号登录</span></div>
            <a href="javascript:;" class="other-account other-account-wx common-div" style="float: left"><img src="images/other-account-wx.png"/></a>
            <a href="javascript:;" class="other-account other-account-qq common-div" style="float: right"><img src="images/other-account-qq.png"/></a>
        </form>
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
<script>
function severCheck(){
      if(check()){
        var loginname = $("#loginname").val();
        var password = $("#password").val();
        $.ajax({
          type: "POST",
          url: 'member/loginNoSession.mobile',
            data: {"account":loginname,"password":password},
          cache: false,
          dataType:'json',
          success: function(data){  
            if("true" == data.flag){
            $.toptip(data.msg, 2000, 'success');
            setTimeout('window.location.href="mine.jsp"', 1000 );
            }else if("false" == data.flag){
            $.toptip(data.msg, 'error');
              $("#loginname").focus();
            }
          }
        });
      }
    }


 function check() {
      if ($("#loginname").val() == "") {
        $.toptip('用户名不得为空！', 'warning');
        $("#loginname").focus();
        return false;
      } else {
        $("#loginname").val(jQuery.trim($('#loginname').val()));
      }

      if ($("#password").val()=="") {
        $.toptip('密码不得为空！', 'warning');
        $("#password").focus();
        return false;
      }
      return true;      
      
    }
</script>

<script src="js/jquery-weui.js"></script>

</body>
</html>

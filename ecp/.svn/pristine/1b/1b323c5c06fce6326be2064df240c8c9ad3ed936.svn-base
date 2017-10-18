<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>手机注册</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.
">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<input type="hidden" id="code" value=""/>
<input type="hidden" id="basePath" value="<%=basePath %>"/>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back" onclick="window.location.href=document.referrer;"><span></span></div>
  <div class="wy-header-title">手机注册</div>
</header>
<div class="weui-content">
  <div class="weui-cells weui-cells_form wy-address-edit">
  <form id="memberForm" method="post">

	<input type="hidden" name="memberName" id="memberName">
	<input type="hidden" name="nickname" id="nickname">
  
    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="number" name="account" id="tel" pattern="[0-9]*" placeholder="请输入手机号"></div>
      <div class="weui-cell__ft"><a class="weui-vcode-btn" href='javascript:void(0);' onclick="getYZM();">获取验证码</a></div>
    </div>
    
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">验证码</label></div>
      <div class="weui-cell__bd"><input class="weui-input" id="yzm" type="number"  placeholder="请输入验证码"></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">设置密码</label></div>
      <div class="weui-cell__bd"><input class="weui-input" name="password" type="number" pattern="[0-9]*" placeholder="请输入新密码"></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">确认密码</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="number" name="passwordRepeat" pattern="[0-9]*" placeholder="请再次输入新密码"></div>
    </div>
    </form>
  </div>
  <label for="weuiAgree" class="weui-agree">
    <input id="weuiAgree" type="checkbox"  class="weui-agree__checkbox" checked="checked">
    <span class="weui-agree__text">阅读并同意<a href="javascript:void(0);">《注册协议》</a></span>
  </label>
  <div class="weui-btn-area"><a href="javascript:;" onclick="memberSubmit();" class="weui-btn weui-btn_warn">注册并登陆</a></div>
  <div class="weui-cells__tips t-c font-12">登陆账号为您输入的手机号码</div>
  <div class="weui-cells__tips t-c pd-10"><a href="xieyi.html" class="weui-cell_link font-12">查看注册协议</a></div>
  
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
 
//获取后台随机数产生的验证码
function getYZM(){
  	$.ajax({
		url : 'memberUser/ns/code.mobile',
        type: "get",
        dataType: "TEXT",
        success: function (result) {
        	$('#code').val(result);
        	$.alert('验证码为：'+result);
        }
    });
  } 
 
function memberSubmit(){
	var account = $('#tel').val();
	var code=$('#code').val();
  	var yzm=$('#yzm').val();
	$('input[name="memberName"]').val(account);
	$('input[name="nickname"]').val(account);
	//校验是否勾选协议
	if($('#weuiAgree').is(':checked')){
	}else{
	$.toptip('请阅读并同意注册协议', 'warning');
	return;
	}
	//校验账号
	if(account==""){
		$.toptip('请填写手机号', 'warning');
		$('#tel').focus();
		return;
	}else if(account.length!=11){
		$.toptip('请输入正确的手机号！', 'warning');
		$('#tel').focus();
		return;
	}
	
	if(code==""){
	$.toptip('请先获取验证码！', 'warning');
		$('#code').focus();
		return;
	}
	if(code!=yzm){
	$.toptip('验证码不正确，请重新输入！', 'warning');
		$('#yzm').focus();
		return;
	}
	
	var password = $('input[name="password"]').val();
	if(password==""){
		$.toptip('请输入登录密码！', 'warning');
		$('input[name="password"]').focus();
		return;
	}
	var passwordRepeat = $('input[name="passwordRepeat"]').val();
	if(passwordRepeat==""){
		$.toptip('请输入确认密码！', 'warning');
		$('input[name="passwordRepeat"]').focus();
		return;
	}
	if(passwordRepeat!=password){
		$.toptip('确认密码与登录密码不一致！', 'warning');
		$('input[name="passwordRepeat"]').focus();
		return;
	}
	if(password.length<6){
		$.toptip('密码不能少于6位数！', 'warning');
		$('input[name="password"]').focus();
		return;
	}
	$.ajax({
		url : 'member/registerNoSession.mobile',
        type: "POST",
        async:false,
        data: $('#memberForm').serialize(),
        dataType: "TEXT",
        success: function (result) {
        	if(result=="会员注册成功!"){
        	$.toptip(result, 2000, 'success');
			setTimeout('window.location.href="mine.jsp"', 1500 );
        	}else{
        	$.toptip(result, 2000, 'warning');
        	}
        }
    });
}
    
</script>

<script src="js/jquery-weui.js"></script>
</body>
</html>

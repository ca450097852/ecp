<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String flag=request.getParameter("flag");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>密码修改</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<input type="hidden" id="code" value=""/>
<input type="hidden" id="basePath" value="<%=basePath %>"/>
<input type="hidden" id="flag" value="<%=flag %>"/>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back" onclick="window.location.href=document.referrer;"><span></span></div>
  <div class="wy-header-title">密码修改</div>
</header>
<div class="weui-content">
  <div class="weui-cells weui-cells_form wy-address-edit">
    <div class="weui-cell" style="height:40px">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">新密码</label></div>
      <div class="weui-cell__bd"><input class="weui-input" id="newPsd" type="number"  placeholder="请输入新密码"></div>
    </div>
    <div class="weui-cell weui-cell_vcode" style="height:40px">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="number" id="tel" pattern="[0-9]*" placeholder="请输入手机号"></div>
      <div class="weui-cell__ft"><button class="weui-vcode-btn" onclick="getYZM();">获取验证码</button></div>
    </div>
     <div class="weui-cell" style="height:40px">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">验证码</label></div>
      <div class="weui-cell__bd"><input class="weui-input" id="yzm" type="number"  placeholder="请输入验证码"></div>
    </div>
  </div>
  <div class="weui-btn-area"><a href="javascript:;" onclick="updatePsd();" class="weui-btn weui-btn_primary">确认修改</a></div>
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
  function updatePsd(){
  var psd = $('#newPsd').val();
  var code=$('#code').val();
  var yzm=$('#yzm').val();
  var tel=$('#tel').val();
  var flag=$('#flag').val();
  //校验新密码
	if(psd==""){
		$.toptip('新密码不能为空！', 'warning');
		$('#psd').focus();
		return;
	}else if(psd.length<6){
		$.toptip('密码不能少于6位数！', 'warning');
		$('#psd').focus();
		return;
	}
	//校验手机号	
	if(tel==""){
		$.toptip('手机号不能为空！', 'warning');
		$('#tel').focus();
		return;
	}else if(tel.length!=11){
		$.toptip('请输入正确的手机号！', 'warning');
		$('#tel').focus();
		return;
	}
	//校验验证码
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
	$.ajax({
		url : 'memberUser/ns/updatePsd.mobile',
        type: "POST",
        data: {"psd":psd,"account":tel,"flag":flag},
        dataType: "TEXT",
        success: function (result) {
        if(result){
        if(result=="flase"){
        	$.toptip('该手机号码未注册！',2000,'warning');
        }else{
        	$.toptip('修改密码成功！',2000,'success');
			setTimeout('window.location.href="login.jsp"', 1500 );
        }
        }
        }
    });
  }
  
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
</script>
<script src="js/jquery-weui.js"></script>
</body>
</html>

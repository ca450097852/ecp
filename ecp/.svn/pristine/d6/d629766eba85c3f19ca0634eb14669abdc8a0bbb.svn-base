/**
 * 会员注册
 * 
 */
function memberSubmit(){
//	var memberName = $('input[name="memberName"]').val();
//	if(memberName==""){
//		alert("请填写会员名称！");
//		$('input[name="memberName"]').focus();
//		return;
//	}
	var account = $('input[name="account"]').val();
	$('input[name="memberName"]').val(account);
	$('input[name="nickname"]').val(account);
	if(account==""){
		alert("请填写登录名称！");
		$('input[name="account"]').focus();
		return;
	}
	var password = $('input[name="password"]').val();
	if(password==""){
		alert("请输入登录密码！");
		$('input[name="password"]').focus();
		return;
	}
	var passwordRepeat = $('input[name="passwordRepeat"]').val();
	if(passwordRepeat==""){
		alert("请输入确认密码！");
		$('input[name="passwordRepeat"]').focus();
		return;
	}
	if(passwordRepeat!=password){
		alert("确认密码与登录密码不一致！");
		$('input[name="passwordRepeat"]').focus();
		return;
	}
	if(password.length<6){
		alert("密码不能少于6位数！");
		$('input[name="password"]').focus();
		return;
	}
	$.ajax({
		url : 'web/member/ns/register.action',
        type: "POST",
        data: $('#memberForm').serialize(),
        dataType: "TEXT",
        success: function (result) {
        	layer.msg(result);
			setTimeout('window.location.href="web/member/login.jsp"', 1500 );
        }
    });
	
	
}
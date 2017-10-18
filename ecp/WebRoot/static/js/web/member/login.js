/**
 * 会员登录
 * 
 */

$(function(){
	$.ajax({
		url : 'web/member/logout.action',
	    type: "POST",
	    async:false,
	    dataType: "TEXT",
	    success: function (result) {
	    }
	});
});

function loginForm(){

	if(	$("#account").val()==''){
		$("#account").focus();
		alert("请填写登录账号!");
		return;
	}
	
	if(	$("#password").val()==''){
		$("#password").focus();
		alert("请填写登录密码!");
		return;
	}
	
	/*$.ajax({
		url : 'web/member/login.action',
        type: "POST",
        data: $('#memberForm').serialize(),
        dataType: "TEXT",
        success: function (result) {
			alert(result);
        }
    });*/
		
	var form = document.forms[0];
    form.action="web/member/login.action";
    form.method="post";
    form.submit();
	
}

function init() {
	$("#account").focus();
	
}
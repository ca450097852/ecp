/**
 * 查看店铺
 * 
 */
var basePath;
var filePath;

$(function(){
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	$("#leftInformationId").addClass("active");
	
	$.ajax({
		url : 'web/memberUser/findMemberUser.action',
	    type: "POST",
	    data: {"memberId":null},
	    dataType: "JSON",
	    cache:false,
	    async:false,
	    success: function (member) { 
	    	var sex = member.sex;
	    	if(sex==1){
	    		$("input[name='sex'][value=1]").attr("checked",true); 
	    	}else if(sex==2){
	    		$("input[name='sex'][value=2]").attr("checked",true); 
	    	}
	    	$("#account").html(member.account);
	    	findMember();
	    	$('input[name="memberUserId"]').val(member.memberUserId);
	    	$('input[name="memberId"]').val(member.memberId);
	    	$('input[name="password"]').val(member.password);
	    	$('input[name="regTime"]').val(member.regTime);
	    	$('input[name="headPhoto"]').val(member.headPhoto);
	    	$('input[name="memberState"]').val(member.memberState);
    		$('input[name="realName"]').val(member.realName);
    		$('input[name="nickname"]').val(member.nickname);
    		$('input[name="birthday"]').val(member.birthday);
    		$('input[name="hometown"]').val(member.hometown);
    		var headPhoto = member.headPhoto;
    		if(headPhoto!=''&&headPhoto!=null){
    			var img_html = "<img class=\"am-circle am-img-thumbnail\" alt=\"预览\" src=\""+filePath+headPhoto+"\">";
    			$("#showtitlePic").show();
    			$("#divimg").hide();
    			$("#showtitlePic").html(img_html);
    		}
	    	
	    }
	});
	$('#up_titlePic').uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'web/memberUser/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : ' ',
		'height'		: 80,
		'width'			: 80,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo',
		'multi'			: false,
		'removeCompleted' : true,		
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				$('#headPhoto').val(data);
				var img_html = "<img class=\"am-circle am-img-thumbnail\" alt=\"预览\" src=\""+filePath+data+"\" >";
				$("#divimg").hide();
				$("#showtitlePic").show();
				$("#showtitlePic").html(img_html);
			}
		}
	});
	$("#up_titlePic").removeClass("uploadify");
	$("#up_titlePic-button").removeClass("uploadify-button");
	
});

function submitForm(){
	$.ajax({
		url : 'web/memberUser/update.action',
	    type: "POST",
	    data: $('#shopForm').serialize(),
	    dataType: "TEXT",
	    success: function (result) {
	    	layer.msg("修改成功！");
//	    	window.location =location;
	    	//要重新登录名字有才改变
	    }
	});
}
//会员信息
function findMember(){
	
	var queryParam = {"params[memberName]":$("#account").html()};
	$.ajax({
		url:"member/page.action",
		type:"post",
		dataType:"json",
		data:queryParam,
		success:function(data){
			
			$("#lvName").html(data.rows[0].levelName+":"+data.rows[0].memberScore+"积分");
		}
	});
	
}

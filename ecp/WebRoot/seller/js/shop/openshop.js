/**
 * 开通店铺
 * 
 */
var basePath;
var filePath;
var url="" ;

$(function(){
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	$("#dialog").hide();
	$("#leftShopId").addClass("active");
	
	$.ajax({
		url : 'web/shop/hadshop.action',
	    type: "POST",
	    data: {"memberId":null},
	    dataType: "JSON",
	    cache:false,
	    async:false,
	    success: function (shop) {   
	    	if(shop&&shop!=null){
	    		var shopId = shop.shopId;
	    		var memberId = shop.memberId;
	    		var shopName = shop.shopName;
	    		$("#shopName").html(shop.memberName);
	    		$('input[name="shopName"]').val(shopName);
	    		$('input[name="shopAddr"]').val(shop.shopAddr);
	    		$('input[name="userName"]').val(shop.userName);
	    		$('input[name="idcard"]').val(shop.idcard);
	    		$('input[name="shopMain"]').val(shop.shopMain);
	    		$('input[name="shopState"]').val(shop.shopState);
	    		$('input[name="shopId"]').val(shop.shopId);
	    		$('textarea[name="shopDesc"]').val(shop.shopDesc);
	    		$('input[name="shopLogo"]').val(shop.shopLogo);
	    		$('input[name="idcardImg1"]').val(shop.idcardImg1);
	    		$('input[name="idcardImg2"]').val(shop.idcardImg2);
	    		
	    		
	    		var shopLogo = shop.shopLogo;
	    		if(shopLogo!=''&&shopLogo!=null){
	    			var img_html = "<img alt=\"预览\" src=\""+filePath+shopLogo+"\"  style=\"width:80px\">";
	    			$("#showtitlePic").show();
	    			$("#showtitlePic").html(img_html);
	    		}
	    		var idcardImg1 = shop.idcardImg1;
	    		if(idcardImg1!=''&&idcardImg1!=null){
	    			var img_html = "<img alt=\"预览\" src=\""+filePath+idcardImg1+"\"  style=\"width:80px\">";
	    			$("#showtitlePic1").show();
	    			$("#showtitlePic1").html(img_html);
	    		}
	    		var idcardImg2 = shop.idcardImg2;
	    		if(idcardImg2!=''&&idcardImg2!=null){
	    			var img_html = "<img alt=\"预览\" src=\""+filePath+idcardImg2+"\"  style=\"width:80px\">";
	    			$("#showtitlePic2").show();
	    			$("#showtitlePic2").html(img_html);
	    		}
	    	}else{
	    		url='web/shop/add.action';
	    	}
	    	
	    }
	});
	if($("#shopName").html()=="null"){
		window.location.href=basePath+"web/member/login.jsp";
	}
	
	
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	$("#dialog").hide();
	$('#up_titlePic').uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'web/shop/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : '上传图片',
		'height'		: 20,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo',
		'multi'			: false,
		'removeCompleted' : true,		
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				$('#shopLogo').val(data);
				var img_html = "<img alt=\"预览\" src=\""+filePath+data+"\" style=\"width:80px\">";
				$("#showtitlePic").show();
				$("#showtitlePic").html(img_html);
			}
		}
	});
	
	$('#up_titlePic1').uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'web/shop/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : '上传图片',
		'height'		: 20,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo1',
		'multi'			: false,
		'removeCompleted' : true,		
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				$('#idcardImg1').val(data);
				var img_html = "<img alt=\"预览\" src=\""+filePath+data+"\" style=\"width:80px\">";
				$("#showtitlePic1").show();
				$("#showtitlePic1").html(img_html);
			}
		}
	});
	
	$('#up_titlePic2').uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'web/shop/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : '上传图片',
		'height'		: 20,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo2',
		'multi'			: false,
		'removeCompleted' : true,		
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				$('#idcardImg2').val(data);
				var img_html = "<img alt=\"预览\" src=\""+filePath+data+"\" style=\"width:80px\">";
				$("#showtitlePic2").show();
				$("#showtitlePic2").html(img_html);
			}
		}
	});
});




function submitForm(){
	var shopName = $('input[name="shopName"]').val();
	if(shopName==""){
		alert("请填写店铺名称！");
		$('input[name="shopName"]').focus();
		return;
	}
	var idcard = $('input[name="idcard"]').val();
	if(idcard==""){
		alert("请填写身份证号！");
		$('input[name="idcard"]').focus();
		return;
	}
	var idcardImg1 = $('input[name="idcardImg1"]').val();
	if(idcardImg1==""){
		alert("请上传身份证正面图片！");
		$('input[name="idcardImg1"]').focus();
		return;
	}
	var idcardImg2 = $('input[name="idcardImg2"]').val();
	if(idcardImg2==""){
		alert("请上传身份证背面图片！");
		$('input[name="idcardImg2"]').focus();
		return;
	}
	
	$('input[name="shopState"]').val(1);
	if(url!=""){
		$.ajax({
			url : 'web/shop/add.action',
		    type: "POST",
		    data: $('#shopForm').serialize(),
		    dataType: "TEXT",
		    success: function (result) {   	
		    	window.location.href=basePath+"seller/shop/waitshop.jsp";
		    }
		});
	}else{
		$.ajax({
			url : 'web/shop/update.action',
		    type: "POST",
		    data: $('#shopForm').serialize(),
		    dataType: "TEXT",
		    success: function (result) {   	
		    	window.location.href=basePath+"seller/shop/waitshop.jsp";
		    }
		});
	}
	
	
}

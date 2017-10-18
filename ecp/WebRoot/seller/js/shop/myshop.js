/**
 * 查看店铺
 * 
 */
var basePath;
var filePath;

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
	    		if(shop.shopState!=2){
	    			window.location.href=basePath+"seller/shop/waitshop.jsp";
	    		}
	    		var shopId = shop.shopId;
	    		var memberId = shop.memberId;
	    		var shopName = shop.shopName;
//	    		$("#shopName").html(shop.memberName);
	    		$('input[name="shopName"]').val(shopName);
	    		$('input[name="shopAddr"]').val(shop.shopAddr);
	    		$('input[name="userName"]').val(shop.userName);
	    		$('input[name="shopMain"]').val(shop.shopMain);
	    		$('input[name="shopState"]').val(shop.shopState);
	    		$('input[name="shopId"]').val(shop.shopId);
	    		$('textarea[name="shopDesc"]').val(shop.shopDesc);
	    		
	    		
	    		var shopLogo = shop.shopLogo;
	    		if(shopLogo!=''&&shopLogo!=null){
	    			var img_html = "<img alt=\"预览\" src=\""+filePath+shopLogo+"\"  style=\"width:80px\">";
	    			$("#showtitlePic").show();
	    			head = 1;
	    			$("#showtitlePic").html(img_html);
	    		}
	    	}else{
	    		window.location.href=basePath+"seller/shop/noshop.jsp";
	    	}
	    	
	    }
	});
	if($("#shopName").html()=="null"){
		window.location.href=basePath+"web/member/login.jsp";
	}
	
	
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
	
	
});

function submitForm(){
	$.ajax({
		url : 'web/shop/update.action',
	    type: "POST",
	    data: $('#shopForm').serialize(),
	    dataType: "TEXT",
	    success: function (result) {
	    	layer.msg("修改成功！");
	    }
	});
}


function showShop(id){

}

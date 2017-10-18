/**
 * 判断是否登录，是否有店铺
 * 
 */
var basePath;

$(function(){
	$.ajax({
		url : 'web/shop/hadshop.action',
	    type: "POST",
	    data: {"memberId":null},
	    dataType: "JSON",
	    cache:false,
	    success: function (shop) {   	
	    	if(shop&&shop!=null){
	    		var shopId = shop.shopId;
	    		var memberId = shop.memberId;
	    		var shopName = shop.shopName;
	    		$("#shopName").html(shop.memberName);
	    		
	    	}else{
	    		window.location.href=basePath+"web/shop/noshop.jsp";
	    	}
	    	
		    }
		});
	if($("#shopName").html()=="null"){
		window.location.href=basePath+"web/member/login.jsp";
	}
});



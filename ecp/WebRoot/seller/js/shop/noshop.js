/**
 * 查看店铺
 * 
 */
var basePath;

$(function(){
	$("#leftShopId").addClass("active");
	
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
//	    		var shopName = shop.shopName;
//	    		$("#shopName").html(shop.memberName);
	    		
	    	}else{
//	    		window.location.href="web/shop/noshop.jsp";
	    	}
	    	
		    }
		});
	if($("#shopName").html()=="null"){
		window.location.href=basePath+"web/member/login.jsp";
	}
});


function showShop(id){
	$.ajax({
	url : 'web/shop/hadshop.action',
    type: "POST",
    data: {"memberId":id},
    dataType: "JSON",
    cache:false,
    success: function (result) {   	
    	if(result&&result!=null){
    		var shopId = result.shopId;
    		window.location.href=basePath+"seller/shop/myshop.jsp?shopId="+shopId;
    	}else{
    		window.location.href=basePath+"seller/shop/noshop.jsp";
    	}
    	
	    }
	});
}

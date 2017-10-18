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
	    		var shopState = shop.shopState;
	    		if(shopState==1){
	    			$("#shopState3").hide();
	    			$("#shopState4").hide();
	    		}else if(shopState==3){
	    			$("#shopState1").hide();
	    			$("#shopState4").hide();
	    		}else if(shopState==4){
	    			$("#shopState1").hide();
	    			$("#shopState3").hide();
	    		}else if(shopState==2){
	    			window.location.href=basePath+"seller/member/login.jsp";
	    		}
	    	}
	    	
		 }
	});
	if($("#shopName").html()=="null"){
		window.location.href=basePath+"seller/member/login.jsp";
	}
});


function showShop(id){
	$.ajax({
	url : 'seller/shop/hadshop.action',
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

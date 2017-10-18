$(function(){
	//加载地址列表
	loadAddressList() ;
});

$(document).ready(function(){
	
	$(function(){
		//计算合计金额
		var orderItems = $("body").find(".order-concent");
		//实付款
		var actualFee = 0 ;
		$.each(orderItems,function(i,n){
			
			//含运费小计
			var paySum = 0 ;
			var goodsItems = $(n).find(".bundle-last");
			$.each(goodsItems,function(j,m){
				//计算每种商品金额
				var saledPrice = $(m).find(".price-now").text();
				var goodsCount = $(m).find(".text_box").val(); 
				var itemTotal = getSingleGoods(saledPrice,goodsCount) ;
				$(m).find(".td-sum").find(".J_ItemSum").empty().text(itemTotal);
				
				paySum = (paySum*100 + itemTotal*100)/100 ;
			});
			$(n).find(".pay-sum").empty().text(paySum);
			actualFee = (actualFee*100 + paySum*100)/100 ;
		});
		
		//设置实付款
		$("#J_ActualFee").empty().text(actualFee);
		
		//初始化收货地址
		setAddr();
	});
	
	reloadMethod();
	
	$("#Submit_Go").click(function(){
		
		/*var logisName = $(this).parents(".concent").find(".logistics").find(".selected").children("span").text();*/
		var addrId = $(this).parents(".concent").find("#addressListId").find(".defaultAddr").children("input").val();
		//没有收获地址
		console.log(addrId);
		if(addrId == null || addrId == "" || addrId == undefined){
			layer.msg("请选择收货地址！");
			return ;
		}
		
		var addrId = parseInt(addrId);
		var orderConcents = $(this).parents(".concent").find(".order-concent");
		
		var buildOrdersList = new Array();
		$.each(orderConcents, function(i,n){
			var shopId = $(n).find(".shopId").val();
			var buyRemark = $(n).find(".order-extra").find("input").val();
			
			var goodsDomList = $(n).find(".item-content");
			
			if( goodsDomList == null || goodsDomList.length == 0){
				layer.msg("没有商品！");
				return ;
			}
			
			var goodsList = new Array() ;
			$.each(goodsDomList,function(j,m){
				var goodsId = $(m).find(".goodsid-class").val();
				var cartId = $(m).find(".cart-class").val();
				var goodsCount = $(m).find(".goodsCount-class").val();
				
				
				//var modelId = $(m).find(".modelId").val();
				goodsList.push({"goodsId":goodsId,"goodsCount":goodsCount,"cartId":cartId});
			})
			
			buildOrdersList.push({"shopId":shopId,"addressId":addrId,"buyRemark":buyRemark,"list":goodsList});
			console.log(JSON.stringify(buildOrdersList));
		});
		
		
		$("#formId").children("input").val(JSON.stringify(buildOrdersList));
		var paytype = $("input[name='paytypeSelect']:checked").val(); 
		$("input[name='paytype']").val(paytype);//支付方式
		$("#formId").submit();
		
	});
	
	$("#addNew").click(function(){
		addNew();
	});

});

//重新绑定点击事件
function reloadMethod(){
	//选择地址
	$(".user-addresslist").click(function() {
		$(this).addClass("defaultAddr").siblings().removeClass("defaultAddr");
		setAddr();
	});
	//选择物流
	/*$(".logistics").each(function() {
		var i = $(this);
		var p = i.find("ul>li");
		p.click(function() {
			if (!!$(this).hasClass("selected")) {
				$(this).removeClass("selected");
			} else {
				$(this).addClass("selected").siblings("li").removeClass("selected");
			}
		});
	});*/
	//选择支付方式
	/*$(".payMethod").each(function() {
		var i = $(this);
		var p = i.find("ul>li");
		p.click(function() {
			if (!!$(this).hasClass("selected")) {
				$(this).removeClass("selected");
			} else {
				$(this).addClass("selected").siblings("li").removeClass("selected");
			}
		});
	});*/
}

//设置收货地址
function setAddr(){
	var selectedAddrDom = $("#addressListId").find(".user-addresslist.defaultAddr");
	//console.log(selectedAddrDom);
	if( selectedAddrDom.length != 0 ){
		var province = $(selectedAddrDom).find(".province").text();
		var city = $(selectedAddrDom).find(".city").text();
		var dist = $(selectedAddrDom).find(".dist").text() ;
		var addr =$(selectedAddrDom).find(".street").text() ;
		var recipient = $(selectedAddrDom).find(".buy-user").text() ;
		var mobile = $(selectedAddrDom).find(".buy-phone").text() ;
		
		$("#holyshit268").find(".province").empty().text(province);
		$("#holyshit268").find(".city").empty().text(city);
		$("#holyshit268").find(".dist").empty().text(dist);
		$("#holyshit268").find(".street").empty().text(addr);
		$("#holyshit268").find(".buy-user").empty().text(recipient);
		$("#holyshit268").find(".buy-phone").empty().text(mobile);
	}
}

function addNew(){
	layer.open({
		type: 2,
		  area: ['720px', '550px'],
		  fixed: false, //不固定
		  maxmin: true,
		 content: 'buy/custom/iframe-addr-edit.jsp'
		});

}

//删除地址
function delClick(obj){
	var addrId = $(obj).parent().parent(".user-addresslist").children("input").val();
	console.log(addrId);
	layer.confirm('真的要删除吗?', {icon: 3, title:'提示'}, function(index){
		  //do something
		$.ajax({
			   type: "POST",
			   url: "web/memberAddr/delete.action",
			   data:{"ids":addrId} ,
			   success: function(msg){
					loadAddressList() ;
			   }
			});
		  
		  layer.close(index);
		});
	
}

//加载地址列表
function loadAddressList(){
	$.ajax({
		   type: "POST",
		   url: "web/memberAddr/list.action",
		   async :false ,
		   dataType:"json" ,
		   success: function(data){
			   addressListHtml(data) ;
		   }
		});
}

//获取地址列表html
function addressListHtml(data){
	if(data != null && data.length != 0 ){
		var op = '\
		<ul class="am-avg-sm-1 am-avg-md-3 am-thumbnails">\
		<!-- 这里添加地址列表 -->	' ;
		for(var i = 0 ;i<data.length;i++){
			op+=addressDetail(data[i]);
		}
		op += '\
		</ul>' ;
		
		$('#addressListId').html(op);
	}else{
		$('#addressListId').html("");
	}
}

function addressDetail(address){
	var op ="";
	var mobile = address.mobile ;
	var a = mobile.substr(0, 3) ;
	var b = mobile.substr(7, 10) ;
	mobile = a +'****' + b ;
	
	var addrArea = address.addrArea;
	
	if(addrArea == null || addrArea == ""){
		return op ;
	}
	
	addrArea = addrArea.split(',');
	var province = addrArea[0];
	var city = addrArea[1];
	var dist = '' ;
	if(addrArea.length >2){
		dist = addrArea[2];
	}
	
	op += '<div class="per-border"></div>' ;
	if (address.addrDefault==0) {//默认地址
		op+='<li class="user-addresslist defaultAddr">';
	}else{
		op+='<li class="user-addresslist">';
	}
	op += '\
		<input type="hidden" name="addrId" value="'+address.addrId+'"></input>\
		<div class="address-left">\
			<div class="user DefaultAddr">\
				<span class="buy-address-detail"> <span class="buy-user">'+ address.recipient +'</span> \
				<span class="buy-phone">'+ mobile +'</span> </span>\
			</div>\
			<div class="default-address DefaultAddr">\
				<span class="buy-line-title buy-line-title-type">收货地址：</span> <span class="buy--address-detail">\
				<span class="province">'+province+'</span>\
				<span class="city">'+city+'</span>\
				<span class="dist">'+dist+'</span>\
				<span class="street">'+address.addr+'</span> </span> </span>\
			</div> ' ;
	if (address.addrDefault==0) {//默认地址
		op+='<ins class="deftip">默认地址</ins>';
	}
	
	op+= '\
		</div>\
		<div class="new-addr-btn">\
			<a href="javascript:void(0);" ><i class="am-icon-edit"></i></a>\
			<span class="new-addr-bar"></span>\
			<a href="javascript:void(0);" onclick ="delClick(this)"><i class="am-icon-trash"></i>删除</a>\
		</div>\
	</li> ';
	
	return op ;
}



//计算单个商品价格：单价*数量
function getSingleGoods(saledPrice,goodsCount){
	return parseFloat(saledPrice)*100*parseFloat(goodsCount)/100;
}

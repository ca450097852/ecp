$(document).ready(function() {
	
	$(function(){
		var items = $(".J_ItemSum") ;
		console.log(items);
		$($(items)).each(function(i,n){
			var saledPrice = $(n).parents("li").siblings(".td-price").find(".price-now").text();
			var goodsCount = $(n).parents("li").siblings(".td-amount").find(".text_box").val(); 
			var itemTotal = getSingleGoods(saledPrice,goodsCount) ;
			$(n).empty().text(itemTotal);
		});
	});
	
	//结算
	$("#J_Go").click(function() {
		if($(".check-item:checked").length == 0){
			layer.alert('请选择商品！');
			return ;
		}
		var carts = [] ;
		
		var checkedUl = $(".item-content .check:checked").parents("ul");
		checkedUl.each(function(i){
			var cartId = $(this).children(".cart-class").val();
			var goodsCount = $(this).find(".text_box").val();
			var goodsId = $(this).children(".goodsid-class").val();
			console.log(cartId , goodsCount);
			carts.push({"cartId":cartId,"goodsCount":goodsCount ,"goodsId":goodsId});
		});
		var listStr = JSON.stringify(carts);
		
		$("#jsFrom").children("input").val(listStr);
		$("#jsFrom").submit();
		
	});
	
	$(".add").click(function(){
		var t=$(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val())+1) ;
		var ulDom = $(this).parents("ul");
		var saledPrice = $(ulDom).find(".price-now").text();
		console.log(saledPrice);
		var goodsCount = $(ulDom).find(".text_box").val(); 
		console.log(goodsCount);
		var itemTotal = getSingleGoods(saledPrice,goodsCount) ;
		$(ulDom).find(".J_ItemSum").empty().text(itemTotal);
		
		//如果商品被选中，重新设置合计价格
		var b = $(this).parents("ul").find(".check-item").is(":checked");
		if( b == true ){
			var checkedItems = $(this).parents("body").find(".check-item:checked");
			//设置合计价格
			var totalPrice = 0 ;
			$(checkedItems).each(function(i,n){
				var itemPrice = $(n).parents("ul").find(".J_ItemSum").text();
				totalPrice = (parseFloat(totalPrice)*100 + parseFloat(itemPrice)*100)/100;
			});
			//console.log(totalPrice);
			$("#J_Total").empty().text(totalPrice);
		}
	});
	
	$(".min").click(function(){
		var t=$(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val())-1);
		if(parseInt(t.val())<1){
			t.val(1);
		};
		var ulDom = $(this).parents("ul");
		var saledPrice = $(ulDom).find(".price-now").text();
		console.log(saledPrice);
		var goodsCount = $(ulDom).find(".text_box").val(); 
		console.log(goodsCount);
		var itemTotal = getSingleGoods(saledPrice,goodsCount) ;
		$(ulDom).find(".J_ItemSum").empty().text(itemTotal);
		
		//如果商品被选中，重新设置合计价格
		var b = $(this).parents("ul").find(".check-item").is(":checked");
		if( b == true ){
			var checkedItems = $(this).parents("body").find(".check-item:checked");
			//设置合计价格
			var totalPrice = 0 ;
			$(checkedItems).each(function(i,n){
				var itemPrice = $(n).parents("ul").find(".J_ItemSum").text();
				totalPrice = (parseFloat(totalPrice)*100 + parseFloat(itemPrice)*100)/100;
			});
			//console.log(totalPrice);
			$("#J_Total").empty().text(totalPrice);
		}
	});		
	
	//删除
	$(".delete").click(function(){
		var me = this ;
		var cartId = $(me).parents("ul").children("input.cart-class").val();
		
		layer.confirm('真的要删除吗?', {icon: 3, title:'提示'}, function(index){
			  //do something
			console.log(cartId);
			$.ajax({
				   type: "POST",
				   url: "shoppingcart/delete.action",
				   data: "ids=" + cartId,
				   success: function(msg){
					   window.location.reload();
				   }
				});
			  
			  layer.close(index);
			});
		
		
	});
	
	//全选选中、取消事件
	$(".check-all").click(function(){
		var b = $(this).is(":checked");
		if(b==true){
			$(".check-item").prop("checked",true);
		}else{
			$(".check-item").prop("checked",false);
		}
	});
	
	//复选框选中、取消事件，计算价格
	$(".check").click(function(){
		var checkedItems = $(this).parents("body").find(".check-item:checked");
		//设置已选商品数量
		//console.log(checkedItems.length);
		$("#J_SelectedItemsCount").empty().text(checkedItems.length);
		
		//设置合计价格
		var totalPrice = 0 ;
		$(checkedItems).each(function(i,n){
			var itemPrice = $(n).parents("ul").find(".J_ItemSum").text();
			totalPrice = (parseFloat(totalPrice)*100 + parseFloat(itemPrice)*100)/100;
		});
		//console.log(totalPrice);
		$("#J_Total").empty().text(totalPrice);
	});
	
	//子复选框选中、取消事件，触发cheackAll 选中、取消
	$(".check.check-item").click(function(){
		var b = $(this).is(":checked");
		if(b==true){//选中
			var items = $("body").find(".check.check-item");
			var c = true ;
			
			$(items).each(function(i,n){
				if(!$(n).is(":checked")){//有一个没选 ， 跳出循环
					c = false ;
					return false ;
				}
			});
			
			if(c){//都选中了
				$(".check.check-all").prop("checked",true);
			}
			
		}else{
			$(".check.check-all").prop("checked",false);
		}
	});
	
	
});

//计算单个商品价格：单价*数量
function getSingleGoods(saledPrice,goodsCount){
	return parseFloat(saledPrice)*100*parseFloat(goodsCount)/100;
}





$(function(){
	$.ajax( {
		url : 'webGoods/ns/page.action',
		async : false,
		//data : product,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			
			var total = result.total;
			total = parseInt(total);
			var htm = "";
			var goodsName = "";//产品名称
			var marketPrice = "";//市场价
			var saledPrice = "";//销售价
			var goodsImg = "";//产品主图
			var goodsId = "";//产品ID
			if(result.rows.length>0){
				
				for ( var i = 0; i < result.rows.length; i++) {
						var goods = result.rows[i];
						goodsName = goods.goodsName;
						if(goodsName.length>10){goodsName=goodsName.substring(0, 8)+"..."};
						marketPrice= goods.marketPrice;
						saledPrice= goods.saledPrice;
						
						goodsImg= goods.goodsImg;
						goodsImg= goodsImg==null?"":goodsImg;
						goodsImg= "static/images/web/comm/goods/nopic.jpg";
						goodsId = goods.goodsId;
						
						//style=\"width: 338px;\"
						htm = htm +
						"<li>"+
					    "<a href=\"prodetail.jsp?goodsId="+goodsId+"\" target=\"_blank\">"+
					    "<img src=\""+goodsImg+"\" alt=\""+goodsName+"\" />"+
					    "<p><strong>"+goodsName+"</strong><br />市场价：￥"+marketPrice+"<br />销售价：￥"+saledPrice+"</p></a>"+
					  "</li>";
						

				}
				
				$('#prolist').html(htm);
			}
			
		}
	});
	
	
});

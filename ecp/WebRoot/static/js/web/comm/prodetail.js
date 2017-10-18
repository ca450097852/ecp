var tomcatPath = "";
var goodsId = "";
$(function(){
	
	//获取商品
	tomcatPath = $('#tomcatPath').val();//
	goodsId = $('#goodsId').val();//商品ID
	
	$.ajax( {
		url : 'webGoods/ns/getGoods.action',
		async : false,
		data : 'goodsId='+goodsId,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			var goods = result;
			var goodsName = "";//产品名称
			var marketPrice = "";//市场价
			var saledPrice = "";//销售价
			var goodsImg = "";//产品主图
			var goodsDesc = "";//产品描述
			if(goods){
				goodsName = goods.goodsName;
				if(goodsName.length>10){goodsName=goodsName.substring(0, 8)+"..."};
				marketPrice= goods.marketPrice;
				saledPrice= goods.saledPrice;
				goodsImg= goods.goodsImg;
				goodsDesc= goods.goodsDesc;
				
				var bigimgs ="<tr><td><a href=\""+tomcatPath+goodsImg+"\" class=\"jqzoom\" rel=\"gal1\" title=\""+goodsName+"\">"+
				"<img class=\"main_img\" src=\""+tomcatPath+goodsImg+"\" title=\""+goodsName+"\" onload=\"picresize(this,300,300)\">"+
				"</a></td></tr>";

				var smallimgs ="<li><a href=\"javascript:void(0);\" rel=\"{gallery:'gal1',smallimage:'"+tomcatPath+goodsImg+"',largeimage:'"+tomcatPath+goodsImg+"'}\" class=\"zoomThumbActive\"><img src=\""+tomcatPath+goodsImg+"\"></a></li>";

				
				$('#goods_table').html(bigimgs);
				$('#thumblist').html(smallimgs);
				$('#goo_text_1').html(goodsDesc);
				$('#InitCartUrl').attr("href","addcart.jsp?goodsId="+goodsId+"&pcount=1");

				$('.orange').html(goodsName);
				
				$('#info_chengbenPrice').html("￥"+goods.chengbenPrice);
				$('#info_marketPrice').html("￥"+goods.marketPrice);
				$('#info_saledPrice').html("￥"+goods.saledPrice);
				$('#info_goodsSpecs').html(goods.goodsSpecs);
				$('#info_netWeight').html(goods.netWeight);
				$('#info_roughWeight').html(goods.roughWeight);
				$('#info_goodsAddr').html(goods.goodsAddr);
				$('#info_storageConditions').html(goods.storageConditions);
				$('#info_shelfLife').html(goods.shelfLife);
				
			}
		}
	});
	
	//放大镜
	$('.jqzoom').jqzoom({
		zoomType: 'standard',
		lens:true,
		preloadImages: false,
		alwaysOn:false
	});
	
});


$().ready(function(){
	$(".texts .tag").mouseover(function(){
		change_text(this.name);
	});
	change_text(1);

	
})

function show_big_img(val)
{
	document.getElementById("big_img").src = val;
}

function change_text(val)
{
	for(i = 1; i <=2; i ++)
	{
		if(i != val)
		{
			document.getElementById("texts_tag_" + i).style.backgroundColor = "#e1e1e1";
			document.getElementById("texts_tag_" + i).style.color = "#414141";
			document.getElementById("texts_tag_" + i).style.fontWeight = "normal";
			document.getElementById("goo_text_" + i).style.display = "none";
		}else{
			document.getElementById("texts_tag_" + i).style.backgroundColor = "#3665a2";
			document.getElementById("texts_tag_" + i).style.color = "#FFF";
			document.getElementById("texts_tag_" + i).style.fontWeight = "bold";
			document.getElementById("goo_text_" + i).style.display = "block";
		}
	}
}

function add(mun){
	var baseMun = $(mun).val();
	baseMun = parseInt(baseMun);
	if(baseMun>=1){
		baseMun =baseMun+1;
	}
	$(mun).val(baseMun);
	$('#InitCartUrl').attr("href","addcart.jsp?goodsId="+goodsId+"&pcount="+baseMun);
}
function reduce(mun){
	var baseMun = $(mun).val();
	baseMun = parseInt(baseMun);
	if(baseMun>1){
		baseMun =baseMun-1;
	}
	$(mun).val(baseMun);
	$('#InitCartUrl').attr("href","addcart.jsp?goodsId="+goodsId+"&pcount="+baseMun);
}
function modify(mun){
	var baseMun = $(mun).val();
	baseMun = parseInt(baseMun);
	$(mun).val(baseMun);
	$('#InitCartUrl').attr("href","addcart.jsp?goodsId="+goodsId+"&pcount="+baseMun);
}

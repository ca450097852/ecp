var basePath;
var filePath;
var typeId;
var goodsTypeData ;
var typeIds;
var tempTypeIds;
var goodsName;
var shopId;
$(function(){
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	typeId=$('#typeId').val();
	goodsTypeData=$('#goodsTypeData').val();
	var search = $('#search').val();
	shopId = $('#shopId').val();
	getshop(shopId);
	
	if(search=="null"){
		goodsName = "";
		$('#goodsFind').val("");
	}else{
		goodsName=search;
		$('#goodsFind').val(search);
	}
	
	if(goodsName!=""){
		typeIdList('');
	}else{
		typeIdList(typeId);
	}
	
	$(".c-price-edit").hide(); 
	//鼠标的移入移出  
    $(".c-price").mouseover(function (){  
        $(".c-price-edit").show();  
    }).mouseout(function (){  
        $(".c-price-edit").hide();  
    }); 
    
    goodslistDataByShopId();
    
});

function typeIdList(id){
	typeId=id;
	var rows =(JSON.parse(goodsTypeData)).rows;
	var temp ="";
	var selectedId = 0 ;
	var upcateId = 0 ;
	var op = '';
//	var result = '<a>所有分类</a>';
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].typeId==id&&rows[i].upcateId!=0){
			upcateId=rows[i].upcateId;
			temp +=","+upcateId;
//			op += '<dt>'+rows[i].upcateName+'：</dt>';
			op += '<dt>分类：</dt>';
			op += '<dd><ul>';
			op += '<li><a onclick="typeIdList('+rows[i].upcateId+')" style="cursor:pointer;">全部</a></li>';
//			result += '<a onclick="typeIdList('+rows[i].upcateId+')" style="cursor:pointer;"> > '+rows[i].upcateName+'</a>';
//			result += '<a> > '+rows[i].typeName+'</a>';
		}else if(rows[i].typeId==id&&rows[i].upcateId==0){
			upcateId=id;
			selectedId=1;
			temp +=","+upcateId;
//			op += '<dt>'+rows[i].typeName+'：</dt>';
			op += '<dt>分类：</dt>';
			op += '<dd><ul>';
			op += '<li><a  style="cursor:pointer;" class="selected">全部</a></li>';
//			result += '<a> > '+rows[i].typeName+'</a>';
		}
	}
//	op += '<dd><ul>';
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].upcateId==upcateId&&rows[i].typeId!=0&&id!=""){
			temp +=","+rows[i].typeId;
			if(rows[i].typeId==id){
				op += '<li><a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;" class="selected">'+rows[i].typeName+'</a></li>';
			}else{
				op += '<li><a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;">'+rows[i].typeName+'</a></li>';
			}
		}
	}
	//搜索页面
	if(id==""){
		op += '<dt>分类：</dt>';
		op += '<dd><ul>';
		op += '<li><a onclick="typeIdList("")" style="cursor:pointer;">全部</a></li>';
		for(var i= 0 ; i < rows.length ; i++){
			if(rows[i].upcateId==0){
				op += '<li><a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;">'+rows[i].typeName+'</a></li>';
			}
		}
	}
	
	op += '</ul></dd>';	
	op += '<dl><dt>品牌：</dt><dd><ul>';
	$.ajax({
		   type: "POST",
		   url: "webGoodsBrand/ns/combotree.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   brandData=data;
			   for(var i= 0 ; i < data.length ; i++){
				   op +='<li><a id="brandId'+data[i].id+'" onclick="brandIdChang('+data[i].id+')" style="cursor:pointer;">'+data[i].text+'</a></li>';
			   }
		   }
		});
	op += '</a></li></ul></dd></dl><dl>';	
	
	op += '<dl><dt>价格：</dt><dd><ul>'; 
	op +='<li><a id="priceId0" onclick="priceChang(0)" style="cursor:pointer;">全部</a></li>\
		<li><a id="priceId1" onclick="priceChang(1)" style="cursor:pointer;"> < 100</a></li>\
		<li><a id="priceId3" onclick="priceChang(3)" style="cursor:pointer;">100 - 300</a></li>\
		<li><a id="priceId4" onclick="priceChang(4)" style="cursor:pointer;">300 - 500</a></li>\
		<li><a id="priceId7" onclick="priceChang(7)" style="cursor:pointer;"> > 500</a></li>\
		<li><div id="c_selectorPrice" class="c-price"><div class="c-price-set"><div class="fl">\
      <input id="priceBegin" class="input-txt" style="color:#ccc" value="¥" type="text"  onfocus="if (value ==\'¥\'){value =\'\'}" onblur="if (value ==\'\'){value=\'¥\'}">\
      </div><em>-</em><div class="fl">\
      <input id="priceEnd" class="input-txt"  style="color:#ccc" value="¥" type="text" onfocus="if (value ==\'¥\'){value =\'\'}" onblur="if (value ==\'\'){value=\'¥\'}"></div></div>\
  <div class="c-price-edit"> <a onclick="priceChang(8)" style="cursor:pointer;" class="item1 J-price-cancle">清空</a>\
		<a onclick="priceChang(9)" style="cursor:pointer;" class="item2 J-price-confirm">确定</a> </div></div></li>';
	op += '</a></li></ul></dd></dl><dl>';	
	
	
	
	$('#product-selector').html(op);
	typeIds=temp.substr(1);
	if(selectedId==0){
		getGoodsListHtml(id);
		tempTypeIds = id ;
	}else{
		getGoodsListHtml(typeIds);
		tempTypeIds = typeIds ;
	}
//	$('#result').html(result);
	if(brandId!=0){
		var abrandId = "brandId" + brandId;
		$('#' + abrandId).addClass("selected"); // 添加样式
	}
	if(priceId!=0){
		var apriceId = "priceId" + priceId;
		$('#' + apriceId).addClass("selected"); // 添加样式
	}
	
}
var brandData;
var brandId=0;
//品牌点击
function brandIdChang(id){
//	alert(typeId);
	brandId=id;
	typeIdList(typeId);
	for ( var i = 0; i < brandData.length; i++) {
		if (brandData[i].id == id) {
			var abrandId = "brandId" + id;
			$('#' + abrandId).addClass("selected"); // 添加样式
		} else {
			var abrandId = "brandId" + brandData[i].id;
			$('#' + abrandId).removeClass("selected"); // 移除样式
		}
	}
	
}
var priceSql;
var priceId ;
var priceBegin="";
var priceEnd="";
function priceChang(index){
	priceId = index ;
	if(index==0){
		priceSql="";
	}else if(index==1){
		priceSql=" and saled_price < 100 ";
	}else if(index==2){
		priceSql=" and saled_price between 50 and 100 ";
	}else if(index==3){
		priceSql=" and saled_price between 100 and 300 ";
	}else if(index==4){
		priceSql=" and saled_price between 300 and 500 ";
	}else if(index==5){
		priceSql=" and saled_price between 300 and 400 ";
	}else if(index==6){
		priceSql=" and saled_price between 400 and 500 ";
	}else if(index==7){
		priceSql=" and saled_price > 500 ";
	}else if(index==8){
		$("#priceBegin").val("");
		$("#priceEnd").val("");
		return;
	}else if(index==9){
		priceBegin=$("#priceBegin").val();
		priceEnd=$("#priceEnd").val();
		var reg= new RegExp("^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$");
		if(priceBegin!="¥"){
			if(!reg.test(priceBegin)){
				layer.msg("请输出数字！");
				$("#priceBegin").val("");
				$("#priceBegin").focus();
				return;
			}
		}
		if(priceEnd!="¥"){
			if(!reg.test(priceEnd)){
				layer.msg("请输出数字！");
				$("#priceEnd").val("");
				$("#priceEnd").focus();
				return;
			}
		}
		if(priceBegin=="¥"&&priceEnd!="¥"){
			priceSql=" and saled_price <"+priceEnd;
		}
		if(priceEnd=="¥"&&priceBegin!="¥"){
			priceSql=" and saled_price >"+priceBegin;
		}
		if(priceEnd!="¥"&&priceBegin!="¥"){
			priceSql=" and saled_price between "+priceBegin+" and "+priceEnd;
		}
	}
	
	typeIdList(typeId);
	if(priceBegin!=""){
		$("#priceBegin").val(priceBegin);
	}
	if(priceEnd!=""){
		$("#priceEnd").val(priceEnd);
	}
	
	for ( var i = 0; i < 8; i++) {
		if (i == index) {
			var apriceId = "priceId" + index;
			$('#' + apriceId).addClass("selected"); // 添加样式
		} else {
			var apriceId = "priceId" + i;
			$('#' + apriceId).removeClass("selected"); // 移除样式
		}
	}
}



var page=1;
var nums =16; //每页出现的数据量
function getGoodsListHtml(typeIds,orderBy){
	 $(".c-price-edit").hide();
	 $(".c-price").mouseover(function (){  
	        $(".c-price-edit").show();  
	    }).mouseout(function (){  
	        $(".c-price-edit").hide();  
	    });  
	var parm = {"page":page,"rows":nums,"typeIds":typeIds,"orderBy":orderBy,"brandId":brandId,"priceSql":priceSql,"goodsName":goodsName,"shopId":shopId};
	$.ajax({
		   type: "POST",
		   data: parm,
		   url: "webGoods/ns/getGoodsByTypeIds.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   getGoodsList(data.rows);
			   if(page==1){
				   getPage(data,typeIds,orderBy); 
			   }
		   }
		});
}

function getPage(data,typeIds,orderBy){
	layui.use(['laypage', 'layer'], function(){
		  var laypage = layui.laypage
		  ,layer = layui.layer;
		 
		  laypage({
			    cont: 'layuipage'
			    ,pages:  Math.ceil(data.total/nums) //得到总页数
			    ,skin: '#ff6c00'
			    ,skip: true
			    ,jump: function(obj, first){
				    //得到了当前页，用于向服务端请求对应数据
				    var curr = obj.curr;
				    if(page!=curr){
				    	 page=curr;
						 getGoodsListHtml(typeIds,orderBy);
				    }
				  }
			  });
		});
}

function getGoodsList(data){
	var op = '';
	for(var i= 0 ; i < data.length ; i++){
		op += '<div class="product-item-box" onclick="goodsDetail('+data[i].goodsId+')" style="cursor:pointer;">\
			<div class="product-item-box-img"><img src="'+filePath+data[i].goodsImg+'" style="width: 220px;height: 220px;" /></div>\
			<div class="item-row"> <strong class="price"><span>￥</span>'+data[i].saledPrice+'</strong> <i class="old-price">￥'+data[i].marketPrice+'</i>\
			  <p class="sales-volume">销量<span>'+data[i].saledNum+'</span></p>\
			</div>\
			<p class="title-01">'+data[i].goodsName+'</p>';
		op += sellerShop;
		op += '	<div class="item-row">\
			  <div class="icon-tips"> <i class="bd-r3">促销</i> <i class="bd-r3">满减</i> </div>\
			  <a class="collect">收藏</a> </div>\
			<div class="item-btn bd-r3"> <a  >联系客服</a> <a onclick="goodsDetail('+data[i].goodsId+')" style="cursor:pointer;" class="cart">加入购物车</a> </div>\
			</div>';
	}
	$('#product-item').html(op);
}

//进入详细页
function goodsDetail(goodsId){
	$("#jsFrom").children("input").val(goodsId);
	$("#jsFrom").submit();
}


var saledPrice=0;
var saledNum=0;
function orderBy(temp){
	if(temp=="saledPrice"){
		saledNum=0;
		$('#saledNum').html(" ");
		saledPrice=saledPrice+1;
		if(saledPrice%2){
			$('#saledPrice').html(" ↑");
			getGoodsListHtml(tempTypeIds,"orderBySaledPrice");
		}else{
			$('#saledPrice').html(" ↓");
			getGoodsListHtml(tempTypeIds,"orderBySaledPriceDesc");
		}
		
	}else if(temp=="saledNum"){
		saledPrice=0;
		$('#saledPrice').html(" ");
		saledNum=saledNum+1;
		if(saledNum%2){
			$('#saledNum').html(" ↑");
			getGoodsListHtml(tempTypeIds,"orderBySaledNum");
		}else{
			$('#saledNum').html(" ↓");
			getGoodsListHtml(tempTypeIds,"orderBySaledNumDesc");
		};
	}else {
		saledNum=0;
		$('#saledNum').html(" ");
		saledPrice=0;
		$('#saledPrice').html(" ");
		getGoodsListHtml(tempTypeIds,"");
	}
}

var sellerShop;
//商户信息
function getshop(shopId){
	var op = '';
	$.ajax({
		type : "POST",
		url : "web/shop/ns/getShopById.action",
		data : {"shopId":shopId},
		dataType : "json",
		 async:false,
		success : function(data) {
			op += '<div class="item-row"> <a class="seller-name" onclick="goodsShopId('+data.shopId+',event)">'+ subDataString(data.shopName , 9)+'</a>\
			  <p class="product-area">'+(data.shopAddr).substr(0,parseInt(2))+'</p></div>';
			$("#seller-banner-title").html(data.shopName+"<small>欢迎光临</small>");
			if(data.shopLogo!=""){
				$("#seller-logo").attr('src',filePath+data.shopLogo); 
			}
			var shopName = '<li>店铺：<strong>'+ data.shopName  +'</strong></li>\
	          <li>地区：'+ data.shopAddr +'</li>\
	          <li>入驻时间：'+ subDataString(data.openTime,10) +'</li>' ;
			$(".seller-info").html(shopName);
			document.title = data.shopName;
		}
	});
	sellerShop = op ;
}

function subDataString(str , len){
	if(str==null || str ==""){
		return "---";
	}else if( str.length>parseInt(len)){
		str = str.substr(0,parseInt(len)) + "...";
	}
	
	return str ;
}


function goodsShopId(shopId,event){
	event.stopPropagation(); 
	window.location.href=basePath+"web/seller.jsp?shopId="+shopId;
}
var upcateIdList='';
//左边商品分类
function goodslistDataByShopId(){
	var typeIdList='';
	var parm = {"page":1,"rows":10000,"shopId":shopId};
	$.ajax({
		   type: "POST",
		   data: parm,
		   url: "webGoods/ns/getGoodsByTypeIds.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   var rows=data.rows;
			   for(var i= 0 ; i < rows.length ; i++){
				   typeIdList +="," + rows[i].typeId ;
			   }
		   }
		});
	var arr = typeIdList.substr(1).split(',');
	typeIdList=arr.unique3();
	console.log(typeIdList);
	var rows =(JSON.parse(goodsTypeData)).rows;
	var upcateId=0;
	var op='';
	var op1='';
	for(var i = 0; i < rows.length; i++){
		if(rows[i].upcateId!=0){
			for(var j= 0; j < typeIdList.length; j++){
				if(rows[i].typeId==typeIdList[j]){
					if(upcateId!=rows[i].upcateId){
						upcateId=rows[i].upcateId;
						upcateIdList +=","+upcateId;
					}
					op1+='<a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;">'+rows[i].typeName+'</a>';//onclick="typeIdList('+rows[j].typeId+')" style="cursor:pointer;"
				}
			}
		}
	}
	var arrTypeUpcateId = upcateIdList.substr(1).split(',').unique3();
	for(var i = 0; i < arrTypeUpcateId.length; i++){
		for(var j = 0; j < rows.length; j++){
			if(rows[j].typeId==arrTypeUpcateId[i]){
				op+='<li  onClick="ShowMenu(this,'+i+')"><a ><i>+</i>'
				+rows[j].typeName+'</a></li><ol class="no" id="showmenuid'+i+'">';
				op+=op1+"</ol>";
			}
		}
	}
	$("#expmenu-submenu").html(op);
}
var tempnum=-1;
function ShowMenu(obj,n){
//	alert(upcateIdList);
	var arrTypeUpcateId = upcateIdList.substr(1).split(',').unique3();
	for(var i = 0; i < arrTypeUpcateId.length; i++){
		if(n==i){
			if(tempnum==n){
				$("#showmenuid"+n).addClass("no");
				obj.innerHTML = obj.innerHTML.replace("-","+");
				tempnum=-1;
			}else{
				$("#showmenuid"+n).removeClass("no");
				obj.innerHTML = obj.innerHTML.replace("+","-");
				tempnum=n;
			}
			
		}else{
			$("#showmenuid"+i).addClass("no");
			obj.innerHTML = obj.innerHTML.replace("-","+");
		}
	}
}

Array.prototype.unique3 = function(){
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}










var basePath;
var filePath;
var columnIds;
var goodsTypeData ;

$(function(){
	
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	goodsTypeData=$('#goodsTypeData').val();
	columnId=$('#columnId').val();
	var columnName=$('#columnName').val();
//	columnIdList(columnId);
	 $("#columnId"+columnId).addClass("current"); // 添加样式
	 
//	layer.msg("columnId:"+columnId);
	
	 document.title =decodeUnicode(columnName);
	
	$.ajax({
	   type: "POST",
	   url: "webColumnGoods/ns/findGoodsIdByColumnIds.action",
	   data : {"columnIds":columnId },
	   dataType:"json",
	   async:false,
	   success: function(data){
		  var goodIds="";
		  for(var i= 0 ; i < data.length ; i++){
			  goodIds+=","+data[i].goodsId;
		  }
		  goodsListByIds(goodIds);
	   }
	});
		
	getGoodsColumn(goodsTypeData);

	//加载控件
	var $subblock = $(".subpage"), $head=$subblock.find('h2'), $ul = $("#proinfo"), $lis = $ul.find("li"), inter=false;
	
	$head.click(function(e){
		e.stopPropagation();
		if(!inter){
			$ul.show();
		}else{
			$ul.hide();
		}
		inter=!inter;
	});
	
	$ul.click(function(event){
		event.stopPropagation();
	});
	
	$(document).click(function(){
		$ul.hide();
		inter=!inter;
	});

	$lis.hover(function(){
		if(!$(this).hasClass('nochild')){
			$(this).addClass("prosahover");
			$(this).find(".prosmore").removeClass('hide');
		}
	},function(){
		if(!$(this).hasClass('nochild')){
			if($(this).hasClass("prosahover")){
				$(this).removeClass("prosahover");
			}
			$(this).find(".prosmore").addClass('hide');
		}
	});
	
	$(".mr_frUl ul li img").hover(function(){$(this).css("border-color","#A0C0EB");},function(){$(this).css("border-color","#d8d8d8")});
	jQuery(".theme-today-recommend-content").slide({titCell:"",mainCell:".mr_frUl ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:5});
	
});

function goodsListByIds(ids){
	 var goodsIds=ids.substr(1);
	 $.ajax({
		   type: "POST",
		   url: "webGoods/ns/getGoodsByGoodsIds.action",
		   data : {"goodsIds":goodsIds },
		   dataType:"json",
		   async:false,
		   success: function(data){
			   todayRecommend(data);
		   }
		});
}

function todayRecommend(data){
	var op="";
	for(var i= 0 ; i < data.length ; i++){
		op+='<li> <a onclick="goodsDetail('+data[i].goodsId+')" style="cursor:pointer;"><div class="theme-today-recommend-img">\
			<img src="'+filePath+data[i].goodsImg+'" /> </div>\
		     <p>'+data[i].goodsName+'</p>\
		     <strong class="price"><span>￥</span>'+data[i].saledPrice+'</strong> <i class="old-price">￥'+data[i].marketPrice+'</i> </a> </li>';
	}
	$("#today-recommend").html(op); 
}
//进入详细页
function goodsDetail(goodsId){
	$("#jsFrom").children("input").val(goodsId);
	$("#jsFrom").submit();
}

//项目栏
function getGoodsColumn(data){
	var op = '' ;
	var rows =(JSON.parse(data)).rows;
	var num=0;
	
	for(var i= 0 ; i < rows.length ; i++){
		var temp="";
		if(rows[i].upcateId==0){
			temp +=","+rows[i].typeId;
			num=num+1;
			op += ' <div class="theme-product-block" id="theme-product-block-0'+(num)+'">';
			op += '<a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;"  class="theme-product-block-lt"> <div class="theme-product-block-left-border">';
			    
			 op +='<p><span>'+rows[i].typeName+'</span></p>\
			       <b>满200送10</b> <i>&raquo;</i> </div>\
			 		<div class="theme-product-block-lt-img"> <img style="" src="'+filePath+rows[i].typeImg+'"/>\
			 		</div></a>\
			 		<div class="theme-product-block-rt"><div class="theme-product-block-content">';
	           
			 for(var j= 0 ; j < rows.length ; j++){
				 if(rows[i].typeId==rows[j].upcateId){
					 temp +=","+rows[j].typeId;
				 }
			 }
			 op += getGoodsIdByTypeIds(temp.substr(1));
			 op +='</div><div class="theme-product-block-ad"> <a ><img src="'+basePath+'web/protal/images/theme-ad-0'+num+'.jpg" /></a> </div>\
				    </div></div>';
		}
	}
	$('#theme-product').html(op);	
}
//项目栏点击事件
function typeIdList(typeId){
	$("#columnsFrom").children("input").val(typeId);
	$("#columnsFrom").submit();
}
//项目栏商品列表
function getGoodsIdByTypeIds(typeIds){
	var op ='' ;
	var parm = {"page":1,"rows":6,"typeIds":typeIds,"orderBy":"orderBySaledNumDesc"};
	$.ajax({
	   type: "POST",
	   data: parm,
	   url: "webGoods/ns/getGoodsByTypeIds.action",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   op +=  getGoodsListHtml(data.rows);
	   }
	});
	return op ;
}
function getGoodsListHtml(data){//<!--product-box-item--> 
	var op ='' ;
	for(var i= 0 ; i < data.length ; i++){
		op +='<a onclick="goodsDetail('+data[i].goodsId+')" style="cursor:pointer;"><div class="theme-product-block-img">\
			 <img src="'+filePath+data[i].goodsImg+'" />\
		 </div>\
	      <p>'+data[i].goodsName+'</p>\
	      <strong class="price"><span>￥</span>'+data[i].saledPrice+'</strong> <i class="old-price">￥'+data[i].marketPrice+'</i> </a>';
	}
	return op ;
	
}

//进入详细页
function goodsDetail(goodsId){
	$("#jsFrom").children("input").val(goodsId);
	$("#jsFrom").submit();
}



//解码  
function decodeUnicode(str) {  
    str = str.replace(/\\/g, "%");  
    return unescape(str);  
}












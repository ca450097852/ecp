var queryParam ;

$(function(){
	$("#leftCommentId").addClass("active");
	refreshTab1();

});

//刷新所有评价
function refreshTab1(){
	$.ajax({
		   type: "POST",
		   url: "web/evaluate/page.action",
		   data : {"params[evalSide]":1} ,
		   async : false ,
		   dataType:"json" ,
		   success: function(data){
			   //console.log(JSON.stringify(data));
			   var op = "";
			   for(var i=0 ; i<data.rows.length ; i++){
				   var evaluateTDO = data.rows[i] ;
				   op += getHtml(evaluateTDO) ;
			   }
			   $("#tab1 .comment-list").empty().html(op);
			   
			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab1").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab1").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

//刷新有图评价
function refreshTab2(){
	$.ajax({
		   type: "POST",
		   url: "web/evaluate/page.action",
		   data : {"params[evalSide]":1,"params[hadimg]":1} ,
		   async : false ,
		   dataType:"json" ,
		   success: function(data){
			   var op = "" ;
			   for(var i=0 ; i<data.rows.length ; i++){
				   var evaluateTDO = data.rows[i] ;
				   op += getHtml(evaluateTDO) ;
			   }
			   $("#tab2 .comment-list").empty().html(op);
			   
			   var totalPage = Math.ceil(parseInt(data.total)/10) ;
			   if(totalPage > 0 ){
				   $("#tab2").find(".totalPage").empty().text(totalPage);
			   }else{
				   $("#tab2").find(".totalPage").empty().text(1);
			   }
		   }
		});
}

$(document).ready(function(){
	
	$(function(){
	});
	
	$(".mytab").click(function() {
		var hr = $(this).children("a").attr("href");
		loadTab(hr);
	});
	
	//分页
	//"第一页"点击
	$(".am-pagination-first").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		//console.log("tabId===="+tabId) ;
		if(parseInt(currentPage)==1){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":1,"rows":10,"params[evalSide]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = "" ;
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab1 .comment-list").empty().html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":1,"rows":10,"params[evalSide]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab2 .comment-list").empty().html(op);
					   }
					});
				break;
			}
			
			$(this).parents("ul").find(".currentPage").empty().text(1);
			$(document).scrollTop(0);
			
		};
	});
	
	//"最末页"点击
	$(".am-pagination-last").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":totalPage,"rows":10,"params[evalSide]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab1 .comment-list").empty().html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":totalPage,"rows":10,"params[evalSide]":1,"params[hadimg]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab2 .comment-list").empty().html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(totalPage);
			$(document).scrollTop(0);
		};
	});
	
	//"上一页"点击
	$(".am-pagination-prev").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==1){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[evalSide]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab1 .comment-list").empty().html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)-1,"rows":10,"params[evalSide]":1,"params[hadimg]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab2 .comment-list").empty().html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)-1);
			$(document).scrollTop(0);
		};
	});
	
	//"下一页"点击
	$(".am-pagination-next").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		var tabId = $(this).parents(".am-tab-panel").get(0).id ;
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			switch (tabId) {
			case "tab1":
				var queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[evalSide]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab1 .comment-list").empty().html(op);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)+1,"rows":10,"params[evalSide]":1,"params[hadimg]":1} ;
				$.ajax({
					   type: "POST",
					   url: "web/evaluate/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var op = "";
						   for(var i=0 ; i<data.rows.length ; i++){
							   var evaluateTDO = data.rows[i] ;
							   op += getHtml(evaluateTDO) ;
						   }
						   $("#tab2 .comment-list").empty().html(op);
					   }
					});
				break;
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)+1);
			$(document).scrollTop(0);
		};
	});
});

function loadTab(hr){
	var tabHtml ;
	
	switch (hr) {
	case "#tab1":
		tabHtml = $('#tab1 .comment-list').children(".item-list:first");
		//console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab1();
		}
		break;
	
	case "#tab2":
		tabHtml = $('#tab2 .comment-list').children(".item-list:first");
		//console.log("tab2#######"+tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab2();
		}
		break;
		
	default:
		break;
	}
}

function getHtml(evaluateTDO){
	var op = '<ul class="item-list">\
		<li class="td td-item">\
			<div class="item-pic">\
				<a href="javascript:void(0)" class="J_MakePoint"> <img\
					src="'+evaluateTDO.tbOrderDetail.goodsImg+'" class="itempic">\
				</a>\
			</div>\
		</li>\
		<li class="td td-comment">\
			<div class="item-title">\
				<div class="item-opinion">好评</div>\
				<div class="item-name">\
					<a href="webGoods/ns/goods.action?goodsId='+ evaluateTDO.tbOrderDetail.goodsId +';"><p class="item-basic-info">'+evaluateTDO.tbOrderDetail.goodsName+'</p> </a>\
				</div>\
			</div>\
			<div class="item-comment"><p>'+evaluateTDO.evalContent+'</p>\
				<ul class="filePic layer-photos-demo" >' ;
	
	if(evaluateTDO.tbEvaluateAppendixList!=null){
		var tbEvaluateAppendixList =evaluateTDO.tbEvaluateAppendixList ;
		for(var i=0 ; i< tbEvaluateAppendixList.length ; i++){
			op += '<li ><img layer-src="'+ tbEvaluateAppendixList[i].appPath +'" src="'+ tbEvaluateAppendixList[i].appPath +'" ></li>'
		}
	}
				
	op+=   	   '</ul>\
			</div>\
			<div class="item-info">\
				<div>\
					<p class="info-little">\
						<span>规格：'+evaluateTDO.tbOrderDetail.modelName+'</span> \
					</p>\
					<p class="info-time">'+ evaluateTDO.evalTime +'</p>\
				</div>\
			</div>\
		</li>\
	</ul>		\
		' ;
	
	return op ;
}



$(function(){
	$("#leftMrId").addClass("active");
	refreshTab1();
	refreshTab2();
	refreshTab3();
});

$(document).ready(function(){
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
				var queryParam = {"page":1,"rows":4,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":1,"rows":4,"params[state]":1,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":1,"rows":4,"params[state]":2 ,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
						   $('#tab3 .order-list').html(html);
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
				var queryParam = {"page":totalPage,"rows":4,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
						   $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				var queryParam = {"page":totalPage,"rows":4,"params[state]":1,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.do",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
				
			case "tab3":
			var	queryParam = {"page":totalPage,"rows":4,"params[state]":2 ,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab3 .order-list').html(html);
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
				var queryParam = {"page":parseInt(currentPage)-1,"rows":4,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data);
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)-1,"rows":4,"params[state]":1,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.do",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":parseInt(currentPage)-1,"rows":4,"params[state]":2 ,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.do",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab3 .order-list').html(html);
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
				var queryParam = {"page":parseInt(currentPage)+1,"rows":4,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data :queryParam,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
							  $('#tab1 .order-list').html(html);
					   }
					});
				break;
			case "tab2":
				queryParam = {"page":parseInt(currentPage)+1,"rows":4,"params[state]":1,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab2 .order-list').html(html);
					   }
					});
				break;
				
			case "tab3":
				queryParam = {"page":parseInt(currentPage)+1,"rows":4,"params[state]":2 ,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
				$.ajax({
					   type: "POST",
					   url: "memberRecommend/page.action",
					   data : queryParam ,
					   dataType:"json" ,
					   success: function(data){
						   var html=htmlList(data); 
						   $('#tab3 .order-list').html(html);
					   }
					});
				break;
			
			};
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)+1);
			$(document).scrollTop(0);
		};
	});
	
	$(".mytab").click(function() {
		var hr = $(this).children("a").attr("href");
		loadTab(hr);
	});
	
});

//刷新所有订单
function refreshTab1(){
	
	var queryParam = {"page":1,"rows":4,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
	
	$.ajax({
		   type: "POST",
		   url: "memberRecommend/page.action",
		   data : queryParam,
		   dataType:"json" ,
		   success: function(data){
			   console.log(JSON.stringify(data));
			   var html=htmlList(data);
			  $('#tab1 .order-list').html(html);
			 if(data.total/data.rows.length>parseInt(data.total/data.rows.length)){
				 $(".totalPage").empty().text(data.total/data.rows.length+1);
			 }else if(data.total/data.rows.length==parseInt(data.total/data.rows.length)){
				 $(".totalPage").empty().text(data.total/data.rows.length);
			 }else{
				 $(".totalPage").empty().text(1);
			 }
			
			$("#count").html(data.total);
			$("#money").html(money(data));
		   }
		});
	$('#userName').html($('#shopName').html());
	var queryParam = {"params[memberName]":$('#shopName').html()};
	$.ajax({
		url:"member/page.action",
		type:"post",
		dataType:"json",
		data:queryParam,
		success:function(data){
			$('#lv').html(data.rows[0].levelName1);
			
			
		}
	});
	
}



//刷新未提取记录
function refreshTab2(){
	
	var queryParam = {"page":1,"rows":4,"params[state]":1,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
	
	$.ajax({
		   type: "POST",
		   url: "memberRecommend/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var html=htmlList(data);
				  $('#tab2 .order-list').html(html);
				 
				  if(data.total/data.rows.length>parseInt(data.total/data.rows.length)){
						 $(".totalPage").empty().text(data.total/data.rows.length+1);
					 }else if(data.total/data.rows.length==parseInt(data.total/data.rows.length)){
						 $(".totalPage").empty().text(data.total/data.rows.length);
					 }else{
						 $(".totalPage").empty().text(1);
					 }
		   }
		});
}

//刷新已提取记录
function refreshTab3(){
	var queryParam = {"page":1,"rows":4,"params[state]":2,"order":"order by m.create_time desc","params[recommendMemberId]":$("#memberId").val()} ;
	
	$.ajax({
		   type: "POST",
		   url: "memberRecommend/page.action",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   var html=htmlList(data);
				  $('#tab3 .order-list').html(html);
				  if(data.total/data.rows.length>parseInt(data.total/data.rows.length)){
						 $(".totalPage").empty().text(data.total/data.rows.length+1);
					 }else if(data.total/data.rows.length==parseInt(data.total/data.rows.length)){
						 $(".totalPage").empty().text(data.total/data.rows.length);
					 }else{
						 $(".totalPage").empty().text(1);
					 }
		   }
		});
}





//加载tab
function loadTab(hr){
	var tabHtml ;
	
	switch (hr) {
	case "#tab1":
		tabHtml = $('#tab1 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab1();
		}
		break;
	
	case "#tab2":
		tabHtml = $('#tab2 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab2();
		}
		break;
		
	case "#tab3":
		tabHtml = $('#tab3 .order-list').children("div:first");
		console.log(tabHtml);
		if(tabHtml.get(0)==null||tabHtml.get(0)==""){
			refreshTab3();
		}
	break;
	default:
		break;
	}
}
function htmlList(data){
	
	 var html='';
	 var state="";
	  var rows = data.rows ;	
	  for ( var i = 0; i < rows.length; i++) {
		if(rows[i].state=='1'){
			state='未提取';
			
		}else{
			state='已提取';
			
		}
	
		html+='<div class="order-top"><table><tr>\
			<td width="150px" align="center">'+rows[i].orderId+'</td>\
			<td width="500px"align="center" ><div class="item-pic"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'" class="J_MakePoint">\
			<img  src="#" class="itempic J_ItemImg"></a></div><div class="item-info">\
			<div class="item-basic-info"><a href="webGoods/ns/goods.action?goodsId='+rows[i].goodsId+'">\
			<p>'+rows[i].goodsName+'</p><p class="info-little">规格：'+rows[i].modelName+'</p></a></div></div></td>\
			<td width="150px" align="center">'+rows[i].nickName+'</td>\
			<td width="150px" align="center">'+rows[i].orderMoney+'</td>\
			<td width="150px" align="center">'+rows[i].recommendMoney+'</td>\
			<td width="150px" align="center">'+rows[i].createTime+'</td>\
			<td width="150px" align="center">'+state+'</td>\
			</tr></table></div>';
	}
	return html;
}
//奖励总和
function money(data){
	 var rows = data.rows ;
	 var money=0;
	 for ( var i = 0; i < rows.length; i++) {
		
		 if(rows[i].state=='2'){
			 money+=rows[i].recommendMoney; 
		 }
		
	 }
	 return money;
}

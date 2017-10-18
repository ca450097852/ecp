var shopId= $("#shopId").val();
var filePath= $("#filePath").val();
var allGoods=[];

var page = 1;
var rows = 10;
var total = 0;

$(function(){
	
		FastClick.attach(document.body);
		getShop();
		getShopHot();
		getShopGoods();
		getNewGoods();
		
		$(document.body).pullToRefresh().on("pull-to-refresh", function() {
	        //下滑刷新
	        page=1;
	        getShopGoods();
	  	  $(document.body).pullToRefreshDone();
	      });
		
		// infinite
        var loading = false;
        $(document.body).infinite().on("infinite", function() {
          if(loading) return;
          loading = true;        
          if(page*rows<total){
	          page++;
	  		getShopGoods();

          }
    	  loading = false;
        }); 
		
		$("#saleCount").on("click", function(){
			if($(this).hasClass("SortAscCss")){
				$(this).removeClass("SortAscCss");
				$(this).addClass("SortDescCss");
			}else{
				$(this).removeClass("SortDescCss");
				$(this).addClass("SortAscCss");
			}
			var obj=JSON.parse("["+allGoods+"]"); 
			var className=$('#saleCount').attr('class');
			if(className=='placeholder SortDescCss'){
				sort(obj,'saledNum');
			}else{
				sort(obj,'saledNum',true);
			}
		});
		
		$("#salePrice").on("click", function(){
			if($(this).hasClass("SortAscCss")){
				$(this).removeClass("SortAscCss");
				$(this).addClass("SortDescCss");
			}else{
				$(this).removeClass("SortDescCss");
				$(this).addClass("SortAscCss");
			}
			var obj=JSON.parse("["+allGoods+"]"); 
			var className=$('#salePrice').attr('class');
			if(className=='placeholder SortDescCss'){
				sort(obj,'saledPrice');
			}else{
				sort(obj,'saledPrice',true);
			}
		});
		
		//
		if($("#flag").val()=='1'){
			goAll();
		}
		
		//判断是否收藏
		var shopId=$("#shopId").val();
		var isLogin1 = isLogin();
		if(!isLogin1){
			$("#shoucang").html("收藏本店");
		}
		$.ajax({
		 	url:"collect/list.mobile",
		 	data:{"shopId":shopId,"collectType":"2"},
		 	type:"post",
		 	dataType:"json",
		 	success:function(data){
		 		if(data.length==0){
		 			$("#shoucang").html("收藏本店");
		 	}else{
		 		$("#shoucang").html("已收藏");
		 	}
		 }
	});
		
});

//获取shop
function getShop(){
	$.ajax({
		   type: "POST",
		   url: "shop/ns/getshop.mobile",
		   data : {"shopId":shopId},
		   dataType:"json" ,
		   success: function(data){
			   if(data){
				   $('#shopName').html(data.shopName);
				   if(data.shopLogo.length>0){
					    $("#shopLogo").attr('src',$('#filePath').val()+data.shopLogo); 
					    }else{
					    $("#shopLogo").attr('src','upload/headimg.jpg'); 
					    }
				   
			   }
			   
		   }
		});
	
	//获取收藏数
	$.ajax({
		   type: "POST",
		   url: "collect/ns/getCount.mobile",
		   data : {"shopId":shopId},
		   dataType:"text" ,
		   success: function(data){
			   if(data){
				   $("#sum_shoucang").html(data);
			   }else{
				   $("#sum_shoucang").html("0");
			   }
			   
		   }
		});
	
}

//获取shop的热推商品
function getShopHot(){
	$.ajax({
		type: "POST",
		url: "Goods/ns/shopHot.mobile",
		data : {"shopId":shopId,"number":6},
		dataType:"json" ,
		success: function(data){
			if(data){
				var html="";
				for(var i=0;i<data.length;i++){
					
					html+='<li style="height:270px"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'">'+
			              '<div class="proimg"><img src="'+filePath+data[i].goodsImg+'"></div>'+
			              '<div class="protxt">'+
			              '<div class="name" >'+data[i].goodsName+'</div>'+
			              '<div class="wy-pro-pri">¥<span>'+data[i].saledPrice+'</span></div>'+
			              '</div></a></li>';
				}
				$('#hot-shopList').html(html);
			}
			
		}
	});
	
}


//获取shop的全部商品
function getShopGoods(){
	var params = {"params[shopId]":shopId,"page":page,"rows":rows};
	
	$.ajax({
		type: "POST",
		url: "Goods/ns/page.mobile",
		data : params,
		dataType:"json" ,
		success: function(data){
			if(data){
				var rows = data.rows;
				total = data.total;
				var str=JSON.stringify(rows);
				str=str.substring(1,str.length-1);
				//str=str.replace(/[]/, "");
				allGoods.push(str);
				//allGoods += eval('('+(JSON.stringify(rows)).replace(/}{/,',')+')');
				console.log(allGoods);
				for(var i=0;i<rows.length;i++){
					$('#shop-allgoodsList').append('<div class="weui-media-box_appmsg ord-pro-list">'+
			              '<div class="weui-media-box__hd"><a href="proinfo.jsp?goodsId='+rows[i].goodsId+'"><img class="weui-media-box__thumb" src="'+filePath+rows[i].goodsImg+'" alt=""></a></div>'+
			              '<div class="weui-media-box__bd">'+
			              '<h1 class="weui-media-box__desc"><a href="proinfo.jsp?goodsId='+rows[i].goodsId+'" class="ord-pro-link">'+rows[i].goodsName+'</a></h1>'+
			              '<p class="weui-media-box__desc">规格：<span>'+rows[i].goodsSpecs+'</span></p>'+
			              '<div class="clear mg-t-10">'+
			              '<div class="wy-pro-pri fl">¥<em class="num font-15">'+rows[i].saledPrice+'</em></div>'+
			              '<div class="pro-amount fr"><span class="chengjiao"><em >'+rows[i].saledNum+'成交</em></span><span class="font-13">数量×<em class="name">'+rows[i].inventory+'</em></span></div>'+
			              '</div></div></div>');
				}
				
			}
			
		}
	});
	
}

//根据创建时间获取前6件商品
function getNewGoods(){
	$.ajax({
		type: "POST",
		data: {"shopId":shopId},
		url: "Goods/ns/shopGoods.mobile",
		dataType:"json" ,
		success: function(data){
			if(data){
				var html="";
				for(var i=0;i<data.length;i++){
					if(i==6){
						break;
					}
					html+='<li style="height:272px" ><a href="proinfo.jsp?goodsId='+data[i].goodsId+'">'+
			              '<div class="proimg"><img src="'+filePath+data[i].goodsImg+'"></div>'+
			              '<div class="protxt">'+
			              '<div class="name"  >'+data[i].goodsName+'</div>'+
			              '<div class="wy-pro-pri">¥<span>'+data[i].saledPrice+'</span></div>'+
			              '</div></a></li>';
				}
				
				$('#new-GoodsList').html(html);
			}
		}
	});
	
}

function goAll(){
	$("#allGoods").click();
	
}

//商品分类
function goGoodsType(){
	$.ajax({
		   type: "POST",
		   url: "GoodsType/ns/getType2.mobile",
		   data : {"shopId":shopId},
		   dataType:"json" ,
		   success: function(data){
			   if(data){
				   rows=data;
				   var array=new Array();
				   for(var i=0;i<data.length;i++){
					   var type={text:data[i].typeName,className:data[i].typeId,onClick:function (){
						   var typeName=this.text;
						   $.ajax({
								type: "POST",
								url: "Goods/ns/shopGoodsType.mobile",
								data : {"shopId":shopId,"typeId":this.className},
								dataType:"json" ,
								success: function(data){
										if(data){
											var html="";
											for(var i=0;i<data.length;i++){
												
												html+='<li style="height:272px"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'">'+
										              '<div class="proimg"><img src="'+filePath+data[i].goodsImg+'"></div>'+
										              '<div class="protxt">'+
										              '<div class="name">'+data[i].goodsName+'</div>'+
										              '<div class="wy-pro-pri">¥<span>'+data[i].saledPrice+'</span></div>'+
										              '</div></a></li>';
											}
											$('#type-shopList').html(html);
											$('#typeName').html(typeName);	
											$("#typeButton").click();
										}
									}
								});
					   }};
					   array.push(type);
				   }
				   $.mobiles({
					   mobiles:array
					});
			   }
		   }
		});
}

function goInfo(){
	window.location.href='shop-info.jsp?shopId='+shopId;
	
}

function search(){
	
	var searchName=$("#searchInput").val();
	var params = {"params[goodsName]":searchName};
	
	$.ajax({
		type: "POST",
		url: "Goods/ns/page.mobile",
		data : params,
		dataType:"json" ,
		success: function(data){
			if(data){
				var rows = data.rows;
				var html="";
				for(var i=0;i<rows.length;i++){
					html+='<li><a style="height:272px" href="proinfo.jsp?goodsId='+rows[i].goodsId+'">'+
		              '<div class="proimg"><img src="'+filePath+rows[i].goodsImg+'"></div>'+
		              '<div class="protxt">'+
		              '<div class="name" >'+rows[i].goodsName+'</div>'+
		              '<div class="wy-pro-pri">¥<span>'+rows[i].saledPrice+'</span></div>'+
		              '</div></a></li>';
				}
					if(html.length>0){
						$('#type-shopList').html(html);
						$('#typeName').html('搜索结果');	
						$("#typeButton").click();
					}else{
						$.alert("未找到商品！");
					}
			}
			}
	});
	}

function sort(array, field, reverse){
	var data=jsonSort(array, field, reverse);

	if(data){
		var html="";
		for(var i=0;i<data.length;i++){
			html+='<div class="weui-media-box_appmsg ord-pro-list">'+
	              '<div class="weui-media-box__hd"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'"><img class="weui-media-box__thumb" src="'+filePath+data[i].goodsImg+'" alt=""></a></div>'+
	              '<div class="weui-media-box__bd">'+
	              '<h1 class="weui-media-box__desc"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'" class="ord-pro-link">'+data[i].goodsName+'</a></h1>'+
	              '<p class="weui-media-box__desc">规格：<span>'+data[i].goodsSpecs+'</span></p>'+
	              '<div class="clear mg-t-10">'+
	              '<div class="wy-pro-pri fl">¥<em class="num font-15">'+data[i].saledPrice+'</em></div>'+
	              '<div class="pro-amount fr"><span class="chengjiao"><em >'+data[i].saledNum+'成交</em></span><span class="font-13">数量×<em class="name">'+data[i].inventory+'</em></span></div>'+
	              '</div></div></div>';
		}
		
		$('#shop-allgoodsList').html(html);
	}
	

	
	
}

/*
 * @description    根据某个字段实现对json数组的排序
 * @param   array  要排序的json数组对象
 * @param   field  排序字段（此参数必须为字符串）
 * @param   reverse 是否倒序（默认为false）
 * @return  array  返回排序后的json数组
*/
function jsonSort(array, field, reverse) {
  //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
  if(array.length < 2 || !field || typeof array[0] !== "object") return array;
  //数字类型排序
  if(typeof array[0][field] === "number") {
    array.sort(function(x, y) { return x[field] - y[field]});
  }
  //字符串类型排序
  if(typeof array[0][field] === "string") {
    array.sort(function(x, y) { return x[field].localeCompare(y[field])});
  }
  //倒序
  if(reverse) {
    array.reverse();
  }
  return array;
}

//收藏店铺
 function shouCang() {
	var shopId=$("#shopId").val();
	$.ajax({
	 	url:"collect/list.mobile",
	 	data:{"shopId":shopId,"collectType":"2"},
	 	type:"post",
	 	dataType:"json",
	 	success:function(data){
	 		if(data.length==0){
		  		$.ajax({
				 	url:"collect/add.mobile",
				 	data:{"goodsId":"0","shopId":shopId,"collectType":"2"},
				 	type:"post",
				 	success:function(data){
				 	$.toast("收藏成功", function() {
				          console.log('close');
				        });
				 	}
		 	}); 
	 	}else{
	 		$.toast("你已经收藏过", function() {
	          console.log('close');
	          });
	 		}
	 		}
	 	});
	}






var basePath;
var filePath;
var goodsTypeData ;
$(function(){
	findADInfoList();//广告页面
	 findNewsInfoList();
	
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
//	goodsTypeData=$('#goodsTypeData').val();
	
//	getLaeftNavList(goodsTypeData);//导航栏
//	getGoodsColumn(goodsTypeData);
	
	
	
	var params = {"params[recommend]":1,"order":"recommend"};
	$.ajax({
	   type: "POST",
	   data: params,
	   url: "../wap/Goods/ns/pageOrderBy.mobile",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var op =  pageOrderBy(data);
		   $('#recommend_goods').html(op);
	   }
	});
	
	  $(".swiper-tuijian").swiper({
			pagination: '.swiper-pagination',
			loop: true,
			paginationType:'fraction',
	        slidesPerView:3,
	        paginationClickable: true,
	        spaceBetween: 2,
	        autoplay: 4000,
	        autoplayDisableOnInteraction:false
	      });
//	
	var params2 = {"order":"saledNum"};
	$.ajax({
		type: "POST",
		data: params2,
		url: "../wap/Goods/ns/pageOrderBy.mobile",
		dataType:"json" ,
		async:false,
		success: function(data){
			var op =  pageOrderBy(data);
			$('#remai').html(op);
		}
	});	
	 $(".swiper-jingxuan").swiper({
			pagination: '.swiper-pagination',
			loop: true,
			paginationType:'fraction',
	        slidesPerView:3,
	        paginationClickable: true,
	        spaceBetween: 2,
	        autoplay: 4000,
	        autoplayDisableOnInteraction:false
	      });
	var params3 = {"order":"createTime"};
	$.ajax({
		type: "POST",
		data: params3,
		url: "../wap/Goods/ns/pageOrderBy.mobile",
		dataType:"json" ,
		async:false,
		success: function(data){
			var op =  pageOrderByNew(data);
			$('#new_goods').html(op);
		}
	});
	
});
function pageOrderBy(data){
	   var rows =data.rows;
	   var op = '' ;
	   for(var i= 0 ; i < rows.length; i++){
		   if(i==6){
				break;
			}
		   
		   op+='<div class="swiper-slide"><a onclick="goodsDetail('+rows[i].goodsId+')" style="cursor:pointer;">\
				<div class="block-img"><img src="'+rows[i].goodsImg+'" /></div>\
				<div class="name">'+rows[i].goodsName+'</div>\
				<div class="wy-pro-pri">¥<span>'+rows[i].saledPrice+'</span></div></a></div>';
		}
	   return op ;
}
function pageOrderByNew(data){
	var rows =data.rows;
	var op = '' ;
	for(var i= 0 ; i < rows.length; i++){
		if(i==6){
			break;
		}
		
		op+='<li><a onclick="goodsDetail('+rows[i].goodsId+')" style="cursor:pointer;">\
			<div class="proimg"><img src="'+rows[i].goodsImg+'" /></div><div class="protxt">\
			<div class="name">'+rows[i].goodsName+'</div>\
			<div class="wy-pro-pri">¥<span>'+rows[i].saledPrice+'</span></div>\
			</div></a></li>';
	}
	return op ;
}



//进入详细页
function goodsDetail(goodsId){
	window.location.href="proinfo.jsp?goodsId="+goodsId; 
}


function findADInfoList(){
	var op="";
	var parm = {"params[imgType]":2,"params[sts]":1};
	$.ajax({
	   type: "POST",
	   data: parm,
	   url: "../wap/banner/ns/page.mobile",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var rows=data.rows;
		   for(var i= 0 ; i < rows.length ; i++){
			   op+='<div class="swiper-slide"><a href="javascript:void(0)"><img src="'+rows[i].imgUrl+'" /></a></div>';
		   }
	   }
	});
	 $("#adurl").html(op);
	 $(".swiper-banner").swiper({
		 pagination: '.swiper-pagination',
        loop: true,
        paginationType:'bullets',
        autoplay: 3000,
        slidesPerView:3,
        spaceBetween : 10,
        autoplayDisableOnInteraction:false
        
      });
}
function findNewsInfoList(){
	var op="";
	$.ajax({
		type: "POST",
		url: "../wap/info/ns/findADInfoList.mobile",
		dataType:"json" ,
		async:false,
		success: function(data){
			console.log(data);
			var rows=data.rows;
			for(var i= 0 ; i < rows.length ; i++){
				op+='<div class="swiper-slide"><a href="news_info.jsp?infoId='+rows[i].infoId+'">'+rows[i].title+'</a></div>';
			}
			
		}
	});
	$("#newsinfo").html(op);

	$(".swiper-news").swiper({
		loop: true,
		direction: 'vertical',
		paginationHide :true,
        autoplay: 3000
      });
}

























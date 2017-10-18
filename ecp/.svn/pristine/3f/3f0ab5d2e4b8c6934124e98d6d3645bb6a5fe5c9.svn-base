var basePath;
var filePath;
$(function(){

	
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
	//推荐
	var params = {"params[recommend]":1 ,"order":" order by create_time desc "};
	$.ajax({
	   type: "POST",
	   data: params,
	   url: "webGoods/ns/pageOrderBy.action",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var op =  recommend(data);
		   $('#recommend').html(op);
	   }
	});
	//热销
	var params2 = {"order":" order by saled_num desc "};
	$.ajax({
		type: "POST",
		data: params2,
		url: "webGoods/ns/pageOrderBy.action",
		dataType:"json" ,
		async:false,
		success: function(data){
			var op =  hotSaled(data);
			$('#hotSaled').html(op);
		}
	});
//	//最新
//	var params3 = {"order":" order by create_time desc "};
//	$.ajax({
//		type: "POST",
//		data: params3,
//		url: "webGoods/ns/pageOrderBy.action",
//		dataType:"json" ,
//		async:false,
//		success: function(data){
//			var op =  pageOrderBy(data);
//			$('#con_one_3').html(op);
//		}
//	});

});


function recommend(data){
	var op='';
    var rows = data.rows;    
    //console.log(JSON.stringify(rows));
    for(var i= 0 ; i < rows.length; i++){
	   if(i==4){
			break;
		}
	   op +='<div class="left-bar-box-img"><img src="'+filePath+rows[i].goodsImg+'" style="width: 100%;height: 100%;"/></div>\
	        <a href="webGoods/ns/goods.action?goodsId='+ rows[i].goodsId +'"><p class="title-01">'+subDataString(rows[i].goodsName,26)+'</p></a>\
	        <strong class="price"><span>￥</span>'+rows[i].saledPrice+'</strong> </div>';
	}
   return op ;
}


function hotSaled(data){
	var op='';
	var rows = data.rows;    
	//console.log(JSON.stringify(rows));
	for(var i= 0 ; i < rows.length; i++){
		if(i==5){
			break;
		}
		op +='<div class="left-bar-box rank"><p>'+(i+1)+'</p>\
	          <img src="'+filePath+rows[i].goodsImg+'" style="height: 100%;"/><dl>\
	          <a href="webGoods/ns/goods.action?goodsId='+ rows[i].goodsId +'"><dt class="title-01">'+subDataString(rows[i].goodsName,15)+'</dt></a>\
	            <dd><strong class="price"><span>￥</span>'+rows[i].saledPrice+'</strong></dd></dl></div>';
	}
	return op ;
}


function subDataString(str , len){
	if(str==null || str ==""){
		return "---";
	}else if( str.length>parseInt(len)){
		str = str.substr(0,parseInt(len)) + "...";
	}
	
	return str ;
}
















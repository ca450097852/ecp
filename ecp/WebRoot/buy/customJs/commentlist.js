var basePath;
var filePath;

$(function(){
	$("#leftCommentId").addClass("active");
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	
	orderDetailId = GetQueryString("orderDetailId");
	console.log(orderDetailId);
	orderId = GetQueryString("orderId");
	console.log(orderId);
	var queryParams = {"params[orderId]":orderId } ;
	$.ajax({
		   type: "POST",
		   url: "weborder/page.action",
		   data : queryParams ,
		   async : false ,
		   dataType:"json" ,
		   success: function(data){
			   //console.log(JSON.stringify(data));
			   var op = '' ;
			   for(var i=0 ; i<data.rows[0].tbOrderDetailList.length ; i++){
				   var tbOrderDetail = data.rows[0].tbOrderDetailList[i] ;
				   if(tbOrderDetail.orderDetailId == orderDetailId){
					   op+=getcommentList(data.rows[0].tbOrder ,tbOrderDetail); 
				   }
			   }
			   $(".comment-main").html(op);
		   }
		});
	
	$('#up_titlePic').uploadify({
		'swf'			: 'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'web/evaluate/ns/upload.action',
		'buttonText'    : '上传图片',
		'height'		: 30,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo',
		'multi'			: false,
		'removeCompleted' : true,
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				var img_html = '<div class="pic-item" style="width:300px"><img alt="预览" src="'+filePath+data+'" style="width:80px"><span><a href="javascript:void(0)" onclick="picItemDelete(this)">删除</a></span><input type="hidden" name="evaluatePic" value="'+ data +'"/><div>';
				$("#showtitlePic").show();
				$("#showtitlePic").append(img_html);
				hiddenUploadButton();
			}
		}
	});
	
	$("#showtitlePic").empty();
	
});

$(document).ready(function(){
	
	$(function(){//默认好评
		$(".item-opinion .op1").addClass("active");
		$(".item-opinion input").val(1);
	});
	
	$(".comment-list .item-opinion li").click(function() {	
		$(this).prevAll().children('i').removeClass("active");
		$(this).nextAll().children('i').removeClass("active");
		$(this).children('i').addClass("active");
		
		var a = $(this).children('input').val();
		console.log(a);
		$(this).siblings("input").val(a);
		console.log($(this).siblings("input").val());
		
	});
});

//删除当前评价图片
function picItemDelete(obj){
	console.log($(obj).parents(".pic-item").get(0));
	$(obj).parents(".pic-item").remove();
	hiddenUploadButton();
}

//判断上传图片是否超过三张，超过就隐藏上传按钮
function hiddenUploadButton(){
	var picNumber = $("#showtitlePic").find(".pic-item").length;
	if(picNumber > 2){
		$("#up_titlePic").hide();
	}else{
		$("#up_titlePic").show();
	}
}


function getcommentList(tbOrder , tbOrderDetail){
	var op = "" ;
	op = '\
	<div class="comment-list">\
		<div class="item-pic">\
			<a href="javascript:void(0);" class="J_MakePoint">\
				<img src="'+tbOrderDetail.goodsImg+'" class="itempic" style="height: 148px ;width: 148px">\
			</a>\
		</div>\
		<div class="item-title">\
			<div class="item-name">\
				<a href="#">\
					<p class="item-basic-info">'+tbOrderDetail.goodsName+'</p>\
				</a>\
			</div>\
			<div class="item-info">\
				<div class="info-little">\
					<span>规格：'+tbOrderDetail.modelName+'</span>\
				</div>\
				<div class="item-price">\
					价格：<strong>'+tbOrderDetail.saledPrice+'元</strong>\
				</div>\
			</div>\
		</div>\
		<div class="clear"></div>\
		<form >\
			<input type="hidden" name="orderId" value='+tbOrderDetail.orderId +'></input>\
			<input type="hidden" name="orderDetailId" value='+tbOrderDetail.orderDetailId +'></input>\
			<input type="hidden" name="goodsId" value='+tbOrderDetail.goodsId +'></input>\
			<input type="hidden" name="evalSide" value="1"></input>\
			<div class="item-comment">\
				<textarea name="evalContent" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦！"></textarea>\
				<div id="showtitlePic" align="left" style="width:100px;display: none;" ></div>\
				<input type="file" id="up_titlePic"/>\
				<div id="fileQueueLogo"></div>\
				<div class="am-btn am-btn-danger" onclick="submit(this)">发表评论</div>\
			</div>\
			<div class="item-opinion">\
				<input type="hidden" name="evalType" ></input>\
				<li><input type="hidden" value="1" /><i class="op1" ></i>好评</li>\
				<li><input type="hidden" value="2" /><i class="op2" ></i>中评</li>\
				<li><input type="hidden" value="3" /><i class="op3" ></i>差评</li>\
			</div>\
		</form>\
	</div>';
	return op ;
}

function submit(obj){
	var form = $(obj).parents("form").serialize();
	console.log(form);
    $.ajax({
        url : "web/evaluate/add.action",  
        type: 'POST',  
        data: $(obj).parents("form").serialize(),  
        async: false,  
        success : function() {  
            window.location.href="buy/custom/order.jsp";
        }
    }); 
	
}

//获取url 中参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
    	 return  unescape(r[2]);
     }else{
    	 return null;
     }
}
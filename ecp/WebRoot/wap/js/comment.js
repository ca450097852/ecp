
$(document).ready(function(){
	
	 $("#evalType").val(1);
	 $(".order-list-Below ul li").click(
	    function(){
	        var num = $(this).index()+1;
	        var len = $(this).index();
	        var thats = $(this).parent(".order-list-Below ul").find("li");

            $(thats).removeClass("on");
            $(thats).eq(len).addClass("on");
            
            $("#evalType").val(num);
	    }
	);
	

});

var basePath;
var base64;
var count=0;
var form=$("#fileForm");
var flag=0;
$(function() {

	orderDetailId = GetQueryString("orderDetailId");
	orderId = GetQueryString("orderId");
	goodsId = GetQueryString("goodsId");
	
	var op = '<input type="hidden" name="orderId" value='+orderId +'></input>\
	<input type="hidden" name="orderDetailId" value='+orderDetailId +'></input>\
	<input type="hidden" name="goodsId" value='+goodsId +'></input>\
	<input type="hidden" name="evalSide" value="1"></input>';
	
	$("#hiddenDiv").html(op);
	
	formbind();
			
	
	  
});

function formbind(){
	 var basePath;
	 var base64;
	 var count=0;
	 var form=$("#fileForm");
	 var flag=0;

	 FastClick.attach(document.body);
	 $uploaderFiles = $("#uploaderFiles");
	 $gallery = $("#gallery");
	 $galleryImg = $("#galleryImg");
	// 允许上传的图片类型
		var allowTypes = [ 'image/jpg', 'image/jpeg', 'image/png', 'image/gif' ];
		// 1024KB，也就是 1MB
		var maxSize = 1024 * 1024;
		// 图片最大宽度
		var maxWidth = 300;
		// 最大上传图片数量
		var maxCount = 3;
		
		$('.js_file').on('change', function(event) {
			if(count>=maxCount){
			$.alert({
							text : '只允许上传3张图片'
						});
						return;
			}
			
				var files = event.target.files;
				// 如果没有选中文件，直接返回
				if (files.length === 0) {
					return;
				}
				
				for (var i = 0, len = files.length; i < len; i++) {
					var file = files[i];
					var reader = new FileReader();
					// 如果类型不在允许的类型范围内
					if (allowTypes.indexOf(file.type) === -1) {
						$.alert({
							text : '该类型不允许上传'
						});
						form[0].reset();
						continue;
					}
 					if (file.size > maxSize) {
 						$.alert({
 							text : '图片太大，不允许上传'
 						});
 						form[0].reset();
 						continue;
 					}
					reader.onload = function(e) {
						var img = new Image();
						img.onload = function() {
							// 不要超出最大宽度
							var w = Math.min(maxWidth, img.width);
							// 高度按比例计算
							var h = img.height * (w / img.width);
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							// 设置 canvas 的宽度和高度
							canvas.width = w;
							canvas.height = h;
							ctx.drawImage(img, 0, 0, w, h);
							 base64 = canvas.toDataURL('image/png');

							// 插入到预览区
							var $preview = $('<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url('
									+ base64 + ')"><div class="weui-uploader__file-content">0%</div></li>');
							flag=1;
							$('.weui-uploader__files').append($preview);
							
							// 然后假装在上传，可以post base64格式，也可以构造blob对象上传，也可以用微信JSSDK上传
							var progress = 0;
							function uploading() {
								$preview.find('.weui-uploader__file-content').text(++progress + '%');
								if (progress < 100) {
									setTimeout(uploading, 30);
								} else {
									// 如果是失败，塞一个失败图标
									//$preview.find('.weui-uploader__file-content').html('<i class="weui_icon_warn"></i>');
									$preview.removeClass('weui-uploader__file_status')
											.find('.weui-uploader__file-content')
											.remove();
								}
							}
							setTimeout(uploading, 30);
						};
						img.src = e.target.result;
					};
					reader.readAsDataURL(file);
					count++;
				}
			});
			
		$uploaderFiles.on("click", "li", function() {
          index = $(this).index();
//          alert(index);
          $galleryImg.attr("style", this.getAttribute("style"));
          $gallery.fadeIn(100);
        });
        
        $gallery.on("click", function() {
          $gallery.fadeOut(100);
        });
			
		//删除图片 删除图片的代码也贴出来。
        $(".weui-gallery__del").click(function() { //这部分刚才放错地方了，放到$(function(){})外面去了
          console.log('删除');
          $uploaderFiles.find("li").eq(index).remove();
          count=0;
        });
				
        $("#files1").change(function(){  
            $("#filesDiv1").hide();  
        }); 
        
        $("#files2").change(function(){  
        	$("#filesDiv2").hide();  
        }); 
        
        $("#files3").change(function(){  
        	$("#filesDiv3").hide();  
        }); 
}

function inputReset(){
	var op='<div class="weui-uploader__input-box" id="filesDiv1" >\
				<input  class="weui-uploader__input js_file" id="files1" name="files" type="file" accept="image/*" multiple></div>\
			<div class="weui-uploader__input-box" id="filesDiv2">\
				<input  class="weui-uploader__input js_file" id="files2" name="files" type="file" accept="image/*" multiple></div>\
			<div class="weui-uploader__input-box" id="filesDiv3">\
				<input  class="weui-uploader__input js_file" id="files3" name="files" type="file" accept="image/*" multiple></div>';
	$('.weui-uploader__files').html('');
	$("#inputReset").html(op);  
	formbind();
}

function onkeydownContent(){
	var evalContent=$("#evalContent").val();
	$("#evalContentNum").html(evalContent.length);
}

function submit(obj){
	var evalContent=$("#evalContent").val();
	var num=evalContent.length;
	if(num<1){
		 $.toptip('评价内容不能为空！', 'warning');
	     $("#evalContent").focus();
	     return;
	}else if(num>200){
		 $.toptip('评价内容不能超过200个字！', 'warning');
	     $("#evalContent").focus();
	     return;
	}
	
	var s11 = $("input[type='checkbox']").is(':checked');
	if(s11){
		$("#evalWay").val(2);
	}else{
		$("#evalWay").val(1);
	}
	
	
	
	
	var form = $(obj).parents("form").serialize();
	console.log(form);
//	return;
	$("#fileForm").ajaxSubmit(function(data){ 
		var rows = JSON.parse(data); 
		for(var i= 0 ; i < rows.length; i++){
			var img_html='<input type="hidden" name="evaluatePic" value="/ecpFiles/evaluate/'+ rows[i] +'"/><div>';
			$("#hiddenDiv").append(img_html);
		}

		 $("#evaluatePic").val(data);
		 $.ajax({
	        url : "../wap/evaluate/add.mobile",  
	        type: 'POST',  
	        data: $(obj).parents("form").serialize(),  
	        async: false,  
	        success : function() {  
	        	$.toast("评价成功!");
		        window.location.href="all_orders.jsp?tab=5";
	        }
	    }); 
    });   
	
//	form[0].submit(function(){
//		event.preventDefault();
//	});
	
	return;
    $.ajax({
        url : "../wap/evaluate/evaluateAdd.mobile",  
        type: 'POST',  
        data: $(obj).parents("form").serialize(),  
        async: false,  
        success : function() {  
//            window.location.href="buy/custom/order.jsp";
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
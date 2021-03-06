$(function(){
	$("#leftAddressId").addClass("active");
	loadAddressList() ;
	reset();
	
});

//添加、修改地址
function submit(){
	var addrId = $("#addrId").val();
	var recipient = $("#recipient").val();
	var mobile = $("#mobile").val();
	var telephone = $("#telephone").val();
	var postCode = $("#postCode").val();
	var input_province = $("#input_province").val();
	var input_city = $("#input_city").val();
	var input_area = $("#input_area").val();
	var addr = $("#addr").val();
	var count = 0 ;
	var url = '';
	$("#recipientSpan").empty();
	$("#mobileSpan").empty();
	$("#telephoneSpan").empty();
	$("#postCodeSpan").empty();
	$("#addrAreaSpan").empty();
	$("#addrSpan").empty();
	
	if(recipient!=null && recipient!=""){
		if(recipient.length > 50){
			$("#recipientSpan").html('<font color="red">收件人最长为50字符！</font>');
			count++ ;
		}
	}else{
		$("#recipientSpan").html('<font color="red">收件人不能为空！</font>');
		count++ ;
	}
	if(mobile!=null && mobile!=""){
		if(mobile.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/) == null){
			$("#mobileSpan").html('<font color="red">手机号不合法！</font>');
			count++ ;
		}
	}else{
		$("#mobileSpan").html('<font color="red">手机号不能为空！</font>');
		count++ ;
	}
	if(telephone!=null && telephone!=""){
		if(telephone.match(/^(0\\d{2}-\\d{8}(-\\d{1,4})?)|(0\\d{3}-\\d{7,8}(-\\d{1,4})?)$/) == null){
			$("#telephoneSpan").html('<font color="red">电话号码不合法！</font>');
			count++ ;
		}
	}
	if(postCode!=null && postCode!=""){
		if(postCode.match(/^[1-9]\d{5}$/) == null){
			$("#postCodeSpan").html('<font color="red">邮政编码不合法！</font>');
			count++ ;
		}
	}else{
		$("#postCodeSpan").html('<font color="red">邮政编码不能为空！</font>');
		count++ ;
	}
	if(input_province==""){
		$("#addrAreaSpan").html('<font color="red">请选择省！</font>');
		count++;
	}
	if(input_city==""){
		$("#addrAreaSpan").html('<font color="red">请选择市！</font>');
	}
	if(addr!=null && addr!=""){
		if(addr.length > 100){
			$("#addrSpan").html('<font color="red">地址超长！</font>');
			count++ ;
		}
	}else{
		$("#addrSpan").html('<font color="red">地址不能为空！</font>');
		count++;
	}
	if(count>0){
		return;
	}
	
	if(addrId == null || addrId == ''){//新增
		url = "web/memberAddr/add.action" ;
	}else{//修改
		url = "web/memberAddr/update.action" ;
	}
	
	if(url != null&&url!= ""){
		$.ajax({
			   type: "POST",
			   url: url,
			   async : false ,
			   data : {"addrId":addrId,"addrArea":input_province+','+input_city+','+input_area,"addr":addr,"telephone":telephone,"mobile":mobile,"postCode":postCode,"recipient":recipient},
			   success: function(data){
				   location.reload(true);   
				   $(document).scrollTop(0);
			   }
			});
	}else{
		alert("系统错误");
	}
		
}

function reset(){
	$("#addrId").val(null);
	$("#recipient").val(null);
	$("#mobile").val(null);
	$("#telephone").val(null);
	$("#postCode").val(null);
	$("#input_province").val(null);
	$("#input_city").val(null);
	$("#input_area").val(null);
	$("#addr").val(null);
	
	$("#recipientSpan").empty();
	$("#mobileSpan").empty();
	$("#telephoneSpan").empty();
	$("#postCodeSpan").empty();
	$("#addrAreaSpan").empty();
	$("#addrSpan").empty();
	
	//$("#newad").html("新增地址");
}

//加载地址列表
function loadAddressList(){
	$("#addressListId").empty();
	$.ajax({
		   type: "POST",
		   url: "web/memberAddr/list.action",
		   dataType:"json" ,
		   success: function(data){
			   addressListHtml(data) ;
		   }
		});
}

//获取地址列表html
function addressListHtml(data){
	if(data != null && data.length != 0 ){
		var op = '\
		<!-- 标题 -->\
		<div class="am-cf am-padding">\
			<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">地址管理</strong> / <small>Address&nbsp;list</small></div>\
		</div>\
		<hr/>\
		<ul class="am-avg-sm-1 am-avg-md-3 am-thumbnails">\
		<!-- 这里添加地址列表 -->	' ;
		for(var i = 0 ;i<data.length;i++){
			op+=addressDetail(data[i]);
		}
		op += '\
		</ul>\
		<div class="clear"></div>' ;
		
		$('#addressListId').html(op);
	}
}

function addressDetail(address){
	var op = '' ;

	var mobile = address.mobile ;
	var a = mobile.substr(0, 3) ;
	var b = mobile.substr(7, 10) ;
	mobile = a +'****' + b ;
	
	var addrArea = address.addrArea;
	
	if(addrArea == null || addrArea == ""){
		return op ;
	}
	
	addrArea = addrArea.split(',');
	var province = addrArea[0];
	var city = addrArea[1];
	var dist = '' ;
	if(addrArea.length >2){
		dist = addrArea[2];
	}
	
	if (address.addrDefault==0) {//默认地址
		op+='<li class="user-addresslist defaultAddr">';
	}else{
		op+='<li class="user-addresslist">';
	}
	op += '\
		<span class="new-option-r" onclick="toDefaultAddr(this)"><i class="am-icon-check-circle"></i>默认地址</span>\
		<input type="hidden" name="addrId" value="'+address.addrId+'"></input>\
		<p class="new-tit new-p-re">\
			<span class="new-txt">'+ address.recipient +'</span>\
			<span class="new-txt-rd2">'+ mobile +'</span>\
		</p>\
		<div class="new-mu_l2a new-p-re">\
			<p class="new-mu_l2cw">\
				<span class="title">地址：</span>\
				<span class="province">'+province+'</span>\
				<span class="dist">'+dist+'</span>\
				<span class="street">'+address.addr+'</span></p>\
		</div>\
		<div class="new-addr-btn">\
			<a href="javascript:void(0);" onclick = "editClick(this)"><i class="am-icon-edit"></i>编辑</a>\
			<span class="new-addr-bar">|</span>\
			<a href="javascript:void(0);" onclick ="delClick(this)"><i class="am-icon-trash"></i>删除</a>\
		</div>\
	</li>' ;
	
	return op ;
}

//删除地址
function delClick(obj){
	var addrId = $(obj).parent().parent(".user-addresslist").children("input").val();
	console.log(addrId);
	layer.confirm('真的要删除吗?', {icon: 3, title:'提示'}, function(index){
		  //do something
		$.ajax({
			   type: "POST",
			   url: "web/memberAddr/delete.action",
			   data:{"ids":addrId} ,
			   success: function(msg){
					loadAddressList() ;
					reset();
			   }
			});
		  
		  layer.close(index);
		});
	
}

//修改地址
function editClick(obj){
	var addrId = $(obj).parent().parent(".user-addresslist").children("input").val();
	$.ajax({
		   type: "POST",
		   url: "web/memberAddr/list.action",
		   data:{"addrId":addrId} ,
		   dataType:"json" ,
		   success: function(data){
			   
				var addrArea = data[0].addrArea;
				addrArea = addrArea.split(',');
				var province = addrArea[0];
				var city = addrArea[1];
				var dist = null ;
				console.log("length:"+addrArea.length);
				
				if(addrArea.length >2){
					dist = addrArea[2];
				}
				console.log(dist);
			   
				$("#addrId").val(data[0].addrId);
				$("#recipient").val(data[0].recipient);
				$("#mobile").val(data[0].mobile);
				$("#telephone").val(data[0].telephone);
				$("#postCode").val(data[0].postCode);
				$("#input_province").val(province);
				$("#input_province").change();
				$("#input_city").val(city);
				$("#input_city").change();
				$("#input_area").val(dist);
				$("#addr").val(data[0].addr);
				
				//$("#newad").html("修改地址");
				
				var h = $(document).height()-$(window).height();
				$(document).scrollTop(h);

		   }
		});
}

//设置默认地址
function toDefaultAddr(obj){
	var addrId = $(obj).parent(".user-addresslist").children("input").val();
	$.ajax({
		   type: "POST",
		   url: "web/memberAddr/toDefaultAddr.action",
		   data:{"addrId":addrId} ,
		   success: function(msg){
			   $(obj).parent('.user-addresslist').addClass("defaultAddr").siblings().removeClass("defaultAddr");
		   }
	});
	
}

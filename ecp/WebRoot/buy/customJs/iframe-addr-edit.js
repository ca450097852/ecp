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
				   window.parent.loadAddressList();
				   window.parent.reloadMethod();
				   window.parent.layer.closeAll();
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
}
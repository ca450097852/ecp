
$(function(){
	
	init();
	
	findStsNum();
	 
	recommendInfo();
	
});

function getHtmlList(data){
	for(var i=0 ; i< data.length ; i++){
		var op = '<span class="weui-badge" style="position: absolute;top:5px;right:10px; font-size:10px;">'+data[i]+'</span>' ;
		if(i==0&data[i]!=0){//待付款订单
			 $('#tab2').html(op);
		}else if(i==1&data[i]!=0){//待发货订单
			 $('#tab3').html(op);
		}else if(i==2&data[i]!=0){//待收货订单
			 $('#tab4').html(op);
		}else if(i==3&data[i]!=0){//待评价订单
			 $('#tab5').html(op);
		}
	}
}

//销售信息
function recommendInfo(){
	var queryParam = {"params[state]":"1"};
	$.ajax({
		   type: "POST",
		   url: "../wap/recommendGoods/info.mobile",
		   data : queryParam ,
		   dataType:"json" ,
		   success: function(data){
			   if(data){
				   $('#recommendGoods').html(data.recommendGoods);
				   $('#recommendOrders').html(data.recommendOrders);
				   $('#recommendMoney').html(data.recommendMoney);
				   
			   }		   
		   }
		});
}

//刷新订单数字
function findStsNum(){
	$.ajax({
		   type: "POST",
		   url: "../wap/order/findStsNum.mobile",
		   dataType:"json" ,
		   success: function(data){
			   getHtmlList(data);
		   }
		});
}

//初始化页面
function init(){
	
	 if($('#nickName').val()==""){
		   	$.toptip('请先登录', 'warning');
		   	setTimeout('window.location.href="login.jsp"', 1000 );
		    }
		    getLevel($('#levelId').val());
		    if($('#phtotUrl').val()!=""){
		    $("#headPhoto").attr('src',$('#filePath').val()+$('#phtotUrl').val()); 
		    }else{
		    $("#headPhoto").attr('src','upload/headimg.jpg'); 
		    }
	
}

//获取level对象
function getLevel(levelId){
	$.ajax({
		url : 'integral/level.mobile',
  	  	type: "POST",
   	 	data: {"id":levelId},
    	dataType: "json",
    	success: function (result) {
    	if(result){
   	 	$('#levelName').html(result.levelName+':'+result.score+'积分');
    	}else{
    	$('#levelName').html('暂无等级数据');
    	}
    	}
		});
}

function editMemberInfo(){
	$("#memberInfo").popup();
	//window.location.href='upload_tx.jsp';	
}

//退出登录
function exit(){
$.mobiles({
			mobiles: [{
			text: "确定退出",
			onClick: function() {
				$.ajax({
					url : 'member/logout.mobile',
					type: "POST",
					dataType: "Text",
					success: function (result) {
						$.toptip(result, 2000, 'success');
						setTimeout('window.location.href="login.jsp"', 1000 );
					}
		});
}
}]
});
}


























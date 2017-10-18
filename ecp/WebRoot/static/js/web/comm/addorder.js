var tomcatPath = "";
var memberId = 0;
var goodsIds = "";
$(function(){
	
	$("#test").ProvinceCity();
	tomcatPath = $('#tomcatPath').val();//
	memberId = $('#memberId').val();//
	goodsIds = $('#goodsIds').val();//
	
	getMemberAddr();//获取收货地址
	getGoodsList()//获取商品清单
	
});
//获取商品清单
function getGoodsList(){
	var params = {};
	params['params[memberId]'] = memberId;
	params['params[goodsIds]'] = goodsIds;
	$.ajax({
		url : 'webcart/page.action',
		async : false,
		data : params,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			var total = result.total;
			total = parseInt(total);
			var html = "";
			var goodsName = "";//产品名称
			var goodsCount = "";//数量
			var saledPrice = "";//销售价
			var goodsImg = "";//产品主图
			var goodsId = "";//产品ID
			var goodsPrice =0;//商品价格
			var totalPrice =0;//总价
			if(result.rows.length>0){
				for ( var i = 0; i < result.rows.length; i++) {
					var cart = result.rows[i];
					goodsName = cart.goodsName;
					if(goodsName.length>10){goodsName=goodsName.substring(0, 8)+"..."};
					goodsCount= cart.goodsCount;
					saledPrice= cart.saledPrice;
					
					goodsImg= cart.goodsImg;
					goodsImg= goodsImg==null?"":goodsImg;
					
					goodsId = cart.goodsId;
					
					if(goodsImg=="" || goodsImg=="null"){
						 goodsImg="static/images/web/comm/goods/nopic.jpg";
					 }else{
						 goodsImg=tomcatPath+goodsImg;
					 }
					 var img = "<img src=\""+goodsImg+"\" style=\"width: 100px;height: 100px;\">";
					 
					 goodsPrice = parseInt(goodsCount)*parseInt(saledPrice);
					 totalPrice+=goodsPrice;
					 
					 html+="<tr align=\"center\"><td>"+img+"</td><td>"+goodsName+"</td><td>￥"+saledPrice+"</td><td>"+goodsCount+"</td><td>￥"+goodsPrice+"</td></tr>";
					
				}
				html+="<tr align=\"center\"><td align=\"right\" colspan=\"4\">总价：</td><td>￥"+totalPrice+"</td></tr>";
				$('#goostable').append(html);
				
				$('#orderAmount').val(totalPrice);
				$('#totalAmount').val(totalPrice);
			}
		}	
	});
}
//获取收货地址
function getMemberAddr(){
	var params = {};
	params['params[memberId]'] = memberId;
	params['order'] = 'asc';
	params['sort'] = 'addr_default';
	$.ajax({
		url : 'web/memberAddr/page.action',
		async : false,
		data : params,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			var total = result.total;
			total = parseInt(total);
			
			var memberaddr = "";
			if(result.rows.length>0){
				var addrs = result.rows[0];
				
				memberaddr+="<tr><td class=\"ftbstyle1\">收货人：</td><td>"+addrs.memberName+" </td></tr>";
				memberaddr+="<tr><td class=\"ftbstyle1\">地址：</td><td>"+addrs.addrArea+addrs.addr+" </td></tr>";
				memberaddr+="<tr><td class=\"ftbstyle1\">手机：</td><td>"+addrs.mobile+" </td></tr>";
				memberaddr+="<tr><td class=\"ftbstyle1\">电话：</td><td>"+addrs.telephone+" </td></tr>";
				memberaddr+="<tr><td class=\"ftbstyle1\">邮编：</td><td>"+addrs.postCode+" </td></tr>";
				
				$('#memberaddrs').html(memberaddr);
			}else{
				
				toaddAddr();//打开添加收货地址窗口
			}
		}	
	});
	
	
}

//打开添加收货地址窗口
function toaddAddr(){
	
	var index = layer.open({
	    type: 1, //page层
	    area: ['550px','450px'],
	    title: '添加收货地址',
	    shade: 0.6, //遮罩透明度
	    shift: 1, //0-6的动画形式，-1不开启
	    content: $('#add_member_addr') //捕获的元素
	});
	
	layer.style(index, {
	    top: '150px'
	});
	
	$('#addrForm').form('reset');
}
//提交收货地址表单
function submitFormAddr(){
	
	var objs = $('#add_member_addr input[require=true]');
	
	if(objs){
		
		for(var i=0;i<objs.length;i++){
			if($(objs[i]).val()==''){
				layer.msg($(objs[i]).attr('message'), {
				    offset: 0,
				    shift: 5
				});
				return;
			}
		}
	}
	
	/**/
	$('#addrForm').form('submit', {
		url : 'web/memberAddr/add.action',
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			layer.closeAll();//关闭窗口
			getMemberAddr();//获取收货地址
		}
	});
	
}

//打开添加发票窗口
var fp_index;
function toaddInvoice(num){
	var objs = $('input[name=invoiceType]');
	if(num==1){
		$('#invoiceType2').attr('checked','checked')
		var index = layer.open({
		    type: 1, //page层
		    area: ['550px','300px'],
		    title: '添加发票信息',
		    shade: 0.6, //遮罩透明度
		    shift: 1, //0-6的动画形式，-1不开启
		    content: $('#add_member_invoice'), //捕获的元素
		    cancel: function(index){
				if($('#invoiceTop').val()==''){
					return false; 
				}else{
					return true; 
				}
			}
		});
		
		layer.style(index, {
		    top: '150px'
		});
		fp_index = index;
		$('#invoiceForm').form('reset');
			
	}else{
		$('#invoiceType1').attr('checked','checked')
		$('#yesfapiao').html("");
	}
	
	
}

//关闭添加发票窗口
function closeInvoiceForm(){
	if($('#for_invoiceTop').val()==''){
		$('#invoiceTop').val('');
		$('#invoiceTop').val('');
		
		
		$('#invoiceType1').attr('checked','checked')
		
	}
	
	layer.close(fp_index);
}

//编辑发票信息
function addMemberInvoice(){
	
	
	var objs = $('#add_member_invoice input[require=true]');
	
	if(objs){
		
		for(var i=0;i<objs.length;i++){
			if($(objs[i]).val()==''){
				layer.msg($(objs[i]).attr('message'), {
				    offset: 0,
				    shift: 5
				});
				return;
			}
		}
	}
	
	var title = $('#for_invoiceTop').val();
	var content = $('#for_invoiceContent').val();
	$('#invoiceTop').val(title);
	$('#invoiceTop').val(content);
	
	$('#yesfapiao').html("<tr><td class=\"ftbstyle1\">发票抬头："+title+"&nbsp;&nbsp;</td></tr>");
	layer.closeAll();//关闭窗口
}
















/*
$('#addrForm').form('submit', {
	url : 'web/memberAddr/add.action',
	onSubmit : function(result) {
		return $(this).form('validate');//对数据进行格式化
	},
	success : function(result) {
		var data = eval('('+result+')');
		layer.confirm(data.message,{'icon':4,btn:['继续添加','返回列表']},function(index){
			//第一个按钮单击事件
			layer.close(index);
			$('#goodsForm').form('reset');
			$('#spType').html('');
			$('#brandText').html('');
		},function(index){
			//第二个按钮单击事件
			window.location.href="web/goods/GoodsList.jsp";
		});
	}
});
*/

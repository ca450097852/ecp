var tomcatPath = "";
var memberId = 0;
$(function(){
	
	//获取商品
	tomcatPath = $('#tomcatPath').val();//
	memberId = $('#memberId').val();//
	
	if(memberId==0){//未登录
		
		$("#islogin").html("<a href=\"javascript:void(0);\" onclick=\"javascript:memberLogin();\">用户登录</a>");
		showCookie();//显示cookie购物车数据
		
	}else{//已登录
		$("#islogin").html("<a href=\"javascript:void(0);\" onclick=\"javascript:logout();\">用户退出</a>");
		
		addCartFromCookie();//将cookie保存的购物车信息，添加到数据库-购物车表
		
		showShoppingCart();//显示后台购物车表数据
	}
	
});

//显示cookie购物车数据
function showCookie(){
	 var cart_cookieNum =0;
	 var html = "<tr align=\"center\"><th>选择</th><th>商品图片</th><th>商品名称</th><th>单价</th><th>商品数量</th><th>价格</th></tr>";
	 var goodsPrice =0;//商品价格
	 var totalPrice =0;//总价
	 try{
		 if($.cookie("cart_cookieNum") != null){
			 var cookieNum=$.cookie("cart_cookieNum");
			 if(cookieNum=="" || cookieNum=="null"){
				 cookieNum="0";
			 }
			 cart_cookieNum = parseInt(cookieNum);
			 for(var i=1;i<=cart_cookieNum;i++){
				 var goodsImg = $.cookie("goodsImg"+i);
				 if(goodsImg=="" || goodsImg=="null"){
					 goodsImg="static/images/web/comm/goods/nopic.jpg";
				 }else{
					 goodsImg=tomcatPath+goodsImg;
				 }
				 var img = "<img src=\""+goodsImg+"\" style=\"width: 100px;height: 100px;\">";
				 goodsPrice = parseInt($.cookie("goods_Num"+i))*parseInt($.cookie("saledPrice"+i));
				 
				 totalPrice+=goodsPrice;
				 
				 var count = "<input onchange=\"modifycart("+i+");\" value=\""+$.cookie("goods_Num"+i)+"\" id=\"buy-num"+i+"\" class=\"text\">";
				 
				 var s_prise = " <input id=\"s_prise"+i+"\" value=\""+$.cookie("saledPrice"+i)+"\" style=\"border: none;\" readonly=\"readonly\"/>";
				 
				 var a_prise = " <input id=\"a_prise"+i+"\" value=\""+goodsPrice+"\" style=\"border: none;\" readonly=\"readonly\"/>";
				 
				 html+="<tr align=\"center\"><td><input type=\"checkbox\" name=\"goodsId\" value=\""+$.cookie("goodsId"+i)+"\"/></td><td>"+img+"</td><td>"+$.cookie("goodsName"+i)+"</td><td>￥"+s_prise+"</td><td>"+count+"</td><td>￥"+a_prise+"</td></tr>";
				 
				
			 }
			 html+="<tr align=\"right\"><td colspan=\"5\">总价：￥<input id=\"totalPrice\" value=\""+totalPrice+"\" style=\"border: none;\" readonly=\"readonly\"/></td></tr>";
			 
		 }
		 $("#cart_table").html(html);
		
	 }catch (e){
	 	//cart_cookieNum=e.message;
	 }

}
//显示后台购物车表数据
function showShoppingCart(){
	//获取后台-购物车表数据
	var params = {};
	params['params[memberId]'] = memberId;
	$.ajax( {
		url : 'webcart/page.action',
		async : false,
		data : params,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			
			var total = result.total;
			total = parseInt(total);
			var cartId = "";//购物车ID
			var goodsName = "";//产品名称
			var goodsCount = "";//市场价
			var saledPrice = "";//销售价
			var goodsImg = "";//产品主图
			var goodsId = "";//产品ID
			var html = "<tr align=\"center\"><th><input type=\"checkbox\" onclick=\"selectAll();\" />选择</th><th>商品图片</th><th>商品名称</th><th>单价</th><th>商品数量</th><th>价格</th></tr>";
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
						
						cartId = cart.cartId;
						goodsId = cart.goodsId;
						
						if(goodsImg=="" || goodsImg=="null"){
							 goodsImg="static/images/web/comm/goods/nopic.jpg";
						 }else{
							 goodsImg=tomcatPath+goodsImg;
						 }
						 var img = "<img src=\""+goodsImg+"\" style=\"width: 100px;height: 100px;\">";
						 
						 goodsPrice = parseInt(goodsCount)*parseInt(saledPrice);
						 
						 totalPrice+=goodsPrice;
						 
						 var count = "<input onchange=\"modify("+i+","+cartId+","+goodsId+");\" value=\""+goodsCount+"\" id=\"buy-num"+i+"\" class=\"text\">";
						 
						 var s_prise = " <input id=\"s_prise"+i+"\" value=\""+saledPrice+"\" style=\"border: none;\" readonly=\"readonly\"/>";
						 
						 var a_prise = " <input id=\"a_prise"+i+"\" value=\""+goodsPrice+"\" style=\"border: none;\" readonly=\"readonly\"/>";
						 
						 html+="<tr align=\"center\"><td><input type=\"checkbox\" name=\"goodsId\" value=\""+goodsId+"\"/></td><td>"+img+"</td><td>"+goodsName+"</td><td>￥"+s_prise+"</td><td>"+count+"</td><td>￥"+a_prise+"</td></tr>";
						
				}
				 html+="<tr align=\"right\"><td colspan=\"5\">总价：￥<input id=\"totalPrice\" value=\""+totalPrice+"\" style=\"border: none;\" readonly=\"readonly\"/></td></tr>";
				 $("#cart_table").html(html);
			}
			
		}
	});
	
}
//全选
var isselected=0;
function selectAll(){
	if(isselected==0){
		$(":checkbox").attr("checked","checked");
		isselected=1;
	}else{
		$(":checkbox").removeAttr("checked");
		isselected=0;
	}
	
}
//修改商品数量
function modify(mun,cartId,goodsId){
	var baseMun = $("#buy-num"+mun).val();
	baseMun = parseInt(baseMun);
	$("#buy-num"+mun).val(baseMun);
	
	var s_prise = $("#s_prise"+mun).val();//原商品单价
	s_prise = parseInt(s_prise);
	var a_prise = $("#a_prise"+mun).val();//原商品价格
	a_prise = parseInt(a_prise);
	var totalPrice = $("#totalPrice").val();//原商品总价
	totalPrice = parseInt(totalPrice);
	
	var newgoodsPrice = baseMun*s_prise;
	$("#a_prise"+mun).val(newgoodsPrice);//新商品价格
	
	var newtotalPrice = totalPrice-a_prise+newgoodsPrice;
	$("#totalPrice").val(newtotalPrice);//新商品总价
	
	//更新后台购物车表；
	var shoppingcart={};
	shoppingcart['cartId'] = parseInt(cartId);
	shoppingcart['goodsId'] = parseInt(goodsId);
	shoppingcart['goodsCount'] = baseMun;
	$.ajax({
		url : 'webcart/updateCount.action',
        type: "POST",
        data: shoppingcart,
        dataType: "TEXT"
    });
}

//修改cookie商品数量
function modifycart(mun){
	var baseMun = $("#buy-num"+mun).val();
	baseMun = parseInt(baseMun);
	$("#buy-num"+mun).val(baseMun);
	
	var s_prise = $("#s_prise"+mun).val();//原商品单价
	s_prise = parseInt(s_prise);
	var a_prise = $("#a_prise"+mun).val();//原商品价格
	a_prise = parseInt(a_prise);
	var totalPrice = $("#totalPrice").val();//原商品总价
	totalPrice = parseInt(totalPrice);
	
	var newgoodsPrice = baseMun*s_prise;
	$("#a_prise"+mun).val(newgoodsPrice);//新商品价格
	
	var newtotalPrice = totalPrice-a_prise+newgoodsPrice;
	$("#totalPrice").val(newtotalPrice);//新商品总价
	
	//更新cookie购物车；
	$.cookie("goods_Num" + mun, baseMun, { expires: 1 , path: '/'});
	
}

//将cookie保存的购物车信息，添加到数据库-购物车表
function addCartFromCookie(){

if($.cookie("cart_cookieNum") != null){
	 var cookieNum=$.cookie("cart_cookieNum");
	 if(cookieNum=="" || cookieNum=="null"){
		 cookieNum="0";
	 }
	 var cart_cookieNum = parseInt(cookieNum);
	 for(var i=1;i<=cart_cookieNum;i++){
		 
		 //alert($.cookie("goodsId"+i));
		 var shoppingcart={};
		 shoppingcart['goodsId'] = parseInt($.cookie("goodsId"+i));
		 shoppingcart['goodsCount'] = $.cookie("goods_Num"+i);
		 shoppingcart['memberId'] = memberId;
		 /* */
		 $.ajax({
				url : 'webcart/add.action',
		        type: "POST",
		        data: shoppingcart,
		        dataType: "TEXT",
		        success: function (result) {
			 		mallClearItem(i);//清除cookie购物项
		        }
		    });
		   
	 }
	 //清除cookie购物车数据；
	 $.cookie("cart_cookieNum", "", { expires: 1, path: '/' });
	 $.cookie("cart_countNum", "", { expires: 1, path: '/' });
	 
	 
 }
}

//清除购物项
function mallClearItem(num)
{
   //清除商品ID
   $.cookie("goodsId" + num, "", { expires: 1 , path: '/'});
   //清除商品名称
   $.cookie("goodsName" + num, "", { expires: 1 , path: '/'});
   //清除商品购物数量
   $.cookie("goods_Num" + num, "", { expires: 1 , path: '/'});
   //清除商品价格
   $.cookie("saledPrice" + num, "", { expires: 1 , path: '/'});
   //清除商品图片
   $.cookie("goodsImg" + num, "", { expires: 1 , path: '/'});
   //清除商品当前库存
   $.cookie("inventory" + num, "", { expires: 1 , path: '/'});
   //清除商品所属商店ID
   $.cookie("shopId" + num, "", { expires: 1 , path: '/'});
	   
	    
}


//去结算
function toplay(){
	if(memberId==0){//未登录，打开会员登录窗口
		memberLogin();
	}else{//已登录，到订单添加页面；
		
		var goodsIds='';
		$(":checkbox").each(function(){
			if($(this).attr('checked')=='checked'){
				if($(this).val()!='on'){
					goodsIds+=$(this).val()+',';
				}
			}
		});
		goodsIds = goodsIds.substring(0, goodsIds.length-1);
		
		document.location.href = "addorder.jsp?goodsIds="+goodsIds;
	}
	
}
//打开会员登录窗口
function memberLogin(){
	$("#account").focus();
	var index = layer.open({
	    type: 1, //page层
	    area: ['500px','400px'],
	    title: '您尚未登录',
	    shade: 0.6, //遮罩透明度
	    shift: 1, //0-6的动画形式，-1不开启
	    content: $('.login_main'), //捕获的元素
	});
	
	layer.style(index, {
	    top: '150px'
	});
}


/**
 * 会员登录
 * 
 */
function loginForm(){
	
	if(	$("#account").val()==''){
		alert("请填写登录账号!");
		return;
	}
	
	if(	$("#password").val()==''){
		alert("请填写登录密码!");
		return;
	}
	
	$.ajax({
		url : 'web/member/login.action',
        type: "POST",
        data: $('#memberForm').serialize(),
        dataType: "TEXT",
        success: function (result) {
			layer.closeAll();
			
			document.location.href = "cart.jsp";
        }
    });
	
}



/**
 * 会员退出
 * 
 */
function logout(){
	$.ajax({
		url : 'web/member/logout.action',
        type: "POST",
        data: $('#memberForm').serialize(),
        dataType: "TEXT",
        success: function (result) {
			layer.alert(result, function(index){
				document.location.href = "cart.jsp";
			});
        }
    });
}

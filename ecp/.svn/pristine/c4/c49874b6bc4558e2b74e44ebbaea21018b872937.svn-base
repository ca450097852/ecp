var tomcatPath = "";
var goodsId = "";
var memberId = 0;
var pcount = 0;
$(function(){
	
	//获取商品
	tomcatPath = $('#tomcatPath').val();//
	goodsId = $('#goodsId').val();//商品ID
	memberId = $('#memberId').val();//会员ID
	pcount = $('#pcount').val();//购买数量
	
	
	$.ajax( {
		url : 'webGoods/ns/getGoods.action',
		async : false,
		data : 'goodsId='+goodsId,
		type : 'post',
		dataType : 'json',
		success : function(result) {
			var goods = result;
			if(goods){
				if(memberId!=0){//会员已登录，插入购物车表
					var shoppingcart={};
					 shoppingcart['goodsId'] = parseInt(goodsId);
					 shoppingcart['goodsCount'] = parseInt(pcount);
					 shoppingcart['memberId'] = memberId;
					 $.ajax({
							url : 'webcart/add.action',
					        type: "POST",
					        data: shoppingcart,
					        dataType: "TEXT"
					    });
				}else{
					AddMallCart(goods);//插入cookie购物车
				}
			}
		}
	});
	//showCookie();//打印cookie内容
	
});


//（商品加入购物车前先判断购物车是否已有该商品）;有：数量加1；没有：加入购物车

function AddMallCart(goods)
{
   var buynum=1;
   var flage=0;
   //从页面中获取商品选择的属性规格
   //var get_goods_attr_name=$("#cart_goods_attr_name").val();
   //需求的商品数量
   if($("#pcount").val()!=null&&$("#pcount").val()!="")
   {
	   buynum = parseInt($("#pcount").val());
   }
   if(goodsId!=null&&goodsId!="")
   {
   	  //循环获取购物车里面的商品项
   	  if($.cookie("cart_cookieNum")!=null&&$.cookie("cart_cookieNum")!="")
   	  {
	      var cart_cookieNum = parseInt($.cookie("cart_cookieNum"));
	     // var catr_goods_attr_name=""; //从cookies中获取商品属性值
		  for(var i = 1; i<= cart_cookieNum; i++)
		  {
		    var catrgoods_id=$.cookie("goodsId" + i);
		    if(catrgoods_id!=null&&catrgoods_id!="")
		    {
		      //从cookies中获取商品属性值
		    	
		      //判断购物车里面是否已经含义该商品，如果有包含该商品的话，就讲商品数量加1，否则就加入购物车
		      if(goodsId==catrgoods_id)
		      {
		      		flage=1;
	    			var inventory = goods.inventory;//商品库存量
	    			inventory = parseInt(inventory);
	    			var goodnum=parseInt($.cookie("goods_Num" + i));
	    			if(inventory>=(goodnum+buynum))
	    			{
    				    goodnum=goodnum+buynum;
		    		    $.cookie("goods_Num" + i, goodnum, { expires: 1 , path: '/'});
		    		    
	    			}
		      }
		     
		    }
		  }
	  }
	  if(flage!=1)
	  {
	  	mallSaveCookies(buynum,goods);
	  }
	  
   }
}

//商品的值加入到Cookies中  
function mallSaveCookies(buynum,goods)
{
 	 var cart_cookieNum=0;
 	 var cart_countNum=0;
 	  //商品购买数量
	 var goodnum=buynum;
	 if($.cookie("cart_cookieNum") != null&&$.cookie("cart_cookieNum") != ""){
	 	//从cookie获取商品个数
	    cart_cookieNum = parseInt($.cookie("cart_cookieNum"));
	 }
	 if($.cookie("cart_countNum") != null&&$.cookie("cart_countNum") != ""){
	 	//从cookie获取商品实际个数
	    cart_countNum = parseInt($.cookie("cart_countNum"));
	 }
	 //商品个数加一(cookie数量加1)
   cart_cookieNum=cart_cookieNum+1;
    //商品实际个数加一
   cart_countNum=cart_countNum+1;
   //加入商品ID
   $.cookie("goodsId" + cart_cookieNum, goodsId, { expires: 1 , path: '/'});
   //加入商品名称
   $.cookie("goodsName" + cart_cookieNum, goods.goodsName, { expires: 1 , path: '/'});
   //加入商品购物数量
   $.cookie("goods_Num" + cart_cookieNum, goodnum, { expires: 1 , path: '/'});
   //加入商品价格
   $.cookie("saledPrice" + cart_cookieNum, goods.saledPrice, { expires: 1 , path: '/'});
   //加入商品图片
   $.cookie("goodsImg" + cart_cookieNum, goods.goodsImg, { expires: 1 , path: '/'});
   //加入商品当前库存
   $.cookie("inventory" + cart_cookieNum, goods.inventory, { expires: 1 , path: '/'});

   
   //加入商品所属商店ID
   $.cookie("shopId" + cart_cookieNum, goods.shopId, { expires: 1 , path: '/'});
   
    $.cookie("cart_cookieNum", cart_cookieNum, { expires: 1, path: '/' });
    $.cookie("cart_countNum", cart_countNum, { expires: 1, path: '/' });

}

//读取购物车商品数量
function getCookieNum(){
	 var cart_cookieNum =0;
	 try{
		 if($.cookie("cart_cookieNum") != null){
			 var cookieNum=$.cookie("cart_cookieNum");
			 if(cookieNum=="" || cookieNum=="null"){
				 cookieNum="0";
			 }
			 cart_cookieNum = parseInt(cookieNum);
		 }
		 //$("#cookieNum").html(cart_cookieNum);
		
	 }catch (e){
	 	//cart_cookieNum=e.message;
	 	cart_cookieNum=0;
	 }
}


function showCookie(){
	 var cart_cookieNum =0;
	 try{
		 if($.cookie("cart_cookieNum") != null){
			 var cookieNum=$.cookie("cart_cookieNum");
			 if(cookieNum=="" || cookieNum=="null"){
				 cookieNum="0";
			 }
			 cart_cookieNum = parseInt(cookieNum);
			 for(var i=1;i<=cart_cookieNum;i++){
				 alert("goodsId"+i+"="+$.cookie("goodsId"+i));
				 alert("goodsName"+i+"="+$.cookie("goodsName"+i));
				 alert("goods_Num"+i+"="+$.cookie("goods_Num"+i));
				 alert("saledPrice"+i+"="+$.cookie("saledPrice"+i));
				 alert("shopId"+i+"="+$.cookie("shopId"+i));
			 }
			 
			 
		 }
		 //$("#cookieNum").html(cart_cookieNum);
		
	 }catch (e){
	 	//cart_cookieNum=e.message;
	 }

}


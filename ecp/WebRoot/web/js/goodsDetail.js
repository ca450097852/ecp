var basePath;
var filePath;
var goodsId;
//var modelId = "";
var goodsModel;
var param ;

$(function() {
	$('.left-nav').hide();
	$('#shale_hidden').hide();
	basePath = $('#basePath').val();
	filePath = $('#filePath').val();
	goodsId = $('#goodsId').val();
	

	getPicHtml();// 图片设置，规格查询list

	//加载商品详情
	$.ajax({
		type : "POST",
		url : "webGoods/ns/getGoods.action",
		data : {
			"goodsId" : goodsId
		},
		dataType : "json",
		async : false,
		success : function(data) {
			console.log(JSON.stringify(data));
			if(data.state!=2){
				goodsId = "";
				alert("此商品未上架！");
				window.location.href="";
			}//0待上架；1上架； 2审核通过；3，审核不通过；4下架；5库存不足
			var op = getBuyHtml(data);
			$('#buyinfo .product-info').html(op);
			getCommentCount();
			getGoodsDescribe(data);
			getshop(data.shopId);
			$("#shopId").val(data.shopId);
			shopHot(data.shopId);
			
		}
	});
	
/*	//默认选中第一个规格
	var firstModelId = $("body .goods-type-box .goods-normal:first").get(0).id;
	if(firstModelId != null ){
		firstModelId = firstModelId.substring(12,firstModelId.length);
		//console.log(firstModelId);
		
		goodsModelChang(firstModelId);
	}*/
	
	//省市区
	$("#city").click(function (e) {
		SelCity(this,e);
	});
	
	//加入购物车
	$('.add-to-cart').on('click', function () {
		if(goodsId == ""){
			layer.msg("商品已下架！");
			return;
		}
		
		/*if (modelId == "") {
			layer.msg("请选择规格！");
			return;
		}*/
		if ($("#memberName").html() == "null") {
			loginLayer();
		} else {
			//加入购物车动画
			var cart = $('.shopping-cart');
	        var imgtodrag = $(this);
	        if (imgtodrag) {
	            var imgclone = imgtodrag.clone()
	                .offset({
	                top: imgtodrag.offset().top,
	                left: imgtodrag.offset().left
	            })
	                .css({
	                	'opacity': '0.5',
	                    'position': 'absolute',
	                    'height': '150px',
	                    'width': '150px',
	                    'z-index': '100'
	            })
	                .appendTo($('body'))
	                .animate({
	                	'top': cart.offset().top + 10,
	                    'left': cart.offset().left + 10,
	                    'width': 75,
	                    'height': 75
	            }, 1000, 'easeInOutExpo');
	            
	            imgclone.animate({
	                'width': 0,
	                    'height': 0
	            }, function () {
	                $(this).detach()
	            });
	        };
	        //加入购物车动画结束
			
			var queryParam = {
				"goodsId" : goodsId,
				"goodsCount" : $('#buyNum').val()
				//"modelId" : modelId
			};
			$.ajax({
				type : "POST",
				url : "webcart/add.action",
				data : queryParam,
				dataType : "text",
				async : false,
				success : function(result) {
					//layer.msg(result);
					shoppingcartNum();
				}
			});
		}
        
    });

	$("#evaluate").click(function() {
		
			//加载评价头部
			$.ajax({
				type : "POST",
				url : "web/evaluate/ns/getEvaluateCount.action",
				data : {"goodsId":goodsId},
				dataType : "json",
				success : function(data) {
					$(".praiseRate").text(data.praiseRate);
					$(".totalEvaluate").text(data.totalEvaluate);
					$(".goodEvaluate").text(data.goodEvaluate);
					$(".commonEvaluate").text(data.commonEvaluate);
					$(".badEvaluate").text(data.badEvaluate);
				}
			});
			//加载评级内容
			param = {"params[goodsId]":goodsId , "rows":20 , "page":1} ;
			var op = getGoodsEvaluate();
			$('.product-info-describe .bd .tabox-02 .comment-content').html(op);
			
			page();//分页
			$(".filePic img").click(function(){
				var dom = $(this).parents("ul");
				layer.photos({
					photos: dom.get(0) ,
					anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				});
				
			});
		
	});

});

//
function comment(index){
	
	
}

//商户信息
function getshop(shopId){
	$.ajax({
		type : "POST",
		url : "web/shop/ns/getShopById.action",
		data : {"shopId":shopId},
		dataType : "json",
		success : function(data) {
			//console.log(JSON.stringify(data));
			var op = '<li>店铺：<strong>'+ data.shopName  +'</strong></li>\
		          <li>地区：<span>'+ data.shopAddr +'</span></li>\
		          <li>入驻时间：<span>'+ subDataString1(data.openTime,10) +'</span></li>' ;
			$(".seller-info").html(op);
		}
	});
}

//企业推荐商品
function shopHot(shopId){
	$.ajax({
		type : "POST",
		url : "webGoods/ns/shopHot.action",
		data : {"shopId":shopId , "number":4}, //number 推荐数
		dataType : "json",
		success : function(data) {
			//console.log("企业推荐商品shopId ======"+shopId);
			//console.log("企业推荐商品 ======"+JSON.stringify(data));
			var op = "" ;
			for(var i=0;i<data.length;i++){
				op += '<li><a href="webGoods/ns/goods.action?goodsId='+ data[i].goodsId +'">\
				<img src="'+ (data[i].goodsImg == (null||"")? "web/protal/images/rank-01.png":filePath+data[i].goodsImg) +'" />\
				<span>'+ subDataString(data[i].goodsName,4) +'</span></a></li>' ;
			}
			$(".seller-promotion").children("ul").html(op);
		}
	});
}

//获取评论数
function getCommentCount(){
	$.ajax({
		type : "POST",
		url : "web/evaluate/ns/getEvaluateCount.action",
		data : {"goodsId":goodsId},
		dataType : "json",
		success : function(data) {
			//console.log(JSON.stringify(data));
			$("#commentCount").text(data.totalEvaluate);
		}
	});
}

function shoppingcartNum() {
	$.ajax({
		type : "POST",
		url : "webcart/find.action",
		dataType : "json",
		async : false,
		success : function(data) {
			$('#shoppingcartNum').html(data.total);
		}
	});
}

function getBuyHtml(data) {
	var op = '<p class="title">'+ data.goodsName + '</p>\
		<p></p>\
		<div class="row-01 bd-r3">\
		  <div class="price-info-left">\
		    <div class="line">\
		      <h4>市场价</h4><i class="old-price">￥'+ data.marketPrice+ '</i>\
		    </div>\
		    <div class="line">\
		      <h4>现价</h4>\
		      <strong class="price" id="saledPrice"><span>￥</span>'+ data.saledPrice+ '</strong>\
		    </div>\
		    <div class="line">\
		      <h4>优惠</h4>\
		      <div class="icon-tips"> <i class="bd-r3">促销</i> <i class="bd-r3">满减</i> </div>\
		      <p>满117元减57.8元；满176元减116.5元,送任意1件；满176元减116.5元,送任意</p>\
		    </div>\
		  </div>\
		  <div class="price-info-right">\
		    <div class="volume-comment">\
		      <p><a href="javascript:void(0);">销量<span>'
			+ data.saledNum
			+ '</span></a></p>\
		      <p><a href="javascript:void(0);">评价<span id="commentCount">'
			+ data.goodsId
			+ '</span></a></p>\
		    </div>\
		    <p class="more-sales">更多优惠<i class="dropdown"></i></p>\
		  </div>\
		</div>\
		<div class="row-02">\
		  <div class="price-info-left">\
		    <div class="line">\
		      <h4>送至</h4>\
		      <p ><strong id="city">广东省-广州市-越秀区</strong><input value="" type="hidden"/><i class="dropdown"></i>（预计'+ getLazyDate(3) +'送达）&nbsp;邮费：<b>包邮</b></p>\
		    </div>\
		    <div class="line goods-type">\
		      <h4>规格</h4>\
		      <div class="goods-type-box">'
			+ data.goodsSpecs
			+ '<div style="clear:both"></div>\
		    </div>\
		    <div class="line quantity">\
		      <h4>数量</h4>\
		      <div class="quantity-inp">\
		        <input type="text" placeholder="1" id="buyNum" value="1" />\
		        <a  onclick="buyNum(1,'
			+ data.inventory
			+ ')" style="cursor:pointer;border-bottom:1px solid #d0d0d0">+</a> <a  onclick="buyNum(0,'
			+ data.inventory
			+ ')" style="cursor:pointer;">-</a> </div>\
		      <p>库存'
			+ data.inventory
			+ '件</p>\
		    </div>\
		    <button class="btn bd-r3 add-to-cart" style="cursor:pointer;">加入购物车</button>\
		    <button class="btn bd-r3" style="background:#529f00; margin-left:5px;cursor:pointer;" onclick="buyNow()">立即购买</button>\
			<button class="btn bd-r3" style="background:#3A5FCD; margin-left:5px;cursor:pointer;" id="tip_share" onclick="share()">分享</button>\
			<button class="btn bd-r3" style="background:#3A5FCD; margin-left:5px;cursor:pointer;" id="shoucang" onclick="shoucang()">收藏</button>\
		  </div>\
		  <div class="price-info-right" >\
		    <div class="produdt-code"> <img src="'
			+ basePath
			+ (data.dimennoImg == null||"" ? "web/protal/images/code-none.jpg" :data.dimennoImg)   +'" />\
		      <p>商品溯源码</p>\
		    </div>\
		  </div>\
		</div>';

	return op;
}

// 购买数量
function buyNum(index, inventory) {
	var buyNum = $('#buyNum').val();
	if (index == "1") {
		if (buyNum < inventory) {
			buyNum = parseInt(buyNum) + 1;
			$('#buyNum').val(buyNum);
		}
	} else if (index == "0") {
		if (buyNum > 1) {
			buyNum = parseInt(buyNum) - 1;
			$('#buyNum').val(buyNum);
		}
	}
}
// 加入购物车
/*function addShoppingCart() {
	if (modelId == "") {
		layer.msg("请选择规格！");
		return;
	}
	if ($("#memberName").html() == "null") {
		loginLayer();
	} else {
		var queryParam = {
			"goodsId" : goodsId,
			"goodsCount" : $('#buyNum').val(),
			"modelId" : modelId
		};
		$.ajax({
			type : "POST",
			url : "webcart/add.action",
			data : queryParam,
			dataType : "text",
			async : false,
			success : function(result) {
				layer.msg(result);
				shoppingcartNum();
			}
		});
	}
}*/
// 登录弹出层
function loginLayer() {
	var content = '<div class="login_m">\
	  <div class="login_boder">\
	    <div class="login_padding" id="login_model">\
	      <h2>用户名</h2>\
	      <label>\
	        <input type="text" name="account" id="account" class="txt_input txt_input2" placeholder="邮箱/手机/用户名">\
			<input type="hidden" name="goodsId" value="'
			+ goodsId
			+ '">\
	      </label>\
	      <h2>密码</h2>\
	      <label>\
	        <input type="password" name="password" id="password" class="txt_input" >\
	      </label>\
	      <div class="rem_sub">\
	        <label>\
	          <input type="submit" class="sub_button"  onclick="loginForm()" value="登录" >\
	        </label>\
	      </div>\
	    </div>\
	  </div>\
	</div>';
	layer.open({
		type : 1, // page层
		area : [ '360px', '360px' ],
		title : '会员登陆',
		skin : 'layui-layer-molv', // 墨绿风格
		shade : 0.6, // 遮罩透明度
		shift : 5, // 0-6的动画形式，-1不开启
		content : content
	});
}
// 提交登录
function loginForm() {
	var account = $("#account").val();
	if (account == '') {
		alert("请填写登录账号!");
		return;
	}
	var password = $("#password").val();
	if (password == '') {
		alert("请填写登录密码!");
		return;
	}

	$.post('web/member/ns/LayerLogin.action', {
		'account' : account,
		'password' : password
	}, function(result) {
		if (result == "登录成功!") {
			layer.msg(result);

			$("#jsFrom").children("input").val(goodsId);
			setTimeout('$("#jsFrom").submit()', 1500);

		} else {
			layer.msg(result);
		}
	}, 'TEXT')
	layer.closeAll();
}
// 立即购买
function buyNow() {
	if(goodsId == ""){
		layer.msg("商品已下架！");
		return;
	}
/*	if (modelId == "") {
		layer.msg("请选择规格！");
		return;
	}*/
	if ($("#memberName").html() == "null") {
		loginLayer();
	} else {
		var queryParam = {
			"goodsId" : goodsId,
			"goodsCount" : $('#buyNum').val()//,
			//"modelId" : modelId
		};
		$.ajax({
			type : "POST",
			url : "webcart/add.action",
			data : queryParam,
			dataType : "text",
			async : false,
			success : function(result) {
				window.location.href = basePath + "webcart/list.action";
			}
		});
	}
}
// 头部购物车点击
function shoppingcartTop() {
	if ($("#memberName").html() == "null") {
		loginLayer();
	} else {
		window.location.href = basePath + "webcart/list.action";
	}
}

// 商品介绍，售后保障
function getGoodsDescribe(data) {
	//console.log(data);
//	var op = '<strong>商品名：' + data.goodsName
//			+ '</strong>\
//		 <ul>\
//		   <li>重量: ' + data.netWeight
//			+ 'g </li>\
//		   <li>毛重: ' + data.roughWeight
//			+ 'g</li>\
//		   <li>产地: ' + data.goodsAddr
//			+ '</li>\
//		   <li>生产商: ' + data.manufacturer
//			+ '</li>\
//		   <li>生产商地址: ' + data.sourceAddr
//			+ '</li>\
//		   <li>储藏条件: ' + data.storageConditions
//			+ ' </li>\
//		   <li>保质期: ' + data.shelfLife
//			+ '</li>\
//		 </ul>\
//		 <div class="pic-show">' + data.goodsDesc
//			+ '</div>';
	var op = '<strong>商品名：' + data.goodsName + '</strong>\
	<div class="pic-show">' + data.goodsDesc + '</div>';
	$('.product-info-describe .bd .tabox-01').html(op);

	var op2 = ' <div class="m m-content guarantee" id="guarantee"><div class="mc"> <div class="item-detail item-detail-copyright">\
                                <div id="shouhou" style="line-height: 20px; font-size: 12px;">\
            <strong>1、生鲜“优鲜赔”绿色通道</strong><br />\
            <p>生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“<strong>优鲜赔</strong>”申请，100分钟内审核通过后即享补偿，无需返回商品。<br /></p>\
            <strong>2、专业生鲜客服团队—让您售后无忧</strong><br />\
            <p>微信在线客服：JD-fresh<br />京东生鲜客服电话：400-606-3311<br />服务时间：09:00-21:00 <br /></p>\
            <strong>3、京东自营商品开具机打发票或电子发票</strong><br />\
            <p>如您发现商品有质量问题，请在收到商品之时起48小时内及时提交申请或联系客服处理。<br /></p><strong><a href="//help.jd.com/user/issue/325-931.html" target="_blank"><font color="red">生鲜商品售后政策</font></a></strong><br /><p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，京东生鲜不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若京东生鲜没有及时更新，请大家谅解！</p>\
        </div><div id="state"><strong>权利声明：</strong><br />京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。<p><b>注：</b>本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p>\
                                        <br />\
            <strong>价格说明：</strong><br />\
            <p><b>京东价：</b>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>\
            <p><b>划线价：</b>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>\
            <p><b>折扣：</b>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>\
            <p><b>异常问题：</b>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p></div> </div></div></div>';
	$('.product-info-describe .bd .tabox-03').html(op2);

	$(".tabox").slide({
		delayTime : 0
	});// tabox
}

// 用户评价
function getGoodsEvaluate(){
	var op = "";
	$.ajax({
		type : "POST",
		url : "web/evaluate/ns/protalPage.action",
		data : param,
		async:false,
		dataType : "json",
		success : function(data) {
			
			if(data.rows!= null && data.rows != ""){
				for(var i = 0 ; i< data.rows.length ; i++){
					op += getGoodsEvaluateItem(data.rows[i]);
				}
			}
			
			var totalPage = Math.ceil(parseInt(data.total)/20) ;
			   if(totalPage > 0 ){
				   $(".tabox-02 .totalPage").text(totalPage);
			   }else{
				   $(".tabox-02 .totalPage").text(1);
			   }
			
		}
	});
	return op;
}

//评价item
function getGoodsEvaluateItem(item) {
	//console.log(JSON.stringify(item));
	
	var op = '<div class="comment-item">\
	     	<div class="user-info"><img src="<%=basePath%>web/protal/images/rank-01.png" />'+ item.memberId +'</div>\
	         <div class="user-comment">'+ item.evalContent +'\
	         <div class="comment-img">\
	         	<ul class="filePic layer-photos-demo" >' ;
	
		if(item.tbEvaluateAppendixList!=null &&item.tbEvaluateAppendixList!=''){
			var tbEvaluateAppendixList =item.tbEvaluateAppendixList ;
			for(var i=0 ; i< tbEvaluateAppendixList.length ; i++){
				var appPath = tbEvaluateAppendixList[i].appPath ;
				if(appPath!=null && appPath!=''){
					op += '<li ><img layer-src="'+ appPath +'" src="'+ appPath +'" ></li>'
				}
			}
		};
		
		op+='</ul>\
			</div>\
	         <div class="comment-date">'+ item.evalTime +'<span>&nbsp;&nbsp;规格：'+ item.tbOrderDetail.modelName +'</span></div>\
	         <div class="recomment">'+ (item.tbRespond.evalContent==null?'':item.tbRespond.evalContent) +'\
	         </div>\
	         <div class="comment-date">' + (item.tbRespond.evalTime==null?'':item.tbRespond.evalTime) +' </div>\
	         </div>\
	         <div class="cl"></div>\
	     </div>';

	return op;
}

// 图片设置，规格查询list
function getPicHtml() {
	var op = '';
	$.ajax({
		type : "POST",
		url : "webGoodsModel/ns/getList.action",
		data : {
			"goodsId" : goodsId
		},
		dataType : "json",
		async : false,
		success : function(data) {
			goodsModel = data;
			for ( var i = 0; i < data.length; i++) {
				op += '<li><div class="small-img" ><img src="' + filePath
						+ data[i].modelImg + '" onclick="changImg(' + i
						+ ')"/></div></li>';
			}
		}
	});
	  
	$('#product-intro-img').html(op);
	changImg(0);
}

function changImg(index) {
	var magnifierConfig = {
		magnifier : "#magnifier1",// 最外层的大容器
		width : 314,// 承载容器宽
		height : 314,// 承载容器高
		moveWidth : null,// 如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2
	// 缩放比例
	};
	var _magnifier = magnifier(magnifierConfig);
	/* magnifier的内置函数调用 */
	// 设置magnifier函数的index属性
	_magnifier.setIndex(index);
	// 重新载入主图,根据magnifier函数的index属性
	_magnifier.eqImg();
}

function goodsModelList() {
	//console.log(goodsModel);
	var op = '';
	for ( var i = 0; i < goodsModel.length; i++) {
		op += ' <a onclick="goodsModelChang(' + goodsModel[i].modelId
				+ ')" id="goodsModelId' + goodsModel[i].modelId
				+ '" class="goods-normal"  style="cursor:pointer;">'
				+ goodsModel[i].modelName + '</a>'
	}
	op += '</div>';
	return op;
}

function goodsModelChang(id) {
	modelId = id;
	for ( var i = 0; i < goodsModel.length; i++) {
		if (goodsModel[i].modelId == id) {
			var goodsModelId = "goodsModelId" + id;
			$('#' + goodsModelId).addClass("goods-choose"); // 添加样式
			$('#saledPrice').html("<span>￥</span>" + goodsModel[i].modelPrice);
		} else {
			var goodsModelId = "goodsModelId" + goodsModel[i].modelId;
			$('#' + goodsModelId).removeClass("goods-choose"); // 移除样式
		}
	}
}

function page(){
	//分页
	//"第一页"点击
	$(".am-pagination-first").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		if(parseInt(currentPage)==1){
			return ;
		}else{
			
			param = {"params[goodsId]":goodsId , "rows":20 , "page":1} ;
			var op = getGoodsEvaluate();
			$('.product-info-describe .bd .tabox-02 .comment-content').html(op);
			
			page();//分页
			$(".filePic img").click(function(){
		  		var dom = $(this).parents("ul");
		  		layer.photos({
				  photos: dom.get(0) ,
				  anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				});
	  		
	  		});
			
			$(this).parents("ul").find(".currentPage").empty().text(1);
			page();
			$(document).scrollTop(0);
			
		};
	});
	
	//"最末页"点击
	$(".am-pagination-last").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			param = {"params[goodsId]":goodsId , "rows":20 , "page":currentPage} ;
			var op = getGoodsEvaluate();
			$('.product-info-describe .bd .tabox-02 .comment-content').html(op);
			
			page();//分页
			$(".filePic img").click(function(){
		  		var dom = $(this).parents("ul");
		  		layer.photos({
				  photos: dom.get(0) ,
				  anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				});
	  		
	  		});
			
			$(this).parents("ul").find(".currentPage").empty().text(totalPage);
			$(document).scrollTop(0);
		};
	});
	
	//"上一页"点击
	$(".am-pagination-prev").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		if(parseInt(currentPage)==1){
			return ;
		}else{
			param = {"params[goodsId]":goodsId , "rows":20 , "page":parseInt(currentPage)-1} ;
			var op = getGoodsEvaluate();
			$('.product-info-describe .bd .tabox-02 .comment-content').html(op);
			
			page();//分页
			$(".filePic img").click(function(){
		  		var dom = $(this).parents("ul");
		  		layer.photos({
				  photos: dom.get(0) ,
				  anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				});
	  		
	  		});
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)-1);
			$(document).scrollTop(0);
		};
	});
	
	//"下一页"点击
	$(".am-pagination-next").click(function(){
		var currentPage = $(this).parents("ul").find(".currentPage").text();
		var totalPage = $(this).parents("ul").find(".totalPage").text();
		if(parseInt(currentPage)==parseInt(totalPage)){
			return ;
		}else{
			param = {"params[goodsId]":goodsId , "rows":20 , "page":parseInt(currentPage)+1} ;
			var op = getGoodsEvaluate();
			$('.product-info-describe .bd .tabox-02 .comment-content').html(op);
			
			page();//分页
			$(".filePic img").click(function(){
		  		var dom = $(this).parents("ul");
		  		layer.photos({
				  photos: dom.get(0) ,
				  anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				});
	  		
	  		});
			
			$(this).parents("ul").find(".currentPage").empty().text(parseInt(currentPage)+1);
			$(document).scrollTop(0);
		};
	});
}


function subDataString(str , len){
	if(str==null || str ==""){
		return "---";
	}else if( str.length>parseInt(len)){
		str = str.substr(0,parseInt(len)) + "...";
	}
	
	return str ;
}

function subDataString1(str , len){
	if(str==null || str ==""){
		return "---";
	}else if( str.length>parseInt(len)){
		str = str.substr(0,parseInt(len));
	}
	
	return str ;
}

//获取当前时间 + day   格式 xx月 xx日
function getLazyDate(day){
	var lazyDate = "";
	var date  = new Date();
	lazyDate = date.getTime() + day*24*60*60*1000;
	date = new Date(lazyDate);
	lazyDate = (date.getMonth()+1)+"月"+date.getDate()+"日";
	return lazyDate;
	
}
//分享商品
function share(){
	if(goodsId == ""){
		layer.msg("商品已下架！");
		return;
	}
	
	if($("#memberName").html()=="null"){
		alert("请先登录！");
		layerLogin();
	}else{
		var url=basePath+'webGoods/ns/goods.action?goodsId='+goodsId+'&memberId='+$('#memberId').val();
		$('#share_url').val(url);
		
			
			window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdUrl":url,"bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
			layer.open({
				  type: 1,
				  shade: [0.5, '#000', false],
				  title: false, //不显示标题
				  area: ['350px', '240px'], //宽高
				  content: $('#shale_hidden')//捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
				});
//			$("#tip_share").tips({
//				side : 2,
//				msg :'<div>您要分享的链接为：<input type="text" value="'+url+'"></div>分享到：<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>',
//				bg : '#F8F8FF',
//				time : 15
//			});
		
	}
	
}
//收藏商品
function shoucang(){
 	var goodsId=$("#goodsId").val();
 	var shopId=$("#shopId").val();
 	if($("#memberName").html()=="null"){
		alert("请先登录！");
		layerLogin();
	}else{
 	//判断是否已经收藏
 	$.ajax({
 		url:basePath+"collect/list.action",
 		data:{"goodsId":goodsId,"collectType":"1"},
 		type:"post",
 		dataType:"json",
 		success:function(data){
 		if(data.length==0){
 			layer.confirm('确定要收藏么？', {
 				
 				
 			},function(){
 				
 			 	$.ajax({
 					url:basePath+"collect/add.action",
 					data:{"goodsId":goodsId,"shopId":shopId,"collectType":"1"},
 					type:"post",
 					success:function(data){
 						layer.alert("收藏成功");
 						layer.close();
 					}
 				}); 
 			});
 			}else{
 				layer.alert("你已经收藏过");
 			}
 		}
 	});
	}
}
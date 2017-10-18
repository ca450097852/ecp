<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String goodsId = request.getParameter("goodsId");

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>产品详情</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">

</head>
<body ontouchstart>
<!--主体-->
<div class="weui-content">
  <!--产品详情-->
  <div class="weui-tab">
    <div class="weui-navbar" style="position:fixed; top:0; left:0; right:0; height:44px;">
      <a href="javascript:window.history.go(-1);"><div class="wy-header-icon-back" style="position: relative"><span></span></div></a>
      <a class="weui-navbar__item proinfo-tab-tit weui-bar__item--on" href="#tab1">商品</a>
      <a class="weui-navbar__item proinfo-tab-tit" href="#tab2">详情</a>
      <a class="weui-navbar__item proinfo-tab-tit" href="#tab3">评价</a>
    </div>
    <div class="weui-tab__bd proinfo-tab-con">
      <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
        <!--主图轮播-->
        <div class="swiper-container swiper-zhutu">
          <div class="swiper-wrapper">
            <!-- <div class="swiper-slide"><img src="upload/zhutu01.jpg" /></div> -->
            
          </div>
          <div class="swiper-pagination swiper-zhutu-pagination"></div>
        </div>
        <div class="wy-media-box-nomg weui-media-box_text">
          <h4 class="wy-media-box__title" id="goodsName"></h4>
          <div class="wy-pro-pri mg-tb-5">¥<em class="num font-20" id="saledPrice"></em></div>
          <p class="weui-media-box__desc"></p>
        </div>
<!--         <div class="wy-media-box2 weui-media-box_text">
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">优惠</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <i class="yhq"><span class="label-text">优惠券</span></i>
                <span class="promotion-item-text">满197.00减40.00</span>
              </div>
              <div class="promotion-message clear">
                <i class="yhq"><span class="label-text">优惠券</span></i>
                <span class="promotion-item-text">满197.00减40.00</span>
              </div>
              <div class="yhq-btn clear"><a href="yhq_list.html">去领券</a></div>
            </div>
          </div>
        </div> -->
        <div class="wy-media-box2 weui-media-box_text">
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">规格</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-sku clear">
                <ul>
                  <li><a href="javascript:;" class="goodsSpecs"></a></li>
               
                </ul>
              </div>
            </div>
          </div>
<!--           <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">颜色</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-sku clear">
                <ul>
                  <li><a href="javascript:;">黑色</a></li>
                  <li><a href="javascript:;">红色</a></li>
                  <li><a href="javascript:;">白色</a></li>
                  <li><a href="javascript:;">蓝色</a></li>
                  <li><a href="javascript:;">橘黄色</a></li>
                  <li><a href="javascript:;">绿色</a></li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
        <div class="wy-media-box2 txtpd weui-media-box_text">
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">送至</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <span class="promotion-item-text">广东</span>
                <span class="promotion-item-text">广州</span>
                <span class="promotion-item-text">越秀区</span>
              </div>
            </div>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">运费</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <span class="promotion-item-text">免运费<!--<div class="wy-pro-pri">¥<span class="num">11.00</span></div>--></span>
              </div>
            </div>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">店铺</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <a id="shop_id"><span class="promotion-item-text" id="shop_name"></span></a>
                <input id="shopId" type="hidden"/>
              </div>
            </div>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">提示</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <span class="promotion-item-text"><p class="txt-color-ml">支持7天无理由退换货</p></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tab2" class="weui-tab__bd-item ">
        <div class="pro-detail">
 			<!--介绍-->
        </div>
      </div>
      <div id="tab3" class="weui-tab__bd-item">
        <!--评价-->
        <div id="evaluate">
         
        </div>


        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link list-more">
            <div class="weui-cell__bd">查看更多</div>
            <span class="weui-cell__ft"></span>
          </a>
        
      </div>
    </div>
  </div>  
</div>
<span id="tophovertree" title="返回顶部"></span>
<!--底部导航-->
<div class="foot-black"></div>
<div class="weui-tabbar wy-foot-menu">
<!--   <a href="javascript:;" class="promotion-foot-menu-items">
    <div class="weui-tabbar__icon promotion-foot-menu-kefu"></div>
    <p class="weui-tabbar__label">客服</p>
  </a>
  <a href="javascript:;" id='show-toast' class="promotion-foot-menu-items">
    <div class="weui-tabbar__icon promotion-foot-menu-collection"></div>
    <p class="weui-tabbar__label">收藏</p>
  </a>-->
  <a href="javascript:;" class="promotion-foot-menu-items" onclick="buyNow(1)">
    <!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;"></span> -->
    <div class="weui-tabbar__icon promotion-foot-menu-cart"></div>
    <p class="weui-tabbar__label">购物车</p>
  </a> 
 <a href="javascript:;" id='show-toast' class="promotion-foot-menu-items">
    <div class="weui-tabbar__icon promotion-foot-menu-collection" id="shoucang"></div>
    <p class="weui-tabbar__label" >收藏</p>
  </a>
  <a href="javascript:;" class="weui-tabbar__item red-color open-popup"  onclick="buyNow(2)">
    <p class="promotion-foot-menu-label">立即购买</p>
  </a>
    <a href="javascript:;" class="weui-tabbar__item yellow-color open-popup" onclick="buyNow(4)">
    <p class="promotion-foot-menu-label">转发直接卖</p>
  </a>
</div>
<div id="join_cart" class='weui-popup__container popup-bottom' style="z-index:600;">
  <div class="weui-popup__overlay" style="opacity:1;"></div>
  <div class="weui-popup__modal">
    <div class="modal-content">
      <div class="weui-msg" style="padding-top:0;">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
          <h2 class="weui-msg__title">成功加入购物车</h2>
          <p class="weui-msg__desc">亲爱的用户，您的商品已成功加入购物车，为了保证您的商品快速送达，请您尽快到购物车结算。</p>
        </div>
        <div class="weui-msg__opr-area">
          <p class="weui-btn-area">
            <a href="javascript:;" class="weui-btn weui-btn_primary close-popup" onclick="toCart()">去购物车结算</a>
            <a href="javascript:;" class="weui-btn weui-btn_default close-popup">不，我再看看</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="selcet_sku" class='weui-popup__container popup-bottom' style="z-index:600;">
  <div class="weui-popup__overlay" style="opacity:1;"></div>
  <div class="weui-popup__modal">
    <div class="toolbar">
      <div class="toolbar-inner">
        <a href="javascript:;" class="picker-button close-popup">关闭</a>
        <h1 class="title">商品属性</h1>
      </div>
    </div>
    <div class="modal-content">
      <div class="weui-msg" style="padding-top:0;">
        <div class="wy-media-box2 weui-media-box_text" style="margin:0;">
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">规格</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-sku clear">
                <ul>
                  <li><a href="javascript:;" class="goodsSpecs"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l"><span class="promotion-label-tit">数量</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-sku clear">
                <div class="pro-amount"><div class="Spinner"></div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-msg__opr-area">
          <p class="weui-btn-area">
            
            <a href="javascript:;" onclick="buyNow(3)" class="weui-btn weui-btn_primary">立即购买</a>
            
            <a href="javascript:;" class="weui-btn weui-btn_default" onclick="joinCart()">加入购物车</a>
            
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script> 
<script src="js/jquery-weui.js"></script>
<script src="js/swiper.js"></script>
<script type="text/javascript" src="js/jquery.Spinner.js"></script>

<script>

$(function(){
	protalPage();
	loadGoods();
	
	$(".Spinner").Spinner({value:1, len:3, max:999});
	
	$(".promotion-sku li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	});
	
	$(".wy-header-icon-back").click(function () {
		window.history.go(-1);  //返回上一页
	});
	
	//收藏判断显示
		var isLogin1 = isLogin();
		if(!isLogin1){
			var obj=document.getElementById("shoucang");
	 		 obj.setAttribute("class", "weui-tabbar__icon promotion-foot-menu-collection");
		}else{
			var goodsId=<%=goodsId%>;
 			var shopId=$("#shopId").val();
	 	$.ajax({
	 		url:"collect/list.mobile",
	 		data:{"goodsId":goodsId,"collectType":"1"},
	 		type:"post",
	 		dataType:"json",
	 		success:function(data){
	 		if(data.length==0){
		  		 var obj=document.getElementById("shoucang");
	 		 	obj.setAttribute("class", "weui-tabbar__icon promotion-foot-menu-collection");
	 		}else{
	          	var obj=document.getElementById("shoucang");
	 		 	obj.setAttribute("class", "weui-tabbar__icon promotion-foot-menu-collection-on");
	       
	 	}
	 }
 });
 }
});

/**
 * 加载商品信息
 */
function loadGoods(){
		var params = {"goodsId":<%=goodsId%>};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "Goods/ns/goodsDetail.mobile",
		   dataType:"json",
		   async:false,
		   success: function(data){
				if(data){
					
					console.info(data);
						var goodsImgs = data.goodsImg;
						var row = data.goods;
						$("#goodsName").html(row.goodsName);
						$("#saledPrice").html(row.saledPrice);
						$(".goodsSpecs").html(row.goodsSpecs);				
						$(".pro-detail").html(row.goodsDesc);					
						$("#shop_name").html(row.shopName);		
						$("#shop_id").attr("href","shop.jsp?shopId="+row.shopId);
						$("#shopId").val(row.shopId);
						if(goodsImgs){
							for(var i=0;i<goodsImgs.length;i++){																
						          $(".swiper-wrapper").append('<div class="swiper-slide"><img src="'+goodsImgs[i]+'" /></div>');														
							}
						}
				}
		   }
		});
	}
	
	function joinCart(){	
		var goodsCount = $(".Amount").val();
		var params = {"goodsCount":goodsCount,"goodsId":<%=goodsId%>};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "cart/add.mobile",
		   dataType:"text",
		   async:false,
		   success: function(data){
				if(data){
					//$.toast(data);
					$("#join_cart").popup();
				}
		   }
		});
		
	}
	
	function buyNow(i){
		var isLogin1 = isLogin();
		if(!isLogin1){
			//如果参数过多，建议通过 object 方式传入
			$.login({
			  title: '会员登录',
			  text: '请输入用户名和密码进行登录',
			  username: '',  // 默认用户名
			  password: '',  // 默认密码
			  onOK: function (username, password) {
			    //点击确认			    			    
			    return memberLogin(username, password);		    
			  },
			  onCancel: function () {
			    //点击取消
			  }
			});
		}else{
			//已登录
			if(i==1){
				toCart();
			}else if(i==2){
				$("#selcet_sku").popup();
			}else if(i==3){
				//单个商品结算界面
				var goodsCount = $(".Amount").val();
				var goodsId=<%=goodsId%>;			
				window.location.href="orderone.jsp?goodsId="+goodsId+"&goodsCount="+goodsCount;
			}else if(i==4){
				//转发
				var goodsId=<%=goodsId%>;			
				window.location.href="recommend.jsp?goodsId="+goodsId;
			}
			
		}
	}
	
	function toCart(){
		window.location.href="cart/list.mobile";
	}
	 
	
	function isLogin(){
		var isLogin = false;
		$.ajax({
			   type: "POST",
			   url: "member/ns/isLogin.mobile",
			   dataType:"json",
			   async:false,
			   success: function(data){
					if(data){
							isLogin =  data.flag;						
					}
			   }
			});				
		return isLogin;
	}
	
	function memberLogin(username, password){
		var isLogin = false;
		$.ajax({
			   type: "POST",
			   data: {"account":username,"password":password},
			   url: "member/ns/LayerLogin.mobile",
			   dataType:"json",
			   async:false,
			   success: function(data){
					if(data){
							isLogin =  data.flag;
							if(isLogin){
								$.toast(data.msg);
							}else{
								$.toast(data.msg, "forbidden");
							}
					}
			   }
			});				
		return isLogin;
	}

$(".swiper-zhutu").swiper({
    loop: true,
	paginationType:'fraction',
    autoplay:5000,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true//修改swiper的父元素时，自动初始化swiper
  });
  //收藏商品
 $(document).on("click", "#show-toast", function() {
 	var goodsId=<%=goodsId%>;
 	var shopId=$("#shopId").val();
 		var isLogin1 = isLogin();
		if(!isLogin1){
			//如果参数过多，建议通过 object 方式传入
			$.login({
			  title: '会员登录',
			  text: '请输入用户名和密码进行登录',
			  username: '',  // 默认用户名
			  password: '',  // 默认密码
			  onOK: function (username, password) {
			    //点击确认			    			    
			    return memberLogin(username, password);		    
			  },
			  onCancel: function () {
			    //点击取消
			  }
			});
		}else{
 	//判断是否已经收藏
 	$.ajax({
	 	url:"collect/list.mobile",
	 	data:{"goodsId":goodsId,"collectType":"1"},
	 	type:"post",
	 	dataType:"json",
	 	success:function(data){
	 		if(data.length==0){
		  		$.ajax({
				 	url:"collect/add.mobile",
				 	data:{"goodsId":goodsId,"shopId":shopId,"collectType":"1"},
				 	type:"post",
				 	success:function(data){
				 	$.toast("收藏成功", function() {
				          console.log('close');
				          var obj=document.getElementById("shoucang");
				           obj.setAttribute("class", "weui-tabbar__icon promotion-foot-menu-collection-on");
				        });
				 	}
		 	}); 
	 	}else{
	 		$.toast("收藏取消", function() {
	 		delCollect(data[0].collectId);
	          console.log('close');
	          var obj=document.getElementById("shoucang");
	 		 obj.setAttribute("class", "weui-tabbar__icon promotion-foot-menu-collection");
	        });
	 	}
	 }
 });
 }
  
});
//删除
function delCollect(collectId){
	
	 	$.ajax({
		url:"collect/delete.mobile",
		data:{"ids":collectId},
		type:"post",
		success:function (data){
			
      	}
    });
     
}

$(document).on("open", ".weui-popup-modal", function() {
        console.log("open popup");
      }).on("close", ".weui-popup-modal", function() {
        console.log("close popup");
      });

$(function (){initTopHoverTree("tophov"+"ertree",30,10,10); })

function initTopHoverTree(hvtid, times, right, bottom) {
	$("#" + hvtid).css("right", right).css("bottmo", bottom);
	$("#" + hvtid).on("click", function () { goTopHovetree(times); })
	$(window).scroll(function () {
	if ($(window).scrollTop() > 268) {
		$("#" + hvtid).fadeIn(100);
	}
	else {
	$("#" + hvtid).fadeOut(100);
	}
	});
}
//返回顶部动画
//goTop(500);//500ms内滚回顶部
function goTopHovetree(times) {
if (!!!times) {
$(window).scrollTop(0);
return;
}
var sh = $('body').scrollTop();//移动总距离
var inter = 13.333;//ms,每次移动间隔时间
var forCount = Math.ceil(times / inter);//移动次数
var stepL = Math.ceil(sh / forCount);//移动步长
var timeId = null;
function aniHovertree() {
!!timeId && clearTimeout(timeId);
timeId = null;
//console.log($('body').scrollTop());
if ($('body').scrollTop() <= 0 || forCount <= 0) {//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
$('body').scrollTop(0);
return;
}
forCount--;
sh -= stepL;
$('body').scrollTop(sh);
timeId = setTimeout(function () { aniHovertree(); }, inter);
}
aniHovertree();
}

//评价

function protalPage(){
	$.ajax({
	   type: "POST",
	   data : {"params[goodsId]":<%=goodsId%>} ,
	   url: "../wap/evaluate/ns/protalPage.mobile",
	   dataType:"json",
	   success: function(data){
		   console.log(data);
		   var op='';
		   if(data.rows!= null && data.rows != ""){
				for(var i = 0 ; i< data.rows.length ; i++){
					op += getGoodsEvaluateItem(data.rows[i]);
				}
			}
		   $("#evaluate").html(op);
	   }
	});		
}
//评价item
function getGoodsEvaluateItem(item) {
	//console.log(JSON.stringify(item));
	var op = '<div class="weui-panel__bd">\
		<div class="wy-media-box weui-media-box_text">\
	  <div class="weui-cell nopd weui-cell_access">\
	    <div class="weui-cell__hd"></div>\
	    <div class="weui-cell__bd weui-cell_primary"><p>'+ item.memberIdBuyName +'</p></div>\
	    <span class="weui-cell__time">'+ item.evalTime +'</span>\
	  </div>\
	  <p class="weui-media-box__desc">'+ item.evalContent +'</p>\
	  <ul class="weui-uploader__files clear mg-com-img">';
	  
	  if(item.tbEvaluateAppendixList!=null &&item.tbEvaluateAppendixList!=''){
			var tbEvaluateAppendixList =item.tbEvaluateAppendixList ;
			for(var i=0 ; i< tbEvaluateAppendixList.length ; i++){
				var appPath = tbEvaluateAppendixList[i].appPath ;
				if(appPath!=null && appPath!=''){
					op += '<li class="weui-uploader__file" style="background-image:url('+ appPath +')"></li>';
				}
			}
		};
	  
	op+='</ul>';
	if(item.tbRespond.evalContent!=null&item.tbRespond.evalContent!=""){
		op+='<div class="weui-cells weui-cell_access shop-answer clear" href="javascript:;">\
	       		 <div class="weui-cell__bd weui-cell_primary">\
           			 <h4>商家回复</h4>\
          			  <p class="weui-media-box__desc">'+ (item.tbRespond.evalContent==null?'':item.tbRespond.evalContent) +'</p>\
			        </div>\
				</div>';
	}
	op+='</div>\
		</div>';

	return op;
}

  

</script>
</body>
</html>

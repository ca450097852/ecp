<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String rgId = request.getParameter("rgId");

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
      <!-- <a href="javascript:window.history.go(-1);"><div class="wy-header-icon-back" style="position: relative"><span></span></div></a> -->
      <a class="weui-navbar__item proinfo-tab-tit weui-bar__item--on" href="#tab1">商品</a>
      <a class="weui-navbar__item proinfo-tab-tit" href="#tab2">详情</a>
    </div>
    <div class="weui-tab__bd proinfo-tab-con">
      <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
        <!--主图轮播-->
        <div class="swiper-container swiper-zhutu">
          <div class="swiper-wrapper">          
            
          </div>
          <div class="swiper-pagination swiper-zhutu-pagination"></div>
        </div>     
         <div class="wy-media-box-nomg weui-media-box_text">
          <h4 class="wy-media-box__title" id="goodsName"></h4>
          <div class="wy-pro-pri mg-tb-5">¥<em class="num font-20" id="saledPrice"></em></div>
          <p class="weui-media-box__desc"></p>
        </div>

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
        </div>
        
        <div class="wy-media-box2 txtpd weui-media-box_text">
        
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l" style="width: 40px"><span class="promotion-label-tit">推荐人</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <span class="promotion-item-text" id="memberName"></span>               
              </div>
            </div>
          </div>
          
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd proinfo-txt-l" style="width: 40px"><span class="promotion-label-tit">理由</span></div>
            <div class="weui-media-box__bd">
              <div class="promotion-message clear">
                <span class="promotion-item-text" id="introduce"></span>
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

    </div>
  </div>  
</div>
<span id="tophovertree" title="返回顶部"></span>
<!--底部导航-->
<div class="foot-black"></div>
<div class="weui-tabbar wy-foot-menu">

  <a href="javascript:;" class="weui-tabbar__item red-color open-popup"  data-target="#selcet_sku">
    <p class="promotion-foot-menu-label">立即购买</p>
  </a>

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
            <a href="javascript:;" data-target="#selcet_addr" class="weui-btn weui-btn_primary open-popup">立即购买</a>                     
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="selcet_addr" class='weui-popup__container popup-bottom' style="z-index:700;">
  <div class="weui-popup__overlay" style="opacity:1;"></div>
  <div class="weui-popup__modal">
    <div class="toolbar">
      <div class="toolbar-inner">
        <a href="javascript:;" class="picker-button close-popup">关闭</a>
        <h1 class="title">收货地址</h1>
      </div>
    </div>
    <div class="modal-content">
  <div class="weui-cells weui-cells_form wy-address-edit">
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">收货人</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="text"   id="recipient"/></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*"  id="mobile"/></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label for="name" class="weui-label wy-lab">所在地区</label></div>
      <div class="weui-cell__bd">
      		<input class="weui-input" id="address" type="text" value="广东省 广州市 天河区" readonly="readonly" data-code="440106" data-codes="440000,440100,440106"/>
      		<input type="hidden" id="code" value="440106" />
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">详细地址</label></div>
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" id="addr"></textarea>
      </div>
    </div>
  <div class="weui-btn-area">
    <a class="weui-btn weui-btn_primary" href="javascript:void(0)" id="showTooltips" onclick="oderpay();">确认地址</a>
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
<script src="js/city-picker.js"></script>
<script>

$(function(){
	
	loadGoods();
	
	$(".Spinner").Spinner({value:1, len:3, max:999});
	
	$(".promotion-sku li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	});
	
    $("#address").cityPicker({
        title: "选择收货地址",
        onChange: function (picker, values, displayValues) {
        $("#code").val(values[2]);
        }
      });
});

function oderpay(){
	var recipient=$("#recipient").val();
	var mobile=$("#mobile").val();
	var addr=$("#addr").val();
	var code=$("#code").val();
	var addrArea=$("#address").val();
	if(recipient==""){
		$.alert("请填写收货人");
		return;
	}
	if(recipient.length<2 || recipient.length>15){
		$.alert("收货人姓名：限制2-15个字符");
		return 
	}
	if(mobile.length==0){
		$.alert("请填写手机号码");
		return;
	}
	if(mobile.length!=0 &&mobile.length!=11){
		$.alert("手机号码数为11位！请填写正确的手机号");
		return;
	}
	if(addr==""){
		$.alert("请填写详细地址");
		return;
	}if(addr.length<5 ||addr.length>60){
		$.alert("详细地址:限制5-60字");
		return;
	}
	
	localStorage.setItem("recipient", recipient);
	localStorage.setItem("mobile", mobile);
	localStorage.setItem("addr", addrArea+addr);

	var goodsCount = $(".Amount").val();
	var rgId="<%=rgId%>";			
	window.location.href="recommendorder.jsp?rgId="+rgId+"&goodsCount="+goodsCount;
	
}


/**
 * 加载商品信息
 */
function loadGoods(){
		var rgId = "<%=rgId%>";
		var params = {"params[rgId]":rgId};
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "recommendGoods/ns/list.mobile",
		   dataType:"json",
		   async:false,
		   success: function(datas){
				if(datas){
					var data = datas[0];
					console.info(data);
						var goodsImgs = data.goodsImgs;
						var row = data.goods;					
						$("#memberName").html(data.memberName);
						$("#introduce").html(data.introduce);
						$("#goodsName").html(row.goodsName);
						$("#saledPrice").html(data.rgPrice);
						$(".goodsSpecs").html(row.goodsSpecs);				
						$(".pro-detail").html(row.goodsDesc);					

						if(goodsImgs){
							for(var i=0;i<goodsImgs.length;i++){																
						          $(".swiper-wrapper").append('<div class="swiper-slide"><img src="'+goodsImgs[i]+'" /></div>');														
							}
						}
				}
		   }
		});
	}

$(".swiper-zhutu").swiper({
    loop: true,
	paginationType:'fraction',
    autoplay:5000,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true//修改swiper的父元素时，自动初始化swiper
  });
  

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


</script>
</body>
</html>

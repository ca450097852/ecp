<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String rgId = request.getParameter("rgId");
String goodsCount = request.getParameter("goodsCount");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>订单确认</title>
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
<header class="wy-header">
  <div class="wy-header-icon-back"><span></span></div>
  <div class="wy-header-title">订单详情</div>
</header>
<div class="weui-content">
  <div class="wy-media-box weui-media-box_text address-select">
    <div class="weui-media-box_appmsg">
      <div class="weui-media-box__hd proinfo-txt-l" style="width:20px;"><span class="promotion-label-tit"><img src="images/icon_nav_city.png" /></span></div>
      <div class="weui-media-box__bd">
        <a href="javascript:;" class="weui-cell_access" >
          <h4 class="address-name"><span id="recipient"></span><span id="mobile"></span></h4>
          <div class="address-txt" id="addr"></div>
        </a>
      </div>
      <div class="weui-media-box__hd proinfo-txt-l" style="width:16px;"><div class="weui-cell_access"><span class="weui-cell__ft"></span></div></div>
    </div>
  </div>
  <div class="wy-media-box weui-media-box_text">
    <div class="weui-media-box__bd">
     <div class="weui-media-box_appmsg ord-pro-list">
        <div class="weui-media-box__hd"><a href="javascript:;"><img class="weui-media-box__thumb" id="goodsImg" src="" alt=""></a></div>
        <div class="weui-media-box__bd">
          <h1 class="weui-media-box__desc"><a href="javascript:;" class="ord-pro-link" id="goodsName"></a></h1>
          <p class="weui-media-box__desc">规格：<span id="goodsSpecs"></span></p>
          <div class="clear mg-t-10">
            <div class="wy-pro-pri fl">¥<em class="num font-15" id="saledPrice"></em></div>
            <div class="pro-amount fr">×<em class="num font-15" id="goodsCount">1</em></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="weui-panel">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_small-appmsg">
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">配送方式</span><span class="fr">快递</span></p>
            </div>
          </div>
          <div class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><span class="mg-r-10">运费</span><span class="fr txt-color-red">￥<em class="num" id="ship_free">0</em></span></p>
            </div>
          </div>
          
           <div class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14"><input type="text" placeholder="选填：给卖家留言" id="buy_remark"  class="weui-input"/></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="wy-media-box weui-media-box_text">
    <div class="mg10-0 t-c">总金额：<span class="wy-pro-pri mg-tb-5">¥<em class="num font-20" id="totalMoney">0.0</em></span></div>
    <div class="mg10-0"><a href="javascript:;" class="weui-btn weui-btn_primary" onclick="createOrder()">立即下单</a></div>
  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
    
	$(".wy-header-icon-back").click(function () {
		window.history.go(-1);  //返回上一页
	});
	
  });
</script>
<script src="js/jquery-weui.js"></script>
<script type="text/javascript">
$(function(){
	loadGoods();
	loadMemberAddress();
	
	$("#goodsCount").html(<%=goodsCount%>);
});


function createOrder(){
	var goodsCount = $("#goodsCount").html();
	var buy_remark = $("#buy_remark").val();
	var recipient = $("#recipient").html();
	var mobile = $("#mobile").html();
	var addr = $("#addr").html();
	var rgId = "<%=rgId%>";
	var shipFree= $("#ship_free").html();
	var params = {"recommend":rgId,"goodsCount":goodsCount,"buyRemark":buy_remark,"recipient":recipient,"mobile":mobile,"addr":addr,"shipFree":shipFree};

	$.ajax({
		   type: "POST",
		   data: params,
		   url: "order/ns/createRecommendOrder.mobile",
		   dataType:"text",
		   async:false,
		   success: function(data){
				if(data){
					window.location.href="order_info_recommend.jsp?orderId="+data+"&recommend="+rgId;	
				}
		   }
		});	
}

/**
 * 加载收货地址信息
 */
function loadMemberAddress(){	
	var recipient = localStorage.getItem("recipient");
	var mobile = localStorage.getItem("mobile");
	var addr = localStorage.getItem("addr");
	$("#recipient").html(recipient);
	$("#mobile").html(mobile);
	$("#addr").html(addr);

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
				var row = data.goods;									
				$("#goodsName").html(row.goodsName);
				$("#saledPrice").html(data.rgPrice);
				$("#goodsSpecs").html(row.goodsSpecs);				
				$("#goodsImg").attr("src",row.goodsImg);								
				var goodsCount= <%=goodsCount%>;
				var totalMoney=(parseFloat(data.rgPrice*100)*goodsCount)/100;  															
				$("#totalMoney").html(totalMoney);	
			}
	   }
	});
}
	
</script>

</body>
</html>

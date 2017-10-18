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
<title>商品转卖</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css"/>
<link rel="stylesheet" href="css/jquery-weui.css"/>
<link rel="stylesheet" href="css/style.css"/>
<link rel="stylesheet" href="css/jquery.mobile.custom.structure.min.css"/>
<link rel="stylesheet" href="css/jquery.mobile.custom.theme.min.css"/>

  <style>
/*   #rgPriceSlider {
    float: left;
    clear: left;
    width: 90%;
    margin: 15px;
  }

  #rgPriceSlider .ui-slider-range { background: #04BE02; }
  #rgPriceSlider .ui-slider-handle { border-color: #04BE02; } 
	.ui-slider .ui-slider-handle{ height: 1.5em;}*/
	.sell-price{ border: 1px solid #E1E1E1; padding: 5px; text-align: center; width: 90px; padding: 4px 4px; margin-left: 6px; color: #e21323;}
	.price-range{ font-size: 14px; position: absolute; top:25px; width: 100%;}
	.price-range ul li{ position: absolute;}
	.price-range .price-range-l{ left: 0;
		margin-top: 20px;
	}
	.price-range .price-range-r{ right: 0;
		margin-top: 20px;
		margin-right: 50px
	}
  </style>

</head>
<body ontouchstart>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back"><span></span></div>
  <div class="wy-header-title">商品转卖</div>
</header>
<div class="weui-content">

  <div class="wy-media-box weui-media-box_text">
    <div class="weui-media-box__bd">
     <div class="weui-media-box_appmsg ord-pro-list">
        <div class="weui-media-box__hd" id="goodsImg"></div>
        <div class="weui-media-box__bd">
          <h1 class="weui-media-box__desc" id="goodsName"></h1>
          <p class="weui-media-box__desc">规格：<span id="goodsSpecs"></span></p>
          <div class="clear mg-t-10">
            <div class="wy-pro-pri fl">¥<em class="num font-15" id="saledPrice"></em></div>
            <div class="pro-amount fr"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="weui-panel">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_small-appmsg">
        <div class="weui-cells">
        	
                
          <div class="weui-cell weui-cell_access" href="javascript:;" >
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14">
              	<span class="mg-r-10">我能赚</span> <em class="num font-15 txt-color-red">¥ <span id="myprice"></span></em>
              	<span class="fr">销售价<input class="sell-price" type="text" id="rgPrice" style="border: 1 !important;" type="number" pattern="[0-9]*"/></span></p>
            </div>
          </div>
          
          <div class="weui-cell weui-cell_access" style="padding-bottom: 27px;">
            <div class="weui-cell__bd weui-cell_primary">
              	<div id="">
              	
              		<input type="range" name="points" id="rgPriceSlider" value="0" min="0" max="100" data-highlight="true" class="ui-hidden-accessible">
              		
              		<div class="price-range">
              			<ul>
              				<li class="price-range-l">¥<em id="agency_price1">0</em></li>
              				<li class="price-range-r">¥<em id="agency_price2">0</em></li>
              			</ul>
              		</div>
              	</div>
            
            </div>
          </div>
          
          
        	<div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd weui-cell_primary">
              <p class="font-14">             	          	
              	<textarea type="text" placeholder="写给买家的推荐理由..." id="introduce" style="width: 100%;" rows="5"></textarea>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div class="wy-media-box weui-media-box_text">
    
    <div class="mg10-0"><a href="javascript:;" class="weui-btn weui-btn_primary" onclick="createGoods()">创建并转发</a></div>
  </div>
</div>
<script src="lib/jquery.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.mobile.custom.min.js"></script>
<script src="js/jquery-weui.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
    
	$(".wy-header-icon-back").click(function () {
		window.history.go(-1);  //返回上一页
	});
	
  });
</script>
<script type="text/javascript">
$(function(){
	
	 loadGoods();
	 
	 $("#rgPrice").change(function(){
		 var rgPrice = $(this).val(); 
		 var agencyPrice1 = $("#agency_price1").html();		
		 var agencyPrice2 = $("#agency_price2").html();
		    if(parseFloat(rgPrice)<parseFloat(agencyPrice1)){
		    	 $("#rgPriceSlider").val(agencyPrice1).slider("refresh");
		    	 $("#rgPrice").val(agencyPrice1); 
		    }else if(parseFloat(rgPrice)>parseFloat(agencyPrice2)){
		    	 $("#rgPriceSlider").val(agencyPrice2).slider("refresh");
		    	 $("#rgPrice").val(agencyPrice2); 
		    }else{
		        //满足条件
		        $("#rgPriceSlider").val(rgPrice).slider("refresh");

		    }
	 });
	 
	 $( "#rgPriceSlider" ).slider({
		  stop: function( event, ui ) {	  
			    var rgPriceSlider = $( "#rgPriceSlider" ).val(); 
			    var agencyPrice1 = $("#agency_price1").html();		
			    var agencyPrice2 = $("#agency_price2").html();
			    if(parseFloat(rgPriceSlider)<parseFloat(agencyPrice1)){
			    	//alert("不能低于最低代理价!");
				    	 $("#rgPriceSlider").val(agencyPrice1);
	  					 $("#rgPriceSlider").slider("refresh");
	  			    	 $("#rgPrice").val(agencyPrice1); 

			    	return;
			    }else if(parseFloat(rgPriceSlider)>parseFloat(agencyPrice2)){
			    	alert("不能高于最高代理价!");
			    }else{
			        //满足条件
			        $("#rgPrice").val(rgPriceSlider); 
			        $("#myprice").html((rgPriceSlider-agencyPrice1));      
			    }
			  
		  }
		});
		
});

  
  function createGoods(){
	   var agencyPrice1 = $("#agency_price1").html();		
	   var rgPrice = $("#rgPrice").val(); 
	  	if(agencyPrice1==rgPrice){
	  		$.confirm({
	  		  title: '温馨提示',
	  		  text: '您的销售价与代理价一致，确认是否继续?',
	  		  onOK: function () {
	  		    //点击确认
				postGoods();	  		    
	  		  },
	  		  onCancel: function () { 			  
	  		  }
	  		});
	  	}else{
	  		postGoods();
	  	}
  }
  
  function postGoods(){  
	   var saledPrice = $("#saledPrice").html();		
	   var rgPrice = $("#rgPrice").val(); 
	   var introduce = $("#introduce").val(); 
	   var goodsName = $("#goodsName a").html();

		var params = {"rgPrice":rgPrice,"introduce":introduce,"saledPrice":saledPrice,"goodsName":goodsName,"goodsId":<%=goodsId%>};
	  		$.ajax({
	  		   type: "POST",
	  		   data: params,
	  		   url: "recommendGoods/add.mobile",
	  		   dataType:"text",
	  		   async:false,
	  		   success: function(data){
	  				if(data!=0){					
	  					window.location.href="recommendpro.jsp?rgId="+data;	
	  				}
	  		   }
	  		});
  }
  
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
  						var row = data.goods;
  						$("#goodsName").html('<a href="proinfo.jsp?goodsId='+row.goodsId+'" class="ord-pro-link">'+row.goodsName+'</a>');
  						$("#goodsImg").html('<a href="proinfo.jsp?goodsId='+row.goodsId+'"><img class="weui-media-box__thumb" src="'+row.goodsImg+'" alt=""></a>');					
  						$("#saledPrice").html(row.saledPrice);
  						$("#goodsSpecs").html(row.goodsSpecs);			
  						$("#agency_price1").html(row.agencyPrice1);		
  						$("#agency_price2").html(row.agencyPrice2);
  						$("#rgPrice").html(row.agencyPrice1); 			
  											
  						$("#rgPriceSlider").val(row.agencyPrice1);
  						//设置Min、Max的值
  						$("#rgPriceSlider").prop("min", 0);
  						$("#rgPriceSlider").prop("max", row.agencyPrice2);
  						$( "#rgPriceSlider" ).slider({
  						  theme: "a"
  						});
  						//$("#rgPriceSlider").slider("refresh");

  						
  						/* $("#rgPriceSlider" ).slider({
  						     orientation: "horizontal",
  						      range: "min",
  						      max: row.agencyPrice2,
  						      value: row.agencyPrice1,
  						      slide: refreshSwatch,
  						      change: refreshSwatch
  						  }); */
  						
  				        $("#rgPrice").val(row.agencyPrice1);				        
  				        $("#myprice").html('0');
  				}
  		   }
  		});
  	}
</script>

</body>
</html>

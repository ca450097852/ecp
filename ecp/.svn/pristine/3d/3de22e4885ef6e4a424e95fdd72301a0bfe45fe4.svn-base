<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>
<!DOCTYPE html>
<html>
<head lang="en">
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>商城</title>
<link rel="stylesheet"  type="text/css" href="<%=basePath%>web/protal/style.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/nav/css/nav-style.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>web/protal/banner/banner-style.css" />
<script src="<%=basePath%>web/protal/js/jquery-1.7.2.min.js"></script>
<script src="<%=basePath%>web/protal/banner/lubotu.js"></script>

 <script type="text/javascript" src="<%=basePath%>static/js/layer/layer.js"></script>
</head>
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">
<body>
<div class="container"> 
 
	 <!--头 -->
	<jsp:include page="common/top.jsp"></jsp:include>
  
 
  <!--banner start-->
 <div class="banner">
  
  <div class="lubo">
  <ul class="lubo_box">
    
  </ul>
</div>
</div>
  <!--banner end--> 
  
  <!--block start-->
  <div class="block">
    <div class="block-content"> 
       <!--recommend start-->
      <div class="recommend">
        <div class="recommend-title"> </div>
        <div class="recommend-content">
          <div class="recommend-box" id="recommend-box">
            <div class="recom_menu">
              <ul>
                <li id="one1" onclick="setTab('one',1)">热卖产品</li>
                <li id="one2" onclick="setTab('one',2)">本站推荐</li>
                <li id="one3" onclick="setTab('one',3)">最新产品</li>
                
              </ul>
            </div>
            <div class="recom_menudiv">
              <div class="recom_menudiv-content" id="con_one_1"></div>
              <div class="recom_menudiv-content" id="con_one_2" style="display:none;"></div>
              <div class="recom_menudiv-content" id="con_one_3" style="display:none;"></div>
              
            </div>
          </div>
        </div>
        <div class="recommend-bottom"> </div>
      </div>
      <!--recommend end--> 
    </div>
  </div>
  <!--block end--> 
    	
  		<form id="jsFrom" action="webGoods/ns/goods.action" method="get">
    		<input type="hidden" name="goodsId"/>
    	</form>
    	<form id="columnsFrom" action="ns/webGoodsType/list.action" method="get">
    		<input type="hidden" name="typeId"/>
    	</form>
    	
 <!--product-columns start-->
  <div class="product-columns" id="columns">
    <div class="product-columns-content">
    	<!-- 这里放list -->
      <div style="clear:both"></div>
    </div>
  </div>
  <!--product-columns end--> 
    
  <!--footer start-->
  <jsp:include page="common/footer.jsp"></jsp:include>
  
  <!--left-nav-->
  <jsp:include page="common/left-bar.jsp"></jsp:include>
   
  <!--right-bar-->
  <jsp:include page="common/right-bar.jsp"></jsp:include>
  
  
</div>

</body>
<script type="text/javascript" src="<%=basePath%>web/js/index.js"></script>     
<script type="text/javascript">

$(function(){

    $(".lubo").lubo({

    });

});

</script>
<!--recommend-menu-->
<script>
function setTab(name,cursel){
	cursel_0=cursel;
	for(var i=1; i<=links_len; i++){
		var recom_menu = document.getElementById(name+i);
		var recom_menudiv = document.getElementById("con_"+name+"_"+i);
		if(i==cursel){
			recom_menu.className="off";
			recom_menudiv.style.display="block";
		}
		else{
			recom_menu.className="";
			recom_menudiv.style.display="none";
		}
	}
}
function Next(){                                                        
	cursel_0++;
	if (cursel_0>links_len)cursel_0=1
	setTab(name_0,cursel_0);
} 
var name_0='one';
var cursel_0=1;
var ScrollTime=2500;//循环周期，可任意更改（毫秒）
var links_len,iIntervalId;
onload=function(){
	var links = document.getElementById("recommend-box").getElementsByTagName('li')
	links_len=links.length;
	for(var i=0; i<links_len; i++){
		links[i].onmouseover=function(){
			clearInterval(iIntervalId);
			this.onmouseout=function(){
				iIntervalId = setInterval(Next,ScrollTime);;
			}
		}
	}
	document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
		clearInterval(iIntervalId);
		this.onmouseout=function(){
			iIntervalId = setInterval(Next,ScrollTime);;
		}
	}
	setTab(name_0,cursel_0);
	iIntervalId = setInterval(Next,ScrollTime);
}
</script>
</html>

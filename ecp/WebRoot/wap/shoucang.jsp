<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String memberName = "" ;
	int memberId=0;
	if(memberUser!=null){
		memberName = memberUser.getNickname();
		memberId  =memberUser.getMemberId();
	}else{
		memberName = null ;
	}
	String str=request.getParameter("str");
	
%>	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>我的收藏</title>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.
"/>
<link rel="stylesheet" href="lib/weui.min.css"/>
<link rel="stylesheet" href="css/jquery-weui.css"/>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body ontouchstart>
<!--顶部搜索-->
<header class="wy-header"  style="position:fixed; top:0; left:0; right:0; z-index:200;">
<input type="hidden" id="shopName" value="<%=memberName %>"/>
  <div class="wy-header-icon-back" onclick="javascript:location.href='mine.jsp'"><span></span></div>
  <div class="wy-header-title">我的收藏</div>
</header>
<!--主体-->
<div class="weui-content">
  <div class='proListWrap'>
 
    <div class="weui-navbar" style="position:fixed; top:44px; left:0; right:0; height:44px; background:#fff;" id="sd">
      <a class="weui-navbar__item proinfo-tab-tit font-14 weui-bar__item--on" href="#tab1" id="ordertab1" onclick="shangping();">商品</a>
      <a class="weui-navbar__item proinfo-tab-tit font-14" href="#tab2" id="ordertab2" onclick="dianpu();">店铺</a>
      
    </div>

    <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active" style="padding-top:80px;"> 
   
      </div>
     
  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
if($("#shopName").val()=="null"){
	window.location.href="login.jsp";
}
  $(function() {
  	shangping();
   });
 
  //商品
function  shangping(){
	 var queryParam ={"collectType":"1"};
	 $.ajax({
  		url:"collect/list.mobile",
  		type:"post",
  		data:queryParam,
  		dataType:"json" ,
  		success:function(data){
  		var html=shoucang(data);
  		$("#tab1").html(html);
  		}
  	});
  }
function dianpu(){

	 var queryParam ={"collectType":"2"};
    $.ajax({
  		url:"collect/list.mobile",
  		type:"post",
  		data:queryParam,
  		dataType:"json" ,
  		success:function(data){
  		var html=shoucang(data);
  		$("#tab1").html(html);
  		}
  	});
}
 //收藏html
 function shoucang(data){

 	var html="";
 	for(var i=0;i<data.length;i++){
 	
 	if(data[i].collectType=="1"){
 	
 	html+='<div class="weui-media-box weui-media-box_appmsg">\
        	<div class="weui-media-box__hd"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'"><img class="weui-media-box__thumb" src="'+data[i].goodsImg+'" alt=""></a></div>\
        	<div class="weui-media-box__bd">\
          	<h1 class="weui-media-box__desc"><a href="proinfo.jsp?goodsId='+data[i].goodsId+'" class="ord-pro-link">'+data[i].goodsName+'</a></h1>\
          	<div class="wy-pro-pri">¥<em class="num font-15">'+data[i].saledPrice+'</em></div>\
          	<ul class="weui-media-box__info prolist-ul">\
            <li class="weui-media-box__info__meta"><a href="javascript:;" class="wy-dele" onclick="delCollect('+data[i].collectId+');"></a></li>\
          	</ul></div></div>';
 	}
 	else{
 	html+='<div class="weui-media-box weui-media-box_appmsg">\
        	<div class="weui-media-box__hd"><a href="shop.jsp?shopId='+data[i].shopId+'"><img class="weui-media-box__thumb" src="'+data[i].shopLog+'" alt=""></a></div>\
        	<div class="weui-media-box__bd">\
          	<h1 class="weui-media-box__desc"><a href="shop.jsp?shopId='+data[i].shopId+'" class="ord-pro-link">'+data[i].shopName+'</a></h1>\
          	<div class="wy-pro-pri"><em class="num font-15">'+data[i].shopDesc+'</em></div>\
          	<ul class="weui-media-box__info prolist-ul">\
            <li class="weui-media-box__info__meta"><a href="javascript:;" class="wy-dele" onclick="delCollect('+data[i].collectId+');"></a></li>\
         	</ul></div></div>';
 	}
 	}
 	return html;
 }

//删除
function delCollect(collectId){
	 $.confirm("您确定要删除?", "确认删除?", function() {
	 	$.ajax({
		url:"collect/delete.mobile",
		data:{"ids":collectId},
		type:"post",
		success:function (data){
		$.toast("已经删除!");
		
		$("#sd").html(' <a class="weui-navbar__item proinfo-tab-tit font-14 weui-bar__item--on" href="#tab1" id="ordertab1" onclick="shangping();">商品</a>\
      					<a class="weui-navbar__item proinfo-tab-tit font-14" href="#tab2" id="ordertab2" onclick="dianpu();">店铺</a>');
        	shangping();
        	
        	}
        });
       }, function() {
    });
}
</script> 
<script src="js/jquery-weui.js"></script>
</body>
</html>

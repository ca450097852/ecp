<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>会员中心</title>
		<base href="<%=basePath%>">
		<link href="${basePath}static/css/web/comm/public.css" rel="stylesheet" type="text/css" />
		<link href="${basePath}static/css/web/comm/common.css" rel="stylesheet" type="text/css" />
		
		<script src="${basePath}static/js/easyui/jquery.min.js" type="text/javascript"></script>

<script type="text/javascript">
function showDown(menu_id,size,index){
	for(var i=0;i<size;i++){
		if(document.getElementById('three_'+menu_id+'_'+i).style.display=='none'){
			document.getElementById('three_'+menu_id+'_'+i).style.display = 'block';
			document.getElementById('two_'+menu_id).style.display = 'block';
			document.getElementById("bg"+index).style.background="url(static/images/web/comm/member/jianbottom.jpg) no-repeat 160px";
		}else{
			document.getElementById('three_'+menu_id+'_'+i).style.display = 'none';
			document.getElementById('two_'+menu_id).style.display = 'none';
			document.getElementById("bg"+index).style.background="url(static/images/web/comm/member/jiantop.jpg) no-repeat 160px";
		}
	}
}
$(document).ready(function(){
    getCookieNum();
});

function search(){
    var topSearchText=$("#topSearchText").val();
    if(topSearchText==''||topSearchText=="请输入搜索条件"){
      $("#topSearchText").val("请输入搜索条件");
    }else{
    	var sel = encodeURIComponent(encodeURIComponent(topSearchText));
    	if(topSearchText==" "){
    		sel="";
      	}
      	window.location.href="/mall/goods!search.action?topSearchText="+sel;
    }
    
  }
function changeType(search_type){
	document.headSearchForm.search_type.value=search_type;
}

</script>

</head>

<body>


<!--红色风格横轴菜单-->
<div id="box">
	<div id="box1">
	<div class="zhong">
	<div id="box_top">
	<ul>
    <li><a href="#"><img src="static/images/web/comm/member/tu0.gif" width="10" height="10" />&nbsp;收藏</a></li>
    <li class="nihao"><script src="ismalllogin.jsp"></script></li>
    <!--<li class="cai"><a href="mallindex.html">我要采购</a></li>
    <li class="cai"><a href="#">卖家中心</a></li>-->
    <li class="cai"><img src="static/images/web/comm/member/dian.gif" width="17" height="17" />&nbsp;18818311403</li>
    
    <li class="cai"><a href="#">
    	购物车(<span class="hous" id="cookieNum">0</span>)件</a></li>
    <li class="cai"><a href="#">会员首页</a></li>
    <!--<li class="cai"><a href="#">网站导航</a></li>-->
    </ul>
	</div>
	</div>
	</div>
	<div id="box2">
		<div class="zhong">
			<div id="box_head">
				<FORM id="headSearchForm" name="headSearchForm" method="post" action="">
					<input type="hidden" name="search_type" id="search_type" value="${search_type}"/>
					<div id="box_head_left"><a href="#"><img src="static/images/web/comm/member/logo.jpg" width="216" height="88" /></a></div>
				     <DIV id="search">
					    <p id="headSearchTab" class="search-item">
						<a id="search-product" data-action="/products/search" href="#">搜索商品</a></p>
					    <DIV class="search-btm clear">
						    <FORM id="headSearchForm" method="post" action="">
						    <LABEL class="inputPlaceholder"></LABEL><!-- value="${postName}"-->
						    <INPUT id="topSearchText" name="topSearchText" class="search-input fl" maxLength="50" type="text" name="key" value="${postName}">
						    <BUTTON id="topSearchButton" class="search-btn fl f14 fb" type="button" onclick="return search();">搜 索</BUTTON>
						</DIV>
					</div>
				</FORM>
  </div>
		</div>
	</div>
	
	<div id="box3">
	<div id="nav">
   
    <ul>
    <li class="first"><a href="/mallindex.html">商城首页&nbsp;<img src="static/images/web/comm/member/san.gif" border="0" width="13" height="9"></a></li>
    
    
    
    
     <!-- 一级菜单读取开始 -->
     
     
     	<li class="quan"><a href="/member_Job_cate.action?up_menu_id=3577438776" target="_self">招标平台</a></li>
     
     
     
     	<li class="home"><a href="/member_Job_cate.action?up_menu_id=3577438777" target="_self">供应平台</a></li>
     
     
     
     	<li class="quan"><a href="/member_Subscribe_list.action?up_menu_id=5611114723" target="_self">商机管理</a></li>
     
     
     
     	<li class="quan"><a href="member_Memberuser_list.action?up_menu_id=8564344627" target="_self">会员信息</a></li>
     
     
     
     	<li class="quan"><a href="/member_Membernews_add.action?up_menu_id=5676514548" target="_self">商铺信息</a></li>
     
     
     
     	<li class="quan"><a href="/member_Fundrecharge_list.action?up_menu_id=2355467354" target="_self">交易管理</a></li>
     
     
     
     
     <!-- 一级菜单读取结束 -->
    
    </ul>
  	
  	</div>
  </div>
  
  <div id="box5">
  <div class="zhong">
  <div class="crumb">
          <!--<a href="#">首页</a>
          <span class="gt">&gt;</span>
        	<span> 会员中心</span>  -->
   </div></div>
   </div>
  
</div>
<!--导航结束-->

<div class="clear"></div>
</div>
<div id="conter">
    <div id="conter_left">
      	<div id="myzbpt">

  
  
  	<div onClick="showDown('','','');" id="zhaobiao11" >
  		<div id="bg0">
  			<img src="static/images/web/comm/member/tu1.jpg" width="18" height="18" />&nbsp;namedddddd
  		</div>
  	</div>
    
    
    <div id="two_ " class="SubMenuLayerHidden"  style="display:block;">
    	<a class="zhaobiao14"   id="three_ _ " href="###" target="  ">namedsdsf</a>
    	<a class="zhaobiao14"   id="three_ _ " href="###" target="  ">namedsdsf</a>
    	<a class="zhaobiao14"   id="three_ _ " href="###" target="  ">namedsdsf</a>
    	<a class="zhaobiao14"   id="three_ _ " href="###" target="  ">namedsdsf</a>
			
		</div>
    
 
    <div id="zhaobiao11" >
  		<div id="bg1">
  			<img src="static/images/web/comm/member/tu1.jpg" width="18" height="18" />&nbsp;客服中心
  		</div>
  	</div>
  	<div class="SubMenuLayerHidden" style="display:block;"><a name=""></a>
  		<ul class="kf">
       		<li style="line-height:25px; background:url(static/images/web/comm/member/tel.gif) no-repeat 10px center;padding-left:35px;">服务电话</li>
       		<li class="tel">&nbsp;&nbsp;dddddddddddddddddddddd</li>
       		<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务时间</li>
       		<li>&nbsp;&nbsp;8:30-17:30(周一至周日)</li>
    	</ul>
  	</div>
  	
  </div>
  </div>
  
  
  <!--  右边 主界面 -->
<div class="cont_main">
  
     
  <table class="cont_title" width="100%" style="font-size: 12px;">
 	<tbody><tr>
    	<td>当前位置:供应管理&gt;商品管理</td>
 	</tr>
  </tbody></table>
  <table width="100%" style="font-size: 12px;">
       	<tbody><tr>
			<td align="right">商品编号:</td> 
			<td><input name="goodsno_s" value="" id="member_Goods_list_goodsno_s" type="text"></td>
			<td align="right">商品名称:</td> 
			<td><input name="name_s" value="" id="member_Goods_list_name_s" style="width:180px;" type="text"></td>
			<td align="right">商品品牌:</td> 
			<td><input name="brand_s" value="" id="member_Goods_list_brand_s" type="text"></td>
		</tr>
		 <tr>
		 	<td align="right">所属分类:</td> 
			<td><div id="divlist"><select id="level1" name="cat_attr" class="select cat_sel" onchange="onlyshowcate(this.value,1)"><option value="0">请选择</option><option value="5316475612">服饰</option><option value="3222226245">鞋类</option><option value="1887773843">箱包</option><option value="2123362853">文具</option><option value="4326851413">电子</option><option value="3247853785">食品/茶叶</option></select></div></td>
			<td align="right">是否免运费:</td> 
			<td>
			<select name="ship_s" id="member_Goods_list_ship_s">
			    <option value="">请选择</option>
			    <option value="0">是</option>
			    <option value="1">否</option>
			</select>
			</td>
			<td align="right">状态:</td> 
			<td>
			<select name="state_s" id="member_Goods_list_state_s">
			    <option value="">请选择</option>
			    <option value="0">未审核</option>
			    <option value="1">正常</option>
			    <option value="2">未通过</option>
			    <option value="3">禁用</option>
			</select>
			</td>
			<td>
				<input class="submitbut" value="查询" type="submit">
				<input class="submitbut" value="添加" onclick="" type="button">
				<input class="submitbut" value="删除" onclick="delInfo('goods.goods_id','/member_Goods_delete.action')" type="button">
			</td>
		</tr>
       </tbody></table>
       <table border="0" cellspacing="0" width="100%" style="font-size: 12px;">
         <tbody><tr style="background:url(images/top_tr.gif) repeat-x;">
             <td class="fthstyle1" width="5%"><input name="checkbox" id="checkall" onclick="selectAll('goods.goods_id')" type="checkbox"></td>
	         <td class="fthstyle1" width="23%">商品名称</td>
	         <td class="fthstyle1" width="20%">所属分类</td>	
	                  
	         <td class="fthstyle1" width="10%">商品品牌</td>
	         <td class="fthstyle1" width="10%">销售价</td>
	         <td class="fthstyle1" width="10%">免运费</td>	         
	         <td class="fthstyle1" width="7%">状态</td>
	         <td class="fthstyle1" width="5%">修改</td>
         </tr><tr>         
		</tr><tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="544" type="checkbox"></td>    
		    	<td>adidas 阿迪达斯男子清风跑步鞋 尊贵蓝 Q33981</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>阿迪达斯</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="543" type="checkbox"></td>    
		    	<td>阿迪达斯2013新款清风系列男子跑步鞋Q23697</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>阿迪达斯</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="542" type="checkbox"></td>    
		    	<td>adidas 阿迪达斯男跑步鞋 一号黑 Q22179</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>阿迪达斯</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="541" type="checkbox"></td>    
		    	<td>阿迪达斯2013夏季新款跑步系列男子跑步鞋Q23698</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>阿迪达斯</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=541');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="540" type="checkbox"></td>    
		    	<td>耐克NIKE hyperdunk low lunar缓震 男子篮球鞋 554671-003</td>
		    	
		    	<td>鞋类,篮球鞋</td>
		    
		    	<td>耐克</td>
		    
		    	<td>649</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=540');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="539" type="checkbox"></td>    
		    	<td>耐克NIKE LUNARLON男鞋跑步鞋 缓震运动鞋554677-001</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>耐克</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=539');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="538" type="checkbox"></td>    
		    	<td>耐克LUNARGLIDE+ 4男子跑步鞋 524977-050</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>耐克</td>
		    
		    	<td>629</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=538');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="537" type="checkbox"></td>    
		    	<td>耐克NIKE LUNARFLY+ 4 男子登月透气舒适跑鞋554677-010</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>耐克</td>
		    
		    	<td>499</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=537');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="536" type="checkbox"></td>    
		    	<td>李宁女子经典休闲鞋ALCH016-3红色</td>
		    	
		    	<td>鞋类,板鞋/休闲鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>269</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=536');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="535" type="checkbox"></td>    
		    	<td>李宁Li-Ning Daily Run男子减震跑鞋ARHG059-1/黑蓝色</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>199</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=535');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="534" type="checkbox"></td>    
		    	<td>李宁男子轻质跑鞋ARBH049-1</td>
		    	
		    	<td>鞋类,板鞋/休闲鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>189</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=534');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="533" type="checkbox"></td>    
		    	<td>李宁女子轻质跑步鞋 ARBG088-1</td>
		    	
		    	<td>鞋类,跑步鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>189</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=533');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="532" type="checkbox"></td>    
		    	<td>【2013年新品】李宁男子李宁弧3.0 TD篮球场地鞋ABPH153-1 </td>
		    	
		    	<td>鞋类,篮球鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>332</td>
		   
		    	<td>
		    	<a onclick="">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=532');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="531" type="checkbox"></td>    
		    	<td>【6.2折】李宁男子篮球文化鞋ABCG053-3 </td>
		    	
		    	<td>鞋类,篮球鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>229</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=531');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="530" type="checkbox"></td>    
		    	<td>【7折】李宁男子PM Lifestyle篮球文化鞋ABCG035-1</td>
		    	
		    	<td>鞋类,篮球鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>239</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=530');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="529" type="checkbox"></td>    
		    	<td>【6.7折】李宁男子篮球训练鞋ABPH089-3 </td>
		    	
		    	<td>鞋类,篮球鞋</td>
		    
		    	<td>李宁</td>
		    
		    	<td>249</td>
		   
		    	<td>
		    	<a onclick="linkToInfo('/member_Goods_list.action','ship_s=0');">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="linkToInfo('/member_Goods_list.action','state_s=1');">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="linkToInfo('/member_Goods_view.action','goods.goods_id=529');">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="528" type="checkbox"></td>    
		    	<td>彪马Puma　休闲短袖POLO衫80834306/S码</td>
		    	
		    	<td>服饰,T恤</td>
		    
		    	<td>李维斯 Levi's</td>
		    
		    	<td>49</td>
		   
		    	<td>
		    	<a onclick=";">
		    		 <font class="greencolor" >是</font></a>
		  			 
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="527" type="checkbox"></td>    
		    	<td>纽曼MP5 A11HD+ 4.3寸 按键操作 1080P 金属机身 视频输出8G版</td>
		    	
		    	<td>电子,MP5播放器</td>
		    
		    	<td>纽曼</td>
		    
		    	<td>299</td>
		   
		    	<td>
		    	<a onclick="">
		    		 
		  			 <font class="redcolor">否</font></a>
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="526" type="checkbox"></td>    
		    	<td>纽曼F45+ 4G MP4 MP5播放器 4.3寸触摸屏超薄插卡收音机 正品特价</td>
		    	
		    	<td>电子,MP5播放器</td>
		    
		    	<td>纽曼</td>
		    
		    	<td>299</td>
		   
		    	<td>
		    	<a onclick="">
		    		 
		  			 <font class="redcolor">否</font></a>
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
		<tr bgcolor="#FFFFFF">
		    <td><input name="goods.goods_id" value="525" type="checkbox"></td>    
		    	<td>纽曼移动电源 10400毫安苹果iphone5三星S4 小米htc 充电宝器正品</td>
		    	
		    	<td>电子,移动电源</td>
		    
		    	<td>纽曼</td>
		    
		    	<td>96</td>
		   
		    	<td>
		    	<a onclick="">
		    		 
		  			 <font class="redcolor">否</font></a>
		    	    	
		    	</td>
		        <td>
				    <a onclick="">
					    
					    <font class="greencolor">正常</font>
					    
					    
				    </a>
			    </td>
		    <td><a onclick="">修改</a></td>
		  </tr>
       </tbody></table>
       <div class="listbottom">
       		<input class="sy" style="color:#cecece;" value="首页" type="button">&nbsp;
			<input class="upno" style="color:#cecece;" value="上页" type="button">&nbsp;
			<input class="next" onclick="this.form.pages_s.value=2;this.form.submit();" value="下页" type="button">&nbsp;
			<input class="sy" onclick="this.form.pages_s.value=9;this.form.submit();" value="末页" type="button">
			&nbsp;&nbsp; 共164条记录  每页
			<select size="1" name="pagesize" onchange="">
			<option value="3">3</option>
			<option value="10">10</option>
			<option value="20" selected="">20</option>
			<option value="50">50</option>
			<option value="100">100</option>
			</select>条 分9页显示 转到<select size="1" name="Pagelist" onchange="this.form.pages_s.value=this.value;this.form.submit();"><option value="1" selected="">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select>页<input value="1" name="pages_s" type="hidden"> <input value="20" name="pageSize_s" type="hidden"> 
        </div>

  
  
  
  </div>
    <!--  右边 主界面 -->
</div>

<div class="clear"></div>
<!--cont结束-->

<div style="height:30px;"></div>
  


<s:form  action="" id="commonForm">
	<s:hidden name="" id="commonText" value=""/>
	<input type="hidden" name="token_value" value="   "/>
</s:form>

</body>
</html>

<script type="text/javascript">  
	var actionMessage = '<s:actionmessage/>';
	if(actionMessage!=''){
       	alertShow(actionMessage,'succeed');
	}
	//操作成功提示
	function alertShow(val,parameter){
	    var icon = parameter;
		art.dialog({
			width: '10%',
			title: '系统信息提示',
			icon: icon,
	        content: '<div class="decorate">'+val+'</div><div class="count_down">${alertShowTime}秒后自动关闭...</div>',
	        time: ${alertShowTime},
	        noText: '关闭',
            noFn: true
     });
	}
	
</script>




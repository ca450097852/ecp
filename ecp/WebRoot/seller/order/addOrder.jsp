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
		<link href="${basePath}static/css/web/comm/add.css" rel="stylesheet" type="text/css" />
		
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
  
   		<div id="h_fileQueue" style="display: hidden"></div>
		<input type="hidden" id="sessionId" value="<%=session.getId()%>" />
		<form id="goodsForm" method="post">
			<input type="hidden" name="createTime" />
			<input type="hidden" name="modelStr" id="modelStr"/>
			<table cellspacing="1" cellpadding="8" class="wwtable">
				<tr>
					<td class="fmhead" colspan="6">
						商品信息
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品编号
					</td>
					<td colspan="5">
						<input type="text"  value="" require="true" message="请输入商品编号" name="goodsNo" id="goodsNo" maxlength="30">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品分类
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="hidden" require="true" id="h_typeId" name="typeId" message="请选择商品分类">
						<input type="button" style="width: 80px;" value="选择商品分类" onclick="showGoodsType();" id="typeId"><span id="spType"></span>
					</td>
				</tr>
				<!-- 
				<tr>
					<td class="table_name">
						商品栏目
					</td>
					<td colspan="5">
						<input type="hidden" id="columnId" name="columnId">
						<input type="button" style="width: 80px;" value="选择商品栏目" onclick="showColumn();"><span id="spColumn"></span>
					</td>
				</tr>
				 -->
				<tr>
					<td class="table_name">
						商品品牌
					</td>
					<td colspan="5">
						<input type="hidden" name="brandId" id="brandId">
						<input type="button" style="width: 80px;" value="选择品牌" onclick="showBrand();"><span id="brandText"></span>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						规格型号
					</td>
					<td colspan="5">
						<input type="button" style="width: 80px;" value="编辑规格型号" onclick="showModel();"></span>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品条码
					</td>
					<td colspan="5">
						<input type="text" name="barcode" maxlength="30">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品名称
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" name="goodsName" id="goodsName" require="true" message="请输入商品名称" maxlength="200" style="width: 350px;"/>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						成本价
						<font color="red">*</font>
					</td>
					<td>
						<input type="text" name="chengbenPrice" id="chengbenPrice"  onkeyup="checkNum(this);" require="true" message="请输入成本价"/>
					</td>
					<td class="table_name">
						显示顺序
					</td>
					<td colspan="3">
						<input type="text" name="goodSeq" value="5">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						销售价
						<font color="red">*</font>
					</td>
					<td>
						<input type="text" name="saledPrice" id="saledPrice" onkeyup="checkNum(this);" require="true" message="请输入销售价">
					</td>
					<td class="table_name">
						市场价格
						<font color="red">*</font>
					</td>
					<td colspan="3">
						<input type="text" name="marketPrice" id="marketPrice"  require="true" message="请输入市场价格">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品重量
					</td>
					<td>
						<input type="text" name="netWeight">
					</td>
					<td class="table_name">
						商品毛重
					</td>
					<td colspan="3">
						<input type="text" name="roughWeight">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						库存数量
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" name="inventory" id="inventory" require="true" message="请输入库存数量">
					</td>
					<!-- <td class="table_name">
						规格参数
					</td>
					<td colspan="3">
						<input type="text" name="goodsSpecs">
					</td> -->
				</tr>
				<tr>
					<td class="table_name">
						商品产地
					</td>
					<td colspan="5">
						<input type="text" name="goodsAddr" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						源产地
					</td>
					<td colspan="5">
						<input type="text" name="sourceArea" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						生产商
					</td>
					<td colspan="5">
						<input type="text" name="manufacturer" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						生产商电话
					</td>
					<td colspan="5">
						<input type="text" name="sourceTel">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						生产商地址
					</td>
					<td colspan="5">
						<input type="text" name="sourceAddr" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						储蓄条件
					</td>
					<td>
						<input type="text" name="storageConditions">
					</td>
					<td class="table_name">
						保质期
					</td>
					<td colspan="3">
						<input type="text" name="shelfLife">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品主图
					</td>
					<td colspan="5">
						<table cellspacing="0" cellpadding="0" border="0">
							<tr>
								<td>
									<input type="text" style="width: 300px;" readonly="readonly" require="true" message="请上传商品主图"
										name="goodsImg" id="goodsImg">
								</td>
								<td>
									<input type="file" id="goodsImgFile" />
								</td>
								<td>
									<div class="uploadify-button preview">
										<a id="preview" class="ecp_a" href="javascript:void();">预览</a>
									</div>
								</td>
								<td width="300px;">
									<div id="fileQueue" style="margin-left: 8px;"></div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						备注
					</td>
					<td colspan="5">
						<textarea style="width: 80%; height: 80px;" name="remark"></textarea>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品介绍
					</td>
					<td colspan="5">
						<input type="hidden" name="goodsDesc" id="goodsDescT" require="true" message="请输入商品介绍">
						<textarea style="width: 80%; height: 150px;"  id="goodsDesc"></textarea>
					</td>
				</tr>
			</table>
		</form>
		<div class="buttom">
			<input type="submit" value="保存" id="admin_Goods_insert_0" onclick="submitForm();">
			<input type="button" value="返回列表">
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




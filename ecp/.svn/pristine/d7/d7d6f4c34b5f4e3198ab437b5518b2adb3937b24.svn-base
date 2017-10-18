<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	pageContext.setAttribute("path",path+"/");
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
%>
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>添加商品</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0">

		<link href="${basePath }seller/AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet" type="text/css">
		<link href="${basePath }seller/AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet" type="text/css">
		<link href="${basePath }seller/css/personal.css" rel="stylesheet" type="text/css">
		<link href="${basePath }seller/css/orstyle.css" rel="stylesheet" type="text/css">
		<script src="${basePath }seller/AmazeUI-2.4.2/assets/js/jquery.min.js"></script>
		<script src="${basePath }seller/AmazeUI-2.4.2/assets/js/amazeui.js"></script>
		
		<script type="text/javascript" src="${path}static/js/jquery-1.8.0.js"></script>
		<script type="text/javascript" src="${path}static/js/uploadify/jquery.uploadify.js"></script>
		<link rel="stylesheet" href="${path}static/js/uploadify/uploadify.css"	type="text/css"></link>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
		<script type="text/javascript" src="${path}static/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<link rel="stylesheet" type="text/css" href="${path}static/js/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
		<script type="text/javascript" src="${path}seller/js/goods/addGoods.js"></script>
		<script type="text/javascript" src="${path}static/js/layer/layer.js"></script>
		<link href="${path}static/css/web/addGoods.css" rel="stylesheet"	type="text/css" />
		
		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/default/easyui.css"/>
		<script type="text/javascript" src="${path}static/js/easyui/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${path}static/js/json2.js"></script>
		<script type="text/javascript" src="${path}static/js/xheditor-1.2.1/xheditor-1.2.1.min.js"></script>
		
	
	
	</head>
	<body>
	
<input type="hidden" id="basePath" value="<%=basePath%>">
<input type="hidden" id="filePath" value="<%=filePath%>">	
	<!--头 -->
	<jsp:include page="../common/sellerTop.jsp"></jsp:include>

	<!-- mian -->
	<div class="center">
			<div class="col-main">
				<div class="main-wrap">
				<div class="am-cf am-padding">
							<div class="am-fl am-cf"><strong class="am-text-danger am-text-lg">商品信息</strong> / <small>Goods&nbsp;information</small></div>
						</div>
						<hr/>
						
		<div id="h_fileQueue" style="display: hidden"></div>
		<input type="hidden" id="sessionId" value="<%=session.getId()%>" />
		<form id="goodsForm" method="post">
			<input type="hidden" name="createTime" />
			<input type="hidden" name="modelStr" id="modelStr"/>
			<table cellspacing="1" cellpadding="8" class="wwtable">
				<tr>
					<td class="table_name">
						商品名称
						<font color="red">*</font>
					</td>
					<td>
						<div style="padding-top: 12px;">
							<input type="text" name="goodsName" id="goodsName" maxlength="200" style="width: 350px;" />
						</div>
					</td>
					<td class="table_name">
						商品编号
						<font color="red">*</font>
					</td>
					<td colspan="3">
						<input type="text" name="goodsNo" id="goodsNo" maxlength="30" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品分类
						<font color="red">*</font>
					</td>
					<td>
						<div style="padding-top: 12px;">
						<input type="text"  id="h_typeId" name="typeId"  style="width: 350px;">
						</div>
					</td>
					<td class="table_name">
						商品品牌
<!-- 						<font color="red">*</font> -->
					</td>
					<td colspan="3">
						<input type="text" name="brandId" id="brandId" style="width: 350px;">
					</td>
				</tr>

				<tr>
					<td class="table_name">
						规格型号
						<font color="red">*</font>
					</td>
						<td>
						<div style="padding-top: 12px;">
						<input type="text" name="goodsSpecs" maxlength="30" style="width: 350px;">
							</div>
					</td>
					
					<td class="table_name">
						追溯二维码
					</td>
					<td colspan="3">
						<input type="text" name="dimenno" id="dimenno"  maxlength="30" style="width: 350px;" />
					</td>				
				</tr>
						
				<tr>
					<td class="table_name">
						库存数量
						<font color="red">*</font>
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="inventory" id="inventory" maxlength="30" style="width: 350px;" 
						onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" >
						</div>
					</td>
					<td class="table_name">
						成本价
						<font color="red">*</font>
					</td>
					<td colspan="3">
						<input type="text" name="chengbenPrice" id="chengbenPrice"  maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" />
					</td>
				</tr>
				
				
				<tr>
					<td class="table_name">
						销售价
						<font color="red">*</font>
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="saledPrice" id="saledPrice" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" >
						</div>
					</td>
					<td class="table_name">
						市场价格
						<font color="red">*</font>
					</td>
					<td colspan="3">
						<input type="text" name="marketPrice" id="marketPrice" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')">
					</td>
				</tr>
				
				<tr>
					<td class="table_name">
						代理最低价
						<font color="red">*</font>
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="agencyPrice1" id="agencyPrice1" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" >
						</div>
					</td>
					<td class="table_name">
						代理最高价
						<font color="red">*</font>
					</td>
					<td colspan="3">
						<input type="text" name="agencyPrice2" id="agencyPrice2" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')">
					</td>
				</tr>
				
				<tr>
					<td class="table_name">
						商品重量
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="netWeight" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')">
						</div>
					</td>
					<td class="table_name">
						商品毛重
					</td>
					<td colspan="3">
						<input type="text" name="roughWeight" maxlength="30" style="width: 350px;" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						商品条码
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="barcode" maxlength="30" style="width: 350px;">
						</div>
					</td>
					<td class="table_name">
						商品产地
					</td>
					<td colspan="3">
						<input type="text" name="goodsAddr" maxlength="30" style="width: 350px;">
					</td>
				</tr>
				

				
				<tr>
					<td class="table_name">
						源产地
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="sourceArea" maxlength="30" style="width: 350px;">
						</div>
					</td>
					<td class="table_name">
						生产商
					</td>
					<td colspan="3">
						<input type="text" name="manufacturer" maxlength="30" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						生产商电话
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="sourceTel" maxlength="30" style="width: 350px;">
						</div>
					</td>
					<td class="table_name">
						生产商地址
					</td>
					<td colspan="5">
						<input type="text" name="sourceAddr" maxlength="30" style="width: 350px;">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						储蓄条件
					</td>
					<td>
					<div style="padding-top: 12px;">
						<input type="text" name="storageConditions" maxlength="30" style="width: 350px;">
						</div>
					</td>
					<td class="table_name">
						保质期
					</td>
					<td colspan="3">
						<input type="text" name="shelfLife" maxlength="30" style="width: 350px;">
					</td>
				</tr>
				
					<tr>
					<td class="table_name">
						二维码图片
					</td>
					<td colspan="5">
						<table cellspacing="0" cellpadding="0" border="0">
							<tr>
								<td>
								<div style="padding-top: 12px;">
									<input type="text" style="width: 350px;" readonly="readonly" name="dimennoImg" id="dimennoImg">
										</div>
								</td>
								<td>
									<input type="file" id="goodsImgFile1" />
								</td>
								<td>
									<div class="uploadify-button preview">
										<a id="preview1" class="ecp_a" href="javascript:void();">预览</a>
									</div>
								</td>
								<td width="300px;">
									<div id="fileQueue1" style="margin-left: 8px;"></div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td class="table_name">
						商品主图
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<table cellspacing="0" cellpadding="0" border="0">
							<tr>
								<td>
								<div style="padding-top: 12px;">
									<input type="text" style="width: 350px;" readonly="readonly" require="true" message="请上传商品主图"
										name="goodsImg" id="goodsImg">
										</div>
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
				<tr style="height: 90px;">
					<td class="table_name">
						备注
					</td>
					<td colspan="5">
						<textarea style="width: 80%; height: 80px;" name="remark"></textarea>
					</td>
				</tr>
<!-- 				<tr style="height: 175px;">
					<td class="table_name">
						规格参数
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="hidden" name="goodsSpecs" id="goodsSpecsT" require="true" message="请输入规格参数">
						<textarea style="width: 80%; height: 150px;"  id="goodsSpecs"></textarea>
					</td>
				</tr> -->
				<tr>
					<td class="table_name">
						商品介绍
						<font color="red">*</font>
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
			<input type="button" onclick="window.location.href='seller/goods/goods.jsp'" value="返回列表">
		</div>
		</div>
		<!--底部-->
			<jsp:include page="../common/sellerFooter.jsp"></jsp:include>
		</div>
		<!-- 左侧导航栏 -->
		<jsp:include page="../common/sellerLeft.jsp"></jsp:include>
	</div>	
		
	</body>
</html>

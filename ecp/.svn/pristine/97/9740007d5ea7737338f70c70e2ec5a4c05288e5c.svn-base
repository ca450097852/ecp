<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
pageContext.setAttribute("path",path+"/");
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML>
	<head>
		<base href="<%=basePath%>">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link href="static/js/layer/skin/layer.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="static/js/jquery-1.8.0.js"></script>
		

		<script type="text/javascript">
	function toPage(url) {
		$('.cont_main').html('');
		$('.cont_main').css('heigth', '600px');
		$.post(url, '', function(result) {
			$('.cont_main').html(result);
		}, 'TEXT');
	}

	function test(){
		alert($('#goodsName').val());
		//初始化xhEditor编辑器插件
		$('#goodsDesc').xheditor({
			tools:'full',
			skin:'default',
			upMultiple:true,
			upImgUrl: "webGoodsFile/upload1.action?dir=goods",
			upImgExt: "jpg,jpeg,gif,bmp,png",
			//onUpload:insertUpload,
			html5Upload:false
		});
		return;
		$('#goodsDesc').xheditor({
			tools:'full',
			skin:'default',
			upMultiple:true,
			upImgUrl: "webGoodsFile/upload1.action?dir=goods",
			upImgExt: "jpg,jpeg,gif,bmp,png",
			//onUpload:insertUpload,
			html5Upload:false
		});
		}
</script>

		<title>会员中心-mode</title>
	</head>

	<body>

	<div style="width:20%;height:100%;float:left">
		<ul>
			<li onclick="toPage('web/goods/GoodsList.jsp');">商品列表</li>
			<li onclick="toPage('web/goods/addGoods.jsp');">添加商品</li>
			<li onclick="test();">添加商品</li>
		</ul>
	</div>
	<div style="width:75%;min-height:600px;float:left;" class="cont_main">
		
	</div>

	</body>
</html>

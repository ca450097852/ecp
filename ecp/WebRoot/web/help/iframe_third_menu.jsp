<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>帮助中心</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css" href="web/protal/style.css" />
<script src="web/protal/js/jquery-1.10.2.min.js"></script>

</head>

<body>
	

</body>

<script type="text/javascript">
	//初始化三级菜单页面(文章列表)
	$(function(){
		var id = window.parent.globalSelectedSecondMenuId ;
		if(id != null && id != ""){
			$.post("web/ns/info/listInfoVOById.action?menuId="+id,function(data){
				console.log("文章列表："+data);
				var op = '' ;
				op += '<ul class="third-menu-ul">' ;
				$.each(data,function(i,n){
					op += '<li><a href="javascript:void(0);" onclick="toContent('+ n.infoId +')" >'+ n.title +'</a></li>' ;
				});
				op += '</ul>';
				
				$("body").html(op);
			});
		}
		
	});
	
	//跳转至文章内容页
	function toContent(articleId){
		window.parent.globalArticleId = articleId;
		
		//更改父页面iframe
		window.parent.myIframe.get(0).src = "web/help/iframe_content.jsp";
	}
</script>
</html>

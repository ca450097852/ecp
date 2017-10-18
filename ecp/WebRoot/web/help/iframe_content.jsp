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
		<div class="main-wrap-content">
        	<h2 class="title">如何注册企业会员？</h2>
            <p class="paragraph">注册企业会员，请点击注册，具体操作步骤如下：</p>
            <p class="paragraph">1.请登陆京东网站，首页上方有“免费注册”，点击“免费注册”进入用户注册的页面；</p>
            <p class="paragraph">2.用户类型请选择“企业用户”，按照页面提示将信息填写完整后提交申请即可，成功提交后，我司会安排客户经理电话联系您沟通相关合作事宜，如您的条件符合我司的企业用户条件，客户经理审核通过后您就成功的成为我司的企业用户，如果审核失败，用户类型就是“个人用户”。（如下图）</p>
        </div>
</body>

<script type="text/javascript">
	$(function(){
		var article = window.parent.globalArticleId ;
		if(article == null || article == ''){
			alert("没有获取到文章id");
		}
		
		$.post("web/ns/info/getInfoById.action?id="+article,function(data){
			console.log("文章："+data);
			var op = '' ;
			if(data == null || data == ''){
				op = "<h1>文章不见了！</h1>" ;
			}else{
				op = '<h2 class="title">'+ data.title +'</h2>' ;
				op += data.content;
			}
			$(".main-wrap-content").html(op);
		});
	});
</script>
</html>

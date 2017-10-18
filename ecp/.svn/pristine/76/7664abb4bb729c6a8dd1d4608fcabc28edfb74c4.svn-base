<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新闻详情</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<!--主体-->
<header class="wy-header">
  <div class="wy-header-icon-back" onclick="javascript:history.go(-1);"><span></span></div>
  <div class="wy-header-title">新闻详情</div>
</header>
<div class="weui-content">
  <article class="weui-article">
    <h1 id="title">热烈祝贺蓝之蓝股份上市</h1>
    <h3 class="wy-news-time">2016-02-06</h3>
    <section class="wy-news-info">
      <p>热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市</p>
      <p>
        <img src="upload/ban1.jpg" alt="">
        <img src="upload/ban2.jpg" alt="">
      </p>
    </section>
  </article>
  
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
    var url = location.search; //获取url中"?"符后的字串
	if (url.indexOf("?") != -1) {  //判断是否有参数
		var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
		var parm = {"infoId":strs[1]};     //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
		$.ajax({
		   type: "POST",
		   data: parm,
		   url: "../wap/info/ns/findInfoByInfoId.mobile",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			 console.log(data);
			 $('.wy-news-time').html(data[0].crttime);
			 $('#title').html(data[0].title);
			 $('.wy-news-info').html(data[0].content);
		   }
		});
	}
    
    
    
  });
  
</script>

<script src="js/jquery-weui.js"></script>
</body>
</html>

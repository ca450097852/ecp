<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>发表评价</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
 <input type="hidden" id="basePath" value="<%=basePath%>"/>
<!--主体-->
<header class="wy-header">
  <a href="javascript:history.go(-1);"><div class="wy-header-icon-back"><span></span></div></a>
  <div class="wy-header-title">发表评价</div>
</header>

<form id="fileForm" method="post"  enctype="multipart/form-data" action="../wap/evaluate/evaluateAdd.mobile" >
<div id="hiddenDiv"></div>
<div class="weui-content clear">
  <div class="order-list-Below clear">
    <h1>商品评价</h1>
    <input type="hidden" name="evalWay" id="evalWay"></input>
    <input type="hidden" name="evalType" id="evalType"></input>
     <ul class="clear">
      <li class="comment-good on" >好评</li>
      <li class="comment-middle">中评</li>
      <li class="comment-bad">差评</li>
    </ul>
  </div>
  <div class="weui-cells weui-cells_form com-txt-area">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea class="weui-textarea txt-area" onkeydown="onkeydownContent()" name="evalContent" id="evalContent" placeholder="这个商品满足你的期待吗？说说你的使用心得，分享给想买的他们吧" rows="3"></textarea>
        <div class="weui-textarea-counter font-12 num"><span id="evalContentNum">0</span>/200</div>
      </div>
    </div>
  </div>
  <div class="weui-cells weui-cells_checkbox commg">
    <label class="weui-cell weui-check__label" for="s11">
      <div class="weui-cell__hd">
        <input type="checkbox" class="weui-check" name="checkbox1" id="s11">
        <i class="weui-icon-checked"></i>
      </div>
      <div class="weui-cell__bd"><p>匿名评价</p></div>
    </label>
  </div>
  <div class="weui-cells weui-cells_form">
 	 <div class="weui-gallery" id="gallery">
	      <span class="weui-gallery__img" id="galleryImg"></span>
	      <div class="weui-gallery__opr">
	        <a href="javascript:" rel="external nofollow" class="weui-gallery__del">
	          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
	        </a>
	      </div>
	    </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p class="weui-uploader__title font-14">图片上传</p>
              <div class="weui-uploader__info font-12" onclick="inputReset()">重置</div>
            </div>
            <div class="weui-uploader__bd">
				<ul class="weui-uploader__files" id="uploaderFiles">
				</ul>
				<div id="inputReset">
					<div class="weui-uploader__input-box" id="filesDiv1" >
					<input  class="weui-uploader__input js_file" id="files1" name="files" type="file" accept="image/*" multiple>
					</div>
					<div class="weui-uploader__input-box" id="filesDiv2">
						<input  class="weui-uploader__input js_file" id="files2" name="files" type="file" accept="image/*" multiple>
					</div>
					<div class="weui-uploader__input-box" id="filesDiv3">
						<input  class="weui-uploader__input js_file" id="files3" name="files" type="file" accept="image/*" multiple>
					</div>
				</div>
				
			</div>
          </div>
        </div>
      </div>
  </div>
  <div class="com-button"><a  href='javascript:void(0);' onclick="submit(this);">发表评价</a></div>
</div>
</form>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script>

<script src="js/jquery-weui.js"></script>
<script src="js/jquery.form.js"></script>
<link type="text/css" rel="stylesheet" href="<%=basePath%>static/js/uploadify/uploadify.css"/>
<script type="text/javascript" src="<%=basePath%>static/js/uploadify/jquery.uploadify.js"></script>
<script src="js/comment.js"></script> 

</body>
</html>

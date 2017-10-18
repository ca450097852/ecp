<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%@ page import="com.hontek.member.model.TbMember" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

Object o = session.getAttribute("memberUser");
Object om = session.getAttribute("member");

TbMemberUser tbMemberUser=null;
TbMember tbMember=null;

String nickName="";
String photoUrl="";
int levelId=0;

if(o!=null){
	tbMemberUser = (TbMemberUser)o;
	if(tbMemberUser.getNickname()!=null){
	nickName=tbMemberUser.getNickname();
	}
	if(tbMemberUser.getHeadPhoto()!=null){
	photoUrl=tbMemberUser.getHeadPhoto();
	}
}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>销售订单</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.
">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<header class="wy-header" style="position:fixed; top:0; left:0; right:0; z-index:200;">
  <div class="wy-header-icon-back" onclick="backspace()"><span></span></div>
  <div class="wy-header-title">订单管理</div>
</header>
<div class='weui-content'>

	<input type="hidden" id="nickName" value="<%=nickName%>">

      <div id="tab1" class="weui-content" style="padding-top:45px;"></div>

  </div>
</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script> 
<script src="js/jquery-weui.js"></script>
<script src="js/recommendorderlist.js"></script> 
    
    
</body>
</html>









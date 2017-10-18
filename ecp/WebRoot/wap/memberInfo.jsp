<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%@ page import="com.hontek.member.model.TbMember" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

Object om = session.getAttribute("member");
TbMember tbMember=null;

int levelId=0;

if(om!=null){
	tbMember = (TbMember)om;
	if(tbMember.getMemberLevel()!=null){
	levelId=tbMember.getMemberLevel();
	}	
}

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>会员中心</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
 <input type="hidden" value="<%=filePath%>" id="filePath"/>
 <input type="hidden" id="levelId" value="<%=levelId%>"/>
 
 	<header class="wy-header">
  		<div class="wy-header-icon-back"  onclick="window.location.href='mine.jsp';"><span></span></div>
  		<div class="wy-header-title">会员资料</div>
	</header>
    <div class="weui-content">
      <form id="memberUserForm" method="post" >
      
      <input type="hidden" name="memberUserId" id="memberUserId">
		<input type="hidden" name="memberId" id="memberId">
		<input type="hidden" name="account" id="account">
		<input type="hidden" id="password" name="password"/>
		<input type="hidden" id="regTime" name="regTime"/>
		<input type="hidden" id="headPhoto" name="headPhoto"/>
		<input type="hidden" id="memberState" name="memberState"/>
      
  		<div class="weui-cells weui-cells_form wy-address-edit">
  		
  			<div class="weui-media-box weui-media-box_appmsg">
      			<div class="weui-media-box__hd" onclick="window.location.href='upload_tx.jsp';"><img id="headPhotoSRC" class="weui-media-box__thumb radius" style="height:100%" src="" alt=""></div>
      			<div class="weui-media-box__bd">
        		<h4 class="weui-media-box__title" id="t_nickName"></h4>
        		<p class="user-grade"><span id="levelName"></span></p>
      			</div>
    		</div>
    		
    	<div class="weui-cell" >
      		<div class="weui-cell__hd"><label class="weui-label wy-lab">昵称</label></div>
      		<div class="weui-cell__bd"><input class="weui-input" type="text" id="nickName" name="nickname" value=""/></div>
    	</div>
    	
    	<div class="weui-cell">
      		<div class="weui-cell__hd"><label class="weui-label wy-lab">姓名</label></div>
      		<div class="weui-cell__bd"><input class="weui-input" id="realName" name="realName" value="" type="text"/></div>
    	</div>
    	
    	<div class="weui-cell">
      		<div class="weui-cell__hd"><label class="weui-label wy-lab">性别</label></div>
      		<div class="weui-cell__bd">
      		<input type="radio" id="sex1" name="sex" value="1" > 男
      		<input type="radio" id="sex2" name="sex" value="2" > 女
     		</div>
    	</div>
    	
     	<div class="weui-cell">
      		<div class="weui-cell__hd"><label class="weui-label wy-lab">生日</label></div>
      		<div class="weui-cell__bd"><input  type="text" data-toggle='date' id="birthday" value="" name="birthday" /></div>
    	</div>
    	
     	<div class="weui-cell">
      		<div class="weui-cell__hd"><label class="weui-label wy-lab">城市</label></div>
      		<div class="weui-cell__bd"><input class="weui-input" id="hometown" name="hometown" value="" type="text"/></div>
    	</div>
  		</div> 
  </form>
</div>
   
  <div class="weui-btn-area" id="xsbtn"  >
    <a class="weui-btn weui-btn_primary" href="javascript:void(0)"  onclick="submitForm();">保存资料</a>
  </div>


<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
    getLevel($('#levelId').val());
	findMemberUser();
	
  });
</script> 
<script>
//会员信息
function findMemberUser(){
	$.ajax({
		url:"memberUser/findMemberUser.mobile",
		type:"post",
		dataType:"json",
		success:function(result){
		if(result.memberId!=null){
			if(result.headPhoto.length>0){
		    	$("#headPhotoSRC").attr('src',$('#filePath').val()+result.headPhoto); 
		    }else{
		    	$("#headPhotoSRC").attr('src','upload/headimg.jpg'); 
		    }
		    
		 	$("#memberUserId").val(result.memberUserId);
		 	$("#account").val(result.account);
		 	$("#memberId").val(result.memberId);
		 	$("#password").val(result.password);
		 	$("#regTime").val(result.regTime);
		 	$("#headPhoto").val(result.headPhoto);
		 	$("#memberState").val(result.memberState);
		 	$("#t_nickName").html(result.nickname);
			$("#nickName").val(result.nickname);
		 	$("#realName").val(result.realName);
		 	$("#hometown").val(result.hometown);
		 	$("#birthday").val(result.birthday);
		 	$("#birthday").calendar({value:[result.birthday]});
		 	if(result.sex=="1"){
		 		$("#sex1").attr("checked","checked");
		 	}else if(result.sex=="2"){
		 		$("#sex2").attr("checked","checked");
		 	}
		}else {
			$.toptip('请先登录', 'warning');
		   	setTimeout('window.location.href="login.jsp"', 1000 );
		}
		}
	});
	
}

//获取level对象
function getLevel(levelId){
	$.ajax({
		url : 'integral/level.mobile',
  	  	type: "POST",
   	 	data: {"id":levelId},
    	dataType: "json",
    	success: function (result) {
    	if(result){
   	 	$('#levelName').html(result.levelName+':'+result.score+'积分');
    	}else{
    	$('#levelName').html('暂无等级数据');
    	}
    	}
		});
}

function submitForm(){
	$.ajax({
		url : 'memberUser/update.mobile',
	    type: "POST",
	    data: $('#memberUserForm').serialize(),
	    dataType: "TEXT",
	    success: function (result) {
	    if(result=='修改会员用户成功!'){
	    $.toast('保存成功！');
	    }else{
	    $.toast(result, "cancel");
	    }
	   // $.toptip(result, 2000, 'success');
	    findMemberUser();
    //	setTimeout('window.location =location', 1000 );
	    }
	});
}

</script>

<script src="js/jquery-weui.js"></script>
</body>
</html>

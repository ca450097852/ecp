<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String memberName = "" ;
	int memberId=0;
	if(memberUser!=null){
		memberName = memberUser.getNickname();
		memberId  =memberUser.getMemberId();
	}else{
		memberName = null ;
	}
	String str=request.getParameter("str");
	
%>	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>地址管理</title>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
<meta name="description" content="溯源商城"/>
<link rel="stylesheet" href="lib/weui.min.css"/>
<link rel="stylesheet" href="css/jquery-weui.css"/>

<link rel="stylesheet" href="css/style.css"/>
<script type="text/javascript" src="${basePath}lib/jquery-2.1.4.js"></script>


<script type="text/javascript" src="${basePath}js/addr/address.js"></script>
</head>
<body ontouchstart >
<!--主体-->
<header class="wy-header"  style="position:fixed; top:0; left:0; right:0; z-index:200;">
<input type="hidden" id="shopName" value="<%=memberName %>"/>
<input type="hidden" id="path" value="<%=path%>"/>
<input type="hidden" id="addrId" />
 <div id="rollback1"> <div class="wy-header-icon-back close-popup" id="rollback" onclick="javascript:window.history.go(-1);"><span></span></div></div>
  <div class="wy-header-title" >地址管理</div>
</header>
<div class="weui-content">

<div class="addr"  style="padding-top:30px;padding-bottom:50px;"></div>
  <div class="weui-panel address-box">
   </div>
  
</div>
<div class="weui-btn-area" id="addBtn" style="position:fixed; bottom:0; left:0; right:0; z-index:200;">
   <a href="javascript:;" class="weui-btn weui-btn_primary open-popup" data-target="#full"onclick="addFull();">添加新地址</a>
    
  </div>
 <div id="full" class='weui-popup__container'>
      <div class="weui-popup__overlay"></div>
      <div class="weui-popup__modal">
       
      <div class="weui-content">
      <form id="addrForm" method="post" >
  <div class="weui-cells weui-cells_form wy-address-edit">
    <div class="weui-cell"  style="padding-top:50px;">
    <input type="hidden" name="addrId" id="addrId" />
      <div class="weui-cell__hd"><label class="weui-label wy-lab">收货人</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="text"   id="recipient"/></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">手机号</label></div>
      <div class="weui-cell__bd"><input class="weui-input" type="number" pattern="[0-9]*"  id="mobile"/></div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label for="name" class="weui-label wy-lab">所在地区</label></div>
      <div class="weui-cell__bd"><input class="weui-input" id="address" type="text" value="广东省 广州市 越秀区" readonly="readonly" data-code="440104" data-codes="440000,440100,440104"/>
      							<input type="hidden" id="code" value="440104" />
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label class="weui-label wy-lab">详细地址</label></div>
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" id="addr"></textarea>
      </div>
    </div>
    <div class="weui-cell weui-cell_switch">
      <div class="weui-cell__bd">设为默认地址</div>
      <div class="weui-cell__ft"><input class="weui-switch"   type="checkbox" id="button1" name="button1" onclick="clickBtn();" /></div>
         <input type="hidden" id="btn" name="btn1" type="radio" value="off" checked="checked" />
    </div>
  </div> 
  </form>
  <div class="weui-btn-area" id="xsbtn"  >
    <a class="weui-btn weui-btn_primary" href="javascript:void(0)" id="showTooltips" onclick="address();">保存此地址</a>
    <a href="javascript:;" class="weui-btn weui-btn_warn" onclick="delAddress();">删除此地址</a>
  
  </div>

</div>
       
      </div>
    </div>

 








<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>

<script src="js/jquery-weui.js"></script>
 <script type="text/javascript">
if($("#shopName").val()=="null"){
	window.location.href="login.jsp";
}
</script>

<script src="js/city-picker.js"></script>
<script>
      $("#address").cityPicker({
        title: "选择收货地址",
        onChange: function (picker, values, displayValues) {
        $("#code").val(values[2]);
          console.log(values, displayValues);
        }
      });
    </script>
</body>
</html>

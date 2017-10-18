<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.member.model.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
	String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
	TbMember member = (TbMember)session.getAttribute ( "member" );
	TbMemberUser memberUser =  (TbMemberUser)session.getAttribute ( "memberUser" );
	String  addrId=request.getParameter("addr");
	
	String memberName = "" ;
	int memberId=0;
	if(memberUser!=null){
		memberName = memberUser.getNickname();
		memberId  =memberUser.getMemberId();
	}else{
		memberName = null ;
	}
	
	
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>编辑地址</title>
<meta charset="utf-8"></meta>
<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.
"></meta>
<link rel="stylesheet" href="lib/weui.min.css"/>
<link rel="stylesheet" href="css/jquery-weui.css"/>
<link rel="stylesheet" href="css/style.css"/>
<script type="text/javascript" src="${basePath}lib/jquery-2.1.4.js"></script>
<script type="text/javascript" src="${basePath}js/addr/address.js"></script>
</head>
<body ontouchstart  onload="updAddr('<%=path%>')">
<!--主体-->
<header class="wy-header">
<input type="hidden" id="addrId" value="<%=addrId %>"/>
<input type="hidden" id="shopName" value="<%=memberName %>"/>
  <div class="wy-header-icon-back" onclick="javascript:location.href='address_list.jsp'"><span></span></div>
  <div class="wy-header-title">添加新地址</div>
</header>
<div class="weui-content">
  <div class="weui-cells weui-cells_form wy-address-edit">
    <div class="weui-cell">
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
      <div class="weui-cell__bd"><input class="weui-input" id="address" type="text" value="北京 北京市 东城区" readonly="readonly" data-code="110101" data-codes="110000,110000,110101"/>
      							<input type="hidden" id="code" value="110101" />
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
  <div class="weui-btn-area">
    <a class="weui-btn weui-btn_primary" href="javascript:void(0)" id="showTooltips" onclick="address('<%=path%>');">保存此地址</a>
    <a href="javascript:;" class="weui-btn weui-btn_warn" onclick="delAddress('<%=path%>');">删除此地址</a>
  </div>

</div>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script type="text/javascript" src="js/jquery.Spinner.js"></script>
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script>

<script src="js/jquery-weui.js"></script>
<script src="js/city-picker.js"></script>
<script>
      $("#address").cityPicker({
        title: "选择出发地",
        onChange: function (picker, values, displayValues) {
        $("#code").val(values[2]);
          console.log(values, displayValues);
        }
      });
    </script>
 
 
</body>
</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String tomcatPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();

TbMemberUser memberUser = (TbMemberUser) session.getAttribute ( "memberUser" );
int memberId = 0;
if(memberUser!=null){
	memberId = memberUser.getMemberId().intValue();
}

String goodsIds = request.getParameter("goodsIds");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>订单确认页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<base href="<%=basePath%>">
		
	<script type="text/javascript" src="static/js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="static/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="static/js/layer/layer.js"></script>
	<script type="text/javascript" src="static/js/web/comm/addorder.js"></script>
	
	<link href="${path}static/css/web/addGoods.css" rel="stylesheet"	type="text/css" />
		<link rel="stylesheet" type="text/css" href="${path}static/js/easyui/themes/default/easyui.css"/>
	
	
<style type="text/css">

</style>

  </head>
  
  <body>
  <!-- qql -->
  <input type="hidden" id="tomcatPath" value="<%=tomcatPath %>"/>
  <input type="hidden" id="sessionId" value="<%=session.getId()%>" />
  <input type="hidden" id="memberId" value="<%=memberId %>" />
  <input type="hidden" id="goodsIds" value="<%=goodsIds %>" />
  
  <!-- cart cookie -->
  <!-- cart cookie -->
  <div id="islogin"></div>
  
<div class="center" style="width: 1000px;">
  
<FORM name="frm_order" id="frm_order" method="post">
<!-- 
    private Integer memberIdSale;
    private Integer memberIdBuy;
    private String orderType;
    private String orderTime;
    private String payTime;
    private String sendTime;
    private String finishTime;
    private String orderAmount;//订单金额
    private Integer shipFree;//运费
    private Integer preferAmount;//优惠额
    private String invoiceType;//发票种类
    private String invoiceTop;
    private Integer taxInvoice;
    private String invoiceContent;
    private Integer discount;//默认折扣率
    private Integer discountMoney;//默认折扣价
    private Integer totalAmount;//订单总额
    private String orderState;//订单状态  1：交易中 2：取消 3：无效 4：交易完成 5：退货 
    private String payState;//支付状态  1待付款 2：已付款 
    private String sendState;//发货状态 1:待发货 2：已发货 3：收货确认 4：拒收
    private Integer payId;
    private String deliverType;//配送方式配送方式  0:到店自取 1:物流配送
    private Integer logisId;
    private String buyRemark;
 -->
<input type="hidden"  id="memberIdBuy" name="memberIdBuy" value="<%=memberId %>" />
<input type="hidden"  id="preferAmount" name="preferAmount" value="0" />
<input type="hidden"  id="discount" name="discount" value="1" />
<input type="hidden"  id="discountMoney" name="discountMoney" value="0" />
<input type="hidden"  id="orderState" name="orderState" value="1" />
<input type="hidden"  id="payState" name="payState" value="1" />
<input type="hidden"  id="sendState" name="sendState" value="1" />
<!-- 配送方式..运费 -->
<input type="hidden"  id="deliverType" name="deliverType" value="1" />
<input type="hidden"  id="shipFree" name="shipFree" value="0" />
<!-- 订单金额 订单总额-->
<input type="hidden"  id="orderAmount" name="orderAmount" />
<input type="hidden"  id="totalAmount" name="totalAmount"  />
<div class="position"><p>您当前的位置：<a href="#" target="_blank">首页</a> > 核对订单</p></div>
<div class="w980">
</div>
<div class="clear"></div>


<div class="w980">
  <div class="wftleft f_left"></div>
  <div class="wftright f_right"></div>
  <div class="wfmidtitle f_left">填写核对订单信息</div>
  <div class="clear"></div>
  <div class="wfcont">
  
    <div class="w912">
    
      
      <div class="wfline1">
        <h2 class="wfh2"><span>收货人信息</span><a href="javascript:void(0);"  style="cursor:pointer;" onclick="toaddAddr()" class="bule">[修改]</a></h2>
        <table  id="memberaddrs">
            
        </table>
      </div>
      
      <div class="wfline1" id="fapiaoupdate">
        <h2 class="wfh2"><span>发票信息</span></h2>
        <p>
        	不开发票：<input id="invoiceType1" name="invoiceType" type="radio" value="0" checked="checked" onclick="toaddInvoice(0)" />&nbsp;&nbsp;
        	开具发票：<input id="invoiceType2" name="invoiceType" type="radio" value="1" onclick="toaddInvoice(1)" />
        </p>
        <table  id="yesfapiao" class="merchtitle">
          <!-- 显示发票信息 -->
        </table>

		<input type="hidden" name="invoiceTop" id="invoiceTop"><!-- 发票抬头 -->
		<input type="hidden" name="invoiceContent" id="invoiceContent"><!-- 发票内容 -->
      </div>
      
      <div class="wfline1">
        <h2 class="wfh2"><span class="f_left">商品清单</span><a href="cart.jsp" class="bule f_right">返回购物车</a></h2>
        <div class="clear"></div>
        <div class="merchBill">
          <table id="goostable" cellpadding="0" cellspacing="0" class="merchtitle" width="100%">
            <tr style="background-color:gray;height: 35px;">
            	<th width="30%" colspan="2">商品名称</th>
	            <th width="10%">单价(元)</th>
	            <th width="10%">商品数量</th>
	            <th width="10%">小计(元)</th>
            </tr>
          </table>
        </div>
      </div>
 
      <p class="settle">结算信息</p>
      <div class="wfline2">
        <div class="wflinec">
          <p class="jh">商品金额：<span id="allcountmoney">0.00</span>元 + 运费：<span id="allyunfares">0.00</span>元 <span id="baojiashow" style="display:none;">+ 保价费：<span id="allbaojiafare">0.00</span>元 </span></p>
          <p class="yh"><span class="jq f_right">应付总额：<span class="bred">￥<span id="allmoney">0.00</span> </span>元</span></p>
          <div class="clear"></div>
        </div>  
      </div>
      
      <p class="checkmag"><p> 
      <p class="submitbut f_right"><a href="javascript:void(0);" onclick="submitOrder();"><img src="/templets/bmall/images/xzsubmitbut_07_blue.gif"></a></p>
    </div>
  </div>
</div>
</FORM>
<div class="clear"></div>
<!--   -->
  
  </div>
  
  
  
  <!-- 添加收货地址 -->
  		
<script type="text/javascript" src="${path}static/js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${path}static/js/json2.js"></script>
<script type="text/javascript" src="static/js/web/comm/jquery.provincesCity.js" ></script>
<script type="text/javascript" src="static/js/web/comm/provincesdata.js"></script>
  <div id="add_member_addr" style="display: none;">
  <form id="addrForm" method="post">
			
			<input name="memberId" type="hidden" value="<%=memberId %>"/>
			<table cellspacing="1" cellpadding="8" class="wwtable">
				<tr>
					<td class="fmhead" colspan="6">
						收货地址信息
					</td>
				</tr>
				<tr>
					<td class="table_name">
						所在地区
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<div id="test"></div>
					</td>
				</tr>
				<tr>
					<td class="table_name">
						详细地址
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" name="addr" style="width: 350px;"  require="true" message="请输入详细地址">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						联系电话
					</td>
					<td colspan="5">
						<input type="text" name="telephone" maxlength="30">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						手机
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" name="mobile" maxlength="30"  require="true" message="请输入手机号码">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						邮编
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" name="postCode"  require="true" message="请输入邮政编码">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						默认地址
					</td>
					<td colspan="5">
						是：<input name="addrDefault" value="0" type="radio" checked="checked" width="10px;">
						否：<input name="addrDefault" value="1" type="radio" width="10px;">
					</td>
				</tr>
			</table>
		</form>
		<div class="buttom">
			<input type="submit" value="保存" id="admin_Goods_insert_0" onclick="submitFormAddr();">
			<input type="button" onclick="javascript:layer.closeAll();" value="关闭">
		</div>
  </div>
  
  
  <!-- 添加发票信息 -->
  <div id="add_member_invoice" style="display: none;">
   <form id="invoiceForm" method="post">
			<table cellspacing="1" cellpadding="8" class="wwtable">
				<tr>
					<td class="fmhead" colspan="6">
						发票信息
					</td>
				</tr>
				<tr>
					<td class="table_name">
						发票抬头
						<font color="red">*</font>
					</td>
					<td colspan="5">
						<input type="text" id="for_invoiceTop" name="for_invoiceTop" style="width: 350px;"  require="true" message="请输入发票抬头">
					</td>
				</tr>
				<tr>
					<td class="table_name">
						发票内容
					</td>
					<td colspan="5">
						<input type="text" id="for_invoiceContent" name="for_invoiceContent" style="width: 350px;">
					</td>
				</tr>
			</table>
		</form>
		<div class="buttom">
			<input type="submit" value="保存"  onclick="addMemberInvoice()();">
			<input type="button" onclick="javascript:closeInvoiceForm();" value="关闭">
		</div>
  </div>
  </body>
</html>

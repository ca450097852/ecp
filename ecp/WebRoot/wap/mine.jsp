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
<!--主体-->
<div class='weui-content'>

<input type="hidden" id="levelId" value="<%=levelId%>">
<input type="hidden" id="nickName" value="<%=nickName%>">
<input type="hidden" id="phtotUrl" value="<%=photoUrl%>">
<input type="hidden" id="filePath" value="<%=filePath%>">

  <div class="wy-center-top">
    <div class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd" onclick="window.location.href='memberInfo.jsp'"><img id="headPhoto" class="weui-media-box__thumb radius"  style="height:100%" src="" alt=""></div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title user-name"><%=nickName %></h4>
        <p class="user-grade"><span id="levelName"></span></p>
        <p class="user-integral">待返还金额：<em class="num">500.0</em>元</p>
          <a href="#" class="icon-setting"><img src="images/icon-setting.png" onclick="window.location.href='memberInfo.jsp'"></a>
      </div>
    </div>
<!--    <div class="xx-menu weui-flex">
      <div class="weui-flex__item"><div class="xx-menu-list"><em>987</em><p>账户余额</p></div></div>
      <div class="weui-flex__item"><div class="xx-menu-list"><em>459</em><p>我的蓝豆</p></div></div>
      <div class="weui-flex__item"><div class="xx-menu-list"><em>4</em><p>收藏商品</p></div></div>
    </div>-->
  </div>
   <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">
      <a href="all_orders.jsp?tab=1" class="weui-cell weui-cell_access center-alloder">
        <div class="weui-cell__bd wy-cell">
          <div class="weui-cell__hd"><img src="images/center-icon-order-all.png" alt="" class="center-list-icon"></div>
          <div class="weui-cell__bd weui-cell_primary"><p class="center-list-txt">全部订单</p></div>
        </div>
        <span class="weui-cell__ft"></span>
      </a>   
    </div>
    <div class="weui-panel__bd">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <a href="all_orders.jsp?tab=2" class="center-ordersModule" >
        	<div id="tab2"></div>
            <div class="imgicon"><img src="images/center-icon-order-dfk.png"/></div>
            <div class="name">待付款</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="all_orders.jsp?tab=3" class="center-ordersModule" >
          	<div id="tab3"></div>
            <div class="imgicon"><img src="images/center-icon-order-dfh.png" /></div>
            <div class="name">待发货</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="all_orders.jsp?tab=4" class="center-ordersModule" >
          	<div id="tab4"></div>
            <div class="imgicon"><img src="images/center-icon-order-dsh.png" /></div>
            <div class="name">待收货</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="all_orders.jsp?tab=5" class="center-ordersModule" >
          	<div id="tab5"></div>
            <div class="imgicon"><img src="images/center-icon-order-dpj.png" /></div>
            <div class="name">待评价</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">
      <a href="myburse.html" class="weui-cell weui-cell_access center-alloder">
        <div class="weui-cell__bd wy-cell">
          <div class="weui-cell__hd"><img src="images/center-icon-jk.png" alt="" class="center-list-icon"></div>
          <div class="weui-cell__bd weui-cell_primary"><p class="center-list-txt">我的销售</p></div>
        </div>
        <span class="weui-cell__ft"></span>
      </a>   
    </div>
    <div class="weui-panel__bd">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <a href="mine-recommendpro.jsp" class="center-ordersModule">
            <div class="center-money"><em id="recommendGoods">0</em> 件</div>
            <div class="name">销售商品</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="recommendorderlist.jsp" class="center-ordersModule">
            <div class="center-money"><em id="recommendOrders">0</em> 件</div>
            <div class="name">销售订单</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="myburse.html" class="center-ordersModule">
            <div class="center-money">￥ <em id="recommendMoney">0.0</em></div>
            <div class="name">销售金额</div>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="myburse.html" class="center-ordersModule">
            <div class="center-money">￥ <em>0.0</em></div>
            <div class="name">已返还</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">             
              <a class="weui-cell weui-cell_access" href="shoucang.jsp">
                <div class="weui-cell__hd"><img src="images/center-icon-sc.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">我的收藏</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="address_list.jsp">
                <div class="weui-cell__hd"><img src="images/center-icon-dz.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">地址管理</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <!--
              	<a class="weui-cell weui-cell_access" href="record.html">
                <div class="weui-cell__hd"><img src="images/center-icon-jyjl.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">交易记录</p>
                </div>
                <span class="weui-cell__ft"></span>
              	</a>
               <a class="weui-cell weui-cell_access" href="card.html">
                <div class="weui-cell__hd"><img src="images/center-icon-yhk.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">我的银行卡</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
               <a class="weui-cell weui-cell_access" href="memberInfo.jsp">
                <div class="weui-cell__hd"><img src="images/eamil.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">会员资料修改</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>-->
               <a class="weui-cell weui-cell_access" href="psd_change.jsp">
                <div class="weui-cell__hd"><img src="images/center-icon-dlmm.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">密码修改</p>
                </div>
                <span class="weui-cell__ft"></span>
   				</a>
              <a class="weui-cell weui-cell_access" href="javascript:;" onclick="exit();">
                <div class="weui-cell__hd"><img src="images/center-icon-out.png" alt="" class="center-list-icon"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="center-list-txt">退出账号</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
</div>

<!--底部导航-->
 <jsp:include page="footer.jsp">
 		<jsp:param value="mine" name="pageName"/>
 </jsp:include>

<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script> 
<script src="js/jquery-weui.js"></script>
<script src="js/mine.js"></script>
</body>
</html>

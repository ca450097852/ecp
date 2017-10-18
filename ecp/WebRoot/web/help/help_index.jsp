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
<div class="container">
	<div class="help-head">
		<div class="help-logo">
			<img src="buy/images/logobig.png"/>
		</div>
		<h2>帮助中心</h2>
		<ul>
			<li><a href="#">首页</a>
			</li>
			<li><a href="javascript:void(0);">常见问题</a>
			</li>
			<li><a href="javascript:void(0);">自助服务</a>
			</li>
			<li><a href="javascript:void(0);">联系客服</a>
			</li>
			<li><a href="javascript:void(0);">新手指南</a>
			</li>
		</ul>
	</div>
	<div class="help-main clearfix" style="min-height:800px" >
		<aside class="menu">

		<ul class="help-expmenu">
			<li>
				<div class="help-expmenu-header">
					<span class="label">购物指南</span> <span class="arrow up"></span>
				</div> <span class="no">
					<ul class="help-expmenu-submenu" style="display:block;">
						<li><a href="#" class="on">交易条款</a>
						</li>
						<li><a href="#">购物流程</a>
						</li>
						<li><a href="#">促销咨询</a>
						</li>
						<li><a href="#">商品咨询</a>
						</li>
						<li><a href="#">生活旅行</a>
						</li>
					</ul> </span></li>
			<li>
				<div class="help-expmenu-header">
					<span class="label">订单百事通</span> <span class="arrow up"></span>
				</div>
				<ul class="help-expmenu-submenu">
					<li><a href="#">订单查询</a>
					</li>
					<li><a href="#">提交订单</a>
					</li>
					<li><a href="#">修改订单</a>
					</li>
					<li><a href="#">取消订单</a>
					</li>
					<li><a href="#">订单锁定/解锁</a>
					</li>
					<li><a href="#">订单拆分</a>
					</li>
					<li><a href="#">订单异常</a>
					</li>
					<li><a href="#">订单确认</a>
					</li>
					<li><a href="#">晒单评价</a>
					</li>
					<li><a href="#">违规订单处理</a>
					</li>
					<li><a href="#">第三方交易纠纷</a>
					</li>
				</ul></li>
		</ul>
		</aside>
		<div class="main-wrap">
			<iframe width="100%" id="contentframe" name="contentframe"
				frameborder="0" scrolling="no" src="web/help/iframe_third_menu.jsp">
			</iframe>
		</div>
	</div>
	
<!--bottom start-->
  <div class="bottom" style="position:relative; ;bottom: 0;">
  	<div class="bottom-content">
    	<h3>友情链接</h3>
        <p><a href="#">广州薪火网络科技有限公司</a>   <a href="#">华南网</a>　</p>
        <p class="copyright">Copyright © 2016-2020  All Rights Reserved.  技术支持:广州薪火网络科技有限公司 </p>
    </div>
  </div>
  <!--bottom end-->
 </div>

</body>

<script type="text/javascript">

	var globalSelectedSecondMenuId;
	var globalArticleId ;
	var myIframe = $("#contentframe");
	
	//初始化
	$(function(){
		
		//加载一二级菜单
		getFirstMenu();
	
		//其他页面跳转过来的入口(必须放在下面)
		//重新赋值二级菜单id全局变量
		secondMenuId = GetQueryString("secondMenuId");
		if(secondMenuId!=null && secondMenuId != ''){
			globalSelectedSecondMenuId = secondMenuId;
		}
		//iframe自适应高度
		startInit('contentframe', 560);
	});
	
	//加载一二级菜单
	function getFirstMenu(){
		$.ajax({
		   type: "POST",
		   url: "web/ns/info/combotree.action?rootId=3",
		   async: false,
		   success: function(data){
		     //console.log(JSON.stringify(data));
			var op = '';
			$.each(data,function(i,n){
				op+='<li>\
				<div class="help-expmenu-header">\
					<span class="label">'+ n.text +'</span> <span class="arrow up"></span>\
				</div> <span class="no">\
					<ul class="help-expmenu-submenu" style="display:block;">';
					
						op += secondMenu(n.children);
						
			op +=	'</ul>\
					</span>\
				</li>';
			});
			
			//初始化二级菜单id全局变量
			globalSelectedSecondMenuId = data[0].children[0].id;
			
			//console.log(JSON.stringify(globalSelectedSecondMenuId));
			
			$("ul.help-expmenu").html(op);
		   }
		});
		
	};
	
	//获取二级菜单
	function secondMenu(data){
		op = '' ;
		$.each(data,function(i,n){
			op += '<li><a href="javascript:void(0)"; onclick="getThirdMenu('+ n.id +')" class="on">'+ n.text +'</a></li>';
		});
		
		
		return op ;
	}
	
	//获取三级菜单
	function getThirdMenu(id){
		globalSelectedSecondMenuId = id ;
		myIframe.get(0).src = "web/help/iframe_third_menu.jsp" ;
	}
	
	$(document).ready(function() {

		/* 滑动/展开 */
		$("ul.help-expmenu li > div.help-expmenu-header").click(function() {

			var arrow = $(this).find("span.arrow");

			if (arrow.hasClass("up")) {
				arrow.removeClass("up");
				arrow.addClass("down");
			} else if (arrow.hasClass("down")) {
				arrow.removeClass("down");
				arrow.addClass("up");
			}

			$(this).parent().find("ul.help-expmenu-submenu").slideToggle();

		});

	});
	
	function ShowMenu(obj, n) {
		var Nav = obj.parentNode;
		if (!Nav.id) {
			var BName = Nav.getElementsByTagName("ol");
			var HName = Nav.getElementsByTagName("h2");
			var t = 2;
		} else {
			var BName = document.getElementById(Nav.id).getElementsByTagName(
					"span");
			var HName = document.getElementById(Nav.id).getElementsByTagName(
					".help-expmenu-header");
			var t = 1;
		}
		for ( var i = 0; i < HName.length; i++) {
			HName[i].innerHTML = HName[i].innerHTML.replace("-", "+");
			HName[i].className = "";
		}
		obj.className = "h" + t;
		for ( var i = 0; i < BName.length; i++) {
			if (i != n) {
				BName[i].className = "no";
			}
		}
		if (BName[n].className == "no") {
			BName[n].className = "";
			obj.innerHTML = obj.innerHTML.replace("+", "-");
		} else {
			BName[n].className = "no";
			obj.className = "";
			obj.innerHTML = obj.innerHTML.replace("-", "+");
		}
	}	

    
    /* iframe高度自适应 */
var browserVersion = window.navigator.userAgent.toUpperCase();
var isOpera = browserVersion.indexOf("OPERA") > -1 ? true : false;
var isFireFox = browserVersion.indexOf("FIREFOX") > -1 ? true : false;
var isChrome = browserVersion.indexOf("CHROME") > -1 ? true : false;
var isSafari = browserVersion.indexOf("SAFARI") > -1 ? true : false;
var isIE = (!!window.ActiveXObject || "ActiveXObject" in window);
var isIE9More = (! -[1, ] == false);
function reinitIframe(iframeId, minHeight) {
    try {
        var iframe = document.getElementById(iframeId);
        var bHeight = 0;
        if (isChrome == false && isSafari == false)
            bHeight = iframe.contentWindow.document.body.scrollHeight;

        var dHeight = 0;
        if (isFireFox == true)
            dHeight = iframe.contentWindow.document.documentElement.offsetHeight + 2;
        else if (isIE == false && isOpera == false)
            dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        else if (isIE == true && isIE9More) {//ie9+
            var heightDeviation = bHeight - eval("window.IE9MoreRealHeight" + iframeId);
            if (heightDeviation == 0) {
                bHeight += 3;
            } else if (heightDeviation != 3) {
                eval("window.IE9MoreRealHeight" + iframeId + "=" + bHeight);
                bHeight += 3;
            }
        }
        else//ie[6-8]、OPERA
            bHeight += 3;

        var height = Math.max(bHeight, dHeight);
        if (height < minHeight) height = minHeight;
        iframe.style.height = height + "px";
    } catch (ex) { }
}
function startInit(iframeId, minHeight) {
    eval("window.IE9MoreRealHeight" + iframeId + "=0");
    window.setInterval("reinitIframe('" + iframeId + "'," + minHeight + ")", 100);
}

//获取url 中参数(name 为你需要获取的参数)
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
    	 return  unescape(r[2]);
     }else{
    	 return null;
     }
}
</script>
</html>

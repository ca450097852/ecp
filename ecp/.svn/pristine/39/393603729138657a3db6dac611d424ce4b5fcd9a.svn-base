<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.hontek.sys.model.*"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<base href="<%=basePath%>">
    <title>电商平台</title>
  	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/demo/demo.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}static/js/easyui/themes/default/easyui.css"/>
	
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${basePath}static/js/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${basePath}static/js/module/comm/hontek.js"></script>
 
  </head>

  <script type="text/javascript">
     $(function(){
     	
     	tabCloseEven();
          $('.cs-navi-tab').click(function() {
				var $this = $(this);
				var href = $this.attr('src');
				var title = $this.text();
				var colId =	$this.attr('id');
				addTab(title, href);
		  });	
		 

   		$('#dhl').accordion({
   	     	onSelect:function(title,index){
   	     		$('#dhl').accordion('getSelected').css('overflow','scroll');
   	     	} 
   		});		  
     });
     function addTab(title, url){
		  if ($('#tabs').tabs('exists', title)){
				$('#tabs').tabs('select', title);//选中并刷新
				var currTab = $('#tabs').tabs('getSelected');
				var url = $(currTab.panel('options').content).attr('src');
				if(url != undefined && currTab.panel('options').title != '首页') {
					$('#tabs').tabs('update',{
						tab:currTab,
						options:{
							content:createFrame(url)
						}
					});
				}
		  } else {
				var content = createFrame(url);
				$('#tabs').tabs('add',{
					title:title,
					content:content,
					closable:true
				});
		  }
	      tabClose();
    }
    function createFrame(url) {
		var s = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
		return s;
    }
    
	function tabClose() {
		/*双击关闭TAB选项卡*/
		$(".tabs-inner").dblclick(function(){
			var subtitle = $(this).children(".tabs-closable").text();
			$('#tabs').tabs('close',subtitle);
		})
		/*为选项卡绑定右键*/
		$(".tabs-inner").bind('contextmenu',function(e){
			$('#mm').menu('show', {
				left: e.pageX,
				top: e.pageY
			});
	
			var subtitle =$(this).children(".tabs-closable").text();
	
			$('#mm').data("currtab",subtitle);
			$('#tabs').tabs('select',subtitle);
			return false;
		});
	}
	
	//绑定右键菜单事件
	function tabCloseEven() {
		//刷新
		$('#mm-tabupdate').click(function(){
			var currTab = $('#tabs').tabs('getSelected');
			var url = $(currTab.panel('options').content).attr('src');
			if(url != undefined && currTab.panel('options').title != '首页') {
				$('#tabs').tabs('update',{
					tab:currTab,
					options:{
						content:createFrame(url)
					}
				})
			}
		})
		//关闭当前
		$('#mm-tabclose').click(function(){
			var currtab_title = $('#mm').data("currtab");
			$('#tabs').tabs('close',currtab_title);
		})
		//全部关闭
		$('#mm-tabcloseall').click(function(){
			$('.tabs-inner span').each(function(i,n){
				var t = $(n).text();
				if(t != '首页') {
					$('#tabs').tabs('close',t);
				}
			});
		});
		//关闭除当前之外的TAB
		$('#mm-tabcloseother').click(function(){
			var prevall = $('.tabs-selected').prevAll();
			var nextall = $('.tabs-selected').nextAll();		
			if(prevall.length>0){
				prevall.each(function(i,n){
					var t=$('a:eq(0) span',$(n)).text();
					if(t != '首页') {
						$('#tabs').tabs('close',t);
					}
				});
			}
			if(nextall.length>0) {
				nextall.each(function(i,n){
					var t=$('a:eq(0) span',$(n)).text();
					if(t != '首页') {
						$('#tabs').tabs('close',t);
					}
				});
			}
			return false;
		});
		//关闭当前右侧的TAB
		$('#mm-tabcloseright').click(function(){
			var nextall = $('.tabs-selected').nextAll();
			if(nextall.length==0){
				//msgShow('系统提示','后边没有啦~~','error');
				alert('后边没有啦~~');
				return false;
			}
			nextall.each(function(i,n){
				var t=$('a:eq(0) span',$(n)).text();
				$('#tabs').tabs('close',t);
			});
			return false;
		});
		//关闭当前左侧的TAB
		$('#mm-tabcloseleft').click(function(){
			var prevall = $('.tabs-selected').prevAll();
			if(prevall.length==0){
				alert('到头了，前边没有啦~~');
				return false;
			}
			prevall.each(function(i,n){
				var t=$('a:eq(0) span',$(n)).text();
				$('#tabs').tabs('close',t);
			});
			return false;
		});
	
		//退出
		$("#mm-exit").click(function(){
			$('#mm').menu('hide');
		})
	}	

	function logout(){
		$.messager.confirm('提示', '您确定要退出系统吗?', function(r){
			if(r){
				window.location.href="login/logout.do";
			}
		});
	}

  </script>
  <body class="easyui-layout">
    <!-- 左边 - 菜单开始 -->
    <div data-options="region:'north',border:false" style="height:80px;background:#B3DFDA;padding:10px;background:url('<%=basePath %>/static/images/comm/bg.jpg') 0px top;padding:0px;marggin:0px">
		<div style="background:url('<%=basePath %>/static/images/comm/01.jpg') no-repeat 0px top;height: 80px">    
	    	<div id="pf" align="right">
	    	欢迎您：${loginUser.userName } &nbsp;&nbsp;<a href="javascript:void(0);" class="easyui-linkbutton" data-options="iconCls:'icon-exit',plain:true" onclick="logout();">退出</a>&nbsp;&nbsp;
	    	</div>
   		</div>
    </div>
	<div data-options="region:'west',iconCls:'icon-application_cascade',split:true,title:'系统导航栏'" style="width:200px;">
		<div id="dhl" class="easyui-accordion" data-options="fit:true,border:false"  align="center">
			<%
			List list = (List)request.getSession().getAttribute("UserCols");
			TsSysCol col = null;
			TsSysCol chd = null;
			for(int i=0;i<list.size();i++){
				col = (TsSysCol)list.get(i);
				String icon = col.getIconUrl();
				if(icon!=null&&!"".equals(icon)){
					%>			
					<div title="<%=col.getColName() %>" data-options="iconCls:'<%=icon %>'" style="padding:10px">
					<%
				}else{
					%>			
					<div title="<%=col.getColName() %>" style="padding:10px">
					<%
				}
				for(int j=0;j<col.getClildrenList().size();j++){
					chd = col.getClildrenList().get(j);
				%>
						<a href="javascript:void(0);" src="<%=basePath %><%=chd.getColUrl() %>" id="<%=chd.getColId() %>" class="cs-navi-tab easyui-linkbutton" plain="true"><%=chd.getColName() %></a><br/><br/>
				<%
				}
				%>
					</div>
				<%
			}
			 %>						
				</div>
		</div>
	</div>
	<!--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region</div>-->
	<div data-options="region:'south',border:false" style="height:20px;padding:0px;text-align: center">
		技术支持:广州薪火网络科技有限公司
	</div>
	<div data-options="region:'center'">
	     <div id="tabs" class="easyui-tabs"  fit="true" border="false" >
                <div title="首页">
				<div class="cs-home-remark">
				
				</div>
        </div>
	</div>
	<!-- 左边 - 菜单结束 -->
	
	<!-- 选项卡-右击事件 -->
	<div id="mm" class="easyui-menu cs-tab-menu">
		<div id="mm-tabupdate">刷新</div>
		<div class="menu-sep"></div>
		<div id="mm-tabclose">关闭</div>
		<div id="mm-tabcloseother">关闭其他</div>
		<div id="mm-tabcloseall">关闭全部</div>
	</div>
  </body>
</html>

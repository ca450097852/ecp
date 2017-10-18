<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>我是个机器人</title>
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
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">

		// 回车键事件 
		// 绑定键盘按下事件  
	    $(document).keypress(function(e) {  
	    // 回车键事件  
	       if(e.which == 13) {  
	   			jQuery("#btn").click();  
	       }  
	    }); 

		
		function ask(){

			var $q = $("#q");
			var $contents = $("#contents");
			 
			var INFO = $q.val();

			$contents.append("<p style='font-size: 14px;'>你说："+INFO+"<p>");
			
	        var APIKEY = "2a222de814d07ae70b4ccef59f7c08f2";
	        var getURL = "http://www.tuling123.com/openapi/api?key=" + APIKEY + "&info=" + INFO;
			
	         $.ajax({
	         	  url:getURL,
	         	  type:'get',
	         	  dataType:'json',
	         	  success : function(result) {
					   //console.info(result);
					   var code = result.code;
					   var text = result.text;
					   
					   if(code==100000){
						   $contents.append("<p style='font-size: 14px;'>机器人："+text+"<p>");			
						}else if(code==200000){
						   $contents.append("<p style='font-size: 14px;'>机器人："+text+" <a target='_blank'  href='"+result.url+"'>打开链接</a><p>");			
						}


						
					$q.val('');			
					document.getElementById('contentsLayout').scrollTop = document.getElementById('contentsLayout').scrollHeight;   
				  }    
	         });
		}
		
	</script>
  </head>
  
<body class="easyui-layout" >   
    <div data-options="region:'north',title:'North Title',split:true" style="height:150px;"></div>   
    <div data-options="region:'east',iconCls:'icon-reload',title:'East',split:true" style="width:200px;"></div>   
    <div data-options="region:'center',title:'对话窗口'">
    	<div class="easyui-layout" data-options="fit:true">   
            <div id="contentsLayout" data-options="region:'north',collapsible:false"  style="height:80%">
            	<div id="contents" style="width: 100%;height: 100%">
            	
            	</div>
            </div>   
            <div data-options="region:'center',title:'你想说什么?'" style="padding: 20px">
            	<input type="text" id="q" style="width: 500px;height: 50px;" style="font-size: 16px;">
            	<a id="btn" href="javascript:void(0)" onclick="ask()" class="easyui-linkbutton" data-options="iconCls:'icon-edit',size:'large'">send</a>  
            	<a id="btnClear" href="javascript:void(0)" onclick="$('#contents').html('')" class="easyui-linkbutton" data-options="iconCls:'icon-reload',size:'large'">clear</a>  

            </div>   
        </div> 
    
    </div>   
</body> 
</html>

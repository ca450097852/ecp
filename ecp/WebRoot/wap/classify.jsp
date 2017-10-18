<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.hontek.member.model.TbMemberUser"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>商城分类</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="description" content="溯源商城">
<link rel="stylesheet" href="lib/weui.min.css">
<link rel="stylesheet" href="css/jquery-weui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body ontouchstart>
<!--顶部搜索-->
<!--主体-->
<div class="wy-content">
  <div class="category-top">
    <header class='weui-header'>
  <div class="wy-header-title">商品分类</div>
</header>
  </div>
  
  <aside>
    <div class="menu-left scrollbar-none" id="sidebar">
      <ul id="firstClass">

      </ul>
    </div>
  </aside>

<div id="endClass"></div>

</div>

<!--底部导航-->
<jsp:include page="footer.jsp" >
	<jsp:param value="classify" name="pageName"/>
</jsp:include>
 	 
<script src="lib/jquery-2.1.4.js"></script> 
<script src="lib/fastclick.js"></script> 
<script>
  $(function() {
    FastClick.attach(document.body);
  });
</script>
<script src="js/jquery-weui.js"></script>
<script type="text/javascript">
	$(function($){			
		
		loadClassify();
		
		$("#searchInput").on('keypress',function(e) {  
            var keycode = e.keyCode;  
            if(keycode=='13') {  
                e.preventDefault();    
                //请求搜索接口  
                loadClassify();
            }  
     	});

		
		$('#sidebar ul li').click(function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			var index = $(this).index();
			$('.j-content').eq(index).show().siblings('.j-content').hide();
		});
		
		$('#type1').click();
		
	});

	function loadClassify(){
		var params = {};
        var searchName = $("#searchInput").val();  
		if(searchName){
			 params = {"typeName":searchName};
		}
		$.ajax({
		   type: "POST",
		   data: params,
		   url: "GoodsType/ns/page.mobile",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
				if(data){
					var rows = data.rows;
					var index=0;
					$("#firstClass").html('');
					$("#endClass").html("");
					for(var i=0;i<rows.length;i++){
						var row = rows[i];
						if(row.upcateId==0){
							//typeId":5,"upcateId":0,"typeNo":"JYDX","typeName":"生鲜","entId":0,"sts":1,"typeImg":"/ecpFiles/goodstype/20170601152407606.png","_parentId":null,"upcateName":null
					        if(index==0){
					        	$("#firstClass").append('<li class="active" id="type1">'+row.typeName+'</li>');
					        }else{
					        	$("#firstClass").append('<li>'+row.typeName+'</li>');
					        }
					        index++;				        
					        var chrClassHTML='<section class="menu-right padding-all j-content"><h5>'+row.typeName+'</h5><ul>';
					    	for(var j=0;j<rows.length;j++){
								var chrRow = rows[j];							
								if(row.typeId==chrRow.upcateId){								
									var typeImg = "upload/pro3.jpg";
									if(chrRow.typeImg){
										typeImg = chrRow.typeImg;
									}								
									chrClassHTML+='<li class="w-3"><a href="prolist.jsp?typeId='+chrRow.typeId+'"></a> <img src="'+typeImg+'"><span>'+chrRow.typeName+'</span></li>';								
								}
					    	}			
					    	chrClassHTML+='</ul></section>';
					    	$("#endClass").append(chrClassHTML);
					    				    	
						}
					}				
				}
		   }
		});
	}
</script>
</body>
</html>


var basePath;
var filePath;
var goodsTypeData ;
$(function(){
	findADInfoList();//广告页面
	$('.left-nav').hide();
	
	$('#classify').show();
	$('#classifyNum').val(1);
	
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
	goodsTypeData=$('#goodsTypeData').val();
	
	getLaeftNavList(goodsTypeData);//导航栏
	getGoodsColumn(goodsTypeData);
	
	
	
	var params = {"params[recommend]":1 ,"order":" order by create_time desc "};
	$.ajax({
	   type: "POST",
	   data: params,
	   url: "webGoods/ns/pageOrderBy.action",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var op =  pageOrderBy(data);
		   $('#con_one_2').html(op);
	   }
	});
	
	var params2 = {"order":" order by saled_num desc "};
	$.ajax({
		type: "POST",
		data: params2,
		url: "webGoods/ns/pageOrderBy.action",
		dataType:"json" ,
		async:false,
		success: function(data){
			var op =  pageOrderBy(data);
			$('#con_one_1').html(op);
		}
	});
	
	var params3 = {"order":" order by create_time desc "};
	$.ajax({
		type: "POST",
		data: params3,
		url: "webGoods/ns/pageOrderBy.action",
		dataType:"json" ,
		async:false,
		success: function(data){
			var op =  pageOrderBy(data);
			$('#con_one_3').html(op);
		}
	});
	
});
function pageOrderBy(data){
	   var rows =data.rows;
	   var op = '' ;
	   for(var i= 0 ; i < rows.length; i++){
		   if(i==8){
				break;
			}
		   op +='<a onclick="goodsDetail('+rows[i].goodsId+')" style="cursor:pointer;"><div class="recom_menudiv_img"><img src="'
		   +filePath+rows[i].goodsImg+'"/></div><p>'+rows[i].goodsName+'</p><strong class="price"><span>￥</span>'+rows[i].saledPrice+'</strong></a>';
		}
	   return op ;
}
//导航栏设置
function getLaeftNavList(data){
	var op = '' ;
	var rows =(JSON.parse(data)).rows;
	console.log(rows);
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].upcateId==0){
			op += ' <li><a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;">'+rows[i].typeName+'</a></li>';
		}
	}
	$('#left-nav ul').html(op);
}

//项目栏
function getGoodsColumn(data){
	var op = '' ;
	var rows =(JSON.parse(data)).rows;
	var num=0;
	
	for(var i= 0 ; i < rows.length ; i++){
		var temp="";
		if(rows[i].upcateId==0){
			temp +=","+rows[i].typeId;
			num=num+1;
			op += ' <div class="product-box box0'+(num)+'">';
			op += ' <div class="product-box-left"><div class="product-box-num">\
			            <p>F'+num+'</p></div>';
			       if(num==1){
			    	   op += '<div class="product-box-left-main" style="background-color:#76ad00">';
			       }else if(num==2){
			    	   op += '<div class="product-box-left-main" style="background-color:#00adcc">';
			       }else if(num==3){
			    	   op += '<div class="product-box-left-main" style="background-color:#832a1f">';
			       }else if(num==4){
			    	   op += '<div class="product-box-left-main" style="background-color:#ff9000">';
			       }else if(num==5){
			    	   op += '<div class="product-box-left-main" style="background-color:#329004">';
			       }else if(num==6){
			    	   op += '<div class="product-box-left-main" style="background-color:#ab3e83">';
			       }    
			 op +='<p><span>'+rows[i].typeName+'</span></p>\
			            <b>满199包邮</b><img style="" src="'+filePath+rows[i].typeImg+'"/>\
			            <div class="product-box-nav bd-r3"><ul>';
			 for(var j= 0 ; j < rows.length ; j++){
				 if(rows[i].typeId==rows[j].upcateId){
					 temp +=","+rows[j].typeId;
					 op +='<li><a onclick="typeIdList('+rows[j].typeId+')" style="cursor:pointer;">'+rows[j].typeName+'</a></li>';
				 }
			 }
			 op +='</ul></div><a onclick="typeIdList('+rows[i].typeId+')" style="cursor:pointer;" class="product-box-more"><strong>查看更多</strong><span></span></a></div></div>';
			 op += '<div class="product-box-content">';
			 op += getGoodsIdByColumnIds(temp.substr(1));
			 op += '</div>';
		}
		 op +='</div>';
	}
	$('#columns .product-columns-content').html(op);	
}
//项目栏点击事件
function typeIdList(typeId){
	$("#columnsFrom").children("input").val(typeId);
	$("#columnsFrom").submit();
}
//项目栏商品列表
function getGoodsIdByColumnIds(typeIds){
	var op ='' ;
	var parm = {"page":1,"rows":8,"typeIds":typeIds,"orderBy":"orderBySaledNumDesc"};
	$.ajax({
	   type: "POST",
	   data: parm,
	   url: "webGoods/ns/getGoodsByTypeIds.action",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   op +=  getGoodsListHtml(data.rows);
	   }
	});
	return op ;
}
function getGoodsListHtml(data){//<!--product-box-item--> 
	var op ='' ;
	for(var i= 0 ; i < data.length ; i++){
		op +='<form><a onclick="goodsDetail('+data[i].goodsId+')" class="product-box-item-02" style="border-right:none;cursor:pointer;">\
		    <div class="product-box-item-02-img"><img src="'+filePath+data[i].goodsImg+'" style="height: 100%;width: 80%;"/></div>\
		    <div class="product-box-item-02-intro">\
		      <p class="title-01">'+data[i].goodsName+'</p>\
		      <strong class="price"><span>￥</span>'+data[i].saledPrice+'</strong> <i class="old-price">￥'+data[i].marketPrice+'</i> </div>\
		    </a></form>';
	}
	return op ;
	
}
//进入详细页
function goodsDetail(goodsId){
	$("#jsFrom").children("input").val(goodsId);
	$("#jsFrom").submit();
}

//头部购物车点击
function shoppingcartTop(){
	if($("#memberName").html()=="null"){
		loginLayer();
	}else{
		window.location.href=basePath+"webcart/list.action";
	}
}
//登录弹出层
function loginLayer(){
	var content = '<div class="login_m">\
  <div class="login_boder">\
    <div class="login_padding" id="login_model">\
      <h2>用户名</h2>\
      <label>\
        <input type="text" name="account" id="account" class="txt_input txt_input2" placeholder="邮箱/手机/用户名">\
      </label>\
      <h2>密码</h2>\
      <label>\
        <input type="password" name="password" id="password" class="txt_input" >\
      </label>\
      <div class="rem_sub">\
        <label>\
          <input type="submit" class="sub_button"  onclick="loginForm()" value="登录" >\
        </label>\
      </div>\
    </div>\
  </div>\
</div>';
	layer.open({
	    type: 1, //page层
	    area: ['360px', '360px'],
	    title: '会员登陆',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content
	});  
}
//提交登录
function loginForm(){
	var account = $("#account").val() ;
	if(account==''){
		alert("请填写登录账号!");
		return;
	}
	var password = $("#password").val() ;
	if(	password==''){
		alert("请填写登录密码!");
		return;
	}	
	
	$.post('web/member/ns/LayerLogin.action',{'account':account,'password':password},function(result){
		if(result=="登录成功!"){
			layer.msg(result);
			window.location.href=basePath;
		}else{
			layer.msg(result);
		}
	},'TEXT')
    layer.closeAll();
}


function findADInfoList(){
	var op="";
	var parm = {"params[imgType]":1,"params[sts]":1};
	$.ajax({
	   type: "POST",
	   data: parm,
	   url: "banner/ns/page.action",
	   dataType:"json" ,
	   async:false,
	   success: function(data){
		   var rows=data.rows;
		   for(var i= 0 ; i < rows.length ; i++){
			   if(i==0){
				   op+='<li style=" opacity: 1;filter:alpha(opacity=100);"><a style="background:url('+filePath+rows[i].imgUrl+') center top no-repeat"></a></li>';
			   }else{
				   op+='<li><a style="background:url('+filePath+rows[i].imgUrl+') center top no-repeat"></a></li>';
			   }
		   }
	   }
	});
	 $(".lubo_box").html(op);
}

























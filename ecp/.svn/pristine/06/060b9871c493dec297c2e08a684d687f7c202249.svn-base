var basePath;
var filePath;
var num;
$(function(){
	$("#logined").hide();
	$("#loginout").hide();
	$('.left-nav').hide();
	$('#classify').hide();
	$('#h2id').addClass("icon-right");
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	num=$('#classifyNum').val();
	
	if($("#memberName").html()=="null"){
		$("#logined").hide();
		$("#loginout").show();
	}else{
		$("#loginout").hide();
		$("#logined").show();
		shoppingcartNum();
	}
	
	columnList();
	
	$.ajax({
		   type: "POST",
		   url: "ns/webGoodsType/page.action",
		   data : {"page":1 , "rows":1000},
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   $('#goodsTypeData').val(""+JSON.stringify(data));
			   var op = getHtmlList(data);
			   op+='</ul>';
			   $('#nav .order-list').html(op);
		   }
		});
	
	var $subblock = $(".subpage"), $head=$subblock.find('h2'), $ul = $("#proinfo"), $lis = $ul.find("li"), inter=false;
	$lis.hover(function(){
		if(!$(this).hasClass('nochild')){
			$(this).addClass("prosahover");
			$(this).find(".prosmore").removeClass('hide');
		}
	},function(){
		if(!$(this).hasClass('nochild')){
			if($(this).hasClass("prosahover")){
				$(this).removeClass("prosahover");
			}
			$(this).find(".prosmore").addClass('hide');
		}
	});
	//回车事件绑定  
    $('#goodsFind').bind('keypress', function(event) {  
        if (event.keyCode == "13") {              
            event.preventDefault();   
            //回车执行查询  
            findgoods(); //处理事件  
        }  
    });  
   
	
});
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

function shoppingcartNum(){
	$.ajax({
		   type: "POST",
		   url: "webcart/find.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   $('#shoppingcartNum').html(data.total);
		   }
		});
}
//全部分类点击

function classify(){
	if(num==0){
		$('#classify').show();
		$('#h2id').removeClass("icon-right");
		$('#h2id').addClass("icon-dropdown");
		num=1;
	}else if(num==1){
		$('#classify').hide();
		$('#h2id').removeClass("icon-dropdown");
		$('#h2id').addClass("icon-right");
		num=0;
	}
}
//第一级分类
function getHtmlList(data){
	var op = '<ul class="prosul clearfix" id="proinfo" style="display:block;">' ;
	var rows = data.rows ;
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].upcateId==0){
			op += getGoodsTypeHtml(rows[i].typeId,rows[i].typeName,rows[i].typeImg,rows);
		}
	}
	return op ;
}
//控制显示2个，第二级分类
function getHtmlListTwo(typeId,rows){
	var op = '' ;
	var num=0;
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].upcateId==typeId){
			num=num+1;
			op += getGoodsTypeTwoHtml(rows[i].typeId,rows[i].typeName);
		}
		if(num==3){
			break; 
		}
	}
	//追加弹出层，显示所有
	op+='</p><div class="prosmore hide"><span><em><a  onclick="goodsList('+typeId+')" style="cursor:pointer;">全部</a></em></span>';
	for(var i= 0 ; i < rows.length ; i++){
		if(rows[i].upcateId==typeId){
			op += getGoodsTypeHideHtml(rows[i].typeId,rows[i].typeName);
		}
	}
	op += '</div></li>' ;
	return op ;
}
//获取一个一级分类的html
function getGoodsTypeHtml(typeId,typeName,typeImg,rows){
	var op ='' ;
	op ='<li class="" style="background:url('+filePath+typeImg+') no-repeat;background-size:45px 45px;background-color:white;background-position: 0px 12px;"><i>&gt;</i><p><span><a onclick="goodsList('+typeId+')" style="cursor:pointer;">'+typeName+'</a></span>'+
	getHtmlListTwo(typeId,rows);
	
	return op ;
}
//获取一个二级分类的html
function getGoodsTypeTwoHtml(typeId,typeName){
	var op ='' ;
	op ='<a onclick="goodsList('+typeId+')" style="cursor:pointer;">'+typeName+
		'</a>';
	
	return op ;
}
//获取一个弹出分类的html
function getGoodsTypeHideHtml(typeId,typeName){
	var op ='' ;
	op ='<span><em><a class="morehot" onclick="goodsList('+typeId+')" style="cursor:pointer;">'+typeName+
	'</a></em></span>';
	
	return op ;
}

//登录弹出层
function layerLogin(index){
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
          <input type="submit" class="sub_button"  onclick="loginSeller('+index+')" value="登录" >\
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
	 //回车事件绑定  
    $('#password').bind('keypress', function(event) {  
    	if (event.keyCode == "13") {              
    		event.preventDefault();   
    		//回车执行查询  
    		loginSeller(index); //处理事件  
    	}  
    });
    $('#account').bind('keypress', function(event) {  
    	if (event.keyCode == "13") {              
    		event.preventDefault();   
    		//回车执行查询  
    		loginSeller(index); //处理事件  
    	}  
    });
}

//卖家中心
function seller(){
	if($("#memberName").html()=="null"){
		layerLogin(2);
	}else{
		window.location.href=basePath+"seller/shop/myshop.jsp";
	}
}
//买家中心
function buy(){
	if($("#memberName").html()=="null"){
		layerLogin(1);
	}else{
		window.location.href=basePath+"buy/custom/index.jsp";
	}
}
//提交登录
function loginSeller(index){
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
			if(index==1){
				window.location.href=basePath+"buy/custom/index.jsp";
			}else if(index==2){
				window.location.href=basePath+"seller/shop/myshop.jsp";
			}else{
				window.location.href=location;
			}
			
		}else{
			layer.msg(result);
		
		}
	},'TEXT')
    layer.closeAll();
}

function goodsList(typeId){
	$("#typeIdFrom").children("input").val(typeId);
	$("#typeIdFrom").submit();
}


function loginout(){
	$.ajax({
		url : 'web/member/logout.action',
	    type: "POST",
	    async:false,
	    dataType: "TEXT",
	    success: function (result) {
	    	window.location.href=location;
	    }
	});
}


function findgoods(){
	var search = $('#goodsFind').val();
	if(search==''){
		layer.msg("请输入搜索内容！");
		$('#goodsFind').focus();
	}else{
		window.location.href=basePath+"web/list.jsp?search="+encodeUnicode(search);
	}
}

// 转为unicode 编码  
function encodeUnicode(str) {  
    var res = [];  
    for ( var i=0; i<str.length; i++ ) {  
    res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);  
    }  
    return "\\u" + res.join("\\u");  
}  
  
var columnListRows;
function columnList(){
	$.ajax({
	   type: "POST",
	   url: "webGoodsColumn/ns/page.action",
	   dataType:"json",
	   async:false,
	   success: function(data){
		   var rows =data.rows;
		   columnListRows=rows;
		   var op=' <a  href="#">首页</a>';
		   for(var i= 0 ; i < rows.length; i++){
			   op+='<a onclick="columnClick('+rows[i].columnId+')" id="columnId'+rows[i].columnId+'" style="cursor:pointer;">'+rows[i].columnName+'</a>';
		   }
		   $('#nav .navbar').html(op);
	   }
	});
}

function columnClick(columnId){
	var columnName = $("#columnId"+columnId).text();
	window.location.href=basePath+"web/theme.jsp?columnId="+columnId+"&&columnName="+encodeUnicode(columnName);
}

//转为unicode 编码  
function encodeUnicode(str) {  
    var res = [];  
    for ( var i=0; i<str.length; i++ ) {  
    res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);  
    }  
    return "\\u" + res.join("\\u");  
}  
  
// 解码  
function decodeUnicode(str) {  
    str = str.replace(/\\/g, "%");  
    return unescape(str);  
}












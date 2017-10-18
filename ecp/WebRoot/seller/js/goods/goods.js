var basePath;
var filePath;
$(function(){
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
	$("#leftGoodsId").addClass("active");
	$("aside").removeClass("menu");
	
	$.ajax({
		url : 'web/shop/hadshop.action',
	    type: "POST",
	    data: {"memberId":null},
	    dataType: "JSON",
	    cache:false,
	    async:false,
	    success: function (shop) {   
	    	if(shop&&shop!=null){
	    		if(shop.shopState!=2){
	    			window.location.href=basePath+"seller/shop/waitshop.jsp";
	    		}
	    		var shopId = shop.shopId;
	    		var memberId = shop.memberId;
	    		var shopName = shop.shopName;
	    	
	    		
	    	}else{
	    		window.location.href=basePath+"seller/shop/noshop.jsp";
	    	}
	    	
	    }
	});
	
	find();
	
	
});

var page=1;
var nums =5; //每页出现的数据量

function find(){
	 params['rows'] = nums;//定义显示多少条数据
	 params['page'] = page;
	 
	$.ajax({
		   type: "POST",
		   data:params,
		   url: "webGoods/page1.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
			   var op = getHtmlList(data);
			   $('#tab1 .order-list').html(op);
			   if(page==1){
				   getPage(data); 
			   }
		   }
		});
}

function getPage(data){
	layui.use(['laypage', 'layer'], function(){
		  var laypage = layui.laypage
		  ,layer = layui.layer;
		 
		  laypage({
			    cont: 'layuipage'
			    ,pages:  Math.ceil(data.total/nums) //得到总页数
			    ,skin: '#0085D7'
			    ,skip: true
			    ,jump: function(obj, first){
				    //得到了当前页，用于向服务端请求对应数据
				    var curr = obj.curr;
				    if(page!=curr){
				    	 page=curr;
				    	 find();
				    }
				  }
			  });
		});
}

function addgoods(){
	window.location.href=basePath+"seller/goods/goodsAdd.jsp";
}

function showSearch(){
	var content = '<table width="98%">\
		<tr height="35px">\
	    	<td align="right">商品编号:</td>\
		    <td>\
		      <input type="text" id="goodsNo" name="params[goodsNo]" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">商品名称:</td>\
		    <td>\
		      <input type="text" id="goodsName" name="params[goodsName]" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">商品分类:</td>\
		    <td>\
		      <input type="text" id="h_typeId" name="typeId" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">状态:</td>\
		    <td>\
		      <select id="state" name="params[state]" style="width:250px">\
		      	<option value="">请选择</option>\
		    	<option value="0">待审核</option>\
		    	<option value="1">上架</option>\
		    	<option value="2">审核通过</option>\
		    	<option value="3">审核不通过</option>\
		    	<option value="4">下架</option>\
		    	<option value="5">库存不足</option>\
		      </select>\
		    </td>\
		</tr>\
		</table>';
	    content += '<div class="button_div"><input type="button" style="height:38px;padding: 0 18px;" value="确定" onclick="toSearch()"/>\
	    	&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="height:38px;padding: 0 18px;" value="取消" onclick="layer.closeAll();"/></div>';
	layer.open({
	    type: 1, //page层
	    area: ['400px', '300px'],
	    title: '设置搜索条件',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    zIndex:1,
	    content: content
	});   
	
	for(var item in searchParam){
		$('#'+item).val(searchParam[item]);
	}

	
	
	$('#h_typeId').combotree({    
	    url: 'ns/webGoodsType/combotree.action?flag=2',
//	    value:searchParam&&searchParam.typeId?searchParam.typeId:0
	});  
}
var searchParam;
var params = {};
function toSearch(){
	params={};
	searchParam = [];
	var goodsNo = $('#goodsNo').val();
	var goodsName = $('#goodsName').val();
	var typeId = $('#h_typeId').combotree('getValue');
	alert(typeId);
	var state = $('#state').val();
	/*if(goodsNo==''&&goodsName==''&&typeId==''){
		layer.msg('请选择');
	}*/
	
	if(goodsNo!=''){
		params['params[goodsNo]'] = goodsNo;
		searchParam['goodsNo'] = goodsNo;
	}
	if(goodsName!=''){
		params['params[goodsName]'] = goodsName;
		searchParam['goodsName'] = goodsName;
	}
	if(typeId!=0){
		params['params[typeId]'] = typeId;
		searchParam['typeId'] = typeId;
	}
	if(state!=''){
		params['params[state]'] = state;
		searchParam['state'] = state;
	}
	find();
	layer.closeAll();
}

function getHtmlList(data){
	var op = '' ;
	var goods = data.rows ;
	for(var i= 0 ; i < goods.length ; i++){
		op += getOrderHtml(goods[i]);
	}
	return op ;
}

//获取一个订单的html
function getOrderHtml(goods){
	if(goods != null){
		return getPayment(goods) ;
	}
}
//
function getGoodSts(value){
	if (value == 0) {
		return "待审核";
	} else if (value == 1) {
		return "上架";
	} else if (value == 2) {
		return "审核通过";
	} else if (value == 3) {
		return "审核不通过";
	} else if (value == 4) {
		return "下架";
	} else if (value == 5) {
		return "库存不足";
	}
}

//这里写“等待买家付款，一键支付”的div
function getPayment(goods){
	var op ='' ;
	op = '\
		<div class="order-status1">\
			<div class="order-title">\
				<div class="dd-num">\
					商品编号：<a>'+ goods.goodsNo +'</a>\
				</div>\
				<span>创建时间：'+ goods.createTime +'</span>\
			</div>\
			<div class="order-content">\
				<div class="order-left">\
				<!-- 这里加商品detail -->' ;
	
		op += getDetailHtml(goods);
		
		
		op +='</div>\
				<div class="order-right">\
					<li class="td td-amount">\
						<div class="item-price">\
						' + goods.inventory + '\
						</div><a onclick="upInventory('+goods.goodsId+','+goods.inventory+');" style="cursor:pointer;color:#0085D7;">库存设置</a></li>\
					<div class="move-right">\
						<li class="td td-status">\
							<div class="item-status">\
								<p class="Mystatus">'
						+getGoodSts(goods.state)+'</p>';
		if(goods.state!=0&&goods.state!=3){
			op +='<a onclick="upperLowerGoods('+goods.goodsId+','+1+');" style="cursor:pointer;color: green;">上架</a>\
			<a onclick="upperLowerGoods('+goods.goodsId+','+2+');" style="cursor:pointer;color: red;">&nbsp;&nbsp;下架</a>';
		}	
		op +='</div></div></li><li class="td td-change">\
							<a href="seller/goods/updateGoods.jsp?goodsId='+goods.goodsId+'">\
							<div class="am-btn am-btn-danger anniu">查看修改</div></a>\
						</li>\
					</div>\
				</div>\
			</div>\
		</div>			' ;
		return op ;
}

//获取订单中一个商品的html
function getDetailHtml(goods){
	var op = '\
<ul class="item-list">\
	<li class="td td-item">\
		<div class="item-pic">\
			<a href="/ecp/webGoods/ns/goods.action?goodsId='+goods.goodsId+'" target="_blank" class="J_MakePoint"> <img src="'+ goods.goodsImg +'" class="itempic J_ItemImg"> </a>\
		</div>\
		<div class="item-info">\
			<div class="item-basic-info">\
				<a  href="/ecp/webGoods/ns/goods.action?goodsId='+goods.goodsId+'" target="_blank">\
					<p>'+ goods.goodsName +'</p>\
					<p class="info-little">规格：' + getModelName(goods.goodsId) + '</p>\
			</a>\
			</div>\
		</div>\
	</li>\
	<li class="td td-price"><div class="item-price">' + goods.typeName + '</div></li>\
	<li class="td td-price"><div class="item-price">' +goods.saledPrice +'</div></li>\
	<li class="td td-price"><div class="item-price">' +goods.saledNum +'</div></li>\
	<li class="td td-operation">\
		<div class="item-operation">';

	op += '\
		</div>\
	</li>\
</ul>' ;
	return op ;
}

//获取订单中规格名
function getModelName(goodsId){
	var op = '' ;
	$.ajax({
		   type: "POST",
		   data: {"goodsId":goodsId},
		   url: "webGoodsModel/getList.action",
		   dataType:"json" ,
		   async:false,
		   success: function(data){
				for(var i= 0 ; i < data.length ; i++){
					op += data[i].modelName+"  ";
				}
				
		   }
		});
	return op ;
}
/**
 * 商品库存设置
 * @param 
 * @return
 */
function upInventory(goodsId,inventory){

	var content = '<table width="98%">\
		<tr height="50px">\
	    	<td align="right" style="padding: 30px;">库存数量:</td>\
		    <td>\
		      <input type="text" id="inventory" name="params[inventory]" style="width:250px">\
		    </td>\
		</tr></table>';
    content += '<div class="button_div"><input type="button" style="height:38px;padding: 0 18px;" value="确定" onclick="toInventory('+goodsId+')"/>\
    &nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="height:38px;padding: 0 18px;" value="取消" onclick="layer.closeAll();"/></div>';
    layer.open({
	    type: 1, //page层
	    area: ['400px', '200px'],
	    title: '设置搜索条件',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content
    });   
    $('#inventory').val(inventory);

}
function toInventory(goodsId){
	var inventory = $('#inventory').val();
	$.post('webGoods/upInventory.action',{'inventory':inventory,'ids':goodsId},function(result){
//		setTimeout('location=location', 800 );
		find();
		layer.msg(result);
	},'TEXT');
	layer.closeAll();
}
/**
 * 商品上下架
 * @param type 1：上架	2：下架
 * @return
 */
function upperLowerGoods(goodsId,type){
	$.post('webGoods/upperLowerGoods.action',{'type':type,'ids':goodsId},function(result){
		layer.msg(result);
		find();
	},'TEXT');
	
}





















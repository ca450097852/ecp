var dataGrid;
$(function(){
	dataGrid = $('#goodsTable').datagrid( {
		url : 'webGoods/page.action',
		//title : '商品管理',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		iconCls : 'icon-product',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		frozenColumns : [[{
			field : 'ck',
			checkbox : true
		}]],
		columns : [ [
		        {field : 'goodsNo',title : '商品编号',width : 100,align : 'left',halign : 'center'},
				{field : 'goodsName',title : '商品名称',width : 100,align : 'center',halign : 'center'},
				{field : 'typeName',title : '所属分类',width : 100,align : 'center'},
				//{field : 'chengbenPrice',title : '成本价',width : 100,align : 'center'},
				//{field : 'marketPrice',title : '市场价',width : 100,align : 'center'},
				{field : 'saledPrice',title : '销售价',width : 100,align : 'center'},
				{field : 'saledNum',title : '销售数量',width : 100,align : 'center'},
				{field : 'inventory',title : '库存数量',width : 100,align : 'center'},
				{field : 'state',title : '状态',width : 100,align : 'center',formatter : function(value, row, index) {
					if (value == 0) {
						return "待上架";
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
				}},
				{field : 'flag',title : '操作',width : 100,align : 'center',formatter : function(value, row, index) {
					//<a href="javascript:void(0)">查看详情</a>&nbsp;&nbsp;
					return '<a href="web/goods/updateGoods.jsp?goodsId='+row.goodsId+'">查看修改</a>';
				}}
		] ],
//		onLoadSuccess : function(data) {
//			f_timeout(data);
//		},
 		onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
	});
});
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
		      <input type="text" id="typeId" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">状态:</td>\
		    <td>\
		      <select id="state" name="params[state]" style="width:250px">\
		      	<option value="">请选择</option>\
		    	<option value="0">待上架</option>\
		    	<option value="1">上架</option>\
		    	<option value="2">审核通过</option>\
		    	<option value="3">审核不通过</option>\
		    	<option value="4">下架</option>\
		    	<option value="5">库存不足</option>\
		      </select>\
		    </td>\
		</tr>\
		</table>';
	    content += '<div class="button_div"><input type="button" value="确定" onclick="toSearch()"/><input type="button" value="取消" onclick="layer.closeAll();"/></div>';
	layer.open({
	    type: 1, //page层
	    area: ['400px', '300px'],
	    title: '设置搜索条件',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content
	});   
	
	for(var item in searchParam){
		$('#'+item).val(searchParam[item]);
	}
	
	$('#typeId').combotree({    
	    url: 'webGoodsType/combotree.action?flag=2',
	    value:searchParam&&searchParam.typeId?searchParam.typeId:0
	});  
}
var searchParam;
function toSearch(){
	searchParam = [];
	var goodsNo = $('#goodsNo').val();
	var goodsName = $('#goodsName').val();
	var typeId = $('#typeId').combotree('getValue');
	var state = $('#state').val();
	/*if(goodsNo==''&&goodsName==''&&typeId==''){
		layer.msg('请选择');
	}*/
	var params = [];
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
	dataGrid.datagrid('load',params);
	layer.closeAll();
}
/**
 * 商品上下架
 * @param type 1：上架	2：下架
 * @return
 */
function upperLowerGoods(type){
	var rows = dataGrid.datagrid('getSelections');
	if(rows.length==0){
		layer.msg('请选择商品');
		return;
	}
	var ids = new Array();
	for(var i=0;i<rows.length;i++){
		var row = rows[i];
		if((type==1&&row.state!=1)||(type==2&&row.state!=4)){
			ids.push(row.goodsId);
		}
	}
	if(ids.length==0){
		if(type==1){
			layer.msg('请不要选择已上架的商品，谢谢');
		}else{
			layer.msg('请不要选择已下架的商品，谢谢');
		}
		return;
	}
	$.post('webGoods/upperLowerGoods.action',{'type':type,'ids':ids.join(',')},function(result){
		layer.msg(result);
		dataGrid.datagrid('reload');
	},'TEXT');
	
}
/**
 * 商品库存设置
 * @param 
 * @return
 */
function upInventory(){
	var rows = dataGrid.datagrid('getSelections');
	if(rows.length==0){
		layer.msg('请选择商品');
		return;
	}else{
		if (rows.length > 1) {
			$.messager.alert('提示', '只能设置一条记录!', 'info');
			return false;
		} else {
			var content = '<table width="98%">\
				<tr height="35px">\
			    	<td align="right">库存数量:</td>\
				    <td>\
				      <input type="text" id="inventory" name="params[inventory]" style="width:250px">\
				    </td>\
				</tr></table>';
		    content += '<div class="button_div"><input type="button" value="确定" onclick="toInventory('+rows[0].goodsId+')"/><input type="button" value="取消" onclick="layer.closeAll();"/></div>';
		    layer.open({
			    type: 1, //page层
			    area: ['400px', '300px'],
			    title: '设置搜索条件',
			    skin: 'layui-layer-molv', //墨绿风格
			    shade: 0.6, //遮罩透明度
			    shift: 5, //0-6的动画形式，-1不开启
			    content: content
		    });   
		    $('#inventory').val(rows[0].inventory);
		}
	}	
}

function toInventory(goodsId){
	var inventory = $('#inventory').val();
	$.post('webGoods/upInventory.action',{'inventory':inventory,'ids':goodsId},function(result){
		layer.msg(result);
		dataGrid.datagrid('reload');
	},'TEXT');
	layer.closeAll();
}










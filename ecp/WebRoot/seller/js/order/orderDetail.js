var dataGrid;
var formUrl;
$(function() {

	var orderId =  $('#orderId').val();
	var queryParams = {};
	queryParams['params[orderId]'] = orderId;
	$('#detailDatagrid').datagrid({    
		url : 'orderDetail/page.action',
		queryParams: queryParams ,
		title : '商品详情',
		iconCls : 'icon-product',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
//		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		frozenColumns : [[{
			field : 'ck',
			checkbox : true
		}]], 
	    columns:[[    
	        {field:'goodsName',title:'商品名称',width:400,align:'left',halign:'center'},
	        {field:'goodsName',title:'商品规格',width:400,align:'left',halign:'center'},
	        {field:'goodsCount',title:'商品数量',width:60,align:'right',halign:'center'},
	        {field:'goodsPrice',title:'商品价格',width:75,align:'right',halign:'center'},
	    ]]    
	}); 
	$.ajax({
		   type: "POST",
		   url: "ns/weborder/pageBySale.action",
		   data: queryParams,
		   async:false,
		   success: function(result){
			   var data = JSON.parse(result);
			   $("#detailForm").form('load',data.rows[0]);
		   }
		});
	
});
		

var dataGrid;
var formUrl;
$(function() {
	$('#inventoryWin').window('close'); 
	dataGrid = $('#goodsBrandDatagrid').datagrid( {
		url : 'inventory/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '商品库存记录管理',
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
				{field : 'recordId',title : '记录ID',width : 200,align : 'left',halign : 'center',hidden:true},
				{field : 'goodsName',title : '商品名称',width : 200,align : 'left' ,halign : 'center'},
				{field : 'memberName',title : '卖家名称',width : 200,align : 'left' ,halign : 'center'},
				{field : 'shopName',title : '店铺名称',width : 200,align : 'left' ,halign : 'center'},
				{field : 'oldCount',title : '商品原数量',width : 200,align : 'right' ,halign : 'center'},
				{field : 'changeType',title : '变化类别',width : 200,align : 'center' , formatter : function(value, row, index){
					if (value == 1) {
						return "<span style='color:green'>增加</span>";
					} else if (value == 2){
						return "<span style='color:red'>减少</span>";
					}
				}},
				{field : 'changeCount',title : '变化数量',width : 200, align : 'right' , halign : 'center'},
				{field : 'changeTime',title : '变化时间',width : 200,align : 'center' ,halign : 'center'},
				{field : 'changeCause',title : '变化原因',width : 200,align : 'left',formatter : function(value, row, index) {
						if (value.length > 20) {
							return value.substr(0,20) + "..." ;
						} else {
							return value;
						}
				}} ,
				{field : 'aaa',title : '操作',width : 200,align : 'center',formatter : function(value, row, index) {
					var op ='<a href="javascript:void(0);" onClick="aaa(' + index +')">详情</a>&nbsp;&nbsp' ;
					return op;
			}}
		] ],
		onLoadSuccess : function(data) {
			f_timeout(data);
		},
 		onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
	});
	
});
		
// 搜索
function find(){
   var goodsName = $('#goodsName').val();
   var memberName = $('#memberName').val();
   var shopName = $('#shopName').val();
   var changeType = $('#changeType').val();
   var beginTime = $('#beginTime').datebox('getValue');
   var endTime = $('#endTime').datebox('getValue');
   
   var queryParams = {"params[goodsName]":goodsName,
		   "params[memberName]":memberName,
		   "params[shopName]":shopName,
		   "params[changeType]":changeType,
		   "params[beginTime]":beginTime,
		   "params[endTime]":endTime,
		   };
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//重置
function reset() {
	 $('#goodsName').val("");
	 $('#memberName').val("");
	 $('#shopName').val("");
	 $('#changeType').val("");
	 $('#beginTime').datebox('setValue',"");
	 $('#endTime').datebox('setValue',"");
	dataGrid.datagrid('reload', {});
}

//查看详情
function aaa(index){
	$('#inventoryForm').form('clear');
	$('#inventoryWin').window('open'); 
	var rows =  dataGrid.datagrid('getRows');               
	$('#inventoryForm').form('load',rows[index]);
} 


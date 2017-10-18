var dataGrid;
var formUrl;
$(function() {
	$("#dlg").window('close');
	
	dataGrid = $('#memberDatagrid').datagrid( {
		url : 'memberRecommend/page.action',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '推荐记录管理',
		iconCls : 'icon-user',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		frozenColumns : [ [ {
			field : 'ck',
			checkbox : true
		} ] ],
		columns : [ [
				{field : 'nickName1',title : '推荐人',width : 50,align : 'center',},
				{field : 'nickName',title : '被推荐人',width : 50,align : 'center',},
				{field : 'recommendMoney',title : '推荐奖励金额',width : 50,align : 'center',},
				{field : 'state',title : '奖励金提取状态',width : 100,align : 'center',formatter:
					function(value,row,index){
					
					if(value=='1'){
						return "未提取";
					}
					if(value=='2'){
						return "已提取";
					}
				}
				
				},
				{field : 'createTime',title : '记录时间',width : 100,align : 'left',halign : 'center'},
				{field : 'mrId',title : '操作',width : 100,align : 'left',halign : 'center',formatter:
					function(value,row,index){
					return '<a href="javascript:void(0)" onclick="findxx('+index+')">查看详细</a>';
				}
				},
		] ],
		onLoadSuccess : function(data) {
			f_timeout(data);
			$(top.hangge());
		},
 		onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
		,
		
	  
	 
		
	});
});
		

		
// 搜索
function find(){
   var levelName = $('#levelName').val();
   
   var queryParams={};
   if(levelName==""){
	   dataGrid.datagrid('load',queryParams);   //点击搜索
   }else{
	    queryParams = {"params[nickName1]":levelName};
	   
	   dataGrid.datagrid('load',queryParams);   //点击搜索	
	   }
  	   
}
		


//查看详细
function findxx(index){
	var claim = $('#memberDatagrid').datagrid('getRows')[index];
	
	$('#mrId').numberbox('setValue',claim.orderId);
	$('#nickName1').textbox('setValue',claim.nickName1);	
	$('#nickName').textbox('setValue',claim.nickName);	
	$('#orderMoney').numberbox('setValue',claim.orderMoney);
	if(claim.state=="1"){
		$('#state').textbox('setValue',"未提取");	
	}else{
		$('#state').textbox('setValue',"已提取");	
	}
	$('#orderMoney').numberbox('setValue',claim.orderMoney);
	$('#recommendMoney').numberbox('setValue',claim.recommendMoney);
	$('#createTime').textbox('setValue',claim.createTime);
	$('#win').window('open');
	goods(claim.orderId);
}
//商品信息
function goods(orderId){
	 $('#goodsDatagrid').datagrid( {
			url : 'memberRecommend/page.action',
			queryParams: {
				"params[orderId]":orderId,
			},

			toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
			title : '商品信息',
			iconCls : 'icon-product',
			pageSize : 10,// 默认选择的分页是每页10行数据
			pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
			striped : true,// 设置为true将交替显示行背景。
			fit : true,
			fitColumns : true,
			remoteSort : true,
			pagination : true,
			rownumbers : true,
			frozenColumns : [ [ {
				field : 'ck',
				checkbox : true
			} ] ],
			columns : [ [
					{field : 'goodsName',title : '商品名称',width : 50,align : 'center',},
					{field : 'modelName',title : '商品规格',width : 50,align : 'center',},
					{field : 'goodsCount',title : '商品数量',width : 50,align : 'center',},
					{field : 'goodsPrice',title : '商品价格',width : 50,align : 'center',},
			] ],
			
		});
}





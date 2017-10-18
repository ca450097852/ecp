var dataGrid;
var formUrl;
$(function() {
	dataGrid = $('#orderDatagrid').datagrid( {
		url : 'order/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '订单管理',
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
		columns : [[
				{field : 'orderId',title : '订单ID',width : 200,align : 'left',halign : 'center'},
				{field : 'memberIdSaleName',title : '卖家名',width : 200,align : 'left',halign : 'center'},
				{field : 'memberIdBuyName',title : '买家名',width : 200,align : 'left',halign : 'center'},
				{field : 'orderType',title : '下单方式',width : 100,align : 'center',halign : 'center',formatter : function(value, row, index) {
					if (value == 1) {
						return "网页下单";
					} else if (value == 2){
						return "App下单";
					}
				}},
				{field : 'orderTime',title : '下单时间',width : 200,align : 'center',halign : 'center'},
				{field : 'totalAmount',title : '订单总额',width : 200,align : 'right',halign : 'center'},
				{field : 'orderState',title : '订单状态',width : 200,align : 'center',halign : 'center',formatter : function(value, row, index) {
					if (value == 1) {
						return "交易中";
					} else if (value == 2){
						return "取消";
					} else if (value == 3){
						return "无效";
					} else if (value == 4){
						return "交易完成";
					} else if (value == 5){
						return "退货";
					}
				}},
				{field : 'aa',title : '操作',width : 400,align : 'center',halign : 'center',formatter : function(value, row, index) {
					var op = '<a href="javascript:void(0);" onClick="detail(' + index +')">详情</a>&nbsp;&nbsp'
							+'<a href="javascript:void(0);" onClick="pay(' + index +')">支付信息</a>&nbsp;&nbsp'
							+'<a href="javascript:void(0);" onClick="logistics(' + index +')">物流信息</a>&nbsp;&nbsp'
							+'<a href="javascript:void(0);" onClick="refund(' + index +')">退款信息</a>&nbsp;&nbsp';
					return op;
				}}
		]],
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
   var orderId = $('#orderId').val();
   var memberIdSaleName = $('#memberIdSaleName').val();
   var memberIdBuyName = $('#memberIdBuyName').val();
   var orderType = $('#orderType').val();
   var beginTime = $('#beginTime').datebox('getValue');
   var endTime = $('#endTime').datebox('getValue');
   var queryParams = {"params[orderId]":orderId,
		   "params[memberIdSaleName]":memberIdSaleName,
		   "params[memberIdBuyName]":memberIdBuyName,
		   "params[orderType]":orderType,
		   "params[beginTime]":beginTime,
		   "params[endTime]":endTime
		   };
  
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//重置
function reset() {
	   var orderId = $('#orderId').val("");
	   var memberIdSaleName = $('#memberIdSaleName').val("");
	   var memberIdBuyName = $('#memberIdBuyName').val("");
	   var orderType = $('#orderType').val("");
	   var beginTime = $('#beginTime').datebox('setValue',"");
	   var endTime = $('#endTime').datebox('setValue',"");
	dataGrid.datagrid('reload', {});
}

//详情
function detail(index){
	var row = dataGrid.datagrid("getRows")[index];
	$("#detailForm").form('load',row);
	var queryParams = {"params[orderId]":row.orderId};
	
	$('#detailDatagrid').datagrid({    
		url : 'orderDetail/page.do',
		queryParams: queryParams ,
		title : '商品详情',
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
	    columns:[[    
	        {field:'goodsName',title:'商品名称',width:100,align:'left',halign:'center'},
	        {field:'goodsName',title:'商品规格',width:100,align:'left',halign:'center'},
	        {field:'goodsCount',title:'商品数量',width:100,align:'right',halign:'center'},
	        {field:'goodsPrice',title:'商品价格',width:100,align:'left',halign:'center'},
	    ]]    
	}); 
	$("#detailWindow").window('open').dialog('setTitle', '订单详细');
	
}

//支付管理
function pay(index){
	var row = dataGrid.datagrid("getRows")[index];
	var queryParams = {"params[orderId]":row.orderId};
	$.ajax({
		   type: "POST",
		   url: "payment/findTbPaymentByParam.do",
		   data: queryParams,
		   success: function(data){
			   $("#payForm").form('load',data);
		   }
		});
	$("#payWindow").window('open').dialog('setTitle', '支付管理');
}

//物流管理
function logistics(index){
	var row = dataGrid.datagrid("getRows")[index];
	var queryParams = {"params[orderId]":row.orderId};
	$.ajax({
		   type: "POST",
		   url: "logis/findTbLogisByParam.do",
		   data: queryParams,
		   success: function(data){
			   $("#logisticsForm").form('load',data);
		   }
		});
	$("#logisticsWindow").window('open').dialog('setTitle', '物流管理');
}

//退款信息 
function refund(index){
	var row = dataGrid.datagrid("getRows")[index];
	var queryParams = {"params[orderId]":row.orderId};
	$.ajax({
		   type: "POST",
		   url: "refund/findTbRefundByParam.do",
		   data: queryParams,
		   success: function(data){
			   $("#refundForm").form('load',data);
		   }
		});
	$("#refundWindow").window('open').dialog('setTitle', '退款信息');
}

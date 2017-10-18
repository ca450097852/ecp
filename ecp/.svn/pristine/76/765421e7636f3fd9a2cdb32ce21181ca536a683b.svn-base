var dataGrid;

//关闭进度遮罩
$(top.hangge());

$(function() {
	dataGrid = $('#logDatagrid').datagrid( {
		url : 'log/page.do',
		title : '日志管理',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		iconCls : 'icon-product',
		pageSize : 25,// 默认选择的分页是每页10行数据
		pageList : [ 15, 25, 35, 55, 100 ],// 可以选择的分页集合
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
						{field : 'funcName',title : '操作名称',width : 100,align : 'center'},
						{field : 'actType',title : '操作类型',width : 100,align : 'center',
							formatter: function(value,row,index){
								return convertType(value);
							}
						},
						{field : 'userName',title : '用户名称',width : 100,align : 'center'},
						{field : 'logTime',title : '操作时间',width : 150,align : 'center',sortable : true},
						{field : 'computerIp',title : 'IP地址',width : 150,align : 'center'}
		              ] ],
		onLoadSuccess : function(data) {
			f_timeout(data);
		},
 		onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
	});
	
	$("#startTime").datetimepicker({language:'zh-CN', format: 'yyyy-mm-dd hh:ii'});
	$("#endTime").datetimepicker({language:'zh-CN', format: 'yyyy-mm-dd hh:ii'});
	
});
		
function convertType(actType){
	if(actType==0){
		return '审核';
	}else if(actType==1){
		return '新增';
	}else if(actType==2){
		return '删除';
	}else if(actType==3){
		return '修改';
	}else if(actType==4){
		return '登录';
	}else if(actType==5){
		return '登录';
	}else if(actType==6){
		return '退出';
	}else{
		return actType;
	}
}

// 删除
//function removeLog(){
//	var rows = bootstrapTable.bootstrapTable("getSelections");
//	 //判断是否选择行
//	if (!rows || rows.length == 0) {
//		$.alert({title: '提示',content: '请选择要删除的记录!'});
//		return false;
//	}else{
//		var obj = new Array();
//		for(i=0;i<rows.length;i++){
//			obj.push(rows[i].logId);
//		}
//		var ids = obj.join(',');
//		$.confirm({title: '提示',content: '确定删除选中数据?',confirm: function(){
//	         $.ajax({
//	         	  url:'log/delete.do',
//	         	  data:'ids='+ids,
//	         	  type:'post',
//	         	  dataType:'text',
//	         	  success : function(result) {
//					   $.alert({ title : '提示', content : result,autoClose:'confirm|3000'});
//					   bootstrapTable.bootstrapTable('refresh');
//				  }    
//	         });				 		
//	    }
//		});
//	}
//}
		
// 搜索
function find(){
	

   var userName = $('#userName').val();
   var ip = $('#ip').val();
   var startTime = $('#startTime').datebox('getValue'); 
   var endTime = $('#endTime').datebox('getValue'); 
   var queryParams = {
		   "params[userName]":userName,
		   "params[computerIp]":ip,
		   "params[startTime]":startTime,
		   "params[endTime]":endTime};
   
   dataGrid.datagrid('load',queryParams);   //点击搜索
}
		
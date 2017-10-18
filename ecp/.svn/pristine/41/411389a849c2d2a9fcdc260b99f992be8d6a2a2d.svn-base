var dataGrid;
var formUrl;
$(function() {
	dataGrid = $('#sysColDatagrid').treegrid( {
		url : 'sysCol/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '栏目菜单管理',
		iconCls : 'icon-sysCol',
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		idField:'colId',    
		treeField:'colName',  
		frozenColumns : [ [ {
			field : 'ck',
			checkbox : true
		} ] ],
		columns : [ [
				{field : 'colName',title : '菜单名称',width : 200,align : 'left',halign : 'center'},
				{field : 'colUrl',title : '菜单地址',width : 200,align : 'center'},
				{field : 'seq',title : '顺序号',width : 100,align : 'center'},
				{field : 'iconUrl',title : '图标',width : 100,align : 'center'}
		] ],
		onLoadSuccess : function(data) {
			f_timeout(data);
		}
	});
});
		
// 添加
function addSysCol(){
	 $('#sysColForm').form('reset');
	 
	 var row = dataGrid.treegrid("getSelected");

	 $('#_parentId').combotree({    
	    url: 'sysCol/combotree.do',
	    value :row==null ? 0 : row.colId ,
	    required: true   
	 });  

	 $("#sysColWindow").dialog("open").dialog('setTitle', '添加系统栏目菜单');
	 formUrl = "sysCol/add.do"
}
		
// 修改
function updateSysCol(){
	var rows = dataGrid.treegrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "sysCol/update.do";				 
	         $("#sysColForm").form("load", rows[0]);
	    	 $('#_parentId').combotree({    
    		    url: 'sysCol/combotree.do',
    		    value : rows[0]._parentId,
    		    required: true   
    		 }); 
			 $('#sysColWindow').window('open').window('setTitle', '修改系统栏目菜单');
			 $('#sysColForm').form('validate');
	    }
	}
}
				
// 删除
function removeSysCol(){
	var rows = dataGrid.treegrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].colId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'sysCol/delete.do',
		         	  data:'ids='+ids,
		         	  type:'post',
		         	  dataType:'text',
		         	  success : function(result) {
						   $.messager.show({ title : '提示', msg : result});
						   dataGrid.treegrid('reload');
					  }    
		         });				 
			}
		});
	}
}
		
// 搜索
function find(){
   var sysColName = $('#name').val();
   var queryParams = {"sysColName":sysColName};
   dataGrid.treegrid('load',queryParams);   //点击搜索		   
}
		
/**
 * 提交表单 - 添加系统栏目菜单
 */
function submitForm() {
	
	if($('#sysColForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#sysColForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			dataGrid.treegrid('reload');
			closeWin('sysColWindow');
		}
	});
}
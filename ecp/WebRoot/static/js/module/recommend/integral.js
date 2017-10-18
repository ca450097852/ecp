var dataGrid;
var formUrl;
$(function() {
	$("#dlg").window('close');
	
	dataGrid = $('#memberDatagrid').datagrid( {
		url : 'recommend/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '推荐等级管理',
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
				{field : 'levelName',title : '等级名称',width : 150,align : 'center',},
				{field : 'score',title : '等级金额',width : 50,align : 'center',},
				{field : 'scale',title : '奖励比例',width : 50,align : 'center',},
				{field : 'levelDesc',title : '等级介绍',width : 100,align : 'center'},
				{field : 'createTime',title : '创建时间',width : 100,align : 'left',halign : 'center'},
				
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
		
// 添加
function addEntType(){
	 $('#memberForm').form('clear');
	 $("#memberWindow").dialog("open").dialog('setTitle', '添加会员等级类型');
	 formUrl = "recommend/add.do";
}
		
// 修改
function updateEntType(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "recommend/update.do";				 
	         $("#memberForm").form("load", rows[0]);
			 $('#memberWindow').window('open').window('setTitle', '修改会员积分类型');
	    }
	}
}
				
// 删除
function removeMember(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].levelId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'recommend/delete.do',
		         	  data:'ids='+ids,
		         	  type:'post',
		         	  dataType:'text',
		         	  success : function(result) {
						   $.messager.show({ title : '提示', msg : result});
						   dataGrid.datagrid('reload');
					  }    
		         });				 
			}
		});
	}
}
		
// 搜索
function find(){
   var levelName = $('#levelName').val();
   var queryParams={};
   if(levelName==""){
	   dataGrid.datagrid('load',queryParams);   //点击搜索
   }else{
	    queryParams = {"params[levelName]":levelName};
	   dataGrid.datagrid('load',queryParams);   //点击搜索	
	   }
  	   
}
		
/**
 * 提交表单 - 添加会员积分类型
 */
function submitForm() {
	
	if($('#memberForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#memberForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			dataGrid.datagrid('reload');
			closeWin('memberWindow');
		}
	});
}








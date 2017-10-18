var basePath;
var filePath;
var dataGrid;
var formUrl;
$(function() {
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	
	
	dataGrid = $('#themeDatagrid').datagrid( {
		url : 'theme/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '主题管理',
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
				{field : 'themeName',title : '主题名称',width : 150,align : 'center',sortable : true},
				{field : 'themeTime',title : '主题时间',width : 50,align : 'center'},
				{field : 'themeIntro',title : '主题介绍',width : 100,align : 'center'},
				{field : 'createTime',title : '创建时间',width : 100,align : 'center'},
				{field : 'state',title : '状态',width : 50,align : 'center',formatter: function(value,row,index){
					//1未发布；2已发布
					 if(value==2){
						return "<font color=green>已发布</font>";
					}
						 return "<font color=red>未发布</font>";;
					
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
		
// 添加
function addTheme(){
	 $('#themeForm').form('clear');
	 $("#themeWindow").dialog("open").dialog('setTitle', '添加主题');
	 formUrl = "theme/add.do"
}
		
// 修改
function updateTheme(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "theme/update.do";				 
	         $("#themeForm").form("load", rows[0]);
			 $('#themeWindow').window('open').window('setTitle', '修改主题');
	    }
	}
}
		
// 搜索
function find(){
   var name = $('#themeName').val();
   var queryParams = {"params[themeName]":name};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}



//审核
function doAuditsts(sts){
	// sts : 1未发布； 2已发布
	var rows = dataGrid.datagrid("getSelections");
	//判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要审核的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		//循环给提交删除参数赋值
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].themeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '是否继续执行?', function (r){
			if (!r) {
				return;
		    }else{
				$.post(
					'theme/auditSts.do', 
					{
						'ids' : ids
						,'type' : sts
					},
					function(result) {
						$.messager.show({ title : '提示', msg : result});
						dataGrid.datagrid('reload');
					}
				);
		    }
		});    
	}
}

//删除
function removeTheme(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].themeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'theme/delete.do',
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

/**
 * 提交表单 - 添加主题
 */
function submitForm() {
	
	if($('#themeForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#themeForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			$("#themeWindow").window('close');
			dataGrid.datagrid('reload');
		}
	});
}
		

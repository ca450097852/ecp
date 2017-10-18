var dataGrid;
var formUrl;
$(function() {
	$("#myWindow").window('close');
	dataGrid = $('#enterpriseDatagrid').datagrid( {
		url : 'enterprise/page.do',
		title : '机构管理',
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
{field : 'entName',title : '机构名称',width : 200,align : 'center',sortable : true},
{field : 'regAddr',title : '机构地址',width : 200,align : 'center'},
{field : 'contacts',title : '联系人',width : 100,align : 'center'},
{field : 'tel',title : '联系电话',width : 100,align : 'center'},
{field : 'sts',title : '机构状态',width : 100,align : 'center',formatter: function(value,row,index){
	if(value==0){
		return "发布";
	}else if(value==1){
		return "<font color='red'>作废</font>";
	}
}},
{field : 'intro',title : '机构介绍',width : 200,align : 'center'}
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
function addEnterprise(){
	 
	//重置表单
    resetFormFieldValue($("#enterpriseForm"));         
	 formUrl = "enterprise/add.do";
	$("#myWindow").dialog("open").dialog('setTitle', '添加机构');

	 
	 $('#_parent_id').combotree({    
	    url: 'enterprise/combotree.do',    
	    height:34,
	    required: true   
	 });  
	 
	 $('#entType').combobox({    
	    url: 'entType/combobox.do',    
	    height:34,
	    required: true   
	 }); 
	 
}
		
// 修改
function updateEnterprise(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
		$.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	    	$.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "enterprise/update.do";				 
	         	         
	         setFormFieldValue(rows[0],$("#enterpriseForm"));         
	         
	    	 $('#_parent_id').combotree({    
    		    url: 'enterprise/combotree.do',    
    		    required: true,
    		    value:rows[0].parentId
    		 }); 
	    	 
	    	 $('#entType').combobox({    
    		    url: 'entType/combobox.do',    
    		    required: true,
    		    value:rows[0].entType
    		 }); 
			    $('#myWindow').window('open').window('setTitle', '修改机构菜单');;
	    }
	}
}
				
// 删除
function removeEnterprise(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!','info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].entId);
		}
		var ids = obj.join(',');

		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'enterprise/delete.do',
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
   var enterpriseName = $('#name').val();
   var queryParams = {"params[entName]":enterpriseName};
   dataGrid.datagrid('load',queryParams);   //点击搜索
}
		
/**
 * 提交表单 - 添加系统机构
 */
function submitForm() {
	
/*	if(!checkFieldValue("_parent_id", "请选择上级机构!")){
		return false;
	}*/
	
	if(!checkFieldValue("entName", "请输入机构名称!")){
		return false;
	}
	
	//ajax提交表单信息
	$.ajax({
		   type: "POST",
		   url: formUrl,
		   data: $("#enterpriseForm").serialize(),
		   success: function(msg){
			   $.messager.show({ title : '提示', msg : msg});
			   $("#myWindow").window('close');
			   dataGrid.datagrid('reload');
		   }
		});

}
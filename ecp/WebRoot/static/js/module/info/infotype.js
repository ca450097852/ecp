var treegrid;
var formUrl;
$(function() {
	treegrid = $('#infoTypeDatagrid').treegrid( {
		url : 'infoType/tree.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '资讯分类管理',
		idField:'typeId',    
	    treeField:'typeName',
	    iconCls : 'icon-sysCol',
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		frozenColumns : [[{
			field : 'ck',
			checkbox : true
		}]],
		columns : [[ {
					field : 'typeName',
					title : '分类名称',
					width : 100,
					align : 'left',
					halign : 'center'
				},{
					field : 'crttime',
					title : '创建时间',
					width : 100,
					align : 'center'
				},{
					field : 'remark',
					title : '备注',
					width : 300,
					align : 'left',
					halign : 'center'
				}
		
		]],
		onLoadSuccess : function(data) {
			f_timeout(data);
		}
 		
	});
});
		
// 添加
function addInfoType(){
	 $('#infoTypeForm').form('reset');
	 
	 var row = treegrid.treegrid("getSelected");	 
	 $('#parentId').combotree({    
	    url: 'infoType/combotree.do?rootId=0',    
	    required: true ,
	    value :row==null ? 1 : row.typeId
	 });  
	 
	 $("#infoTypeWindow").dialog("open").dialog('setTitle', '添加资讯分类信息');
	 formUrl = "infoType/add.do";
}
		
// 修改
function updateInfoType(){
	var rows = treegrid.treegrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "infoType/update.do";				 
	         $("#infoTypeForm").form("load", rows[0]);
	         
	         $('#parentId').combotree({    
	     	    url: 'infoType/combotree.do?rootId=0',    
	     	    required: true,
	     	    value:rows[0].parentId
	     	 });  
	        	         
			 $('#infoTypeWindow').dialog('open').dialog('setTitle', '修改资讯分类信息');
	    }
	}
}
				
// 删除
function removeInfoType(){
	var rows = treegrid.treegrid("getSelections");
	 // 判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].typeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '删除当前分类，会连同其子分类一起删除 ，是否确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'infoType/delete.do',
		         	  data:'ids='+ids,
		         	  type:'post',
		         	  dataType:'text',
		         	  success : function(result) {
						   $.messager.show({ title : '提示', msg : result});
						  treegrid.treegrid('reload');
					  }    
		         });				 
			}
		});
	}
}
		
// 搜索
function find(){
   var typeName = $('#typeName').val();
   
   var queryParams = {"typeName":typeName}; 
   
   treegrid.treegrid('load',queryParams);   // 点击搜索
}
		
//提交form
function submitForm() {
	if ($('#infoTypeForm').form('validate') == false) {
		$.messager.show({title : '提示',msg : '输入验证没有通过!'});
		return;
	}

	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	
	$('#infoTypeForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.progress('close');
			$.messager.show( {title : '提示',msg : result});
			treegrid.treegrid('reload');
			closeWin('infoTypeWindow');
		}
	});
}





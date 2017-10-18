var dataGrid;
var formUrl;

//关闭进度遮罩
$(top.hangge());

$(function () {
	
	$("#myWindow").window('close');
	
	dataGrid = $('#table').datagrid( {
		url : 'entType/page.do',
		title : '机构类型管理',
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
		             {
		            	 field : 'typeName',
		            	 title : '类型名称 ',
		            	 width : 400,align : 'left'
		             }, 
		             {
		            	 field : 'remarks',
		            	 title : '备注',
		            	 width : 400,align : 'left',
		             }
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

function flagFormatter(value, row) {
	//1个人； 2公司
	if(value==1){
		return "个人";
	}else if(value==2){
		return "公司";
	}
}


function getHeight() {
    return $(window).height() - $('h1').outerHeight(true);
}

		
// 添加
function addEntType(){
		//重置表单
	    resetFormFieldValue($("#entTypeForm"));         
		 formUrl = "entType/add.do";
			$("#myWindow").dialog("open").dialog('setTitle', '添加机构类型');
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
	         formUrl = "entType/update.do";				 
	         var data =  rows[0];
	         var form = $("#entTypeForm");	         
	         setFormFieldValue(data,form);         	         
			    $('#myWindow').window('open').window('setTitle', '修改机构类型');;
	    }
	}
}
				
// 删除
function removeEntType(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!','info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].typeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'entType/delete.do',
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
   var typeName = $('#name').val();
   var queryParams = {"params[typeName]":typeName};
   dataGrid.datagrid('load',queryParams);   //点击搜索
}
		
/**
 * 提交表单 - 添加组织机构类型
 */
function submitForm() {
	if(!checkFieldValue("typeName", "请输入类型名称!")){
		return false;
	}	
	//ajax提交表单信息
	$.ajax({
		   type: "POST",
		   url: formUrl,
		   data: $("#entTypeForm").serialize(),
		   success: function(msg){
			   $.messager.show({ title : '提示', msg : msg});
			   $("#myWindow").window('close');
			   dataGrid.datagrid('reload');

		   }
		});


}
var dataGrid;
var formUrl;
//关闭进度遮罩
$(top.hangge());

$(function() {
	
	$("#myWindow").window('close');
	
	dataGrid = $('#userDatagrid').datagrid( {
		url : 'user/page.do',
		title : '用户管理',
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
						{field : 'nickname',title : '用户名称',width : 100,align : 'center',sortable : true},
						{field : 'userName',title : '用户账号',width : 100,align : 'center',sortable : true},
						{field : 'email',title : '联系邮箱',width : 100,align : 'center'},
						{field : 'phone',title : '手机号码',width : 100,align : 'center'},
						{field : 'tel',title : '联系电话',width : 100,align : 'center'},
						{field : 'sts',title : '用户状态',width : 50,align : 'center',formatter: function(value,row,index){
							if(value==1){
								return "发布";
							}else if(value==2){
								return "<font color='red'>作废</font>";
							}else{
								return value;
							}
						}},
						{field : 'addr',title : '联系地址',width : 150,align : 'center'},
						{field : 'userId',title : '操作',width : 50,align : 'center',formatter: function(value,row,index){					
							var v = "<a href='javascript:void(0)' onclick='assignRole("+index+")'>分配角色</a>&nbsp;&nbsp;";
							return v;					
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
	
	 /**分配角色*/

	$('#addRole').click(function(){
		var $options = $('#wait option:selected');//获取当前选中的项
		var $remove = $options.remove();//删除下拉列表中选中的项
		$remove.appendTo('#had');//追加给对方
	});
	
	$('#removeRole').click(function(){
		var $removeOptions = $('#had option:selected');
		$removeOptions.appendTo('#wait');//删除和追加可以用appendTo()直接完成
	});
		
	//保存角色信息
	$('#saveRole').click(function(){
		
		var $options = $('#had option');				
		var obj = new Array();				
		 $('#had option').each(function(i) {
	          var value = $(this).val();
	          obj.push(value);
		 });									
		var ids = obj.join(',');

		//保存分配角色
		$.ajax({
         	  url:'role/userRoleAdd.do',
         	  data:'roleIds='+ids+'&userId='+userId,
         	  type:'post',
         	  dataType:'text',
         	  success : function(r) {
				$.messager.show({ title : '提示', msg : r });
				$('#assignRoleWindow').window('close');
			  }    
         });
	});
	
	//双击事件
	$('#wait').dblclick(function(){
		var $options = $('option:selected', this);//注意此处“option”与“:”之间的空格，有空格是不可以的
		$options.appendTo('#had');
	});
	
	$('#had').dblclick(function(){
		$('#had option:selected').appendTo('#wait');
	});
	
	//关闭
	$('#closeRoleWindow').click(function(){
		$('#assignRoleWindow').window('close');
	});
//	
	
});


/**
 * 分配角色
 * @param index
 * @return
 */
var userId ='' ;			
function assignRole(index){
	var row = dataGrid.datagrid('getRows')[index];
	
	userId = row.userId;			
	var entId = row.entId;
		
	$('#wait option').remove();		
	$('#had option').remove();	
	//读取未拥有角色
	$.ajax({
     	  url:'role/entRoleCombo.do',
     	  data:'entId='+entId+'&userId='+userId,
     	  type:'post',
     	  dataType:'text',
     	  success : function(options) {				
			$('#wait').append(options);
		  }    
     }); 
	//读取已拥有角色
	$.ajax({
     	  url:'role/userRoleCombo.do',
     	  data:'userId='+userId,
     	  type:'post',
     	  dataType:'text',
     	  success : function(options) {					
			$('#had').append(options);										
		  }    
     }); 
	
	//打开
	$('#assignRoleWindow').window('open');							
}
		
// 添加
function addUser(){
	//重置表单
    resetFormFieldValue($("#userForm"));         
	 formUrl = "user/add.do";
	 $("#myWindow").dialog("open").dialog('setTitle', '添加用户菜单');
	
	 
	 $('#entId').combotree({    
	    url: 'enterprise/combotree.do',
	    height:34,
	    required: true   
	 });  

	/* $('#userForm').form('reset');
	 $("#userWindow").dialog("open").dialog('setTitle', '添加系统用户');
	 formUrl = "user/add.do"*/
}
		
// 修改
function updateUser(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
		$.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	    	$.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "user/update.do";				 
	         var data =  rows[0];
	         var form = $("#userForm");	         
	         setFormFieldValue(data,form);         
	    	 $('#entId').combotree({    
	    		    url: 'enterprise/combotree.do',
	    		    height:34,
	    		    required: true,
	    		    value:data.entId
	    		 });  
	    	  $('#myWindow').window('open').window('setTitle', '修改用户菜单');;
	    }
	}
}
				
// 删除
function removeUser(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!','info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].userId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
				$.ajax({
		         	  url:'user/delete.do',
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
   var userName = $('#name').val();
   var queryParams = {"params[userName]":userName};
   dataGrid.datagrid('load',queryParams);   //点击搜索	   

}
		

/**
 * 提交表单 - 添加系统用户
 */
function submitForm() {
	
	if(!checkFieldValue("nickname", "请输入用户名称!")){
		return false;
	}
	
	if(!checkFieldValue("userName", "请输入用户账号!")){
		return false;
	}
	//ajax提交表单信息
	$.ajax({
		   type: "POST",
		   url: formUrl,
		   data: $("#userForm").serialize(),
		   success: function(msg){
			   $.messager.show({ title : '提示', msg : msg});
			   $("#myWindow").window('close');
			   dataGrid.datagrid('reload');
		   }
		});
}
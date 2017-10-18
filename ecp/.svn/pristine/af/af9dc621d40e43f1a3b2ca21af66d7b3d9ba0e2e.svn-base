var dataGrid;
var formUrl;
$(function() {
	$("#dlg").window('close');
	
	dataGrid = $('#memberDatagrid').datagrid( {
		url : 'member/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '会员管理',
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
				{field : 'memberName',title : '会员名称',width : 150,align : 'center',sortable : true},
				{field : 'memberFlag',title : '会员类型',width : 50,align : 'center',formatter: function(value,row,index){
					//1个人； 2公司
					if(value==1){
						return "个人";
					}else if(value==2){
						return "公司";
					}
				}},
				{field : 'levelName',title : '会员等级',width : 50,align : 'center',},
				{field : 'levelName1',title : '推荐等级',width : 50,align : 'center',},
				{field : 'memberPhone',title : '联系电话',width : 100,align : 'center'},
				{field : 'memberEmail',title : '电子邮箱',width : 100,align : 'left',halign : 'center'},
				{field : 'memberAddr',title : '联系地址',width : 200,align : 'left',halign : 'center'},
				{field : 'memberState',title : '会员状态',width : 50,align : 'center',formatter: function(value,row,index){
					//1使用；2禁用
					if(value==1){
						return "使用";
					}else if(value==2){
						return "<font color=red>禁用</font>";
					}
				}},{field : 'memberId',title : '操作',width : 100,align : 'center',formatter: function(value,row,index){
					return "<a href='javascript:void(0)' onclick='showDet("+ index + ")'>查看详细</a>";		
				}}

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
		view: detailview,
	    detailFormatter:function(index,row){
	        return '<div style="padding:2px"><table class="ddv"></table></div>';
	    },
	    onExpandRow: function(index,row){
	     var ddv = $(this).datagrid('getRowDetail',index).find('table.ddv');
	     
	   	 var queryParams = {"params[memberId]":row.memberId};
	        
	        ddv.datagrid({
	            url:'memberUser/page.do',
	            queryParams:queryParams,
	            fitColumns:true,
	            singleSelect:true,
	            rownumbers:true,
	            loadMsg:'数据加载中。。。',
	            height:'auto',
	            columns:[[
	                {field:'account',title:'登录账号',width:100,align : 'center'},
	                {field:'realName',title:'真实名称',width:100,align : 'center'},
	                {field:'birthday',title:'生日',width:100,align : 'center'},
	                {field:'hometown',title:'家乡',width:150,align : 'center'},
	                {field:'sex',title:'性别',width:50,align : 'center',formatter: function(value,row,index){
						if(value==1){
							return "男";
						}else if(value==2){
							return "女";
						}
					}},
					{field : 'memberState',title : '用户状态',width : 50,align : 'center',formatter: function(value,row,index){
						//1使用；2禁用
						if(value==1){
							return "使用";
						}else if(value==2){
							return "<font color=red>禁用</font>";
						}
					}},
	            ]],
	            onResize:function(){
	                $('#memberDatagrid').datagrid('fixDetailRowHeight',index);
	            },
	            onLoadSuccess:function(){
	                setTimeout(function(){
	                    $('#memberDatagrid').datagrid('fixDetailRowHeight',index);
	                },0);
	            }
	        });
	        $('#memberDatagrid').datagrid('fixDetailRowHeight',index);
	    }
		
	});
});
		
// 添加
function addEntType(){
	 $('#memberForm').form('clear');
	 $("#memberWindow").dialog("open").dialog('setTitle', '添加机构类型');
	 formUrl = "member/add.do"
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
	         formUrl = "member/update.do";				 
	         $("#memberForm").form("load", rows[0]);
			 $('#memberWindow').window('open').window('setTitle', '修改机构类型');
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
			obj.push(rows[i].memberId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'member/delete.do',
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
   var typeName = $('#memberName').val();
   var queryParams = {"params[memberName]":typeName};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}
		
/**
 * 提交表单 - 添加组织机构类型
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

//查看详细
function showDet(index) {
	var datarow = $('#memberDatagrid').datagrid("getRows")[index];
	$("#dlg").dialog("open")
			.dialog('setTitle', '用户详细信息----' + datarow.memberName);
	for (var item in datarow) {
		var typename = "dtl_" + item;
		var value = datarow[item];
		if(value ==null){
			value = "" ;
		}
		if (item == 'memberState') {
			if (value == '1') {
				value = '使用';
			} else if (value == '2') {
				value = '禁用';
			} else {
				value = "" ;
			}
		}
		if (item == 'memberFlag') {
			if (value == '1') {
				value = '个人';
			} else if (value == '2') {
				value = '公司';
			}else {
				value = "" ;
			}
		}
		$("#" + typename).text(value);
	}
	 var memberId = datarow["memberId"];
	 var queryParams = {"params[memberId]":memberId};
	 $.ajax({
    	  url:'memberUser/page.do',
    	  data:queryParams,
    	  type:'post',
    	  dataType:'json',
    	  success : function(data) {
			  $("#dtl_account").html(data.rows[0].account);
			  $("#dtl_realName").html(data.rows[0].realName);
				if (data.rows[0].sex == 1) {
					 $("#dtl_sex").html('男');
				} else if (data.rows[0].sex == 2) {
					$("#dtl_sex").html('女');
				} else{
					 $("#dtl_sex").html('');
				}
			  $("#dtl_birthday").html(data.rows[0].birthday);
			  $("#dtl_hometown").html(data.rows[0].hometown);
		  }    
    });
}
//审核
function doAuditsts(sts){
	// sts : 1.通过 2.不通过 0.待审核
	sts = (sts == 1 || sts == 2)?sts:0;
	var rows = $("#memberDatagrid").datagrid("getSelections");
	//判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要审核的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		//循环给提交删除参数赋值
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].memberId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '是否继续执行?', function (r){
			if (!r) {
				return;
		    }else{
				$.post(
					'memberUser/auditSts.do', 
					{
						'ids' : ids
						,'type' : sts
					},
					function(result) {
						$.messager.show({ title : '提示', msg : result});
					    $('#memberDatagrid').datagrid('reload');
					}
				);
		    }
		});    
	}
}






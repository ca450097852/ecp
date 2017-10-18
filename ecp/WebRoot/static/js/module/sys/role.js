var dataGrid;
var formUrl;
$(function() {
	$("#myWindow").window('close');
	$("#rolePower").window('close');

	dataGrid = $('#roleDatagrid').datagrid( {
		url : 'role/page.do',
		title : '角色管理',
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
{field : 'roleName',title : '角色名称',width : 200,align : 'center',sortable : true},
{field : 'roleLevel',title : '角色级别',width : 100,align : 'center',formatter: function(value,row,index){
	if(value==1){
		return "管理员";
	}else if(value==2){
		return "普通用户";
	}
}},
{field : 'sts',title : '角色状态',width : 100,align : 'center',formatter: function(value,row,index){
	if(value==1){
		return "发布";
	}else if(value==2){
		return "<font color='red'>作废</font>";
	}
}},
{field : 'roleDesc',title : '角色描述',width : 200,align : 'center'}
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
function addRole(){
	
	  resetFormFieldValue($("#roleForm"));         
	 $('#entId').combotree({    
	    url: 'enterprise/combotree.do',
	    height:34,
	    required: true   
	 });
	$("#myWindow").dialog("open").dialog('setTitle', '添加角色菜单');
	
	 formUrl = "role/add.do"
}
		
// 修改
function updateRole(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
		$.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	    	$.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "role/update.do";				 
	         setFormFieldValue(rows[0],$("#roleForm"));         

	    	 $('#entId').combotree({    
    		    url: 'enterprise/combotree.do',    
    		    required: true ,
    		    value:rows[0].entId
    		 });	         
		    $('#myWindow').window('open').window('setTitle', '修改角色菜单');;
	    }
	}
}
				
// 删除
function removeRole(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!','info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].roleId);
		}
		var ids = obj.join(',');
		
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
				$.ajax({
		         	  url:'role/delete.do',
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
   var roleName = $('#name').val();
   var queryParams = {"params[roleName]":roleName};
   dataGrid.datagrid('load',queryParams);   //点击搜索
}
		
/**
 * 提交表单 - 添加系统角色
 */
function submitForm() {
		
	if(!checkFieldValue("roleName", "请输入角色名称!")){
		return false;
	}
	
	//ajax提交表单信息
	$.ajax({
		   type: "POST",
		   url: formUrl,
		   data: $("#roleForm").serialize(),
		   success: function(msg){
			   $.messager.show({ title : '提示', msg : msg});
			   $("#myWindow").window('close');
			   dataGrid.datagrid('reload');
		   }
		});
	
}



//授权显示
var roleId;
var entId;
function empower(){
	var arr = dataGrid.datagrid("getSelections");
	var lg = arr.length;
	if(lg==0){
		$.messager.alert('提示','请选择授权角色!','info');
	}else if(lg!=1){
		$.messager.alert('提示','对不起，一次只能授权一个角色。','info');
	}else{
	var role = arr[0];
	roleId = role.roleId;
	entId = role.entId;	
	$("#role_col").tree({
    	 url:'role/rolePurvTree.do?roleId='+roleId+"&tt="+Math.floor(Math.random()*20)+1,
    	 method:'get',
    	 animate:true,
    	 checkbox:true
     });
	
	$("#rolePower").dialog("open").dialog('setTitle', '角色授权');
	}
}

//保存角色授权
var s = new Array();
function passPower(){
	s = [];
	var nodes = $('#role_col').tree('getChecked');
	for(var i=0; i<nodes.length; i++){
		s.push(nodes[i].id);
		var tp = $('#role_col').tree('uncheck',nodes[i].target);
		if($('#role_col').tree('isLeaf',nodes[i])){
			var tp = $('#role_col').tree('getParent',nodes[i].target);
			if(tp!=null){
				if(!tp.checked){
					//alert(checkIsEx(tp.id));
					if(checkIsEx(tp.id)){
						s.push(tp.id);
					}
				}
			}
		}		
	}
	if(s.length==0){
		return;
	}
	$.post('role/addRolePurv.do', 'colIds='+s+'&entId='+entId+'&roleId='+roleId, function(result) {
		$.messager.show({ title : '提示', msg : result });
		$("#rolePower").window("close");
	}, "TEXT");
}

function checkIsEx(cid){
	for(var i=0;i<s.length;i++){
		if(s[i]==cid){
			return false;
		}
	}
	return true;
}

//全选
function selectAll(){
	var roots = $("#role_col").tree("getRoots");
	for(var i=0;i<roots.length;i++){
		var node = $("#role_col").tree('find',roots[i].id);
		$("#role_col").tree('check',node.target);
	}
}
//反选
function RevSelect(){
	var checkeds = $("#role_col").tree("getChecked");
	var tmp = new Array();
	for(var i=0;i<checkeds.length;i++){
		tmp.push(checkeds[i].id);
	}
	selectAll();
	for(var i=0;i<tmp.length;i++){
		var node = $('#role_col').tree('find', tmp[i]);
		$('#role_col').tree('uncheck', node.target);
    }
}
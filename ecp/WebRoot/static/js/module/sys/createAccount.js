$(function() {	
	
	$('#enterpriseForm').form("reset");

	 
	 $('#_parent_id').combotree({    
	    url: 'enterprise/combotree.do',    
	    required: true   
	 });  
	 
	 $('#entType').combobox({    
	    url: 'entType/combobox.do',    
	    required: true   
	 }); 
    
});


function submitForm(){
	if($('#enterpriseForm').form('validate')==false){
		$.messager.alert('提示','请检查必填项是否已填写!','question');
		return;
	}   
	
	$('#enterpriseForm').form('submit', {
		url : 'enterprise/createAccount.do',
		onSubmit : function(result) {
			return $(this).form('validate');// 对数据进行格式化
	},
	success : function(result) {
		$.messager.show( {
			title : '提示',
			timeout:10000,
			msg : result
		});
		$('#enterpriseForm').form('reset');
	}
	});
}
    
function closeTabWin(){
	var tab = parent.$('#tabs').tabs('getSelected');
	var index = parent.$('#tabs').tabs('getTabIndex',tab);  	   
	parent.$('#tabs').tabs('close',index);
}

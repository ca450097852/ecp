var treegrid;
var formUrl;
$(function() {
	treegrid = $('#goodsTypeDatagrid').treegrid( {
		url : 'goodsType/combotreeAll.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '商品分类管理',
		iconCls : 'icon-product',
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		checkOnSelect : true ,
		selectOnCheck : true ,
		idField:'typeId',    
	    treeField:'typeName',
		frozenColumns : [[{
			field : 'ck',
			checkbox : true
		}]],
		columns : [ [
		        {field : 'typeName',title : '分类名称',width : 200, halign : 'center' ,align : 'left'},
		        {field:'typeId',title:'分类ID',width:100,align:'center',hidden:true},
				{field : 'typeNo',title : '分类编号',width : 200,align : 'center',halign : 'center' ,align : 'left'},
				{field : 'sts', title : '状态', width : 100 , align : 'center',
					formatter : function(value) {
						if (value == 1) {
								return "<span style='color:green'>启用</span>";
							} else if (value == 2){
								return "<span style='color:red'>停用</span>";
							}else {
								return "<span style='color:red'>"+ value +"</span>";
							}
					}
				}
		] ],
		onLoadSuccess : function(data) {
			f_timeout(data);
		},
		onLoadError : function(){
			alert("加载失败");
		}
 		/*onClickRow: function(rowIndex, rowData){
 			$(this).treegrid('unselectAll');
 			$(this).treegrid('selectRow',rowIndex);
 		}*/
	});
	
	$("#typeImgFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../goodsType/ns/upload.do',
		//'formData' : {'dir':'model'},
		'buttonText' : '上传附件',
		'height' : 20,
		'width' : 100,
		'fileSizeLimit' : 1024,
		'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
		'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID' : 'quenu',
		'multi' : false,
		'removeCompleted' : true,
		'onUploadSuccess' : function(file, data, response) {
			//设置预览
			var img = '<img style="width:60px;height:auto" src="'+ data+'"/>';
			$("#imgfanbox").html(img);
			$('#typeImg').val(data);
			
		}
		
	});
});
		
// 添加
function addGoodsType(){
	$('#typeImg').val('');
	$("#quenu").empty();
	$("#imgfanbox").html('');
	
	 $('#goodsTypeForm').form('reset');
	 
	 var row = treegrid.treegrid("getSelected");

	 $('#upcateId').combotree({    
	    url: 'goodsType/combotree.do',
	    value :row==null ? 0 : row.typeId ,
	    required: true   
	 });  

	 $("#sysColWindow").dialog("open").dialog('setTitle', '添加商品分类');
	 formUrl = "goodsType/add.do"
}
		
// 修改
function updateGoodsType(){
	
	var rows = treegrid.treegrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	    	$('#typeImg').val('');
	    	$("#quenu").empty();
	    	$("#imgfanbox").html('');
	    	
	         formUrl = "goodsType/update.do";				 
	         $("#goodsTypeForm").form("load", rows[0]);
	    	 $('#upcateId').combotree({    
    		    url: 'goodsType/combotree.do',
    		    value : rows[0].upcateId,
    		    required: true   
    		 }); 
			 $('#sysColWindow').window('open').window('setTitle', '修改商品分类');
			 $('#goodsTypeForm').form('validate');
			 var img = '<img style="width:60px;height:auto" src="'+ rows[0].typeImg+'"/>';
			 $("#imgfanbox").html(img);
	    }
	}
}
				
// 删除
function removeGoodsType(){
	var rows = treegrid.treegrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].typeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '删除分类，会连同其子分类一起删除 ！是否确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'goodsType/delete.do',
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
   var typeName = $('#name').val();
   var queryParams = {"params[typeName]":typeName};
   treegrid.treegrid('load',queryParams);   //点击搜索		   
}

//重置
function reset() {
	$('#name').val("");
	
	dataGrid.datagrid('reload', {});
}
		
/**
 * 提交表单 - 添加系统栏目菜单
 */
function submitForm() {
	
	if($('#goodsTypeForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#goodsTypeForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			treegrid.treegrid('reload');
			$('#typeImg').val('');
			$("#quenu").empty();
			$("#imgfanbox").html("");
			closeWin('sysColWindow');
		}
	});
}
var dataGrid;
var formUrl;
$(function() {
	dataGrid = $('#goodsBrandDatagrid').datagrid( {
		url : 'webGoodsBrand/page.action',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
//		title : '商品品牌管理',
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
				{field : 'brandNo',title : '品牌编码',width : 200,align : 'left',halign : 'center'},
				{field : 'brandName',title : '品牌名称',width : 200,align : 'left' ,halign : 'center'},
				{field : 'state',title : '状态',width : 100,align : 'center',formatter : function(value, row, index) {
						if (value == 1) {
							return "<span style='color:green'>启用</span>";
						} else if (value == 2){
							return "<span style='color:red'>停用</span>";
						}
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
	
	$("#brandLogoFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../goodsFile/upload.do;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'brand'},
		'buttonText' : '上传附件',
		'height' : 20,
		'width' : 100,
		'fileSizeLimit' : 1024,
		'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
		'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID' : 'quenu',
		'multi' : false,
		'removeCompleted' : false,
		'onUploadSuccess' : function(file, data, response) {
			//设置预览
			$('#previewImg_'+file.id).attr('href',data);
			$('#previewImg_'+file.id).fancybox();
			
			$('#brandLogo').val(data);
		},
		'onSelect':function(file){
			$('#brandLogo').val('');
			var childrens = $('#quenu').children();
			for(var i=0;i<childrens.length-1;i++){
				childrens[i].remove();
			}
		}
	});
	
	
	
});
		
// 添加
function addgoodsBrand(){
	 $('#goodsBrandForm').form('reset');
	 
	 $("#sysColWindow").dialog("open").dialog('setTitle', '添加商品品牌');
	 formUrl = "goodsBrand/add.do"
}
		
// 修改
function updategoodsBrand(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "goodsBrand/update.do";				 
	         $("#goodsBrandForm").form("load", rows[0]);
	    	 $('#upcateId').combotree({    
    		    url: 'goodsBrand/combotree.do',
    		    value : rows[0].upcateId,
    		    required: true   
    		 }); 
			 $('#sysColWindow').window('open').window('setTitle', '修改商品品牌');
			 $('#goodsBrandForm').form('validate');
			 $('#quenu').html("");
			 if(rows[0].brandLogo!=''){
				 var filePath = rows[0].brandLogo;
				 filePath = filePath.substring(filePath.lastIndexOf('/')+1);
				 var content = '<div class="uploadify-queue-item" id="">\
								 <div class="cancel">\
								 <a style="background: url(&quot;static/js/uploadify/da.jpg&quot;) 0 0 no-repeat;float:right" id="previewImg_'+rows[0].brandId+'" \
								 href="'+rows[0].brandLogo+'">预览</a>\
								 <a href="javascript:removeAppd();">X</a>\
								 </div>\
								 <span class="fileName">'+filePath+'</span>\
								 </div>';
				 $('#quenu').html(content);
				 
				 $('#previewImg_'+rows[0].brandId).fancybox();
			 }
	    }
	}
}

function removeAppd(){
	$('#quenu').html('');
	$('#brandLogo').val('');
}
				
// 删除
function removegoodsBrand(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].brandId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'goodsBrand/delete.do',
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
   var brandName = $('#name').val();
   var queryParams = {"params[brandName]":brandName};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//重置
function reset() {
	$('#name').val("");
	dataGrid.datagrid('reload', {});
}
		
/**
 * 提交表单
 */
function submitForm() {
	
	if($('#goodsBrandForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#goodsBrandForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			dataGrid.datagrid('reload');
			closeWin('sysColWindow');
		}
	});
}
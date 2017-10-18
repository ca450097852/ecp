var dataGrid;
var formUrl;
var goodsId ;
var queryParams ={};

$(function() {
	goodsId = window.parent.staticGoodsId;
	$('#inventoryWin').window('close'); 
	dataGrid = $('#goodsBrandDatagrid').datagrid( {
		url : 'goodsModel/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		queryParams:queryParams,
		pageSize : 20,// 默认选择的分页是每页10行数据
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
				//{field : 'modelId',title : '规格ID',width : 200,align : 'left',halign : 'center',hidden:true},
				//{field : 'goodsId',title : '商品ID',width : 200,align : 'left' ,halign : 'center'},
				{field : 'modelNo',title : '规格编码',width : 200,align : 'left' ,halign : 'center'},
				{field : 'modelName',title : '规格名称',width : 200,align : 'left' ,halign : 'center'},
				//{field : 'modelImg',title : '规格图片',width : 200,align : 'right' ,halign : 'center'},
				{field : 'state',title : '状态',width : 200,align : 'center' , formatter : function(value, row, index){
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
	
	$("#modelImgFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../goodsFile/upload.do;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'model'},
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
			
			$('#modelImg').val(data);
		},
		'onSelect':function(file){
			$('#modelImg').val('');
			var childrens = $('#quenu').children();
			for(var i=0;i<childrens.length-1;i++){
				childrens[i].remove();
			}
		}
	});
});
		
// 搜索
function find(){
   var state = $('#state').val();
   goodsId = window.parent.staticGoodsId;
   var queryParams = {"params[state]":state,"params[goodsId]":goodsId};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//重置
function reset() {
	 $('#state').val(1);
	dataGrid.datagrid('reload', {"params[state]":state,"params[goodsId]":goodsId});
}

//重置搜索条件
function resetSearch() {
	 $('#state').val(1);
}

//添加
function add(){
	 $('#inventoryForm').form('reset');
	 $('#goodsId').val(goodsId);
	 $("#inventoryWin").dialog("open").dialog('setTitle', '添加商品规格');
	 formUrl = "goodsModel/add.do";
}
		
// 修改
function update(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "goodsModel/update.do";				 
	         $("#inventoryForm").form("load", rows[0]);
	    	 
			 $('#inventoryWin').window('open').window('setTitle', '修改商品规格');
			 $('#inventoryForm').form('validate');
			 $('#quenu').html("");
			 if(rows[0].modelImg!=''){
				 var filePath = rows[0].modelImg;
				 filePath = filePath.substring(filePath.lastIndexOf('/')+1);
				 var content = '<div class="uploadify-queue-item" id="">\
								 <div class="cancel">\
								 <a style="background: url(&quot;static/js/uploadify/da.jpg&quot;) 0 0 no-repeat;float:right" id="previewImg_'+rows[0].brandId+'" \
								 href="'+rows[0].modelImg+'">预览</a>\
								 <a href="javascript:removeAppd();">X</a>\
								 </div>\
								 <span class="fileName">'+filePath+'</span>\
								 </div>';
				 $('#quenu').html(content);
				 
				 $('#previewImg_'+rows[0].modelId).fancybox();
			 }
	    }
	}
}

function removeAppd(){
	$('#quenu').html('');
	$('#modelImg').val('');
}
				
// 删除
function remove(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].modelId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'goodsModel/delete.do',
		         	  data:'ids='+ids,
		         	  type:'post',
		         	  dataType:'text',
		         	  success : function(result) {
						   $.messager.show({ title : '提示', msg : result});
						   dataGrid.datagrid('reload', {"params[state]":state,"params[goodsId]":goodsId});
					  }    
		         });				 
			}
		});
	}
}

/**
 * 提交表单
 */
function submitForm() {
	
	if($('#inventoryForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#inventoryForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			dataGrid.datagrid('reload', {"params[state]":state,"params[goodsId]":goodsId});
			closeWin('inventoryWin');
		}
	});
}

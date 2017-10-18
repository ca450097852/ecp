var dataGrid;
var formUrl;
$(function() {
	dataGrid = $('#columnDatagrid').datagrid( {
		url : 'goodsColumn/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '商品栏目管理',
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
		        {field : 'parentName',title : '上级栏目',width : 100,align : 'center',formatter : function(value, row, index) {
						if (value == null) {
							return "无上级栏目";
						} else {
							return value;
						}
				}},
				{field : 'columnNo',title : '栏目编号',width : 200,align : 'center',halign : 'center'},
				{field : 'columnName',title : '栏目名称',width : 200,align : 'center'},
				{field : 'orderby',title : '显示顺序',width : 200,align : 'center'},
				{field : 'crttime',title : '创建时间',width : 200,align : 'center'},
				{field:'flag','title':'操作',width:100,align:'center',formatter:function(value,row,index){
					return '<a href="javascript:void(0);" onclick="showGoods('+row.columnId+')">查看相关商品</a>';
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
	
	$("#columnImgFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../goodsFile/upload.do;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'column'},
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
			
			$('#columnImg').val(data);
		},
		'onSelect':function(file){
			$('#columnImg').val('');
			var childrens = $('#quenu').children();
			for(var i=0;i<childrens.length-1;i++){
				childrens[i].remove();
			}
		}
	});
	
	
	
});
		
// 添加
function addcolumn(){
	 $('#columnForm').form('reset');
	 
	 var row = dataGrid.datagrid("getSelected");
	 
	 $('#parentId').combotree({    
		    url: 'goodsColumn/tree.do',
		    value :row==null ? 0 : row.columnId ,
		    required: true   
		 });  
	 
	 $('#quenu').html('');
	 $('#columnImg').val('');
	 
	 $("#sysColWindow").dialog("open").dialog('setTitle', '添加商品品牌');
	 formUrl = "goodsColumn/add.do"
}
		
// 修改
function updatecolumn(){
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if(leng==0){
	    $.messager.alert('提示','请选择你需要修改的记录!','info');
	}else{
	    if(leng>1){
	        $.messager.alert('提示','只能修改一条记录!','info');
	        return false;
	    }else{
	         formUrl = "goodsColumn/update.do";				 
	         $("#columnForm").form("load", rows[0]);
			 $('#sysColWindow').window('open').window('setTitle', '修改商品品牌');
			 $('#columnForm').form('validate');
			 
			 $('#parentId').combotree({    
				    url: 'goodsColumn/tree.do',
				    value :rows[0].parentId ,
				    required: true   
				 });  
			 
			 $('#quenu').html("");
			 
			 if(rows[0].columnImg!=''){
				 var filePath = rows[0].columnImg;
				 filePath = filePath.substring(filePath.lastIndexOf('/')+1);
				 var content = '<div class="uploadify-queue-item" id="">\
								 <div class="cancel">\
								 <a style="background: url(&quot;static/js/uploadify/da.jpg&quot;) 0 0 no-repeat;float:right" id="previewImg_'+rows[0].brandId+'" \
								 href="'+rows[0].columnImg+'">预览</a>\
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
	$('#columnImg').val('');
}
				
// 删除
function removecolumn(){
	var rows = dataGrid.datagrid("getSelections");
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
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'goodsColumn/delete.do',
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
   var columnName = $('#name').val();
   var queryParams = {"params[columnName]":columnName};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}
		
/**
 * 提交表单
 */
function submitForm() {
	
	if($('#columnForm').form('validate')==true){
		$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	}
	
	$('#columnForm').form('submit', {
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
//显示栏目相关的商品
function showGoods(columnId){
	$('#goodsWindow').window('open').window('setTitle','相关商品信息');
	$('#goodsGrid').datagrid( {
		url : 'goods/page.do',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		queryParams:{'params[columnId]':columnId},
		fit : true,
		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		sortName:'goods_id',
		sortOrder:'desc',
		columns : [ [
		        {field : 'goodsNo',title : '商品编号',width : 100,align : 'center',halign : 'center'},
				{field : 'goodsName',title : '商品名称',width : 100,align : 'center',halign : 'center'},
				{field : 'typeName',title : '所属分类',width : 100,align : 'center'},
				//{field : 'chengbenPrice',title : '成本价',width : 100,align : 'center'},
				//{field : 'marketPrice',title : '市场价',width : 100,align : 'center'},
				//{field : 'saledPrice',title : '销售价',width : 100,align : 'center'},
				//{field : 'saledNum',title : '销售数量',width : 100,align : 'center'},
				{field : 'inventory',title : '库存数量',width : 100,align : 'center'},
				{field : 'state',title : '状态',width : 100,align : 'center',formatter : function(value, row, index) {
					if (value == 0) {
						return "待审";
					} else if (value == 1) {
						return "上架";
					} else if (value == 2) {
						return "<span style='color:green'>审核通过</span>";
					} else if (value == 3) {
						return "<span style='color:red'>审核不通过</span>";
					} else if (value == 4) {
						return "下架";
					} else if (value == 5) {
						return "库存不足";
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
}
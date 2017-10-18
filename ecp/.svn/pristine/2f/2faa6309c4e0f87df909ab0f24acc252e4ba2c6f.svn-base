var basePath;
var filePath;
var dataGrid;
var formUrl;
$(function() {
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	dataGrid = $('#themeGoodsDatagrid').datagrid( {
		url : 'themeGoods/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '主题商品管理',
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
				{field : 'themeName',title : '主题名称',width : 150,align : 'center',sortable : true},
				{field : 'createTime',title : '创建时间',width : 100,align : 'center'},
				{field:'flag','title':'操作',width:100,align:'center',formatter:function(value,row,index){
					return '<a href="javascript:void(0);" onclick="showGoods('+row.themeId+')">查看（删除）相关商品</a>';
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
});
		
// 添加
function addTheme(){
	 $('#themeGoodsForm').form('clear');
	 var rows = dataGrid.datagrid("getSelections");
	 $('#themeId').combotree({    
		    url: 'theme/combotree.do',
		    required: true,
		    onChange: function(theme){
		    	if(theme){
		    		$('#goodsId').combotree({    
		    		    url: 'goodsType/combotree2.do?themeId='+theme,
		    		    multiple: true,
		    		    onlyLeafCheck:true,
		    		    required: true   
		    		 });
		    	}
			}
		 });
	 if(rows!=null&&rows!=""){
		 if(rows.length>1){
			 $.messager.alert('提示', '一次只能在一个专题栏目添加商品!', 'info');
			 return;
		 }else if(rows[0].themeId!=null){
			 $("#themeId").combotree('setValue',rows[0].themeId);
		 } 
	 }
	
	 $("#themeGoodsWindow").dialog("open").dialog('setTitle', '添加主题商品');

	 formUrl = "themeGoods/add.do"
}
		
// 搜索
function find(){
   var name = $('#themeName').val();
   var queryParams = {"params[themeName]":name};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//删除全部
function removeTheme(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].themeId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'themeGoods/delete.do',
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

/**
 * 提交表单 - 添加主题
 */
function submitForm() {
	var str="";
	$("[name='add_goodsId']").each(function(index, element) {
		 str += $(this).val() + ",";
		});
	$('#add_goodsId').val(str);
	if($('#themeGoodsForm').form('validate')==false){
		$.messager.show( {title : '提示',msg : '请检查必填项是否已填写!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#themeGoodsForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.show( {title : '提示',msg : result});
			$.messager.progress('close');
			$("#themeGoodsWindow").window('close');
			dataGrid.datagrid('reload');
		}
	});
}

//显示主题相关的商品
function showGoods(themeId){
	$('#goodsWindow').window('open').window('setTitle','相关商品信息');
	$('#goodsGrid').datagrid( {
		url : 'goods/page2.do',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		queryParams:{'params[themeId]':themeId},
		fit : true,
		toolbar : "#toolbar_goods", // 在添加 增添、删除、修改操作的按钮要用到这个
		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		sortOrder:'desc',
		frozenColumns : [ [ {
			field : 'ck',
			checkbox : true
		} ] ],
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

//删除主题对应商品
function removeGoods(){
	var rows = $('#goodsGrid').datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].themeGoogsId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'themeGoods/delete2.do',
		         	  data:'ids='+ids,
		         	  type:'post',
		         	  dataType:'text',
		         	  success : function(result) {
						   $.messager.show({ title : '提示', msg : result});
						   $('#goodsGrid').datagrid('reload');
						   dataGrid.datagrid('reload');
					  }    
		         });				 
			}
		});
	}
}
		

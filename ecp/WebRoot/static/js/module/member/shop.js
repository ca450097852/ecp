var basePath;
var filePath;
var dataGrid;
var formUrl;
$(function() {
	$("#dlg").window('close');
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	
	
	dataGrid = $('#shopDatagrid').datagrid( {
		url : 'shop/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '店铺管理',
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
				{field : 'shopName',title : '店铺名称',width : 150,align : 'center',sortable : true},
				{field : 'memberId',title : '会员编号',width : 50,align : 'center'},
				{field : 'userName',title : '店铺掌柜',width : 100,align : 'center'},
				{field : 'shopDesc',title : '店铺介绍',width : 100,align : 'center'},
				{field : 'shopMain',title : '主营范围',width : 200,align : 'center'},
				{field : 'shopState',title : '店铺状态',width : 50,align : 'center',formatter: function(value,row,index){
					//1使用；2禁用
					if(value==0){
						return "待提交";
					}else if(value==1){
						return "<font color=red>待审核</font>";
					}else if(value==2){
						return "<font color=green>审核通过</font>";
					}else if(value==3){
						return "<font color=red>审核不通过</font>";
					}else if(value==4){
						return "<font color=gray>店铺关闭</font>";
					}
				}},{field : 'shopId',title : '操作',width : 100,align : 'center',formatter: function(value,row,index){
					return "<a href='javascript:void(0)' onclick='showDet("+ index + ")'>查看详细</a>";				
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
function removeEntType(){
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
   var name = $('#shopName').val();
   var queryParams = {"params[shopName]":name};
   dataGrid.datagrid('load',queryParams);   //点击搜索		   
}

//查看详细
function showDet(index) {
	$("#showtitlePic1").html("");
	$("#showtitlePic2").html("");
	var datarow = $('#shopDatagrid').datagrid("getRows")[index];
	$("#dlg").dialog("open")
			.dialog('setTitle', '店铺详细信息----' + datarow.shopName);
	for (var item in datarow) {
		var typename = "dtl_" + item;
		var value = datarow[item];
		if(value ==null){
			value = "" ;
		}
		if (item == 'shopState') {
			if(value==0){
				value = "待提交";
			}else if(value==1){
				value = "待审核";
			}else if(value==2){
				value = "审核通过";
			}else if(value==3){
				value = "审核不通过";
			}else if(value==4){
				value = "店铺关闭";
			}
		}
		if (item == 'shopType') {
			if (value == '1') {
				value = '个人';
			} else if (value == '2') {
				value = '公司';
			}else {
				value = "" ;
			}
		}
		$("#" + typename).text(value);
		
		var idcardImg1 = datarow.idcardImg1;
		if(idcardImg1!=''&&idcardImg1!=null){
			var img_html = "<a rel=\"previewImg\" href=\""+filePath+idcardImg1+"\"><img alt=\"预览\" src=\""+filePath+idcardImg1+"\"  style=\"width:45px\">&nbsp;<span>点击预览！</span></a>";
			$("#showtitlePic1").show();
			head = 1;
			$("#showtitlePic1").html(img_html);
			$("a[rel=previewImg]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
		}
		
		var idcardImg2 = datarow.idcardImg2;
		if(idcardImg2!=''&&idcardImg2!=null){
			var img_html = "<a rel=\"previewImg\" href=\""+filePath+idcardImg2+"\"><img alt=\"预览\" src=\""+filePath+idcardImg2+"\"  style=\"width:45px\">&nbsp;<span>点击预览！</span></a>";
			$("#showtitlePic2").show();
			head = 1;
			$("#showtitlePic2").html(img_html);
			
			$("a[rel=previewImg]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
		}
	}
	
}

//审核
function doAuditsts(sts){
	// sts : 0待提交；1待审核； 2审核通过；3审核不通过；4店铺关闭
	sts = (sts == 2 || sts == 3 || sts == 4)?sts:0;
	var rows = $("#shopDatagrid").datagrid("getSelections");
	//判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要审核的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		//循环给提交删除参数赋值
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].shopId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '是否继续执行?', function (r){
			if (!r) {
				return;
		    }else{
				$.post(
					'shop/auditSts.do', 
					{
						'ids' : ids
						,'type' : sts
					},
					function(result) {
						$.messager.show({ title : '提示', msg : result});
					    $('#shopDatagrid').datagrid('reload');
					}
				);
		    }
		});    
	}
}

//删除
function removeMember(){
	var rows = dataGrid.datagrid("getSelections");
	 //判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].shopId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选中数据?', function(r){
			if (r){
		         $.ajax({
		         	  url:'shop/delete.do',
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
		

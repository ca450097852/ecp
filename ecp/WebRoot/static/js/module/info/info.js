var basePath;
var filePath;
var dataGrid; // 列表
var formUrl;
$(function() {
	
	basePath = $("#basePath").val();
	filePath = $("#filePath").val();
	
	dataGrid = $('#infoDatagrid').datagrid( {
		url : 'info/page.do',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '资讯管理',
		iconCls : 'icon-ok',
		loadMsg : '数据加载中...',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50 ],// 可以选择的分页集合
		nowrap : true,// 设置为true，当数据长度超出列宽时将会自动截取
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		pagination : true,
		rownumbers : true,
		remoteSort : false,
		frozenColumns : [ [ {
			field : 'ck',
			checkbox : true
		}] ],
		columns:[ [ 
		{field : 'typeName',title : '分类',width : 150,align : 'left',halign : 'center'}, 
		{field : 'title',title : '标题',width : 250,align : 'left',halign : 'center'},
		{field : 'userName',title : '创建人',width : 200,align : 'center'}, 
		{field : 'crttime',title : '创建日期',width : 200,align : 'center'}, 
		{field : 'rsts',title : '状态',width : 100,align : 'center',
				formatter : function(value, row, index) {
					if (value == 0) {
						return "<font>待审</font>";
					} else if (value == 1) {
						return "<font color=green>通过</font>";
					} else if (value ==2) {
						return "<font color=red>未通过</font>";
					}
				}
		}
	     ] ],
		onHeaderContextMenu : function(e, field) {
			e.preventDefault();
			if (!cmenu) {
				createColumnMenu();
			}
			cmenu.menu('tb', {
				left : e.pageX,
				top : e.pageY
			});
		},
		onLoadSuccess:function(data){
		 	f_timeout(data);
	 	},
	 	onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
	});
	
	//初始化编辑器
	var ue = UE.getEditor('u_content',{
		initialFrameHeight:200,
		initialFrameWidth:750,
		zIndex : 9999,
		autoHeightEnabled: false
    });
	
	$('#up_titlePic').uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'info/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : '上传图片',
		'height'		: 20,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueueLogo',
		'multi'			: false,
		'removeCompleted' : true,		
		'onUploadSuccess' : function(file, data, response) {
			if(data){
				$('#titlePic').val(data);
				var img_html = "<a rel=\"previewImg\" href=\""+filePath+data+"\"><img alt=\"预览\" src=\""+filePath+data+"\" style=\"width:45px\">&nbsp;<span>点击预览！</span></a>";
				$("#showtitlePic").show();
				head=1;
				$("#showtitlePic").html(img_html);
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
	});
	
});

//添加 - 信息
function addInfo() {
	formUrl = 'info/add.do';
	
	$('#infoForm').form("reset");
	$("#typeId").combotree({    
		url: 'infoType/combotree.do?rootId=1',   
	    required: true 
	 });  
	
	UE.getEditor('u_content').setContent("");//置空编辑器
	
	$("#infoWindow").dialog("open").dialog('setTitle', '添加资讯');
	
}

//提交表格
function submitForm() {
	var content = UE.getEditor('u_content').getContent();
	$('#content').val(content);
	if ($('#infoForm').form('validate') == false) {
		$.messager.show({title : '提示',msg : '输入验证没有通过!'});
		return;
	}
	
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#infoForm').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			
			console.info("result==="+result);
			
			$.messager.progress('close');
			$.messager.show( {title : '提示',msg : result});
			dataGrid.datagrid('reload');
			$('#infoForm').form("reset");
			closeWin('infoWindow');
		}
	});
}

// 修改
function updateInfo() {
	var rows = dataGrid.datagrid("getSelections");
	var leng = rows.length;
	if (leng == 0) {
		$.messager.alert('提示', '请选择你需要修改的记录!', 'info');
	} else {
		
		if (leng > 1) {
			$.messager.alert('提示', '只能修改一条记录!', 'info');
			return false;
		} else {
			formUrl = 'info/update.do';
			var info = rows[0];
			$('#infoForm').form("reset");
			$("#infoForm").form("load",info);
			
			UE.getEditor('u_content').setContent(info.content);
			
			$("#typeId").combotree({
				url: 'infoType/combotree.do?rootId=1',   
				value:info.typeId
			});
			
			var titlePic = info.titlePic;
			if(titlePic!=''){
				var img_html = "<a rel=\"previewImg\" href=\""+filePath+titlePic+"\"><img alt=\"预览\" src=\""+filePath+titlePic+"\"  style=\"width:45px\">&nbsp;<span>点击预览！</span></a>";
				$("#showtitlePic").show();
				head = 1;
				$("#showtitlePic").html(img_html);
				$('#titlePic').val(titlePic);
				
				$("a[rel=previewImg]").fancybox({
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'titlePosition' 	: 'over',
					'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
						return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
					}
				});
			}
			
			$('#infoWindow').window('open').dialog('setTitle', '修改资讯');
			
		}
	}
}

//删除
function removeInfo() {
	var rows = dataGrid.datagrid("getSelections");
	// 判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	} else {
		var temp; // 循环给提交删除参数赋值
		$.each(rows, function(i, n) {
			if (i == 0) {
				temp = n.infoId;
			} else {
				temp += "," + n.infoId;
			}
		});
		$.messager.confirm('提示', '是否删除选中数据?', function(r) {
			if (!r) {
				return;
			} else {
				$.messager.progress( {
					title : '提示',
					text : '数据处理中，请稍后....'
				});
				$.ajax( {
					url : 'info/delete.do',
					data : 'ids='+ temp,
					type : 'post',
					//dataType : 'json',
					success : function(result) {
						$.messager.progress('close');
						$.messager.show( {
							title : '提示',
							msg : result
						});
						dataGrid.datagrid('reload');
					}
				});
			}
		});
	}
}

//搜索
function find() {
	var title = $('#infoName').val();
	var rsts = $('#input_sts').combobox("getValue");
	
	//默认参数
	queryParams = {};

    if(title!=''){
		queryParams['params["title"]'] = title;
	}
    if(rsts!='-1' && rsts!=""){
		queryParams['params["rsts"]'] = rsts;
	}

	dataGrid.datagrid('reload', queryParams); // 点击搜索
}

/*function submitpushForm(){	
	if ($('#pushForm').form('validate') == false) {
		$.messager.show({title : '提示',msg : '输入验证没有通过!'});
		return;
	}
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#pushForm').form('submit', {
		url : 'info/addPush.do',
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.progress('close');
			$.messager.show( {title : '提示',msg : result});			
			////////////默认参数
			queryParams = [];
			queryParams['params[flag]'] = '1';//资讯分类标识
			queryParams['params[parentId]'] = '13';//
			////////////////		
			dataGrid.datagrid('reload',queryParams);
			$('#pushForm').form("reset");
			closeWin('pushWin');
		}
	});

	
}







// 隐藏
function clearForm() {
	$('#addWindow').window('close');
}






// 隐藏
function clearForm(){
   $('#addWindow').window('close');
}

function clearSearch(){
	$('#s_title').val("");
	$('#s_typeId').combotree('clear');;
	$('#s_state').val(-1);
	
	queryParams = [];
	queryParams['params[flag]'] = '1';//资讯分类标识
	////////////默认参数
	dataGrid.datagrid('reload',queryParams);
}





//预览
function preView(id){
	window.open(basePath+"news-detail.jsp?infoId="+id,"","");
}


//附件管理
function infoFile(infoId){
//	alert(infoId);
	if(infoId){
		$.messager.progress({
			title : '提示',
			text : '数据处理中，请稍后....'
		});
		$('#attachWin').window('open');
		var url = basePath+'jsp/info/infoFile.jsp?infoId='+infoId;
		$("#attachWinFrame").attr("src",url);
	
	}
		
}

//评论管理
function infoComment(infoId){
//	alert(infoId);
	if(infoId){
		$.messager.progress({
			title : '提示',
			text : '数据处理中，请稍后....'
		});
		$('#commentWin').window('open');
		var url = basePath+'jsp/info/infoComment.jsp?infoId='+infoId;
		$("#commentWinFrame").attr("src",url);
	
	}		
}
//审核
function doAuditsts(sts){
	// sts : 1.通过 2.不通过 0.待审核
	sts = (sts == 1 || sts == 2)?sts:0;
	var rows = $("#list_info").datagrid("getSelections");
	//判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要审核的记录!', 'info');
		return false;
	}else{
		var obj = new Array();
		//循环给提交删除参数赋值
		for(i=0;i<rows.length;i++){
			obj.push(rows[i].infoId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '是否继续执行?', function (r){
			if (!r) {
				return;
		    }else{
				parent.$.messager.progress({
					title : '提示',
					text : '数据处理中，请稍后....'
		        });
				$.post(
					'/nyjAppManage/info/auditInfos.do', 
					{
						'ids' : ids
						,'type' : sts
					},
					function(result) {
						parent.$.messager.progress('close');
						$.messager.show({ title : '提示', msg : result});
					    $('#list_info').datagrid('reload');
					}
				);
		    }
		});    
	}
}


// 审核
function audit() {
	var rows = $('#list_info').datagrid("getSelections");
	var leng = rows.length;
	if (leng == 0) {
		$.messager.alert('提示', '请选择你需要审核的记录!', 'info');
	} else {
		
		if (leng > 1) {
			$.messager.alert('提示', '只能审核一条记录!', 'info');
			return false;
		} else {
			var info = rows[0];				
			$("#audit_form").form("load",info);						
			$('#auditWin').window('open').window('setTitle', '审核信息');			
		}
	}
}

//提交表格
function submitAuditForm() {
	if ($('#audit_form').form('validate') == false) {
		$.messager.show({title : '提示',msg : '输入验证没有通过!'});
		return;
	}
	var formUrl = 'info/audit.do';
	$.messager.progress( {title : '提示',text : '数据处理中，请稍后....'});
	$('#audit_form').form('submit', {
		url : formUrl,
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			$.messager.progress('close');
			$.messager.show( {title : '提示',msg : result});
			dataGrid.datagrid('reload');
			closeWin('auditWin');
		}
	});
}

*/
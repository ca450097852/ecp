var dataGrid; // 列表
$(function() {
	
	$('#complaint_detail').window('close');
	$('#add').window('close');
	$('#seachStore').window('close');	
	$('#seachVendor').window('close');
	dataGrid = $('#complaintList').datagrid( {
		url : 'complaint/page.do',
		toolbar : "#tb", // 在添加 增添、删除、修改操作的按钮要用到这个
		title : '投诉举报管理',
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
		{field : 'title',title : '标题',width : 250,align : 'center'},
		{field : 'entName',title : '举报企业',width : 100,align : 'center'},
		{field : 'userName',title : '举报人',width : 100,align : 'center'}, 
		{field : 'phone',title : '举报人电话',width : 100,align : 'center'},
		{field : 'crttime',title : '举报时间',width : 150,align : 'center'}, 
		{field : 'sts',title : '状态',width : 100,align : 'center',
				formatter : function(value, row, index) {
					if (value == 0) {
						return "<font color=red>未处理</font>";
					} else if (value == 1) {
						return "<font>处理中</font>";
					} else if (value ==2) {
						return "<font color=green>已处理</font>";
					}
				}
		}, 
		{field:'cid',title:'操作',width:150,align:'center',formatter: function(value,row,index){ 
			if (row.sts == 0) {
				return "<a href='javascript:void(0)' onclick='tocheck("+index+",1)'><font color=red>处理</font></a>"+
				"&nbsp;&nbsp;<a href='javascript:void(0)' onclick='toLook("+index+")'>详细</a>";
			}else{
				return "<a href='javascript:void(0)' onclick='tocheck("+index+",0)'>编辑</a>"+
				"&nbsp;&nbsp;<a href='javascript:void(0)' onclick='toLook("+index+")'>详细</a>";
			}
		}}
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
	
	
 parent.$.messager.progress('close');
  					
	});

//查看
function toLook(i) {
	var complaint = dataGrid.datagrid("getRows")[i]; 
	$("#d_title").html(complaint.title);
	$("#d_entName").html(complaint.entName);
	$("#d_userName").html(complaint.userName);
	$("#d_phone").html(complaint.phone);
	$("#d_content").html(complaint.content);
	var appName = complaint.appName;
	if(appName!=null){
		$("#d_appName").html("<a class=\"easyui-linkbutton\" href='complaint/downLoad.do?fileName="+appName+"'>下载附件</a>");
	}else{
		$("#d_appName").html("无附件");
	}
	//	$("#d_remark").html(complaint.remark);
//	$("#d_opinion").html(complaint.opinion);
	if(complaint.finalResult!=''){
		$("#d_finalResult").html(complaint.handleOpinion);
	}else if(complaint.remark!=''){
		$("#d_finalResult").html(complaint.remark);
	}
	
	if(complaint.sts==0){
		$("#d_sts").html("未处理");
	}else if(complaint.sts==1){
		$("#d_sts").html("处理中");
	}else if(complaint.sts==2){
		$("#d_sts").html("已处理");
	}
	
	$('#complaint_detail').window('open').dialog('setTitle', '举报详细');
	$("#add_form").form("load", {});
}

// 处理 j==1,或者 编辑j==0
function tocheck(i,j) {
	var complaint = dataGrid.datagrid("getRows")[i]; 
	$('#oprerate').attr("value", "2");
	//表单赋值
	$('#add_form').form('load',complaint);
	//只读字段
	$("#up_title").html(complaint.title);
	$("#up_entName").html(complaint.entName);
	$("#up_userName").html(complaint.userName);
	$("#up_phone").html(complaint.phone);
	$("#up_content").html(complaint.content);
	
	if(j==1){
		$("#gdshow").show();
		$('#add').window('open').dialog('setTitle', '举报处理');
	}else{
		$("#gdshow").hide();
		$('#add').window('open').dialog('setTitle', '举报编辑');
	}
	
	$("#add_form").form("load", {});
}


// 修改
function update() {
	var rows = $('#complaintList').datagrid("getSelections");
	var leng = rows.length;
	if (leng == 0) {
		$.messager.alert('提示', '请选择你需要修改的记录!', 'info');
	} else {
		if (leng > 1) {
			$.messager.alert('提示', '只能修改一条记录!', 'info');
			return false;
		} else {
			$('#oprerate').attr("value", "2");
			$("#start").show();
			var complaint = rows[0];
			$("#entId1").combotree({
				url:'complaint_getEntTree.action',
				method:'get',required:true,
				value:complaint.entId
			});
			
//			$("#entId1").combotree('setValue', complaint.entId);
			$("#sts").combobox('setValue',complaint.sts);
			
			$("input[name='complaint.title']").val(complaint.title);
			$("input[name='complaint.userName']").val(complaint.userName);
			$("input[name='complaint.phone']").val(complaint.phone);
			$("textarea[name='complaint.content']").val(complaint.content);
			
			$("textarea[name='complaint.remark']").val(complaint.remark);
			$("input[name='complaint.cid']").val(complaint.cid);
			$("input[name='complaint.crttime']").val(complaint.crttime);
			$("input[name='complaint.sysCode']").val(complaint.sysCode);
			
			$('#add').window('open').dialog('setTitle', '修改信息');
			$("#add_form").form("load", {});
		}
	}
}


// 隐藏
function clearForm(id) {
	if(id==1){
		$('#add').window('close');
	}else{
		$('#show').window('close');
	}
}

// 删除
function removeit() {
	var rows = $("#complaintList").datagrid("getSelections");
	// 判断是否选择行
	if (!rows || rows.length == 0) {
		$.messager.alert('提示', '请选择要删除的记录!', 'info');
		return false;
	} else {
		var temp; // 循环给提交删除参数赋值
		$.each(rows, function(i, n) {
			if (i == 0) {
				temp = n.cid;
			} else {
				temp += "," + n.cid;
			}
		});
		$.messager.confirm('提示', '是否删除选中数据?', function(r) {
			if (!r) {
				return;
			} else {
				parent.$.messager.progress( {
					title : '提示',
					text : '数据处理中，请稍后....'
				});
				$.ajax( {
					url : 'complaint/delete.do',
					data : 'ids='+ temp,
					type : 'post',
					dataType : 'text',
					success : function(result) {
						parent.$.messager.progress('close');
						$.messager.show( {
							title : '提示',
							msg : result
						});
						dataGrid.datagrid('reload',{});
					}
				});
			}
		});
	}
}

//修改状态
function changeCheck(sts){		
	var arr = $('#complaintList').datagrid("getSelections");
	var lg = arr.length;
	if(lg==0){
		$.messager.alert('提示','请选择需要操作的记录!','question');
	}else if(lg!=1){
		$.messager.alert('提示','对不起，一次只能操作一条信息，请重新选择!','question');
	}else{		    
		var info = arr[0];
		if(info.sts==sts&&sts=='0'){
  			$.messager.show({ title : '提示', msg : '已是使用状态!'});
  			return;
  		}else if(info.sts==sts&&sts=='1'){
  			$.messager.show({ title : '提示', msg : '已是禁用状态!'});
  			return;
  		}
		parent.$.messager.progress({
			title : '提示',
			text : '数据处理中，请稍后....'
		});
		$.ajax({
         	  url:'info_updateSts.action',
         	  data:{ ids: info.infoId, sts: sts },
         	  type:'post',
         	  dataType:'text',
         	  success : function(result) {
         		   parent.$.messager.progress('close');
				   $.messager.show({ title : '提示', msg : result});
				   $('#complaintList').datagrid("reload");
			  }    
         });
	}		  													
}

// 搜索
function find(){
	var title = $('#s_title').val();
	var sts = $('#s_sts').val();
	var complaint = {};
	if(title!=""){complaint["title"]=title};
	if(sts != "-1") {complaint["sts"]=sts};

	dataGrid.datagrid('reload', complaint); // 点击搜索
}

// 隐藏
function clearForm(){
   $('#add').window('close');
}

//重置
function clearSearch(){
	$('#s_title').val("");
	$('#s_entId').combotree('clear');;
	$('#s_sts').val(-1);
	var complaint = {};
	
	dataGrid.datagrid('reload', complaint);
}

function submitForm() {
		$('#add_form').form('submit', {
				url : 'complaint/update.do',
				onSubmit : function(result) {
					return $(this).form('validate');// 对数据进行格式化
			},
			success : function(result) {
				$.messager.show( {
					title : '提示',
					msg : result
				});
				$('#add').window('close');
				clearSearch();
				dataGrid.datagrid('reload');
			}
		});
}


//广告位置下拉数据
var cData=[{
    "id":-1,    
    "text":"--选择广告位置--"   
},{
    "id":1,    
    "text":"pc首页头部幻灯片广告"   
},{
    "id":2,    
    "text":"app首页头部幻灯片广告"   
}]; 

//根据id返回text
function getText(id){
	var data = cData[id];
	return data.text;
}

var formUrl = '';
var filePath;
var basePath;
$(function() { 	
	
	filePath = $("#filePath").val();
	basePath = $("#basePath").val();
	
	//表格数据
	$('#bannerDataGrid').datagrid({
		  title:'广告管理',
		  iconCls : 'icon-ok',
	      pageSize : 10,//默认选择的分页是每页5行数据  
	      pageList : [ 10,20,30,50],//可以选择的分页集合  
	      nowrap : true,//设置为true，当数据长度超出列宽时将会自动截取  
	      striped : true,//设置为true将交替显示行背景。  
	      //collapsible : true,//显示可折叠按钮  
	      toolbar:"#tb",//在添加 增添、删除、修改操作的按钮要用到这个  
	      url:'banner/page.do',//url调用Action方法  
	      loadMsg : '数据装载中......',  			      
	      fit:true,
	      pagination : true,//分页  
          rownumbers : true,//行数
	      //singleSelect:true,//为true时只能选择单行  
	      fitColumns:true,//允许表格自动缩放，以适应父容器  
	      remoteSort : false,  
	      frozenColumns : [ [ {  
	           field : 'ck',  
	           checkbox : true  
	      } ] ],
	      columns:[[
	            {field:'imgType',title:'广告位置',width:250,align:'center',formatter: function(value,row,index){ 					
	            	return getText(value);		
				}},
				{field:'imgName',title:'名称',width:250,align:'center'},			
				{field:'linkUrl',title:'链接地址',width:250,align:'center'},
				{field:'seq',title:'显示顺序',width:100,align:'center'},
				{field:'sts',title:'显示状态',width:100,align:'center',formatter: function(value,row,index){ 					
					if(value==1){
						return "显示";
					}else{
						return "<font color='red'>不显示</font>";
					}
				}},
				{field:'imgId',title:'操作',width:100,align:'center',formatter: function(value,row,index){				
					var t1='<a href=\'javascript:void(0);\' onclick=\'preview("'+row.imgUrl+'");\'>预览</a>';
					return t1;									
				}}
	      ]],
          onLoadSuccess : function(data) {
			f_timeout(data);
		 },
 		 onClickRow: function(rowIndex, rowData){
 			$(this).datagrid('unselectAll');
 			$(this).datagrid('selectRow',rowIndex);
 		}
	}); 		
	 
	$("#uploadify").uploadify({
		'swf'			: basePath+'static/js/uploadify/uploadify.swf',
		'fileObjName' 	: 'uploadify',
		'uploader' 		: basePath+'banner/ns/upload.do;jsessionid='+$('#jsessionid').val(),
		'buttonText'    : '上传图片',
		'height'		: 20,
		'width'			: 100,
		'fileSizeLimit'	: 1024,
		'fileTypeDesc'  : '支持格式:jpg/gif/jpeg/png',  
        'fileTypeExts'  : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID'       : 'fileQueue',
		'multi'			: false,
		'removeCompleted' : false,
		'onUploadSuccess' : function(file, data, response) {		
			$("#imgUrl").val(data);
			$("#imgName").val(file.name);							
			if(data){
				var itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">\<div class="cancel">';				
				var t1='<a href=\'javascript:void(0);\' onclick=\'preview("'+data+'");\' style=\'background: url("'+basePath+'static/js/uploadify/da.png") 0 0 no-repeat;float:right\' title=\'预览\'></a>';
				var t2 = '<a href=\'javascript:void(0)\' onclick=\'removeAppd("'+data+'");\' style=\'background: url("'+basePath+'static/js/uploadify/uploadify-cancel.png") 0 0 no-repeat;float:right\' title=\'删除\'>X</a>\</div>\<span class=\'fileName\'>'+file.name+'</span><span class=\'data\'></span>\</div>';					
				itemTemplate = itemTemplate+t1+t2;					
				$("#fileQueue").html(itemTemplate);
			}
		}
	});
	$('#s_imgType').combobox({    
	    valueField:'id',    
	    textField:'text'
	});
	
	$('#s_imgType').combobox('loadData',cData);
	$('#s_imgType').combobox('setValue',-1);
});
	/**
	 * 关闭
	 * @return
	 */
	function clearForm(){
		$("#addWin").window("close");
	}
	
	/**
	 * 查询
	 * @return
	 */
	function find(){
		var imgName = $("#s_imgName").val();
		var imgType = $("#s_imgType").combobox("getValue");
		var sts = $("#s_sts").combobox("getValue");
		
		var queryParams = [];
		if(imgName!=''){
			queryParams['params[imgName]'] = imgName;
		}
		if(imgType!=-1){
			queryParams['params[imgType]'] = imgType;
		}
		if(sts!=-1){
			queryParams['params[sts]'] = sts;
		}
		$('#bannerDataGrid').datagrid("load",queryParams);
	}
	
	//重置
	function clearSearch(){
		$("#s_imgName").val("");
		$("#s_imgType").combobox("setValue",-1);
		queryParams = [];
		$('#bannerDataGrid').datagrid("load",queryParams);
	}	
	/**
	 * 添加
	 * @return
	 */
	function appendBanner(){
		$('#bannerForm').form("reset");
		$("#fileQueue").html('');
		
		$('#imgType').combobox({    
		    valueField:'id',    
		    textField:'text'
		});
		
		$('#imgType').combobox('loadData',cData);
		$('#imgType').combobox('setValue',-1);
		
		formUrl = 'banner/add.do';
		$("#addWin").window("open").window('setTitle', '添加广告图片');
	}	
	
	/**
	 * 修改
	 * @return
	 */
	function updateBanner(){		
		var arr = $('#bannerDataGrid').datagrid("getSelections");
		var lg = arr.length;
		if(lg==0){
			$.messager.alert('提示','请选择需要修改的信息!','question');
		}else if(lg!=1){
			$.messager.alert('提示','对不起，一次只能修改一条信息，请重新选择!','question');
		}else{
			var banner = arr[0];
			formUrl = 'banner/update.do';
			$('#bannerForm').form("reset");	
			$("#bannerForm").form("load",banner);

			$("#seq").numberbox('setValue',banner.seq);
			$("#sts").combobox('setValue',banner.sts);
			
			$('#imgType').combobox({    
			    valueField:'id',    
			    textField:'text'
			});
			$('#imgType').combobox('loadData',cData);
			$("#imgType").combobox('setValue',banner.imgType);//广告位置
			
			$("#linkUrl").val(banner.linkUrl);//链接地址

			if(banner.imgUrl&&banner.imgUrl!=''){
				var itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">\<div class="cancel">';				
				var t1='<a href=\'javascript:void(0);\' onclick=\'preview("'+banner.imgUrl+'");\' style=\'background: url("'+basePath+'static/js/uploadify/da.png") 0 0 no-repeat;float:right\' title=\'预览\'></a>';			
				var t2 = '<a href=\'javascript:void(0)\' onclick=\'removeAppd("'+banner.imgUrl+'")\' style=\'background: url("'+basePath+'static/js/uploadify/uploadify-cancel.png") 0 0 no-repeat;float:right\' title=\'删除\'>X</a>\</div>\<span class=\'fileName\'>'+banner.imgName+'</span><span class=\'data\'></span>\</div>';
					
				itemTemplate = itemTemplate+t1+t2;
					
				$("#fileQueue").html(itemTemplate);
			}
			
			
			$('#bannerForm').form("validate");
			$("#addWin").window("open").window('setTitle', '修改广告图片');

		}	
	}
	/**
	 * 预览窗口
	 * @param path
	 * @return
	 */
	function preview(path){
		window.open (basePath+'/jsp/info/preview.jsp?imgPath='+path,'图片预览','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=yes,location=no, status=no')
	}
	
	/**
	 * 删除图片
	 * @param path
	 * @return
	 */
	function removeAppd(path){
		$.ajax({
	     	  url:'banner/deleteFile.do',
	     	  data:'fileName='+path,
	     	  type:'post',
	     	  dataType:'text',
	     	  success : function(result) {
				$.messager.show({ title : '提示', msg : result });
				$("#imgUrl").val('');
				$("#fileQueue").html('');
			  }
	     }); 	

		
	}	
	
	//提交
    function submitForm(){
    	var imgType = $('#imgType').combobox('getValue');
    	if(imgType==''||imgType==-1){
    		$.messager.show({ title : '提示', msg : '请选择广告位置！' });  
    		return;
    	}
    	var imgUrl = $('#imgUrl').val();
    	if(imgUrl==''){
    		$.messager.show({ title : '提示', msg : '请上传广告图片！' });  
    		return;
    	}
    	if($('#bannerForm').form('validate')==false){
    		$.messager.show({ title : '提示', msg : '必填验证没有通过!' });  
    		return;
    	}
//    	parent.$.messager.progress({
//			title : '提示',
//			text : '数据处理中，请稍后....'
//		});
    	  	
		//提交
		$('#bannerForm').form('submit', {
			url : formUrl,
			onSubmit : function(param) {
			    return $(this).form('validate');//对数据进行格式化
			},
			success : function(result) {    	
				$.messager.show({ title : '提示', msg : result });   	
				//重新加载数据
	       		$('#bannerDataGrid').datagrid("reload");  		       		
	       		//关闭进度条
//	       		parent.$.messager.progress('close');	
		       	$('#addWin').window('close');
			}       		
		});     		        		       	 
    }
		
	//删除
	function removeBanner(){					
		var arr = $('#bannerDataGrid').datagrid("getSelections");
		if(arr.length==0){
			$.messager.alert('提示','请选择要删除的信息!','question');
			return;
		}
		var obj = new Array();
		for(i=0;i<arr.length;i++){
			obj.push(arr[i].imgId);
		}
		var ids = obj.join(',');
		$.messager.confirm('提示', '确定删除选择信息?', function(r){
			if (r){
				$.post('banner/delete.do', 'ids='+ids, function(result) {
					$.messager.show({ title : '提示', msg : result });
					$('#bannerDataGrid').datagrid("reload"); 
				}, "TEXT");
			}
		});
	}
		
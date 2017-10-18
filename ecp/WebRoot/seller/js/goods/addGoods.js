var basePath;
var filePath;
$(function(){
	
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
	$("#leftGoodsId").addClass("active");
	$("aside").removeClass("menu");
	
	$("#goodsImgFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../webGoodsFile/upload.action;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'goods'},
		'buttonText' : '上传附件',
		'height' : 20,
		'width' : 80,
		'fileSizeLimit' : 1024,
		'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
		'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
		'queueID' : 'fileQueue',
		'multi' : false,
		'removeCompleted' : true,
		'onUploadSuccess' : function(file, data, response) {
			//设置预览
			$('#preview').attr('href',data);
			$('#preview').fancybox();
			
			$('#goodsImg').val(data);
		}
	});
	
	$("#goodsImgFile1").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../webGoodsFile/upload.action;jsessionid='
			+ $('#sessionId').val(),
			'formData' : {'dir':'goods'},
			'buttonText' : '上传二维码',
			'height' : 20,
			'width' : 80,
			'fileSizeLimit' : 1024,
			'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
			'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
			'queueID' : 'fileQueue1',
			'multi' : false,
			'removeCompleted' : true,
			'onUploadSuccess' : function(file, data, response) {
				//设置预览
				$('#preview1').attr('href',data);
				$('#preview1').fancybox();
				
				$('#dimennoImg').val(data);
			}
	});
	

	
	
	
	//初始化xhEditor编辑器插件
	$('#goodsDesc').xheditor({
		tools:'full',
		skin:'default',
		upMultiple:true,
		upImgUrl: "webGoodsFile/upload1.action?dir=goods",
		upImgExt: "jpg,jpeg,gif,bmp,png",
		//onUpload:insertUpload,
		html5Upload:false
	});
	//初始化xhEditor编辑器插件
	$('#goodsSpecs').xheditor({
		tools:'full',
		skin:'default',
		upMultiple:true,
		upImgUrl: "webGoodsFile/upload1.action?dir=goods",
		upImgExt: "jpg,jpeg,gif,bmp,png",
		//onUpload:insertUpload,
		html5Upload:false
	});
	
	//加载商品分类
	$("#h_typeId").combotree({
		url: 'ns/webGoodsType/combotree.action?flag=2'
	 }); 
	
	//加载品牌
	$("#brandId").combotree({
		url: 'webGoodsBrand/combotree.action'
	}); 
	
});


var G_GoodsBrand;

//显示选择品牌DIV
function showBrand(){
	if(G_GoodsBrand){
		initBrandLayer(G_GoodsBrand);
	}else{
		//获取商品品牌信息
		$.post('webGoodsBrand/list.action','',function(result){
			G_GoodsBrand = result;
			initBrandLayer(G_GoodsBrand);
		},"JSON");
	}
}
//初始化品牌弹出层
function initBrandLayer(rows){
	var content = '';
	var brandId = $('#brandId').val();
	for(var i=0;i<rows.length;i++){
		var row = rows[i];
		
		var showFlag = '';
		if(brandId==row.brandId){
			showFlag = 'style="display:block;"';
		}
		
		content += '<div class="brandItem">\
						<div brandId="'+row.brandId+'" onclick="selectBrand(this);">\
							<img src="'+row.brandLogo+'"/>\
							<span>'+row.brandName+'</span>\
						</div>\
						<div class="select" '+showFlag+'>\
						<img style="width: 50%;margin: auto;padding-top: 20px" src="static/images/goods/select.png"/>\
						</div>\
					</div>';
						
	}
	layer.open({
	    type: 1, //page层
	    area: ['500px', '400px'],
	    title: '选择商品品牌',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 1, //0-6的动画形式，-1不开启
	    content: content
	});   
}

//选择品牌事件
function selectBrand(event){
	$('.select').hide();
	$(event).next().show();
	$('#brandId').val($(event).attr("brandId"));
	$('#brandText').html('已选择品牌：'+$(event).find('span').html());
}

//显示商品分类Layer
function showGoodsType(){
	var content = '<ul id="typeIdTree"></ul>';
	content += '<div class="button_div"><input type="button" value="确定" onclick="ensureType()"/></div>';
	
	layer.open({
	    type: 1, //page层
	    area: ['500px', '400px'],
	    title: '选择商品分类',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 1, //0-6的动画形式，-1不开启
	    content: content
	});  
	
	$('#typeIdTree').tree({
	    url: 'ns/webGoodsType/combotree.action?flag=1',
	    onLoadSuccess:function(node, data){
			var sv = $('#h_typeId').val();
			if(sv){
				var node = $('#typeIdTree').tree('find', sv);
				console.log(node);
				$('#typeIdTree').tree('select', node.target);
			}
		}
	 });
	
}
//确定商品分类
function ensureType(){
	var obj = $('#typeIdTree').tree('getSelected');
	console.log(obj);
	if(!obj){
		alert('请选择商品分类');
		return;
	}
	$('#h_typeId').val(obj.id);
	$('#spType').html('已选择分类:'+obj.text);
	layer.closeAll();
}

//显示栏目选择Layer
function showColumn(){
	var content = '<ul id="columnTree"></ul>';
	content += '<div class="button_div"><input type="button" value="确定" onclick="ensureColumn()"/></div>';
	layer.open({
	    type: 1, //page层
	    area: ['500px', '400px'],
	    title: '选择商品所属栏目',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 1, //0-6的动画形式，-1不开启
	    content: content
	});  
	
	$('#columnTree').tree({
	    url: 'webGoodsColumn/tree.action?flag=1',
	    checkbox:true,
	    onLoadSuccess:function(node, data){
			var ids = $('#columnId').val();
			if(ids){
				var arr = ids.split(',');
				console.log(arr);
				for(var i=0;i<arr.length;i++){
					var node = $('#columnTree').tree('find',arr[i]);
					$('#columnTree').tree('check',node.target);
				}
			}
		}
	 });
}

//确定商品栏目
function ensureColumn(){
	var nodes = $('#columnTree').tree('getChecked');
	var ids = new Array();
	var text = new Array();
	for(var i=0;i<nodes.length;i++){
		ids.push(nodes[i].id);
		text.push(nodes[i].text);
	}
	$('#columnId').val(ids);
	$('#spColumn').html('已选择栏目：'+text);
	layer.closeAll();
}

//提交表单
function submitForm(){
	
	$('#goodsDesc').xheditor({
		tools:'full',
		skin:'default',
		upMultiple:true,
		upImgUrl: "webGoodsFile/upload1.action?dir=goods",
		upImgExt: "jpg,jpeg,gif,bmp,png",
		//onUpload:insertUpload,
		html5Upload:false
	});
/*	$('#goodsSpecs').xheditor({
		tools:'full',
		skin:'default',
		upMultiple:true,
		upImgUrl: "webGoodsFile/upload1.action?dir=goods",
		upImgExt: "jpg,jpeg,gif,bmp,png",
		//onUpload:insertUpload,
		html5Upload:false
	});*/
//	return;
	
	var goodsDesc = $('#goodsDesc').val();
	$('#goodsDescT').val(goodsDesc);
	
	
	var goodsSpecs = $('#goodsSpecs').val();
	$('#goodsSpecsT').val(goodsSpecs);
	
	var h_typeId=$('#h_typeId').combotree('getValue');
	 if(h_typeId==0){
		 layer.msg('请选择商品分类！');
		 return;
	 }
	 var brandId=$('#brandId').combotree('getValue');
	 if(brandId==""){
		 $('#brandId').val(0);
	 }
/*	 if(modelList.length==0){
		 layer.msg('请添加商品规格型号！');
		 return;
	 }*/
	var objs = $('input[require=true]');
	

	var inventory=$('#inventory').val();
	if(inventory==""){
		layer.msg('请填写库存数量！');
		return;
	}
	var chengbenPrice=$('#chengbenPrice').val();
	if(chengbenPrice==""){
		layer.msg('请填写成本价！');
		return;
	}
	var saledPrice=$('#saledPrice').val();
	if(saledPrice==""){
		layer.msg('请填写销售价！');
		return;
	}
	var marketPrice=$('#marketPrice').val();
	if(marketPrice==""){
		layer.msg('请填写市场价格！');
		return;
	}
	
	
	
	if(objs){
		
		for(var i=0;i<objs.length;i++){
			if($(objs[i]).val()==''){
				layer.msg($(objs[i]).attr('message'), {
				  
				});
				return;
			}
		}
	}
	 
	
	$('#modelStr').val(JSON.stringify(modelList));
	
	$('#goodsForm').form('submit', {
		url : 'webGoods/add.action',
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			var data = eval('('+result+')');
			layer.confirm(data.message,{'icon':4,btn:['继续添加','返回列表']},function(index){
				//第一个按钮单击事件
				layer.close(index);
				$('#goodsForm').form('reset');
				modelList = [];
				showModel();
				$('#spType').html('');
				$('#brandText').html('');
			},function(index){
				//第二个按钮单击事件
				window.location.href=basePath+"seller/goods/goods.jsp";
			});
		}
	});
}

var modelList = [];
var modelIndex = 0;
var modelDatagrid;
//显示规格型号Layer
function showModel(){
	var data = modelList;
	var content ='<div class="line goods-type"><div class="goods-type-box">';
	for(var i=0;i<data.length; i++){
		content +='<a  onclick="goodsUpdateModel('+ data[i].modelId +')" id="" class="goods-normal" style="cursor:pointer; position:relative;"><i class="cancel" onclick="goodsDeleteModel('+ data[i].modelId +',event)"></i>'
				+ data[i].modelName +
				'</a>';	
		
	}
	content +='<div style="clear:both"></div></div>';
	$("#model").html(content);
}
function goodsDeleteModel(modelId,event){
	event.stopPropagation();    //  阻止事件冒泡
	deleteModel(modelId);
}
function goodsUpdateModel(modelId){
	updateModel(modelId);
}

//显示添加规格Layer
function showAddModel(){
	layer.closeAll();
	var content = '<table width="98%" style="margin-top: 25px;">\
				<tr height="35px" style="height: 45px;">\
				    <td align="right" style="padding-left: 15px;">规格编码:</td>\
				    <td>\
				      <input type="text" id="modelNo" required="true" style="width:290px;height: 30px;" class="txt_input txt_input2">\
				    </td>\
				</tr>\
				<tr height="35px" style="height: 45px;">\
				    <td align="right">规格名称:</td>\
				    <td>\
				      <input type="text" id="modelName" required="true" style="width:290px;height: 30px;">\
				    </td>\
				</tr>\
				<tr height="35px" style="height: 45px;">\
					<td align="right">规格价格:</td>\
					<td>\
						<input type="text" id="modelPrice" required="true" style="width:290px;height: 30px;" onkeyup="numCheck()">\
					</td>\
				</tr>\
				<tr height="35px" style="height: 45px;">\
				    <td align="right">状态:</td>\
				    <td>\
				      <select id="state">\
				      	<option value="1">启用</option>\
				      	<option value="2">停用</option>\
				      </select>\
				    </td>\
				</tr>\
				<tr height="35px" style="height: 45px;">\
			    <td align="right">规格图片:</td>\
			    <td>\
			    	<input type="hidden" name="modelImg" id="modelImg">\
			      <input type="file" id="modelFile">\
			      <div class="uploadify-button preview" style="margin:0 0 0 15px;height:20px;width:70px;float: left;display:none;">\
					<a id="modelPreview" class="ecp_a" href="javascript:void();">预览</a>\
				</div>\
			    </td>\
				</table>';
	content += '<div class="button_div"><input type="button" class="sub_button" style="width: 70px;height: 30px;background-color: #60B979;color: white;" value="确定" onclick="ensureModel()"/></div>';
	
	layer.open({
	    type: 1, //page层
	    area: ['400px', '350px'],
	    title: '添加规格型号',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content,
	    end:function(){
			showModel();
		}
	});
	
	$("#modelFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../webGoodsFile/upload.action;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'model'},
		'buttonText' : '上传附件',
		'height' : 20,
		'width' : 70,
		'fileSizeLimit' : 1024,
		'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
		'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
		'multi' : false,
		'queueID' : 'h_fileQueue',
		'removeCompleted' : true,
		'onUploadSuccess' : function(file, data, response) {
			//设置预览
			$('#modelPreview').attr('href',data);
			$('#modelPreview').fancybox();
			
			$('input[name="modelImg"]').val(data);
			
			$('#modelPreview').parent().show();
		},
		'onInit':function(){
			$('#h_fileQueue').hide();
		}
	});
}
//确定添加规格
function ensureModel(){
	var modelNo = $('#modelNo').val();
	if(modelNo==''){
		layer.tips('规格编码不可为空', '#modelNo');
		return;
	}
	var modelName = $('#modelName').val();
	if(modelName==''){
		layer.tips('规格名称不可为空', '#modelName');
		return;
	}
	var modelPrice = $('#modelPrice').val();
	if(modelPrice==''){
		layer.tips('规格价格不可为空', '#modelPrice');
		return;
	}
	var modelImg = $('#modelImg').val();
	var state = $('#state').val();
	
	var row = {'modelId':modelIndex++,'modelNo':modelNo,'modelName':modelName,'modelImg':modelImg,'state':state,'modelPrice':modelPrice};
	
	modelList.push(row);
	
	layer.closeAll();
}
//删除规格
function deleteModel(modelId){
	layer.confirm("确认删除 ? ",{'icon':4,btn:['确认','取消']},function(index){
		//第一个按钮单击事件
		layer.close(index);
		for(var i=0;i<modelList.length;i++){
			if(modelList[i].modelId==modelId){
				modelList.splice(i,1);
				showModel();
				return;
			}
		}
	},function(index){
		//第二个按钮单击事件
		layer.close(index);
	});
}
//修改规格
function updateModel(modelId){
	var row ;
	for(var i=0;i<modelList.length;i++){
		var rows = modelList[i];
		if(rows.modelId==modelId){
			row=rows;
		}
	}
	layer.closeAll();//关闭其他所以层
	var content = '<table width="98%">\
				<tr height="35px">\
				    <td align="right">规格编码:</td>\
				    <td>\
				      <input type="hidden" id="modelId">\
				      <input type="text" id="modelNo" required="true" style="width:250px">\
				    </td>\
				</tr>\
				<tr height="35px">\
				    <td align="right">规格名称:</td>\
				    <td>\
				      <input type="text" id="modelName" required="true" style="width:250px">\
				    </td>\
				</tr>\
		<tr height="35px">\
			<td align="right">规格价格:</td>\
			<td>\
				<input type="text" id="modelPrice" required="true" style="width:250px" onkeyup="numCheck()">\
			</td>\
		</tr>\
				<tr height="35px">\
				    <td align="right">状态:</td>\
				    <td>\
				      <select id="state">\
				      	<option value="1">启用</option>\
				      	<option value="2">停用</option>\
				      </select>\
				    </td>\
				</tr>\
				<td align="right">规格图片:</td>\
			    <td>\
			    	<input type="hidden" name="modelImg" id="modelImg">\
			      <input type="file" id="modelFile">\
			      <div class="uploadify-button preview" style="margin:0 0 0 15px;height:20px;width:70px;float: left;display:none;">\
					<a id="modelPreview" class="ecp_a" href="javascript:void();">预览</a>\
				</div>\
			    </td>\
			</tr>\
				</table>';
	content += '<div class="button_div"><input type="button" value="确定" onclick="ensureUpateModel()"/></div>';
	
	layer.open({
	    type: 1, //page层
	    area: ['400px', '300px'],
	    title: '修改规格型号',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content,
	    end:function(){
				showModel();
			}
	});
	
	$("#modelFile").uploadify({
		'swf' : 'static/js/uploadify/uploadify.swf',
		'fileObjName' : 'uploadify',
		'uploader' : '../../webGoodsFile/upload.action;jsessionid='
				+ $('#sessionId').val(),
		'formData' : {'dir':'model'},
		'buttonText' : '上传附件',
		'height' : 20,
		'width' : 70,
		'fileSizeLimit' : 1024,
		'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png',
		'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png',
		'multi' : false,
		'queueID' : 'h_fileQueue',
		'removeCompleted' : true,
		'onUploadSuccess' : function(file, data, response) {
			//设置预览
			$('#modelPreview').attr('href',data);
			$('#modelPreview').fancybox();
			
			$('input[name="modelImg"]').val(data);
			
			$('#modelPreview').parent().show();
		},
		'onInit':function(){
			$('#h_fileQueue').hide();
		}
	});
	
	
	$('#modelId').val(row.modelId);
	$('#modelNo').val(row.modelNo);
	$('#modelName').val(row.modelName);
	$('#modelPrice').val(row.modelPrice);
	$('#state').val(row.state);
	if(row.modelImg!=''){
		$('#modelImg').val(row.modelImg);
		//设置预览
		$('#modelPreview').attr('href',row.modelImg);
		$('#modelPreview').fancybox();
		
		$('input[name="modelImg"]').val(row.modelImg);
		
		$('#modelPreview').parent().show();
	}
	

}


function numCheck(){
	var value = $('#modelPrice').val();
	value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'');
	$('#modelPrice').val(value);
}

function ensureUpateModel(){
	var modelId = $('#modelId').val();
	var modelNo = $('#modelNo').val();
	if(modelNo==''){
		layer.tips('规格编码不可为空', '#modelNo');
		return;
	}
	var modelName = $('#modelName').val();
	if(modelName==''){
		layer.tips('规格名称不可为空', '#modelName');
		return;
	}
	var modelPrice = $('#modelPrice').val();
	if(modelPrice==''){
		layer.tips('规格价格不可为空', '#modelPrice');
		return;
	}
	var modelImg = $('#modelImg').val();
	var state = $('#state').val();
	for(var i=0;i<modelList.length;i++){
		var row = modelList[i];
		if(row.modelId==modelId){
			row.modelNo=modelNo;
			row.modelName=modelName;
			row.modelPrice=modelPrice;
			row.state = state;
			row.modelImg = modelImg;
			layer.closeAll();
		}
	}
}

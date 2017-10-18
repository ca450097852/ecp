var goodsId;
var basePath;
var filePath;
$(function(){
	basePath=$('#basePath').val();
	filePath=$('#filePath').val();
	
	$("#leftGoodsId").addClass("active");
	$("aside").removeClass("menu");
	layer.load();
	
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
	$('#goodsSpecs').xheditor({
		tools:'full',
		skin:'default',
		upMultiple:true,
		upImgUrl: "webGoodsFile/upload1.action?dir=goods",
		upImgExt: "jpg,jpeg,gif,bmp,png",
		//onUpload:insertUpload,
		html5Upload:false
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
	//加载商品分类
	$("#h_typeId").combotree({
		url: 'ns/webGoodsType/combotree.action?flag=2'
	 }); 
	
	//加载品牌
	$("#brandId").combotree({
		url: 'webGoodsBrand/combotree.action'
	});
	
	goodsId = $('#goodsId').val();
	$.post('webGoods/getGoods.action',{'goodsId':goodsId},function(result){
		for(var item in result){
			$('input[name='+item+']').val(result[item]);
		}
		$('textarea[name=remark]').val(result.remark);
		$('#goodsDesc').val(result.goodsDesc);
		$('#goodsSpecs').val(result.goodsSpecs);
		if(result.goodsImg!=''){
			//设置预览
			$('#preview').attr('href',result.goodsImg);
			$('#preview').fancybox();
		}
		//获取商品品牌信息
		$.post('webGoodsBrand/list.action','',function(resultbrand){
			G_GoodsBrand = resultbrand;
			for(var i=0;i<G_GoodsBrand.length;i++){
				var row = G_GoodsBrand[i];
				if(row.brandId==result.brandId){
					$('#brandId').combotree('setValue', row.brandId);
				}
			}
		},"JSON");
		//规格
		 getModel();
		
		layer.closeAll('loading');
	},'JSON');
	
	
});


function getModel(){
	$.post('webGoodsModel/page.action',{'rows':1000,'params[goodsId]':goodsId},function(resultmodel){
		modelList=resultmodel.rows;
		showModel();
	},"JSON");
}

function selectBrandsure(){
	layer.closeAll();
}


//提交表单
function submitForm(){
	
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
	 
	var objs = $('input[require=true]');
	//检查必填项
	if(objs){
		for(var i=0;i<objs.length;i++){
			if($(objs[i]).val()==''){
				layer.msg($(objs[i]).attr('message'), {
				    offset: 0,
				    shift: 5
				});
				return;
			}
		}
	}
	
	$('#goodsForm').form('submit', {
		url : 'webGoods/update.action',
		onSubmit : function(result) {
			return $(this).form('validate');//对数据进行格式化
		},
		success : function(result) {
			var data = eval('('+result+')');
			layer.confirm(data.message,{'icon':4,btn:['继续修改','返回列表']},function(index){
				//第一个按钮单击事件
				layer.close(index);
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
function numCheck(){
	var value = $('#modelPrice').val();
	value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'');
	$('#modelPrice').val(value);
}
//显示添加规格Layer
function showAddModel(){
	layer.closeAll();
	var content = '<table width="98%">\
				<tr height="35px">\
				    <td align="right">规格编码:</td>\
				    <td>\
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
				<tr height="35px">\
			    <td align="right">规格图片:</td>\
			    <td>\
			    	<input type="hidden" name="modelImg" id="modelImg">\
			      <input type="file" id="modelFile">\
			      <div class="uploadify-button preview" style="margin:0 0 0 15px;height:20px;width:70px;float: left;display:none;">\
					<a id="modelPreview" class="ecp_a" href="javascript:void();">预览</a>\
				</div>\
			    </td>\
				</table>';
	content += '<div class="button_div"><input type="button" value="确定" onclick="ensureModel()"/></div>';
	
	layer.open({
	    type: 1, //page层
	    area: ['400px', '300px'],
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
	
	var row = {'goodsId':goodsId,'modelNo':modelNo,'modelName':modelName,'modelImg':modelImg,'state':state,'modelPrice':modelPrice};
	
	$.post('webGoodsModel/add.action',row,function(result){
		layer.closeAll();
		layer.msg(result);
		getModel();
	},'TEXT');
	
}
//删除规格
function deleteModel(modelId){
	layer.confirm("确认删除 ? ",{'icon':4,btn:['确认','取消']},function(index){
		//第一个按钮单击事件
		var arr = new Array();
		arr.push(modelId);
		$.post('webGoodsModel/delete.action',{'ids':arr.join(',')},function(result){
			layer.msg(result);
		},'TEXT');
		getModel();
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
	
	var row = {'modelId':modelId,'goodsId':goodsId,'modelNo':modelNo,'modelName':modelName,'modelImg':modelImg,'state':state,'modelPrice':modelPrice};
	
	$.post('webGoodsModel/update.action',row,function(result){
		layer.closeAll();
		layer.msg(result);
		getModel();
	},'TEXT');
}




















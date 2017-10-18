var dataGrid;
var staticGoodsId ;

$(function(){
	dataGrid = $('#goodsTable').datagrid( {
		url : 'goods/page.do',
		title : '商品管理',
		toolbar : "#toolbar", // 在添加 增添、删除、修改操作的按钮要用到这个
		iconCls : 'icon-product',
		pageSize : 10,// 默认选择的分页是每页10行数据
		pageList : [ 10, 20, 30, 50, 100 ],// 可以选择的分页集合
		striped : true,// 设置为true将交替显示行背景。
		fit : true,
		fitColumns : true,
		remoteSort : true,
		pagination : true,
		rownumbers : true,
		sortName:'create_time', 
		sortOrder:'desc',
		frozenColumns : [[{
			field : 'ck',
			checkbox : true
		}]],
		columns : [ [
		        {field : 'goodsNo',title : '商品编号',width : 100,align : 'left',halign : 'center'},
				{field : 'goodsName',title : '商品名称',width : 100,align : 'left',halign : 'center'},
				{field : 'typeName',title : '所属分类',width : 100,align : 'center'},
				//{field : 'chengbenPrice',title : '成本价',width : 100,align : 'center'},
				//{field : 'marketPrice',title : '市场价',width : 100,align : 'center'},
				{field : 'saledPrice',title : '销售价',width : 100,align : 'right',halign:'center'},
				{field : 'saledNum',title : '销售数量',width : 100,align : 'right',halign:'center'},
				{field : 'inventory',title : '库存数量',width : 100,align : 'right',halign:'center'},
				{field : 'state',title : '状态',width : 100,align : 'center',formatter : function(value, row, index) {
					if (value == 0) {
						return "待上架";
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
				}},
				{field : 'recommend',title : '推荐商品',width : 100,align : 'center',formatter : function(value, row, index) {
					var op = "" ;
					if(row.recommend == "1"){
						op += '<a style="color:#FB5651" href="javascript:void(0);" onclick="recommendGoods('+row.goodsId + ',' +row.recommend+');">是</a>&nbsp;'
					}else{
						op += '<a href="javascript:void(0);" onclick="recommendGoods('+row.goodsId + ','+row.recommend+');">否</a>&nbsp;'
					}
					return op;
				}},
				{field : 'flag',title : '操作',width : 100,align : 'center',formatter : function(value, row, index) {
					//<a href="javascript:void(0)">查看详情</a>&nbsp;&nbsp;
					var op = '<a href="javascript:void(0);" onclick="showColumn('+row.goodsId+');">栏目设置</a>&nbsp;'
						+ '<a href="javascript:void(0);" onclick="showGoodsModel('+index +');">规格管理</a>' ;
					return op;
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

//设置推荐商品
function recommendGoods(goodsid , recommend){
	if(recommend == "2"){//设为推荐
		$.post("goods/updateSelective.do",{"goodsId":goodsid,"recommend":"1"},function(msg){
			$.messager.show( {title : '提示',msg : msg});
			dataGrid.datagrid('reload');
		});
	}else{//设为不推荐
		$.post("goods/updateSelective.do",{"goodsId":goodsid,"recommend":"2"},function(msg){
			$.messager.show( {title : '提示',msg : msg});
			dataGrid.datagrid('reload');
		});
	}
}

function showSearch(){
	var content = '<table width="98%">\
		<tr height="35px">\
	    	<td align="right">商品编号:</td>\
		    <td>\
		      <input type="text" id="goodsNo" name="params[goodsNo]" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">商品名称:</td>\
		    <td>\
		      <input type="text" id="goodsName" name="params[goodsName]" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">商品分类:</td>\
		    <td>\
		      <input type="text" id="typeId" style="width:250px">\
		    </td>\
		</tr>\
		<tr height="35px">\
		    <td align="right">状态:</td>\
		    <td>\
		      <select id="state" name="params[state]" style="width:250px">\
		      	<option value="">请选择</option>\
		    	<option value="0">待上架</option>\
		    	<option value="1">上架</option>\
		    	<option value="2">审核通过</option>\
		    	<option value="3">审核不通过</option>\
		    	<option value="4">下架</option>\
		    	<option value="5">库存不足</option>\
		      </select>\
		    </td>\
		</tr>\
		<tr height="35px">\
	    <td align="right">推荐商品:</td>\
	    <td>\
	      <select id="recommend" name="params[recommend]" style="width:250px">\
	      	<option value="">全部</option>\
	    	<option value="1">是</option>\
	    	<option value="2">否</option>\
	      </select>\
	    </td>\
	</tr>\
		</table>';
	    content += '<div class="button_div"><input type="button" value="确定" onclick="toSearch()"/><input type="button" value="取消" onclick="layer.closeAll();"/></div>';
	layer.open({
	    type: 1, //page层
	    area: ['400px', '300px'],
	    title: '设置搜索条件',
	    skin: 'layui-layer-molv', //墨绿风格
	    shade: 0.6, //遮罩透明度
	    shift: 5, //0-6的动画形式，-1不开启
	    content: content
	});   
	
	for(var item in searchParam){
		$('#'+item).val(searchParam[item]);
	}
	
	$('#typeId').combotree({    
	    url: 'ns/webGoodsType/combotree.do?flag=2',
	    value:searchParam&&searchParam.typeId?searchParam.typeId:0
	});  
}
var searchParam;
function toSearch(){
	searchParam = [];
	var goodsNo = $('#goodsNo').val();
	var goodsName = $('#goodsName').val();
	var typeId = $('#typeId').combotree('getValue');
	var state = $('#state').val();
	var recommend = $('#recommend').val();
	/*if(goodsNo==''&&goodsName==''&&typeId==''){
		layer.msg('请选择');
	}*/
	var params = [];
	if(goodsNo!=''){
		params['params[goodsNo]'] = goodsNo;
		searchParam['goodsNo'] = goodsNo;
	}
	if(goodsName!=''){
		params['params[goodsName]'] = goodsName;
		searchParam['goodsName'] = goodsName;
	}
	if(typeId!=0){
		params['params[typeId]'] = typeId;
		searchParam['typeId'] = typeId;
	}
	if(state!=''){
		params['params[state]'] = state;
		searchParam['state'] = state;
	}
	if(recommend!=''){
		params['params[recommend]'] = recommend;
		searchParam['recommend'] = recommend;
	}
	dataGrid.datagrid('load',params);
	layer.closeAll();
}
//审核商品
function audit(type){
	var rows = dataGrid.datagrid('getSelections');
	if(rows.length==0){
		$.messager.alert('提示','请选择你需要修改的记录!','info');
		return;
	}
	
	var ids = new Array();
	for(var i=0;i<rows.length;i++){
		ids.push(rows[i].goodsId);
	}
	$.post('goods/auditGoods.do',{'state':type,'ids':ids.join(',')},function(result){
		$.messager.show( {title : '提示',msg : result});
		dataGrid.datagrid('reload');
	},'TEXT')
	
}
var column_goodsId;
function showColumn(goodsId){
	column_goodsId = goodsId;
	$('#columnTree').tree({
		url:'goodsColumn/tree.do?flag=1',
		checkbox:true,
		onLoadSuccess:function(node,data){
			$.post('columnGoods/findBygoodsId.do',{'goodsId':goodsId},function(result){
				if(result.length!=0){
					for(var i=0;i<result.length;i++){
						var node = $('#columnTree').tree('find',result[i].columnId);
						$('#columnTree').tree('check', node.target);
					}
				}
			},'JSON')
		}
	});
	$('#columnWindow').window('open');
}

function saveColumn(){
	var nodes = $('#columnTree').tree('getChecked');
	console.log(nodes);
	if(nodes.length==0){
		$.messager.show({'title':'提示',msg:'请选择栏目'})
		return;
	}
	var arr = new Array();
	for(var i=0;i<nodes.length;i++){
		arr.push(nodes[i].id);
	}
	$.post('columnGoods/add.do',{'goodsId':column_goodsId,'ids':arr.join(',')},function(result){
		$.messager.show({title:'提示',msg:result});
		$('#columnWindow').window('close');
	},'TEXT')
	
}

function showGoodsModel(index){
	var row = dataGrid.datagrid('getRows')[index];
	staticGoodsId = row.goodsId ;
	document.getElementById('ifrId').contentWindow.resetSearch();
	document.getElementById('ifrId').contentWindow.find(); 
	$('#modelWindow').window('open').dialog('setTitle',row.goodsName);
}

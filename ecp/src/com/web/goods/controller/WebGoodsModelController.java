package com.web.goods.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsModel;
import com.hontek.goods.service.GoodsModelService;
/**
* 
* <p>Title: 商品库存变化记录控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */


@Controller
@RequestMapping("webGoodsModel")
public class WebGoodsModelController extends BaseController{
	
	@Autowired
	private GoodsModelService goodsModelService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = goodsModelService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	/**
	 * 搜索某个产品的所以规格
	 * @param goodsId
	 */
	@RequestMapping("getList")
	public void findModelList(String goodsId,HttpServletResponse response){
		writeJson2View(goodsModelService.findModelList(goodsId), response);
	}
	/**
	 * 搜索某个产品的所以规格
	 * @param goodsId
	 */
	@RequestMapping("ns/getList")
	public void findModelList2(String goodsId,HttpServletResponse response){
		writeJson2View(goodsModelService.findModelList(goodsId), response);
	}
	
	@RequestMapping("add")
	public void addShelf(TbGoodsModel goodsModel,HttpServletResponse response){
		writeJson2View(goodsModelService.addGoodsModel(goodsModel), response);
	}
	
	@RequestMapping("update")
	public void updateShelf(TbGoodsModel goodsModel,HttpServletResponse response){
		writeJson2View(goodsModelService.updateGoodsModel(goodsModel), response);
	}
	
	@RequestMapping("delete")
	public void deleteShelf(String ids,HttpServletResponse response){
		writeJson2View(goodsModelService.deleteGoodsModel(ids), response);
	}
}

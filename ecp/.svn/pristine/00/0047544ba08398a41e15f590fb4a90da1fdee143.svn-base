package com.web.goods.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbColumnGoods;
import com.hontek.goods.service.ColumnGoodsService;
/**
* 
* <p>Title: 栏目商品关系控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */


@Controller
@RequestMapping("webColumnGoods")
public class WebColumnGoodsController extends BaseController{
	
	@Autowired
	private ColumnGoodsService columnGoodsService;
	
	@RequestMapping("ns/page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = columnGoodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addShelf(int goodsId,String ids,HttpServletResponse response){
		writeJson2View(columnGoodsService.addColumnGoods(goodsId,ids), response);
	}
	
	@RequestMapping("update")
	public void updateShelf(TbColumnGoods columnGoods,HttpServletResponse response){
		writeJson2View(columnGoodsService.updateColumnGoods(columnGoods), response);
	}
	
	@RequestMapping("delete")
	public void deleteShelf(String ids,HttpServletResponse response){
		writeJson2View(columnGoodsService.deleteColumnGoods(ids), response);
	}
	
	/**
	 * 根据产品ID查找所有的关系
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("findBygoodsId")
	public void findAllByGoodsId(String goodsId,HttpServletResponse response){
		writeJson2View(columnGoodsService.findAllByGoodsId(goodsId), response);
	}
	/**
	 * 根据产品ID查找所有的关系
	 * @param goodsId
	 * @param response
	 */
	@RequestMapping("ns/findGoodsIdByColumnIds")
	public void findGoodsIdByColumnIds(String columnIds,HttpServletResponse response){
		writeJson2View(columnGoodsService.findGoodsIdByColumnIds(columnIds), response);
	}
}

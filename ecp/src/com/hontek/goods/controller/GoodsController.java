package com.hontek.goods.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoods;
import com.hontek.goods.service.GoodsService;
/**
* 
* <p>Title: 商品控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */


@Controller
@RequestMapping("goods")
public class GoodsController extends BaseController{
	
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = goodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("page2")
	public void findPageList2(SearchPageUtil page,HttpServletResponse response){
		Grid grid = goodsService.findPageList2(page);
		writeJson2View(grid, response);
	}
	
	/**
	 * 
	 * @param goods
	 * @param modelStr	规格型号数据 格式为json
	 * @param response
	 */
	@RequestMapping("add")
	public void addGoods(TbGoods goods,String modelStr,HttpServletResponse response){
		goods.setShopId(0);
		writeJson2View(goodsService.addGoods(goods,modelStr), response);
	}
	
	@RequestMapping("update")
	public void updateGoods(TbGoods goods,HttpServletResponse response){
		writeJson2View(goodsService.updateGoods(goods), response);
	}
	
	@RequestMapping("updateSelective")
	public void updateSelectiveGoods(TbGoods goods,HttpServletResponse response){
		writeJson2View(goodsService.updateSelective(goods), response);
	}
	
	@RequestMapping("delete")
	public void deleteGoods(String ids,HttpServletResponse response){
		writeJson2View(goodsService.deleteGoods(ids), response);
	}
	
	/**
	 * 审核商品
	 * @param ids
	 * @param type
	 * @param response
	 */
	@RequestMapping("auditGoods")
	public void auditGoods(String ids,String state,HttpServletResponse response){
		writeJson2View(goodsService.auditGoods(ids,state), response);
	}
	
}

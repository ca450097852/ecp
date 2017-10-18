package com.hontek.goods.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.RecommendGoods;
import com.hontek.goods.service.RecommendGoodsService;
/**
* <p>Title: 商品推荐控制器类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author 
* @version 1.0
 */
@Controller
@RequestMapping("recommendGoods")
public class RecommendGoodsController extends BaseController{
	
	@Autowired
	private RecommendGoodsService recommendGoodsService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = recommendGoodsService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addRecommendGoods(RecommendGoods rg,HttpServletResponse response){
		writeJson2View(recommendGoodsService.addRecommendGoods(rg), response);
	}
	
	@RequestMapping("update")
	public void updateRecommendGoods(RecommendGoods rg,HttpServletResponse response){
		writeJson2View(recommendGoodsService.updateRecommendGoods(rg), response);
	}
	
	@RequestMapping("delete")
	public void deleteRecommendGoods(String ids,HttpServletResponse response){
		writeJson2View(recommendGoodsService.deleteRecommendGoods(ids), response);
	}
}

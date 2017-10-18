package com.hontek.theme.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.theme.model.ThemeGoods;
import com.hontek.theme.service.ThemeGoodsService;


/**
 * <p>Title: 主题商品管理控制器类</p>
 * <p>Description: 主题商品</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */

@Controller
@RequestMapping("themeGoods")
public class ThemeGoodsController extends BaseController{
	
	private ThemeGoodsService themeGoodsService;
	
	@Autowired
	public void setThemeGoodsService(ThemeGoodsService themeGoodsService) {
		this.themeGoodsService = themeGoodsService;
	}
	
	/**
	 * 添加
	 * @param themeGoods
	 * @param response
	 */
	@RequestMapping("add")
	public void addTbTheme(ThemeGoods themeGoods,String goodsIds,HttpServletResponse response,HttpSession session){
		writeJson2View(themeGoodsService.addThemeGoods(themeGoods, goodsIds,session), response);
	}

	
	/**
	 * 删除主题及其对应商品
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteThemeGoods(String ids,HttpServletResponse response){
		writeJson2View(themeGoodsService.deleteThemeGoods(ids), response);
	}
	
	/**
	 * 删除主题对应商品
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete2")
	public void deleteThemeGoods2(String ids,HttpServletResponse response){
		writeJson2View(themeGoodsService.deleteThemeGoods2(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findThemeGoodsList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = themeGoodsService.findThemeGoodsList(pageUtil);
		writeJson2View(dataGrid, response);
	}

	
}

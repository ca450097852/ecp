package com.hontek.goods.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsBrand;
import com.hontek.goods.service.GoodsBrandService;

/**
 * 
* <p>Title: 商品品牌控制器</p>
* <p>Description: 商品品牌</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("goodsBrand")
public class GoodsBrandController extends BaseController{
	
	@Autowired
	private GoodsBrandService goodsBrandService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil pageUtil,HttpServletResponse response){
		Grid grid = goodsBrandService.findPageList(pageUtil);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addGoodsBrand(TbGoodsBrand goodsBrand,HttpServletResponse response){
		writeJson2View(goodsBrandService.addGoodsBrand(goodsBrand), response);
	}
	
	@RequestMapping("update")
	public void updateGoodsBrand(TbGoodsBrand goodsBrand,HttpServletResponse response){
		writeJson2View(goodsBrandService.updateGoodsBrand(goodsBrand), response);
	}
	
	@RequestMapping("delete")
	public void deleteGoodsBrand(String ids,HttpServletResponse response){
		writeJson2View(goodsBrandService.deleteGoodsBrand(ids), response);
	}
	
	/**
	 * 获取全部启用的品牌不分页
	 * @param response
	 */
	@RequestMapping("list")
	public void getBrandList(HttpServletResponse response){
		writeJson2View(goodsBrandService.getBrandList(),response);
	}
	
}

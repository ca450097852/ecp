package com.web.goods.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
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
@RequestMapping("webGoodsBrand")
public class WebGoodsBrandController extends BaseController{
	
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
	
	/**
	 * 获取全部启用的品牌不分页
	 * @param response
	 */
	@RequestMapping("list")
	public void getBrandList(HttpServletResponse response){
		writeJson2View(goodsBrandService.getBrandList(),response);
	}
	
	/**
	 * 获取全部启用的品牌不分页
	 * @param response
	 */
	@RequestMapping("noSessionList")
	public void getBrandListNoSession(HttpServletResponse response){
		//String json = "[{\"brandId\":\"1\",\"brandNo\":\"sdd\",\"brandName\":\"AAAAA\",\"brandLogo\":\"/ecpFiles/goods/brand/2015070114584443133.jpg\",\"state\":\"1\",\"brandSeq\":\"5\"}]";
		//writeJson2View(json,response);
		writeJson2View(goodsBrandService.getBrandList(),response);

	}
	/**
	 * 
	 * @param flag		为1时不需要添加根分类  
	 * @param response
	 */
	@RequestMapping("combotree")
	public void getGoodsTypeTree(HttpServletResponse response){
		List<Tree> list = goodsBrandService.getGoodsBrandTree();
		Tree tree = new Tree();
		tree.setText("请选择商品品牌");
		tree.setId(0);
		list.add(0,tree);
		writeJson2View(list, response);
	}
	/**
	 * 
	 * @param flag		为1时不需要添加根分类  
	 * @param response
	 */
	@RequestMapping("ns/combotree")
	public void getGoodsTypeTree2(HttpServletResponse response){
		List<Tree> list = goodsBrandService.getGoodsBrandTree();
		Tree tree = new Tree();
		tree.setText("全部");
		tree.setId(0);
		list.add(0,tree);
		writeJson2View(list, response);
	}
	
	
	
	
	
}

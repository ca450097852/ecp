package com.web.goods.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsType;
import com.hontek.goods.service.GoodsTypeService;
/**
 * 
* <p>Title: 商品分类控制器</p>
* <p>Description: 商品分类</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("ns/webGoodsType")
public class WebGoodsTypeController extends BaseController{
	@Autowired
	private GoodsTypeService goodsTypeService;
	
	
	@RequestMapping("page")
	public void findList(SearchPageUtil pageUtil,HttpServletResponse response){
		Grid grid = goodsTypeService.findList(pageUtil);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("list")
	public ModelAndView findGoodsTypeList(String typeId,HttpServletResponse response){
		ModelAndView view =  new ModelAndView("web/list");
		view.addObject("typeId",typeId);
		return view;
	}
	
	@RequestMapping("add")
	public void addGoodsType(TbGoodsType goodsType,HttpServletResponse response){
		writeJson2View(goodsTypeService.addGoodsType(goodsType), response);
	}
	
	@RequestMapping("delete")
	public void deleteGoodsType(String ids,HttpServletResponse response){
		writeJson2View(goodsTypeService.deleteGoodsType(ids), response);
	}
	
	@RequestMapping("update")
	public void updateGoodsType(TbGoodsType goodsType,HttpServletResponse response){
		writeJson2View(goodsTypeService.updateGoodsType(goodsType), response);
	}
	
	@RequestMapping("combotreeAll")
	public void getAllGoodsTypeTree(HttpServletResponse response) {
		writeJson2View(goodsTypeService.getAllGoodsTypeTree(), response);
	}
	/**
	 * 
	 * @param flag		为1时不需要添加根分类  
	 * @param response
	 */
	@RequestMapping("combotree")
	public void getGoodsTypeTree(String flag,Integer upcateId,HttpServletResponse response){
		
		List<Tree> list = goodsTypeService.getGoodsTypeTree(upcateId);
		if(!"1".equals(flag)&&!"2".equals(flag)){
			Tree tree = new Tree();
			tree.setText("根分类");
			tree.setId(0);
			list.add(0,tree);
		}
		if("2".equals(flag)){
			Tree tree = new Tree();
			tree.setText("请选择商品分类");
			tree.setId(0);
			list.add(0,tree);
		}
		writeJson2View(list, response);
	}
	
	/**
	 * 根据id获取商品类型信息
	 * @param typeId
	 * @param response
	 */
	@RequestMapping("getType")
	public void getGoodsTypeById(String typeId,HttpServletResponse response){
		writeJson2View(goodsTypeService.getGoodsTypeById(typeId), response);
	}
	/**
	 * 根据id获取商品类型信息
	 * @param typeId
	 * @param response
	 */
	@RequestMapping("getTypeByUpcateId")
	public void getGoodsTypeByUpcateId(String upcateId,HttpServletResponse response){
		writeJson2View(goodsTypeService.getGoodsTypeByUpcateId(upcateId), response);
	}
}

package com.wap.goods.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.service.GoodsTypeService;
/**
 * 
* <p>Title: WAP商品分类控制器</p>
* <p>Description: 商品分类</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author 
* @version 1.0
 */
@Controller
@RequestMapping("wap/GoodsType")
public class WapGoodsTypeController extends BaseController{
	
	@Autowired
	private GoodsTypeService goodsTypeService;
	
	
	@RequestMapping("ns/page")
	public void findList(SearchPageUtil pageUtil,HttpServletResponse response){
		Grid grid = goodsTypeService.findList(pageUtil);
		writeJson2View(grid, response);
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
	@RequestMapping("ns/getType2")
	public void getGoodsTypeByShopId(String shopId,HttpServletResponse response){
		writeJson2View(goodsTypeService.getGoodsTypeByShopId(shopId), response);
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

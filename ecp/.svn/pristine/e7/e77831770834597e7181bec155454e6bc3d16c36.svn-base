package com.hontek.order.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.TbShoppingcartGroupByShopIdTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbShoppingcart;
import com.hontek.order.service.ShoppingcartService;

/**
 * @ClassName: ShoppingcartController
 * @Description: TODO(购物车控制器类)
 * @date 2015-6-26 下午05:30:07
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("shoppingcart")
public class ShoppingcartController extends BaseController{

	
	private ShoppingcartService shoppingcartService;
	
	@Autowired
	public void setShoppingcartService(ShoppingcartService shoppingcartService) {
		this.shoppingcartService = shoppingcartService;
	}

	/**
	 * 分页查询
	 * @param shoppingcart
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = shoppingcartService.findShoppingcartList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param shoppingcart
	 * @param response
	 */
	@RequestMapping("add")
	public void addShoppingcart(TbShoppingcart shoppingcart,HttpServletResponse response){
		
		writeJson2View(shoppingcartService.addShoppingcart(shoppingcart), response);
	}
	
	/**
	 * 修改
	 * @param shoppingcart
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShoppingcart(TbShoppingcart shoppingcart,HttpServletResponse response){
		writeJson2View(shoppingcartService.updateShoppingcart(shoppingcart), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteShoppingcart(String ids,HttpServletResponse response){
		writeJson2View(shoppingcartService.deleteShoppingcart(ids), response);
	}
	

	

}

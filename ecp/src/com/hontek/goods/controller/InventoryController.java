package com.hontek.goods.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbInventory;
import com.hontek.goods.service.InventoryService;
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
@RequestMapping("inventory")
public class InventoryController extends BaseController{
	
	@Autowired
	private InventoryService inventoryService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = inventoryService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addShelf(TbInventory inventory,HttpServletResponse response){
		writeJson2View(inventoryService.addInventory(inventory), response);
	}
	
	@RequestMapping("update")
	public void updateShelf(TbInventory inventory,HttpServletResponse response){
		writeJson2View(inventoryService.updateInventory(inventory), response);
	}
	
	@RequestMapping("delete")
	public void deleteShelf(String ids,HttpServletResponse response){
		writeJson2View(inventoryService.deleteInventory(ids), response);
	}
}

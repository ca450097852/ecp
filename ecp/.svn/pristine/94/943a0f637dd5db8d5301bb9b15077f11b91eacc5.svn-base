package com.hontek.goods.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbShelf;
import com.hontek.goods.service.ShelfService;
/**
 * 
* <p>Title: 商品上下架记录控制器类</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("shelf")
public class ShelfController extends BaseController{
	
	@Autowired
	private ShelfService shelfService;
	
	@RequestMapping("page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = shelfService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addShelf(TbShelf shelf,HttpServletResponse response){
		writeJson2View(shelfService.addShelf(shelf), response);
	}
	
	@RequestMapping("update")
	public void updateShelf(TbShelf shelf,HttpServletResponse response){
		writeJson2View(shelfService.updateShelf(shelf), response);
	}
	
	@RequestMapping("delete")
	public void deleteShelf(String ids,HttpServletResponse response){
		writeJson2View(shelfService.deleteShelf(ids), response);
	}
}

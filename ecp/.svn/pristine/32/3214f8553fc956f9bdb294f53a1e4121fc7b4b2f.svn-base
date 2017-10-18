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
import com.hontek.goods.model.TbColumn;
import com.hontek.goods.service.ColumnService;
/**
 * 
* <p>Title: 商品栏目控制器</p>
* <p>Description: 商品栏目</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
@Controller
@RequestMapping("webGoodsColumn")
public class WebColumnController extends BaseController{
	
	@Autowired
	private ColumnService columnService;
	
	@RequestMapping("ns/page")
	public void findPageList(SearchPageUtil page,HttpServletResponse response){
		Grid grid = columnService.findPageList(page);
		writeJson2View(grid, response);
	}
	
	@RequestMapping("add")
	public void addColumn(TbColumn column,HttpServletResponse response){
		writeJson2View(columnService.addColumn(column), response);
	}
	
	@RequestMapping("update")
	public void updateColumn(TbColumn column,HttpServletResponse response){
		writeJson2View(columnService.updateColumn(column), response);
	}
	
	@RequestMapping("tree")
	public void getTree(String flag,Integer parentId,HttpServletResponse response){
		List<Tree> list = columnService.getColumnTree(parentId);
		if(!"1".equals(flag)){
			Tree tree = new Tree();
			tree.setText("根分类");
			tree.setId(0);
			list.add(0,tree);
		}
		writeJson2View(list, response);
	}
	
	@RequestMapping("ns/list")
	public ModelAndView findGoodsTypeList(String columnId,HttpServletResponse response){
		ModelAndView view =  new ModelAndView("web/column");
		view.addObject("columnId",columnId);
		return view;
	}
	
}

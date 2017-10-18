package com.hontek.theme.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.theme.model.TbTheme;
import com.hontek.theme.service.TbThemeService;


/**
 * <p>Title: 主题管理控制器类</p>
 * <p>Description: 主题管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author ca
 * @version 1.0
 */
@Controller
@RequestMapping("theme")
public class ThemeController extends BaseController{

	
	private TbThemeService tbThemeService;
	
	@Autowired
	public void setTbThemeService(TbThemeService tbThemeService) {
		this.tbThemeService = tbThemeService;
	}
	
	/**
	 * 添加
	 * @param tbTheme
	 * @param response
	 */
	@RequestMapping("add")
	public void addTbTheme(TbTheme tbTheme,HttpServletResponse response,HttpSession session){
		writeJson2View(tbThemeService.addTbTheme(tbTheme,session), response);
	}

	/**
	 * 修改
	 * @param tbTheme
	 * @param response
	 */
	@RequestMapping("update")
	public void updateTbTheme(TbTheme tbTheme,HttpServletResponse response){
		writeJson2View(tbThemeService.updateTbTheme(tbTheme), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteTbTheme(String ids,HttpServletResponse response){
		writeJson2View(tbThemeService.deleteTbTheme(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = tbThemeService.findTbThemeList(pageUtil);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 审核
	 * @param ids
	 * @param type
	 * @param response
	 */
	@RequestMapping("auditSts")
	public void auditSts(String ids,String type,HttpServletResponse response){
		writeJson2View(tbThemeService.auditSts(ids,type), response);
	}
	
	/**
	 *combotree
	 */
	@RequestMapping("combotree")
	public void getTree(HttpServletResponse response){
		List<Tree> treeList =tbThemeService.findForTree();
		writeJson2View(treeList, response);
	}

	

	
}

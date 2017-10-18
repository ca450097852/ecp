package com.hontek.sys.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.sys.model.TsSysCol;
import com.hontek.sys.service.SysColService;

/**
 * <p>Title: 栏目菜单控制器类</p>
 * <p>Description: 系统栏目菜单</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("sysCol")
public class SysColController extends BaseController{

	
	private SysColService sysColService;
	
	@Autowired
	public void setSysColService(SysColService sysColService) {
		this.sysColService = sysColService;
	}

	
	/**
	 * 添加
	 * @param sysCol
	 * @param response
	 */
	@RequestMapping("add")
	public void addSysCol(TsSysCol sysCol,Integer _parentId,HttpServletResponse response){
		sysCol.set_parentId(_parentId);
		writeJson2View(sysColService.addSysCol(sysCol), response);
	}
	
	/**
	 * 修改
	 * @param sysCol
	 * @param response
	 */
	@RequestMapping("update")
	public void updateSysCol(TsSysCol sysCol,Integer _parentId,HttpServletResponse response){
		sysCol.set_parentId(_parentId);
		writeJson2View(sysColService.updateSysCol(sysCol), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteSysCol(String ids,HttpServletResponse response){
		writeJson2View(sysColService.deleteSysCol(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param sysCol
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,TsSysCol sysCol){
		Grid dataGrid = sysColService.findSysColList(sysCol);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 树形结构下拉
	 * @param response
	 */
	@RequestMapping("combotree")
	public void combotreeSysCol(HttpServletResponse response){
		writeJson2View(sysColService.findSysColTreeList(0), response);
	}
	
}

package com.hontek.sys.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsEntType;
import com.hontek.sys.service.EntTypeService;

/**
 * <p>Title: 机构类型控制器类</p>
 * <p>Description: 系统机构类型</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("entType")
public class EntTypeController extends BaseController{

	
	private EntTypeService entTypeService;
	
	@Autowired
	public void setEntTypeService(EntTypeService entTypeService) {
		this.entTypeService = entTypeService;
	}

	/**
	 * 分页查询
	 * @param entType
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = entTypeService.findEntTypeList(page);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 添加
	 * @param entType
	 * @param response
	 */
	@RequestMapping("add")
	public void addEntType(TsEntType entType,HttpServletResponse response){
		writeJson2View(entTypeService.addEntType(entType), response);
	}
	
	/**
	 * 修改
	 * @param entType
	 * @param response
	 */
	@RequestMapping("update")
	public void updateEntType(TsEntType entType,HttpServletResponse response){
		writeJson2View(entTypeService.updateEntType(entType), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteEntType(String ids,HttpServletResponse response){
		writeJson2View(entTypeService.deleteEntType(ids), response);
	}
	
	/**
	 * 下拉控件
	 * @param response
	 */
	@RequestMapping("combobox")
	public void comboboxEntType(HttpServletResponse response){
		writeJson2View(entTypeService.findEntTypeComboList(), response);
	}
	
}

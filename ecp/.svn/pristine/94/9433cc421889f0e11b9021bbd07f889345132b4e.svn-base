package com.wap.order.controller;


import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchMapUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbLogis;
import com.hontek.order.service.LogisService;

/**
 * @ClassName: LogisController
 * @Description: TODO(物流信息控制器类)
 * @date 2017-9-25 
 * @author ca
 * @version 1.0
 */
@Controller
@RequestMapping("wap/logis")
public class WapLogisController extends BaseController{

	
	private LogisService logisService;
	
	@Autowired
	public void setLogisService(LogisService logisService) {
		this.logisService = logisService;
	}

	/**
	 * 分页查询
	 * @param logis
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = logisService.findLogisList(page);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 查询单个物流
	 * @param response
	 */
	@RequestMapping("findTbLogisByParam")
	public void findTbLogisByParam(HttpServletResponse response,SearchMapUtil map){
		writeJson2View(logisService.findTbLogisByParam(map), response);
	}

	/**
	 * 添加
	 * @param logis
	 * @param response
	 */
	@RequestMapping("add")
	public void addLogis(TbLogis logis,HttpServletResponse response){
		writeJson2View(logisService.addLogis(logis), response);
	}
	
	/**
	 * 修改
	 * @param logis
	 * @param response
	 */
	@RequestMapping("update")
	public void updateLogis(TbLogis logis,HttpServletResponse response){
		writeJson2View(logisService.updateLogis(logis), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteLogis(String ids,HttpServletResponse response){
		writeJson2View(logisService.deleteLogis(ids), response);
	}
	
}

package com.hontek.order.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbRespond;
import com.hontek.order.service.RespondService;

/**
 * @ClassName: RespondController
 * @Description: TODO(评论回复控制器类)
 * @date 2015-6-26 下午05:12:27
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("respond")
public class RespondController extends BaseController{

	
	private RespondService respondService;
	
	@Autowired
	public void setRespondService(RespondService respondService) {
		this.respondService = respondService;
	}

	/**
	 * 分页查询
	 * @param respond
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = respondService.findRespondList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param respond
	 * @param response
	 */
	@RequestMapping("add")
	public void addRespond(TbRespond respond,HttpServletResponse response){
		writeJson2View(respondService.addRespond(respond), response);
	}
	
	/**
	 * 修改
	 * @param respond
	 * @param response
	 */
	@RequestMapping("update")
	public void updateRespond(TbRespond respond,HttpServletResponse response){
		writeJson2View(respondService.updateRespond(respond), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteRespond(String ids,HttpServletResponse response){
		writeJson2View(respondService.deleteRespond(ids), response);
	}
	
}

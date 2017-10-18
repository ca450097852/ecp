package com.hontek.order.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbEvaluateAppendix;
import com.hontek.order.service.EvaluateAppendixService;

/**
 * @ClassName: EvaluateAppendixController
 * @Description: TODO(评论附件控制器类)
 * @date 2015-6-26 下午05:12:27
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("evaluateAppendix")
public class EvaluateAppendixController extends BaseController{

	
	private EvaluateAppendixService evaluateAppendixService;
	
	@Autowired
	public void setEvaluateAppendixService(EvaluateAppendixService evaluateAppendixService) {
		this.evaluateAppendixService = evaluateAppendixService;
	}

	/**
	 * 分页查询
	 * @param evaluateAppendix
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = evaluateAppendixService.findEvaluateAppendixList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param evaluateAppendix
	 * @param response
	 */
	@RequestMapping("add")
	public void addEvaluateAppendix(TbEvaluateAppendix evaluateAppendix,HttpServletResponse response){
		writeJson2View(evaluateAppendixService.addEvaluateAppendix(evaluateAppendix), response);
	}
	
	/**
	 * 修改
	 * @param evaluateAppendix
	 * @param response
	 */
	@RequestMapping("update")
	public void updateEvaluateAppendix(TbEvaluateAppendix evaluateAppendix,HttpServletResponse response){
		writeJson2View(evaluateAppendixService.updateEvaluateAppendix(evaluateAppendix), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteEvaluateAppendix(String ids,HttpServletResponse response){
		writeJson2View(evaluateAppendixService.deleteEvaluateAppendix(ids), response);
	}
	
}

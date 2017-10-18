package com.hontek.order.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbEvaluate;
import com.hontek.order.service.EvaluateService;

/**
 * @ClassName: EvaluateController
 * @Description: TODO(评论信息控制器类)
 * @date 2015-6-26 下午05:12:27
 * @author qql
 * @version 1.0
 */
@Controller
@RequestMapping("evaluate")
public class EvaluateController extends BaseController{

	
	private EvaluateService evaluateService;
	
	@Autowired
	public void setEvaluateService(EvaluateService evaluateService) {
		this.evaluateService = evaluateService;
	}

	/**
	 * 分页查询
	 * @param evaluate
	 * @param page
	 * @param rows
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = evaluateService.findEvaluateList(page);
		writeJson2View(dataGrid, response);
	}
	


	/**
	 * 添加
	 * @param evaluate
	 * @param response
	 */
	@RequestMapping("add")
	public void addEvaluate(TbEvaluate evaluate,HttpServletResponse response){
		writeJson2View(evaluateService.addEvaluate(evaluate), response);
	}
	
	/**
	 * 修改
	 * @param evaluate
	 * @param response
	 */
	@RequestMapping("update")
	public void updateEvaluate(TbEvaluate evaluate,HttpServletResponse response){
		writeJson2View(evaluateService.updateEvaluate(evaluate), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteEvaluate(String ids,HttpServletResponse response){
		writeJson2View(evaluateService.deleteEvaluate(ids), response);
	}
	

}

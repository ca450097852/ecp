package com.hontek.sys.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsLog;
import com.hontek.sys.service.LogService;

@Controller
@RequestMapping("log")
public class LogController extends BaseController{
	@Autowired
	private LogService logService;
	/*
	@RequestMapping("page")
	public void findList( SearchPageUtil pageUtil,HttpServletResponse response){
//		Grid grid = logService.findList(log,page,row,sort,order);
		//TsLog log = pageUtil.getParam();
//		System.out.println("@###===="+log);
//		if(log!=null){
//			System.out.println("log.logId ==== "+log.getLogId());
//		}
//		pageUtil.setParam(log);
		Grid grid = logService.findList(pageUtil);
		
		
		writeJson2View(grid, response);
	}
	
	*/
	@RequestMapping("page")
	public void findList( SearchPageUtil pageUtil,HttpServletResponse response){
	
	Grid grid = logService.findPageList(pageUtil);
	
	writeJson2View(grid, response);
}
}

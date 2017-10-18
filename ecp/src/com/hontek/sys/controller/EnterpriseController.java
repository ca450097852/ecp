package com.hontek.sys.controller;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hontek.sys.model.TsEnterprise;
import com.hontek.sys.service.EnterpriseService;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;

@Controller
@RequestMapping("enterprise")
public class EnterpriseController extends BaseController{
	@Autowired
	private EnterpriseService enterpriseService;
	
	@RequestMapping("add")
	public void add(TsEnterprise enterprise,HttpServletResponse response){
		try {
			writeJson2View(enterpriseService.addEnterprise(enterprise), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
	}
	
		
	@RequestMapping("delete")
	public void delete(String ids,HttpServletResponse response){
		System.out.println("ids====@="+ids);
		try {
			writeJson2View(enterpriseService.deleteEnterprise(ids), response);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
	}
	
	@RequestMapping("update")
	public void update(TsEnterprise enterprise,HttpServletResponse response){
		try {			
			writeJson2View(enterpriseService.updateEnterprise(enterprise), response);
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		} 
		
	}
	/**
	 * 分页查询
	 * @param SearchPageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findAll(HttpServletResponse response,SearchPageUtil page){
		Grid dataGrid = enterpriseService.findEnterpriseList(page);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 树形结构
	 * @param response
	 */
	@RequestMapping("combotree")
	public void combotreeEnterprise(HttpServletResponse response){
		List<Tree> rootTreeList = new ArrayList<Tree>();
		 Tree e = new Tree(0, "机构根");
		 rootTreeList.add(e);
		 rootTreeList.addAll(enterpriseService.getEntTree(0));
		writeJson2View(rootTreeList, response);
	}
}

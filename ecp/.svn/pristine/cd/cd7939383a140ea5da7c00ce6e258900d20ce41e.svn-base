package com.hontek.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.info.modelDO.InfotypeVO;
import com.hontek.info.modelVO.TreeInfoType;
import com.hontek.info.service.InfotypeService;

/**
*
* <p>Title: 资讯分类控制器</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2017</p>
* <p>Company: **公司</p>
* @author wmk
* @version 1.0
*
 */
@Controller
@RequestMapping("infoType")
public class InfotypeController {

	@Autowired
	private InfotypeService infotypeService ;
	
	@RequestMapping("add")
	@ResponseBody
	public String addInfotype(InfotypeVO infotypeVO){
		return infotypeService.addInfotype(infotypeVO);
	}
	
	@RequestMapping("delete")
	@ResponseBody
	public String deleteInfotype(String ids){
		return infotypeService.deleteInfotype(ids);
	}
	
	@RequestMapping("update")
	@ResponseBody
	public String updateInfotype(InfotypeVO infotypeVO){
		return infotypeService.updateInfotype(infotypeVO);
	}
	
	@RequestMapping("page")
	@ResponseBody
	public List<InfotypeVO> listInfotype(SearchPageUtil page){
		return infotypeService.listInfotypeVO(page);
	}
	
	/**
	 * 获取分类树
	 * @return
	 */
	@RequestMapping("tree")
	@ResponseBody
	public Grid treeInfotype(InfotypeVO infotypeVO){
		return new Grid(0, infotypeService.treeInfotype(infotypeVO)) ;
	}
	
	/**
	 * 获取分类树
	 * @return
	 */
	@RequestMapping("combotree")
	@ResponseBody
	public List<Tree> comboTreeInfotype(Integer rootId ){
		return infotypeService.comboTreeInfotype(rootId) ;
	}
	
}

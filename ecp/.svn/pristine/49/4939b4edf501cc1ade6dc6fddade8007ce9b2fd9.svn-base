package com.web.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hontek.comm.model.Tree;
import com.hontek.goods.model.TbInventory;
import com.hontek.info.modelDO.InfoVO;
import com.hontek.info.modelVO.Info;
import com.hontek.info.service.InfotypeService;
import com.web.info.serice.WebInfoService;

@Controller
@RequestMapping("web/ns/info")
public class WebInfoController {

	@Autowired
	private InfotypeService infotypeService ;
	
	@Autowired
	private WebInfoService webInfoService ;
	
	/**
	 * 获取分类树
	 * @return
	 */
	@RequestMapping("combotree")
	@ResponseBody
	public List<Tree> comboTreeInfotype(Integer rootId ){
		return infotypeService.comboTreeInfotype(rootId) ;
	}
	
	/**
	 * 根据id获取文章
	 * @return
	 */
	@RequestMapping("getInfoById")
	@ResponseBody
	public InfoVO getInfoById(Integer id ){
		return webInfoService.getInfoById(id) ;
	}
	
	/**
	 * 根据菜单id 获取文章列表
	 * @param menuId
	 * @return
	 */
	@RequestMapping("listInfoVOById")
	@ResponseBody
	public List<InfoVO> listInfoVOById(Integer menuId){
		return webInfoService.listInfoVOById(menuId) ;
	}
	
}

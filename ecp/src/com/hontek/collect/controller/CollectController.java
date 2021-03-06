package com.hontek.collect.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.collect.model.Collect;
import com.hontek.collect.service.CollectService;
import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberUser;

/**
 * <p>Title:收藏控制器类</p>
 * <p>Description: 收藏表</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */

@Controller
@RequestMapping("collect")
public class CollectController extends BaseController{
	private CollectService collectService;
	
	
	
	@Autowired
	public void setCollectService(CollectService collectService) {
		this.collectService = collectService;
	}

	/**
	 * 添加
	 * @param collect
	 * @param response
	 */
	@RequestMapping("add")
	public void addCollect(Collect collect,HttpServletResponse response,HttpSession session){
		TbMemberUser tbMemberUser = (TbMemberUser)session.getAttribute("memberUser");
		collect.setMenberId(tbMemberUser.getMemberId());
		
		writeJson2View(collectService.addCollect(collect, session), response);
	}
	
	/**
	 * 修改
	 * @param collect
	 * @param response
	 */
	@RequestMapping("update")
	public void updateCollect(Collect collect,HttpServletResponse response,HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		collect.setMenberId(tbMember.getMemberId());
		writeJson2View(collectService.updateCollect(collect), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteCollect(String ids,HttpServletResponse response){
		writeJson2View(collectService.deleteCollect(ids), response);
	}
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("list")
	public void findList(HttpServletResponse response,Collect collect,HttpSession session){		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		if(tbMember != null) {
			collect.setMenberId(tbMember.getMemberId());
			List<Collect> list = collectService.findCollectList(collect);
			writeJson2View(list, response);
		}
	}
	@RequestMapping("page")
	public void findPage(SearchPageUtil page,HttpServletResponse response){
		Grid grid = collectService.findCollectList(page);
		writeJson2View(grid, response);
		
	}
}

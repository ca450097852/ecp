package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbMemberLevel2;
import com.hontek.member.service.MemberLevel2Service;



/**
 * <p>Title:推荐julu控制器类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Controller
@RequestMapping("recommend")
public class MemberLevelController2 extends BaseController{

	
	private MemberLevel2Service memberLevelService;
	
	@Autowired
	public void setMemberLevelService(MemberLevel2Service memberLevelService) {
		this.memberLevelService = memberLevelService;
	}

	
	/**
	 * 添加
	 * @param meberLevel
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberLevel(TbMemberLevel2 memberLevel,HttpServletResponse response,HttpSession session){
		writeJson2View(memberLevelService.addMemberLevel(memberLevel, session),response);
	}
	
	
	
	/**
	 * 修改
	 * @param meberLevel
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShop(TbMemberLevel2 memberLevel,HttpServletResponse response){
		writeJson2View(memberLevelService.updateMemberLevel(memberLevel), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteShop(String ids,HttpServletResponse response){
		writeJson2View(memberLevelService.deleteMemberLevel(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberLevelService.findMemberLevelList(pageUtil);
		writeJson2View(dataGrid, response);
	}

	
}

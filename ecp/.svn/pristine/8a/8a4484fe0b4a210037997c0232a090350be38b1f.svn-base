package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.dao.MeberLevelDao;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbShop;
import com.hontek.member.service.MemberLevelService;
import com.hontek.member.service.ShopService;


/**
 * <p>Title:会员积分控制器类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Controller
@RequestMapping("integral")
public class MemberLevelController extends BaseController{

	
	private MemberLevelService memberLevelService;
	
	@Autowired
	public void setMemberLevelService(MemberLevelService memberLevelService) {
		this.memberLevelService = memberLevelService;
	}

	
	/**
	 * 添加
	 * @param meberLevel
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberLevel(TbMemberLevel memberLevel,HttpServletResponse response,HttpSession session){
		writeJson2View(memberLevelService.addMemberLevel(memberLevel, session),response);
	}
	
	
	
	/**
	 * 修改
	 * @param meberLevel
	 * @param response
	 */
	@RequestMapping("update")
	public void updateShop(TbMemberLevel memberLevel,HttpServletResponse response){
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

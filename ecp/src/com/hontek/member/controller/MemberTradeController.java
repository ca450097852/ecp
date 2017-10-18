package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberTrade;
import com.hontek.member.service.MemberTradeService;


/**
 * <p>Title: 会员支付账户控制器类</p>
 * <p>Description: 会员支付账户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("memberTrade")
public class MemberTradeController extends BaseController{

	
	private MemberTradeService memberTradeService;
	
	@Autowired
	public void setMemberTradeService(MemberTradeService memberTradeService) {
		this.memberTradeService = memberTradeService;
	}

	
	/**
	 * 添加
	 * @param memberTrade
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberTrade(TbMemberTrade memberTrade,HttpServletResponse response){
		writeJson2View(memberTradeService.addMemberTrade(memberTrade), response);
	}
	


	/**
	 * 修改
	 * @param memberTrade
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMemberTrade(TbMemberTrade memberTrade,Integer _parentId,HttpServletResponse response){
		writeJson2View(memberTradeService.updateMemberTrade(memberTrade), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteMemberTrade(String ids,HttpServletResponse response){
		writeJson2View(memberTradeService.deleteMemberTrade(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberTradeService.findMemberTradeList(pageUtil);
		writeJson2View(dataGrid, response);
	}

	
}

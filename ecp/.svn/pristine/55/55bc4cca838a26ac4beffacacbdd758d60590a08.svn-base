package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.service.MemberService;


/**
 * <p>Title: 会员控制器类</p>
 * <p>Description: 会员管理</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("member")
public class MemberController extends BaseController{

	
	private MemberService memberService;
	
	@Autowired
	public void setMemberService(MemberService memberService) {
		this.memberService = memberService;
	}

	
	/**
	 * 添加
	 * @param member
	 * @param response
	 */
	@RequestMapping("add")
	public void addMember(TbMember member,HttpServletResponse response){
		writeJson2View(memberService.addMember(member), response);
	}
	


	/**
	 * 修改
	 * @param member
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMember(TbMember member,Integer _parentId,HttpServletResponse response){
		writeJson2View(memberService.updateMember(member), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteMember(String ids,HttpServletResponse response){
		writeJson2View(memberService.deleteMember(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberService.findMemberList(pageUtil);
		writeJson2View(dataGrid, response);
	}

	
}

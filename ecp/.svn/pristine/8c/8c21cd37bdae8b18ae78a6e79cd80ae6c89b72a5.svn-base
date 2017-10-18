package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
import com.hontek.member.service.MemberUserService;


/**
 * <p>Title: 会员用户控制器类</p>
 * <p>Description: 会员用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("memberUser")
public class MemberUserController extends BaseController{

	
	private MemberUserService memberUserService;
	
	@Autowired
	public void setMemberUserService(MemberUserService memberUserService) {
		this.memberUserService = memberUserService;
	}

	
	/**
	 * 添加
	 * @param memberUser
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberUser(TbMemberUser memberUser,HttpServletResponse response){
		writeJson2View(memberUserService.addMemberUser(memberUser), response);
	}
	
	/**
	 * 审核
	 * @param ids
	 * @param type
	 * @param response
	 */
	@RequestMapping("auditSts")
	public void auditSts(String ids,String type,HttpServletResponse response){
		writeJson2View(memberUserService.auditSts(ids,type), response);
	}
	

	/**
	 * 修改
	 * @param memberUser
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMemberUser(TbMemberUser memberUser,Integer _parentId,HttpServletResponse response){
		writeJson2View(memberUserService.updateMemberUser(memberUser), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteMemberUser(String ids,HttpServletResponse response){
		writeJson2View(memberUserService.deleteMemberUser(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberUserService.findMemberUserList(pageUtil);
		writeJson2View(dataGrid, response);
	}
	
	/**
	 * 登录用户查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("findMemberUser")
	public void findMemberUser(HttpServletResponse response,Integer memberId,HttpSession session){
		try {
			if(memberId==null){
				memberId = ((TbMember)session.getAttribute("member")).getMemberId();
			}
			TbMemberUser memberUser = memberUserService.findMemberUser(memberId);
			writeJson2View(memberUser, response);
		} catch (Exception e) {
			e.getStackTrace();
		}
	
	}
	

	
}

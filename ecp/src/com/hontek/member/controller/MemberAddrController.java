package com.hontek.member.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberAddr;
import com.hontek.member.service.MemberAddrService;


/**
 * <p>Title: 会员地址控制器类</p>
 * <p>Description: 会员地址</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Controller
@RequestMapping("memberAddr")
public class MemberAddrController extends BaseController{

	
	private MemberAddrService memberAddrService;
	
	@Autowired
	public void setMemberAddrService(MemberAddrService memberAddrService) {
		this.memberAddrService = memberAddrService;
	}

	
	/**
	 * 添加
	 * @param memberAddr
	 * @param response
	 */
	@RequestMapping("add")
	public void addMemberAddr(TbMemberAddr memberAddr,HttpServletResponse response){
		writeJson2View(memberAddrService.addMemberAddr(memberAddr), response);
	}
	


	/**
	 * 修改
	 * @param memberAddr
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMemberAddr(TbMemberAddr memberAddr,HttpServletResponse response){
		writeJson2View(memberAddrService.updateMemberAddr(memberAddr), response);
	}
	
	/**
	 * 删除
	 * @param ids
	 * @param response
	 */
	@RequestMapping("delete")
	public void deleteMemberAddr(String ids,HttpServletResponse response){
		writeJson2View(memberAddrService.deleteMemberAddr(ids), response);
	}
	
	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("page")
	public void findPagerList(HttpServletResponse response,SearchPageUtil pageUtil){
		Grid dataGrid = memberAddrService.findMemberAddrList(pageUtil);
		writeJson2View(dataGrid, response);
	}

	
}

package com.web.member.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hontek.comm.base.BaseController;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberAddr;
import com.hontek.member.model.TbMemberUser;
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
@RequestMapping("web/memberAddr")
public class WebMemberAddrController extends BaseController{
	
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
	public void addMemberAddr(TbMemberAddr memberAddr,HttpServletResponse response,HttpSession session){
		TbMemberUser tbMemberUser = (TbMemberUser)session.getAttribute("memberUser");
		memberAddr.setMemberId(tbMemberUser.getMemberId());
		writeJson2View(memberAddrService.addMemberAddr(memberAddr), response);
	}

	/**
	 * 修改
	 * @param memberAddr
	 * @param response
	 */
	@RequestMapping("update")
	public void updateMemberAddr(TbMemberAddr memberAddr,HttpServletResponse response,HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		memberAddr.setMemberId(tbMember.getMemberId());
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
	public void findPagerList(HttpServletResponse response,SearchPageUtil page,HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		if(tbMember != null) {
			Map<String, Object> params = page.getParams();
			params.put("memberIdBuy", tbMember.getMemberId());
			page.setParams(params);
			Grid dataGrid = memberAddrService.findMemberAddrList(page);
			writeJson2View(dataGrid, response);
		}
	}

	/**
	 * 列表查询
	 * @param pageUtil
	 * @param response
	 */
	@RequestMapping("list")
	public void findList(HttpServletResponse response,TbMemberAddr tbMemberAddr,HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		if(tbMember != null) {
			tbMemberAddr.setMemberId(tbMember.getMemberId());
			List<TbMemberAddr> list = memberAddrService.findMemberAddrList(tbMemberAddr);
			writeJson2View(list, response);
		}
	}
	
	/**
	 * 设置默认地址
	 * @param response
	 * @param tbMemberAddr
	 */
	@RequestMapping("toDefaultAddr")
	public void toDefaultAddr(HttpServletResponse response,TbMemberAddr tbMemberAddr,HttpSession session){
		TbMemberUser tbMember = (TbMemberUser)session.getAttribute("memberUser");
		if(tbMember != null) {
			tbMemberAddr.setMemberId(tbMember.getMemberId());
			String msg = memberAddrService.toDefaultAddr(tbMemberAddr);
			writeJson2View(msg, response);
		}
	}
	
}

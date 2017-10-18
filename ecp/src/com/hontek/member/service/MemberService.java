package com.hontek.member.service;


import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMember;
import com.hontek.member.model.TbMemberUser;
/**
 * <p>Title: 会员Service类</p>
 * <p>Description: 会员</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface MemberService {

	public String registerMember(TbMember member,TbMemberUser memberUser);
	
	//注册成功后并登陆
	public String registerMember2(TbMember member,TbMemberUser memberUser,HttpSession session);
	
	public String addMember(TbMember member);
	
	public String updateMember(TbMember member);
		
	public String deleteMember(String ids);
		
	public Grid findMemberList(SearchPageUtil pageUtil);
	
	public TbMember findMember(Integer levelId);
}

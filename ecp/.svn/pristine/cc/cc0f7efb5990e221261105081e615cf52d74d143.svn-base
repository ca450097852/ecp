package com.hontek.member.service;


import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberUser;;
/**
 * <p>Title: 会员用户Service类</p>
 * <p>Description: 会员用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface MemberUserService {

	public String addMemberUser(TbMemberUser memberUser);
	
	public String updateMemberUser(TbMemberUser memberUser);
		
	public String deleteMemberUser(String ids);
		
	public Grid findMemberUserList(SearchPageUtil pageUtil);
	
	public TbMemberUser loginMemberUser(TbMemberUser memberUser);
	
	public TbMemberUser findMemberUser(Integer memberId);
	//根据账号查找会员
	public TbMemberUser findMemberUserByAccount(String account);
	
	public String auditSts(String ids,String type);
	
}

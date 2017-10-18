package com.hontek.member.service;


import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberAddr;
/**
 * <p>Title: 会员地址Service类</p>
 * <p>Description: 会员地址</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface MemberAddrService {

	public String addMemberAddr(TbMemberAddr memberAddr);
	
	public String updateMemberAddr(TbMemberAddr memberAddr);
		
	public String deleteMemberAddr(String ids);
		
	public Grid findMemberAddrList(SearchPageUtil pageUtil);
	
	public Grid findMemberAddrList2(SearchPageUtil pageUtil);
	
	public List<TbMemberAddr> findMemberAddrList(TbMemberAddr tbMemberAddr);
	
	public String toDefaultAddr(TbMemberAddr tbMemberAddr);
}

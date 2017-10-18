package com.hontek.member.service;


import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbShop;
/**
 * <p>Title: 会员积分Service类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MemberLevelService {

	public String addMemberLevel(TbMemberLevel memberLevel,HttpSession session);
	
	public String updateMemberLevel(TbMemberLevel memberLevel);
		
	public String deleteMemberLevel(String ids);
		
	public Grid findMemberLevelList(SearchPageUtil pageUtil);

	public String auditSts(String ids,String type);
	
	public TbMemberLevel getMemberLevelById(Integer shopId);
	
	public TbMemberLevel getMemberLevelByLevelId(Integer levelId);
	
}

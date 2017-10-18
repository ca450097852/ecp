package com.hontek.member.service;


import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel2;
/**
 * <p>Title:推荐积分Service类</p>
 * <p>Description: 推荐积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MemberLevel2Service {

	public String addMemberLevel(TbMemberLevel2 memberLevel,HttpSession session);
	
	public String updateMemberLevel(TbMemberLevel2 memberLevel);
		
	public String deleteMemberLevel(String ids);
		
	public Grid findMemberLevelList(SearchPageUtil pageUtil);
	
	public TbMemberLevel2 findMemberLevelList(Integer memberId);

	public String auditSts(String ids,String type);
	
	public TbMemberLevel2 getMemberLevelById(Integer shopId);
	
}

package com.hontek.recommend.service;

import javax.servlet.http.HttpSession;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberLevel2;
import com.hontek.recommend.model.TbMemberRecommend;
/**
 * <p>Title:推荐记录Service类</p>
 * <p>Description: 推荐记录</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MemberRecommendService {

	public String addMemberRecommend(TbMemberRecommend recommend,HttpSession session);
	
	public String updateMemberRecommend(TbMemberRecommend recommend);

	public Grid findMemberRecommendList(SearchPageUtil pageUtil);
	
	public TbMemberRecommend findMemberRecommendList(Integer memberId);

	public String auditSts(String ids,String type);
	
	public TbMemberRecommend getMemberRecommendById(Integer shopId);
}

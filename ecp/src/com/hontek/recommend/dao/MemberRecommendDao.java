package com.hontek.recommend.dao;


import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbMemberLevel2;
import com.hontek.recommend.model.TbMemberRecommend;

/**
 * <p>Title: 推荐记录DAO类</p>
 * <p>Description: 推荐记录</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MemberRecommendDao extends BaseDao<TbMemberRecommend>{
	
	public int delete(Integer t);
	
	public TbMemberRecommend findById(@Param("mrId")Integer shopId);
	
}

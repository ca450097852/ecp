package com.hontek.member.dao;


import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.member.model.TbMemberLevel;

/**
 * <p>Title: 会员积分DAO类</p>
 * <p>Description: 会员积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MeberLevelDao extends BaseDao<TbMemberLevel>{
	
	public int delete(Integer t);
	
	public TbMemberLevel findById(@Param("levelId")Integer shopId);
	
	public TbMemberLevel findByLevelId(@Param("levelId")Integer levelId);
	
}

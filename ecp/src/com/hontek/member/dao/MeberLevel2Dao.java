package com.hontek.member.dao;


import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.member.model.TbMemberLevel;
import com.hontek.member.model.TbMemberLevel2;

/**
 * <p>Title: 等级积分DAO类</p>
 * <p>Description: 等级积分</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface MeberLevel2Dao extends BaseDao<TbMemberLevel2>{
	
	public int delete(Integer t);
	
	public TbMemberLevel2 findById(@Param("levelId")Integer shopId);
	
}

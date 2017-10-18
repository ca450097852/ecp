package com.hontek.member.dao;


import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.member.model.TbMemberUser;
/**
 * <p>Title: 会员用户DAO类</p>
 * <p>Description: 会员用户</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface MemberUserDao extends BaseDao<TbMemberUser>{
	
	/**
	 * 会员用户登录
	 * @param memberUser
	 * @return
	 */
	public List<TbMemberUser> loginMemberUser(TbMemberUser memberUser);
	
	public int updateByMemberId(TbMemberUser memberUser);
	
	public TbMemberUser findMemberUserByAccount(String account);
	
	
	
	
}

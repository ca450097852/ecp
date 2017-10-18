package com.hontek.member.dao;


import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.member.model.TbMemberAddr;
/**
 * <p>Title: 会员地址DAO类</p>
 * <p>Description: 会员地址</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface MemberAddrDao extends BaseDao<TbMemberAddr>{
	public int getCount2(SearchPageUtil page);
	
	public List<TbMemberAddr> findPageList2 (SearchPageUtil page) throws RuntimeException;
	
	
	/**
	 * 重置默认地址
	 * @param TbMemberAddr
	 * @return
	 * @throws RuntimeException
	 */
	public int updateaddrDefault(TbMemberAddr addr) throws RuntimeException;
	
	public List<TbMemberAddr> findList(TbMemberAddr tbMemberAddr) throws RuntimeException;
	
	public TbMemberAddr findById(Integer addrId);
	

}

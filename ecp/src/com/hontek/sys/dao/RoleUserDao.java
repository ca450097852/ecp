package com.hontek.sys.dao;


import com.hontek.comm.dao.BaseDao;
import com.hontek.sys.model.TsRoleUser;
/**
 * @ClassName: RoleUserDao
 * @Description: TODO(用户角色关系，Dao接口类)
 * @date 2015-6-29 下午04:27:08
 * @author qql
 * @version 1.0
 */
public interface RoleUserDao extends BaseDao<TsRoleUser>{
	/*
	 * 删除用户角色
	 */
	public int deleteRoleToUser(String userId);
}

package com.hontek.sys.dao;

import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.sys.model.TsSysCol;
/**
 * <p>Title: 栏目菜单DAO类</p>
 * <p>Description: 栏目菜单</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface SysColDao extends BaseDao<TsSysCol>{
	
	public List<TsSysCol> findList (TsSysCol sysCol) throws RuntimeException;
	
	/**
	 * 栏目树
	 * @param parentId
	 * @return
	 */
	public List<Tree> getSysColTree(int parentId);
	
	/**
	 * 读取超管菜单
	 * 
	 * @return
	 */
	public List<TsSysCol> findAdminCol(int parentId);
	
	
	/**
	 * 获取用户所拥有的栏目
	 * 必需参数
	 * @param parentId
	 * @param roleId
	 * @return
	 */
	public List<TsSysCol> findRolePurvByRoleId(TsSysCol sysCol);

}

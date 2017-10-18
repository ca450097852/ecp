/**
 * 
 */
package com.hontek.sys.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsEnterprise;
import com.hontek.sys.model.TsRole;
import com.hontek.sys.model.TsSysCol;

/**
 * @ClassName: RoleService
 * @Description: TODO(角色，service 接口)
 * @date 2015-6-30 上午09:47:11
 * @author qql
 * @version 1.0
 */
public interface RoleService {
	
	/**
	 * @Title: findRoleList
	 * @Description: TODO(分页查询)
	 * @param @param pageUtil
	 * @param @return 
	 * @return Grid    返回类型
	 * @throws
	 */
	public Grid findRoleList(SearchPageUtil pageUtil);
	
	
	/**
	 * 删除角色
	 */
	public String deleteRole(String ids);
	
	
	
	/**
	 * 添加
	 */
	public String addRole(TsRole role);
	
	/**
	 * 修改
	 */
	public String updateRole(TsRole role);

	
	/**
	 * 登录时读取权限
	 * @param parentId
	 * @return
	 */
	public List<TsSysCol> findLoginUserCol(String userId);
	
	/**
	 * 查询角色权限
	 */
	public List<Tree> findRolePurvTree(String loginUserId,int roleId,boolean isAdmin);
	
	/**
	 * 保存用户角色
	 */
	public String addRoleUser(String roleIds,String userId);
	
	/**
	 * 加载角色下拉列表
	 * 分配角色时调用
	 * @param entId
	 * @return
	 */
	public String getEntRoleCombo(int entId,String userId);
	
	/**
	 * 获取用户已经拥有的角色
	 */
	public String getUserRoleCombo(String userId);
	
	/**
	 * 获取用户所拥有的角色Id（多个角色id使用“,”相连）
	 * @param userId
	 * @return
	 */
	public String getUserRoleIds(String userId);
	
	/**
	 * 保存权限
	 */
	public String addRolePurv(int roleId,int entId, String colIds);
	
	/**
	 * 读取默认权限
	 * @return
	 */
	public List<Tree> findRolePurvDefTree(Integer typeId);
	
	/**
	 * 保存默认权限
	 * @param typeId
	 * @param colIds
	 * @return
	 */
	public String addRolePurvDef(Integer typeId, String colIds);
	
}

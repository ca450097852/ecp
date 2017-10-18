package com.hontek.sys.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Combo;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.dao.RoleDao;
import com.hontek.sys.dao.RolePurvDao;
import com.hontek.sys.dao.RolePurvDefDao;
import com.hontek.sys.dao.RoleUserDao;
import com.hontek.sys.dao.SysColDao;
import com.hontek.sys.model.TsEnterprise;
import com.hontek.sys.model.TsRole;
import com.hontek.sys.model.TsRolePurv;
import com.hontek.sys.model.TsRolePurvDef;
import com.hontek.sys.model.TsRoleUser;
import com.hontek.sys.model.TsSysCol;

/**
 * @ClassName: RoleServiceImpl
 * @Description: TODO(角色，serviceImpl实现类)
 * @date 2015-6-30 上午09:51:48
 * @author qql
 * @version 1.0
 */
@Service("roleService")
public class RoleServiceImpl extends BaseServiceImpl implements RoleService {
	
	@Autowired
	private RoleDao roleDao;
	
	@Autowired
	private SysColDao sysColDao;
	
	@Autowired
	private RoleUserDao roleUserDao;
	
	@Autowired
	RolePurvDao rolePurvDao;
	
	@Autowired
	RolePurvDefDao rolePurvDefDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	
	/**
	 * 分页查询角色
	 */
	@Override
	public Grid findRoleList(SearchPageUtil page) {
		int tatol = roleDao.getCount(page.getParams());


		List<TsRole> list = roleDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	
	/**
	 * 添加角色
	 */
	public String addRole(TsRole role) {
		String message = "添加角色成功!";
		try {
			role.setRoleId(sequenceService.getSequence("ts_role"));
			roleDao.add(role);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加角色失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除角色；
	 */
	@Override
	public String deleteRole(String ids) {
		String message = "删除成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					roleDao.delete(idArray[i]);
				}
				message = "删除成功!";
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	/**
	 * 修改角色
	 */
	public String updateRole(TsRole role) {
		String message = "修改角色成功!";
		try {
			roleDao.update(role);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改角色失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}
	
	/**
	 * 
	 * @Title: getSysColTree
	 * @Description: TODO(获取栏目树)
	 * @param @param parentId
	 * @param @return 
	 * @return List<Tree>    返回类型
	 * @throws
	 */
	public List<Tree> getSysColTree(int parentId){
		List<Tree> list = null;
		try {
			list = sysColDao.getSysColTree(parentId);
			Tree vo = null; 
			for(int i=0;i<list.size();i++){
				vo = list.get(i);
				vo.setChildren(this.getSysColTree(vo.getId()));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
		}
		return list;
	}

	/**
	 * 登录时读取权限
	 * @param parentId
	 * @return
	 */
	@Override
	public List<TsSysCol> findLoginUserCol(String userId) {
		if(userId==null||"".equals(userId)){
			return findAdminColmn(0);
		}else{
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("userId", userId);
			SearchPageUtil page = new SearchPageUtil();
			page.setPage(1);
			page.setRows(120);
			page.setParams(params);
			List<TsRoleUser> roleUsers = roleUserDao.findPageList(page);
			
			List<TsSysCol> list = new ArrayList<TsSysCol>();
			
			
			for (TsRoleUser tsRoleUser : roleUsers) {
				List<TsSysCol> listTemp = findByRoleId(0,tsRoleUser.getRoleId());
				for (TsSysCol tsRolePurv : listTemp) {
					if(!list.contains(tsRolePurv)){
						list.add(tsRolePurv);
					}
				}
			}
			return list;
		}
	}

	/**
	 * 读取超管权限
	 * @param parentId
	 * @return
	 */
	public List<TsSysCol> findAdminColmn(int parentId){
			List<TsSysCol> list = sysColDao.findAdminCol(parentId);
			for (TsSysCol col :list) {
				List<TsSysCol> child = findAdminColmn(col.getColId());
				col.setClildrenList(child);
			}
			return list;
		}
	
	/**
	 * 获取用户所拥有的栏目
	 * 
	 * @param roleId
	 * @return
	 */
	public List<TsSysCol> findByRoleId(int parentId, int roleId){
		TsSysCol paramSC = new TsSysCol();
		paramSC.set_parentId(parentId);
		paramSC.setRoleId(roleId);
		List<TsSysCol> list = sysColDao.findRolePurvByRoleId(paramSC);
		
		for (TsSysCol col :list) {
			List<TsSysCol> child = findByRoleId(col.getColId(), roleId);
			col.setClildrenList(child);
		}
		return list;
	}
	
	
	/**
	 * 保存用户角色
	 */
	@Override
	public String addRoleUser(String roleIds, String userId) {
		String jsonMsg = "保存用户角色成功!";
		try {
			//删除已有的角色
			roleUserDao.deleteRoleToUser(userId);
			if(roleIds!=null&&!"".equals(roleIds)){
				String [] roleIdArray  = roleIds.split(",");
				for (String roleId : roleIdArray) {
					TsRoleUser tsRoleUser = new TsRoleUser(Integer.valueOf(roleId),userId);
					tsRoleUser.setRuId(sequenceService.getSequence("ts_role_user"));
					
					roleUserDao.add(tsRoleUser);
				}
			}		
		} catch (Exception e) {
			e.printStackTrace();
			jsonMsg = "保存用户角色失败!"+e.getLocalizedMessage();
			logger.error(jsonMsg);
		}		
		return jsonMsg;
	}

	
	/**
	 * 查询角色权限
	 */
	@Override
	public List<Tree> findRolePurvTree(String loginUserId, int roleId,
			boolean isAdmin) {
		//查询当前用户所拥有的栏目-树形
		List<Tree> list = getSysColTree(0);
		System.out.println("查询角色权限"+list.size());
		if(!isAdmin){
			String roleIds = getUserRoleIds(loginUserId);
			List<Integer> colIds = rolePurvDao.findRolePurvListByRole(roleIds);		
			List<Tree> removeList = new ArrayList<Tree>();
			for (Tree tree : list) {
				boolean flag = false;
				for (Object object : colIds) {
					if(tree.getId()==object){
						flag = true;
					}
				}
				if(!flag){
					removeList.add(tree);
				}
			}	
			list.remove(removeList);
		}
		
		List<Integer> listP = rolePurvDao.findRolePurvListByRole(String.valueOf(roleId));
				
		for(int i=0;i<list.size();i++){
			Tree roleVo = list.get(i);
			List<Tree> childrens = list.get(i).getChildren();
			if(childrens!=null&&!childrens.isEmpty()){
				for(int k=0;k<childrens.size();k++){
					Tree children = childrens.get(k);
					for(int j=0;j<listP.size();j++){
						if(children.getId()==listP.get(j)){
							children.setChecked(true);
							break;
						}
					}
				}
			}else{
				for(int j=0;j<listP.size();j++){
					if(roleVo.getId()==listP.get(j)){
						roleVo.setChecked(true);
						break;
					}
				}
			}
		}
		
		return list;
	}

	/**
	 * 加载角色下拉列表
	 * 分配角色时调用
	 * @param entId
	 * @return
	 */
	@Override
	public String getEntRoleCombo(int entId, String userId) {
		System.out.println("entId@@@====="+entId);
		System.out.println("userIdd@@@====="+userId);
		TsRole param = new TsRole();
		param.setEntId(entId);
		param.setOut_roleIds(getUserRoleIds(userId));
		List<Combo> list = roleDao.getEntRoleCombo(param);		
		return getSelectOptions(list);
	}
	/**
	 * 保存权限
	 */
	@Override
	public String addRolePurv(int roleId, int entId, String colIds) {
		String jsonMsg = "保存权限成功!";
		try{			
			rolePurvDao.deleteByRoleId(roleId);			
			if(colIds!=null&&!"".equals(colIds)){
				String [] colIdArray = colIds.split(",");
				for (String colId : colIdArray) {
					TsRolePurv tsRolePurv = new TsRolePurv();
					tsRolePurv.setPurvId(sequenceService.getSequence("ts_role_purv"));
					tsRolePurv.setEntId(entId);
					tsRolePurv.setColId(Integer.valueOf(colId));
					tsRolePurv.setRoleId(roleId);
					rolePurvDao.add(tsRolePurv);
				}
			}
			}catch(Exception e){
				e.printStackTrace();
				jsonMsg = "保存权限异常!"+e.getLocalizedMessage();
				logger.error(jsonMsg);
			}		
		return jsonMsg;
	}

	/**
	 * 保存默认权限
	 * @param typeId
	 * @param colIds
	 * @return
	 */
	@Override
	public String addRolePurvDef(Integer typeId, String colIds) {
		String jsonMsg = "保存默认权限成功!";
		try{			
			rolePurvDefDao.deleteRolePurvDef(typeId);			
			if(colIds!=null&&!"".equals(colIds)){
				String [] colIdArray = colIds.split(",");
				for (String colId : colIdArray) {
					TsRolePurvDef tsRolePurv = new TsRolePurvDef();
					tsRolePurv.setPurvId(sequenceService.getSequence("ts_role_purv_def"));
					tsRolePurv.setColId(Integer.valueOf(colId));
					tsRolePurv.setTypeId(typeId);
					rolePurvDefDao.add(tsRolePurv);
				}
			}
			}catch(Exception e){
				e.printStackTrace();
				jsonMsg = "保存默认权限异常!"+e.getLocalizedMessage();
				logger.error(jsonMsg);
			}		
		return jsonMsg;
	}

	

	/**
	 * 读取默认权限
	 * @return
	 */
	@Override
	public List<Tree> findRolePurvDefTree(Integer typeId) {
		List<Tree> list = getSysColTree(0);
		
		TsRolePurvDef param = new TsRolePurvDef();
		param.setTypeId(typeId);
		List<Integer> typeList = rolePurvDefDao.findColIdByTypeId(param);
		
		for(int i=0;i<list.size();i++){
			Tree roleVo = list.get(i);
			List<Tree> childrens = list.get(i).getChildren();
			if(childrens!=null&&!childrens.isEmpty()){
				for(int k=0;k<childrens.size();k++){
					Tree children = childrens.get(k);
					for(int j=0;j<typeList.size();j++){
						if(children.getId()==typeList.get(j)){
							children.setChecked(true);
							break;
						}
					}
				}
			}else{
				for(int j=0;j<typeList.size();j++){
					if(roleVo.getId()==typeList.get(j)){
						roleVo.setChecked(true);
						break;
					}
				}
			}
		}		
		return list;
	}

	

	/**
	 * 获取用户已经拥有的角色
	 */
	@Override
	public String getUserRoleCombo(String userId) {
		String roleIds = getUserRoleIds(userId);
		if(!"".equals(roleIds)){
			TsRole param = new TsRole();
			param.setIn_roleIds(roleIds);
			List<Combo> list2 = roleDao.getEntRoleCombo(param);		
			return getSelectOptions(list2);
		}
		return "";
	}

	/**
	 * 获取用户所拥有的角色Id（多个角色id使用“,”相连）
	 * @param userId
	 * @return
	 */
	@Override
	public String getUserRoleIds(String userId) {
		TsRoleUser param = new TsRoleUser();
		param.setUserId(userId);
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userId", userId);
		SearchPageUtil page = new SearchPageUtil();
		page.setPage(1);
		page.setRows(200);
		page.setParams(params);
		
		List<TsRoleUser> list = roleUserDao.findPageList(page);
		StringBuffer buffer = new StringBuffer("");
		for (TsRoleUser tsRoleUser : list) {
			buffer.append(tsRoleUser.getRoleId());
			buffer.append(",");
		}
		String roleIds = buffer.toString();
		if(roleIds.endsWith(",")){
			roleIds = roleIds.substring(0,roleIds.length()-1);
		}		
		return roleIds;
	}

}

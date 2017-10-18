package com.hontek.sys.dao;


import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.sys.model.TsRolePurvDef;
/**
 * @ClassName: RolePurvDefDao
 * @Description: TODO(默认权限表，Dao接口类)
 * @date 2015-6-29 下午04:27:08
 * @author qql
 * @version 1.0
 */
public interface RolePurvDefDao extends BaseDao<TsRolePurvDef>{
	
	/**
	 * 查询默认权限
	 * 必需：TsRolePurvDef.typeId
	 */
	public List<Integer> findColIdByTypeId(TsRolePurvDef o);
	
	
	//清空已有记录
	public int deleteRolePurvDef(int typeId);
}

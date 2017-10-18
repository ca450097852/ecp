package com.hontek.sys.dao;


import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.sys.model.TsEnterprise;
/**
 * @ClassName: EnterpriseDao
 * @Description: TODO(机构，Dao接口类)
 * @date 2015-6-29 下午04:27:08
 * @author qql
 * @version 1.0
 */
public interface EnterpriseDao extends BaseDao<TsEnterprise>{
	
	public List<Tree> getEntTree(int parentId);
}

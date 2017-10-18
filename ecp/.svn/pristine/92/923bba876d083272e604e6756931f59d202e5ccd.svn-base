package com.hontek.sys.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.model.TsEnterprise;

public interface EnterpriseService {

	public String addEnterprise(TsEnterprise enterprise);
	
	public String updateEnterprise(TsEnterprise enterprise);
		
	public String deleteEnterprise(String ids);
	
	public Grid findEnterpriseList(SearchPageUtil pageUtil);
	
	public List<Tree> getEntTree(int parentId);
	
	/**
	 * 根据机构账号查询机构
	 * @param account
	 * @return
	 */
	public TsEnterprise findEnterpriseByAccount(String account);
}

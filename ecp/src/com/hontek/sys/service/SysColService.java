package com.hontek.sys.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.sys.model.TsSysCol;
/**
 * <p>Title: 栏目菜单Service接口类</p>
 * <p>Description: 栏目菜单</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface SysColService {

	public String addSysCol(TsSysCol sysCol);
	
	public String deleteSysCol(String ids);

	public String updateSysCol(TsSysCol sysCol);

	public List<Tree> findSysColTreeList(Integer parentId);
	
	public Grid findSysColList(TsSysCol sysCol);

}

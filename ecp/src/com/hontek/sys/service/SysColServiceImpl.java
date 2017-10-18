package com.hontek.sys.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.sys.dao.SysColDao;
import com.hontek.sys.model.TsSysCol;

@Service("sysColService")
public class SysColServiceImpl implements SysColService {

	@Autowired
	private SysColDao sysColDao;
	
	@Autowired
	private SequenceService sequenceService;
	
	Logger logger = Logger.getLogger(this.getClass());
	
	public String addSysCol(TsSysCol sysCol) {
		String message = "添加栏目菜单成功!";
		try {
			sysCol.setColId(sequenceService.getSequence("ts_sys_Col"));
			sysColDao.add(sysCol);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加栏目菜单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	public String deleteSysCol(String ids) {
		int count = 0;
		String message = "删除栏目菜单成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						sysColDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除栏目菜单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}



	public String updateSysCol(TsSysCol sysCol) {
		String message = "修改栏目菜单成功!";
		try {
			sysColDao.update(sysCol);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改栏目菜单失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	
	/**
	 * 列表查询
	 */
	public Grid findSysColList(TsSysCol sysCol) {		
		

		List<TsSysCol> list = sysColDao.findList(null);
		
		int tatol = list.size();
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}
	

	/**
	 * 查询
	 */
	public List<Tree> findSysColTreeList(Integer parentId) {
		Tree rootTree = new Tree(0, "根菜单"); 
		List<Tree> treeList = new ArrayList<Tree>();
		treeList.add(rootTree);		
		List<TsSysCol> list = sysColDao.findList(new TsSysCol(0));	
		for (TsSysCol tsSysCol : list) {
			Tree tree = new Tree(tsSysCol.getColId(), tsSysCol.getColName());
			tree.setChildren(changeSysColTreeList(sysColDao.findList(new TsSysCol(tsSysCol.getColId()))));
			treeList.add(tree);
		}	
		return treeList;
	}
	
	
	public List<Tree> changeSysColTreeList(List<TsSysCol> list) {
		List<Tree> treeNodeList = new ArrayList<Tree>();
		for (TsSysCol tsSysCol : list) {
			Tree tree = new Tree(tsSysCol.getColId(), tsSysCol.getColName());
			treeNodeList.add(tree);
		}
		return treeNodeList;
	}
	
}

package com.hontek.sys.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Combo;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.dao.EntTypeDao;
import com.hontek.sys.model.TsEntType;
/**
 * <p>Title: 机构类型Service实现类</p>
 * <p>Description: 机构类型</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
@Service("entTypeService")
public class EntTypeServiceImpl extends BaseServiceImpl implements EntTypeService {

	private EntTypeDao entTypeDao;
	
	@Autowired
	public void setEntTypeDao(EntTypeDao entTypeDao) {
		this.entTypeDao = entTypeDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加机构类型
	 */
	public String addEntType(TsEntType entType) {
		String message = "添加机构类型成功!";
		try {
			entType.setTypeId(sequenceService.getSequence("ts_ent_type"));
			entTypeDao.add(entType);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加机构类型失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除机构类型
	 */
	public String deleteEntType(String ids) {
		int count = 0;
		String message = "删除机构类型成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						entTypeDao.delete(id);
						count++;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除机构类型失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 查询
	 */
	public List<Combo> findEntTypeComboList() {
		List<TsEntType> list = entTypeDao.findPageList(null);
		List<Combo> comboList = new ArrayList<Combo>();
		for (TsEntType entType : list) {				
			Combo combo = new Combo(entType.getTypeId(), entType.getTypeName());
			comboList.add(combo);
		}
		return comboList;
	}
	
	/**
	 * 分页查询
	 */
	public Grid findEntTypeList(SearchPageUtil page) {		
		
		
		int tatol = entTypeDao.getCount(page.getParams());


		List<TsEntType> list = entTypeDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改机构类型
	 */
	public String updateEntType(TsEntType entType) {
		String message = "修改机构类型成功!";
		try {
			entTypeDao.update(entType);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改机构类型失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

}

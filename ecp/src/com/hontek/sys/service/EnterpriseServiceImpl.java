package com.hontek.sys.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.comm.base.BaseServiceImpl;
import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.dao.EnterpriseDao;
import com.hontek.sys.model.TsEnterprise;
/**
 * @ClassName: EnterpriseServiceImpl
 * @Description: TODO(机构，serviceImpl实现类)
 * @date 2015-6-29 下午04:37:40
 * @author qql
 * @version 1.0
 */
@Service("enterpriseService")
public class EnterpriseServiceImpl extends BaseServiceImpl implements EnterpriseService {

	private EnterpriseDao enterpriseDao;
	
	@Autowired
	public void setEnterpriseDao(EnterpriseDao enterpriseDao) {
		this.enterpriseDao = enterpriseDao;
	}
	
	@Autowired
	private SequenceService sequenceService;

	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加机构
	 */
	public String addEnterprise(TsEnterprise enterprise) {
		String message = "添加机构成功!";
		try {
			enterprise.setEntId(sequenceService.getSequence("ts_enterprise"));
			enterpriseDao.add(enterprise);
		} catch (Exception e) {
			e.printStackTrace();
			message = "添加机构失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除机构
	 */
	public String deleteEnterprise(String ids) {
		int count = 0;
		String message = "删除机构成功!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						enterpriseDao.delete(id);
						count++;
					}
				}
				message = "成功删除"+count+"机构!";
			}
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除机构失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}


	
	/**
	 * 分页查询
	 */
	public Grid findEnterpriseList(SearchPageUtil page) {		
		
		
		int tatol = enterpriseDao.getCount(page.getParams());


		List<TsEnterprise> list = enterpriseDao.findPageList(page);
						
		Grid dataGrid = new Grid(tatol, list);
		
		return dataGrid;
	}

	/**
	 * 修改机构
	 */
	public String updateEnterprise(TsEnterprise enterprise) {
		String message = "修改机构成功!";
		try {
			enterpriseDao.update(enterprise);
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改机构失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 根据机构账号查询机构
	 * @param account
	 * @return
	 */
	@Override
	public TsEnterprise findEnterpriseByAccount(String account) {
		TsEnterprise enterprise = null;
		try {
			if(account!=null&&!"".equals(account)){
				SearchPageUtil page = new SearchPageUtil();
				
				Map<String, Object> params = new HashMap<String, Object>();
				params.put("account", account);
				
				page.setParams(params);
				
				List<TsEnterprise> list = enterpriseDao.findPageList(page);
				if(list.size()>0){
					enterprise = list.get(0);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return enterprise;
	}

	/**
	 * 机构下拉
	 */
	@Override
	public List<Tree> getEntTree(int parentId) {
		List<Tree> list = enterpriseDao.getEntTree(parentId);
		Tree vo = null; 
		for(int i=0;i<list.size();i++){
			vo = list.get(i);
			vo.setChildren(this.getEntTree(vo.getId()));
		}
		return list;
	}

}

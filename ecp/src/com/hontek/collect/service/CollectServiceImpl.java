package com.hontek.collect.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hontek.collect.dao.CollectDao;
import com.hontek.collect.model.Collect;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.DateUtil;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.sys.service.SequenceService;


/**
 * <p>Title: 收藏表Service实现类</p>
 * <p>Description: 收藏表</p>
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
@Service("collectService")
public class CollectServiceImpl implements CollectService{
	
	private CollectDao collectDao;
	
	@Autowired
	public void setCollectDao(CollectDao collectDao) {
		this.collectDao = collectDao;
	}
	@Autowired
	private SequenceService sequenceService;
	Logger logger = Logger.getLogger(this.getClass());
	
	/**
	 * 添加
	 */
	public String addCollect(Collect collect, HttpSession session) {
		String msg="添加失败！";
		try{
			collect.setCollectId(sequenceService.getSequence("tb_collect"));
			collect.setCreateTime(DateUtil.formatDateTime());
			collectDao.add(collect);
			msg="添加成功";
		} catch (Exception e) {
			e.printStackTrace();
			msg = "添加失败!"+e.getMessage();
			logger.error(msg);
		}
		return msg;
		
	}

	/**
	 * 修改
	 */
	public String updateCollect(Collect collect) {
		String message = "修改失败!";
		try {
			collectDao.update(collect);
			message="修改成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "修改失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 删除
	 */
	public String deleteCollect(String ids) {
		int count = 0;
		String message = "删除失败!";
		try {
			if(ids!=null&&!"".equals(ids)){
				String [] idArray = ids.split(",");
				for (int i = 0; i < idArray.length; i++) {
					String id = idArray[i];
					if(id!=null){
						collectDao.delete(Integer.parseInt(id));
						count++;
					}
				}
			}
			
			message="删除成功！";
		} catch (Exception e) {
			e.printStackTrace();
			message = "删除失败!"+e.getMessage();
			logger.error(message);
		}
		return message;
	}

	/**
	 * 分页查询
	 */
	public Grid findCollectList(SearchPageUtil pageUtil) {
		int tatol = collectDao.getCount(pageUtil);
		List<Collect> list = collectDao.findPageList(pageUtil);
		Grid dataGrid = new Grid(tatol, list);
		return dataGrid;
	}

	
	public Collect findCollectList(Integer memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public String auditSts(String ids, String type) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Collect getCollectById(Integer shopId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public List<Collect> findCollectList(Collect collect) {
		
		return collectDao.findList(collect);
		
	}

	@Override
	public int getCount(SearchPageUtil pageUtil) {
		return collectDao.getCount(pageUtil);
	}


}

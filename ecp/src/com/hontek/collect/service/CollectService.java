package com.hontek.collect.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.hontek.collect.model.Collect;
import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;


/**
 * <p>Title: 收藏表Service类</p>
 * <p>Description: 收藏表</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author cjn
 * @version 1.0
 */
public interface CollectService {

	public String addCollect(Collect collect,HttpSession session);
	
	public String updateCollect(Collect collect);
		
	public String deleteCollect(String ids);
		
	public Grid findCollectList(SearchPageUtil pageUtil);
	
	public List<Collect> findCollectList(Collect collect);
	
	public Collect findCollectList(Integer memberId);

	public String auditSts(String ids,String type);
	
	public Collect getCollectById(Integer shopId);
	
	public int getCount(SearchPageUtil pageUtil);
}

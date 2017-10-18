package com.hontek.theme.dao;

import java.util.List;
import java.util.Map;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.theme.model.ThemeGoods;


public interface ThemeGoodsDao extends BaseDao<ThemeGoods> {
	public int delete(Integer t);
	
	
	List<ThemeGoods> findAllList(Map<Object,Object> map);


	public void delete2(int parseInt);
	
	
	
}
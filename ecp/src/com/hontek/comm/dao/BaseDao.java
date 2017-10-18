package com.hontek.comm.dao;

import java.util.List;
import java.util.Map;

import com.hontek.comm.util.SearchPageUtil;


/**
 * <p>Title: BASEDAO类</p>
 * <p>Description: DAO基类</p>
 * <p>Copyright: Copyright (c) 2015</p>
 * <p>Company: **公司</p>
 * @author dream
 * @version 1.0
 */
public interface BaseDao<T> {

	/**
	 * 添加
	 * @param t
	 * @return
	 * @throws RuntimeException
	 */
	public int add(T t) throws RuntimeException;
	
	/**
	 * 删除
	 * @param t
	 * @return
	 * @throws RuntimeException
	 */
	public int delete(String t) throws RuntimeException;

	/**
	 * 修改
	 * @param t
	 * @return
	 * @throws RuntimeException
	 */
	public int update(T t) throws RuntimeException;
	
	
	/**
	 * 统计总数
	 * @param t
	 * @return
	 */
	public int getCount(T t);
	
	public int getCount(Map<String, Object> map);
	
	public int getCount(SearchPageUtil page);
	
	public List<T> findPageList (SearchPageUtil page) throws RuntimeException;
	
	public List<T> findPageList1 (SearchPageUtil page) throws RuntimeException;
	
	
	public List<T> findObjectList (Integer id) throws RuntimeException;

	
	/**
	 * 查询名称是否已存在
	 * @param name
	 * @return
	 */
	public int findNameExists(String name);

}

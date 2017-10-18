package com.hontek.order.dao;

import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbShoppingcart;

/**
 * @ClassName: ShoppingcartDao
 * @Description: TODO(购物车 Dao接口)
 * @date 2015-7-10 上午10:38:35
 * @author qql
 * @version 1.0
 */
public interface ShoppingcartDao extends BaseDao<TbShoppingcart>{
	
	public int getCount2(SearchPageUtil page);
	
	
	public int deleteByShop(SearchPageUtil page);

	
	public List<TbShoppingcart> findPageList2 (SearchPageUtil page) throws RuntimeException;
	
	/**
	 * 修改（购物车）商品数量
	 * @param t
	 * @return
	 * @throws RuntimeException
	 */
	public int updateGoodsCount(TbShoppingcart t) throws RuntimeException;
	
	public List<TbShoppingcartTDO> findShoppingcartList(TbShoppingcartTDO tbShoppingcartTDO) throws RuntimeException;
	
	public List<TbShoppingcartTDO> findShoppingcartListByIds(List<Integer> ids) throws RuntimeException;
	
}
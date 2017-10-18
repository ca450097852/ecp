package com.hontek.order.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.domain.TbShoppingcartGroupByShopIdTDO;
import com.hontek.order.domain.TbShoppingcartTDO;
import com.hontek.order.model.TbShoppingcart;
/**
 * 
 * @ClassName: ShoppingcartService
 * @Description: TODO(购物车表 service)
 * @date 2015-6-26 下午04:30:14
 * @author qql
 * @version 1.0
 */
public interface ShoppingcartService {

	public String addShoppingcart(TbShoppingcart cart);
	
	public String deleteShoppingcart(String ids);
	
	public String deleteShoppingcart2(String ids,int memberId);

	public String updateShoppingcart(TbShoppingcart cart);
	
	/**
	 * 修改（购物车）商品数量
	 */
	public void updateGoodsCount(TbShoppingcart cart);
	
	/**
	 * 分页查询
	 */
	public Grid findShoppingcartList(SearchPageUtil page);
	
	/**
	 * 分页查询2
	 */
	public Grid findShoppingcartList2(SearchPageUtil page);
	
	public List<TbShoppingcartGroupByShopIdTDO> findShoppingcartList(TbShoppingcartTDO tbShoppingcartTDO);
	
	/**
	 * 根据ids 查询
	 * @param ids
	 * @return
	 */
	public List<TbShoppingcartGroupByShopIdTDO> findShoppingcartList(List<Integer> ids);
	
	
	public List<TbShoppingcartTDO> findShoppingcartListByIds(List<Integer> ids) throws RuntimeException;

	



}

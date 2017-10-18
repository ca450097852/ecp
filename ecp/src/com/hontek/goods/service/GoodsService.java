package com.hontek.goods.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.JsonMsg;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoods;
import com.hontek.member.model.TbMember;

/**
* 
* <p>Title: 商品Service接口</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface GoodsService {

	Grid findPageList(SearchPageUtil page);
	
	Grid findPageList1(SearchPageUtil page);
	
	Grid findListOrderBy(SearchPageUtil page);

	JsonMsg addGoods(TbGoods goods,String modelStr);

	JsonMsg updateGoods(TbGoods goods);

	String deleteGoods(String ids);

	TbGoods getGoodsById(String goodsId);
	
	Grid getGoodsByTypeIds(String page,String rows,String typeIds,String orderBy,String brandId,String priceSql,String goodsName,String shopId);
	
	List<TbGoods> getGoodsByGoodsIds(String goodsIds,String orderBy);

	String auditGoods(String ids, String state);
	
	/**
	 * 商品上下架
	 * @param type	1：上架	2：下架
	 * @param ids
	 * @return
	 */
	String updateGoodsforupperLower(String type, String ids,TbMember member);
	
	String updateGoodsforInventory(Integer inventory, String ids,TbMember member);
	
	/**
	 * 获取店铺热推
	 * @param shopId
	 * @param number
	 * @return
	 */
	List<TbGoods> ListShopHot(Integer shopId,Integer number);
	
	String updateSelective(TbGoods tbGoods);
	
	List<Tree> findForTree(int typeId,int themeId);

	Grid findPageList2(SearchPageUtil page);

	List<TbGoods> ListShopGoods(Integer shopId);

	List<TbGoods> ListShopGoodsByTypeId(Integer shopId, Integer typeId);


}
package com.hontek.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoods;

/**
 * 
 * <p>
 * Title: 商品DAO接口
 * </p>
 * <p>
 * Description:
 * </p>
 * <p>
 * Copyright: Copyright (c) 2015
 * </p>
 * <p>
 * Company: **公司
 * </p>
 * 
 * @author lzk
 * @version 1.0
 */
public interface GoodsDao extends BaseDao<TbGoods> {

	TbGoods getGoodsById(@Param(value = "goodsId") String goodsId);

	List<TbGoods> findListOrderBy(SearchPageUtil page);

	int getCountOrderBy(SearchPageUtil page);

	List<TbGoods> getGoodsByTypeIds(@Param(value = "page") String page,
			@Param(value = "rows") String rows,
			@Param(value = "typeIds") String typeIds,
			@Param(value = "orderBy") String orderBy,
			@Param(value = "brandId") String brandId,
			@Param(value = "priceSql") String priceSql,
			@Param(value = "goodsName") String goodsName,
			@Param(value = "shopId") String shopId);

	int getGoodsByTypeIdsCount(@Param(value = "typeIds") String typeIds,
			@Param(value = "orderBy") String orderBy,
			@Param(value = "brandId") String brandId,
			@Param(value = "goodsName") String goodsName,
			@Param(value = "shopId") String shopId);

	List<TbGoods> getGoodsByGoodsIds(@Param(value = "goodsIds") String typeIds,
			@Param(value = "orderBy") String orderBy);

	/**
	 * 审核商品
	 * 
	 * @param ids
	 * @param state
	 */
	void auditGoods(@Param("ids") String ids, @Param("state") String state);

	/**
	 * 商品库存设置
	 * 
	 * @param ids
	 */
	void upGoods(@Param("ids") String ids, @Param("inventory") Integer inventory);
	
	//获取所有改shopId商店下的商品
	List<TbGoods> ListShopGoods(@Param("shopId")Integer shopId);
	
	void updateSelective(TbGoods tbGoods);
	
	List<Tree> findForTree(@Param("typeId")Integer typeId,@Param("themeId")Integer themeId);

	List<TbGoods> findPageList2(SearchPageUtil page);

	List<TbGoods> ListShopGoodsByTypeId(@Param("shopId")Integer shopId, @Param("typeId")Integer typeId);

	List<TbGoods> findPageList3(SearchPageUtil page);


}
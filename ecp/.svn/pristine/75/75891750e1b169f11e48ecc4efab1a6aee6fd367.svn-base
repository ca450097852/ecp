package com.hontek.goods.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbColumnGoods;

/**
* 
* <p>Title: 栏目商品关系Service接口</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface ColumnGoodsService {

	Grid findPageList(SearchPageUtil page);

	String addColumnGoods(int goodsId,String ids);

	String updateColumnGoods(TbColumnGoods columnGoods);

	String deleteColumnGoods(String ids);
	/**
	 * 根据产品ID查找所有的关系
	 * @param goodsId
	 * @return
	 */
	List<TbColumnGoods> findAllByGoodsId(String goodsId);
	
	List<String> findGoodsIdByColumnIds(String columnIds);

}
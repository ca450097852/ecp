package com.hontek.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.goods.model.TbColumnGoods;

/**
* 
* <p>Title: 栏目商品关系DAO接口</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface ColumnGoodsDao extends BaseDao<TbColumnGoods>{

	List<TbColumnGoods> findAllByGoodsId(@Param("goodsId")String goodsId);
	
	List<String> findGoodsIdByColumnIds(@Param("columnIds")String columnIds);

	void deleteColumnByGoodsId(@Param("goodsId")int goodsId);

}
package com.hontek.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.goods.model.TbGoodsModel;

/**
* 
* <p>Title: 商品库存变化记录DAO接口</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface GoodsModelDao extends BaseDao<TbGoodsModel>{

	List<TbGoodsModel> findModelList(@Param("goodsId")String goodsId);
	
	TbGoodsModel findByPrimaryId(@Param("modelId")Integer modelId);

}
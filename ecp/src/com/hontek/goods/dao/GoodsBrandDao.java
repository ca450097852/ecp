package com.hontek.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.goods.model.TbGoodsBrand;
/**
 * 
* <p>Title: 商品品牌DAO类</p>
* <p>Description: 商品品牌</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface GoodsBrandDao extends BaseDao<TbGoodsBrand>{

	List<TbGoodsBrand> getBrandList();
	
	List<Tree> findForTree();

}

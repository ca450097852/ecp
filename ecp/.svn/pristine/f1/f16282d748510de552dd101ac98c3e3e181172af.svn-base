package com.hontek.goods.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsType;
/**
 * 
* <p>Title: 商品分类DAO接口 </p>
* <p>Description: 商品分类</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface GoodsTypeDao extends BaseDao<TbGoodsType>{

	List<TbGoodsType> findList(SearchPageUtil pageUtil);
	
	List<TbGoodsType> findAllList(Map<Object,Object> map);
	
	/**
	 * 
	 * @param upcateId	父ID	
	 * @param state		状态
	 * @return
	 */
	List<Tree> findForTree(@Param("upcateId") int upcateId, @Param("sts")int sts);

	TbGoodsType getGoodsTypeById(@Param("typeId")String typeId);
	
	List<TbGoodsType> getGoodsTypeByUpcateId(@Param("upcateId")String upcateId);

	List<TbGoodsType> getGoodsTypeByShopId(@Param("shopId")String shopId);


}

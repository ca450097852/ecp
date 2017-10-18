package com.hontek.goods.service;

import java.util.List;

import com.hontek.comm.model.Grid;
import com.hontek.comm.model.Tree;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.goods.model.TbGoodsType;
/**
 * 
* <p>Title: 商品分类服务层接口</p>
* <p>Description: </p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface GoodsTypeService {

	Grid findList(SearchPageUtil pageUti);

	String addGoodsType(TbGoodsType goodsType);

	String deleteGoodsType(String ids);

	String updateGoodsType(TbGoodsType goodsType);

	List<Tree> getGoodsTypeTree(Integer upcateId);

	TbGoodsType getGoodsTypeById(String typeId);
	
	List<TbGoodsType> getGoodsTypeByUpcateId(String typeId);
	
	Grid getAllGoodsTypeTree();
	//获取商品类为父节点商品为子节点的商品树
	List<Tree> getGoodsTypeAndGoodsTree(Integer upcateId,Integer themeId);
	//根据商店id找该商品下的商品分类
	List<TbGoodsType> getGoodsTypeByShopId(String typeId);

}

package com.hontek.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.model.Tree;
import com.hontek.goods.model.TbColumn;
/**
 * 
* <p>Title: 商品栏目DAO接口</p>
* <p>Description: 商品栏目</p>
* <p>Copyright: Copyright (c) 2015</p>
* <p>Company: **公司</p>
* @author lzk
* @version 1.0
 */
public interface ColumnDao extends BaseDao<TbColumn>{

	List<Tree> getTree(@Param("parentId") Integer parentId);

}

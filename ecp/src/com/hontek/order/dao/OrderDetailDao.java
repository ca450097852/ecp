package com.hontek.order.dao;

import java.util.List;
import java.util.Map;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbOrderDetail;
/**
 * @ClassName: OrderDetailDao
 * @Description: TODO(订单详细信息，Dao接口类)
 * @date 2015-6-29 下午02:12:49
 * @author qql
 * @version 1.0
 */
public interface OrderDetailDao extends BaseDao<TbOrderDetail>{

	public List<TbOrderDetail> findPageListWithParam(SearchPageUtil page) ;	
	
	public List<TbOrderDetail> findListWithParam(Map<String,Object> params) ;	
	
	public TbOrderDetail findObjectById(Integer id) ;
}
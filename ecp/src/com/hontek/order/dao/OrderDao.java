package com.hontek.order.dao;

import java.util.List;

import com.hontek.comm.dao.BaseDao;
import com.hontek.comm.util.SearchPageUtil;
import com.hontek.order.model.TbOrder;
/**
 * @ClassName: OrderDao
 * @Description: TODO(订单信息，Dao接口类)
 * @date 2015-6-29 下午02:11:14
 * @author qql
 * @version 1.0
 */
public interface OrderDao extends BaseDao<TbOrder>{

	public List<TbOrder> findPageListWithParam(SearchPageUtil page);
	
	public Integer getCountWithParam(SearchPageUtil page);
	
	public TbOrder findOrderByOrderId(Integer orderId) throws RuntimeException;
}